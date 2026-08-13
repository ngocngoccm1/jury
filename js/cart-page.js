(() => {
  const KEY = 'jury-pickup-cart-v1';
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const toNumber = value => Number(String(value ?? 0).replace(/[^0-9,.-]/g, '').replace(',', '.')) || 0;
  const money = value => toNumber(value).toFixed(2).replace('.', ',') + ' €';
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (_) { return []; } };
  const write = items => { localStorage.setItem(KEY, JSON.stringify(items)); document.dispatchEvent(new CustomEvent('jury-cart-change')); render(); };
  const render = () => {
    const items = read(); const list = document.querySelector('#checkoutItems'); const totals = document.querySelector('#checkoutTotals');
    if (!list || !totals) return;
    list.innerHTML = items.length ? items.map((item, index) => `<article class="jury-checkout-item"><img src="${esc(item.image || 'assets/jury-logo.jpg')}" alt="${esc(item.name)}"><div><strong>(${esc(item.code || '')}) ${esc(item.name)}</strong><em>Notiz: ${esc(item.note || '---')}</em></div><b>(${money(item.price)}) x ${item.quantity}</b><p>Preis: ${money(toNumber(item.price) * Number(item.quantity))}</p><div class="jury-item-actions"><button type="button" data-edit="${index}">✎ Ändern</button><button type="button" data-remove="${index}">♜ Löschen</button></div></article>`).join('') : '<div class="jury-empty-cart"><div class="jury-empty-icon">🛒</div><h3>Ihr Warenkorb ist leer</h3><p>Fügen Sie etwas hinzu, um ihn glücklich zu machen!</p><a href="speisekarte.html">Weiter einkaufen</a></div>';
    const total = items.reduce((sum, item) => sum + toNumber(item.price) * Number(item.quantity || 0), 0);
    totals.innerHTML = items.length ? `<p><span>Menge</span><span>x${items.reduce((sum, item) => sum + Number(item.quantity || 0), 0)}</span></p><p><span>Summe</span><span>${money(total)}</span></p><p><span>Tax</span><span>0</span></p><p class="grand"><strong>Gesamt</strong><strong>${money(total)}</strong></p>` : '';
    list.querySelectorAll('[data-remove]').forEach(button => button.addEventListener('click', () => { const next = read(); next.splice(Number(button.dataset.remove), 1); write(next); }));
    list.querySelectorAll('[data-edit]').forEach(button => button.addEventListener('click', () => { const item = read()[Number(button.dataset.edit)]; sessionStorage.setItem('jury-edit-item', JSON.stringify({...item, index:Number(button.dataset.edit)})); window.location.href = 'speisekarte.html'; }));
  };
  document.querySelector('#pickupTime span').textContent = new Intl.DateTimeFormat('de-DE', {hour:'2-digit', minute:'2-digit'}).format(new Date());
  document.querySelector('#checkoutForm')?.addEventListener('submit', event => { event.preventDefault(); const items = read(); if (!items.length) return; const data = new FormData(event.currentTarget); const lines = items.map(item => `(${item.code || ''}) ${item.name} ${item.variant ? `– ${item.variant}` : ''} x${item.quantity} = ${money(toNumber(item.price) * Number(item.quantity))}`).join('%0A'); const msg = `Neue Bestellung JURI%0AName: ${data.get('firstName')} ${data.get('lastName')}%0AE-Mail: ${data.get('email')}%0ATelefon: ${data.get('phone')}%0AZeit: ${document.querySelector('#pickupTime span').textContent}%0A${lines}%0ANotiz: ${data.get('note') || '---'}`; window.location.href = `https://wa.me/4951513609?text=${msg}`; });
  document.addEventListener('jury-cart-change', render); render();
})();
