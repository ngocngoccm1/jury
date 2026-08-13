(() => {
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const num = (v) => Number(String(v || 0).replace(/[^0-9,.-]/g, '').replace(',', '.')) || 0;
  const fmt = (v) => `${num(v).toFixed(2).replace('.', ',')} €`;
  const params = new URLSearchParams(location.search);
  const key = params.get('item');
  const requestedImage = params.get('image');
  let dish, selected = null, qty = 1;
  const read = () => { try { return JSON.parse(localStorage.getItem('jury-pickup-cart-v1') || '[]'); } catch (_) { return []; } };
  const add = () => {
    const v = selected || (dish.variants || []).find((x) => x.price);
    const entry = { menuKey: key, code: dish.code, name: dish.name_de, variantCode: v?.code || '', variant: v?.label_de || '', price: v?.price || dish.price, image: dish.image || 'assets/jury-logo.jpg', note: document.querySelector('#dishNote').value, quantity: qty };
    const items = read();
    const same = items.find((x) => x.menuKey === entry.menuKey && x.variantCode === entry.variantCode);
    if (same) same.quantity += qty; else items.push(entry);
    localStorage.setItem('jury-pickup-cart-v1', JSON.stringify(items));
    document.dispatchEvent(new CustomEvent('jury-cart-change'));
    location.href = 'speisekarte.html';
  };
  fetch('data/menu.json').then((r) => r.json()).then((data) => {
    const [cat, code] = String(key || '').split(':');
    dish = data.categories.find((c) => c.id === cat)?.items.find((i) => String(i.code) === String(code));
    if (!dish) throw Error('not found');
    dish.image = requestedImage || 'assets/jury-logo.jpg';
    document.title = `${dish.name_de} | JURI Restaurant`;
    document.querySelector('#dishName').textContent = `(${dish.code}) ${dish.name_de}`;
    document.querySelector('#dishCrumb').textContent = `(${dish.code})-${dish.name_de.replace(/\s+/g, '-')}`;
    document.querySelector('#dishDesc').textContent = dish.desc_de || '';
    document.querySelector('#dishImage').src = dish.image;
    document.querySelector('#dishThumb').src = dish.image;
    const vs = (dish.variants || []).filter((v) => v.price);
    if (vs.length) {
      selected = vs[0];
      document.querySelector('#dishPrice').textContent = `ab ${fmt(vs[0].price)}`;
      document.querySelector('#dishVariants').innerHTML = vs.map((v, i) => `<button type="button" data-v="${i}">${esc(v.code ? `${v.code} · ` : '')}${esc(v.label_de)} <b>${esc(v.price)}</b></button>`).join('');
      document.querySelectorAll('[data-v]').forEach((b) => { b.onclick = () => { selected = vs[Number(b.dataset.v)]; document.querySelectorAll('[data-v]').forEach((x) => x.classList.remove('is-selected')); b.classList.add('is-selected'); }; });
      document.querySelector('[data-v]')?.classList.add('is-selected');
    } else document.querySelector('#dishPrice').textContent = fmt(dish.price);
  }).catch(() => {});
  dishMinus.onclick = () => { qty = Math.max(1, qty - 1); dishQty.textContent = qty; };
  dishPlus.onclick = () => { qty += 1; dishQty.textContent = qty; };
  dishAdd.onclick = add;
})();
