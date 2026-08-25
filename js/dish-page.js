(() => {
  const loadScript = src => new Promise(resolve => { const script = document.createElement('script'); script.src = src; script.onload = resolve; script.onerror = resolve; document.head.append(script); });
  const menuOverridesReady = loadScript('js/menu-new.js?v=20260822a');
  const imageScript = document.createElement('script'); imageScript.src = 'js/menu.js?v=20260822a'; document.head.append(imageScript);
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const num = (v) => Number(String(v || 0).replace(/[^0-9,.-]/g, '').replace(',', '.')) || 0;
  const fmt = (v) => `${num(v).toFixed(2).replace('.', ',')} €`;
  const params = new URLSearchParams(location.search);
  const key = params.get('item');
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
  Promise.all([menuOverridesReady, fetch('data/menu.json').then((r) => r.json())]).then(([, data]) => {
    const [cat, code] = String(key || '').split(':');
    const exclusions = window.JURY_MENU_NEW_EXCLUSIONS || {};
    const currentFood = window.JURY_MENU_CUOI_FOOD || [];
    const categories = [...currentFood, ...data.categories, ...(window.JURY_MENU_NEW_EXTRA_CATEGORIES || [])]
      .filter(category => !(exclusions.categories || []).includes(category.id) && !(window.JURY_MENU_CUOI_EXCLUDED_CATEGORIES || new Set()).has(category.id))
      .map(category => ({
        ...category,
        items: [...category.items, ...((window.JURY_MENU_NEW_EXTRA_ITEMS || {})[category.id] || [])]
          .filter(item => !(exclusions.items || new Set()).has(`${category.id}:${item.code}`))
          .map(item => {
            const override = window.JURY_MENU_NEW_OVERRIDES?.[`${category.id}:${item.code}`] || {};
            const merged = { ...item, ...override };
            if (override.variants && item.variants) {
              merged.variants = override.variants.map(variant => ({
                ...(item.variants.find(base => base.code === variant.code) || {}),
                ...variant
              }));
            }
            return merged;
          })
      }));
    const category = categories.find((item) => item.id === cat);
    dish = category?.items.find((item) => String(item.code) === String(code));
    if (!dish) throw Error('not found');
    // Keep the detail page image consistent with the menu placeholder.
    // Dish metadata (name, price, description and variants) still comes from the menu data.
    dish.image = 'assets/jury-logo.jpg';
    gallery = [dish.image];
    document.title = `${dish.name_de} | JURY Restaurant`;
    document.querySelector('#dishName').textContent = `${dish.code} ${dish.name_de}`;
    document.querySelector('#dishCrumb').textContent = `${dish.code} - ${dish.name_de.replace(/\s+/g, '-')}`;
    const description = document.querySelector('#dishDesc');
    description.innerHTML = [dish.desc_de, dish.desc_en]
      .filter(Boolean)
      .map((text, index) => `<span class="juri-dish-description juri-dish-description--${index === 0 ? 'de' : 'en'}" style="display:block${index ? ';margin-top:16px' : ''}">${esc(text)}</span>`)
      .join('');
    const allergenInfo = document.createElement('p');
    allergenInfo.className = 'juri-dish-allergens';
    allergenInfo.style.cssText = 'margin:16px 0 0;color:#f1dfbf;font-size:14px';
    description.insertAdjacentElement('afterend', allergenInfo);
    const showAllergens = (codes) => {
      allergenInfo.textContent = codes?.length ? `Allergene: ${codes.join(', ')}` : '';
      allergenInfo.hidden = !codes?.length;
    };
    setGallery(0);
    const vs = (dish.variants || []).filter((v) => v.price);
    if (vs.length) {
      selected = vs[0];
      showAllergens(selected.allergens || dish.allergens);
      document.querySelector('#dishPrice').textContent = `ab ${fmt(vs[0].price)}`;
      document.querySelector('#dishVariants').innerHTML = vs.map((v, i) => `<button type="button" data-v="${i}">${esc(v.code ? `${v.code} · ` : '')}${esc(v.label_de)}${v.allergens?.length ? ` (${esc(v.allergens.join(', '))})` : ''} <b>${esc(v.price)}</b></button>`).join('');
      document.querySelectorAll('[data-v]').forEach((b) => { b.onclick = () => { selected = vs[Number(b.dataset.v)]; showAllergens(selected.allergens || dish.allergens); document.querySelectorAll('[data-v]').forEach((x) => x.classList.remove('is-selected')); b.classList.add('is-selected'); }; });
      document.querySelector('[data-v]')?.classList.add('is-selected');
    } else {
      showAllergens(dish.allergens);
      document.querySelector('#dishPrice').textContent = fmt(dish.price);
    }
    const related = category?.items.filter((item) => String(item.code) !== String(dish.code)).slice(0, 4) || [];
    const relatedBox = document.createElement('section'); relatedBox.className = 'juri-dish-related'; relatedBox.innerHTML = '<h2>Weitere Gerichte</h2><div class="juri-dish-related-grid"></div>';
    relatedBox.querySelector('div').innerHTML = related.map((item) => { const image = window.photoForDishExact?.(item, cat) || 'assets/jury-logo.jpg'; return `<a href="dish.html?item=${encodeURIComponent(`${cat}:${item.code}`)}&image=${encodeURIComponent(image)}"><img src="${image}" alt="${esc(item.name_de)}"><span>${esc(item.name_de)}</span></a>`; }).join('');
    document.querySelector('.juri-dish-detail')?.append(relatedBox);
  }).catch(() => {});
  const style = document.createElement('style'); style.textContent = '.juri-dish-gallery{position:relative}.juri-dish-gallery>#dishImage{display:block}.juri-dish-gallery>button{position:absolute;top:50%;z-index:2;width:38px;height:38px;border:1px solid #9e8955;border-radius:50%;background:rgba(16,18,25,.8);color:#f1dfbf;font-size:28px;line-height:1;transform:translateY(-50%)}.juri-dish-gallery>#dishPrev{left:12px}.juri-dish-gallery>#dishNext{right:12px}.juri-dish-related{margin:56px auto 0;max-width:1200px}.juri-dish-related h2{color:#f1dfbf}.juri-dish-related-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.juri-dish-related-grid a{display:grid;gap:8px;color:#fff;text-decoration:none}.juri-dish-related-grid img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:10px}@media(max-width:767px){.juri-dish-related-grid{grid-template-columns:repeat(2,1fr)}}'; document.head.append(style);
  dishMinus.onclick = () => { qty = Math.max(1, qty - 1); dishQty.textContent = qty; };
  dishPlus.onclick = () => { qty += 1; dishQty.textContent = qty; };
  dishAdd.onclick = add;
})();
