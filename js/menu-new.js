/*
 * JURY menu v2026-08-24
 * Source: menu-cuoi.pdf (14 pages, supplied by customer).
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

// OCR-verified entries from menu-cuoi.pdf.  Keep the source information here
// rather than inferring it from a similarly named item in the former menu.
const currentItem = (code, name, price, allergens, description = '') => ({
  code: String(code), name_de: name, name_en: name, price: euro(price),
  allergens: allergens ? allergens.split(',').filter(Boolean) : [],
  desc_de: description, desc_en: description
});
const currentVariants = (code, name, allergens, description, entries) => ({
  code: String(code), name_de: name, name_en: name, desc_de: description,
  desc_en: description, variants: entries.map(([variant, label, price]) => ({
    code: variant, label_de: label, label_en: label, price: euro(price),
    allergens: allergens.split(',').filter(Boolean)
  }))
});
window.JURY_MENU_CUOI_FOOD = [
  { id: 'vorspeisen-neu', name_de: 'Vorspeisen', name_en: 'Appetizers', items: [
    currentVariants(1, 'Goi Cuon - Sommerrollen (2 Stk.)', 'B,D,E,F', 'Frisches Reispapier mit Reisnudeln, grüner Gurke, Salat und Rucola. Dazu Erdnusssoße oder Limetten-Dressing.', [['A','Tofu','5,50'],['B','Hühnerfleisch','5,50'],['C','Garnelen','6,50']]),
    currentItem(2,'Nem Chien - Frühlingsrollen (2 Stk.)','5,50','A,C,D,F','Mit gehacktem Fleisch, Reisnudeln und Gemüse. Dazu frisches Limetten-Dressing.'),
    currentItem(3,'Minifrühlingsrollen (5 Stk.)','5,50','A,C,E,F','Vegetarische Minifrühlingsrollen mit Erdnüssen und Süß-Sauer-Sauce.'),
    currentItem(4,'Ga Xien (1 Stk.)','5,50','A,E,F','Gebackener Hähnchenspieß mit Erdnusssauce.'),
    currentItem(5,'Yakitori Chicken (2 Stk.)','5,90','A,F,H,N','Japanische Hühnerspieße mit Teriyaki-Soße und Sesam.'),
    currentItem(6,'Wantan Gebacken (5 Stk.)','5,90','A,B,C,F','Gebackener Wantanteig gefüllt mit gehacktem Hühnerfleisch und Garnelen. Dazu Süß-Sauer-Sauce.'),
    currentItem(7,'Dau Phu Chien Com - Tofu im Reismantel (2 Stk.)','5,50','F','Knusprig gebackener Tofu mit vietnamesischem grünen Puffreismantel, serviert mit Süß-Sauer-Sauce.'),
    currentItem(8,'Tom Chien Com - Garnelen im Reismantel (2 Stk.)','6,90','B,F','Knusprig gebackene Garnelen mit vietnamesischem grünen Puffreismantel, serviert mit Süß-Sauer-Sauce.'),
    currentItem(9,'Edamame','5,90','F','Gedämpfte Sojabohnen mit Salz.'),
    currentVariants(10,'Mango-Salat','B,D,E,F','Mangostreifen, Kräuter, Karotten, Minze, Erdnüsse und Limetten-Dressing, scharf.', [['A','Ohne Garnelen','6,50'],['B','Mit Garnelen','7,50']]),
    currentItem(11,'Chuka Salat','5,90','A,F,H,N','Seetang, Salat, hausgemachte Sauce und Sesam.'),
    currentItem(12,'Gyoza (4 Stk.)','5,90','A,E,F','Knusprige Hähnchen-Dumplings mit Süß-Sauer-Soße und Erdnüssen.'),
    currentItem(13,'Vegane Gyoza (4 Stk.)','5,50','A,F,H','Gedämpfte und angebratene Teigtaschen mit würziger Gemüsefüllung, rein pflanzlich.'),
    currentItem(14,'Ha Cao Hap - gedämpfte Dumplings (4 Stk.)','5,90','A,B,F','Teigtaschen gefüllt mit Garnelen und Hühnerfleisch, gedämpft im Bambustopf.'),
    currentItem(15,'Kimchi','4,50','D,F','Koreanisch fermentierter Chinakohl, pikant-würzig und angenehm scharf.'),
    currentItem(16,'Schweinespieß gegrillt - Thịt xiên nướng (1 Stk.)','4,50','A,F','Gegrillter Schweinespieß, mariniert mit Zitronengras, Knoblauch und feiner Würze.')
  ] },
  { id: 'suppen-klein', name_de: 'Suppen (klein)', name_en: 'Small soups', items: [
    currentItem(17,'Wantan Suppe','5,50','A,B,C,F','Hühnerfleisch und Garnelen in Teigtaschen mit Gemüse, Asia-Kräutern und Reisnudeln.'),
    currentVariants(18,'Gemüse Suppe','B,F','Verschiedenes Gemüse und Asia-Kräuter mit Glasnudeln.', [['A','Tofu','5,90'],['B','Hühnerfleisch','5,90'],['C','Garnelen','6,90']]),
    currentVariants(19,'Kokossuppe','B,D,F','Kokosmilch, Zitronengras, Asia-Kräuter, Gemüse und Champignons.', [['A','Tofu','5,90'],['B','Hühnerfleisch','5,90'],['C','Garnelen','6,90']])
  ] },
  { id: 'vegan-neu', name_de: 'Vegan', name_en: 'Vegan', items: [
    currentItem(20,'Shaolin Seitan BBQ Xao Rau','13,90','A,E,F,N','Wok-seared Seitan mit Ingwer, Zitronengras, Gemüse, Salat, Erdnüssen und Reis.'),
    currentItem(21,'Baby Buddha','13,90','A,E,F','Shaolin-Seitan-Spieße mit gegrilltem Gemüse, Erdnusssoße, Salat, Erdnüssen und Reis.'),
    currentItem(22,'Bun Dau','12,90','D,E,F','Reisnudeln mit Salat, Erdnüssen, Röstzwiebeln, vietnamesischen Kräutern, Tofu und Limetten-Fischsauce-Dressing.')
  ] }
];

const latestProtein = (code, name, allergens) => currentVariants(code, name, allergens, '', [
  ['A','Tofu','12,50'],['B','Hühnerfleisch','13,50'],['C','Hähnchenkross','14,50'],
  ['D','Rindfleisch','14,90'],['E','Garnelen','14,90'],['F','Ente kross','15,50'],['G','Lachsfilet','16,90']
]);
window.JURY_MENU_CUOI_FOOD.push(
  { id: 'suppen-gross', name_de: 'Suppen (groß)', name_en: 'Large soups', items: [
    currentItem(23,'Pho Bo - Rindfleisch','13,90','D,F','Reisbandnudeln, Rindfleischstreifen, Sojakeimlinge und frische asiatische Kräuter.'),
    currentItem(24,'Pho Ga - Hühnerfleisch','12,90','D,F','Hühnerfleisch mit Reisbandnudeln, Sojakeimlingen und asiatischen Kräutern in feiner Brühe.'),
    currentVariants(25,'Gemüsesuppe (groß)','B,F','Glasnudeln, Sojakeimlinge und frische asiatische Kräuter in delikater Brühe.', [['A','Tofu','12,50'],['B','Hühnerfleisch','13,90'],['C','Garnelen','14,50']]),
    currentItem(26,'Wantansuppe (groß)','14,50','A,B,C,F','Wantan mit Hühnerfleisch und Garnelen, frischem Gemüse und Reisnudeln.')
  ] },
  { id: 'hauptgerichte-neu', name_de: 'Hauptgerichte', name_en: 'Main dishes', items: [
    currentItem(27,'Hühnerfleisch mit Erdnuss-Soße (2 Stk.)','14,50','E,F','Gegrillte Hähnchenspieße mit Erdnuss-Soße, Kokosmilch, Salat, Erdnüssen und Reis.'),
    latestProtein(28,'Gebratener Reis','C,F'), latestProtein(29,'Gebratene Reisbandnudeln','C,F'), latestProtein(30,'Udon Xào - gebratene Udon-Nudeln','A,C,F'),
    currentItem(31,'Gegrillte Garnelen','16,90','B,F','Gegrillt mit Gemüse und Salat. Mit Reis oder Nudeln und Pfeffersauce.'),
    latestProtein(32,'Bowls','C,F,N'), currentItem(33,'Bun Nem','12,90','A,C,D,E,F','Gefüllte Reispapierrolle mit Hackfleisch, Morcheln, Glasnudeln, Kräutern, Salat, Erdnüssen und Reisnudeln.'),
    currentItem(34,'Bún Chả Hà Nội','15,90','D,F','Gegrilltes mariniertes Schweinefleisch mit Reisnudeln, Kräutern und Süß-Sauer-Fischsauce.'),
    currentItem(35,'Bún Bò Huế','15,90','D,F','Würzige Nudelsuppe aus Huế mit Reisnudeln, Rindfleisch, Zitronengras, Chili, Kräutern und Sojasprossen.')
  ] },
  { id: 'wok-neu', name_de: 'Wok-Gerichte', name_en: 'Wok dishes', items: [
    latestProtein(36,'Sot Mango - Mango-Sauce','E,F'), latestProtein(37,'Sot Curry - Curry-Sauce','E,F,G'), latestProtein(38,'Erdnuss-Soße','E,F'), latestProtein(39,'Rau Xao - gebratenes Gemüse','E,F'), latestProtein(40,'Sa Ot - Zitronengras & Chili','E,F'),
    currentItem(41,'Bò Lúc Lắc - Shaking Beef','16,90','F','Wok-Rindfleisch mit Knoblauch, Ingwer, vietnamesischem Gemüse und Reisnudeln auf heißer Platte.'),
    currentItem(42,'Französische Entenbrust','17,50','F','Zarte Entenbrust mit Wok-Gemüse auf heißer Gusseisenplatte, dazu Salat und Reis.')
  ] },
  { id: 'kinder-neu', name_de: 'Kinder Menü', name_en: 'Kids menu', items: [
    currentItem(43,'Chicken Nugget','6,50','A,C','Mit Pommes, Salat, Ketchup und Mayonnaise.'), currentItem(44,'Ga Xien Nho (1 Stk.)','6,90','E,F','Gebackener Hähnchenspieß mit Erdnusssauce und Reis.'), currentItem(45,'Ga Chien Nho (1 Stk.)','7,50','A,C,F','Gebackenes Hähnchenfilet mit Süß-Sauer-Sauce und Reis.'), currentItem(46,'Thit Xien Nho - Schweinespieß (1 Stk.)','7,90','A,F','Gegrillter Schweinespieß mit Reis.'), currentItem(47,'Khoai Tay Chien - Pommes frites','5,50','A,C','Mit Ketchup und Mayonnaise.'), currentItem(48,'Khoai Lang Chien - Süßkartoffel-Pommes','5,50','A,C','Mit Ketchup und Mayonnaise.')
  ] },
  { id: 'desserts-neu', name_de: 'Desserts', name_en: 'Desserts', items: [currentItem(49,'3 Kugel Eis','5,50','C,G,H','Drei Kugeln Eis nach Wahl. Verschiedene Sorten, bitte nachfragen.'),currentItem(50,'Chuoi Chien - frittierte Banane','5,50','A,C,E,G,N','Gebackene Banane mit Honig, Erdnüssen und Sesam.'),currentItem(51,'Japanischer Kuchen','6,50','A,C,G','Japanese sticky rice cake. Verschiedene Sorten.') ] }
);
window.JURY_MENU_CUOI_EXCLUDED_CATEGORIES = new Set(['vorspeise','sharing_sets','suppen_salat','kindermenue','hauptgerichte','reis_spezial','gebratene_nudeln','vegan','pho','bun','banh_mi','extra_beilagen','saucen_extra']);
