// ================================================================
// TABLEFLOW — PayFast Webhook Handler
// Supabase Edge Function
// Coetzee Data AI Consultants Pty (Ltd) | Reg. 2025/428324/07
//
// Deploy this to Supabase:
// 1. Go to Supabase → Edge Functions → New Function
// 2. Name it: payfast-webhook
// 3. Paste this entire file
// 4. Deploy
//
// This function:
// - Receives PayFast ITN (Instant Transaction Notification)
// - Validates the payment signature
// - Updates the order status in the database
// - Records the platform fee earned by TableFlow
// - Sends real-time update to kitchen screen
// ================================================================

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL  = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_KEY  = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

// YOUR PayFast credentials (Coetzee Data AI Consultants)
const PAYFAST_MERCHANT_ID  = Deno.env.get('PAYFAST_MERCHANT_ID')!;
const PAYFAST_PASSPHRASE   = Deno.env.get('PAYFAST_PASSPHRASE')!;
const PLATFORM_FEE_PCT     = 0.005; // 0.5%

const db = createClient(SUPABASE_URL, SUPABASE_KEY);

Deno.serve(async (req: Request) => {
  // PayFast sends POST with URL-encoded body
  if(req.method !== 'POST'){
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const body = await req.text();
    const params = new URLSearchParams(body);
    const data: Record<string,string> = {};
    params.forEach((v,k) => data[k] = v);

    console.log('PayFast ITN received:', JSON.stringify(data));

    // ── 1. VALIDATE SIGNATURE ────────────────────────────────────
    const isValid = await validatePayFastSignature(data, PAYFAST_PASSPHRASE);
    if(!isValid){
      console.error('Invalid PayFast signature');
      return new Response('Invalid signature', { status: 400 });
    }

    // ── 2. CHECK PAYMENT STATUS ──────────────────────────────────
    const pfPaymentId = data.pf_payment_id;
    const mpPaymentId = data.m_payment_id; // our order ID
    const paymentStatus = data.payment_status; // COMPLETE | FAILED | PENDING
    const amountGross = parseFloat(data.amount_gross || '0');
    const amountFee = parseFloat(data.amount_fee || '0');
    const amountNet = parseFloat(data.amount_net || '0');

    // Custom fields we passed
    const tableNum = data.custom_int1;
    const restaurantName = data.custom_str1;
    const platformFeeStr = data.custom_str2?.replace('platform_fee:','');
    const restaurantAmountStr = data.custom_str3?.replace('restaurant_amount:','');
    const tip = parseFloat(data.custom_str4?.replace('tip:','') || '0');

    const platformFee = parseFloat(platformFeeStr || '0');
    const restaurantAmount = parseFloat(restaurantAmountStr || '0');

    if(paymentStatus === 'COMPLETE'){
      // ── 3. UPDATE ORDER STATUS ─────────────────────────────────
      const { data: order, error: orderErr } = await db
        .from('orders')
        .select('id, restaurant_id, table_id')
        .eq('id', mpPaymentId) // assuming m_payment_id = order.id
        .single();

      if(!orderErr && order){
        // Mark order as paid
        await db.from('orders').update({
          status: 'new', // moves to kitchen
          paid_at: new Date().toISOString(),
        }).eq('id', order.id);

        // Update table status
        if(order.table_id){
          await db.from('restaurant_tables').update({
            status: 'active',
            current_bill: amountGross,
          }).eq('id', order.table_id);
        }

        // ── 4. RECORD PAYMENT ───────────────────────────────────
        await db.from('payments').upsert({
          order_id: order.id,
          restaurant_id: order.restaurant_id,
          amount: amountGross,
          tip_amount: tip,
          method: 'payfast',
          status: 'complete',
          payfast_pf_payment_id: pfPaymentId,
          payfast_payment_status: paymentStatus,
          reference: mpPaymentId,
        }, { onConflict: 'reference' });

        // ── 5. RECORD PLATFORM FEE EARNED ──────────────────────
        await db.from('platform_earnings').insert({
          payment_reference: mpPaymentId,
          restaurant_id: order.restaurant_id,
          gross_amount: amountGross,
          platform_fee: platformFee,
          restaurant_amount: restaurantAmount,
          payfast_fee: amountFee,
        });

        // ── 6. UPDATE DAILY SUMMARY ─────────────────────────────
        const today = new Date().toISOString().split('T')[0];
        await db.from('daily_summaries').upsert({
          restaurant_id: order.restaurant_id,
          summary_date: today,
          total_revenue: amountGross,
          total_orders: 1,
          total_tips: tip,
          avg_order_value: amountGross,
        }, {
          onConflict: 'restaurant_id,summary_date',
          ignoreDuplicates: false,
        });

        console.log(`✅ Payment complete: R${amountGross} — Platform fee: R${platformFee}`);
      }
    }

    if(paymentStatus === 'FAILED'){
      console.log(`❌ Payment failed for order: ${mpPaymentId}`);
      await db.from('payments').upsert({
        reference: mpPaymentId,
        status: 'failed',
        payfast_pf_payment_id: pfPaymentId,
        payfast_payment_status: paymentStatus,
      }, { onConflict: 'reference' });
    }

    // PayFast expects "OK" response
    return new Response('OK', { status: 200 });

  } catch(e){
    console.error('Webhook error:', e);
    return new Response('Server error', { status: 500 });
  }
});

// ── SIGNATURE VALIDATION ─────────────────────────────────────────
async function validatePayFastSignature(
  data: Record<string,string>,
  passphrase: string
): Promise<boolean> {
  // Remove signature field
  const { signature, ...rest } = data;

  // Sort fields alphabetically and build query string
  const queryString = Object.keys(rest)
    .sort()
    .filter(k => rest[k] !== '')
    .map(k => `${k}=${encodeURIComponent(rest[k]).replace(/%20/g,'+')}`)
    .join('&');

  // Append passphrase
  const strToHash = passphrase
    ? `${queryString}&passphrase=${encodeURIComponent(passphrase)}`
    : queryString;

  // MD5 hash
  const hashBuffer = await crypto.subtle.digest(
    'MD5',
    new TextEncoder().encode(strToHash)
  );
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const computedSig = hashArray.map(b=>b.toString(16).padStart(2,'0')).join('');

  return computedSig === signature;
}

// ================================================================
// SUBSCRIPTION WEBHOOK (separate function)
// Deploy as: payfast-subscription-webhook
// Handles monthly SaaS fee payments from restaurants to TableFlow
// ================================================================
export async function subscriptionWebhook(req: Request){
  const body = await req.text();
  const params = new URLSearchParams(body);
  const data: Record<string,string> = {};
  params.forEach((v,k) => data[k] = v);

  const restaurantId = data.custom_str1;
  const plan = data.custom_str2;
  const paymentStatus = data.payment_status;

  if(paymentStatus === 'COMPLETE' && restaurantId){
    // Extend subscription by 1 month
    const nextBilling = new Date();
    nextBilling.setMonth(nextBilling.getMonth() + 1);

    await db.from('restaurants').update({
      plan: plan,
      // subscription_active: true,
      // subscription_next_billing: nextBilling.toISOString(),
    }).eq('id', restaurantId);

    console.log(`✅ Subscription payment received for restaurant: ${restaurantId}`);
  }

  return new Response('OK', { status: 200 });
}