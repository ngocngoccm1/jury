/*
 * JURI menu v2026-08-14
 * Source: menu-new.pdf (customer supplied PDF).
 *
 * This file is deliberately data-only. menu.js merges these values into the
 * existing renderer so the public menu and the order buttons use the same
 * dishes and prices.
 */
window.JURY_MENU_NEW_OVERRIDES = {
  'vorspeise:1': { name_de: 'Goi Cuon (2 Stk.)', name_en: 'Goi Cuon (2 pcs.)', variants: [
    { code: 'A', label_de: 'Tofu', label_en: 'Tofu', allergens: ['D','E','F'], price: '5,50 €' },
    { code: 'B', label_de: 'Hähnchen', label_en: 'Chicken', allergens: ['D','E','F','N'], price: '5,90 €' },
    { code: 'C', label_de: 'Garnelen', label_en: 'Shrimp', allergens: ['B','D','E','F'], price: '6,50 €' },
    { code: 'D', label_de: 'Schwein', label_en: 'Pork', allergens: ['D','E','F'], price: '5,90 €' },
    { code: 'E', label_de: 'Garnelen und Schwein', label_en: 'Shrimp and pork', allergens: ['B','D','E','F'], price: '7,50 €' }
  ] },
  'vorspeise:2': { name_de: 'Cha Gio (2 Stk.)', name_en: 'Cha Gio (2 pcs.)', price: '5,90 €' },
  'vorspeise:3': { name_de: 'Mini Frühlingsrollen vegan (6 Stk.)', name_en: 'Vegan mini spring rolls (6 pcs.)', price: '4,90 €' },
  'vorspeise:4': { name_de: 'Hoanh thanh chien (5 Stk.)', name_en: 'Fried wontons (5 pcs.)', price: '5,50 €' },
  'vorspeise:5': { name_de: 'Dau hu chien com (2 Stk.)', name_en: 'Crispy green-rice tofu (2 pcs.)', price: '6,50 €' },
  'vorspeise:6': { name_de: 'Tom chien com (2 Stk.)', name_en: 'Crispy green-rice shrimp (2 pcs.)', price: '6,90 €' },
  'vorspeise:7': { name_de: 'Ha cao tom (4 Stk.)', name_en: 'Shrimp dim sum (4 pcs.)', price: '5,90 €' },
  'vorspeise:8': { name_de: 'Edamame (gedämpft)', name_en: 'Steamed edamame', price: '5,50 €' },
  'vorspeise:9': { name_de: 'Yakitori (2 Stk.)', name_en: 'Yakitori (2 pcs.)', price: '5,90 €' },
  'vorspeise:10': { name_de: 'Thit xien nuong (2 Stk.)', name_en: 'Grilled pork skewers (2 pcs.)', price: '6,50 €' },
  'vorspeise:11': { name_de: 'Hähnchen Gyoza (4 Stk.)', name_en: 'Chicken gyoza (4 pcs.)', price: '5,90 €' },
  'vorspeise:12': { name_de: 'Vegane Gyoza (4 Stk.)', name_en: 'Vegan gyoza (4 pcs.)', price: '5,50 €' },
  'vorspeise:13': { name_de: 'Kleine Pho Bowl', name_en: 'Small pho bowl', variants: [
    { code: 'A', label_de: 'Tofu', label_en: 'Tofu', allergens: ['D','F'], price: '6,90 €' },
    { code: 'B', label_de: 'Hähnchen', label_en: 'Chicken', allergens: ['D','E','F','N'], price: '7,50 €' },
    { code: 'C', label_de: 'Rind', label_en: 'Beef', allergens: ['D'], price: '8,50 €' }
  ] },
  'sharing_sets:14': { price: '18,50 €' },
  'sharing_sets:15': { price: '27,90 €' },
  'sharing_sets:16': { price: '17,50 €' },
  'sharing_sets:17': { price: '24,90 €' },
  'suppen_salat:18': { variants: [
    { code: 'A', label_de: 'Tofu', label_en: 'Tofu', allergens: ['D','F'], price: '5,50 €' },
    { code: 'B', label_de: 'Hähnchen', label_en: 'Chicken', allergens: ['D'], price: '6,50 €' },
    { code: 'C', label_de: 'Garnelen', label_en: 'Shrimp', allergens: ['B','D'], price: '6,90 €' }
  ] },
  'suppen_salat:19': { variants: [
    { code: 'A', label_de: 'Tofu', label_en: 'Tofu', allergens: ['B','D','F'], price: '5,90 €' },
    { code: 'B', label_de: 'Hähnchen', label_en: 'Chicken', allergens: ['B','D'], price: '6,50 €' },
    { code: 'C', label_de: 'Garnelen', label_en: 'Shrimp', allergens: ['B','D'], price: '6,90 €' }
  ] },
  'suppen_salat:20': { price: '6,50 €' },
  'suppen_salat:21': { price: '7,50 €' },
  'suppen_salat:22': { price: '5,90 €' },
  'suppen_salat:23': { variants: [
    { code: 'A', label_de: 'Hähnchen', label_en: 'Chicken', allergens: ['B','D','E'], price: '7,90 €' },
    { code: 'B', label_de: 'Garnelen', label_en: 'Shrimp', allergens: ['B','D','E'], price: '8,90 €' }
  ] },
  'suppen_salat:24': { name_de: 'Goi du du xanh', name_en: 'Green papaya salad', price: '8,90 €' },
  'kindermenue:25': { price: '5,90 €' },
  'kindermenue:26': { name_de: 'Khoai lang chien', name_en: 'Sweet potato fries', price: '6,50 €' },
  'kindermenue:27': { name_de: 'Com xien heo nuong', name_en: 'Grilled pork skewer with rice', price: '10,50 €' },
  'kindermenue:28': { name_de: 'Com chien ga nuong', name_en: 'Grilled chicken skewer with rice', price: '5,90 €' },
  'hauptgerichte:29': { name_de: 'Gemüse Pfanne', name_en: 'Wok vegetables', variants: [
    { code: 'A', label_de: 'Tofu', label_en: 'Tofu', price: '13,90 €' },
    { code: 'B', label_de: 'Gebratenes Hähnchen', label_en: 'Fried chicken', price: '14,90 €' },
    { code: 'C', label_de: 'Gegrilltes Hähnchenfilet', label_en: 'Grilled chicken fillet', price: '14,90 €' },
    { code: 'D', label_de: 'Hähnchenstreifen', label_en: 'Chicken strips', price: '14,90 €' },
    { code: 'E', label_de: 'Garnelen', label_en: 'Shrimp', price: '16,90 €' },
    { code: 'F', label_de: 'Rind', label_en: 'Beef', price: '16,90 €' },
    { code: 'G', label_de: 'Lachs', label_en: 'Salmon', price: '17,90 €' },
    { code: 'H', label_de: 'Französische Ente', label_en: 'French duck', price: '17,90 €' }
  ] },
  'hauptgerichte:30': { variants: [
    { code: 'A', label_de: 'Tofu', label_en: 'Tofu', price: '13,90 €' },
    { code: 'B', label_de: 'Gebratenes Hähnchen', label_en: 'Fried chicken', price: '14,90 €' },
    { code: 'C', label_de: 'Gegrilltes Hähnchenfilet', label_en: 'Grilled chicken fillet', price: '14,90 €' },
    { code: 'D', label_de: 'Hähnchenstreifen', label_en: 'Chicken strips', price: '14,90 €' },
    { code: 'E', label_de: 'Garnelen', label_en: 'Shrimp', price: '16,90 €' },
    { code: 'F', label_de: 'Rind', label_en: 'Beef', price: '16,90 €' },
    { code: 'G', label_de: 'Lachs', label_en: 'Salmon', price: '17,90 €' },
    { code: 'H', label_de: 'Französische Ente', label_en: 'French duck', price: '17,90 €' }
  ] },
  'hauptgerichte:31': { variants: [
    { code: 'A', label_de: 'Tofu', label_en: 'Tofu', price: '13,90 €' },
    { code: 'B', label_de: 'Gebratenes Hähnchen', label_en: 'Fried chicken', price: '14,90 €' },
    { code: 'C', label_de: 'Gegrilltes Hähnchenfilet', label_en: 'Grilled chicken fillet', price: '14,90 €' },
    { code: 'D', label_de: 'Hähnchenstreifen', label_en: 'Chicken strips', price: '14,90 €' },
    { code: 'E', label_de: 'Garnelen', label_en: 'Shrimp', price: '16,90 €' },
    { code: 'F', label_de: 'Rind', label_en: 'Beef', price: '16,90 €' },
    { code: 'G', label_de: 'Lachs', label_en: 'Salmon', price: '17,90 €' },
    { code: 'H', label_de: 'Französische Ente', label_en: 'French duck', price: '17,90 €' }
  ] }
};

Object.assign(window.JURY_MENU_NEW_OVERRIDES, {
  'hauptgerichte:32': { variants: [{code:'A',label_de:'Tofu',price:'13,90 €'},{code:'B',label_de:'Gebratenes Hähnchen',price:'14,90 €'},{code:'C',label_de:'Gegrilltes Hähnchenfilet',price:'14,90 €'},{code:'D',label_de:'Hähnchenstreifen',price:'14,90 €'},{code:'E',label_de:'Garnelen',price:'16,90 €'},{code:'F',label_de:'Rind',price:'16,90 €'},{code:'H',label_de:'Französische Ente',price:'17,90 €'}] },
  'hauptgerichte:33': { variants: [{code:'A',label_de:'Tofu',price:'13,90 €'},{code:'B',label_de:'Gebratenes Hähnchen',price:'14,90 €'},{code:'C',label_de:'Gegrilltes Hähnchenfilet',price:'14,90 €'},{code:'D',label_de:'Hähnchenstreifen',price:'14,90 €'},{code:'E',label_de:'Garnelen',price:'16,90 €'},{code:'F',label_de:'Rind',price:'16,90 €'},{code:'G',label_de:'Lachs',price:'17,90 €'},{code:'H',label_de:'Französische Ente',price:'17,90 €'}] },
  'hauptgerichte:34': { variants: [{code:'A',label_de:'Tofu',price:'13,90 €'},{code:'B',label_de:'Gebratenes Hähnchen',price:'14,90 €'},{code:'C',label_de:'Gegrilltes Hähnchenfilet',price:'14,90 €'},{code:'D',label_de:'Hähnchenstreifen',price:'14,90 €'},{code:'E',label_de:'Garnelen',price:'16,90 €'},{code:'F',label_de:'Rind',price:'16,90 €'},{code:'G',label_de:'Lachs',price:'17,90 €'},{code:'H',label_de:'Französische Ente',price:'17,90 €'}] },
  'reis_spezial:35': { variants: [{code:'A',label_de:'Tofu',price:'13,90 €'},{code:'B',label_de:'Gebratenes Hähnchen',price:'14,90 €'},{code:'C',label_de:'Gegrilltes Hähnchenfilet',price:'14,90 €'},{code:'D',label_de:'Hähnchenstreifen',price:'14,90 €'},{code:'E',label_de:'Garnelen',price:'16,90 €'},{code:'F',label_de:'Rind',price:'16,90 €'},{code:'G',label_de:'Lachs',price:'17,90 €'},{code:'H',label_de:'Französische Ente',price:'17,90 €'}] },
  'reis_spezial:36': { price:'17,90 €' }, 'reis_spezial:37': { price:'15,90 €' }, 'reis_spezial:38': { price:'16,90 €' },
  'reis_spezial:39': { variants: [{code:'A',label_de:'Tofu',price:'13,90 €'},{code:'B',label_de:'Gebratenes Hähnchen',price:'14,90 €'},{code:'C',label_de:'Gegrilltes Hähnchenfilet',price:'14,90 €'},{code:'D',label_de:'Hähnchenstreifen',price:'14,90 €'},{code:'E',label_de:'Garnelen',price:'16,90 €'},{code:'F',label_de:'Rind',price:'16,90 €'},{code:'G',label_de:'Lachs',price:'17,90 €'},{code:'H',label_de:'Französische Ente',price:'17,90 €'}] },
  'gebratene_nudeln:40': { variants: [{code:'A',label_de:'Tofu',price:'13,90 €'},{code:'B',label_de:'Gebratenes Hähnchen',price:'14,90 €'},{code:'C',label_de:'Gegrilltes Hähnchenfilet',price:'14,90 €'},{code:'D',label_de:'Hähnchenstreifen',price:'14,90 €'},{code:'E',label_de:'Garnelen',price:'16,90 €'},{code:'F',label_de:'Rind',price:'16,90 €'},{code:'G',label_de:'Lachs',price:'17,90 €'},{code:'H',label_de:'Französische Ente',price:'17,90 €'}] },
  'vegan:42': { price:'15,90 €' }, 'vegan:43': { price:'15,90 €' }, 'vegan:44': { price:'15,90 €' }, 'vegan:45': { price:'15,90 €' }, 'vegan:46': { price:'16,90 €' }, 'vegan:47': { price:'16,90 €' },
  'pho:48': { variants: [{code:'A',label_de:'Tofu',price:'12,50 €'},{code:'B',label_de:'Hähnchenfilet',price:'14,50 €'},{code:'C',label_de:'Rohes Rind & Rinderbällchen',price:'16,90 €'},{code:'D',label_de:'Rind',price:'16,90 €'},{code:'E',label_de:'Full Topping (alle Beilagen)',price:'18,50 €'}] },
  'pho:50': { variants: [{code:'A',label_de:'Tofu',price:'12,50 €'},{code:'B',label_de:'Knuspriges Hähnchen',price:'14,90 €'},{code:'C',label_de:'Rind',price:'15,50 €'},{code:'D',label_de:'Vietnamesische Fleischwurst',price:'14,90 €'},{code:'E',label_de:'Knusprige Ente',price:'16,90 €'},{code:'F',label_de:'Garnelen',price:'16,50 €'}] },
  'pho:51': { price:'16,90 €' }, 'bun:52': { price:'16,90 €' }, 'bun:53': { price:'16,90 €' }, 'bun:54': { price:'14,90 €' },
  'extra_beilagen:59': { code:'54', price:'2,00 €' }, 'extra_beilagen:60': { code:'55', price:'2,50 €' }, 'extra_beilagen:61': { code:'56', price:'8,50 €' }, 'extra_beilagen:62': { code:'57', price:'8,50 €' }, 'extra_beilagen:63': { code:'58', price:'9,00 €' }, 'extra_beilagen:64': { code:'59', price:'7,90 €' }, 'extra_beilagen:65': { code:'60', price:'5,90 €' }, 'extra_beilagen:66': { code:'61', price:'6,90 €' }, 'extra_beilagen:67': { code:'62', price:'2,50 €' }, 'extra_beilagen:68': { code:'63', price:'3,50 €' }, 'extra_beilagen:69': { code:'64', price:'3,50 €' },
  'saucen_extra:70': { code:'65', price:'4,00 €' }, 'saucen_extra:71': { code:'66', price:'4,00 €' }, 'saucen_extra:72': { code:'67', price:'4,00 €' }, 'saucen_extra:73': { code:'68', price:'4,00 €' }
});

// Remaining PDF sections keep the same dish order but use the new numbering.
[['softdrinks',135,142],['saefte',143,155],['lassi',156,157],['limonade',158,164],['cocktails_af',165,170],['cocktails_alk',171,178],['spritz',179,185]].forEach(([cat, first, last]) => {
  for (let code = first; code <= last; code += 1) {
    window.JURY_MENU_NEW_OVERRIDES[`${cat}:${code}`] = { ...(window.JURY_MENU_NEW_OVERRIDES[`${cat}:${code}`] || {}), code: String(code - 1) };
  }
});

Object.assign(window.JURY_MENU_NEW_OVERRIDES, {
  'biere:186': { code:'185', name_de:'Köstritzer Schwarzbier (0,3 / 0,5 L)', price:'3,50 € / 5,50 €' },
  'biere:187': { code:'186', name_de:'König Ludwig Hefeweizen (0,5 L)', price:'5,50 €' },
  'biere:188': { code:'187', name_de:'Alkoholfrei Hefeweizen (0,5 L)', price:'5,90 €' },
  'biere:189': { code:'188', name_de:'Alkoholfrei Pils (0,3 L)', price:'5,90 €' },
  'biere:190': { code:'190', name_de:'Warsteiner Radler (0,3 / 0,5 L)', price:'3,50 € / 5,90 €' },
  'biere:191': { code:'189', name_de:'Warsteiner Fassbier (0,3 / 0,5 L)', price:'3,50 € / 5,90 €' },
  'biere:K191': { code:'191' }, 'biere:K192': { code:'192' },
  'kaffee:192': { code:'194', price:'5,00 €' }, 'kaffee:193': { code:'195', price:'5,50 €' }, 'kaffee:194': { code:'196', price:'6,50 €' }, 'kaffee:195': { code:'197', price:'6,50 €' }, 'kaffee:197': { code:'198', price:'6,50 €' },
  'tee:198': { code:'198', price:'5,00 €' }, 'tee:199': { code:'199', price:'5,00 €' }, 'tee:200': { code:'200', price:'5,00 €' }, 'tee:201': { code:'201', name_de:'Minze & Ingwertee', price:'5,50 €' }, 'tee:202': { code:'202', price:'6,00 €' },
  'schnaps:203': { code:'203' }, 'schnaps:204': { code:'204' }, 'schnaps:205': { code:'205' }, 'schnaps:206': { code:'206' }, 'schnaps:207': { code:'207' }, 'schnaps:208': { code:'208' }, 'schnaps:209': { code:'209' }
});

window.JURY_MENU_NEW_EXTRA_CATEGORIES = [{
  id: 'desserts', name_de: 'Nachtisch', name_en: 'Desserts', items: [
    { code:'71', name_de:'Fruchtjoghurt', name_en:'Fruit yogurt', price:'7,90 €', allergens:['G'] },
    { code:'72', name_de:'Joghurt mit Gelee', name_en:'Yogurt with jelly', price:'7,90 €', allergens:['G'] },
    { code:'73', name_de:'Mochi-Eis', name_en:'Mochi ice cream', price:'7,50 €', allergens:['G'] },
    { code:'74', name_de:'Frittierte Banane', name_en:'Fried banana', price:'7,50 €', allergens:['A','C','E','K'] },
    { code:'75', name_de:'Mango-Cheesecake', name_en:'Mango cheesecake', price:'7,90 €', allergens:['G'] },
    { code:'76', name_de:'Matcha-Mousse', name_en:'Matcha mousse', price:'7,90 €', allergens:['G'] },
    { code:'77', name_de:'3 Kugel Eis nach Wahl', name_en:'3 scoops of ice cream', price:'7,50 €', allergens:['G'] }
  ]
}];

// The old website contained a few dishes that no longer appear in the customer
// PDF. Filter them before rendering or exposing them to the order cart.
window.JURY_MENU_NEW_EXCLUSIONS = {
  categories: ['banh_mi'],
  items: new Set(['gebratene_nudeln:41', 'pho:49', 'bun:55', 'kaffee:196'])
};

// PDF page 13 onward renumbers these existing entries. The display and cart
// keys are rebuilt after this mapping, so an order always uses the new number.
Object.assign(window.JURY_MENU_NEW_OVERRIDES, {
  'vegan:42': { code:'41', price:'15,90 €' }, 'vegan:43': { code:'42', price:'15,90 €' }, 'vegan:44': { code:'43', price:'15,90 €' }, 'vegan:45': { code:'44', price:'15,90 €' }, 'vegan:46': { code:'45', price:'16,90 €' }, 'vegan:47': { code:'46', price:'16,90 €' },
  'pho:48': { code:'47', variants: [{code:'A',label_de:'Tofu',price:'12,50 €'},{code:'B',label_de:'Hähnchenfilet',price:'14,50 €'},{code:'C',label_de:'Rohes Rind & Rinderbällchen',price:'16,90 €'},{code:'D',label_de:'Rind & Rinderbällchen',price:'16,90 €'},{code:'E',label_de:'Full Topping',price:'18,50 €'}] },
  'pho:50': { code:'49', variants: [{code:'A',label_de:'Tofu',price:'12,50 €'},{code:'B',label_de:'Knuspriges Hähnchen',price:'14,90 €'},{code:'C',label_de:'Rind',price:'15,50 €'},{code:'D',label_de:'Vietnamesische Fleischwurst',price:'14,90 €'},{code:'E',label_de:'Knusprige Ente',price:'16,90 €'},{code:'F',label_de:'Garnelen',price:'16,50 €'}] },
  'pho:51': { code:'50', price:'16,90 €' },
  'bun:52': { code:'51', price:'16,90 €' }, 'bun:53': { code:'52', price:'16,90 €' }, 'bun:54': { code:'53', price:'14,90 €' },
  'wein:216': { code:'217' }, 'wein:217': { code:'218' }, 'wein:218': { code:'219' }, 'wein:219': { code:'216' }
});

window.JURY_MENU_NEW_EXTRA_ITEMS = {
  biere: [
    { code:'K191', name_de:'König Pilsener Fassbier (0,3 / 0,5 L)', name_en:'König Pilsener draft beer', variants:[{code:'0,3 L',label_de:'0,3 L',price:'3,50 €'},{code:'0,5 L',label_de:'0,5 L',price:'4,90 €'}], allergens:['A'] },
    { code:'K192', name_de:'Königpilsener Radler (0,3 / 0,5 L)', name_en:'Königpilsener shandy', variants:[{code:'0,3 L',label_de:'0,3 L',price:'3,50 €'},{code:'0,5 L',label_de:'0,5 L',price:'4,90 €'}], allergens:['A'] }
  ]
};
