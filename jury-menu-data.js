/**
 * JURY menu data
 * Source: JURY-Speisekarte-DE-EN-v26.pdf
 * Languages: German + English
 * Currency: EUR
 *
 * Usage in a normal browser:
 *   <script src="jury-menu-data.js"></script>
 *   console.log(window.JURY_MENU);
 *
 * Usage with Node/CommonJS:
 *   const JURY_MENU = require("./jury-menu-data.js");
 */

const JURY_MENU = {
  "meta": {
    "restaurant": "JURY",
    "brandLineDE": "Phở Restaurant · Asiatische Küche",
    "brandLineEN": "Vietnamese · Japanese Fusion",
    "address": "Kastanienwall 32, 31785 Hameln, Niedersachsen",
    "currency": "EUR",
    "currencySymbol": "€",
    "languageOrder": [
      "de",
      "en"
    ],
    "source": "JURY-Speisekarte-DE-EN-v26.pdf",
    "sourcePages": 21
  },
  "sections": [
    {
      "id": "appetizers",
      "roman": "I",
      "titleDE": "Vorspeise",
      "titleEN": "Appetizers",
      "noteDE": "Frisch zubereitet täglich",
      "noteEN": "Freshly prepared daily",
      "groups": [
        {
          "id": "starters",
          "titleDE": "Vorspeisen",
          "titleEN": "Appetizers",
          "items": [
            {
              "id": "1",
              "name": "Sommerrollen (2 Stk.)",
              "descriptionDE": "Reispapier-Sommerrollen mit Salat, Gurke, Mango, Koriander, Reisnudeln und gerösteten Erdnüssen. Mit hausgemachter Chili-Limetten-Sauce und Erdnuss-Sauce.",
              "descriptionEN": "Rice paper summer rolls with lettuce, cucumber, mango, coriander, rice noodles and roasted peanuts. With homemade chili-lime sauce and peanut sauce.",
              "variants": [
                {
                  "code": "A",
                  "name": "Tofu",
                  "price": 5.5,
                  "allergens": [
                    "D",
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "B",
                  "name": "Hähnchen",
                  "price": 5.9,
                  "allergens": [
                    "D",
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "C",
                  "name": "Garnelen",
                  "price": 6.2,
                  "allergens": [
                    "B",
                    "D",
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "D",
                  "name": "Schwein",
                  "price": 5.9,
                  "allergens": [
                    "D",
                    "E",
                    "F"
                  ]
                }
              ]
            },
            {
              "id": "2",
              "name": "Frühlingsrollen (2 Stk.)",
              "descriptionDE": "Knusprige Frühlingsrollen gefüllt mit Hähnchen, Glasnudeln, Pilzen und Gemüse, serviert mit kleinem Salat mit gerösteten Erdnüssen und Chili-Limetten-Sauce.",
              "descriptionEN": "Crispy spring rolls filled with chicken, glass noodles, mushrooms and vegetables, served with a small salad with roasted peanuts and chili-lime sauce.",
              "allergens": [
                "A",
                "D",
                "E",
                "F"
              ],
              "price": 5.9
            },
            {
              "id": "3",
              "name": "Mini Frühlingsrollen vegan (6 Stk.)",
              "descriptionDE": "Vegane Füllung, Salat und geröstete Erdnüsse.",
              "descriptionEN": "Vegan filling, salad and roasted peanuts.",
              "allergens": [
                "A",
                "E",
                "F"
              ],
              "price": 4.9,
              "tags": [
                "vegan"
              ]
            },
            {
              "id": "4",
              "name": "Wantans (5 Stk.)",
              "descriptionDE": "Knusprig frittierte Wantans gefüllt mit Hähnchen und Garnelen, mit kleinem Salat mit gerösteten Erdnüssen und süß-saurer Sauce.",
              "descriptionEN": "Crispy fried wontons filled with chicken and shrimp, with a small salad with roasted peanuts and sweet-and-sour sauce.",
              "allergens": [
                "A",
                "B",
                "C",
                "E",
                "F"
              ],
              "price": 5.5
            },
            {
              "id": "5",
              "name": "Gebratener Tofu im Cốm-Mantel (4 Stk.)",
              "descriptionDE": "Knusprig gebratener Tofu im Mantel aus vietnamesischem grünem Jungreis (Cốm xanh), serviert mit süß-saurer Sauce.",
              "descriptionEN": "Crispy fried tofu coated in Vietnamese young green rice (Cốm xanh), served with sweet-and-sour sauce.",
              "allergens": [
                "F"
              ],
              "price": 5.5,
              "tags": [
                "vegetarian"
              ]
            },
            {
              "id": "6",
              "name": "Garnelen im Cốm-Mantel (2 Stk.)",
              "descriptionDE": "Garnelen im knusprigen Mantel aus vietnamesischem grünem Jungreis (Cốm xanh), serviert mit süß-saurer Sauce.",
              "descriptionEN": "Shrimp in a crispy coating of Vietnamese young green rice (Cốm xanh), served with sweet-and-sour sauce.",
              "allergens": [
                "B",
                "F"
              ],
              "price": 5.9
            },
            {
              "id": "7",
              "name": "Dim Sum mit Garnelen (4 Stk.)",
              "descriptionDE": "Dim Sum mit Garnelen- und Gemüsefüllung, serviert mit Frühlingszwiebeln und hausgemachter Sojasauce.",
              "descriptionEN": "Dim sum filled with shrimp and vegetables, served with spring onions and homemade soy sauce.",
              "allergens": [
                "A",
                "B",
                "F"
              ],
              "price": 5.9
            },
            {
              "id": "8",
              "name": "Edamame (gedämpft)",
              "descriptionDE": "Gedämpfte junge Sojabohnen mit Meersalz.",
              "descriptionEN": "Steamed young soybeans with sea salt.",
              "allergens": [
                "F"
              ],
              "price": 5.5,
              "tags": [
                "vegan"
              ]
            },
            {
              "id": "9",
              "name": "Yakitori (2 Stk.)",
              "descriptionDE": "Hähnchenspieße nach japanischer Art mariniert, mit Salat, gerösteten Sesamsamen und Erdnüssen.",
              "descriptionEN": "Chicken skewers marinated Japanese style, with salad, roasted sesame seeds and peanuts.",
              "allergens": [
                "A",
                "E",
                "F",
                "K"
              ],
              "price": 6.9
            },
            {
              "id": "10",
              "name": "Schweinespieße (2 Stk.)",
              "descriptionDE": "Schweinespieße vom Holzkohlegrill, nach vietnamesischer Art mariniert, mit kleinem Salat und gerösteten Erdnüssen.",
              "descriptionEN": "Charcoal-grilled pork skewers marinated Vietnamese style, with a small salad and roasted peanuts.",
              "allergens": [
                "D",
                "E",
                "F"
              ],
              "price": 5.9
            },
            {
              "id": "11",
              "name": "Hähnchen Gyoza (4 Stk.)",
              "descriptionDE": "Japanische Gyoza mit Hähnchen- und Gemüsefüllung, knusprig gebraten, mit kleinem Salat und gerösteten Erdnüssen.",
              "descriptionEN": "Japanese gyoza filled with chicken and vegetables, pan-fried until crispy, with a small salad and roasted peanuts.",
              "allergens": [
                "A",
                "E",
                "F"
              ],
              "price": 5.9
            },
            {
              "id": "12",
              "name": "Vegane Gyoza (4 Stk.)",
              "descriptionDE": "Vegane Gyoza mit Tofu, Pilzen und Gemüse, knusprig gebraten, mit kleinem Salat und gerösteten Erdnüssen.",
              "descriptionEN": "Vegan gyoza filled with tofu, mushrooms and vegetables, pan-fried until crispy, with a small salad and roasted peanuts.",
              "allergens": [
                "A",
                "E",
                "F"
              ],
              "price": 5.5,
              "tags": [
                "vegan"
              ]
            },
            {
              "id": "13",
              "name": "Kleine Pho Bowl",
              "descriptionDE": "Kleine Portion vietnamesische Reisbandnudelsuppe — perfekt als Vorspeise oder leichte Mahlzeit. Mit kräftiger Brühe, Sojasprossen, Frühlingszwiebeln und Koriander.",
              "descriptionEN": "A small portion of Vietnamese rice noodle soup — perfect as a starter or light meal. With rich broth, bean sprouts, spring onions and coriander.",
              "variants": [
                {
                  "code": "A",
                  "name": "Tofu",
                  "price": 7.9,
                  "allergens": [
                    "D",
                    "F"
                  ]
                },
                {
                  "code": "B",
                  "name": "Hähnchen",
                  "price": 8.5,
                  "allergens": [
                    "D"
                  ]
                },
                {
                  "code": "C",
                  "name": "Rind",
                  "price": 8.9,
                  "allergens": [
                    "D"
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "sharing-sets",
          "titleDE": "Sharing Sets",
          "titleEN": "Sharing Sets",
          "items": [
            {
              "id": "14",
              "name": "Mix Set für 2 Personen",
              "descriptionDE": "Ideal zum Kennenlernen vieler Gerichte. Enthält: 2 Schweinespieße · 2 Frühlingsrollen · 2 Sommerrollen · 2 Wantans · eingelegter Kohlrabi & Karotten. 3 Saucen: süß-sauer · Erdnuss · Chili-Limette.",
              "descriptionEN": "Ideal for trying many dishes. Includes: 2 pork skewers · 2 spring rolls · 2 summer rolls · 2 wontons · pickled kohlrabi & carrots. 3 sauces: sweet-and-sour · peanut · chili-lime.",
              "allergens": [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F"
              ],
              "price": 18.5
            },
            {
              "id": "15",
              "name": "Mix Set für 3 Personen",
              "descriptionDE": "Für Gruppen oder Familien. Enthält: 3 Schweinespieße · 3 Frühlingsrollen · 3 Sommerrollen · 3 Wantans · eingelegter Kohlrabi & Karotten. 3 Saucen: süß-sauer · Erdnuss · Chili-Limette.",
              "descriptionEN": "For groups or families. Includes: 3 pork skewers · 3 spring rolls · 3 summer rolls · 3 wontons · pickled kohlrabi & carrots. 3 sauces: sweet-and-sour · peanut · chili-lime.",
              "allergens": [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F"
              ],
              "price": 27.9
            },
            {
              "id": "16",
              "name": "Vegan Set für 2 Personen",
              "descriptionDE": "100% pflanzlich. Enthält: 4 Mini Frühlingsrollen vegan · 2 vegane Sommerrollen · 2 vegane Wantan/Gyoza · Edamame · eingelegter Kohlrabi & Karotten. 3 Saucen: Erdnuss · süß-sauer · vegane Mayo.",
              "descriptionEN": "100% plant-based. Includes: 4 vegan mini spring rolls · 2 vegan summer rolls · 2 vegan wontons/gyoza · edamame · pickled kohlrabi & carrots. 3 sauces: peanut · sweet-and-sour · vegan mayo.",
              "allergens": [
                "A",
                "E",
                "F",
                "J"
              ],
              "price": 17.5,
              "tags": [
                "vegan"
              ]
            },
            {
              "id": "17",
              "name": "Vegan Set für 3 Personen",
              "descriptionDE": "100% pflanzlich, ausreichend für 3 Personen. Enthält: 6 Mini Frühlingsrollen vegan · 3 vegane Sommerrollen · 3 vegane Wantans · Edamame · eingelegter Kohlrabi & Karotten. 3 Saucen: Erdnuss · süß-sauer · vegane Mayo.",
              "descriptionEN": "100% plant-based, enough for 3 people. Includes: 6 vegan mini spring rolls · 3 vegan summer rolls · 3 vegan wontons · edamame · pickled kohlrabi & carrots. 3 sauces: peanut · sweet-and-sour · vegan mayo.",
              "allergens": [
                "A",
                "E",
                "F",
                "J"
              ],
              "price": 24.9,
              "tags": [
                "vegan"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "soups-salads",
      "roman": "II",
      "titleDE": "Suppen & Salat",
      "titleEN": "Soups & Salads",
      "groups": [
        {
          "id": "soups-salads",
          "titleDE": "Suppen & Salat",
          "titleEN": "Soups & Salads",
          "items": [
            {
              "id": "18",
              "name": "Gemüse Suppe",
              "descriptionDE": "Kräftige Brühe mit Flaschenkürbis, Brokkoli, Blumenkohl, Paprika, grünen Bohnen, Pilzen und Karotten, dazu Glasnudeln und asiatische Kräuter.",
              "descriptionEN": "Rich broth with bottle gourd, broccoli, cauliflower, bell pepper, green beans, mushrooms and carrots, with glass noodles and Asian herbs.",
              "variants": [
                {
                  "code": "A",
                  "name": "Tofu",
                  "price": 5.9,
                  "allergens": [
                    "D",
                    "F"
                  ]
                },
                {
                  "code": "B",
                  "name": "Hähnchen",
                  "price": 6.2,
                  "allergens": [
                    "D"
                  ]
                },
                {
                  "code": "C",
                  "name": "Garnelen",
                  "price": 6.9,
                  "allergens": [
                    "B",
                    "D"
                  ]
                }
              ]
            },
            {
              "id": "19",
              "name": "Kokos Tom Yum Suppe",
              "descriptionDE": "Kokosmilch, Tom Yum, Zitronengras, Gemüse, Pilze und asiatische Kräuter.",
              "descriptionEN": "Coconut milk, tom yum, lemongrass, vegetables, mushrooms and Asian herbs.",
              "variants": [
                {
                  "code": "A",
                  "name": "Tofu",
                  "price": 6.5,
                  "allergens": [
                    "B",
                    "D",
                    "F"
                  ]
                },
                {
                  "code": "B",
                  "name": "Hähnchen",
                  "price": 6.9,
                  "allergens": [
                    "B",
                    "D"
                  ]
                },
                {
                  "code": "C",
                  "name": "Garnelen",
                  "price": 7.5,
                  "allergens": [
                    "B",
                    "D"
                  ]
                }
              ]
            },
            {
              "id": "20",
              "name": "Wantan Suppe",
              "descriptionDE": "Wantans gefüllt mit Hähnchen und Garnelen, Gemüse, asiatische Kräuter in kräftiger Brühe.",
              "descriptionEN": "Wontons filled with chicken and shrimp, vegetables and Asian herbs in a rich broth.",
              "allergens": [
                "A",
                "B",
                "C",
                "D"
              ],
              "price": 6.5
            },
            {
              "id": "21",
              "name": "Regenbogen Salat (vegan)",
              "descriptionDE": "Bunter Salat mit frischem Gemüse, Tomaten, Mais, Mango, Gurke, Salat, Kräutern, Erdnüssen und geröstetem Sesam.",
              "descriptionEN": "Colorful salad with fresh vegetables, tomatoes, corn, mango, cucumber, lettuce, herbs, peanuts and roasted sesame.",
              "allergens": [
                "E",
                "F",
                "K"
              ],
              "price": 7.5,
              "tags": [
                "vegan"
              ]
            },
            {
              "id": "22",
              "name": "Seetang Salat",
              "descriptionDE": "Wakame-Seetang-Salat mit Salat, Sesam und hausgemachter Mayonnaise.",
              "descriptionEN": "Wakame seaweed salad with lettuce, sesame and homemade mayonnaise.",
              "allergens": [
                "C",
                "F",
                "J",
                "K"
              ],
              "price": 5.9
            },
            {
              "id": "23",
              "name": "Mango Salat",
              "descriptionDE": "Grüne Mango, Karotten, Gurke, Erdnüsse, Röstzwiebeln, Krabbenchips mit hausgemachter Thai-Sauce.",
              "descriptionEN": "Green mango, carrots, cucumber, peanuts, fried onions, prawn crackers with homemade Thai sauce.",
              "variants": [
                {
                  "code": "A",
                  "name": "Hähnchen",
                  "price": 7.9,
                  "allergens": [
                    "B",
                    "D",
                    "E"
                  ]
                },
                {
                  "code": "B",
                  "name": "Rind",
                  "price": 8.5,
                  "allergens": [
                    "B",
                    "D",
                    "E"
                  ]
                },
                {
                  "code": "C",
                  "name": "Garnelen",
                  "price": 8.9,
                  "allergens": [
                    "B",
                    "D",
                    "E"
                  ]
                }
              ]
            },
            {
              "id": "24",
              "name": "Grüner Papaya Salat",
              "descriptionDE": "Grüne Papaya, geraspelte Karotten, geröstete Erdnüsse, Röstzwiebeln, Garnelen, Krabbenchips mit hausgemachter Sauce.",
              "descriptionEN": "Green papaya, grated carrots, roasted peanuts, fried onions, shrimp, prawn crackers with homemade sauce.",
              "allergens": [
                "B",
                "D",
                "E"
              ],
              "price": 8.9
            }
          ]
        },
        {
          "id": "kids-menu",
          "titleDE": "Kindermenü",
          "titleEN": "Kids' Menu",
          "items": [
            {
              "id": "25",
              "name": "Pommes Frites",
              "descriptionDE": "Pommes Frites mit Meersalz, serviert mit Ketchup und Mayo.",
              "descriptionEN": "French fries with sea salt, served with ketchup and mayo.",
              "allergens": [
                "C",
                "J"
              ],
              "price": 5.9
            },
            {
              "id": "26",
              "name": "Süßkartoffelpommes",
              "descriptionDE": "Knusprige Süßkartoffelpommes mit Ketchup oder Mayo.",
              "descriptionEN": "Crispy sweet potato fries with ketchup or mayo.",
              "allergens": [
                "C",
                "J"
              ],
              "price": 6.5
            },
            {
              "id": "27",
              "name": "Schweinespieß mit Reis",
              "descriptionDE": "Schweinespieß mit kleinem Salat, kleiner Portion Reis und Erdnusssauce.",
              "descriptionEN": "Pork skewer with a small salad, a small portion of rice and peanut sauce.",
              "allergens": [
                "D",
                "E",
                "F"
              ],
              "price": 10.5
            },
            {
              "id": "28",
              "name": "Hähnchenspieß mit Reis",
              "descriptionDE": "Hähnchenspieß mit kleinem Salat, kleiner Portion Reis und Erdnusssauce.",
              "descriptionEN": "Chicken skewer with a small salad, a small portion of rice and peanut sauce.",
              "allergens": [
                "D",
                "E",
                "F"
              ],
              "price": 9.5
            }
          ]
        }
      ]
    },
    {
      "id": "main-dishes",
      "roman": "III",
      "titleDE": "Hauptgerichte",
      "titleEN": "Main Dishes",
      "noteDE": "Alle Hauptgerichte mit Jasminreis, Salat & gerösteten Erdnüssen · Protein 130g",
      "noteEN": "All main dishes with jasmine rice, salad & roasted peanuts · Protein 130g",
      "groups": [
        {
          "id": "wok-curry",
          "titleDE": "Hauptgerichte",
          "titleEN": "Main Dishes",
          "items": [
            {
              "id": "29",
              "name": "Gemüse Pfanne",
              "descriptionDE": "Gemüse aus dem Wok — Flaschenkürbis, Brokkoli, Blumenkohl, Paprika, grüne Bohnen, Pilze und Karotten — mit vietnamesischer Sauce, Knoblauch und Kräutern, auf einer heißen Gusseisenplatte serviert. Dazu Reis, Salat und geröstete Erdnüsse.",
              "descriptionEN": "Wok-fried vegetables — bottle gourd, broccoli, cauliflower, bell pepper, green beans, mushrooms and carrots — with Vietnamese sauce, garlic and herbs, served on a sizzling hot cast-iron plate. With rice, salad and roasted peanuts.",
              "variants": [
                {
                  "code": "A",
                  "name": "Tofu",
                  "price": 15.9,
                  "allergens": [
                    "D",
                    "E",
                    "F",
                    "N"
                  ]
                },
                {
                  "code": "B",
                  "name": "Gebratenes Hähnchen",
                  "price": 15.9,
                  "allergens": [
                    "D",
                    "E",
                    "F",
                    "N"
                  ]
                },
                {
                  "code": "C",
                  "name": "Rind",
                  "price": 16.9,
                  "allergens": [
                    "D",
                    "E",
                    "F",
                    "N"
                  ]
                },
                {
                  "code": "D",
                  "name": "Garnelen",
                  "price": 16.9,
                  "allergens": [
                    "B",
                    "D",
                    "E",
                    "F",
                    "N"
                  ]
                },
                {
                  "code": "E",
                  "name": "Französische Ente",
                  "price": 17.9,
                  "allergens": [
                    "D",
                    "E",
                    "F",
                    "N"
                  ]
                },
                {
                  "code": "F",
                  "name": "Lachs",
                  "price": 17.9,
                  "allergens": [
                    "D",
                    "E",
                    "F",
                    "N"
                  ]
                }
              ]
            },
            {
              "id": "30",
              "name": "Erdnuss Soße",
              "descriptionDE": "Erdnusssauce mit Kokosmilch und frischem Gemüse (Flaschenkürbis, Brokkoli, Blumenkohl, Paprika, grüne Bohnen, Pilze, Karotten). Serviert mit Reis, Salat und gerösteten Erdnüssen.",
              "descriptionEN": "Peanut sauce with coconut milk and fresh vegetables (bottle gourd, broccoli, cauliflower, bell pepper, green beans, mushrooms, carrots). Served with rice, salad and roasted peanuts.",
              "variants": [
                {
                  "code": "A",
                  "name": "Tofu",
                  "price": 15.9,
                  "allergens": [
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "B",
                  "name": "Gebratenes Hähnchen",
                  "price": 15.9,
                  "allergens": [
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "C",
                  "name": "Rind",
                  "price": 16.9,
                  "allergens": [
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "D",
                  "name": "Garnelen",
                  "price": 16.9,
                  "allergens": [
                    "B",
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "E",
                  "name": "Französische Ente",
                  "price": 17.9,
                  "allergens": [
                    "E",
                    "F"
                  ]
                }
              ]
            },
            {
              "id": "31",
              "name": "Zitronengras & Chili",
              "descriptionDE": "Gemüse aus dem Wok mit Zitronengras, Chili, vietnamesischer Sauce, Knoblauch und Kräutern, auf einer heißen Gusseisenplatte serviert. Dazu Reis oder Reisnudeln, Salat und geröstete Erdnüsse.",
              "descriptionEN": "Wok-fried vegetables with lemongrass, chili, Vietnamese sauce, garlic and herbs, served on a sizzling hot cast-iron plate. With rice or rice noodles, salad and roasted peanuts.",
              "variants": [
                {
                  "code": "A",
                  "name": "Tofu",
                  "price": 15.9,
                  "allergens": [
                    "D",
                    "E",
                    "F",
                    "N"
                  ]
                },
                {
                  "code": "B",
                  "name": "Gebratenes Hähnchen",
                  "price": 15.9,
                  "allergens": [
                    "D",
                    "E",
                    "F",
                    "N"
                  ]
                },
                {
                  "code": "C",
                  "name": "Rind",
                  "price": 16.9,
                  "allergens": [
                    "D",
                    "E",
                    "F",
                    "N"
                  ]
                },
                {
                  "code": "D",
                  "name": "Garnelen",
                  "price": 16.9,
                  "allergens": [
                    "B",
                    "D",
                    "E",
                    "F",
                    "N"
                  ]
                },
                {
                  "code": "E",
                  "name": "Französische Ente",
                  "price": 17.9,
                  "allergens": [
                    "D",
                    "E",
                    "F",
                    "N"
                  ]
                },
                {
                  "code": "F",
                  "name": "Lachs",
                  "price": 17.9,
                  "allergens": [
                    "D",
                    "E",
                    "F",
                    "N"
                  ]
                }
              ]
            },
            {
              "id": "32",
              "name": "Grünes Curry",
              "descriptionDE": "Grünes Curry mit frischem Gemüse (Flaschenkürbis, Brokkoli, Blumenkohl, Paprika, grüne Bohnen, Pilze, Karotten), Avocado, Zitrone, Koriander und Zitronengras. Serviert mit Reis, Salat und gerösteten Erdnüssen.",
              "descriptionEN": "Green curry with fresh vegetables (bottle gourd, broccoli, cauliflower, bell pepper, green beans, mushrooms, carrots), avocado, lemon, coriander and lemongrass. Served with rice, salad and roasted peanuts.",
              "variants": [
                {
                  "code": "A",
                  "name": "Tofu",
                  "price": 15.9,
                  "allergens": [
                    "B",
                    "D",
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "B",
                  "name": "Gebratenes Hähnchen",
                  "price": 15.9,
                  "allergens": [
                    "B",
                    "D",
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "C",
                  "name": "Rind",
                  "price": 16.9,
                  "allergens": [
                    "B",
                    "D",
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "D",
                  "name": "Garnelen",
                  "price": 16.9,
                  "allergens": [
                    "B",
                    "D",
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "E",
                  "name": "Französische Ente",
                  "price": 17.9,
                  "allergens": [
                    "B",
                    "D",
                    "E",
                    "F"
                  ]
                }
              ]
            },
            {
              "id": "33",
              "name": "Süß-Sauer",
              "descriptionDE": "Süß-saure Sauce mit frischem Gemüse — Flaschenkürbis, Brokkoli, Blumenkohl, Paprika, grüne Bohnen, Pilze und Karotten. Serviert mit Reis, Salat und gerösteten Erdnüssen.",
              "descriptionEN": "Sweet-and-sour sauce with fresh vegetables — bottle gourd, broccoli, cauliflower, bell pepper, green beans, mushrooms and carrots. Served with rice, salad and roasted peanuts.",
              "variants": [
                {
                  "code": "A",
                  "name": "Tofu",
                  "price": 15.9,
                  "allergens": [
                    "D",
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "B",
                  "name": "Gebratenes Hähnchen",
                  "price": 15.9,
                  "allergens": [
                    "D",
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "C",
                  "name": "Rind",
                  "price": 16.9,
                  "allergens": [
                    "D",
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "D",
                  "name": "Garnelen",
                  "price": 16.9,
                  "allergens": [
                    "B",
                    "D",
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "E",
                  "name": "Französische Ente",
                  "price": 17.9,
                  "allergens": [
                    "D",
                    "E",
                    "F"
                  ]
                }
              ]
            },
            {
              "id": "34",
              "name": "Rotes Curry",
              "descriptionDE": "Rotes Curry mit Kokosmilch und frischem Gemüse (Flaschenkürbis, Brokkoli, Blumenkohl, Paprika, grüne Bohnen, Pilze, Karotten). Serviert mit Reis, Salat und gerösteten Erdnüssen.",
              "descriptionEN": "Red curry with coconut milk and fresh vegetables (bottle gourd, broccoli, cauliflower, bell pepper, green beans, mushrooms, carrots). Served with rice, salad and roasted peanuts.",
              "variants": [
                {
                  "code": "A",
                  "name": "Tofu",
                  "price": 15.9,
                  "allergens": [
                    "B",
                    "D",
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "B",
                  "name": "Gebratenes Hähnchen",
                  "price": 15.9,
                  "allergens": [
                    "B",
                    "D",
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "C",
                  "name": "Rind",
                  "price": 16.9,
                  "allergens": [
                    "B",
                    "D",
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "D",
                  "name": "Garnelen",
                  "price": 16.9,
                  "allergens": [
                    "B",
                    "D",
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "E",
                  "name": "Französische Ente",
                  "price": 17.9,
                  "allergens": [
                    "B",
                    "D",
                    "E",
                    "F"
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "rice-special-noodles",
          "titleDE": "Gebratener Reis · Spezial · Nudeln",
          "titleEN": "Fried Rice · Specials · Noodles",
          "items": [
            {
              "id": "35",
              "name": "Gebratener Reis",
              "descriptionDE": "Gebratener Reis mit Ei, Bohnen, Mais, Karotten und hausgemachter Spezialsauce. Mit Salat und gerösteten Erdnüssen.",
              "descriptionEN": "Fried rice with egg, beans, corn, carrots and homemade special sauce. With salad and roasted peanuts.",
              "variants": [
                {
                  "code": "A",
                  "name": "Tofu",
                  "price": 15.9,
                  "allergens": [
                    "A",
                    "C",
                    "D",
                    "E",
                    "F",
                    "N"
                  ]
                },
                {
                  "code": "B",
                  "name": "Gebratenes Hähnchen",
                  "price": 15.9,
                  "allergens": [
                    "A",
                    "C",
                    "D",
                    "E",
                    "F",
                    "N"
                  ]
                },
                {
                  "code": "C",
                  "name": "Rind",
                  "price": 16.9,
                  "allergens": [
                    "A",
                    "C",
                    "D",
                    "E",
                    "F",
                    "N"
                  ]
                },
                {
                  "code": "D",
                  "name": "Garnelen",
                  "price": 16.9,
                  "allergens": [
                    "A",
                    "B",
                    "C",
                    "D",
                    "E",
                    "F",
                    "N"
                  ]
                },
                {
                  "code": "E",
                  "name": "Gegrilltes Hähnchen",
                  "price": 16.9,
                  "allergens": [
                    "A",
                    "C",
                    "D",
                    "E",
                    "F",
                    "N"
                  ]
                },
                {
                  "code": "F",
                  "name": "Französische Ente",
                  "price": 17.9,
                  "allergens": [
                    "A",
                    "C",
                    "D",
                    "E",
                    "F",
                    "N"
                  ]
                },
                {
                  "code": "G",
                  "name": "Lachs",
                  "price": 17.9,
                  "allergens": [
                    "A",
                    "C",
                    "D",
                    "E",
                    "F",
                    "N"
                  ]
                }
              ]
            },
            {
              "id": "36",
              "name": "Bò Lúc Lắc — Shaking Beef mit Pommes",
              "descriptionDE": "Würfelig geschnittenes Rindfleisch kurz angebraten, mit Paprika und Zwiebeln im Wok geschüttelt, auf einer heißen Gusseisenplatte serviert. Dazu Pommes Frites, Salat und geröstete Erdnüsse.",
              "descriptionEN": "Diced beef quickly seared, tossed in the wok with bell peppers and onions, served on a sizzling hot cast-iron plate. With French fries, salad and roasted peanuts.",
              "allergens": [
                "A",
                "D",
                "E",
                "F",
                "N"
              ],
              "price": 17.9
            },
            {
              "id": "37",
              "name": "Jury Chicken Tempura",
              "descriptionDE": "Knusprige Hähnchen-Tempura mit Salat, gerösteten Erdnüssen, Gurke, Kimchi und hausgemachter süß-saurer Sauce. Mit Reis serviert.",
              "descriptionEN": "Crispy chicken tempura with salad, roasted peanuts, cucumber, kimchi and homemade sweet-and-sour sauce. Served with rice.",
              "allergens": [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F"
              ],
              "price": 15.9
            },
            {
              "id": "38",
              "name": "Saigon BBQ Kimchi Bowl",
              "descriptionDE": "Saigon-style gegrilltes Schweinefleisch, Salat mit gerösteten Erdnüssen, Kimchi, Erdnuss- oder süß-saure Sauce. Mit Reis.",
              "descriptionEN": "Saigon-style grilled pork, salad with roasted peanuts, kimchi, peanut or sweet-and-sour sauce. With rice.",
              "allergens": [
                "A",
                "B",
                "D",
                "E",
                "F"
              ],
              "price": 16.9
            },
            {
              "id": "39",
              "name": "Sommer Bowl",
              "descriptionDE": "Reis – Avocado – Mais – Gurke – grüne Bohnen – Salat – spezielle Mayo-Sauce.",
              "descriptionEN": "Rice – avocado – corn – cucumber – green beans – salad – special mayo sauce.",
              "variants": [
                {
                  "code": "A",
                  "name": "Gebratenes Hähnchen",
                  "price": 15.9,
                  "allergens": [
                    "C",
                    "E",
                    "F",
                    "J"
                  ]
                },
                {
                  "code": "B",
                  "name": "Rind",
                  "price": 15.9,
                  "allergens": [
                    "C",
                    "E",
                    "F",
                    "J"
                  ]
                },
                {
                  "code": "C",
                  "name": "Gegrilltes Hähnchen",
                  "price": 16.9,
                  "allergens": [
                    "C",
                    "E",
                    "F",
                    "J"
                  ]
                },
                {
                  "code": "D",
                  "name": "Garnelen",
                  "price": 16.9,
                  "allergens": [
                    "B",
                    "C",
                    "E",
                    "F",
                    "J"
                  ]
                },
                {
                  "code": "E",
                  "name": "Französische Ente",
                  "price": 17.9,
                  "allergens": [
                    "C",
                    "E",
                    "F",
                    "J"
                  ]
                },
                {
                  "code": "F",
                  "name": "Lachs",
                  "price": 17.9,
                  "allergens": [
                    "C",
                    "D",
                    "E",
                    "F",
                    "J"
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "fried-noodles",
          "titleDE": "Gebratene Nudeln",
          "titleEN": "Fried Noodles",
          "items": [
            {
              "id": "40",
              "name": "Gebratene Udon Nudeln",
              "descriptionDE": "Gebratene Udon-Nudeln mit Ei, Chinakohl, Sojasprossen, Karotten, Zucchini, Röstzwiebeln. Mit Salat und gerösteten Erdnüssen.",
              "descriptionEN": "Fried udon noodles with egg, Chinese cabbage, bean sprouts, carrots, zucchini, fried onions. With salad and roasted peanuts.",
              "variants": [
                {
                  "code": "A",
                  "name": "Tofu",
                  "price": 12.5,
                  "allergens": [
                    "A",
                    "C",
                    "E",
                    "F",
                    "N"
                  ]
                },
                {
                  "code": "B",
                  "name": "Hähnchen",
                  "price": 14.5,
                  "allergens": [
                    "A",
                    "C",
                    "E",
                    "F",
                    "N"
                  ]
                },
                {
                  "code": "C",
                  "name": "Rind",
                  "price": 15.5,
                  "allergens": [
                    "A",
                    "C",
                    "E",
                    "F",
                    "N"
                  ]
                },
                {
                  "code": "D",
                  "name": "Garnelen",
                  "price": 16.5,
                  "allergens": [
                    "A",
                    "B",
                    "C",
                    "E",
                    "F",
                    "N"
                  ]
                },
                {
                  "code": "E",
                  "name": "Französische Ente",
                  "price": 16.9,
                  "allergens": [
                    "A",
                    "C",
                    "E",
                    "F",
                    "N"
                  ]
                }
              ]
            },
            {
              "id": "41",
              "name": "Glasnudelsalat",
              "descriptionDE": "Glasnudelsalat mit frischem Salat, Erdnüssen und Limetten-Dressing.",
              "descriptionEN": "Glass noodle salad with fresh salad, peanuts and lime dressing.",
              "variants": [
                {
                  "code": "A",
                  "name": "Tofu",
                  "price": 12.5,
                  "allergens": [
                    "D",
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "B",
                  "name": "Hähnchen",
                  "price": 14.5,
                  "allergens": [
                    "D",
                    "E"
                  ]
                },
                {
                  "code": "C",
                  "name": "Rind",
                  "price": 15.5,
                  "allergens": [
                    "D",
                    "E"
                  ]
                },
                {
                  "code": "D",
                  "name": "Garnelen",
                  "price": 16.5,
                  "allergens": [
                    "B",
                    "D",
                    "E"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "vegan-menu",
      "roman": "IV",
      "titleDE": "Vegan Menü",
      "titleEN": "Vegan Menu",
      "noteDE": "100% pflanzlich · Vegane Ente & Hähnchen von Orca · Alle Saucen vegan · Mit Salat & gerösteten Erdnüssen",
      "noteEN": "100% plant-based · Vegan duck & chicken by Orca · All sauces vegan · With salad & roasted peanuts",
      "groups": [
        {
          "id": "vegan-dishes",
          "titleDE": "Vegan Menü",
          "titleEN": "Vegan Menu",
          "items": [
            {
              "id": "42",
              "name": "Ente mit Wok-Gemüse vegan",
              "descriptionDE": "Gemüse aus dem Wok — Flaschenkürbis, Brokkoli, Blumenkohl, Paprika, grüne Bohnen, Pilze und Karotten — mit Knoblauch und vietnamesischer Sauce, auf einer heißen Gusseisenplatte serviert. Dazu gebratene vegane Ente, Reis, Salat und geröstete Erdnüsse.",
              "descriptionEN": "Wok-fried vegetables — bottle gourd, broccoli, cauliflower, bell pepper, green beans, mushrooms and carrots — with garlic and Vietnamese sauce, served on a sizzling hot cast-iron plate. With fried vegan duck, rice, salad and roasted peanuts.",
              "allergens": [
                "A",
                "E",
                "F"
              ],
              "price": 15.9,
              "tags": [
                "vegan"
              ]
            },
            {
              "id": "43",
              "name": "Hähnchen mit Wok-Gemüse vegan",
              "descriptionDE": "Gemüse aus dem Wok — Flaschenkürbis, Brokkoli, Blumenkohl, Paprika, grüne Bohnen, Pilze und Karotten — mit Knoblauch und vietnamesischer Sauce, auf einer heißen Gusseisenplatte serviert. Dazu veganes Hähnchen, Reis, Salat und geröstete Erdnüsse.",
              "descriptionEN": "Wok-fried vegetables — bottle gourd, broccoli, cauliflower, bell pepper, green beans, mushrooms and carrots — with garlic and Vietnamese sauce, served on a sizzling hot cast-iron plate. With vegan chicken, rice, salad and roasted peanuts.",
              "allergens": [
                "A",
                "E",
                "F"
              ],
              "price": 15.9,
              "tags": [
                "vegan"
              ]
            },
            {
              "id": "44",
              "name": "Bún Đậu – Tofu mit Reisnudeln",
              "descriptionDE": "Frische Reisnudeln, frische Kräuter, Tofu mit Zitronengras gebraten, eingelegte Karotten, hausgemachte Sauce.",
              "descriptionEN": "Fresh rice noodles, fresh herbs, lemongrass-fried tofu, pickled carrots, homemade sauce.",
              "allergens": [
                "E",
                "F"
              ],
              "price": 15.9,
              "tags": [
                "vegan"
              ]
            },
            {
              "id": "45",
              "name": "Curry-Ente vegan",
              "descriptionDE": "Gebratene vegane Ente, frisches Gemüse (Flaschenkürbis, Brokkoli, Blumenkohl, Paprika, grüne Bohnen, Pilze, Karotten), Reis. Serviert mit Salat und gerösteten Erdnüssen. Wahl zwischen grünem oder rotem Curry.",
              "descriptionEN": "Fried vegan duck, fresh vegetables (bottle gourd, broccoli, cauliflower, bell pepper, green beans, mushrooms, carrots), rice. Served with salad and roasted peanuts. Choice of green or red curry.",
              "allergens": [
                "A",
                "E",
                "F"
              ],
              "price": 15.9,
              "tags": [
                "vegan"
              ]
            },
            {
              "id": "46",
              "name": "Erdnuss-Ente vegan",
              "descriptionDE": "Gebratene vegane Ente, frisches Gemüse (Flaschenkürbis, Brokkoli, Blumenkohl, Paprika, grüne Bohnen, Pilze, Karotten), Erdnusssauce. Serviert mit Reis, Salat und gerösteten Erdnüssen.",
              "descriptionEN": "Fried vegan duck, fresh vegetables (bottle gourd, broccoli, cauliflower, bell pepper, green beans, mushrooms, carrots), peanut sauce. Served with rice, salad and roasted peanuts.",
              "allergens": [
                "A",
                "E",
                "F"
              ],
              "price": 16.9,
              "tags": [
                "vegan"
              ]
            },
            {
              "id": "47",
              "name": "Baby Buddha — Shaolin Seitan Spieße",
              "descriptionDE": "Gegrillte Shaolin-Seitan-Spieße, serviert mit Gemüse (Flaschenkürbis, Brokkoli, Blumenkohl, Paprika, grüne Bohnen, Pilze, Karotten) in Erdnusssauce, Salat, gerösteten Erdnüssen und Reis.",
              "descriptionEN": "Grilled Shaolin seitan skewers, served with vegetables (bottle gourd, broccoli, cauliflower, bell pepper, green beans, mushrooms, carrots) in peanut sauce, salad, roasted peanuts and rice.",
              "allergens": [
                "A",
                "E",
                "F"
              ],
              "price": 16.9,
              "tags": [
                "vegan"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "pho",
      "roman": "V",
      "titleDE": "Phở",
      "titleEN": "Rice Noodle Soup",
      "noteDE": "Stundenlang gekochte Brühe mit Zimt, Sternanis und Gewürzen",
      "noteEN": "Broth simmered for hours with cinnamon, star anise and spices",
      "introTitleDE": "Miền Bắc · Northern Vietnam",
      "introTitleEN": "Northern Vietnam",
      "introDE": "Phở gilt als die Seele der vietnamesischen Küche und ist das Herzstück unseres Hauses – nicht ohne Grund trägt unser Restaurant den Namen einer Phở-Küche. Die klare, aromatische Brühe wird über viele Stunden aus Rinderknochen, geröstetem Ingwer und Zwiebeln sowie Zimt, Sternanis und Kardamom gekocht. Serviert mit zarten Reisbandnudeln, feinem Rindfleisch und frischen Kräutern.",
      "introEN": "Phở is considered the soul of Vietnamese cuisine and the heart of our restaurant — it is no coincidence that our restaurant bears the name of a Phở kitchen. The clear, aromatic broth is simmered for many hours from beef bones, roasted ginger and onions together with cinnamon, star anise and cardamom. Served with tender rice noodles, fine slices of beef and fresh herbs.",
      "extras": {
        "fullToppingDE": "Rohes Rind, Rindfleisch & Rinderbällchen",
        "fullToppingEN": "Rare beef, beef & beef balls",
        "addOns": [
          {
            "nameDE": "Rohes Rind",
            "nameEN": "Rare beef",
            "price": 2.5
          },
          {
            "nameDE": "Rinderbällchen",
            "nameEN": "Beef balls",
            "price": 2.5
          },
          {
            "nameDE": "Rindfleisch",
            "nameEN": "Beef",
            "price": 3.0
          },
          {
            "nameDE": "Nudeln",
            "nameEN": "Noodles",
            "price": 2.0
          },
          {
            "nameDE": "Gemüse",
            "nameEN": "Vegetables",
            "price": 1.5
          }
        ]
      },
      "groups": [
        {
          "id": "pho-dishes",
          "titleDE": "Phở",
          "titleEN": "Rice Noodle Soup",
          "items": [
            {
              "id": "48",
              "name": "Phở Việt Nam — Traditionelle Phở",
              "descriptionDE": "Traditionelle vietnamesische Reisbandnudelsuppe in einer kräftig klaren Rinderbrühe mit Zimt, Chili, Sternanis, Ingwer, Sojasprossen, Frühlingszwiebeln und Koriander.",
              "descriptionEN": "Traditional Vietnamese rice noodle soup in a rich, clear beef broth with cinnamon, chili, star anise, ginger, bean sprouts, spring onions and coriander.",
              "variants": [
                {
                  "code": "A",
                  "name": "Tofu",
                  "price": 12.5,
                  "allergens": [
                    "D",
                    "F"
                  ]
                },
                {
                  "code": "B",
                  "name": "Hähnchenfilet",
                  "price": 14.5,
                  "allergens": [
                    "D"
                  ]
                },
                {
                  "code": "C",
                  "name": "Rohes Rind & Rinderbällchen",
                  "price": 16.9,
                  "allergens": [
                    "A",
                    "D"
                  ]
                },
                {
                  "code": "D",
                  "name": "Rind & Rinderbällchen",
                  "price": 16.9,
                  "allergens": [
                    "A",
                    "D"
                  ]
                },
                {
                  "code": "E",
                  "name": "Full Topping (alle Beilagen)",
                  "price": 18.5,
                  "allergens": [
                    "A",
                    "D"
                  ]
                }
              ]
            },
            {
              "id": "49",
              "name": "Phở Bát Đá — Phở in heißer Steinschale",
              "descriptionDE": "Traditionelle vietnamesische Reisbandnudelsuppe in einer heißen Steinschale serviert, die die Suppe lange heiß hält.",
              "descriptionEN": "Traditional Vietnamese rice noodle soup served in a hot stone bowl that keeps it hot for a long time.",
              "variants": [
                {
                  "code": "A",
                  "name": "Full Topping (alle Beilagen)",
                  "price": 18.9,
                  "allergens": [
                    "A",
                    "D"
                  ]
                }
              ]
            },
            {
              "id": "50",
              "name": "Phở Trộn — Reisbandnudelsalat",
              "descriptionDE": "Frisch gemischt mit Gemüse, Sojasprossen, Erdnüssen, Röstzwiebeln und hausgemachter Sauce. KEINE Suppe.",
              "descriptionEN": "Freshly mixed with vegetables, bean sprouts, peanuts, fried onions and homemade sauce. NO broth.",
              "variants": [
                {
                  "code": "A",
                  "name": "Tofu",
                  "price": 12.5,
                  "allergens": [
                    "D",
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "B",
                  "name": "Knuspriges Hähnchen",
                  "price": 14.9,
                  "allergens": [
                    "A",
                    "C",
                    "D",
                    "E"
                  ]
                },
                {
                  "code": "C",
                  "name": "Rind",
                  "price": 15.5,
                  "allergens": [
                    "D",
                    "E"
                  ]
                },
                {
                  "code": "D",
                  "name": "Vietnamesische Fleischwurst",
                  "price": 14.9,
                  "allergens": [
                    "D",
                    "E",
                    "F"
                  ]
                },
                {
                  "code": "E",
                  "name": "Knusprige Ente",
                  "price": 16.9,
                  "allergens": [
                    "A",
                    "C",
                    "D",
                    "E"
                  ]
                },
                {
                  "code": "F",
                  "name": "Garnelen",
                  "price": 16.5,
                  "allergens": [
                    "B",
                    "D",
                    "E"
                  ]
                }
              ]
            },
            {
              "id": "51",
              "name": "Phở Bò Sốt Vang — Rotwein-Rindergulasch Phở",
              "descriptionDE": "Vietnamesische Reisbandnudeln mit aromatischem Rotwein-Rindergulasch in kräftiger Rinderbrühe, gekocht mit Zimt, Chili, Sternanis, Ingwer, Sojasprossen, Frühlingszwiebeln und Koriander.",
              "descriptionEN": "Vietnamese rice noodles with aromatic red wine beef stew in a rich beef broth, cooked with cinnamon, chili, star anise, ginger, bean sprouts, spring onions and coriander.",
              "allergens": [
                "A",
                "D",
                "L"
              ],
              "price": 16.9
            }
          ]
        }
      ]
    },
    {
      "id": "bun",
      "roman": "VI",
      "titleDE": "Bún",
      "titleEN": "Noodle Bowls",
      "introTitleDE": "Miền Trung · Central Vietnam",
      "introTitleEN": "Central Vietnam",
      "introDE": "Bún Bò Huế stammt aus Huế, der einstigen Kaiserstadt Vietnams, und zählt zu den raffiniertesten Gerichten der vietnamesischen Küche. Die kräftige Brühe wird über Stunden mit Zitronengras, Rinderknochen und Gewürzen gekocht und erhält ihre unverwechselbare Tiefe durch eine feine Würzung und hausgemachtes Sa Tế. Serviert mit runden Reisnudeln, zartem Rindfleisch und vietnamesischer Fleischwurst – aromatischer und feuriger als die klassische Phở.",
      "introEN": "Bún Bò Huế originates from Huế, the former imperial city of Vietnam, and is one of the most refined dishes of Vietnamese cuisine. The hearty broth is simmered for hours with lemongrass, beef bones and spices, gaining its distinctive depth from delicate seasoning and homemade Sa Tế. Served with round rice noodles, tender beef and Vietnamese pork sausage — more aromatic and fiery than the classic Phở.",
      "groups": [
        {
          "id": "bun-dishes",
          "titleDE": "Bún",
          "titleEN": "Noodle Bowls",
          "items": [
            {
              "id": "52",
              "name": "Bún Bò Huế",
              "descriptionDE": "Traditionelle Bún Bò Huế mit kräftiger Brühe, Zitronengras, Rindfleisch, vietnamesischer Fleischwurst und frischen Kräutern. Sa Tế auf Wunsch separat.",
              "descriptionEN": "Traditional Bún Bò Huế with rich broth, lemongrass, beef, Vietnamese pork sausage and fresh herbs. Sa Tế served separately on request.",
              "allergens": [
                "A",
                "B",
                "D"
              ],
              "price": 15.9
            },
            {
              "id": "53",
              "name": "Bún Chả Hà Nội",
              "descriptionDE": "Traditionelles Bún Chả Hà Nội mit aromatisch gegrilltem Schweinefleisch, hausgemachten Fleischbällchen, Reisnudeln und frischen Kräutern.",
              "descriptionEN": "Traditional Bún Chả Hà Nội with aromatic grilled pork, homemade meatballs, rice noodles and fresh herbs.",
              "allergens": [
                "A",
                "D",
                "E"
              ],
              "price": 14.9
            },
            {
              "id": "54",
              "name": "Bún Nem — Reisnudeln mit Frühlingsrollen",
              "descriptionDE": "Reisnudeln mit knusprigen, goldbraun gebratenen Frühlingsrollen, frischen Kräutern sowie eingelegtem Kohlrabi und Karotten, serviert mit hausgemachter vietnamesischer Sauce.",
              "descriptionEN": "Rice noodles with crispy golden-fried spring rolls, fresh herbs, pickled kohlrabi and carrots, served with homemade Vietnamese sauce.",
              "allergens": [
                "A",
                "D",
                "E"
              ],
              "price": 13.9
            },
            {
              "id": "55",
              "name": "Bún Trộn Chả Lụa",
              "descriptionDE": "Reisnudeln mit vietnamesischer Fleischwurst, frischen Kräutern, Karotten, Gurken und Salat, serviert mit hausgemachter vietnamesischer Sauce.",
              "descriptionEN": "Rice noodles with Vietnamese pork sausage, fresh herbs, carrots, cucumber and lettuce, served with homemade Vietnamese sauce.",
              "allergens": [
                "D",
                "E",
                "F"
              ],
              "price": 13.5
            }
          ]
        }
      ]
    },
    {
      "id": "banh-mi",
      "roman": "VII",
      "titleDE": "Bánh Mì Sài Gòn",
      "titleEN": "Bánh Mì Sài Gòn",
      "noteDE": "Frisch jeden Tag gebacken · Authentisch Vietnamesisch",
      "noteEN": "Freshly baked every day · Authentically Vietnamese",
      "introTitleDE": "Miền Nam · Southern Vietnam",
      "introTitleEN": "Southern Vietnam",
      "introDE": "Bánh Mì ist Vietnams berühmtes Sandwich – ein Erbe der französischen Kolonialzeit, auf vietnamesische Art neu erfunden. Das luftige Baguette mit knuspriger Kruste wird mit gegrilltem Fleisch, vietnamesischer Fleischwurst, Haus-Pastete, eingelegtem Kohlrabi und Karotten sowie frischen Kräutern gefüllt.",
      "introEN": "Bánh Mì is Vietnam's famous sandwich — a legacy of the French colonial era, reinvented the Vietnamese way. The airy baguette with a crispy crust is filled with grilled meat, Vietnamese pork sausage, house pâté, pickled kohlrabi and carrots, and fresh herbs.",
      "groups": [
        {
          "id": "banh-mi-dishes",
          "titleDE": "Bánh Mì Sài Gòn",
          "titleEN": "Bánh Mì Sài Gòn",
          "items": [
            {
              "id": "56",
              "name": "Bánh Mì Sài Gòn",
              "descriptionDE": "Traditionelles Bánh Mì aus Saigon mit gegrilltem Fleisch, vietnamesischer Fleischwurst, Haus-Pastete, cremiger Eiersauce, frischen vietnamesischen Kräutern, eingelegtem Kohlrabi und Karotten.",
              "descriptionEN": "Traditional Bánh Mì from Saigon with grilled meat, Vietnamese pork sausage, house pâté, creamy egg sauce, fresh Vietnamese herbs, pickled kohlrabi and carrots.",
              "allergens": [
                "A",
                "C",
                "D",
                "G",
                "J"
              ],
              "price": 9.9
            },
            {
              "id": "57",
              "name": "Bánh Mì Sốt Vang",
              "descriptionDE": "Bánh Mì mit geschmortem Rindfleisch in aromatischer Soße, verfeinert mit Zimt, Sternanis und Kardamom, serviert mit frischem Salat, vietnamesischen Kräutern, eingelegtem Kohlrabi und Karotten.",
              "descriptionEN": "Bánh Mì with braised beef in an aromatic sauce, refined with cinnamon, star anise and cardamom, served with fresh salad, Vietnamese herbs, pickled kohlrabi and carrots.",
              "allergens": [
                "A",
                "D",
                "G",
                "L"
              ],
              "price": 12.0
            },
            {
              "id": "58",
              "name": "Bánh Mì Chảo",
              "descriptionDE": "Serviert in einer heißen Gusseisenpfanne mit Spiegelei, gebratenem Rindfleisch, Haus-Pastete, würziger Tomatensoße und frischen vietnamesischen Kräutern.",
              "descriptionEN": "Served in a hot cast-iron pan with fried egg, seared beef, house pâté, spicy tomato sauce and fresh Vietnamese herbs.",
              "allergens": [
                "A",
                "C",
                "D",
                "G"
              ],
              "price": 14.0
            }
          ]
        }
      ]
    },
    {
      "id": "extra-sides",
      "roman": "VIII",
      "titleDE": "Extra Beilagen",
      "titleEN": "Extra Sides",
      "groups": [
        {
          "id": "extra-sides",
          "titleDE": "Extra Beilagen",
          "titleEN": "Extra Sides",
          "items": [
            {
              "id": "59",
              "name": "Jasminreis",
              "descriptionDE": "Portion",
              "descriptionEN": "Portion",
              "allergens": [],
              "price": 3.5
            },
            {
              "id": "60",
              "name": "Reisnudeln",
              "descriptionDE": "frisch, Portion",
              "descriptionEN": "fresh, portion",
              "allergens": [],
              "price": 3.5
            },
            {
              "id": "61",
              "name": "Kleiner gebratener Reis",
              "descriptionDE": "Ei + Gemüse",
              "descriptionEN": "egg + vegetables",
              "allergens": [
                "A",
                "C",
                "F",
                "N"
              ],
              "price": 8.5
            },
            {
              "id": "62",
              "name": "Kleine gebr. Reisbandnudeln",
              "descriptionDE": "klein",
              "descriptionEN": "small",
              "allergens": [
                "A",
                "C",
                "F",
                "N"
              ],
              "price": 8.5
            },
            {
              "id": "63",
              "name": "Kleines gebr. Udon",
              "descriptionDE": "klein",
              "descriptionEN": "small",
              "allergens": [
                "A",
                "C",
                "F",
                "N"
              ],
              "price": 9.0
            },
            {
              "id": "64",
              "name": "Gebratene Ente",
              "descriptionDE": "Topping 80g",
              "descriptionEN": "Topping 80g",
              "allergens": [
                "A",
                "F",
                "N"
              ],
              "price": 7.9
            },
            {
              "id": "65",
              "name": "Gebratenes Hähnchen",
              "descriptionDE": "Topping 100g",
              "descriptionEN": "Topping 100g",
              "allergens": [
                "A",
                "F"
              ],
              "price": 5.9
            },
            {
              "id": "66",
              "name": "Gegrilltes Hähnchen",
              "descriptionDE": "Topping 100g",
              "descriptionEN": "Topping 100g",
              "allergens": [
                "D",
                "F"
              ],
              "price": 6.9
            },
            {
              "id": "67",
              "name": "Grillspieß (1 Stk.)",
              "descriptionDE": "1 Schweinespieß",
              "descriptionEN": "1 pork skewer",
              "allergens": [
                "D",
                "F"
              ],
              "price": 2.5
            },
            {
              "id": "68",
              "name": "Kimchi",
              "descriptionDE": "Portion 60g",
              "descriptionEN": "Portion 60g",
              "allergens": [
                "B",
                "D"
              ],
              "price": 3.5
            },
            {
              "id": "69",
              "name": "Eingelegte Karotten & Kohlrabi",
              "descriptionDE": "hausgemacht",
              "descriptionEN": "homemade",
              "allergens": [],
              "price": 3.5
            }
          ]
        },
        {
          "id": "extra-sauces",
          "titleDE": "Saucen Extra",
          "titleEN": "Extra Sauces",
          "items": [
            {
              "id": "70",
              "name": "Grünes Curry",
              "allergens": [
                "B",
                "D",
                "F"
              ],
              "price": 4.0
            },
            {
              "id": "71",
              "name": "Rotes Curry",
              "allergens": [
                "B",
                "D",
                "F"
              ],
              "price": 4.0
            },
            {
              "id": "72",
              "name": "Erdnuss-Sauce",
              "allergens": [
                "E",
                "F",
                "K"
              ],
              "price": 4.0
            },
            {
              "id": "73",
              "name": "Süß-Saure Sauce",
              "allergens": [
                "A",
                "F"
              ],
              "price": 4.0
            }
          ]
        }
      ]
    }
  ],
  "sushi": {
    "roman": "IX",
    "titleDE": "Sushi · Sashimi · Maki",
    "titleEN": "Sushi · Sashimi · Maki",
    "noteDE": "Täglich frisch · Lachs von Orca · California Calrose Sushi-Reis · Wasabi & Ingwer inklusive",
    "noteEN": "Daily fresh · Salmon by Orca · California Calrose sushi rice · Wasabi & ginger included",
    "serviceDE": "Alle Sushi werden mit Sojasauce (A, F), Wasabi (J) und eingelegtem Ingwer (L) serviert.",
    "serviceEN": "All sushi are served with soy sauce (A, F), wasabi (J) and pickled ginger (L).",
    "groups": [
      {
        "id": "maki",
        "title": "Maki",
        "pieces": 8,
        "items": [
          {
            "code": "M1",
            "name": "California Maki",
            "content": "Surimi, Avocado",
            "allergens": [
              "A",
              "C",
              "D"
            ],
            "price": 4.5,
            "pieces": 8
          },
          {
            "code": "M2",
            "name": "Kappa Maki",
            "content": "Gurke / Cucumber",
            "allergens": [],
            "price": 4.5,
            "pieces": 8
          },
          {
            "code": "M3",
            "name": "Avocado Maki",
            "content": "Avocado",
            "allergens": [],
            "price": 4.5,
            "pieces": 8
          },
          {
            "code": "M4",
            "name": "Mango Maki",
            "content": "Mango",
            "allergens": [],
            "price": 4.5,
            "pieces": 8
          },
          {
            "code": "M5",
            "name": "Sake Maki",
            "content": "Lachs / Salmon",
            "allergens": [
              "D"
            ],
            "price": 5.2,
            "pieces": 8
          },
          {
            "code": "M6",
            "name": "Tekka Maki",
            "content": "Thunfisch / Tuna",
            "allergens": [
              "D"
            ],
            "price": 5.5,
            "pieces": 8
          },
          {
            "code": "M7",
            "name": "Ebi Maki",
            "content": "Garnelen / Shrimp",
            "allergens": [
              "B"
            ],
            "price": 5.5,
            "pieces": 8
          },
          {
            "code": "M8",
            "name": "Ebi Avocado Maki",
            "content": "Garnelen, Avocado / Shrimp, avocado",
            "allergens": [
              "B"
            ],
            "price": 5.5,
            "pieces": 8
          },
          {
            "code": "M9",
            "name": "Salmon Avocado Maki",
            "content": "Lachs, Avocado / Salmon, avocado",
            "allergens": [
              "D"
            ],
            "price": 5.5,
            "pieces": 8
          },
          {
            "code": "M10",
            "name": "Salmon Skin Maki",
            "content": "Räucherlachs, Gurke / Smoked salmon, cucumber",
            "allergens": [
              "A",
              "D",
              "F"
            ],
            "price": 5.9,
            "pieces": 8
          },
          {
            "code": "M11",
            "name": "Unagi Maki",
            "content": "Aal, Unagi-Sauce / Eel, unagi sauce",
            "allergens": [
              "A",
              "D",
              "F"
            ],
            "price": 6.5,
            "pieces": 8
          },
          {
            "code": "M12",
            "name": "Ebi Tempura Maki",
            "content": "Garnelen Tempura / Shrimp tempura",
            "allergens": [
              "A",
              "B",
              "C"
            ],
            "price": 6.5,
            "pieces": 8
          }
        ]
      },
      {
        "id": "inside-out-special-rolls",
        "title": "Inside-Out & Special Rolls",
        "pieces": 8,
        "items": [
          {
            "code": "R1",
            "name": "Veggie Inside-Out",
            "content": "Avocado, Gurke, Mango, Sesam",
            "allergens": [
              "K"
            ],
            "price": 9.9,
            "pieces": 8
          },
          {
            "code": "R2",
            "name": "Kanihama Boko",
            "content": "Surimi, Avocado, Gurke, Tobiko",
            "allergens": [
              "A",
              "C",
              "D"
            ],
            "price": 10.5,
            "pieces": 8
          },
          {
            "code": "R3",
            "name": "Sake",
            "content": "Lachs, Avocado, Tobiko, Frischkäse",
            "allergens": [
              "D",
              "G"
            ],
            "price": 11.5,
            "pieces": 8
          },
          {
            "code": "R4",
            "name": "Ebi Tempura",
            "content": "Garnelen gebacken, Avocado, Sesam",
            "allergens": [
              "A",
              "B",
              "C",
              "K"
            ],
            "price": 11.9,
            "pieces": 8
          },
          {
            "code": "R5",
            "name": "Maguro",
            "content": "Thunfisch, Avocado, Tobiko",
            "allergens": [
              "D"
            ],
            "price": 11.9,
            "pieces": 8
          },
          {
            "code": "R6",
            "name": "Ebi",
            "content": "Gekochte Garnelen, Avocado, Tobiko",
            "allergens": [
              "B",
              "D"
            ],
            "price": 11.5,
            "pieces": 8
          },
          {
            "code": "R7",
            "name": "Unagi Rolls",
            "content": "Aal, Avocado, Gurke, Unagi-Sauce, Sesam",
            "allergens": [
              "A",
              "D",
              "F",
              "K"
            ],
            "price": 12.5,
            "pieces": 8
          },
          {
            "code": "R8",
            "name": "Chicken Rolls",
            "content": "Gebackenes Hähnchen, Avocado, Gurke, Frischkäse, Unagi-Sauce, Sesam",
            "allergens": [
              "A",
              "C",
              "F",
              "G",
              "K"
            ],
            "price": 11.9,
            "pieces": 8
          },
          {
            "code": "R9",
            "name": "Crispy Tiger",
            "content": "Frittierte panierte Garnelen, Avocado, Frischkäse, mit Lachs oder Thunfisch umwickelt",
            "allergens": [
              "A",
              "B",
              "C",
              "D",
              "G"
            ],
            "price": 14.9,
            "pieces": 8
          },
          {
            "code": "R10",
            "name": "California Inside-Out",
            "content": "Surimi, Avocado, Gurke, Sesam",
            "allergens": [
              "A",
              "C",
              "D",
              "K"
            ],
            "price": 9.9,
            "pieces": 8
          },
          {
            "code": "R11",
            "name": "Orchidee Roll",
            "content": "Avocado, Gurke, Mango, Frischkäse, mit Avocado umwickelt",
            "allergens": [
              "G"
            ],
            "price": 13.5,
            "pieces": 8
          },
          {
            "code": "R12",
            "name": "Tiger Roll",
            "content": "Ebi Tempura, Mango, Avocado, Frischkäse, mit Lachs umwickelt",
            "allergens": [
              "A",
              "B",
              "C",
              "D",
              "G"
            ],
            "price": 14.9,
            "pieces": 8
          },
          {
            "code": "R13",
            "name": "Dragon Roll",
            "content": "Ebi Tempura, Avocado, Frischkäse, mit Thunfisch umwickelt",
            "allergens": [
              "A",
              "B",
              "C",
              "D",
              "G"
            ],
            "price": 14.9,
            "pieces": 8
          },
          {
            "code": "R14",
            "name": "Green Roll",
            "content": "Lachs, Gurke, Avocado, Frischkäse, mit Avocado umwickelt",
            "allergens": [
              "D",
              "G"
            ],
            "price": 13.5,
            "pieces": 8
          },
          {
            "code": "R15",
            "name": "Baby Roll",
            "content": "Lachs, Avocado, Frischkäse, mit flambiertem Lachs umwickelt",
            "allergens": [
              "D",
              "G"
            ],
            "price": 14.5,
            "pieces": 8
          },
          {
            "code": "R16",
            "name": "Black Rolls",
            "content": "Gekochte Garnele, Mango, Avocado, Frischkäse, mit Aal umwickelt",
            "allergens": [
              "A",
              "B",
              "D",
              "F",
              "G"
            ],
            "price": 14.9,
            "pieces": 8
          },
          {
            "code": "R17",
            "name": "JURY Roll",
            "content": "Lachs, Thunfisch, Garnele, Surimi, Frischkäse, mit Garnelen & Tobiko umwickelt",
            "allergens": [
              "A",
              "B",
              "C",
              "D",
              "G"
            ],
            "price": 15.9,
            "pieces": 8
          }
        ]
      },
      {
        "id": "futomaki",
        "title": "Futomaki",
        "pieces": 6,
        "items": [
          {
            "code": "B1",
            "name": "Futo 1",
            "content": "Lachs, Tobiko, Gurke, Avocado, Frischkäse",
            "allergens": [
              "D",
              "G"
            ],
            "price": 11.5,
            "pieces": 6
          },
          {
            "code": "B2",
            "name": "Futo 2",
            "content": "Thunfisch, Tobiko, Gurke, Avocado, Frischkäse",
            "allergens": [
              "D",
              "G"
            ],
            "price": 11.9,
            "pieces": 6
          },
          {
            "code": "B3",
            "name": "Futo 3",
            "content": "Garnelen, Tobiko, Avocado, Gurke, Frischkäse",
            "allergens": [
              "B",
              "D",
              "G"
            ],
            "price": 11.5,
            "pieces": 6
          },
          {
            "code": "B4",
            "name": "Futo 4",
            "content": "Frittiertes Hähnchen, Gurke, Avocado, Frischkäse, Sesam",
            "allergens": [
              "A",
              "C",
              "G",
              "K"
            ],
            "price": 11.5,
            "pieces": 6
          },
          {
            "code": "B5",
            "name": "Futo 5",
            "content": "Frittierte Garnelen, Gurke, Avocado, Frischkäse, Sesam",
            "allergens": [
              "A",
              "B",
              "C",
              "G",
              "K"
            ],
            "price": 11.9,
            "pieces": 6
          }
        ]
      },
      {
        "id": "fried-rolls",
        "title": "Fried Rolls",
        "pieces": 6,
        "items": [
          {
            "code": "F1",
            "name": "Roll 1",
            "content": "Panierte Rolle mit Lachs, Avocado, Gurke, Frischkäse",
            "allergens": [
              "A",
              "C",
              "D",
              "G"
            ],
            "price": 12.5,
            "pieces": 6
          },
          {
            "code": "F2",
            "name": "Roll 2",
            "content": "Panierte Rolle mit Thunfisch, Gurke, Avocado, Frischkäse",
            "allergens": [
              "A",
              "C",
              "D",
              "G"
            ],
            "price": 12.9,
            "pieces": 6
          },
          {
            "code": "F3",
            "name": "Roll 3",
            "content": "Panierte Rolle mit Garnelen, Surimi, Thunfisch, Gurke, Frischkäse",
            "allergens": [
              "A",
              "B",
              "C",
              "D",
              "G"
            ],
            "price": 12.9,
            "pieces": 6
          },
          {
            "code": "F4",
            "name": "Vegetarian-Roll",
            "content": "Gurke, Mango, Avocado",
            "allergens": [
              "A",
              "C"
            ],
            "price": 10.9,
            "pieces": 6
          },
          {
            "code": "F5",
            "name": "Chicken-Roll",
            "content": "Panierte Rolle mit Hähnchen, Gurke, Frischkäse",
            "allergens": [
              "A",
              "C",
              "G"
            ],
            "price": 11.9,
            "pieces": 6
          },
          {
            "code": "F6",
            "name": "Mini-Sake",
            "content": "Klein panierte Rolle mit Lachs",
            "allergens": [
              "A",
              "C",
              "D"
            ],
            "price": 9.9,
            "pieces": 8
          },
          {
            "code": "F7",
            "name": "Mini-Maguro",
            "content": "Klein panierte Rolle mit Thunfisch",
            "allergens": [
              "A",
              "C",
              "D"
            ],
            "price": 9.9,
            "pieces": 8
          }
        ]
      },
      {
        "id": "nigiri",
        "title": "Nigiri",
        "pieces": 2,
        "items": [
          {
            "code": "N1",
            "name": "Flambierter Lachs",
            "content": "Flambierter Lachs / Flambéed salmon",
            "allergens": [
              "A",
              "C",
              "D",
              "F"
            ],
            "price": 5.2,
            "pieces": 2
          },
          {
            "code": "N2",
            "name": "Avocado",
            "content": "Avocado",
            "allergens": [],
            "price": 4.2,
            "pieces": 2
          },
          {
            "code": "N3",
            "name": "Surimi",
            "content": "Surimi",
            "allergens": [
              "A",
              "C",
              "D"
            ],
            "price": 4.2,
            "pieces": 2
          },
          {
            "code": "N4",
            "name": "Ebi",
            "content": "Gekochte Garnelen / Cooked shrimp",
            "allergens": [
              "B"
            ],
            "price": 5.5,
            "pieces": 2
          },
          {
            "code": "N5",
            "name": "Maguro",
            "content": "Thunfisch / Tuna",
            "allergens": [
              "D"
            ],
            "price": 5.5,
            "pieces": 2
          },
          {
            "code": "N6",
            "name": "Sake",
            "content": "Lachs / Salmon",
            "allergens": [
              "D"
            ],
            "price": 5.2,
            "pieces": 2
          },
          {
            "code": "N7",
            "name": "Unagi",
            "content": "Aal / Eel",
            "allergens": [
              "A",
              "D",
              "F"
            ],
            "price": 5.9,
            "pieces": 2
          }
        ]
      },
      {
        "id": "sashimi",
        "title": "Sashimi",
        "items": [
          {
            "code": "S1",
            "name": "Sashimi Sake",
            "content": "Lachs / Salmon",
            "allergens": [
              "D"
            ],
            "price": 21.0,
            "pieces": 10
          },
          {
            "code": "S2",
            "name": "Sashimi Maguro",
            "content": "Thunfisch / Tuna",
            "allergens": [
              "D"
            ],
            "price": 22.0,
            "pieces": 10
          },
          {
            "code": "S3",
            "name": "Sashimi Sake-Maguro",
            "content": "Lachs & Thunfisch / Salmon & tuna",
            "allergens": [
              "D"
            ],
            "price": 22.0,
            "pieces": 10
          },
          {
            "code": "S4",
            "name": "Sashimi Sake oder Maguro",
            "content": "Lachs oder Thunfisch / Salmon or tuna",
            "allergens": [
              "D"
            ],
            "price": 12.9,
            "pieces": 5
          }
        ]
      }
    ],
    "sets": [
      {
        "code": "SET1",
        "name": "Menü 1 · Vegan",
        "price": 14.9,
        "allergens": [],
        "content": "3 Maki: Avocado, Gurke, Mango (24 Stk.)",
        "tags": [
          "vegan"
        ]
      },
      {
        "code": "SET2",
        "name": "Menü 2 · Vegan Plus",
        "price": 18.9,
        "allergens": [
          "F",
          "K"
        ],
        "content": "1 Inside-Out (8 Stk.) · 2 Nigiri Avocado · 1 Maki Gurke",
        "tags": [
          "vegan"
        ]
      },
      {
        "code": "SET3",
        "name": "Menü 3 · Sake",
        "price": 31.9,
        "allergens": [
          "A",
          "C",
          "D",
          "G"
        ],
        "content": "1 Inside-Out Lachs (8 Stk.) · 1 Maki Lachs (8 Stk.) · 2 Nigiri Lachs · 1 Fried Roll Lachs (6 Stk.)"
      },
      {
        "code": "SET4",
        "name": "Menü 4 · Mixed Nigiri",
        "price": 22.9,
        "allergens": [
          "A",
          "B",
          "C",
          "D",
          "F",
          "G"
        ],
        "content": "4 Nigiri: Thunfisch, Seeaal, Garnele, Lachs · 1 Fried Roll Thunfisch (6 Stk.)"
      },
      {
        "code": "SET5",
        "name": "Menü 5 · Tuna",
        "price": 20.9,
        "allergens": [
          "A",
          "B",
          "C",
          "D",
          "F"
        ],
        "content": "4 Nigiri: Seeaal, Garnele, Lachs, Thunfisch · 1 Mini-Sake (8 Stk.)"
      },
      {
        "code": "SET6",
        "name": "Menü 6 · Deluxe Solo",
        "price": 41.9,
        "allergens": [
          "A",
          "B",
          "C",
          "D",
          "F",
          "G",
          "K"
        ],
        "content": "1 Inside-Out Lachs (8 Stk.) · 2 Nigiri · Seetang-Salat · 1 Fried-Roll Futo (Lachs) · 1 California Inside-Out (8 Stk.)"
      },
      {
        "code": "SET7",
        "name": "Menü 7 · Für 2 Personen",
        "price": 56.9,
        "allergens": [
          "A",
          "B",
          "C",
          "D",
          "F",
          "G"
        ],
        "content": "2 Maki (16 Stk., Lachs + Thunfisch) · 1 California Inside-Out (8 Stk.) · 4 Nigiri (Lachs, Thunfisch, Garnele, Seeaal) · 2 Sashimi Lachs · 1 Fried-Roll Lachs (6 Stk.)"
      },
      {
        "code": "SET8",
        "name": "Menü 8 · Für 3 Personen",
        "price": 79.9,
        "allergens": [
          "A",
          "B",
          "C",
          "D",
          "F",
          "G",
          "K"
        ],
        "content": "3 Maki (24 Stk., Lachs, Thunfisch, Avocado) · 1 California Inside-Out (8 Stk.) · 1 Inside-Out Lachs (8 Stk.) · 1 Fried-Roll Futo (Lachs, 6 Stk.) · 6 Nigiri · 6 Sashimi (3 Lachs, 3 Thunfisch) · 1 Special Roll · Seetang-Salat — gesamt ca. 65 Stk."
      },
      {
        "code": "SET9",
        "name": "Menü 9 · Für 4 Personen · Komplett",
        "price": 104.9,
        "allergens": [
          "A",
          "B",
          "C",
          "D",
          "F",
          "G",
          "K"
        ],
        "content": "10 Nigiri (je 2×: Flambierter Lachs, Avocado, Surimi, Ebi, Maguro) · 2 Inside-Out (California + Lachs, 16 Stk.) · 1 Special Roll (JURY Roll) · 1 Futo Maki (Lachs, 6 Stk.) · 2 Fried-Roll (Lachs, Thunfisch, 12 Stk.) · 3 Maki (Lachs, Thunfisch, Avocado, 24 Stk.) · 8 Sashimi (4 Lachs, 4 Thunfisch) · 2 Seetang-Salat — gesamt ca. 85 Stk."
      }
    ]
  },
  "drinks": {
    "roman": "X",
    "titleDE": "Getränke",
    "titleEN": "Drinks",
    "noteDE": "Erfrischend & hausgemacht",
    "noteEN": "Refreshing & homemade",
    "groups": [
      {
        "id": "soft-drinks",
        "titleDE": "Alkoholfrei",
        "titleEN": "Soft Drinks",
        "items": [
          {
            "id": "135",
            "name": "Coca-Cola",
            "additives": [
              "11"
            ],
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          },
          {
            "id": "136",
            "name": "Coca-Cola Light",
            "additives": [
              "9",
              "10",
              "11"
            ],
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          },
          {
            "id": "137",
            "name": "Fanta",
            "additives": [
              "1",
              "2"
            ],
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          },
          {
            "id": "138",
            "name": "Sprite",
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          },
          {
            "id": "139",
            "name": "Spezi",
            "additives": [
              "1",
              "11"
            ],
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          },
          {
            "id": "140",
            "name": "Tonic Water",
            "additives": [
              "12"
            ],
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          },
          {
            "id": "141",
            "name": "Ginger Ale",
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          },
          {
            "id": "142",
            "name": "Wasser still/spritzig",
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          }
        ]
      },
      {
        "id": "juices-spritzers",
        "titleDE": "Säfte & Schorle",
        "titleEN": "Juices & Spritzers",
        "items": [
          {
            "id": "143",
            "name": "Apfelsaft",
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          },
          {
            "id": "144",
            "name": "Ananassaft",
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          },
          {
            "id": "145",
            "name": "Maracujasaft",
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          },
          {
            "id": "146",
            "name": "Mangosaft",
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          },
          {
            "id": "147",
            "name": "Orangensaft",
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          },
          {
            "id": "148",
            "name": "KiBa",
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          },
          {
            "id": "149",
            "name": "Litschisaft",
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          },
          {
            "id": "150",
            "name": "Apfelschorle",
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          },
          {
            "id": "151",
            "name": "Ananasschorle",
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          },
          {
            "id": "152",
            "name": "Maracujaschorle",
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          },
          {
            "id": "153",
            "name": "Mangoschorle",
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          },
          {
            "id": "154",
            "name": "Orangenschorle",
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          },
          {
            "id": "155",
            "name": "Litschischorle",
            "sizes": {
              "0.3L": 3.5,
              "0.4L": 4.2
            }
          }
        ]
      },
      {
        "id": "lassi",
        "titleDE": "Lassi",
        "titleEN": "Yogurt Drinks",
        "items": [
          {
            "id": "156",
            "name": "Mango Lassi",
            "ingredients": "Mango, Kokos, Joghurt / Mango, coconut, yogurt",
            "allergens": [
              "G"
            ],
            "price": 7.5
          },
          {
            "id": "157",
            "name": "Minz Lassi",
            "ingredients": "Minze, Zucker, Ananas, Joghurt / Mint, sugar, pineapple, yogurt",
            "allergens": [
              "G"
            ],
            "price": 6.5
          }
        ]
      },
      {
        "id": "lemonade",
        "titleDE": "Limonade",
        "titleEN": "Lemonade",
        "items": [
          {
            "id": "158",
            "name": "Berry Dreams",
            "ingredients": "Beerenmix, Limette, Traubensaft, Erdbeersirup, Soda",
            "allergens": [],
            "price": 6.9
          },
          {
            "id": "159",
            "name": "Limetten Butterfly",
            "ingredients": "Limette, brauner Zucker, Schmetterlingserbse, Soda",
            "allergens": [],
            "price": 6.9
          },
          {
            "id": "160",
            "name": "Ipanema",
            "ingredients": "Limette, brauner Zucker, Minze, Maracujasaft, Soda",
            "allergens": [],
            "price": 6.9
          },
          {
            "id": "161",
            "name": "Rose Lady",
            "ingredients": "Himbeere, Litschisaft, Limette, Himbeersirup, Soda",
            "allergens": [],
            "price": 6.9
          },
          {
            "id": "162",
            "name": "Pink Ipanema",
            "ingredients": "Limette, Erdbeersirup, Guavensaft, Soda",
            "allergens": [],
            "price": 6.9
          },
          {
            "id": "163",
            "name": "Mango Green Tea",
            "ingredients": "Mangosirup, Mango, Grüntee, Soda",
            "allergens": [],
            "price": 6.9
          },
          {
            "id": "164",
            "name": "Peach Eistee",
            "ingredients": "Pfirsichsirup, Pfirsichtee, Zitronengras, Orangensaft, Chiasamen",
            "allergens": [],
            "price": 6.9
          }
        ]
      },
      {
        "id": "non-alcoholic-cocktails",
        "titleDE": "Cocktails ohne Alkohol",
        "titleEN": "Non-Alcoholic Cocktails",
        "items": [
          {
            "id": "165",
            "name": "Blue Lagoon",
            "ingredients": "Blue Curaçao, Limette, Ananassaft, Sprite",
            "allergens": [],
            "price": 7.2
          },
          {
            "id": "166",
            "name": "Virgin Sunrise",
            "ingredients": "Ananassaft, Orangensaft, Grenadine, Limette",
            "allergens": [],
            "price": 7.2
          },
          {
            "id": "167",
            "name": "Love Potion",
            "ingredients": "Kirschsaft, Sprite, Glitzer",
            "allergens": [],
            "additives": [
              "1"
            ],
            "price": 7.2
          },
          {
            "id": "168",
            "name": "Tropical Kiss",
            "ingredients": "Erdbeersirup, Erdbeere, Orangensaft, Maracujasaft, Glitzer",
            "allergens": [],
            "additives": [
              "1"
            ],
            "price": 7.2
          },
          {
            "id": "169",
            "name": "Kokos Sunset",
            "ingredients": "Grenadine, Kokossirup, Sahne, Ananassaft",
            "allergens": [
              "G"
            ],
            "price": 7.2
          },
          {
            "id": "170",
            "name": "Strawberry Dreams",
            "ingredients": "Rosensirup, Limette, Erdbeersaft, Maracujasaft",
            "allergens": [],
            "price": 7.2
          }
        ]
      },
      {
        "id": "alcoholic-cocktails",
        "titleDE": "Cocktails mit Alkohol",
        "titleEN": "Alcoholic Cocktails",
        "items": [
          {
            "id": "171",
            "name": "Mai Tai",
            "ingredients": "Weißer Rum, brauner Rum, Orangensaft, Triple Sec, Limette, Mandelsirup",
            "allergens": [
              "H"
            ],
            "price": 8.2
          },
          {
            "id": "172",
            "name": "Piña Colada",
            "ingredients": "Rum, Ananassaft, Limette, Kokos",
            "allergens": [],
            "price": 7.5
          },
          {
            "id": "173",
            "name": "Patrick Day",
            "ingredients": "Wodka, Ananassaft, Orangensaft, Limette, Blue Curaçao",
            "allergens": [],
            "price": 7.5
          },
          {
            "id": "174",
            "name": "Swimming Pool",
            "ingredients": "Rum, Sahne, Kokossirup, Ananassaft, Blue Curaçao",
            "allergens": [
              "G"
            ],
            "price": 7.5
          },
          {
            "id": "175",
            "name": "Mojito",
            "ingredients": "Rum, Limette, Minze, Soda, brauner Zucker",
            "allergens": [],
            "price": 7.5
          },
          {
            "id": "176",
            "name": "Lam Bada",
            "ingredients": "Wodka, Apricot Brandy, Blue Curaçao, Mangosaft, Ananassaft",
            "allergens": [
              "L"
            ],
            "price": 7.9
          },
          {
            "id": "177",
            "name": "Hanoi Mule",
            "ingredients": "Reisschnaps, Ingwer, Soda",
            "allergens": [],
            "price": 7.5
          },
          {
            "id": "178",
            "name": "Red Berry",
            "ingredients": "Wodka, Rosensirup, Limette, Erdbeersaft, Maracujasaft",
            "allergens": [],
            "price": 7.5
          }
        ]
      },
      {
        "id": "spritz-longdrinks",
        "titleDE": "Spritz · Longdrinks",
        "titleEN": "Spritz · Long Drinks",
        "items": [
          {
            "id": "179",
            "name": "Aperol Spritz",
            "ingredients": "Aperol, Soda, Prosecco, Orange",
            "allergens": [
              "L"
            ],
            "price": 7.5
          },
          {
            "id": "180",
            "name": "Himbeer Spritz",
            "ingredients": "Himbeere, Prosecco, Soda, Rum",
            "allergens": [
              "L"
            ],
            "price": 7.5
          },
          {
            "id": "181",
            "name": "Lychee Spritz",
            "ingredients": "Lychee-Likör, Lycheesaft, Prosecco",
            "allergens": [
              "L"
            ],
            "price": 7.5
          },
          {
            "id": "182",
            "name": "Lillet Wild Berry",
            "ingredients": "Lillet, Wild Berry, frische Himbeeren",
            "allergens": [
              "L"
            ],
            "price": 7.5
          },
          {
            "id": "183",
            "name": "Gin Tonic",
            "ingredients": "Gin, Tonic Water",
            "allergens": [],
            "additives": [
              "12"
            ],
            "price": 6.9
          },
          {
            "id": "184",
            "name": "Whisky Cola",
            "ingredients": "Whisky, Cola",
            "allergens": [],
            "additives": [
              "11"
            ],
            "price": 6.9
          },
          {
            "id": "185",
            "name": "Cuba Libre",
            "ingredients": "Rum Havana, Cola",
            "allergens": [],
            "additives": [
              "11"
            ],
            "price": 6.9
          }
        ]
      },
      {
        "id": "beer",
        "titleDE": "Biere",
        "titleEN": "Beer",
        "items": [
          {
            "id": "186",
            "name": "König Ludwig Hefe Dunkel (0,5 L)",
            "allergens": [
              "A"
            ],
            "price": 4.6
          },
          {
            "id": "187",
            "name": "König Ludwig Hefeweizen (0,5 L)",
            "allergens": [
              "A"
            ],
            "price": 4.6
          },
          {
            "id": "188",
            "name": "Alkoholfrei Hefeweizen (0,5 L)",
            "allergens": [
              "A"
            ],
            "price": 4.6
          },
          {
            "id": "189",
            "name": "Alkoholfrei Pils (0,3 L)",
            "allergens": [
              "A"
            ],
            "price": 3.9
          },
          {
            "id": "190",
            "name": "Radler · Shandy",
            "allergens": [
              "A"
            ],
            "sizes": {
              "0.3L": 3.5,
              "0.5L": 4.9
            }
          },
          {
            "id": "191",
            "name": "Warsteiner Fassbier",
            "allergens": [
              "A"
            ],
            "sizes": {
              "0.3L": 3.5,
              "0.5L": 4.9
            }
          }
        ]
      },
      {
        "id": "coffee",
        "titleDE": "Kaffee",
        "titleEN": "Coffee",
        "items": [
          {
            "id": "192",
            "name": "Cafe Phin Den",
            "ingredients": "Vietnamesischer schwarzer Filterkaffee / Vietnamese black filter coffee",
            "allergens": [],
            "price": 5.0
          },
          {
            "id": "193",
            "name": "Cafe Phin Nau",
            "ingredients": "Filterkaffee mit Kondensmilch / Filter coffee with condensed milk",
            "allergens": [
              "G"
            ],
            "price": 5.5
          },
          {
            "id": "194",
            "name": "Cafe Muoi",
            "ingredients": "Salzkaffee mit Milch & Schlagsahne / Salt coffee with milk & cream",
            "allergens": [
              "G"
            ],
            "price": 6.5
          },
          {
            "id": "195",
            "name": "Bac Xiu",
            "ingredients": "Kaffee mit Kondensmilch & Milch / Coffee with condensed milk & milk",
            "allergens": [
              "G"
            ],
            "price": 6.5
          },
          {
            "id": "196",
            "name": "Cafe Trung",
            "ingredients": "Eierkaffee mit Eigelb & Schlagsahne / Egg coffee with yolk & cream",
            "allergens": [
              "C",
              "G"
            ],
            "price": 7.0
          },
          {
            "id": "197",
            "name": "Cafe Cot Dua",
            "ingredients": "Kokosnusskaffee mit Crushed Ice / Coconut coffee with crushed ice",
            "allergens": [
              "G"
            ],
            "price": 6.5
          }
        ]
      },
      {
        "id": "tea",
        "titleDE": "Tee",
        "titleEN": "Tea",
        "items": [
          {
            "id": "198",
            "name": "Jasmintee",
            "ingredients": "Jasmine tea",
            "allergens": [],
            "price": 5.0
          },
          {
            "id": "199",
            "name": "Grüner Tee",
            "ingredients": "Green tea",
            "allergens": [],
            "price": 5.0
          },
          {
            "id": "200",
            "name": "Ingwertee",
            "ingredients": "Frischer Ingwer mit Honig / Fresh ginger with honey",
            "allergens": [],
            "price": 5.0
          },
          {
            "id": "201",
            "name": "Minze & Ingwertee",
            "ingredients": "Minze, frischer Ingwer mit Honig / Mint, fresh ginger with honey",
            "allergens": [],
            "price": 5.5
          },
          {
            "id": "202",
            "name": "Wintertee",
            "ingredients": "Frischer Ingwer mit Orange, Minze, Honig / Fresh ginger with orange, mint, honey",
            "allergens": [],
            "price": 6.0
          }
        ]
      },
      {
        "id": "spirits",
        "titleDE": "Schnaps · Spirituosen",
        "titleEN": "Spirits",
        "items": [
          {
            "id": "203",
            "name": "Lúa Mới · Reisschnaps",
            "sizes": {
              "2cl": 4.5,
              "4cl": 8.5
            }
          },
          {
            "id": "204",
            "name": "Nếp Mới · Reisschnaps",
            "sizes": {
              "2cl": 4.5,
              "4cl": 8.5
            }
          },
          {
            "id": "205",
            "name": "Wodka",
            "sizes": {
              "2cl": 4.5,
              "4cl": 8.5
            }
          },
          {
            "id": "206",
            "name": "Jägermeister",
            "sizes": {
              "2cl": 4.5,
              "4cl": 8.5
            }
          },
          {
            "id": "207",
            "name": "Irish Cream Likör",
            "allergens": [
              "G"
            ],
            "sizes": {
              "2cl": null,
              "4cl": 8.0
            }
          },
          {
            "id": "208",
            "name": "Whisky",
            "sizes": {
              "2cl": 5.0,
              "4cl": 9.5
            }
          },
          {
            "id": "209",
            "name": "Chivas 18",
            "sizes": {
              "2cl": 7.0,
              "4cl": 14.0
            }
          }
        ]
      },
      {
        "id": "white-wine",
        "titleDE": "Weißwein",
        "titleEN": "White Wine",
        "items": [
          {
            "id": "210",
            "name": "Chardonnay · trocken",
            "allergens": [
              "L"
            ],
            "additives": [
              "5"
            ],
            "sizes": {
              "0.2L": 5.5,
              "0.75L": 19.9
            }
          },
          {
            "id": "211",
            "name": "Riesling · trocken",
            "allergens": [
              "L"
            ],
            "additives": [
              "5"
            ],
            "sizes": {
              "0.2L": 5.5,
              "0.75L": 19.9
            }
          },
          {
            "id": "212",
            "name": "Grauburgunder · trocken",
            "allergens": [
              "L"
            ],
            "additives": [
              "5"
            ],
            "sizes": {
              "0.2L": 5.5,
              "0.75L": 19.9
            }
          },
          {
            "id": "213",
            "name": "Weißburgunder · trocken",
            "allergens": [
              "L"
            ],
            "additives": [
              "5"
            ],
            "sizes": {
              "0.2L": 5.5,
              "0.75L": 19.9
            }
          },
          {
            "id": "214",
            "name": "Pinot Grigio · trocken",
            "allergens": [
              "L"
            ],
            "additives": [
              "5"
            ],
            "sizes": {
              "0.2L": 5.5,
              "0.75L": 19.9
            }
          },
          {
            "id": "215",
            "name": "Weinschorle · Spritzer",
            "allergens": [
              "L"
            ],
            "additives": [
              "5"
            ],
            "sizes": {
              "0.2L": 5.5,
              "0.75L": null
            }
          },
          {
            "id": "219",
            "name": "Prosecco",
            "allergens": [
              "L"
            ],
            "additives": [
              "5"
            ],
            "sizes": {
              "0.2L": 6.5,
              "0.75L": 23.5
            }
          }
        ]
      },
      {
        "id": "rose-wine",
        "titleDE": "Roséwein",
        "titleEN": "Rosé Wine",
        "items": [
          {
            "id": "216",
            "name": "Roséwein",
            "allergens": [
              "L"
            ],
            "additives": [
              "5"
            ],
            "sizes": {
              "0.2L": 5.5,
              "0.75L": 19.9
            }
          }
        ]
      },
      {
        "id": "red-wine",
        "titleDE": "Rotwein",
        "titleEN": "Red Wine",
        "items": [
          {
            "id": "217",
            "name": "Merlot · trocken",
            "allergens": [
              "L"
            ],
            "additives": [
              "5"
            ],
            "sizes": {
              "0.2L": 5.5,
              "0.75L": 19.9
            }
          },
          {
            "id": "218",
            "name": "Primitivo Puglia · trocken",
            "allergens": [
              "L"
            ],
            "additives": [
              "5"
            ],
            "sizes": {
              "0.2L": 5.5,
              "0.75L": 19.9
            }
          }
        ]
      }
    ]
  },
  "allergens": {
    "A": {
      "de": "Glutenhaltiges Getreide",
      "en": "Cereals containing gluten"
    },
    "B": {
      "de": "Krebstiere",
      "en": "Crustaceans"
    },
    "C": {
      "de": "Eier",
      "en": "Eggs"
    },
    "D": {
      "de": "Fische",
      "en": "Fish"
    },
    "E": {
      "de": "Erdnüsse",
      "en": "Peanuts"
    },
    "F": {
      "de": "Sojabohnen",
      "en": "Soybeans"
    },
    "G": {
      "de": "Milch / Laktose",
      "en": "Milk / lactose"
    },
    "H": {
      "de": "Schalenfrüchte",
      "en": "Tree nuts"
    },
    "I": {
      "de": "Sellerie",
      "en": "Celery"
    },
    "J": {
      "de": "Senf",
      "en": "Mustard"
    },
    "K": {
      "de": "Sesamsamen",
      "en": "Sesame"
    },
    "L": {
      "de": "Schwefeldioxid / Sulfite",
      "en": "Sulphur dioxide / sulphites"
    },
    "M": {
      "de": "Lupinen",
      "en": "Lupin"
    },
    "N": {
      "de": "Weichtiere",
      "en": "Molluscs"
    }
  },
  "additives": {
    "1": {
      "de": "Farbstoff",
      "en": "Colourant"
    },
    "2": {
      "de": "Konservierungsstoff",
      "en": "Preservative"
    },
    "3": {
      "de": "Antioxidationsmittel",
      "en": "Antioxidant"
    },
    "4": {
      "de": "Geschmacksverstärker",
      "en": "Flavour enhancer"
    },
    "5": {
      "de": "geschwefelt",
      "en": "Sulphured"
    },
    "9": {
      "de": "Süßungsmittel",
      "en": "Sweetener"
    },
    "10": {
      "de": "Phenylalaninquelle",
      "en": "Source of phenylalanine"
    },
    "11": {
      "de": "koffeinhaltig",
      "en": "Contains caffeine"
    },
    "12": {
      "de": "chininhaltig",
      "en": "Contains quinine"
    }
  },
  "legal": {
    "de": "Trotz größter Sorgfalt können in unserer Küche Spuren anderer Allergene nicht vollständig ausgeschlossen werden. Bei Fragen zu Allergenen und Zusatzstoffen wenden Sie sich bitte an unser Servicepersonal — wir beraten Sie gerne.",
    "en": "Despite the greatest care, traces of other allergens cannot be entirely excluded in our kitchen. Please ask our service staff for information on allergens and additives — we are happy to advise you.",
    "vatDE": "Alle Preise inkl. MwSt.",
    "vatEN": "All prices incl. VAT."
  }
};

function juryFormatEUR(value, locale = "de-DE") {
  if (value === null || value === undefined || value === "") return "—";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR"
  }).format(value);
}

function juryAllergenLabels(codes, language = "de") {
  return (codes || []).map((code) => ({
    code,
    label: JURY_MENU.allergens?.[code]?.[language] || code
  }));
}

function juryAdditiveLabels(codes, language = "de") {
  return (codes || []).map((code) => ({
    code: String(code),
    label: JURY_MENU.additives?.[String(code)]?.[language] || String(code)
  }));
}

function juryFlattenMenu() {
  const rows = [];

  for (const section of JURY_MENU.sections || []) {
    for (const group of section.groups || []) {
      for (const menuItem of group.items || []) {
        rows.push({
          type: "food",
          sectionId: section.id,
          sectionDE: section.titleDE,
          sectionEN: section.titleEN,
          groupId: group.id,
          groupDE: group.titleDE,
          groupEN: group.titleEN,
          ...menuItem
        });
      }
    }
  }

  for (const group of JURY_MENU.sushi?.groups || []) {
    for (const menuItem of group.items || []) {
      rows.push({
        type: "sushi",
        sectionId: "sushi",
        sectionDE: JURY_MENU.sushi.titleDE,
        sectionEN: JURY_MENU.sushi.titleEN,
        groupId: group.id,
        groupDE: group.title,
        groupEN: group.title,
        ...menuItem
      });
    }
  }

  for (const menuItem of JURY_MENU.sushi?.sets || []) {
    rows.push({
      type: "sushi-set",
      sectionId: "sushi",
      sectionDE: JURY_MENU.sushi.titleDE,
      sectionEN: JURY_MENU.sushi.titleEN,
      groupId: "sushi-sets",
      groupDE: "Sushi Menüs",
      groupEN: "Sushi Sets",
      ...menuItem
    });
  }

  for (const group of JURY_MENU.drinks?.groups || []) {
    for (const menuItem of group.items || []) {
      rows.push({
        type: "drink",
        sectionId: "drinks",
        sectionDE: JURY_MENU.drinks.titleDE,
        sectionEN: JURY_MENU.drinks.titleEN,
        groupId: group.id,
        groupDE: group.titleDE,
        groupEN: group.titleEN,
        ...menuItem
      });
    }
  }

  return rows;
}

if (typeof window !== "undefined") {
  window.JURY_MENU = JURY_MENU;
  window.juryFormatEUR = juryFormatEUR;
  window.juryAllergenLabels = juryAllergenLabels;
  window.juryAdditiveLabels = juryAdditiveLabels;
  window.juryFlattenMenu = juryFlattenMenu;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = JURY_MENU;
  module.exports.juryFormatEUR = juryFormatEUR;
  module.exports.juryAllergenLabels = juryAllergenLabels;
  module.exports.juryAdditiveLabels = juryAdditiveLabels;
  module.exports.juryFlattenMenu = juryFlattenMenu;
}
