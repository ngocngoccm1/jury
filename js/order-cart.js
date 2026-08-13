/* JURI online ordering and cart, built for static hosting. */
(() => {
  if (window.JuryCart) return;
  const KEY = 'jury-pickup-cart-v1';
  const PHONE = '4951513609';
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const money = value => Number(String(value || '').replace(/[^\d,.-]/g, '').replace(',', '.')) || 0;
  const read = () => { try { const value = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(value) ? value : []; } catch (_) { return []; } };
  const write = items => { try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (_) {} document.dispatchEvent(new CustomEvent('jury-cart-change')); };
  const count = () => read().reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  const total = () => read().reduce((sum, item) => sum + money(item.price) * Number(item.quantity || 0), 0);
  const keyOf = item => `${item.menuKey}|${item.variantCode || 'single'}`;
  const format = value => `${value.toFixed(2).replace('.', ',')} €`;

  let panel;
  let variantModal;
  let variantState;
  const closeCart = () => panel?.classList.remove('is-open');
  const render = () => {
    if (!panel) return;
    const items = read();
    panel.innerHTML = `<div class="jury-cart-panel__head"><h2>Warenkorb</h2><span class="jury-cart-panel__count">${count()} gerichte</span><button class="jury-cart-close" type="button" aria-label="Warenkorb schließen">×</button></div>${items.length ? `<div class="jury-cart-items">${items.map((item, index) => `<article class="jury-cart-item"><img src="${esc(item.image)}" alt="${esc(item.name)}"><div><b>${esc(item.code ? `(${item.code}) ` : '')}${esc(item.name)}</b><small>${esc(item.variant || '')}</small><div class="jury-cart-qty"><button type="button" data-cart-change="-1" data-cart-index="${index}">−</button><span>${item.quantity}</span><button type="button" data-cart-change="1" data-cart-index="${index}">+</button></div></div><strong>${format(money(item.price) * item.quantity)}</strong></article>`).join('')}</div><div class="jury-cart-total"><span>Gesamt</span><strong>${format(total())}</strong></div><form class="jury-cart-checkout-form"><input name="name" placeholder="Name *" autocomplete="name" required><input name="phone" type="tel" placeholder="Telefon / WhatsApp *" autocomplete="tel" required><input name="pickup" type="datetime-local" aria-label="Abholzeit" required><textarea name="note" placeholder="Hinweis (optional)"></textarea><button class="jury-cart-checkout" type="submit">Bestellung absenden</button><p>Die Bestellung wird per WhatsApp an JURI übermittelt und ist erst nach Bestätigung verbindlich.</p></form>` : `<div class="jury-cart-empty"><svg viewBox="0 0 80 80" fill="none" aria-hidden="true"><path d="M18 26h45l-5 31H24l-6-31Zm8 0 5-10m22 10-5-10" stroke="currentColor" stroke-width="3"/><path d="M21 37c12 7 25 7 39 0" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4"/></svg><p>Ihr Warenkorb ist leer</p></div>`}`;
    panel.querySelector('.jury-cart-close')?.addEventListener('click', closeCart);
    panel.querySelectorAll('[data-cart-change]').forEach(button => button.addEventListener('click', () => {
      const next = read(); const index = Number(button.dataset.cartIndex);
      next[index].quantity += Number(button.dataset.cartChange);
      if (next[index].quantity < 1) next.splice(index, 1);
      write(next);
    }));
    panel.querySelector('form')?.addEventListener('submit', event => {
      event.preventDefault(); if (!event.currentTarget.reportValidity()) return;
      const data = Object.fromEntries(new FormData(event.currentTarget).entries());
      const lines = ['Hallo JURI, ich möchte folgende Bestellung zur Abholung aufgeben:', ''];
      read().forEach(item => lines.push(`${item.quantity}× ${item.code ? `${item.code} · ` : ''}${item.name}${item.variant ? ` (${item.variant})` : ''} — ${format(money(item.price) * item.quantity)}`));
      lines.push('', `Gesamt: ${format(total())}`, `Name: ${data.name}`, `Telefon: ${data.phone}`, `Abholzeit: ${String(data.pickup).replace('T', ' ')}`);
      if (String(data.note || '').trim()) lines.push(`Hinweis: ${String(data.note).trim()}`);
      location.href = `https://wa.me/${PHONE}?text=${encodeURIComponent(lines.join('\n'))}`;
    });
  };

  const add = (entry, quantity = 1, note = '') => {
    const items = read(); const existing = items.find(item => keyOf(item) === keyOf(entry));
    if (existing) { existing.quantity += quantity; if (note) existing.note = note; } else items.push({...entry, quantity, note});
    write(items);
  };
  const addDish = (menuKey, variantCode = '', editIndex = -1) => {
    const dish = window.JuryOrderMenu?.[menuKey]; if (!dish) return;
    const variants = (dish.variants || []).filter(v => v.price);
    const addVariant = (variant, quantity = 1, note = '') => { if (editIndex >= 0) { const current = read(); current.splice(editIndex, 1); write(current); } add({menuKey, code:dish.code, name:dish.name_de, variantCode:variant?.code || '', variant:variant?.label_de || '', price:variant?.price || dish.price, image:dish.image || 'assets/jury-logo.jpg'}, quantity, note); };
    const selected = variants.find(v => String(v.code || '') === String(variantCode || ''));
    if ((selected && editIndex < 0) || variants.length < 2) return addVariant(selected || variants[0]);
    variantState = {dish, variants, addVariant};
    variantModal.querySelector('h2').textContent = dish.name_de;
    variantModal.querySelector('.jury-variant-image').src = dish.image || 'assets/jury-logo.jpg';
    variantModal.querySelector('.jury-variant-description').textContent = dish.desc_de || '';
    variantModal.querySelector('[data-variant-qty]').value = '1';
    variantModal.querySelector('[data-variant-note]').value = '';
    variantModal.querySelector('.jury-variant-options').innerHTML = variants.map((variant, index) => `<button type="button" data-variant-index="${index}"><span>${esc(variant.code ? `${variant.code} · ` : '')}${esc(variant.label_de || 'Standard')}</span><b>${esc(variant.price)}</b></button>`).join('');
    variantModal.querySelectorAll('[data-variant-index]').forEach(button => button.addEventListener('click', () => {
      const quantity = Math.max(1, Number(variantModal.querySelector('[data-variant-qty]').value || 1));
      const note = variantModal.querySelector('[data-variant-note]').value.trim();
      addVariant(variants[Number(button.dataset.variantIndex)], quantity, note);
      variantModal.hidden = true;
    }));
    variantModal.hidden = false;
  };

  const mount = () => {
    const menuBody = document.getElementById('menuBody');
    if (!menuBody) return;
    document.body.classList.add('is-order-page');
    const filter = document.querySelector('.menu-filter'); const tabs = document.querySelector('.menu-tabs'); const menu = document.querySelector('.menu-body'); const legend = document.querySelector('.legend'); const reserve = document.querySelector('.reserve-band');
    const shell = document.createElement('div'); shell.className = 'jury-order-shell';
    const catalog = document.createElement('div'); catalog.className = 'jury-order-catalog';
    const top = document.createElement('div'); top.className = 'jury-order-top'; top.innerHTML = '<h1>Speisekarte</h1>';
    const restaurant = document.createElement('div'); restaurant.className = 'jury-order-restaurant'; restaurant.innerHTML = '<span>📍</span><strong>JURI RESTAURANT HAMELN</strong><span>Kastanienwall 32, 31785 Hameln</span><a href="tel:+4951513609">☎ +49 5151 3609</a>';
    filter.parentNode.insertBefore(shell, filter); shell.append(catalog); catalog.append(top); top.append(filter); [restaurant, tabs, menu, legend, reserve].forEach(node => catalog.append(node));
    panel = document.createElement('aside'); panel.className = 'jury-cart-panel'; panel.id = 'juryCart'; shell.append(panel);
    variantModal = document.createElement('div'); variantModal.className = 'jury-variant-modal'; variantModal.hidden = true; variantModal.innerHTML = '<section role="dialog" aria-modal="true" aria-labelledby="juryVariantTitle"><div><h2 id="juryVariantTitle"></h2><button type="button" data-close-variants aria-label="Schließen">×</button></div><p>Bitte wählen Sie eine Variante.</p><div class="jury-variant-options"></div></section>'; document.body.append(variantModal);
    variantModal.querySelector('.jury-variant-options').insertAdjacentHTML('beforebegin', '<img class="jury-variant-image" src="assets/jury-logo.jpg" alt=""><p class="jury-variant-description"></p><label class="jury-variant-quantity">Menge <input data-variant-qty type="number" min="1" value="1"></label><label class="jury-variant-note">Notiz <textarea data-variant-note placeholder="Fügen Sie eine Notiz hinzu"></textarea></label>');
    variantModal.querySelector('[data-close-variants]').addEventListener('click', () => { variantModal.hidden = true; });
    variantModal.addEventListener('click', event => { if (event.target === variantModal) variantModal.hidden = true; });
    const syncMoreCategories = () => {
      const scroll = tabs.querySelector('.menu-tabs__scroll');
      const tabButtons = [...scroll.querySelectorAll('.menu-tab')];
      if (tabButtons.length <= 5 || scroll.querySelector('.jury-order-more')) return;
      const more = document.createElement('button'); more.type = 'button'; more.className = 'jury-order-more'; more.textContent = `+${tabButtons.length - 5}`;
      more.addEventListener('click', () => { const open = scroll.classList.toggle('is-expanded'); more.textContent = open ? '×' : `+${tabButtons.length - 5}`; });
      scroll.append(more);
    };
    new MutationObserver(syncMoreCategories).observe(tabs.querySelector('.menu-tabs__scroll'), {childList:true});
    syncMoreCategories();
    document.querySelectorAll('.juri-shell-tools a').forEach(link => { if (link.href.includes('speisekarte')) link.setAttribute('aria-current', 'page'); });
    document.addEventListener('click', event => {
      const addButton = event.target.closest('[data-add-dish]');
      if (addButton) { event.preventDefault(); addDish(addButton.dataset.addDish, addButton.dataset.variantCode || ''); addButton.classList.add('is-added'); setTimeout(() => addButton.classList.remove('is-added'), 550); }
      const cartLink = event.target.closest('.juri-shell-cart, .jury-cart-link');
      if (cartLink && matchMedia('(max-width:767px)').matches) { event.preventDefault(); panel.classList.add('is-open'); }
    });
    render();
    const openPendingEdit = () => { try { const edit = JSON.parse(sessionStorage.getItem('jury-edit-item') || 'null'); if (!edit?.menuKey) return; if (!window.JuryOrderMenu?.[edit.menuKey]) return setTimeout(openPendingEdit, 120); sessionStorage.removeItem('jury-edit-item'); addDish(edit.menuKey, edit.variantCode || '', Number(edit.index)); } catch (_) {} };
    openPendingEdit();
    if (location.hash === '#juryCart' && matchMedia('(max-width:767px)').matches) panel.classList.add('is-open');
  };
  document.addEventListener('jury-cart-change', render);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, {once:true}); else mount();
  window.JuryCart = {read,write,count,add};
})();
