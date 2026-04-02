<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TableFlow — Smart Restaurant Ordering</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<style>
:root {
  --brand:#1a1a2e; --brand2:#e8572a;
  --surface:#ffffff; --surface2:#f7f6f3;
  --text:#1a1a2e; --text2:#6b6860; --text3:#9e9b96;
  --border:#e2dfd8;
  --green:#2d9b5a; --green-bg:#edf7f2;
  --red:#d63f3f; --amber:#d97b1e; --amber-bg:#fef4e6;
  --blue:#2559c2; --blue-bg:#e8f1ff;
  --radius:14px; --radius-sm:8px;
  --shadow:0 2px 12px rgba(26,26,46,0.08);
  --shadow-lg:0 8px 40px rgba(26,26,46,0.14);
}
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'DM Sans',sans-serif;background:var(--surface2);color:var(--text);min-height:100vh;}

/* NAV */
.app-nav{background:var(--brand);display:flex;align-items:center;padding:0 0 0 24px;position:sticky;top:0;z-index:100;box-shadow:0 2px 20px rgba(0,0,0,0.3);}
.logo{font-family:'DM Serif Display',serif;color:#fff;font-size:22px;margin-right:32px;letter-spacing:-0.5px;}
.logo span{color:var(--brand2);}
.nav-tabs{display:flex;flex:1;}
.nav-tab{padding:18px 20px;color:rgba(255,255,255,0.55);font-size:13px;font-weight:500;cursor:pointer;border:none;background:none;transition:all 0.18s;position:relative;letter-spacing:0.2px;white-space:nowrap;}
.nav-tab:hover{color:rgba(255,255,255,0.85);background:rgba(255,255,255,0.05);}
.nav-tab.active{color:#fff;background:rgba(255,255,255,0.1);}
.nav-tab.active::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:var(--brand2);border-radius:2px 2px 0 0;}
.nav-right{display:flex;align-items:center;gap:12px;padding:0 20px;}
.restaurant-badge{background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.8);padding:6px 14px;border-radius:20px;font-size:12px;font-weight:500;}
.conn-dot{width:8px;height:8px;border-radius:50%;background:#666;display:inline-block;margin-right:6px;transition:background 0.3s;}
.conn-dot.connected{background:var(--green);}
.conn-dot.connecting{background:var(--amber);animation:blink 1s infinite;}
.conn-dot.error{background:var(--red);}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}

/* VIEWS */
.view{display:none;}.view.active{display:block;}

/* LOADING SCREEN */
.loading-screen{position:fixed;inset:0;background:var(--brand);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:999;transition:opacity 0.5s;}
.loading-screen.hidden{opacity:0;pointer-events:none;}
.loading-logo{font-family:'DM Serif Display',serif;font-size:48px;color:#fff;margin-bottom:16px;}
.loading-logo span{color:var(--brand2);}
.loading-msg{color:rgba(255,255,255,0.5);font-size:14px;margin-bottom:32px;}
.loading-bar{width:200px;height:3px;background:rgba(255,255,255,0.1);border-radius:2px;overflow:hidden;}
.loading-fill{height:100%;background:var(--brand2);border-radius:2px;animation:load-fill 2s ease forwards;}
@keyframes load-fill{from{width:0}to{width:100%}}

/* CUSTOMER */
.customer-wrap{display:grid;grid-template-columns:1fr 380px;min-height:calc(100vh - 57px);}
.menu-side{padding:28px 24px;overflow-y:auto;}
.menu-header{margin-bottom:24px;}
.restaurant-name{font-family:'DM Serif Display',serif;font-size:30px;letter-spacing:-0.5px;}
.restaurant-meta{display:flex;align-items:center;gap:16px;margin-top:6px;flex-wrap:wrap;}
.table-chip{background:var(--brand);color:#fff;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:500;}
.status-dot{width:8px;height:8px;background:var(--green);border-radius:50%;display:inline-block;}
.status-txt{font-size:13px;color:var(--text2);}
.search-bar{position:relative;margin-bottom:20px;}
.search-bar input{width:100%;padding:11px 16px 11px 40px;border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:14px;font-family:'DM Sans',sans-serif;background:var(--surface);outline:none;transition:border 0.15s;}
.search-bar input:focus{border-color:var(--brand);}
.search-icon{position:absolute;left:13px;top:50%;transform:translateY(-50%);color:var(--text3);font-size:16px;}
.cat-pills{display:flex;gap:8px;margin-bottom:24px;flex-wrap:wrap;}
.cat-pill{padding:7px 16px;border-radius:20px;border:1.5px solid var(--border);background:var(--surface);font-size:13px;font-weight:500;cursor:pointer;transition:all 0.15s;color:var(--text2);}
.cat-pill.active,.cat-pill:hover{background:var(--brand);color:#fff;border-color:var(--brand);}
.cat-section{margin-bottom:32px;}
.cat-title{font-size:11px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:var(--text3);margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--border);}
.menu-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.menu-item{background:var(--surface);border:1.5px solid var(--border);border-radius:var(--radius);padding:16px;cursor:pointer;transition:all 0.18s;position:relative;overflow:hidden;}
.menu-item:hover{border-color:var(--brand);box-shadow:var(--shadow);transform:translateY(-1px);}
.menu-item.in-cart{border-color:var(--green);background:#fafffc;}
.item-emoji{font-size:32px;margin-bottom:10px;display:block;}
.item-name{font-size:14px;font-weight:600;margin-bottom:4px;line-height:1.3;}
.item-desc{font-size:12px;color:var(--text2);margin-bottom:10px;line-height:1.5;}
.item-footer{display:flex;justify-content:space-between;align-items:center;}
.item-price{font-size:15px;font-weight:600;color:var(--brand2);}
.item-add-btn{width:28px;height:28px;border-radius:50%;background:var(--brand);color:#fff;border:none;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.15s;}
.item-add-btn:hover{background:var(--brand2);transform:scale(1.1);}
.item-qty-badge{position:absolute;top:10px;right:10px;background:var(--brand2);color:#fff;font-size:11px;font-weight:700;width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;}

/* CART */
.cart-side{background:var(--surface);border-left:1.5px solid var(--border);display:flex;flex-direction:column;position:sticky;top:57px;height:calc(100vh - 57px);}
.cart-header{padding:20px 20px 16px;border-bottom:1px solid var(--border);}
.cart-title{font-size:17px;font-weight:600;}
.cart-subtitle{font-size:12.5px;color:var(--text2);margin-top:2px;}
.cart-items{flex:1;overflow-y:auto;padding:12px 20px;}
.cart-empty{text-align:center;padding:40px 20px;color:var(--text3);}
.cart-empty-icon{font-size:40px;margin-bottom:10px;}
.cart-row{display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);}
.cart-row:last-child{border-bottom:none;}
.cart-item-name{flex:1;font-size:13.5px;font-weight:500;}
.cart-qty-ctrl{display:flex;align-items:center;gap:6px;}
.qty-btn{width:24px;height:24px;border-radius:50%;border:1.5px solid var(--border);background:none;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;transition:all 0.15s;color:var(--text);}
.qty-btn:hover{border-color:var(--brand);color:var(--brand);}
.qty-num{font-size:13px;font-weight:600;min-width:16px;text-align:center;}
.cart-item-price{font-size:13.5px;font-weight:600;min-width:52px;text-align:right;}
.cart-footer{padding:16px 20px;border-top:1px solid var(--border);}
.order-hist-label{font-size:11px;color:var(--text3);font-weight:600;text-transform:uppercase;letter-spacing:0.8px;margin-bottom:6px;}
.order-hist-row{display:flex;justify-content:space-between;font-size:12.5px;color:var(--text2);padding:3px 0;}
.tip-section{margin-bottom:14px;}
.tip-label{font-size:12px;color:var(--text2);margin-bottom:8px;font-weight:500;}
.tip-pills{display:flex;gap:6px;}
.tip-pill{flex:1;padding:7px 4px;border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:12px;font-weight:600;text-align:center;cursor:pointer;transition:all 0.15s;background:none;color:var(--text2);}
.tip-pill.active{border-color:var(--green);background:var(--green-bg);color:var(--green);}
.totals{margin-bottom:14px;}
.total-row{display:flex;justify-content:space-between;font-size:13px;padding:3px 0;color:var(--text2);}
.total-row.grand{font-size:16px;font-weight:700;color:var(--text);border-top:1px solid var(--border);padding-top:10px;margin-top:6px;}
.pay-btn{width:100%;padding:15px;border-radius:var(--radius);background:var(--brand2);color:#fff;border:none;font-size:15px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all 0.18s;}
.pay-btn:hover{background:#d44820;transform:translateY(-1px);box-shadow:0 4px 16px rgba(232,87,42,0.35);}
.pay-btn:disabled{background:var(--border);color:var(--text3);cursor:not-allowed;transform:none;box-shadow:none;}

/* TRACKER */
.tracker-wrap{margin-bottom:14px;}
.tracker-order{background:var(--surface2);border:1.5px solid var(--border);border-radius:var(--radius);padding:14px 16px;margin-bottom:10px;transition:all 0.4s;}
.tracker-order.ready-glow{border-color:var(--green);background:var(--green-bg);animation:glow-pulse 1.5s ease-in-out 3;}
@keyframes glow-pulse{0%,100%{box-shadow:none}50%{box-shadow:0 0 0 5px rgba(45,155,90,0.2)}}
.tracker-order-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;}
.tracker-order-id{font-size:13px;font-weight:700;}
.tracker-eta{font-size:11.5px;color:var(--text2);background:var(--surface);border:1px solid var(--border);padding:3px 9px;border-radius:10px;}
.tracker-eta.green{color:var(--green);border-color:var(--green);background:var(--green-bg);font-weight:700;}
.tracker-steps{display:flex;flex-direction:column;gap:0;}
.tracker-step{display:flex;align-items:flex-start;gap:10px;padding:6px 0;position:relative;}
.tracker-step:not(:last-child)::before{content:'';position:absolute;left:11px;top:26px;width:2px;height:calc(100% - 2px);background:var(--border);z-index:0;}
.tracker-step.done::before{background:var(--green);}
.tracker-step.active-step::before{background:linear-gradient(to bottom,var(--green) 30%,var(--border));}
.step-dot{width:24px;height:24px;border-radius:50%;border:2px solid var(--border);background:var(--surface);display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0;z-index:1;transition:all 0.4s;}
.tracker-step.done .step-dot{background:var(--green);border-color:var(--green);color:#fff;font-size:13px;}
.tracker-step.active-step .step-dot{border-color:var(--brand2);background:var(--brand2);color:#fff;animation:ring-pulse 1.4s ease-in-out infinite;}
.tracker-step.ready-step .step-dot{background:var(--green);border-color:var(--green);color:#fff;animation:pop-in 0.5s cubic-bezier(0.34,1.56,0.64,1);}
@keyframes ring-pulse{0%,100%{box-shadow:0 0 0 2px rgba(232,87,42,0.2)}50%{box-shadow:0 0 0 5px rgba(232,87,42,0.3)}}
@keyframes pop-in{0%{transform:scale(0.4)}100%{transform:scale(1)}}
.step-info{flex:1;padding-top:2px;}
.step-label{font-size:13px;font-weight:600;color:var(--text3);}
.tracker-step.done .step-label{color:var(--green);}
.tracker-step.active-step .step-label{color:var(--text);}
.tracker-step.ready-step .step-label{color:var(--green);font-weight:700;}
.step-time{font-size:11px;color:var(--text3);margin-top:1px;}
.tracker-step.done .step-time,.tracker-step.active-step .step-time,.tracker-step.ready-step .step-time{color:var(--text2);}
.ready-banner{background:var(--green);color:#fff;border-radius:var(--radius-sm);padding:10px 14px;display:flex;align-items:center;gap:10px;margin-top:10px;animation:slide-down 0.4s cubic-bezier(0.34,1.56,0.64,1);}
@keyframes slide-down{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
.ready-banner-icon{font-size:20px;}
.ready-banner-text{font-size:13px;font-weight:600;}

/* MODAL */
.modal-backdrop{position:fixed;inset:0;background:rgba(26,26,46,0.5);z-index:200;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity 0.2s;}
.modal-backdrop.open{opacity:1;pointer-events:all;}
.modal{background:var(--surface);border-radius:20px;width:420px;max-width:calc(100vw - 40px);padding:32px;box-shadow:var(--shadow-lg);transform:scale(0.96) translateY(8px);transition:transform 0.2s;}
.modal-backdrop.open .modal{transform:scale(1) translateY(0);}
.modal-title{font-family:'DM Serif Display',serif;font-size:24px;margin-bottom:4px;}
.modal-sub{font-size:14px;color:var(--text2);margin-bottom:24px;}
.modal-amount{font-size:32px;font-weight:700;color:var(--brand2);margin-bottom:24px;}
.pay-methods{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:24px;}
.pay-method{padding:14px;border:1.5px solid var(--border);border-radius:var(--radius-sm);text-align:center;cursor:pointer;transition:all 0.15s;}
.pay-method:hover,.pay-method.active{border-color:var(--brand);background:#f5f5ff;}
.pay-method-icon{font-size:24px;margin-bottom:4px;}
.pay-method-label{font-size:12px;font-weight:600;color:var(--text2);}
.modal-btns{display:flex;gap:10px;}
.btn-ghost{flex:1;padding:13px;border:1.5px solid var(--border);border-radius:var(--radius-sm);background:none;font-size:14px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif;color:var(--text2);transition:all 0.15s;}
.btn-primary{flex:2;padding:13px;border-radius:var(--radius-sm);background:var(--brand2);border:none;color:#fff;font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all 0.15s;}
.btn-primary:hover{background:#d44820;}
.success-card{text-align:center;padding:20px 0;}
.success-icon{font-size:56px;margin-bottom:12px;}
.success-title{font-family:'DM Serif Display',serif;font-size:24px;margin-bottom:8px;}
.success-msg{font-size:14px;color:var(--text2);line-height:1.6;}

/* KITCHEN */
.kitchen-wrap{padding:20px 24px;}
.kitchen-topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:12px;}
.kitchen-title{font-family:'DM Serif Display',serif;font-size:26px;}
.kitchen-meta{display:flex;gap:12px;flex-wrap:wrap;}
.k-badge{padding:6px 14px;border-radius:20px;font-size:13px;font-weight:600;}
.k-badge.new{background:var(--amber-bg);color:var(--amber);}
.k-badge.cooking{background:var(--blue-bg);color:var(--blue);}
.k-badge.ready{background:var(--green-bg);color:var(--green);}
.kitchen-cols{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;}
.k-col-title{font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;padding:0 0 12px;border-bottom:2px solid;margin-bottom:14px;}
.k-col-title.new{color:var(--amber);border-color:var(--amber);}
.k-col-title.cooking{color:var(--blue);border-color:var(--blue);}
.k-col-title.ready{color:var(--green);border-color:var(--green);}
.order-card{background:var(--surface);border:1.5px solid var(--border);border-radius:var(--radius);padding:16px;margin-bottom:12px;box-shadow:var(--shadow);transition:all 0.25s;}
.order-card.new{border-left:4px solid var(--amber);animation:pulse-in 0.4s ease;}
.order-card.cooking{border-left:4px solid var(--blue);}
.order-card.ready{border-left:4px solid var(--green);}
@keyframes pulse-in{from{opacity:0;transform:scale(0.97)}to{opacity:1;transform:scale(1)}}
.order-card-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;}
.order-table{font-size:17px;font-weight:700;}
.order-elapsed{font-size:12px;color:var(--text3);font-weight:600;}
.order-elapsed.warn{color:var(--amber);}
.order-elapsed.urgent{color:var(--red);}
.timer-bar{height:4px;background:var(--border);border-radius:2px;margin-bottom:12px;overflow:hidden;}
.timer-fill{height:100%;border-radius:2px;transition:width 1s linear,background 0.5s;}
.order-items-list{margin-bottom:12px;}
.order-item-line{display:flex;justify-content:space-between;font-size:13px;padding:4px 0;border-bottom:1px dotted var(--border);}
.order-item-line:last-child{border:none;}
.order-actions{display:flex;gap:8px;}
.k-btn{flex:1;padding:9px;border-radius:var(--radius-sm);font-size:12.5px;font-weight:600;cursor:pointer;border:none;font-family:'DM Sans',sans-serif;transition:all 0.15s;}
.k-btn.start{background:var(--amber-bg);color:var(--amber);}
.k-btn.start:hover{background:var(--amber);color:#fff;}
.k-btn.done{background:var(--blue-bg);color:var(--blue);}
.k-btn.done:hover{background:var(--blue);color:#fff;}
.k-btn.serve{background:var(--green-bg);color:var(--green);}
.k-btn.serve:hover{background:var(--green);color:#fff;}

/* TILL */
.till-wrap{padding:20px 24px;}
.till-topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;flex-wrap:wrap;gap:8px;}
.till-title{font-family:'DM Serif Display',serif;font-size:26px;}
.till-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:24px;}
.stat-card{background:var(--surface);border:1.5px solid var(--border);border-radius:var(--radius);padding:18px 20px;}
.stat-label{font-size:11px;color:var(--text3);font-weight:600;letter-spacing:0.8px;text-transform:uppercase;margin-bottom:6px;}
.stat-value{font-size:26px;font-weight:700;line-height:1;}
.stat-sub{font-size:12px;color:var(--text2);margin-top:4px;}
.stat-card.highlight .stat-value{color:var(--green);}
.tables-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px;}
.table-card{background:var(--surface);border:1.5px solid var(--border);border-radius:var(--radius);padding:18px;transition:all 0.2s;}
.table-card.paid{border-color:var(--green);background:var(--green-bg);}
.table-card.active{border-color:var(--blue);}
.table-card.empty{opacity:0.5;}
.table-card-head{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;}
.table-num{font-size:20px;font-weight:700;}
.table-status-badge{padding:4px 10px;border-radius:12px;font-size:11px;font-weight:700;}
.table-status-badge.paid{background:var(--green);color:#fff;}
.table-status-badge.active{background:var(--blue);color:#fff;}
.table-status-badge.empty{background:var(--border);color:var(--text3);}
.table-bill{font-size:22px;font-weight:700;margin:6px 0;}
.table-items-preview{font-size:12px;color:var(--text2);margin-bottom:12px;line-height:1.6;}
.table-actions{display:flex;gap:8px;}
.t-btn{flex:1;padding:8px;border-radius:var(--radius-sm);font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid var(--border);background:none;font-family:'DM Sans',sans-serif;color:var(--text2);transition:all 0.15s;}
.t-btn:hover{border-color:var(--text);color:var(--text);}
.t-btn.clear{border-color:var(--red);color:var(--red);}
.t-btn.clear:hover{background:var(--red);color:#fff;}

/* ADMIN */
.admin-wrap{padding:20px 24px;}
.admin-title{font-family:'DM Serif Display',serif;font-size:26px;margin-bottom:20px;}
.admin-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;}
.admin-section{background:var(--surface);border:1.5px solid var(--border);border-radius:var(--radius);padding:22px;}
.admin-section-title{font-size:14px;font-weight:700;margin-bottom:16px;}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;}
.form-row.full{grid-template-columns:1fr;}
.form-group{display:flex;flex-direction:column;gap:5px;}
.form-label{font-size:12px;color:var(--text2);font-weight:500;}
.form-input{padding:9px 12px;border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:13.5px;font-family:'DM Sans',sans-serif;outline:none;transition:border 0.15s;}
.form-input:focus{border-color:var(--brand);}
.form-select{padding:9px 12px;border:1.5px solid var(--border);border-radius:var(--radius-sm);font-size:13.5px;font-family:'DM Sans',sans-serif;outline:none;background:var(--surface);}
.save-btn{padding:10px 22px;background:var(--brand);color:#fff;border:none;border-radius:var(--radius-sm);font-size:13.5px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;margin-top:8px;transition:all 0.15s;}
.save-btn:hover{background:var(--brand2);}
.menu-manage-list{max-height:300px;overflow-y:auto;}
.menu-manage-item{display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border);}
.menu-manage-item:last-child{border:none;}
.menu-item-info{flex:1;}
.menu-item-info .name{font-size:13.5px;font-weight:600;}
.menu-item-info .cat{font-size:11.5px;color:var(--text2);}
.menu-item-price-tag{font-size:13px;font-weight:600;color:var(--brand2);margin-right:8px;}
.toggle-switch{position:relative;width:36px;height:20px;flex-shrink:0;}
.toggle-switch input{opacity:0;width:0;height:0;}
.slider-toggle{position:absolute;inset:0;background:var(--border);border-radius:10px;cursor:pointer;transition:0.2s;}
.slider-toggle:before{content:'';position:absolute;height:14px;width:14px;left:3px;bottom:3px;background:#fff;border-radius:50%;transition:0.2s;}
.toggle-switch input:checked+.slider-toggle{background:var(--green);}
.toggle-switch input:checked+.slider-toggle:before{transform:translateX(16px);}

/* NOTIFICATIONS */
.notif-bar{position:fixed;bottom:24px;right:24px;z-index:300;display:flex;flex-direction:column;gap:8px;pointer-events:none;}
.notif{background:var(--brand);color:#fff;padding:12px 18px;border-radius:var(--radius-sm);font-size:13.5px;font-weight:500;box-shadow:var(--shadow-lg);pointer-events:all;animation:slide-in 0.3s ease;display:flex;align-items:center;gap:10px;max-width:320px;}
.notif.success{background:var(--green);}
.notif.warning{background:var(--amber);}
.notif.alert{background:var(--brand2);}
@keyframes slide-in{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}}

@media(max-width:900px){
  .customer-wrap{grid-template-columns:1fr;}
  .cart-side{position:fixed;bottom:0;left:0;right:0;height:auto;max-height:55vh;z-index:50;border-top:1.5px solid var(--border);border-left:none;}
  .kitchen-cols{grid-template-columns:1fr;}
  .till-stats{grid-template-columns:1fr 1fr;}
  .admin-grid{grid-template-columns:1fr;}
}
</style>
</head>
<body>

<!-- LOADING -->
<div class="loading-screen" id="loading-screen">
  <div class="loading-logo">Table<span>Flow</span></div>
  <div class="loading-msg" id="loading-msg">Connecting to database…</div>
  <div class="loading-bar"><div class="loading-fill"></div></div>
</div>

<!-- NAV -->
<nav class="app-nav">
  <div class="logo">Table<span>Flow</span></div>
  <div class="nav-tabs">
    <button class="nav-tab active" onclick="showView('customer',this)">🍽️ Customer Menu</button>
    <button class="nav-tab" onclick="showView('kitchen',this)">👨‍🍳 Kitchen</button>
    <button class="nav-tab" onclick="showView('till',this)">🧾 Till / Cashier</button>
    <button class="nav-tab" onclick="showView('admin',this)">⚙️ Admin</button>
  </div>
  <div class="nav-right">
    <span><span class="conn-dot connecting" id="conn-dot"></span></span>
    <span class="restaurant-badge" id="nav-restaurant-name">Connecting…</span>
  </div>
</nav>

<div class="notif-bar" id="notif-bar"></div>

<!-- CUSTOMER VIEW -->
<div class="view active" id="view-customer">
  <div class="customer-wrap">
    <div class="menu-side">
      <div class="menu-header">
        <div class="restaurant-name" id="cust-restaurant-name">Loading…</div>
        <div class="restaurant-meta">
          <span class="table-chip" id="cust-table-label">Table 7</span>
          <span class="status-dot"></span>
          <span class="status-txt">Kitchen open · Orders accepted</span>
        </div>
      </div>
      <div class="search-bar">
        <span class="search-icon">🔍</span>
        <input type="text" id="menu-search" placeholder="Search menu…" oninput="filterMenu()">
      </div>
      <div class="cat-pills" id="cat-pills"></div>
      <div id="menu-container"><div style="text-align:center;padding:60px;color:var(--text3);">Loading menu…</div></div>
    </div>
    <div class="cart-side">
      <div class="cart-header">
        <div class="cart-title">Your Order</div>
        <div class="cart-subtitle" id="cart-subtitle">Nothing added yet</div>
      </div>
      <div class="cart-items" id="cart-items"></div>
      <div class="cart-footer">
        <div id="tracker-wrap" class="tracker-wrap" style="display:none;"></div>
        <div id="order-history" style="display:none;margin-bottom:12px;">
          <div class="order-hist-label">Previously ordered</div>
          <div id="order-hist-rows"></div>
        </div>
        <div class="tip-section">
          <div class="tip-label">Add a tip for your waiter?</div>
          <div class="tip-pills">
            <button class="tip-pill" onclick="setTip(0)">None</button>
            <button class="tip-pill" onclick="setTip(10)">10%</button>
            <button class="tip-pill active" onclick="setTip(15)">15%</button>
            <button class="tip-pill" onclick="setTip(20)">20%</button>
          </div>
        </div>
        <div class="totals">
          <div class="total-row"><span>Subtotal</span><span id="tot-subtotal">R0.00</span></div>
          <div class="total-row"><span>Tip (<span id="tip-pct-label">15</span>%)</span><span id="tot-tip">R0.00</span></div>
          <div class="total-row grand"><span>Total</span><span id="tot-grand">R0.00</span></div>
        </div>
        <button class="pay-btn" id="pay-btn" onclick="openPayModal()" disabled>Pay Now</button>
      </div>
    </div>
  </div>
</div>

<!-- KITCHEN VIEW -->
<div class="view" id="view-kitchen">
  <div class="kitchen-wrap">
    <div class="kitchen-topbar">
      <div class="kitchen-title">Kitchen Display</div>
      <div class="kitchen-meta">
        <span class="k-badge new">● New Orders</span>
        <span class="k-badge cooking">● Cooking</span>
        <span class="k-badge ready">● Ready</span>
      </div>
    </div>
    <div class="kitchen-cols">
      <div><div class="k-col-title new">⚡ New Orders</div><div id="k-col-new"></div></div>
      <div><div class="k-col-title cooking">🔥 Cooking</div><div id="k-col-cooking"></div></div>
      <div><div class="k-col-title ready">✅ Ready to Serve</div><div id="k-col-ready"></div></div>
    </div>
  </div>
</div>

<!-- TILL VIEW -->
<div class="view" id="view-till">
  <div class="till-wrap">
    <div class="till-topbar">
      <div class="till-title">Cashier Dashboard</div>
      <div style="font-size:13px;color:var(--text2);" id="till-date"></div>
    </div>
    <div class="till-stats">
      <div class="stat-card highlight"><div class="stat-label">Revenue Today</div><div class="stat-value" id="stat-revenue">R0</div><div class="stat-sub">app payments</div></div>
      <div class="stat-card"><div class="stat-label">Orders Today</div><div class="stat-value" id="stat-orders">0</div><div class="stat-sub">completed</div></div>
      <div class="stat-card"><div class="stat-label">Tables Active</div><div class="stat-value" id="stat-tables">0</div><div class="stat-sub">currently seated</div></div>
      <div class="stat-card"><div class="stat-label">Avg Tip</div><div class="stat-value" id="stat-tip">—</div><div class="stat-sub">today's average</div></div>
    </div>
    <div class="tables-grid" id="tables-grid"></div>
  </div>
</div>

<!-- ADMIN VIEW -->
<div class="view" id="view-admin">
  <div class="admin-wrap">
    <div class="admin-title">Restaurant Settings</div>
    <div class="admin-grid">
      <div class="admin-section">
        <div class="admin-section-title">🏪 Restaurant Details</div>
        <div class="form-row">
          <div class="form-group"><label class="form-label">Restaurant Name</label><input class="form-input" id="admin-name" value="Wimpy"></div>
          <div class="form-group"><label class="form-label">Branch</label><input class="form-input" id="admin-branch" value="Sandton"></div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Currency</label>
            <select class="form-select" id="admin-currency">
              <option value="R">R — South African Rand</option>
              <option value="$">$ — US Dollar</option>
              <option value="€">€ — Euro</option>
              <option value="£">£ — British Pound</option>
              <option value="₦">₦ — Nigerian Naira</option>
              <option value="KSh">KSh — Kenyan Shilling</option>
              <option value="AED">AED — UAE Dirham</option>
              <option value="A$">A$ — Australian Dollar</option>
            </select>
          </div>
          <div class="form-group"><label class="form-label">Number of Tables</label><input class="form-input" id="admin-tables" type="number" value="12"></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label class="form-label">Avg prep time (min)</label><input class="form-input" id="admin-prep" type="number" value="15"></div>
          <div class="form-group"><label class="form-label">Avg cook time (min)</label><input class="form-input" id="admin-cook" type="number" value="12"></div>
        </div>
        <button class="save-btn" onclick="saveRestaurantSettings()">Save Settings</button>
      </div>

      <div class="admin-section">
        <div class="admin-section-title">📊 Connection Status</div>
        <div style="display:flex;flex-direction:column;gap:12px;">
          <div style="background:var(--surface2);border-radius:10px;padding:14px;">
            <div style="font-size:11px;color:var(--text3);margin-bottom:4px;">SUPABASE PROJECT</div>
            <div style="font-size:13px;font-weight:600;color:var(--text);">ujiezcaxgalbkrzdzrlo</div>
          </div>
          <div style="background:var(--surface2);border-radius:10px;padding:14px;">
            <div style="font-size:11px;color:var(--text3);margin-bottom:4px;">RESTAURANT ID</div>
            <div style="font-size:12px;font-weight:500;color:var(--text2);word-break:break-all;" id="admin-restaurant-id">Loading…</div>
          </div>
          <div style="background:var(--surface2);border-radius:10px;padding:14px;">
            <div style="font-size:11px;color:var(--text3);margin-bottom:4px;">REAL-TIME STATUS</div>
            <div style="font-size:13px;font-weight:600;" id="admin-conn-status">Connecting…</div>
          </div>
          <div style="background:var(--surface2);border-radius:10px;padding:14px;">
            <div style="font-size:11px;color:var(--text3);margin-bottom:4px;">POWERED BY</div>
            <div style="font-size:13px;font-weight:600;color:var(--text);">Coetzee Data AI Consultants</div>
            <div style="font-size:11px;color:var(--text3);">Reg. 2025/428324/07</div>
          </div>
        </div>
      </div>

      <div class="admin-section" style="grid-column:1/-1;">
        <div class="admin-section-title">🍔 Menu Management</div>
        <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap;">
          <input class="form-input" id="new-item-name" placeholder="Item name" style="flex:2;min-width:120px;">
          <input class="form-input" id="new-item-price" placeholder="Price" type="number" style="width:90px;">
          <input class="form-input" id="new-item-desc" placeholder="Description" style="flex:3;min-width:160px;">
          <select class="form-select" id="new-item-cat" style="width:130px;">
            <option>Burgers</option><option>Breakfasts</option><option>Chicken</option>
            <option>Sides</option><option>Salads</option><option>Desserts</option><option>Drinks</option>
          </select>
          <input class="form-input" id="new-item-emoji" placeholder="Emoji" style="width:70px;">
          <button class="save-btn" style="margin-top:0;" onclick="addMenuItem()">+ Add Item</button>
        </div>
        <div class="menu-manage-list" id="menu-manage-list"><div style="text-align:center;padding:20px;color:var(--text3);">Loading menu…</div></div>
      </div>
    </div>
  </div>
</div>

<!-- PAYMENT MODAL -->
<div class="modal-backdrop" id="pay-modal">
  <div class="modal"><div id="pay-modal-content"></div></div>
</div>

<script>
// ══════════════════════════════════════════════════════════════
//  SUPABASE INIT
// ══════════════════════════════════════════════════════════════
const SUPABASE_URL  = 'https://ujiezcaxgalbkrzdzrlo.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqaWV6Y2F4Z2FsYmtyemR6cmxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUwNjgyNTQsImV4cCI6MjA5MDY0NDI1NH0.q6jBqd58vnl18KiMMazPhmd9A8OAN-FB8bUXsSiGxTI';

const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON);

// ══════════════════════════════════════════════════════════════
//  APP STATE
// ══════════════════════════════════════════════════════════════
const S = {
  restaurantId: 'a1b2c3d4-0000-0000-0000-000000000001',
  restaurant: null,
  tableNum: 7,
  tableId: null,
  currency: 'R',
  tipPct: 15,
  prepTime: 15,
  cookTime: 12,
  cart: [],
  prevOrders: [],
  menuItems: [],
  kitchenOrders: [],
  dbTables: {},
  tracked: {},
  selectedCat: 'All',
  searchTerm: '',
  realtimeSubs: [],
};

// ══════════════════════════════════════════════════════════════
//  AUDIO
// ══════════════════════════════════════════════════════════════
let _actx = null;
function actx(){ if(!_actx) _actx = new(window.AudioContext||window.webkitAudioContext)(); return _actx; }

function playChime(){
  try{
    const ctx=actx();
    [523,659,784,1047].forEach((f,i)=>{
      const o=ctx.createOscillator(),g=ctx.createGain();
      o.connect(g);g.connect(ctx.destination);
      o.type='sine';o.frequency.value=f;
      const t=ctx.currentTime+i*0.18;
      g.gain.setValueAtTime(0,t);
      g.gain.linearRampToValueAtTime(0.3,t+0.04);
      g.gain.exponentialRampToValueAtTime(0.001,t+0.5);
      o.start(t);o.stop(t+0.55);
    });
  }catch(e){}
}

function playPing(){
  try{
    const ctx=actx(),o=ctx.createOscillator(),g=ctx.createGain();
    o.connect(g);g.connect(ctx.destination);
    o.type='sine';o.frequency.value=880;
    g.gain.setValueAtTime(0.2,ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.3);
    o.start(ctx.currentTime);o.stop(ctx.currentTime+0.35);
  }catch(e){}
}

function vibe(p){ try{navigator.vibrate&&navigator.vibrate(p);}catch(e){} }

// ══════════════════════════════════════════════════════════════
//  CONNECTION STATUS
// ══════════════════════════════════════════════════════════════
function setConn(status){
  const dot = document.getElementById('conn-dot');
  const adminStatus = document.getElementById('admin-conn-status');
  dot.className = 'conn-dot ' + status;
  if(adminStatus){
    const labels = { connected:'✅ Connected — real-time active', connecting:'⏳ Connecting…', error:'❌ Connection error' };
    adminStatus.textContent = labels[status] || status;
    adminStatus.style.color = status==='connected'?'var(--green)':status==='error'?'var(--red)':'var(--amber)';
  }
}

// ══════════════════════════════════════════════════════════════
//  LOAD RESTAURANT + MENU
// ══════════════════════════════════════════════════════════════
async function loadRestaurant(){
  try {
    const { data, error } = await db
      .from('restaurants')
      .select('*')
      .eq('id', S.restaurantId)
      .single();
    if(error) throw error;

    S.restaurant = data;
    S.currency = data.currency;
    S.prepTime = data.prep_time;
    S.cookTime = data.cook_time;

    const fullName = `${data.name} — ${data.branch}`;
    document.getElementById('nav-restaurant-name').textContent = fullName;
    document.getElementById('cust-restaurant-name').textContent = fullName;
    document.getElementById('cust-table-label').textContent = `Table ${S.tableNum}`;
    document.getElementById('admin-restaurant-id').textContent = S.restaurantId;

    // Populate admin fields
    document.getElementById('admin-name').value = data.name;
    document.getElementById('admin-branch').value = data.branch;
    document.getElementById('admin-tables').value = data.num_tables;
    document.getElementById('admin-prep').value = data.prep_time;
    document.getElementById('admin-cook').value = data.cook_time;
  } catch(e) {
    console.error('Load restaurant error:', e);
    notify('Could not load restaurant settings','');
  }
}

async function loadMenu(){
  try {
    const { data, error } = await db
      .from('menu_items')
      .select('*')
      .eq('restaurant_id', S.restaurantId)
      .order('sort_order');
    if(error) throw error;
    S.menuItems = data || [];
    renderMenu();
    renderMenuManage();
  } catch(e) {
    console.error('Load menu error:', e);
  }
}

async function loadTableId(){
  try {
    const { data, error } = await db
      .from('restaurant_tables')
      .select('id, status, current_bill')
      .eq('restaurant_id', S.restaurantId)
      .eq('table_number', S.tableNum)
      .single();
    if(error) throw error;
    if(data){ S.tableId = data.id; }
  } catch(e) {
    console.error('Load table error:', e);
  }
}

async function loadTodaysOrders(){
  try {
    const today = new Date(); today.setHours(0,0,0,0);
    const { data, error } = await db
      .from('orders')
      .select('*, order_items(*)')
      .eq('restaurant_id', S.restaurantId)
      .gte('created_at', today.toISOString());
    if(error) throw error;
    S.kitchenOrders = (data||[]).filter(o=>o.status!=='served');
    renderKitchen();
    renderTill();
  } catch(e) {
    console.error('Load orders error:', e);
  }
}

async function loadDbTables(){
  try {
    const { data, error } = await db
      .from('restaurant_tables')
      .select('*')
      .eq('restaurant_id', S.restaurantId);
    if(error) throw error;
    S.dbTables = {};
    (data||[]).forEach(t=>{ S.dbTables[t.table_number]=t; });
    renderTill();
  } catch(e) {
    console.error('Load tables error:', e);
  }
}

// ══════════════════════════════════════════════════════════════
//  REAL-TIME SUBSCRIPTIONS
// ══════════════════════════════════════════════════════════════
function subscribeRealtime(){
  // Subscribe to orders table — kitchen + customer tracker
  const orderSub = db.channel('orders-changes')
    .on('postgres_changes',
      { event:'*', schema:'public', table:'orders', filter:`restaurant_id=eq.${S.restaurantId}` },
      (payload) => {
        handleOrderChange(payload);
      }
    )
    .subscribe((status)=>{
      if(status==='SUBSCRIBED'){
        setConn('connected');
        notify('🔴 Real-time connected — kitchen & tracker are live!','success');
      } else if(status==='CHANNEL_ERROR'){
        setConn('error');
      }
    });

  // Subscribe to restaurant_tables — till updates
  const tableSub = db.channel('tables-changes')
    .on('postgres_changes',
      { event:'UPDATE', schema:'public', table:'restaurant_tables', filter:`restaurant_id=eq.${S.restaurantId}` },
      (payload) => {
        const t = payload.new;
        S.dbTables[t.table_number] = t;
        renderTill();
      }
    )
    .subscribe();

  // Subscribe to menu_items — live menu updates
  const menuSub = db.channel('menu-changes')
    .on('postgres_changes',
      { event:'*', schema:'public', table:'menu_items', filter:`restaurant_id=eq.${S.restaurantId}` },
      () => loadMenu()
    )
    .subscribe();

  S.realtimeSubs = [orderSub, tableSub, menuSub];
}

function handleOrderChange(payload){
  const order = payload.new;
  const event = payload.eventType;

  if(event === 'INSERT'){
    // New order — add to kitchen
    loadOrderWithItems(order.id).then(fullOrder => {
      if(fullOrder){
        S.kitchenOrders.unshift(fullOrder);
        renderKitchen();
        renderTill();
        // If this order is tracked by this customer session
        if(S.tracked[order.id]){
          S.tracked[order.id].status = 'new';
          renderCart();
        }
      }
    });
    playPing();
  }

  if(event === 'UPDATE'){
    // Order status changed — update kitchen + customer tracker
    const idx = S.kitchenOrders.findIndex(o=>o.id===order.id);
    if(idx >= 0){
      S.kitchenOrders[idx] = {...S.kitchenOrders[idx], ...order};
      if(order.status === 'served'){
        S.kitchenOrders.splice(idx, 1);
        setTimeout(()=>{ delete S.tracked[order.id]; renderCart(); }, 10000);
      }
    }
    renderKitchen();
    renderTill();

    // Update customer tracker if tracking this order
    if(S.tracked[order.id]){
      const prev = S.tracked[order.id].status;
      S.tracked[order.id].status = order.status;
      S.tracked[order.id].times = {
        received: fmtTime(order.received_at),
        cooking:  order.cooking_at ? fmtTime(order.cooking_at) : null,
        ready:    order.ready_at   ? fmtTime(order.ready_at)   : null,
        served:   order.served_at  ? fmtTime(order.served_at)  : null,
      };
      if(order.status==='ready' && prev!=='ready'){
        playChime();
        vibe([200,100,200,100,400]);
        notify(`🛎️ Your food is ready! On its way to Table ${S.tableNum}.`,'alert');
      }
      renderCart();
    }
  }
}

async function loadOrderWithItems(orderId){
  try {
    const { data, error } = await db
      .from('orders')
      .select('*, order_items(*)')
      .eq('id', orderId)
      .single();
    if(error) throw error;
    return data;
  } catch(e) { return null; }
}

function fmtTime(ts){
  if(!ts) return null;
  return new Date(ts).toLocaleTimeString('en-ZA',{hour:'2-digit',minute:'2-digit'});
}

// ══════════════════════════════════════════════════════════════
//  NAV
// ══════════════════════════════════════════════════════════════
function showView(v, tab){
  document.querySelectorAll('.view').forEach(el=>el.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(el=>el.classList.remove('active'));
  document.getElementById('view-'+v).classList.add('active');
  if(tab) tab.classList.add('active');
  if(v==='till') renderTill();
  if(v==='kitchen') renderKitchen();
  if(v==='admin') renderAdmin();
}

// ══════════════════════════════════════════════════════════════
//  MENU RENDER
// ══════════════════════════════════════════════════════════════
function cats(){ return ['All',...new Set(S.menuItems.filter(i=>i.active).map(i=>i.cat))]; }

function renderMenu(){
  const all = cats();
  document.getElementById('cat-pills').innerHTML = all.map(c=>
    `<button class="cat-pill ${c===S.selectedCat?'active':''}" onclick="selectCat('${c}')">${c}</button>`
  ).join('');

  const term = S.searchTerm.toLowerCase();
  const show = S.selectedCat==='All' ? all.filter(c=>c!=='All') : [S.selectedCat];
  let html='';
  show.forEach(cat=>{
    const items = S.menuItems.filter(i=>i.active&&i.cat===cat&&(i.name.toLowerCase().includes(term)||i.description.toLowerCase().includes(term)));
    if(!items.length) return;
    html+=`<div class="cat-section"><div class="cat-title">${cat}</div><div class="menu-grid">`;
    items.forEach(item=>{
      const qty = S.cart.filter(c=>c.id===item.id).reduce((s,c)=>s+c.qty,0);
      html+=`<div class="menu-item ${qty>0?'in-cart':''}" onclick="addToCart('${item.id}')">
        ${qty>0?`<div class="item-qty-badge">${qty}</div>`:''}
        <span class="item-emoji">${item.emoji}</span>
        <div class="item-name">${item.name}</div>
        <div class="item-desc">${item.description}</div>
        <div class="item-footer">
          <span class="item-price">${S.currency}${Number(item.price).toFixed(2)}</span>
          <button class="item-add-btn" onclick="event.stopPropagation();addToCart('${item.id}')">+</button>
        </div>
      </div>`;
    });
    html+='</div></div>';
  });
  document.getElementById('menu-container').innerHTML = html||'<div style="text-align:center;padding:40px;color:var(--text3);">No items found</div>';
}

function selectCat(c){ S.selectedCat=c; renderMenu(); }
function filterMenu(){ S.searchTerm=document.getElementById('menu-search').value; renderMenu(); }

// ══════════════════════════════════════════════════════════════
//  CART
// ══════════════════════════════════════════════════════════════
function addToCart(id){
  const item = S.menuItems.find(i=>i.id===id);
  if(!item) return;
  const ex = S.cart.find(c=>c.id===id);
  if(ex) ex.qty++;
  else S.cart.push({id, name:item.name, price:Number(item.price), qty:1});
  renderCart(); renderMenu();
}

function changeQty(id, d){
  const idx = S.cart.findIndex(c=>c.id===id);
  if(idx<0) return;
  S.cart[idx].qty += d;
  if(S.cart[idx].qty<=0) S.cart.splice(idx,1);
  renderCart(); renderMenu();
}

function renderCart(){
  const el = document.getElementById('cart-items');
  const sub = S.cart.reduce((s,c)=>s+c.price*c.qty, 0);
  const prev = S.prevOrders.reduce((s,o)=>s+o.total, 0);
  const tip = sub * S.tipPct/100;
  const grand = sub + tip + prev;
  const tracked = Object.keys(S.tracked).length;

  document.getElementById('cart-subtitle').textContent = S.cart.length
    ? `${S.cart.reduce((s,c)=>s+c.qty,0)} item(s) in cart`
    : tracked ? 'Tracking your order below' : 'Nothing added yet';
  document.getElementById('tot-subtotal').textContent = `${S.currency}${sub.toFixed(2)}`;
  document.getElementById('tot-tip').textContent = `${S.currency}${tip.toFixed(2)}`;
  document.getElementById('tot-grand').textContent = `${S.currency}${grand.toFixed(2)}`;
  document.getElementById('pay-btn').disabled = S.cart.length===0;

  if(!S.cart.length){
    el.innerHTML=`<div class="cart-empty"><div class="cart-empty-icon">${tracked?'👀':'🛒'}</div><div style="font-size:14px;color:var(--text3);">${tracked?'Your order is being prepared below':'Tap any item to add it to your order'}</div></div>`;
  } else {
    el.innerHTML = S.cart.map(c=>`
      <div class="cart-row">
        <div class="cart-item-name">${c.name}</div>
        <div class="cart-qty-ctrl">
          <button class="qty-btn" onclick="changeQty('${c.id}',-1)">−</button>
          <span class="qty-num">${c.qty}</span>
          <button class="qty-btn" onclick="changeQty('${c.id}',1)">+</button>
        </div>
        <div class="cart-item-price">${S.currency}${(c.price*c.qty).toFixed(2)}</div>
      </div>`).join('');
  }

  const histEl = document.getElementById('order-history');
  if(S.prevOrders.length){
    histEl.style.display='block';
    document.getElementById('order-hist-rows').innerHTML = S.prevOrders.map(o=>
      `<div class="order-hist-row"><span>${o.label}</span><span>${S.currency}${o.total.toFixed(2)}</span></div>`
    ).join('');
  } else histEl.style.display='none';

  renderTracker();
}

function setTip(pct){
  S.tipPct=pct;
  document.getElementById('tip-pct-label').textContent=pct;
  document.querySelectorAll('.tip-pill').forEach((el,i)=>el.classList.toggle('active',[0,10,15,20][i]===pct));
  renderCart();
}

// ══════════════════════════════════════════════════════════════
//  TRACKER
// ══════════════════════════════════════════════════════════════
const STEPS=[
  {key:'received', label:'Order received',    icon:'📋'},
  {key:'preparing',label:'Kitchen preparing', icon:'👨‍🍳'},
  {key:'cooking',  label:'Cooking your meal', icon:'🔥'},
  {key:'ready',    label:'Ready — on its way!',icon:'🛎️'},
  {key:'served',   label:'Enjoy your meal!',  icon:'🍽️'},
];

function stepIdx(status){ return{new:1,cooking:2,ready:3,served:4}[status]??0; }

function getEta(o){
  if(o.status==='ready'||o.status==='served') return null;
  const elapsed = Math.round((Date.now()-(new Date(o.placedAt||Date.now())))/60000);
  const rem = Math.max(0, S.prepTime+S.cookTime-elapsed);
  return rem===0?'Any moment now':`~${rem} min`;
}

function renderTracker(){
  const wrap = document.getElementById('tracker-wrap');
  const orders = Object.values(S.tracked);
  if(!orders.length){ wrap.style.display='none'; return; }
  wrap.style.display='block';

  wrap.innerHTML = orders.map(order=>{
    const active = stepIdx(order.status);
    const eta = getEta(order);
    const isReady = order.status==='ready';
    const steps = STEPS.map((s,i)=>{
      let cls='';
      if(i<active) cls='done';
      else if(i===active) cls=isReady?'done ready-step':'active-step';
      const t = order.times?.[s.key]||'';
      return `<div class="tracker-step ${cls}">
        <div class="step-dot">${i<active?'✓':(i===active?(isReady?'✓':s.icon):'')}</div>
        <div class="step-info">
          <div class="step-label">${s.label}</div>
          ${t?`<div class="step-time">${t}</div>`:''}
        </div>
      </div>`;
    }).join('');

    return `<div class="tracker-order ${isReady?'ready-glow':''}">
      <div class="tracker-order-head">
        <div class="tracker-order-id">Order #${order.shortId} · Table ${S.tableNum}</div>
        ${eta?`<div class="tracker-eta">${eta}</div>`:`<div class="tracker-eta green">✓ Ready!</div>`}
      </div>
      <div class="tracker-steps">${steps}</div>
      ${isReady?`<div class="ready-banner"><div class="ready-banner-icon">🛎️</div><div class="ready-banner-text">Your food is ready and on its way!</div></div>`:''}
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════════════════════════
//  PAYMENT — writes to Supabase
// ══════════════════════════════════════════════════════════════
function openPayModal(){
  const sub = S.cart.reduce((s,c)=>s+c.price*c.qty,0);
  const prev = S.prevOrders.reduce((s,o)=>s+o.total,0);
  const tip = sub*S.tipPct/100;
  const grand = sub+tip+prev;
  const summary = S.cart.map(c=>`${c.name} ×${c.qty}`).join(', ');

  document.getElementById('pay-modal-content').innerHTML=`
    <div class="modal-title">Confirm Payment</div>
    <div class="modal-sub">Table ${S.tableNum} · ${summary}</div>
    <div class="modal-amount">${S.currency}${grand.toFixed(2)}</div>
    <div class="pay-methods">
      <div class="pay-method active" onclick="selMethod(this)"><div class="pay-method-icon">💳</div><div class="pay-method-label">Card</div></div>
      <div class="pay-method" onclick="selMethod(this)"><div class="pay-method-icon">📱</div><div class="pay-method-label">PayFast</div></div>
      <div class="pay-method" onclick="selMethod(this)"><div class="pay-method-icon">🏦</div><div class="pay-method-label">Ozow EFT</div></div>
      <div class="pay-method" onclick="selMethod(this)"><div class="pay-method-icon">📲</div><div class="pay-method-label">SnapScan</div></div>
    </div>
    <div class="modal-btns">
      <button class="btn-ghost" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="processPayment(${grand},${tip},${sub})">Pay ${S.currency}${grand.toFixed(2)}</button>
    </div>`;
  document.getElementById('pay-modal').classList.add('open');
}

function selMethod(el){ document.querySelectorAll('.pay-method').forEach(e=>e.classList.remove('active')); el.classList.add('active'); }
function closeModal(){ document.getElementById('pay-modal').classList.remove('open'); }

async function processPayment(grand, tip, sub){
  // Disable button to prevent double-submit
  document.querySelector('.btn-primary').disabled = true;
  document.querySelector('.btn-primary').textContent = 'Processing…';

  try {
    // 1. Insert order into Supabase
    const { data: order, error: orderErr } = await db
      .from('orders')
      .insert({
        restaurant_id: S.restaurantId,
        table_id: S.tableId,
        table_number: S.tableNum,
        status: 'new',
        subtotal: sub,
        tip_amount: tip,
        tip_pct: S.tipPct,
        total: grand,
        payment_method: 'card',
        paid_at: new Date().toISOString(),
        received_at: new Date().toISOString(),
      })
      .select()
      .single();

    if(orderErr) throw orderErr;

    // 2. Insert order items
    const orderItems = S.cart.map(c=>({
      order_id: order.id,
      menu_item_id: c.id,
      name: c.name,
      price: c.price,
      quantity: c.qty,
    }));
    const { error: itemsErr } = await db.from('order_items').insert(orderItems);
    if(itemsErr) throw itemsErr;

    // 3. Update table status to active
    if(S.tableId){
      await db.from('restaurant_tables')
        .update({ status:'active', current_bill: grand })
        .eq('id', S.tableId);
    }

    // 4. Track this order on the customer side
    const shortId = order.id.slice(-6).toUpperCase();
    S.tracked[order.id] = {
      id: order.id,
      shortId,
      status: 'new',
      placedAt: new Date().toISOString(),
      times: { received: fmtTime(new Date()) },
    };

    // 5. Move cart to previous orders
    S.prevOrders.push({ label:`Order #${shortId}`, total:sub });
    S.cart = [];

    playPing();
    vibe([100,50,100]);

    document.getElementById('pay-modal-content').innerHTML=`
      <div class="success-card">
        <div class="success-icon">✅</div>
        <div class="success-title">Order Placed!</div>
        <div class="success-msg">
          Order <strong>#${shortId}</strong> is live in the kitchen.<br><br>
          Watch the <strong>live tracker</strong> — every stage updates in real time. You'll hear a chime the moment your food is ready.<br><br>
          Want to add more? Use the menu to add to your running tab.
        </div>
        <button class="btn-primary" style="width:100%;margin-top:20px;" onclick="closeModal()">Back to Menu</button>
      </div>`;

    renderCart(); renderMenu();
    notify(`Order #${shortId} sent to kitchen! 🍽️`, 'success');
    setTimeout(()=>closeModal(), 3500);

  } catch(e) {
    console.error('Payment error:', e);
    notify('Payment failed — please try again. ' + e.message, '');
    closeModal();
  }
}

// ══════════════════════════════════════════════════════════════
//  KITCHEN — reads from Supabase, updates via Supabase
// ══════════════════════════════════════════════════════════════
function getElapsed(o){
  const m = Math.floor((Date.now()-new Date(o.created_at||Date.now()))/60000);
  if(m<1) return 'Just now';
  return m===1?'1 min ago':`${m} min ago`;
}

function timerFill(o){
  const total = (S.prepTime+S.cookTime)*60000;
  const pct = Math.min(100,Math.round((Date.now()-new Date(o.created_at||Date.now()))/total*100));
  const color = pct<60?'var(--green)':pct<85?'var(--amber)':'var(--red)';
  return {pct, color};
}

function renderKitchen(){
  ['new','cooking','ready'].forEach(status=>{
    const col = document.getElementById('k-col-'+status);
    const orders = S.kitchenOrders.filter(o=>o.status===status);
    col.innerHTML = orders.length ? orders.map(o=>orderCard(o)).join('')
      : `<div style="text-align:center;padding:30px;color:var(--text3);font-size:13px;">No orders</div>`;
  });
}

function orderCard(o){
  const m = Math.floor((Date.now()-new Date(o.created_at||Date.now()))/60000);
  const ec = m>20?'urgent':m>12?'warn':'';
  const tf = timerFill(o);
  const items = o.order_items ? o.order_items.map(i=>`${i.name} ×${i.quantity}`) : [];
  const shortId = o.id.slice(-6).toUpperCase();
  let btns='';
  if(o.status==='new') btns=`<button class="k-btn start" onclick="advanceOrder('${o.id}','cooking')">▶ Start Cooking</button>`;
  else if(o.status==='cooking') btns=`<button class="k-btn done" onclick="advanceOrder('${o.id}','ready')">✓ Mark Ready</button>`;
  else btns=`<button class="k-btn serve" onclick="advanceOrder('${o.id}','served')">🍽️ Served</button>`;

  return `<div class="order-card ${o.status}">
    <div class="order-card-head">
      <div class="order-table">Table ${o.table_number} <span style="font-size:12px;color:var(--text3);font-weight:400;">#${shortId}</span></div>
      <div class="order-elapsed ${ec}">${getElapsed(o)}</div>
    </div>
    <div class="timer-bar"><div class="timer-fill" style="width:${tf.pct}%;background:${tf.color};"></div></div>
    <div class="order-items-list">${items.map(i=>`<div class="order-item-line"><span>${i}</span></div>`).join('')}</div>
    <div class="order-actions">${btns}</div>
  </div>`;
}

async function advanceOrder(id, newStatus){
  const updates = { status: newStatus };
  const now = new Date().toISOString();
  if(newStatus==='cooking') updates.cooking_at = now;
  if(newStatus==='ready')   updates.ready_at   = now;
  if(newStatus==='served')  updates.served_at  = now;

  const { error } = await db.from('orders').update(updates).eq('id', id);
  if(error){ notify('Update failed: '+error.message,''); return; }

  // Real-time subscription will handle the UI update automatically
  if(newStatus==='ready'){
    const o = S.kitchenOrders.find(o=>o.id===id);
    notify(`🛎️ Table ${o?.table_number} order READY!`, 'alert');
  }
  if(newStatus==='served'){
    notify(`Table ${S.kitchenOrders.find(o=>o.id===id)?.table_number} — served ✓`, 'success');
  }
}

// ══════════════════════════════════════════════════════════════
//  TILL
// ══════════════════════════════════════════════════════════════
async function renderTill(){
  document.getElementById('till-date').textContent = new Date().toLocaleDateString('en-ZA',{weekday:'long',year:'numeric',month:'long',day:'numeric'});

  // Calculate stats from today's orders
  const today = new Date(); today.setHours(0,0,0,0);
  const { data: todayOrders } = await db
    .from('orders')
    .select('total,tip_amount,status')
    .eq('restaurant_id', S.restaurantId)
    .gte('created_at', today.toISOString());

  const all = todayOrders || [];
  const revenue = all.reduce((s,o)=>s+Number(o.total),0);
  const active = Object.values(S.dbTables).filter(t=>t.status==='active').length;
  const tips = all.filter(o=>o.total>0);
  const avgTip = tips.length ? Math.round(tips.reduce((s,o)=>s+(Number(o.tip_amount)/Number(o.total)*100),0)/tips.length) : 0;

  document.getElementById('stat-revenue').textContent = `${S.currency}${Math.round(revenue).toLocaleString()}`;
  document.getElementById('stat-orders').textContent = all.length;
  document.getElementById('stat-tables').textContent = active;
  document.getElementById('stat-tip').textContent = tips.length ? avgTip+'%' : '—';

  // Render table grid
  const numTables = S.restaurant?.num_tables || 12;
  let html='';
  for(let i=1;i<=numTables;i++){
    const t = S.dbTables[i] || {status:'empty', current_bill:0};
    const bc = {empty:'empty',paid:'paid',active:'active'}[t.status]||'active';
    const bl = {empty:'Empty',paid:'Paid ✓',active:'Active'}[t.status]||'Active';
    let acts='';
    if(t.status==='active') acts=`<button class="t-btn" onclick="markPaid(${i})">Mark Paid ✓</button><button class="t-btn clear" onclick="clearTable(${i})">Clear</button>`;
    else if(t.status==='paid') acts=`<button class="t-btn clear" onclick="clearTable(${i})">Reset Table</button>`;

    html+=`<div class="table-card ${t.status}">
      <div class="table-card-head"><div class="table-num">Table ${i}</div><span class="table-status-badge ${bc}">${bl}</span></div>
      ${t.current_bill>0?`<div class="table-bill">${S.currency}${Number(t.current_bill).toFixed(2)}</div>`:'<div style="color:var(--text3);font-size:13px;padding:6px 0;">No orders yet</div>'}
      ${acts?`<div class="table-actions">${acts}</div>`:''}
    </div>`;
  }
  document.getElementById('tables-grid').innerHTML = html;
}

async function markPaid(num){
  const t = S.dbTables[num];
  if(!t) return;
  await db.from('restaurant_tables').update({status:'paid'}).eq('id',t.id);
  S.dbTables[num].status='paid';
  notify(`Table ${num} payment confirmed ✓`,'success');
  renderTill();
}

async function clearTable(num){
  const t = S.dbTables[num];
  if(!t) return;
  await db.from('restaurant_tables').update({status:'empty',current_bill:0}).eq('id',t.id);
  S.dbTables[num].status='empty';
  S.dbTables[num].current_bill=0;
  renderTill();
}

// ══════════════════════════════════════════════════════════════
//  ADMIN
// ══════════════════════════════════════════════════════════════
function renderAdmin(){
  // Already populated on load
}

async function saveRestaurantSettings(){
  const name    = document.getElementById('admin-name').value;
  const branch  = document.getElementById('admin-branch').value;
  const curr    = document.getElementById('admin-currency').value.split(' ')[0];
  const tables  = parseInt(document.getElementById('admin-tables').value)||12;
  const prep    = parseInt(document.getElementById('admin-prep').value)||15;
  const cook    = parseInt(document.getElementById('admin-cook').value)||12;

  const { error } = await db.from('restaurants').update({
    name, branch, currency:curr, num_tables:tables, prep_time:prep, cook_time:cook
  }).eq('id', S.restaurantId);

  if(error){ notify('Save failed: '+error.message,''); return; }

  S.currency=curr; S.prepTime=prep; S.cookTime=cook;
  const full=`${name} — ${branch}`;
  document.getElementById('nav-restaurant-name').textContent=full;
  document.getElementById('cust-restaurant-name').textContent=full;
  notify('Settings saved ✓','success');
}

function renderMenuManage(){
  document.getElementById('menu-manage-list').innerHTML = S.menuItems.map(item=>`
    <div class="menu-manage-item">
      <span style="font-size:20px;">${item.emoji}</span>
      <div class="menu-item-info"><div class="name">${item.name}</div><div class="cat">${item.cat||item.category}</div></div>
      <span class="menu-item-price-tag">${S.currency}${Number(item.price).toFixed(2)}</span>
      <label class="toggle-switch">
        <input type="checkbox" ${item.active?'checked':''} onchange="toggleItem('${item.id}',this.checked)">
        <span class="slider-toggle"></span>
      </label>
    </div>`).join('');
}

async function toggleItem(id, active){
  await db.from('menu_items').update({active}).eq('id',id);
  const item = S.menuItems.find(i=>i.id===id);
  if(item) item.active=active;
  renderMenu();
}

async function addMenuItem(){
  const name  = document.getElementById('new-item-name').value.trim();
  const price = parseFloat(document.getElementById('new-item-price').value);
  const desc  = document.getElementById('new-item-desc').value.trim();
  const cat   = document.getElementById('new-item-cat').value;
  const emoji = document.getElementById('new-item-emoji').value||'🍽️';
  if(!name||!price){ notify('Please fill in name and price',''); return; }

  const { data, error } = await db.from('menu_items').insert({
    restaurant_id: S.restaurantId,
    name, description:desc, category:cat, price, emoji, active:true,
    sort_order: S.menuItems.length+1
  }).select().single();

  if(error){ notify('Add failed: '+error.message,''); return; }

  S.menuItems.push({...data, cat:data.category});
  ['new-item-name','new-item-price','new-item-desc','new-item-emoji'].forEach(id=>{document.getElementById(id).value='';});
  notify(`${name} added to menu!`,'success');
  renderMenuManage(); renderMenu();
}

// ══════════════════════════════════════════════════════════════
//  NOTIFICATIONS
// ══════════════════════════════════════════════════════════════
function notify(msg, type=''){
  const bar = document.getElementById('notif-bar');
  const el = document.createElement('div');
  el.className=`notif ${type}`;el.innerHTML=msg;
  bar.appendChild(el);
  setTimeout(()=>el.remove(), 4500);
}

// ══════════════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════════════
async function init(){
  setConn('connecting');

  document.getElementById('loading-msg').textContent = 'Loading restaurant…';
  await loadRestaurant();

  document.getElementById('loading-msg').textContent = 'Loading menu…';
  await loadMenu();

  document.getElementById('loading-msg').textContent = 'Loading tables…';
  await loadTableId();
  await loadDbTables();

  document.getElementById('loading-msg').textContent = 'Loading orders…';
  await loadTodaysOrders();

  document.getElementById('loading-msg').textContent = 'Starting real-time…';
  subscribeRealtime();

  renderCart();

  document.getElementById('pay-modal').addEventListener('click',function(e){if(e.target===this)closeModal();});

  // Refresh kitchen timers every 60s
  setInterval(()=>{
    if(document.getElementById('view-kitchen').classList.contains('active')) renderKitchen();
  }, 60000);

  // Hide loading screen
  setTimeout(()=>{
    document.getElementById('loading-screen').classList.add('hidden');
  }, 800);
}

init();
</script>
</body>
</html>
