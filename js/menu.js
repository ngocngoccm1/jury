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
// deliberate JURY-logo placeholder until the restaurant supplies the photo.
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

const normalizeDishName = value => String(value || '')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[\u0111\u0110]/g, 'd')
  .replace(/\u00df/g, 'ss')
  .toLowerCase();

const EXACT_DISH_IMAGES = {
  /* OCR names from menu-cuoi.pdf mapped to the existing, dish-specific photos. */
  'vorspeisen-neu:ga xien (1 stk.)': 'assets/juri-menu-v2-104-fried-chicken.png',
  'vorspeisen-neu:yakitori chicken (2 stk.)': 'assets/juri-menu-v2-34-yakitori.png',
  'vorspeisen-neu:wantan gebacken (5 stk.)': 'assets/juri-menu-v2-31-wantan.png',
  'vorspeisen-neu:dau phu chien com - tofu im reismantel (2 stk.)': 'assets/juri-menu-v2-16-tofu-com.png',
  'vorspeisen-neu:tom chien com - garnelen im reismantel (2 stk.)': 'assets/juri-menu-v2-40-garnelen-com.png',
  'vorspeisen-neu:chuka salat': 'assets/juri-menu-v2-41-seetang-salat.png',
  'vorspeisen-neu:mango-salat': 'assets/juri-menu-v2-15-mango-salat.png',
  'sharing-set-neu:jury sharing platte': 'assets/juri-menu-v2-47-mix-set.png',
  'suppen-klein:kokossuppe': 'assets/juri-menu-v2-35-tom-yum.png',
  'vorspeisen-neu:ha cao hap - gedampfte dumplings (4 stk.)': 'assets/juri-menu-v2-32-dim-sum.png',
  'vorspeisen-neu:kimchi': 'assets/juri-menu-v2-107-kimchi.png',
  'vorspeisen-neu:schweinespiess gegrillt - thit xien nuong (1 stk.)': 'assets/juri-menu-v2-39-schweinespiesse.png',
  'suppen-klein:wantan suppe': 'assets/juri-menu-v2-50-wantan-suppe.png',
  'suppen-klein:gemuse suppe': 'assets/juri-menu-v2-49-gemuse-suppe.png',
  'vegan-neu:shaolin seitan bbq xao rau': 'assets/juri-menu-v2-201-shaolin-seitan.png',
  'vegan-neu:baby buddha': 'assets/juri-menu-v2-43-seitan-spiesse.png',
  'suppen-gross:pho bo - rindfleisch': 'assets/juri-menu-v2-01-pho-viet-nam.png',
  'suppen-gross:pho ga - huhnerfleisch': 'assets/juri-photo-02-pho-ga.png',
  'suppen-gross:gemusesuppe (gross)': 'assets/juri-menu-v2-49-gemuse-suppe.png',
  'hauptgerichte-neu:huhnerfleisch mit erdnuss-sosse (2 stk.)': 'assets/juri-menu-v2-34-yakitori.png',
  'hauptgerichte-neu:bowls': 'assets/juri-menu-v2-58-sommer-bowl.png',
  'vegan-neu:bun dau': 'assets/juri-menu-v2-59-bun-dau.png',
  'hauptgerichte-neu:gebratener reis': 'assets/juri-menu-v2-37-gebratener-reis.png',
  'hauptgerichte-neu:gebratene reisbandnudeln': 'assets/juri-menu-v2-102-rice-band-noodles.png',
  'hauptgerichte-neu:udon xao - gebratene udon-nudeln': 'assets/juri-menu-v2-21-udon.png',
  'hauptgerichte-neu:gegrillte garnelen': 'assets/juri-menu-v2-40-garnelen-com.png',
  'hauptgerichte-neu:bun nem': 'assets/juri-menu-v2-07-bun-nem.png',
  'hauptgerichte-neu:bun bo hue': 'assets/juri-menu-v2-05-bun-bo-hue.png',
  'wok-neu:bo luc lac - shaking beef': 'assets/juri-menu-v2-19-shaking-beef.png',
  'wok-neu:sot mango - mango-sauce': 'assets/juri-menu-v2-15-mango-salat.png',
  'wok-neu:sot curry - curry-sauce': 'assets/juri-menu-v2-17-gruenes-curry.png',
  'wok-neu:erdnuss-sosse': 'assets/juri-menu-v2-56-erdnuss-sosse.png',
  'wok-neu:rau xao - gebratenes gemuse': 'assets/juri-menu-v2-55-gemuse-pfanne.png',
  'wok-neu:sa ot - zitronengras & chili': 'assets/juri-menu-v2-29-lemongrass-chili.png',
  'wok-neu:franzosische entenbrust': 'assets/juri-menu-v2-103-fried-duck.png',
  'kinder-neu:chicken nugget': 'assets/juri-menu-v2-104-fried-chicken.png',
  'kinder-neu:ga xien nho (1 stk.)': 'assets/juri-menu-v2-54-hahnchenspiess-reis.png',
  'kinder-neu:ga chien nho (1 stk.)': 'assets/juri-menu-v2-104-fried-chicken.png',
  'kinder-neu:thit xien nho - schweinespiess (1 stk.)': 'assets/juri-menu-v2-53-schweinespiess-reis.png',
  'kinder-neu:khoai tay chien - pommes frites': 'assets/juri-menu-v2-51-pommes-frites.png',
  'kinder-neu:khoai lang chien - susskartoffel-pommes': 'assets/juri-menu-v2-52-susskartoffelpommes.png',
  'desserts-neu:japanischer kuchen': 'images/dessert.jpg',
  'desserts-neu:mochi eis (3 stk.)': 'images/dessert.jpg',
  'hauptgerichte-neu:bun cha ha noi': 'assets/juri-menu-v2-200-bun-cha-ha-noi.png',
  'sharing_sets:mix set fur 2 personen': 'assets/juri-menu-v2-47-mix-set.png',
  'sharing_sets:mix set fur 3 personen': 'assets/juri-menu-v2-47-mix-set.png',
  'sharing_sets:vegan set fur 2 personen': 'assets/juri-menu-v2-48-vegan-set.png',
  'sharing_sets:vegan set fur 3 personen': 'assets/juri-menu-v2-48-vegan-set.png',
  'suppen_salat:gemuse suppe': 'assets/juri-menu-v2-49-gemuse-suppe.png',
  'suppen_salat:wantan suppe': 'assets/juri-menu-v2-50-wantan-suppe.png',
  'kindermenue:pommes frites': 'assets/juri-menu-v2-51-pommes-frites.png',
  'kindermenue:susskartoffelpommes': 'assets/juri-menu-v2-52-susskartoffelpommes.png',
  'kindermenue:schweinespiess mit reis': 'assets/juri-menu-v2-53-schweinespiess-reis.png',
  'kindermenue:hahnchenspiess mit reis': 'assets/juri-menu-v2-54-hahnchenspiess-reis.png',
  'hauptgerichte:gemuse pfanne': 'assets/juri-menu-v2-55-gemuse-pfanne.png',
  'hauptgerichte:erdnuss sosse': 'assets/juri-menu-v2-56-erdnuss-sosse.png',
  'hauptgerichte:suss-sauer': 'assets/juri-menu-v2-57-suss-sauer.png',
  'reis_spezial:sommer bowl': 'assets/juri-menu-v2-58-sommer-bowl.png',
  'vegan:bun dau – tofu mit reisnudeln': 'assets/juri-menu-v2-59-bun-dau.png',
  'vegan:curry-ente vegan': 'assets/juri-menu-v2-60-curry-ente-vegan.png',
  'vegan:erdnuss-ente vegan': 'assets/juri-menu-v2-61-erdnuss-ente-vegan.png',
  'maki:kappa maki': 'assets/juri-menu-v2-62-kappa-maki.png',
  'maki:avocado maki': 'assets/juri-menu-v2-63-avocado-maki.png',
  'maki:mango maki': 'assets/juri-menu-v2-64-mango-maki.png',
  'maki:tekka maki': 'assets/juri-menu-v2-65-tekka-maki.png',
  'maki:ebi maki': 'assets/juri-menu-v2-66-ebi-maki.png',
  'maki:salmon avocado maki': 'assets/juri-menu-v2-67-salmon-avocado-maki.png',
  'maki:salmon skin maki': 'assets/juri-menu-v2-68-salmon-skin-maki.png',
  'maki:unagi maki': 'assets/juri-menu-v2-69-unagi-maki.png',
  'special_rolls:sake': 'assets/juri-menu-v2-70-sake-special-roll.png',
  'special_rolls:maguro': 'assets/juri-menu-v2-71-maguro-special-roll.png',
  'special_rolls:ebi': 'assets/juri-menu-v2-72-ebi-special-roll.png',
  'special_rolls:unagi rolls': 'assets/juri-menu-v2-73-unagi-rolls.png',
  'special_rolls:chicken rolls': 'assets/juri-menu-v2-74-chicken-rolls.png',
  'special_rolls:crispy tiger': 'assets/juri-menu-v2-75-crispy-tiger.png',
  'special_rolls:orchidee roll': 'assets/juri-menu-v2-76-orchidee-roll.png',
  'special_rolls:tiger roll': 'assets/juri-menu-v2-77-tiger-roll.png',
  'special_rolls:green roll': 'assets/juri-menu-v2-78-green-roll.png',
  'special_rolls:baby roll': 'assets/juri-menu-v2-79-baby-roll.png',
  'special_rolls:black rolls': 'assets/juri-menu-v2-80-black-roll.png',
  'special_rolls:jury roll': 'assets/juri-menu-v2-81-jury-roll.png',
  'sushi_menues:vegan': 'assets/juri-menu-v2-82-vegan-sushi-menu.png',
  'sushi_menues:vegan plus': 'assets/juri-menu-v2-82-vegan-sushi-menu.png',
  'nigiri:avocado': 'assets/juri-menu-v2-83-avocado-nigiri.png',
  'nigiri:surimi': 'assets/juri-menu-v2-84-surimi-nigiri.png',
  'nigiri:ebi': 'assets/juri-menu-v2-85-ebi-nigiri.png',
  'nigiri:maguro': 'assets/juri-menu-v2-86-maguro-nigiri.png',
  'nigiri:sake': 'assets/juri-menu-v2-87-sake-nigiri.png',
  'nigiri:unagi': 'assets/juri-menu-v2-88-unagi-nigiri.png',
  'sashimi:sashimi maguro · 10 stk.': 'assets/juri-menu-v2-89-sashimi-maguro.png',
  'sashimi:sashimi sake-maguro · 10 stk.': 'assets/juri-menu-v2-90-sashimi-combo.png',
  'sushi_menues:deluxe solo': 'assets/juri-menu-v2-91-deluxe-solo.png',
  'sushi_menues:fur 2 personen': 'assets/juri-menu-v2-92-sushi-set-2.png',
  'sushi_menues:fur 3 personen': 'assets/juri-menu-v2-93-sushi-set-3.png',
  'sushi_menues:fur 4 personen · komplett': 'assets/juri-menu-v2-94-sushi-set-4.png',
  'lassi:mango lassi': 'assets/juri-menu-v2-95-mango-lassi.png',
  'kaffee:cafe trung': 'assets/juri-menu-v2-96-cafe-trung.png',
  'vorspeise:kleine pho bowl': 'assets/juri-menu-v2-97-kleine-pho-bowl.png',
  'vorspeise:hoanh thanh chien (5 stk.)': 'assets/juri-menu-v2-31-wantan.png',
  'vorspeise:tom chien com (2 stk.)': 'assets/juri-menu-v2-40-garnelen-com.png',
  'vorspeise:ha cao tom (4 stk.)': 'assets/juri-menu-v2-32-dim-sum.png',
  'vorspeise:schweinespiesse grillte (2 stk.)': 'assets/juri-menu-v2-39-schweinespiesse.png',
  'hauptgerichte:zitronengras & chili': 'assets/juri-menu-v2-98-zitronengras-chili.png',
  'reis_spezial:sushi bowl': 'assets/juri-menu-v2-58-sommer-bowl.png',
  'pho:gebratene reisbandnudeln': 'assets/juri-menu-v2-102-rice-band-noodles.png',
  'vegan:hahnchen mit wok-gemuse vegan': 'assets/juri-menu-v2-99-vegan-wok-gemuse.png',
  'extra_beilagen:jasminreis': 'assets/juri-menu-v2-100-jasmine-rice.png',
  'extra_beilagen:reisnudeln': 'assets/juri-menu-v2-101-rice-noodles.png',
  'extra_beilagen:kleine gebr. reisbandnudeln': 'assets/juri-menu-v2-102-rice-band-noodles.png',
  'extra_beilagen:gebratene ente': 'assets/juri-menu-v2-103-fried-duck.png',
  'extra_beilagen:gebratenes hahnchen': 'assets/juri-menu-v2-104-fried-chicken.png',
  'extra_beilagen:gegrilltes hahnchen': 'assets/juri-menu-v2-105-grilled-chicken.png',
  'extra_beilagen:grillspiess (1 stk.)': 'assets/juri-menu-v2-106-grill-skewer.png',
  'extra_beilagen:kimchi': 'assets/juri-menu-v2-107-kimchi.png',
  'extra_beilagen:eingelegte karotten & kohlrabi': 'assets/juri-menu-v2-108-pickled-vegetables.png',
  'saucen_extra:erdnuss-sauce': 'assets/juri-menu-v2-109-peanut-sauce.png',
  'saucen_extra:suss-saure sauce': 'assets/juri-menu-v2-110-sweet-sour-sauce.png',
  'maki:ebi avocado maki': 'assets/juri-menu-v2-111-ebi-avocado-maki.png',
  'special_rolls:veggie inside-out': 'assets/juri-menu-v2-112-veggie-inside-out.png',
  'special_rolls:kanihama boko': 'assets/juri-menu-v2-113-kanihama-boko.png',
  'special_rolls:ebi tempura': 'assets/juri-menu-v2-114-ebi-tempura.png',
  'special_rolls:california inside-': 'assets/juri-menu-v2-115-california-roll.png',
  'fried_rolls:roll 2': 'assets/juri-menu-v2-116-roll2.png',
  'fried_rolls:roll 3': 'assets/juri-menu-v2-117-roll3.png',
  'fried_rolls:vegetarian-roll': 'assets/juri-menu-v2-118-vegetarian-roll.png',
  'fried_rolls:mini-sake \u00b7 8 stk.': 'assets/juri-menu-v2-119-mini-sake.png',
  'fried_rolls:mini-maguro \u00b7 8 stk.': 'assets/juri-menu-v2-120-mini-maguro.png',
  'sushi_menues:sake': 'assets/juri-menu-v2-121-sushi-menu-sake.png',
  'sushi_menues:mixed nigiri': 'assets/juri-menu-v2-122-mixed-nigiri.png',
  'sushi_menues:tuna': 'assets/juri-menu-v2-123-sushi-menu-tuna.png',
  'softdrinks:coca-cola': 'assets/juri-menu-v2-124-cola.png',
  'softdrinks:coca-cola light': 'assets/juri-menu-v2-125-light-cola.png',
  'softdrinks:fanta': 'assets/juri-menu-v2-126-orange-soda.png',
  'softdrinks:sprite': 'assets/juri-menu-v2-127-lemon-lime-soda.png',
  'softdrinks:spezi': 'assets/juri-menu-v2-128-cola-orange-mix.png',
  'softdrinks:tonic water': 'assets/juri-menu-v2-129-tonic-water.png',
  'softdrinks:ginger ale': 'assets/juri-menu-v2-130-ginger-ale.png',
  'softdrinks:wasser still/spritzig': 'assets/juri-menu-v2-131-still-sparkling-water.png',
  'saefte:apfelsaft': 'assets/juri-menu-v2-132-apple-juice.png',
  'saefte:ananassaft': 'assets/juri-menu-v2-133-pineapple-juice.png',
  'saefte:maracujasaft': 'assets/juri-menu-v2-134-passionfruit-juice.png',
  'saefte:mangosaft': 'assets/juri-menu-v2-135-mango-juice.png',
  'saefte:orangensaft': 'assets/juri-menu-v2-136-orange-juice.png',
  'saefte:kiba': 'assets/juri-menu-v2-137-kiba.png',
  'saefte:litschisaft': 'assets/juri-menu-v2-138-lychee-juice.png',
  'saefte:apfelschorle': 'assets/juri-menu-v2-139-apple-spritzer.png',
  'saefte:litschischorle': 'assets/juri-menu-v2-140-lychee-spritzer.png',
  'lassi:minz lassi': 'assets/juri-menu-v2-141-mint-lassi.png',
  'limonade:berry dreams': 'assets/juri-menu-v2-142-berry-dreams.png',
  'limonade:limetten butterfly': 'assets/juri-menu-v2-143-limetten-butterfly.png',
  'limonade:ipanema': 'assets/juri-menu-v2-144-ipanema.png',
  'limonade:rose lady': 'assets/juri-menu-v2-145-rose-lady.png',
  'limonade:pink ipanema': 'assets/juri-menu-v2-146-pink-ipanema.png',
  'saefte:ananasschorle': 'assets/juri-menu-v2-147-pineapple-spritzer.png',
  'saefte:maracujaschorle': 'assets/juri-menu-v2-148-passionfruit-spritzer.png',
  'saefte:mangoschorle': 'assets/juri-menu-v2-149-mango-spritzer.png',
  'saefte:orangenschorle': 'assets/juri-menu-v2-150-orange-spritzer.png',
  'limonade:mango green tea': 'assets/juri-menu-v2-151-mango-green-tea.png',
  'limonade:peach eistee': 'assets/juri-menu-v2-152-peach-iced-tea.png',
  'cocktails_af:blue lagoon': 'assets/juri-menu-v2-153-blue-lagoon.png',
  'cocktails_af:virgin sunrise': 'assets/juri-menu-v2-154-virgin-sunrise.png',
  'cocktails_af:love potion': 'assets/juri-menu-v2-155-love-potion.png',
  'cocktails_af:tropical kiss': 'assets/juri-menu-v2-156-tropical-kiss.png',
  'cocktails_af:kokos sunset': 'assets/juri-menu-v2-157-kokos-sunset.png',
  'cocktails_af:strawberry dreams': 'assets/juri-menu-v2-158-strawberry-dreams.png',
  'cocktails_alk:mai tai': 'assets/juri-menu-v2-159-mai-tai.png',
  'cocktails_alk:pina colada': 'assets/juri-menu-v2-160-pina-colada.png',
  'cocktails_alk:patrick day': 'assets/juri-menu-v2-161-patrick-day.png',
  'cocktails_alk:swimming pool': 'assets/juri-menu-v2-162-swimming-pool.png',
  'cocktails_alk:mojito': 'assets/juri-menu-v2-163-mojito.png',
  'cocktails_alk:lam bada': 'assets/juri-menu-v2-164-lam-bada.png',
  'cocktails_alk:hanoi mule': 'assets/juri-menu-v2-165-hanoi-mule.png',
  'cocktails_alk:red berry': 'assets/juri-menu-v2-166-red-berry.png',
  'spritz:aperol spritz': 'assets/juri-menu-v2-167-aperol-spritz.png',
  'spritz:himbeer spritz': 'assets/juri-menu-v2-168-raspberry-spritz.png',
  'spritz:lychee spritz': 'assets/juri-menu-v2-169-lychee-spritz.png',
  'spritz:lillet wild berry': 'assets/juri-menu-v2-170-lillet-wild-berry.png',
  'spritz:gin tonic': 'assets/juri-menu-v2-171-gin-tonic.png',
  'spritz:whisky cola': 'assets/juri-menu-v2-172-whisky-cola.png',
  'spritz:cuba libre': 'assets/juri-menu-v2-173-cuba-libre.png',
  'biere:konig ludwig hefe dunkel (0,5 l)': 'assets/juri-menu-v2-174-dark-wheat-beer.png',
  'biere:konig ludwig hefeweizen (0,5 l)': 'assets/juri-menu-v2-175-wheat-beer.png',
  'biere:alkoholfrei hefeweizen (0,5 l)': 'assets/juri-menu-v2-176-nonalcoholic-wheat-beer.png',
  'biere:alkoholfrei pils (0,3 l)': 'assets/juri-menu-v2-177-nonalcoholic-pils.png',
  'biere:radler \u00b7 shandy (0,3 / 0,5 l)': 'assets/juri-menu-v2-178-radler-shandy.png',
  'biere:warsteiner fassbier (0,3 / 0,5 l)': 'assets/juri-menu-v2-179-draft-pils.png',
  'kaffee:cafe phin den': 'assets/juri-menu-v2-180-cafe-phin-den.png',
  'kaffee:cafe phin nau': 'assets/juri-menu-v2-181-cafe-phin-nau.png',
  'kaffee:cafe muoi': 'assets/juri-menu-v2-182-cafe-muoi.png',
  'kaffee:bac xiu': 'assets/juri-menu-v2-183-bac-xiu.png',
  'kaffee:cafe cot dua': 'assets/juri-menu-v2-184-cafe-cot-dua.png',
  'tee:jasmintee': 'assets/juri-menu-v2-185-jasmine-tea.png',
  'tee:gruner tee': 'assets/juri-menu-v2-186-green-tea.png',
  'tee:ingwertee': 'assets/juri-menu-v2-187-ginger-tea.png',
  'tee:minze &': 'assets/juri-menu-v2-188-mint-tea.png',
  'tee:wintertee': 'assets/juri-menu-v2-189-winter-tea.png',
  'schnaps:lua moi \u00b7 reisschnaps': 'assets/juri-menu-v2-190-lua-moi-rice-spirit.png',
  'schnaps:nep moi \u00b7 reisschnaps': 'assets/juri-menu-v2-191-nep-moi-rice-spirit.png',
  'schnaps:wodka': 'assets/juri-menu-v2-192-vodka.png',
  'schnaps:jagermeister': 'assets/juri-menu-v2-193-herbal-liqueur.png',
  'schnaps:irish cream likor': 'assets/juri-menu-v2-194-irish-cream.png',
  'schnaps:whisky': 'assets/juri-menu-v2-195-whisky.png',
  'schnaps:chivas 18': 'assets/juri-menu-v2-196-chivas.png',
  'wein:chardonnay · trocken': 'images/drink-cocktails.jpg',
  'wein:riesling · trocken': 'images/drink-cocktails.jpg',
  'wein:grauburgunder · trocken': 'images/drink-cocktails.jpg',
  'wein:weissburgunder · trocken': 'images/drink-cocktails.jpg',
  'wein:pinot grigio · trocken': 'images/drink-cocktails.jpg',
  'wein:weinschorle · spritzer': 'images/drink-cocktails.jpg',
  'wein:rosewein': 'images/drink-cocktails.jpg',
  'wein:merlot · trocken': 'images/bar.jpg',
  'wein:primitivo puglia · trocken': 'images/bar.jpg',
  'wein:prosecco': 'images/drink-cocktails.jpg'
};

// Aliases from the new customer PDF, reusing the existing local dish photos.
Object.assign(DISH_IMAGES, {
  'goi cuon': 'assets/juri-menu-v2-12-sommerrollen.png',
  'cha gio': 'assets/juri-menu-v2-13-fruehlingsrollen.png',
  'mini fruhlingsrollen': 'assets/juri-menu-v2-13-fruehlingsrollen.png',
  'hoanh thanh chien': 'assets/juri-menu-v2-31-wantan.png',
  'dau hu chien com': 'assets/juri-menu-v2-16-tofu-com.png',
  'ha cao tom': 'assets/juri-menu-v2-32-dim-sum.png',
  'tom chien com': 'assets/juri-menu-v2-40-garnelen-com.png',
  'thit xien nuong': 'assets/juri-menu-v2-39-schweinespiesse.png',
  'com xien heo nuong': 'assets/juri-menu-v2-53-schweinespiess-reis.png',
  'com chien ga nuong': 'assets/juri-menu-v2-54-hahnchenspiess-reis.png',
  'khoai lang chien': 'assets/juri-menu-v2-52-susskartoffelpommes.png',
  'goi du du xanh': 'assets/juri-menu-v2-42-papaya-salat.png',
  'erdnuss sosse': 'assets/juri-menu-v2-56-erdnuss-sosse.png',
  'fruchtjoghurt': 'images/dessert.jpg',
  'joghurt mit gelee': 'images/dessert.jpg',
  'mochi-eis': 'images/dessert.jpg',
  'frittierte banane': 'images/dessert.jpg',
  'mango-cheesecake': 'images/dessert.jpg',
  'matcha-mousse': 'images/dessert.jpg',
  'kugel eis': 'images/dessert.jpg',
  'kostritzer schwarzbier': 'assets/juri-menu-v2-174-dark-wheat-beer.png',
  'warsteiner radler': 'assets/juri-menu-v2-178-radler-shandy.png',
  'konig pilsener': 'assets/juri-menu-v2-179-draft-pils.png',
  'konigpilsener radler': 'assets/juri-menu-v2-178-radler-shandy.png'
});

const photoForDishExact = (it, categoryId) => {
  const exactKey = normalizeDishName(it.name_de || it.name_en || '');
  const searchKey = normalizeDishName(`${it.name_de || ''} ${it.name_en || ''}`);
  return EXACT_DISH_IMAGES[`${categoryId}:${exactKey}`]
    || Object.entries(DISH_IMAGES).find(([term]) => searchKey.includes(normalizeDishName(term)))?.[1]
    || 'assets/jury-logo.jpg';
};
window.photoForDishExact = photoForDishExact;

// ---------- render ----------
const CAT_EL = document.getElementById('menuBody');
const TAB_EL = document.getElementById('menuTabs');

function renderVariant(v, orderKey) {
  const code = v.code ? `<span class="var-code">${esc(v.code)}</span>` : '';
  const label = esc(v.label_de || '');
  const labelEn = v.label_en && v.label_en !== v.label_de ? esc(v.label_en) : label;
  const addLabel = esc(`Hinzufügen: ${v.label_de || ''}`);
  return `<li>${code}
    <span class="var-label"><span lang="de">${label}</span><span lang="en">${labelEn}</span></span>
    ${v.allergens && v.allergens.length ? `<span class="var-alg">${v.allergens.map(a => `<span class="chip">${esc(a)}</span>`).join('')}</span>` : ''}
    <span class="var-price">${esc(v.price || '')}</span>
    <button class="dish__add dish__add--variant" type="button" data-add-dish="${orderKey}" data-variant-code="${esc(v.code || '')}" aria-label="${addLabel}" title="${addLabel}">+</button></li>`;
}

function renderDish(it, catVegan, categoryId) {
  const vegan = catVegan || isVeganItem(it);
  const orderView = document.body.classList.contains('is-order-page');
  const orderKey = esc(`${categoryId}:${it.code}`);
  const nameEn = it.name_en && it.name_en !== it.name_de ? esc(it.name_en) : esc(it.name_de);
  const desc = it.desc_de
    ? `<p class="dish__desc"><span class="dish__desc-de" lang="de">${esc(it.desc_de)}</span><span class="dish__desc-en" lang="en">${esc(it.desc_en || it.desc_de)}</span></p>`
    : '';
  let variantsPart, headPrice, cardAllergens, imagePrice = '';
  if (it.variants && it.variants.length) {
    variantsPart = orderView ? '' : `<ul class="dish__variants">${it.variants.map(v => renderVariant(v, orderKey)).join('')}</ul>`;
    const firstPrice = it.variants.find(v => v.price)?.price || '';
    imagePrice = orderView && firstPrice ? `<span class="dish__price--single">ab ${esc(firstPrice)}</span>` : '';
    headPrice = orderView && firstPrice ? `<div class="dish__price-group"><button class="dish__add" type="button" data-add-dish="${orderKey}" aria-label="${esc(`Hinzufügen: ${it.name_de}`)}" title="${esc(`Hinzufügen: ${it.name_de}`)}">+</button></div>` : '';
    cardAllergens = ''; // allergens shown per-variant
  } else {
    variantsPart = '';
    imagePrice = orderView && it.price ? `<span class="dish__price--single">${esc(it.price)}</span>` : '';
    headPrice = it.price ? `<div class="dish__price-group">${orderView ? '' : `<span class="dish__price--single">${esc(it.price)}</span>`}<button class="dish__add" type="button" data-add-dish="${orderKey}" aria-label="${esc(`Hinzufügen: ${it.name_de}`)}" title="${esc(`Hinzufügen: ${it.name_de}`)}">+</button></div>` : '';
    cardAllergens = chips(it.allergens);
  }
  const searchText = esc([it.code, it.name_de, it.name_en, it.desc_de].filter(Boolean).join(' ').toLowerCase());
  const imgCode = esc(it.code);
  const image = photoForDishExact(it, categoryId);
  const isPlaceholder = image === 'assets/jury-logo.jpg';
  const detailHref = `dish.html?item=${encodeURIComponent(`${categoryId}:${it.code}`)}&image=${encodeURIComponent(image)}`;
  return `<article class="dish" data-vegan="${vegan}" data-search="${searchText}">
    ${detailHref ? `<a class="dish__detail-link" href="${detailHref}" aria-label="Details: ${esc(it.name_de)}">` : ''}<div class="dish__media${isPlaceholder ? ' dish__media--placeholder' : ''}"><img src="${image}" alt="${isPlaceholder ? 'JURY' : esc(it.name_de)}" loading="lazy" onerror="this.onerror=null;this.src='assets/jury-logo.jpg';this.closest('.dish__media').classList.add('dish__media--placeholder')">${imagePrice}</div>${detailHref ? '</a>' : ''}
    <div class="dish__body">
      <div class="dish__head">
        <div>
          <span class="dish__code">${imgCode}</span>
          ${detailHref ? `<a class="dish__detail-name" href="${detailHref}"><h3 class="dish__name"><span lang="de">${esc(it.name_de)}</span><span lang="en">${nameEn}</span></h3></a>` : `<h3 class="dish__name"><span lang="de">${esc(it.name_de)}</span><span lang="en">${nameEn}</span></h3>`}
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

document.addEventListener('click', event => {
  const media = event.target.closest('.jury-order-shell .dish__media');
  if (!media || event.target.closest('a')) return;
  const link = media.closest('.dish')?.querySelector('.dish__detail-link');
  if (link?.href) window.location.href = link.href;
});

function buildSchema(cats) {
  return {
    '@context': 'https://schema.org', '@type': 'Menu', 'name': 'Speisekarte — JURY Restaurant',
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
    const exclusions = window.JURY_MENU_NEW_EXCLUSIONS || {};
    const currentFood = window.JURY_MENU_CUOI_FOOD || [];
    const cats = [...currentFood, ...data.categories, ...(window.JURY_MENU_NEW_EXTRA_CATEGORIES || [])]
      .filter(category => !(exclusions.categories || []).includes(category.id) && !(window.JURY_MENU_CUOI_EXCLUDED_CATEGORIES || new Set()).has(category.id))
      .map(category => ({
        ...category,
        items: [...category.items, ...((window.JURY_MENU_NEW_EXTRA_ITEMS || {})[category.id] || [])]
          .filter(item => !(exclusions.items || new Set()).has(`${category.id}:${item.code}`))
          .map(item => {
            const override = window.JURY_MENU_NEW_OVERRIDES?.[`${category.id}:${item.code}`] || {};
            const merged = { ...item, ...override };
            // Price/name updates must not discard the allergen codes supplied
            // for the same option in the original PDF data.
            if (override.variants && item.variants) {
              merged.variants = override.variants.map(variant => ({
                ...(item.variants.find(base => base.code === variant.code) || {}),
                ...variant
              }));
            }
            return merged;
          })
      }));

    window.JuryOrderMenu = {};
    cats.forEach(category => category.items.forEach(item => {
      window.JuryOrderMenu[`${category.id}:${item.code}`] = {
        ...item,
        image: photoForDishExact(item, category.id)
      };
    }));

    if (!CAT_EL || !TAB_EL) return;
    // tabs
    TAB_EL.innerHTML = cats.map((c, i) =>
      `<button class="menu-tab${i === 0 ? ' active' : ''}" data-target="${c.id}">${esc(c.name_de)}</button>`).join('');

    // categories
    CAT_EL.innerHTML = cats.map(c => {
      const catVegan = /vegan/i.test(c.name_de);
      return `<section class="menu-category" id="${esc(c.id)}">
        <h2><span lang="de">${esc(c.name_de)}</span><span lang="en">${esc(c.name_en || c.name_de)}</span></h2>
        <span class="menu-category__count">${c.items.length} <span lang="de">Gerichte</span><span lang="en">dishes</span></span>
        <div class="dish-grid">${c.items.map(it => renderDish(it, catVegan, c.id)).join('')}</div>
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
