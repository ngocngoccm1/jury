(() => {
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const num = (v) => Number(String(v || 0).replace(/[^0-9,.-]/g, '').replace(',', '.')) || 0;
  const fmt = (v) => `${num(v).toFixed(2).replace('.', ',')} €`;
  const params = new URLSearchParams(location.search);
  const key = params.get('item');
  const requestedImage = params.get('image');
  let dish, selected = null, qty = 1, gallery = [], galleryIndex = 0;
  const imageEl = document.querySelector('#dishImage');
  const thumbEl = document.querySelector('#dishThumb');
  const galleryWrap = imageEl?.parentElement;
  if (galleryWrap && imageEl) { galleryWrap.classList.add('juri-dish-gallery'); galleryWrap.insertAdjacentHTML('afterbegin', '<button id="dishPrev" type="button" aria-label="Vorheriges Bild">‹</button>'); galleryWrap.insertAdjacentHTML('beforeend', '<button id="dishNext" type="button" aria-label="Nächstes Bild">›</button>'); }
  const setGallery = (index) => { if (!gallery.length) return; galleryIndex = (index + gallery.length) % gallery.length; imageEl.src = gallery[galleryIndex]; thumbEl.src = gallery[galleryIndex]; };
  document.querySelector('#dishPrev')?.addEventListener('click', () => setGallery(galleryIndex - 1));
  document.querySelector('#dishNext')?.addEventListener('click', () => setGallery(galleryIndex + 1));
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
    gallery = [dish.image, 'assets/jury-logo.jpg'];
    document.title = `${dish.name_de} | JURI Restaurant`;
    document.querySelector('#dishName').textContent = `(${dish.code}) ${dish.name_de}`;
    document.querySelector('#dishCrumb').textContent = `(${dish.code})-${dish.name_de.replace(/\s+/g, '-')}`;
    document.querySelector('#dishDesc').textContent = dish.desc_de || '';
    setGallery(0);
    const vs = (dish.variants || []).filter((v) => v.price);
    if (vs.length) {
      selected = vs[0];
      document.querySelector('#dishPrice').textContent = `ab ${fmt(vs[0].price)}`;
      document.querySelector('#dishVariants').innerHTML = vs.map((v, i) => `<button type="button" data-v="${i}">${esc(v.code ? `${v.code} · ` : '')}${esc(v.label_de)} <b>${esc(v.price)}</b></button>`).join('');
      document.querySelectorAll('[data-v]').forEach((b) => { b.onclick = () => { selected = vs[Number(b.dataset.v)]; document.querySelectorAll('[data-v]').forEach((x) => x.classList.remove('is-selected')); b.classList.add('is-selected'); }; });
      document.querySelector('[data-v]')?.classList.add('is-selected');
    } else document.querySelector('#dishPrice').textContent = fmt(dish.price);
    const related = data.categories.find((c) => c.id === cat)?.items.filter((item) => String(item.code) !== String(dish.code)).slice(0, 4) || [];
    const relatedBox = document.createElement('section'); relatedBox.className = 'juri-dish-related'; relatedBox.innerHTML = '<h2>Weitere Gerichte</h2><div class="juri-dish-related-grid"></div>';
    relatedBox.querySelector('div').innerHTML = related.map((item) => `<a href="dish.html?item=${encodeURIComponent(`${cat}:${item.code}`)}"><img src="assets/jury-logo.jpg" alt=""><span>${esc(item.name_de)}</span></a>`).join('');
    document.querySelector('.juri-dish-detail')?.append(relatedBox);
  }).catch(() => {});
  const style = document.createElement('style'); style.textContent = '.juri-dish-gallery{position:relative}.juri-dish-gallery>#dishImage{display:block}.juri-dish-gallery>button{position:absolute;top:50%;z-index:2;width:38px;height:38px;border:1px solid #9e8955;border-radius:50%;background:rgba(16,18,25,.8);color:#f1dfbf;font-size:28px;line-height:1;transform:translateY(-50%)}.juri-dish-gallery>#dishPrev{left:12px}.juri-dish-gallery>#dishNext{right:12px}.juri-dish-related{margin:56px auto 0;max-width:1200px}.juri-dish-related h2{color:#f1dfbf}.juri-dish-related-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.juri-dish-related-grid a{display:grid;gap:8px;color:#fff;text-decoration:none}.juri-dish-related-grid img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:10px}@media(max-width:767px){.juri-dish-related-grid{grid-template-columns:repeat(2,1fr)}}'; document.head.append(style);
  dishMinus.onclick = () => { qty = Math.max(1, qty - 1); dishQty.textContent = qty; };
  dishPlus.onclick = () => { qty += 1; dishQty.textContent = qty; };
  dishAdd.onclick = add;
})();
