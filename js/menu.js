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
  const search = document.getElementById('menuSearch');
  if (search) search.placeholder = lang === 'en' ? 'Search dishes…' : 'Gericht suchen…';
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

// Only dishes with a matching local photo receive it. Everything else keeps a
// deliberate JURI-logo placeholder until the restaurant supplies the photo.
const DISH_IMAGES = {
  'pho viet nam': 'assets/juri-menu-v2-01-pho-viet-nam.png',
  'pho bat da': 'assets/juri-menu-v2-02-pho-bat-da.png',
  'pho tron': 'assets/juri-menu-v2-03-pho-tron.png',
  'pho bo sot vang': 'assets/juri-menu-v2-04-pho-sot-vang.png',
  'bun bo hue': 'assets/juri-menu-v2-05-bun-bo-hue.png',
  'bun cha': 'assets/juri-menu-v2-06-bun-cha.png',
  'bun nem': 'assets/juri-menu-v2-07-bun-nem.png',
  'bun tron cha lua': 'assets/juri-menu-v2-08-bun-tron-cha-lua.png',
  'banh mi sai gon': 'assets/juri-menu-v2-09-banh-mi-sai-gon.png',
  'banh mi sot vang': 'assets/juri-menu-v2-10-banh-mi-sot-vang.png',
  'banh mi chao': 'assets/juri-menu-v2-11-banh-mi-chao.png',
  'sommerrollen': 'assets/juri-menu-v2-12-sommerrollen.png',
  'fruhlingsrollen': 'assets/juri-menu-v2-13-fruehlingsrollen.png',
  'gyoza': 'assets/juri-menu-v2-14-huhn-gyoza.png',
  'mango salat': 'assets/juri-menu-v2-15-mango-salat.png',
  'tofu im com': 'assets/juri-menu-v2-16-tofu-com.png',
  'grunes curry': 'assets/juri-menu-v2-17-gruenes-curry.png',
  'rotes curry': 'assets/juri-menu-v2-18-rotes-curry.png',
  'bo luc lac': 'assets/juri-menu-v2-19-shaking-beef.png',
  'jury chicken tempura': 'assets/juri-menu-v2-20-chicken-tempura.png',
  'udon': 'assets/juri-menu-v2-21-udon.png',
  'california maki': 'assets/juri-menu-v2-22-california-maki.png',
  'sake maki': 'assets/juri-menu-v2-23-sake-maki.png',
  'ebi tempura maki': 'assets/juri-menu-v2-24-ebi-tempura-maki.png',
  'dragon roll': 'assets/juri-menu-v2-25-dragon-roll.png',
  'flambierter lachs': 'assets/juri-menu-v2-26-flambierter-lachs.png',
  'chirashi': 'assets/juri-menu-v2-27-chirashi.png',
  'ente mit wok-gemuse vegan': 'assets/juri-menu-v2-28-vegan-duck.png',
  'zitronengras chili': 'assets/juri-menu-v2-29-lemongrass-chili.png',
  'saigon bbq kimchi bowl': 'assets/juri-menu-v2-30-kimchi-bowl.png',
  'wantans': 'assets/juri-menu-v2-31-wantan.png',
  'dim sum': 'assets/juri-menu-v2-32-dim-sum.png',
  'edamame': 'assets/juri-menu-v2-33-edamame.png',
  'yakitori': 'assets/juri-menu-v2-34-yakitori.png',
  'tom yum': 'assets/juri-menu-v2-35-tom-yum.png',
  'regenbogen salat': 'assets/juri-menu-v2-36-regenbogen-salat.png',
  'gebratener reis': 'assets/juri-menu-v2-37-gebratener-reis.png',
  'glasnudelsalat': 'assets/juri-menu-v2-38-glasnudelsalat.png',
  'schweinespieße': 'assets/juri-menu-v2-39-schweinespiesse.png',
  'garnelen im com': 'assets/juri-menu-v2-40-garnelen-com.png',
  'seetang salat': 'assets/juri-menu-v2-41-seetang-salat.png',
  'papaya salat': 'assets/juri-menu-v2-42-papaya-salat.png',
  'seitan': 'assets/juri-menu-v2-43-seitan-spiesse.png',
  'futo': 'assets/juri-menu-v2-44-futomaki.png',
  'roll 1': 'assets/juri-menu-v2-45-fried-rolls.png',
  'chicken-roll': 'assets/juri-menu-v2-45-fried-rolls.png',
  'sashimi sake': 'assets/juri-menu-v2-46-sashimi-sake.png'
};
const photoForDish = it => {
  const key = `${it.name_de || ''} ${it.name_en || ''}`.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, 'd').toLowerCase();
  return Object.entries(DISH_IMAGES).find(([term]) => key.includes(term))?.[1] || 'assets/jury-logo.jpg';
};

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
  const image = photoForDish(it);
  const isPlaceholder = image === 'assets/jury-logo.jpg';
  return `<article class="dish" data-vegan="${vegan}" data-search="${searchText}">
    <div class="dish__media${isPlaceholder ? ' dish__media--placeholder' : ''}"><img src="${image}" alt="${isPlaceholder ? 'JURI' : esc(it.name_de)}" loading="lazy"></div>
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

// GitHub Pages excludes folders whose names begin with an underscore.
fetch('data/menu.json')
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
  const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, 'd').toLowerCase();

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
