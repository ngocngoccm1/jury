/* Local, no-backend pickup cart. The final order is confirmed through JURI's WhatsApp. */
(() => {
  if (window.JuryCart) return;

  const PHONE = '4951513609';
  const STORAGE_KEY = 'jury-pickup-cart-v1';
  const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
  const read = () => {
    try {
      const cart = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(cart) ? cart : [];
    } catch (_) { return []; }
  };
  const write = cart => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); } catch (_) {}
    document.dispatchEvent(new CustomEvent('jury-cart-change'));
  };
  const count = () => read().reduce((total, item) => total + Number(item.quantity || 0), 0);
  const itemKey = item => [item.menuKey, item.variantCode || 'single'].join('|');

  const css = `
    .dish[data-add-dish],.dish__variants li[data-add-dish]{cursor:pointer}.dish[data-add-dish]:focus-visible,.dish__variants li[data-add-dish]:focus-visible{outline:2px solid #e5efcf;outline-offset:3px}
    .jury-order-modal[hidden]{display:none!important}.jury-order-modal{position:fixed;inset:0;z-index:10000;display:grid;place-items:center;padding:16px;background:rgba(0,0,0,.64)}
    .jury-order-modal__panel{width:min(100%,430px);max-height:calc(100dvh - 32px);overflow:auto;border:1px solid rgba(229,239,207,.26);border-radius:14px;background:#202126;color:#fff;box-shadow:0 24px 70px rgba(0,0,0,.48)}
    .jury-order-modal__head{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;padding:22px 22px 8px}.jury-order-modal__head h2{margin:0;color:#e5efcf;font:700 21px/1.25 system-ui,sans-serif}.jury-order-modal__head p{margin:6px 0 0;color:#aaa;font:14px/1.45 system-ui,sans-serif}
    .jury-order-modal__close{width:36px;height:36px;flex:none;border:0;border-radius:50%;background:transparent;color:#fff;font-size:26px;line-height:1;cursor:pointer}
    .jury-order-options{display:grid;gap:10px;padding:14px 22px 22px}.jury-order-option{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;min-height:48px;border:1px solid rgba(229,239,207,.22);border-radius:8px;background:#19201e;color:#fff;padding:10px 12px;text-align:left;font:600 14px/1.3 system-ui,sans-serif;cursor:pointer}.jury-order-option small{color:#e5efcf;font-size:13px}
    .jury-cart-link{position:fixed;right:16px;bottom:16px;z-index:80;display:none;min-height:46px;align-items:center;justify-content:center;gap:8px;border-radius:999px;background:#7d9b79!important;color:#fff!important;padding:10px 18px!important;font:600 14px/1 system-ui,sans-serif!important;box-shadow:0 10px 26px rgba(0,0,0,.28)!important}.jury-cart-link.is-visible{display:inline-flex}
    .jury-order-checkout{padding:56px 0 74px;background:#19201e;color:#fff}.jury-order-checkout__wrap{width:min(100% - 32px,940px);margin:auto}.jury-order-checkout h2{margin:0;color:#e5efcf;font:700 clamp(28px,4vw,42px)/1.1 system-ui,sans-serif}.jury-order-checkout__intro{margin:10px 0 28px;color:#aaa;font:14px/1.5 system-ui,sans-serif}
    .jury-order-layout{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(280px,.9fr);gap:24px}.jury-order-list,.jury-order-form,.jury-order-empty{border:1px solid rgba(229,239,207,.18);border-radius:14px;background:#202126;padding:18px}.jury-order-row{display:grid;grid-template-columns:1fr auto;gap:12px;padding:14px 0;border-bottom:1px solid rgba(229,239,207,.14)}.jury-order-row:first-child{padding-top:0}.jury-order-row:last-child{padding-bottom:0;border-bottom:0}.jury-order-row b{display:block;color:#fff;font:600 15px/1.35 system-ui,sans-serif}.jury-order-row span{display:block;margin-top:4px;color:#aaa;font:13px/1.4 system-ui,sans-serif}.jury-order-row__price{color:#e5efcf!important;text-align:right}.jury-order-qty{display:flex;align-items:center;justify-content:flex-end;gap:6px;margin-top:8px}.jury-order-qty button{width:28px;height:28px;border:1px solid rgba(229,239,207,.24);border-radius:6px;background:transparent;color:#fff;font-size:16px;cursor:pointer}
    .jury-order-form{display:grid;align-content:start;gap:13px}.jury-order-form label{display:grid;gap:6px;color:#e5efcf;font:600 13px/1.3 system-ui,sans-serif}.jury-order-form input,.jury-order-form textarea{width:100%;min-height:44px;border:1px solid rgba(229,239,207,.25);border-radius:8px;background:#19201e;color:#fff;padding:10px 12px;font:14px/1.35 system-ui,sans-serif}.jury-order-form textarea{min-height:80px;resize:vertical}.jury-order-form button{min-height:46px;border:0;border-radius:8px;background:#7d9b79;color:#fff;font:600 14px/1 system-ui,sans-serif;cursor:pointer}.jury-order-back{display:inline-flex;margin-top:16px;color:#e5efcf!important;font:600 14px/1.3 system-ui,sans-serif}.jury-order-form__note{margin:0;color:#aaa;font:12px/1.45 system-ui,sans-serif}
    @media(max-width:767px){.jury-order-layout{grid-template-columns:1fr}.jury-order-checkout{padding:36px 0 54px}.jury-cart-link{right:12px;bottom:12px}.jury-order-modal{padding:10px}.jury-order-modal__head{padding:18px 18px 6px}.jury-order-options{padding:12px 18px 18px}}
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.append(style);

  const optionModal = document.createElement('div');
  optionModal.className = 'jury-order-modal';
  optionModal.hidden = true;
  optionModal.innerHTML = '<section class="jury-order-modal__panel" role="dialog" aria-modal="true" aria-labelledby="juryOrderTitle"><div class="jury-order-modal__head"><div><h2 id="juryOrderTitle"></h2><p>Bitte wählen Sie eine Variante.</p></div><button type="button" class="jury-order-modal__close" aria-label="Schließen">×</button></div><div class="jury-order-options"></div></section>';
  document.body.append(optionModal);
  const closeModal = () => { optionModal.hidden = true; };
  optionModal.querySelector('.jury-order-modal__close').addEventListener('click', closeModal);
  optionModal.addEventListener('click', event => { if (event.target === optionModal) closeModal(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !optionModal.hidden) closeModal(); });

  const cartLink = document.createElement('a');
  cartLink.className = 'jury-cart-link';
  cartLink.href = 'bestellen.html';
  cartLink.innerHTML = 'Warenkorb <span aria-live="polite">0</span>';
  document.body.append(cartLink);
  const renderCartLink = () => {
    const total = count();
    cartLink.querySelector('span').textContent = total;
    cartLink.classList.toggle('is-visible', total > 0 && !/bestellen\.html$/i.test(location.pathname));
  };
  document.addEventListener('jury-cart-change', renderCartLink);

  const add = entry => {
    const cart = read();
    const existing = cart.find(item => itemKey(item) === itemKey(entry));
    if (existing) existing.quantity += 1;
    else cart.push({ ...entry, quantity: 1 });
    write(cart);
  };

  const addMenuItem = (menuKey, variantCode = '') => {
    const item = window.JuryOrderMenu?.[menuKey];
    if (!item) return;
    const variants = (item.variants || []).filter(variant => variant.price);
    const selected = variant => add({
      menuKey,
      code: item.code,
      name: item.name_de,
      variantCode: variant?.code || '',
      variant: variant?.label_de || '',
      price: variant?.price || item.price || ''
    });
    if (!variants.length) return selected(null);
    if (variantCode) {
      const directVariant = variants.find(variant => String(variant.code || '') === variantCode);
      if (directVariant) return selected(directVariant);
    }
    optionModal.querySelector('#juryOrderTitle').textContent = item.name_de;
    const choices = optionModal.querySelector('.jury-order-options');
    choices.innerHTML = variants.map((variant, index) => `<button class="jury-order-option" type="button" data-order-option="${index}"><span>${esc(variant.code ? `${variant.code} · ` : '')}${esc(variant.label_de || '')}</span><small>${esc(variant.price)}</small></button>`).join('');
    choices.querySelectorAll('[data-order-option]').forEach(button => button.addEventListener('click', () => {
      selected(variants[Number(button.dataset.orderOption)]);
      closeModal();
    }));
    optionModal.hidden = false;
  };

  document.addEventListener('click', event => {
    const addButton = event.target.closest('[data-add-dish]');
    if (!addButton) return;
    event.preventDefault();
    addMenuItem(addButton.dataset.addDish, addButton.dataset.variantCode || '');
  });

  document.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const addTarget = event.target.closest('[data-add-dish]');
    if (!addTarget) return;
    event.preventDefault();
    addMenuItem(addTarget.dataset.addDish, addTarget.dataset.variantCode || '');
  });

  const renderCheckout = () => {
    const checkout = document.getElementById('juryOrderCheckout');
    if (!checkout) return;
    const cart = read();
    if (!cart.length) {
      checkout.innerHTML = '<div class="jury-order-checkout__wrap"><h2>Ihre Bestellung</h2><p class="jury-order-checkout__intro">Wählen Sie zunächst Ihre Gerichte aus der Speisekarte aus.</p><div class="jury-order-empty"><a class="jury-order-back" href="speisekarte.html">Zur Speisekarte</a></div></div>';
      return;
    }
    checkout.innerHTML = `<div class="jury-order-checkout__wrap"><h2>Ihre Bestellung</h2><p class="jury-order-checkout__intro">Wählen Sie Ihre Abholzeit. Die Bestellung wird anschließend direkt per WhatsApp an JURI gesendet.</p><div class="jury-order-layout"><div class="jury-order-list">${cart.map((item, index) => `<div class="jury-order-row"><div><b>${esc(item.code)} · ${esc(item.name)}</b><span>${esc(item.variant || 'Standard')}</span></div><div><span class="jury-order-row__price">${esc(item.price)}</span><div class="jury-order-qty"><button type="button" data-cart-qty="-1" data-cart-index="${index}" aria-label="Menge verringern">−</button><span>${item.quantity}×</span><button type="button" data-cart-qty="1" data-cart-index="${index}" aria-label="Menge erhöhen">+</button></div></div></div>`).join('')}</div><form class="jury-order-form" id="juryOrderForm"><label>Name<input name="name" autocomplete="name" required></label><label>Telefon / WhatsApp<input name="phone" type="tel" autocomplete="tel" required></label><label>Abholzeit<input name="pickup" type="datetime-local" required></label><label>Hinweis (optional)<textarea name="note" placeholder="z. B. Allergien oder Sonderwünsche"></textarea></label><button type="submit">Bestellung per WhatsApp senden</button><p class="jury-order-form__note">Die Bestellung wird erst nach persönlicher Bestätigung durch JURI verbindlich.</p></form></div><a class="jury-order-back" href="speisekarte.html">+ Weitere Gerichte auswählen</a></div>`;
    checkout.querySelectorAll('[data-cart-qty]').forEach(button => button.addEventListener('click', () => {
      const next = read();
      const index = Number(button.dataset.cartIndex);
      next[index].quantity += Number(button.dataset.cartQty);
      if (next[index].quantity <= 0) next.splice(index, 1);
      write(next);
    }));
    checkout.querySelector('#juryOrderForm').addEventListener('submit', event => {
      event.preventDefault();
      const form = event.currentTarget;
      if (!form.reportValidity()) return;
      const values = Object.fromEntries(new FormData(form).entries());
      const lines = ['Hallo JURI, ich möchte folgende Bestellung zur Abholung aufgeben:', ''];
      read().forEach(item => lines.push(`${item.quantity}× ${item.code} · ${item.name}${item.variant ? ` (${item.variant})` : ''} — ${item.price}`));
      lines.push('', `Name: ${values.name}`, `Telefon: ${values.phone}`, `Abholzeit: ${values.pickup.replace('T', ' ')}`);
      if (values.note.trim()) lines.push(`Hinweis: ${values.note.trim()}`);
      window.location.assign(`https://wa.me/${PHONE}?text=${encodeURIComponent(lines.join('\n'))}`);
    });
  };

  const mountCheckout = () => {
    if (!/bestellen\.html$/i.test(location.pathname) || document.getElementById('juryOrderCheckout')) return;
    const section = document.createElement('section');
    section.id = 'juryOrderCheckout';
    section.className = 'jury-order-checkout';
    const main = document.querySelector('main');
    if (!main) return;
    main.insertAdjacentElement('afterend', section);
    renderCheckout();
  };
  document.addEventListener('jury-cart-change', renderCheckout);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountCheckout, { once: true });
  else mountCheckout();
  renderCartLink();
  window.JuryCart = { add, read, write, count };
})();
