/*
 * JURI menu v2026-08-21
 * Source: in lai 2/menu in 5.pdf (26 pages, supplied by customer).
 *
 * This remains an overlay for data/menu.json so the public menu, dish page
 * and cart always share one source of truth. `code` is the new printed code.
 */
window.JURY_MENU_NEW_OVERRIDES = {};
const JURY_MENU = window.JURY_MENU_NEW_OVERRIDES;
const euro = value => `${value} €`;
const variants = (entries, allergens = ['D', 'E', 'F', 'N']) => entries.map(([code, label_de, price, itemAllergens]) => ({ code, label_de, label_en: label_de, price: euro(price), allergens: itemAllergens || allergens }));
const set = (key, value) => { JURY_MENU[key] = value; };
const renumber = (category, oldFirst, newFirst, count) => { for (let index = 0; index < count; index += 1) set(`${category}:${oldFirst + index}`, { code: String(newFirst + index) }); };

set('vorspeise:1', { name_de: 'Goi Cuon (2 Stk.)', name_en: 'Goi Cuon (2 pcs.)', variants: variants([['A', 'Tofu', '5,50', ['D', 'E', 'F']], ['B', 'Hähnchen', '5,90', ['D', 'E', 'F', 'N']], ['C', 'Garnelen', '6,50', ['B', 'D', 'E', 'F']]]) });
[['2', 'Cha Gio (2 Stk.)', '5,90'], ['3', 'Mini Frühlingsrollen vegan (6 Stk.)', '4,90'], ['4', 'Hoanh thanh chien (5 Stk.)', '5,50'], ['5', 'Dau hu chien com (2 Stk.)', '6,50'], ['6', 'Tom chien com (2 Stk.)', '6,90'], ['7', 'Ha cao tom (4 Stk.)', '5,90'], ['8', 'Edamame (gedämpft)', '5,50'], ['9', 'Yakitori (2 Stk.)', '5,90'], ['10', 'Schweinespieße grillte (2 Stk.)', '6,50'], ['11', 'Hähnchen Gyoza (4 Stk.)', '5,90'], ['12', 'Vegane Gyoza (4 Stk.)', '5,50']].forEach(([code, name_de, price]) => set(`vorspeise:${code}`, { name_de, name_en: name_de, price: euro(price) }));
set('vorspeise:6', { name_de: 'Tom chien com (2 Stk.)', name_en: 'Crispy green-rice shrimp (2 pcs.)', price: euro('6,90'), allergens: ['A', 'E', 'F'] });
set('vorspeise:10', { name_de: 'Schweinespieße grillte (2 Stk.)', name_en: 'Grilled pork skewers (2 pcs.)', price: euro('6,50'), allergens: ['A', 'B', 'C', 'E', 'F'] });
set('vorspeise:13', { name_de: 'Kleine Pho Bowl', name_en: 'Small pho bowl', variants: variants([['A', 'Tofu', '6,90', ['D', 'F']], ['B', 'Hähnchen', '7,50', ['D', 'E', 'F', 'N']], ['C', 'Rind', '8,50', ['D']]]) });
['18,50', '27,90', '17,50', '24,90'].forEach((price, index) => set(`sharing_sets:${14 + index}`, { price: euro(price) }));
set('suppen_salat:18', { variants: variants([['A', 'Tofu', '5,50', ['D', 'F']], ['B', 'Hähnchen', '6,50', ['D']], ['C', 'Garnelen', '6,90', ['B', 'D']]]) });
set('suppen_salat:19', { variants: variants([['A', 'Tofu', '5,90', ['B', 'D', 'F']], ['B', 'Hähnchen', '6,50', ['B', 'D']], ['C', 'Garnelen', '6,90', ['B', 'D']]]) });
set('suppen_salat:20', { price: euro('6,50') }); set('suppen_salat:21', { price: euro('5,90') });
set('suppen_salat:22', { name_de: 'Mango Salat', name_en: 'Mango salad', variants: variants([['A', 'Hähnchen', '7,90', ['B', 'D', 'E']], ['B', 'Garnelen', '8,90', ['B', 'D', 'E']]]) });

['5,90', '6,50', '10,50', '9,90'].forEach((price, index) => set(`kindermenue:${25 + index}`, { code: String(23 + index), price: euro(price) }));
const mainVariants = variants([['A', 'Tofu', '13,90'], ['B', 'Hühnerfleisch', '14,90'], ['C', 'Gegrilltes Hähnchenfilet', '14,90'], ['D', 'Hähnchen kross', '14,90'], ['E', 'Garnelen', '16,90', ['B', 'D', 'E', 'F', 'N']], ['F', 'Rind', '16,90'], ['G', 'Gegrilltes Lachs', '17,90'], ['H', 'Französische Ente', '17,90'], ['I', 'Ente kross', '16,90', ['C', 'D', 'E', 'F', 'N']]]);
[29, 30, 31, 32, 33, 34].forEach((oldCode, index) => set(`hauptgerichte:${oldCode}`, { code: String(27 + index), variants: mainVariants }));
set('reis_spezial:35', { code: '33', name_de: 'Gebratener Reis', name_en: 'Fried rice', variants: variants([['A', 'Tofu', '13,90'], ['B', 'Hähnchen kross', '14,90'], ['C', 'Gegrilltes Hähnchenfilet', '14,90'], ['D', 'Gebackene Garnelen', '14,90'], ['E', 'Lachs', '16,90'], ['F', 'Gegrilltes Lachs', '16,90'], ['G', 'Ente kross', '17,90'], ['H', 'Französische Ente', '17,90']]) });
set('reis_spezial:36', { code: '34', price: euro('17,90') });
set('reis_spezial:37', { code: '35', name_de: 'Saigon BBQ Kimchi Bowl', name_en: 'Saigon BBQ kimchi bowl', desc_de: 'Saigon-Style gegrilltes Schweinefleisch mit Salat, gerösteten Erdnüssen, Kimchi sowie Erdnuss- oder Süß-Sauer-Sauce. Dazu Reis.', desc_en: 'Saigon-style grilled pork with salad, roasted peanuts, kimchi and peanut or sweet-and-sour sauce. Served with rice.', allergens: ['A', 'B', 'D', 'E', 'F'], price: euro('16,90') });
set('reis_spezial:38', { code: '36', name_de: 'Sushi Bowl', name_en: 'Sushi bowl', desc_de: 'Reis mit Avocado, Mais, Gurke, Edamame, Salat und spezieller Mayonnaise-Sauce.', desc_en: 'Rice with avocado, corn, cucumber, edamame, salad and special mayonnaise sauce.', allergens: ['A', 'B', 'D', 'E', 'F'], price: euro('16,90') });
set('gebratene_nudeln:40', { code: '37', name_de: 'Gebratene Udon Nudeln', name_en: 'Fried udon noodles', variants: mainVariants });
['38', '39', '40', '41', '42', '43'].forEach((code, index) => set(`vegan:${42 + index}`, { code }));
set('pho:48', { code: '44', name_de: 'Pho Viet Nam — Traditionelle Pho', name_en: 'Pho Viet Nam — traditional pho', variants: variants([['A', 'Tofu', '12,50', ['D', 'F']], ['B', 'Hähnchenfilet', '14,50', ['D']], ['C', 'Rohes Rind & Rinderbällchen', '16,90', ['A', 'D']], ['D', 'Rind & Rinderbällchen', '16,90', ['A', 'D']], ['E', 'Full Topping (alle Beilagen)', '18,50', ['A', 'D']]]) });
set('pho:50', { code: '45', name_de: 'Gebratene Reisbandnudeln', name_en: 'Stir-fried rice noodles', desc_de: 'Frisch gebratene Reisbandnudeln mit Gemüse, Sojasprossen, Erdnüssen, Röstzwiebeln und hausgemachter Sauce. Keine Suppe.', desc_en: 'Freshly stir-fried rice noodles with vegetables, bean sprouts, peanuts, fried onions and homemade sauce. No broth.', variants: mainVariants });
['46', '47', '48'].forEach((code, index) => set(`bun:${52 + index}`, { code }));
renumber('extra_beilagen', 59, 49, 11); renumber('saucen_extra', 70, 60, 4);
['2,00', '2,50', '8,50', '8,50', '9,00', '7,90', '5,90', '6,90', '2,50', '3,50', '3,50'].forEach((price, index) => set(`extra_beilagen:${59 + index}`, { code: String(49 + index), price: euro(price) }));
['4,00', '4,00', '4,00', '4,00'].forEach((price, index) => set(`saucen_extra:${70 + index}`, { code: String(60 + index), price: euro(price) }));
set('saucen_extra:70', { code: '60', name_de: 'Grünes Curry', name_en: 'Green curry', desc_de: 'Hausgemachte grüne Curry-Sauce als Extra.', desc_en: 'Homemade green curry sauce as an extra.', allergens: ['B', 'D', 'F'], price: euro('4,00') });
set('saucen_extra:71', { code: '61', name_de: 'Rotes Curry', name_en: 'Red curry', desc_de: 'Hausgemachte rote Curry-Sauce als Extra.', desc_en: 'Homemade red curry sauce as an extra.', allergens: ['B', 'D', 'F'], price: euro('4,00') });
set('saucen_extra:72', { code: '62', name_de: 'Erdnuss-Sauce', name_en: 'Peanut sauce', desc_de: 'Hausgemachte Erdnuss-Sauce als Extra.', desc_en: 'Homemade peanut sauce as an extra.', allergens: ['E', 'F', 'K'], price: euro('4,00') });
set('saucen_extra:73', { code: '63', name_de: 'Süß-Saure Sauce', name_en: 'Sweet-and-sour sauce', desc_de: 'Hausgemachte süß-saure Sauce als Extra.', desc_en: 'Homemade sweet-and-sour sauce as an extra.', allergens: ['A', 'F'], price: euro('4,00') });

window.JURY_MENU_NEW_EXTRA_CATEGORIES = [{ id: 'desserts', name_de: 'Nachtisch', name_en: 'Desserts', items: [
  { code: '64', name_de: 'Mochi-Eis', name_en: 'Mochi ice cream', desc_de: 'Mochi-Eis: Mango, Grüner Tee, Erdbeere. Verschiedene Sorten, bitte nachfragen.', desc_en: 'Mochi ice cream: mango, green tea, strawberry. Various flavors, please ask.', price: euro('7,50'), allergens: ['G'] },
  { code: '65', name_de: 'Frittierte Banane', name_en: 'Fried banana', desc_de: 'Frittierte Banane mit Honig, Erdnüssen und Sesam.', desc_en: 'Fried banana with honey, peanuts and sesame.', price: euro('7,50'), allergens: ['A', 'C', 'E', 'K'] },
  { code: '66', name_de: 'Mango-Cheesecake', name_en: 'Mango cheesecake', desc_de: 'Cremiger Käsekuchen mit süßer, fruchtiger Mango.', desc_en: 'Creamy cheesecake with sweet, fruity mango.', price: euro('7,90'), allergens: ['G'] }, { code: '67', name_de: 'Matcha-Mousse', name_en: 'Matcha mousse', desc_de: 'Leichte, luftige Mousse mit japanischem Grüntee. Verschiedene Sorten, bitte nachfragen.', desc_en: 'Light and airy mousse with Japanese green tea. Various flavors, please ask.', price: euro('7,90'), allergens: ['G'] }, { code: '68', name_de: '3 Kugel Eis nach Wahl', name_en: '3 scoops of ice cream', desc_de: 'Drei Kugeln Eis nach Wahl. Verschiedene Sorten, bitte nachfragen.', desc_en: 'Three scoops of ice cream of your choice. Various flavors, please ask.', price: euro('7,50'), allergens: ['G'] }
] }];

renumber('softdrinks', 135, 100, 8); renumber('saefte', 143, 108, 13); renumber('lassi', 156, 121, 2); renumber('limonade', 158, 123, 7); renumber('cocktails_af', 165, 130, 6); renumber('cocktails_alk', 171, 136, 8); renumber('spritz', 179, 144, 7);
set('biere:186', { code: '151', name_de: 'Köstritzer Schwarzbier (0,3 / 0,5 L)', variants: variants([['0,3 L', '0,3 L', '3,50', ['A']], ['0,5 L', '0,5 L', '5,50', ['A']]]) });
set('biere:187', { code: '152', name_de: 'König Ludwig Hefeweizen (0,5 L)', price: euro('5,50') }); set('biere:188', { code: '153', name_de: 'Alkoholfrei Hefeweizen (0,5 L)', price: euro('5,90') }); set('biere:189', { code: '154', name_de: 'Alkoholfrei Pils (0,3 L)', price: euro('5,90') });
set('biere:190', { code: '156', name_de: 'Warsteiner Radler (0,3 / 0,5 L)', variants: variants([['0,3 L', '0,3 L', '3,50', ['A']], ['0,5 L', '0,5 L', '4,90', ['A']]]) }); set('biere:191', { code: '155', name_de: 'Warsteiner Fassbier (0,3 / 0,5 L)', variants: variants([['0,3 L', '0,3 L', '3,50', ['A']], ['0,5 L', '0,5 L', '4,90', ['A']]]) });
window.JURY_MENU_NEW_EXTRA_ITEMS = { biere: [{ code: 'K191', name_de: 'König Pilsener Fassbier (0,3 / 0,5 L)', variants: variants([['0,3 L', '0,3 L', '3,50', ['A']], ['0,5 L', '0,5 L', '4,90', ['A']]]), allergens: ['A'] }, { code: 'K192', name_de: 'Königpilsener Radler (0,3 / 0,5 L)', variants: variants([['0,3 L', '0,3 L', '3,50', ['A']], ['0,5 L', '0,5 L', '4,90', ['A']]]), allergens: ['A'] }] };
set('biere:K191', { code: '157' }); set('biere:K192', { code: '158' }); ['159', '160', '161'].forEach((code, index) => set(`kaffee:${192 + index}`, { code })); renumber('tee', 198, 162, 5); renumber('schnaps', 203, 167, 7); renumber('wein', 210, 174, 10);

window.JURY_MENU_NEW_EXCLUSIONS = { categories: ['banh_mi'], items: new Set(['suppen_salat:23', 'suppen_salat:24', 'reis_spezial:39', 'gebratene_nudeln:41', 'pho:49', 'pho:51', 'bun:55', 'kaffee:195', 'kaffee:196', 'kaffee:197']) };
