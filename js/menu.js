// js/menu.js — Speisekarte: fetch menu.json + render (plain DOM, no deps)

// ---------- shared UI (header/drawer/lang) — same hooks as home.js ----------
const header = document.querySelector('.header');
addEventListener('scroll', () => header?.classList.toggle('scrolled', scrollY > 40), { passive: true });

const drawer = document.getElementById('drawer');
document.getElementById('burger')?.addEventListener('click', () => drawer.classList.add('open'));
drawer?.querySelector('.drawer-close')?.addEventListener('click', () => drawer.classList.remove('open'));
drawer?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));

function setLang(lang) {
  document.body.classList.toggle('lang-en', lang === 'en');
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-toggle button').forEach(b =>
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  try { localStorage.setItem('jury-lang', lang); } catch (e) {}
}
document.querySelectorAll('.lang-toggle button').forEach(b =>
  b.addEventListener('click', () => setLang(b.dataset.lang)));
setLang((() => { try { return localStorage.getItem('jury-lang') || 'de'; } catch (e) { return 'de'; } })());

// ---------- helpers ----------
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
// price like "12,90 €" -> "12.90" for schema.org
const priceNum = p => (String(p).match(/([\d.,]+)/)?.[1] || '').replace('.', '').replace(',', '.');
// a dish is vegan if its code/name is not meat-ish AND category is vegan OR variant labelled Tofu-only.
// Data has no vegan flag, so use a conservative heuristic on German labels. ponytail: heuristic filter,
// upgrade to a real `vegan:true` field in menu.json if the kitchen wants exact control.
const NONVEGAN = /hähnch|hühn|chicken|rind|beef|schwein|pork|ente|duck|garnel|shrimp|lachs|salmon|fisch|fish|thunfisch|surimi|krabben|ei\b|egg|wurst|käse|milch|honig|joghurt|butter/i;
const VEGANHINT = /vegan/i;
function isVeganItem(it) {
  const hay = [it.name_de, it.desc_de, ...(it.variants || []).map(v => v.label_de)].join(' ');
  if (VEGANHINT.test(hay) && !NONVEGAN.test(it.name_de + ' ' + (it.desc_de || ''))) return true;
  // whole category vegan handled by caller; here: single tofu/gemüse dishes without meat words
  if (/^\s*(tofu|gemüse|edamame|regenbogen|mango salat|papaya)/i.test(it.name_de) && !NONVEGAN.test(hay)) return true;
  return false;
}
function chips(allergens) {
  if (!allergens || !allergens.length) return '';
  return `<div class="dish__allergens">${allergens.map(a => `<span class="chip">${esc(a)}</span>`).join('')}</div>`;
}

// ---------- render ----------
const CAT_EL = document.getElementById('menuBody');
const TAB_EL = document.getElementById('menuTabs');

function renderVariant(v) {
  const code = v.code ? `<span class="var-code">${esc(v.code)}</span>` : '';
  const label = esc(v.label_de || '');
  const labelEn = v.label_en && v.label_en !== v.label_de ? esc(v.label_en) : label;
  return `<li>${code}
    <span class="var-label"><span lang="de">${label}</span><span lang="en">${labelEn}</span></span>
    ${v.allergens && v.allergens.length ? `<span class="var-alg">${v.allergens.map(a => `<span class="chip">${esc(a)}</span>`).join('')}</span>` : ''}
    <span class="var-price">${esc(v.price || '')}</span></li>`;
}

function renderDish(it, catVegan) {
  const vegan = catVegan || isVeganItem(it);
  const nameEn = it.name_en && it.name_en !== it.name_de ? esc(it.name_en) : esc(it.name_de);
  const desc = it.desc_de
    ? `<p class="dish__desc"><span lang="de">${esc(it.desc_de)}</span><span lang="en">${esc(it.desc_en || it.desc_de)}</span></p>`
    : '';
  let variantsPart, headPrice, cardAllergens;
  if (it.variants && it.variants.length) {
    variantsPart = `<ul class="dish__variants">${it.variants.map(renderVariant).join('')}</ul>`;
    headPrice = '';
    cardAllergens = ''; // allergens shown per-variant
  } else {
    variantsPart = '';
    headPrice = it.price ? `<span class="dish__price--single">${esc(it.price)}</span>` : '';
    cardAllergens = chips(it.allergens);
  }
  const searchText = esc([it.code, it.name_de, it.name_en, it.desc_de].filter(Boolean).join(' ').toLowerCase());
  const imgCode = esc(it.code);
  return `<article class="dish" data-vegan="${vegan}" data-search="${searchText}">
    <div class="dish__body">
      <div class="dish__head">
        <div>
          <span class="dish__code">Nr. ${imgCode}</span>
          <h3 class="dish__name"><span lang="de">${esc(it.name_de)}</span><span lang="en">${nameEn}</span></h3>
          ${vegan ? '<span class="badge-vegan" lang="de">Vegan</span>' : ''}
        </div>
        ${headPrice}
      </div>
      ${desc}
      ${cardAllergens}
      ${variantsPart}
    </div>
  </article>`;
}

function buildSchema(cats) {
  return {
    '@context': 'https://schema.org', '@type': 'Menu', 'name': 'Speisekarte — JURI Restaurant',
    'hasMenuSection': cats.map(c => ({
      '@type': 'MenuSection', 'name': c.name_de,
      'hasMenuItem': c.items.map(it => {
        const item = { '@type': 'MenuItem', 'name': it.name_de };
        if (it.desc_de) item.description = it.desc_de;
        if (it.variants && it.variants.length) {
          item.offers = it.variants.filter(v => v.price).map(v => ({
            '@type': 'Offer', 'name': v.label_de, 'price': priceNum(v.price), 'priceCurrency': 'EUR'
          }));
        } else if (it.price) {
          item.offers = { '@type': 'Offer', 'price': priceNum(it.price), 'priceCurrency': 'EUR' };
        }
        return item;
      })
    }))
  };
}

fetch('_data/menu.json')
  .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
  .then(data => {
    const cats = data.categories;

    // tabs
    TAB_EL.innerHTML = cats.map((c, i) =>
      `<button class="menu-tab${i === 0 ? ' active' : ''}" data-target="${c.id}">${esc(c.name_de)}</button>`).join('');

    // categories
    CAT_EL.innerHTML = cats.map(c => {
      const catVegan = /vegan/i.test(c.name_de);
      return `<section class="menu-category" id="${esc(c.id)}">
        <h2><span lang="de">${esc(c.name_de)}</span><span lang="en">${esc(c.name_en || c.name_de)}</span></h2>
        <span class="menu-category__count">${c.items.length} <span lang="de">Gerichte</span><span lang="en">dishes</span></span>
        <div class="dish-grid">${c.items.map(it => renderDish(it, catVegan)).join('')}</div>
      </section>`;
    }).join('');
    document.getElementById('menuEmpty')?.classList.remove('show');

    // legends
    const legA = document.getElementById('legendAllergen');
    if (legA) legA.innerHTML = Object.entries(data.allergen_legend)
      .map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('');
    const legZ = document.getElementById('legendAdditive');
    if (legZ) legZ.innerHTML = Object.entries(data.additive_legend)
      .map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('');

    // JSON-LD schema
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(buildSchema(cats));
    document.head.appendChild(s);

    wireInteractions();
  })
  .catch(() => {
    if (CAT_EL) CAT_EL.innerHTML =
      '<p class="menu-status">Speisekarte konnte nicht geladen werden. Bitte laden Sie die Seite neu.</p>';
  });

// ---------- tabs (one category = one "page"), search, vegan filter ----------
function wireInteractions() {
  const tabs = [...document.querySelectorAll('.menu-tab')];
  const cats = [...document.querySelectorAll('.menu-category')];
  const search = document.getElementById('menuSearch');
  const veganBtn = document.getElementById('veganToggle');
  const empty = document.getElementById('menuEmpty');
  const body = document.querySelector('.menu-body');

  let activeId = cats[0]?.id || null;

  // Show a single category "page"; hide the rest. Filtering runs within it.
  function showCategory(id, scroll) {
    activeId = id;
    cats.forEach(c => c.classList.toggle('is-active', c.id === id));
    tabs.forEach(t => t.classList.toggle('active', t.dataset.target === id));
    document.querySelector('.menu-tab.active')
      ?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    if (scroll) body?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // strip basic Vietnamese diacritics so "pho" matches "Phở"
  const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').toLowerCase();

  // filter: search text (across ALL categories) + vegan (within visible scope)
  function applyFilter() {
    const q = norm((search?.value || '').trim());
    const veganOnly = veganBtn?.getAttribute('aria-pressed') === 'true';
    const searching = q.length > 0;
    // searching -> reveal every category so matches show across groups; else -> single page
    document.body.classList.toggle('menu-searching', searching);

    let anyVisible = false;
    cats.forEach(cat => {
      const inScope = searching || cat.id === activeId;
      let catVisible = false;
      cat.querySelectorAll('.dish').forEach(d => {
        const okText = !q || norm(d.dataset.search).includes(q);
        const okVegan = !veganOnly || d.dataset.vegan === 'true';
        const show = inScope && okText && okVegan;
        d.style.display = show ? '' : 'none';
        if (show) catVisible = true;
      });
      // when searching, hide whole category if nothing matched; single-page mode uses CSS .is-active
      cat.classList.toggle('search-hidden', searching && !catVisible);
      if (catVisible) anyVisible = true;
    });
    empty?.classList.toggle('show', !anyVisible);
  }

  tabs.forEach(t => t.addEventListener('click', () => {
    if (search) search.value = '';           // leaving search returns to single-page mode
    showCategory(t.dataset.target, true);
    applyFilter();
  }));

  search?.addEventListener('input', applyFilter);
  veganBtn?.addEventListener('click', () => {
    const on = veganBtn.getAttribute('aria-pressed') === 'true';
    veganBtn.setAttribute('aria-pressed', String(!on));
    applyFilter();
  });

  // default: first category shown as its own page
  if (activeId) showCategory(activeId, false);
  applyFilter();
}
