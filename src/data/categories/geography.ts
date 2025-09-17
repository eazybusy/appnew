import { Category } from '../types';

export const GEOGRAPHY_CATEGORY: Category = {
    id: 'geography',
    name: { ka: '🌎 გეოგრაფია და მსოფლიო', en: '🌎 Geography and the World' },
    icon: '🌎',
    subCategories: [
        {
            id: 'physical-geography',
            name: { ka: '🏞️ I. ფიზიკური გეოგრაფია', en: '🏞️ I. Physical Geography' },
            sections: [
                {
                    id: 'continents-oceans',
                    name: { ka: '🌍 კონტინენტები და ოკეანეები', en: '🌍 Continents and Oceans' },
                    subSections: [
                        {
                            id: 'continents-oceans-keywords',
                            name: { ka: 'ძირითადი ცნებები', en: 'Key Concepts' },
                            keywords: [
                                { id: 'continent', name: { ka: 'კონტინენტი', en: 'Continent' } },
                                { id: 'supercontinent', name: { ka: 'სუპერკონტინენტი', en: 'Supercontinent' } },
                                { id: 'pangaea', name: { ka: 'პანგეა', en: 'Pangaea' } },
                                { id: 'gondwana', name: { ka: 'გონდვანა', en: 'Gondwana' } },
                                { id: 'laurasia', name: { ka: 'ლავრაზია', en: 'Laurasia' } },
                                { id: 'ocean', name: { ka: 'ოკეანე', en: 'Ocean' } },
                                { id: 'world-ocean', name: { ka: 'მსოფლიო ოკეანე', en: 'World Ocean' } },
                                { id: 'continental-drift', name: { ka: 'კონტინენტური დრეიფი', en: 'Continental Drift' } },
                                { id: 'continental-shelf', name: { ka: 'კონტინენტური შელფი', en: 'Continental Shelf' } },
                                { id: 'europe', name: { ka: 'ევროპა', en: 'Europe' } },
                                { id: 'asia', name: { ka: 'აზია', en: 'Asia' } },
                                { id: 'africa', name: { ka: 'აფრიკა', en: 'Africa' } },
                                { id: 'north-america', name: { ka: 'ჩრდილოეთ ამერიკა', en: 'North America' } },
                                { id: 'south-america', name: { ka: 'სამხრეთ ამერიკა', en: 'South America' } },
                                { id: 'australia', name: { ka: 'ავსტრალია', en: 'Australia' } },
                                { id: 'antarctica', name: { ka: 'ანტარქტიდა', en: 'Antarctica' } },
                                { id: 'eurasia', name: { ka: 'ევრაზია', en: 'Eurasia' } },
                                { id: 'oceania', name: { ka: 'ოკეანეთი', en: 'Oceania' } },
                                { id: 'pacific-ocean', name: { ka: 'წყნარი ოკეანე', en: 'Pacific Ocean' } },
                                { id: 'atlantic-ocean', name: { ka: 'ატლანტის ოკეანე', en: 'Atlantic Ocean' } },
                                { id: 'indian-ocean', name: { ka: 'ინდოეთის ოკეანე', en: 'Indian Ocean' } },
                                { id: 'arctic-ocean', name: { ka: 'ჩრდილოეთის ყინულოვანი ოკეანე', en: 'Arctic Ocean' } },
                                { id: 'southern-ocean', name: { ka: 'სამხრეთის ოკეანე', en: 'Southern Ocean' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'geomorphology',
                    name: { ka: '🏔️ გეომორფოლოგია (რელიეფის ფორმები)', en: '🏔️ Geomorphology (Landforms)' },
                    subSections: [
                        {
                            id: 'geomorphology-keywords',
                            name: { ka: 'საკვანძო სიტყვები', en: 'Keywords' },
                            keywords: [
                                { id: 'relief', name: { ka: 'რელიეფი', en: 'Relief / Terrain' } },
                                { id: 'landscape', name: { ka: 'ლანდშაფტი', en: 'Landscape' } },
                                { id: 'mountain', name: { ka: 'მთა', en: 'Mountain' } },
                                { id: 'peak-summit', name: { ka: 'მწვერვალი', en: 'Peak / Summit' } },
                                { id: 'ridge', name: { ka: 'ქედი', en: 'Ridge / Mountain Range' } },
                                { id: 'mountain-system', name: { ka: 'მთათა სისტემა', en: 'Mountain System' } },
                                { id: 'intermontane-basin', name: { ka: 'მთათაშორისი ქვაბული', en: 'Intermontane Basin' } },
                                { id: 'plateau', name: { ka: 'პლატო', en: 'Plateau' } },
                                { id: 'upland', name: { ka: 'ზეგანი', en: 'Upland' } },
                                { id: 'lowland', name: { ka: 'დაბლობი', en: 'Lowland' } },
                                { id: 'plain', name: { ka: 'ვაკე', en: 'Plain' } },
                                { id: 'hill', name: { ka: 'ბორცვი', en: 'Hill' } },
                                { id: 'valley', name: { ka: 'ხეობა', en: 'Valley' } },
                                { id: 'canyon', name: { ka: 'კანიონი', en: 'Canyon' } },
                                { id: 'volcano', name: { ka: 'ვულკანი', en: 'Volcano' } },
                                { id: 'crater', name: { ka: 'კრატერი', en: 'Crater' } },
                                { id: 'caldera', name: { ka: 'კალდერა', en: 'Caldera' } },
                                { id: 'geyser', name: { ka: 'გეიზერი', en: 'Geyser' } },
                                { id: 'lava', name: { ka: 'ლავა', en: 'Lava' } },
                                { id: 'magma', name: { ka: 'მაგმა', en: 'Magma' } },
                                { id: 'seismic-activity', name: { ka: 'სეისმური აქტივობა', en: 'Seismic Activity' } },
                                { id: 'erosion', name: { ka: 'ეროზია', en: 'Erosion' } },
                                { id: 'denudation', name: { ka: 'დენუდაცია', en: 'Denudation' } },
                                { id: 'abrasion', name: { ka: 'აბრაზია', en: 'Abrasion' } },
                                { id: 'dune', name: { ka: 'დიუნა', en: 'Dune' } },
                                { id: 'barchan', name: { ka: 'ბარხანი', en: 'Barchan' } },
                                { id: 'glacier', name: { ka: 'მყინვარი', en: 'Glacier' } },
                                { id: 'moraine', name: { ka: 'მორენა', en: 'Moraine' } },
                                { id: 'fjord', name: { ka: 'ფიორდი', en: 'Fjord' } },
                                { id: 'karst-cave', name: { ka: 'კარსტული მღვიმე', en: 'Karst Cave' } },
                                { id: 'stalactite', name: { ka: 'სტალაქტიტი', en: 'Stalactite' } },
                                { id: 'stalagmite', name: { ka: 'სტალაგმიტი', en: 'Stalagmite' } },
                            ]
                        },
                        {
                            id: 'geomorphology-famous-objects',
                            name: { ka: 'ცნობილი ობიექტები', en: 'Famous Objects' },
                            keywords: [
                                { id: 'alps', name: { ka: 'ალპები', en: 'Alps' } },
                                { id: 'andes', name: { ka: 'ანდები', en: 'Andes' } },
                                { id: 'cordilleras', name: { ka: 'კორდილიერები', en: 'Cordilleras' } },
                                { id: 'caucasus-mountains', name: { ka: 'კავკასიონი', en: 'Caucasus Mountains' } },
                                { id: 'himalayas', name: { ka: 'ჰიმალაი', en: 'Himalayas' } },
                                { id: 'ural-mountains', name: { ka: 'ურალის მთები', en: 'Ural Mountains' } },
                                { id: 'apennines', name: { ka: 'აპენინები', en: 'Apennines' } },
                                { id: 'pyrenees', name: { ka: 'პირენეები', en: 'Pyrenees' } },
                                { id: 'mount-everest', name: { ka: 'ევერესტი (ჯომოლუნგმა)', en: 'Mount Everest (Chomolungma)' } },
                                { id: 'k2', name: { ka: 'K2 (ჩოგორი)', en: 'K2 (Chogori)' } },
                                { id: 'mont-blanc', name: { ka: 'მონბლანი', en: 'Mont Blanc' } },
                                { id: 'kilimanjaro', name: { ka: 'კილიმანჯარო', en: 'Kilimanjaro' } },
                                { id: 'mount-fuji', name: { ka: 'ფუძიამა', en: 'Mount Fuji' } },
                                { id: 'vesuvius', name: { ka: 'ვეზუვი', en: 'Vesuvius' } },
                                { id: 'mount-etna', name: { ka: 'ეტნა', en: 'Mount Etna' } },
                                { id: 'krakatoa', name: { ka: 'კრაკატაუ', en: 'Krakatoa' } },
                                { id: 'grand-canyon', name: { ka: 'დიდი კანიონი', en: 'Grand Canyon' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'hydrosphere',
                    name: { ka: '🌊 ჰიდროსფერო (წყლის ობიექტები)', en: '🌊 Hydrosphere (Water Bodies)' },
                    subSections: [
                        {
                            id: 'hydrosphere-keywords',
                            name: { ka: 'საკვანძო სიტყვები', en: 'Keywords' },
                            keywords: [
                                { id: 'river', name: { ka: 'მდინარე', en: 'River' } },
                                { id: 'source-of-river', name: { ka: 'სათავე', en: 'Source (of a river)' } },
                                { id: 'estuary', name: { ka: 'შესართავი', en: 'Estuary / River Mouth' } },
                                { id: 'tributary', name: { ka: 'შენაკადი', en: 'Tributary' } },
                                { id: 'delta', name: { ka: 'დელტა', en: 'Delta' } },
                                { id: 'rapids', name: { ka: 'ჭორომი', en: 'Rapids' } },
                                { id: 'lake', name: { ka: 'ტბა', en: 'Lake' } },
                                { id: 'sea', name: { ka: 'ზღვა', en: 'Sea' } },
                                { id: 'gulf-bay', name: { ka: 'ყურე', en: 'Gulf / Bay' } },
                                { id: 'strait', name: { ka: 'სრუტე', en: 'Strait' } },
                                { id: 'waterfall', name: { ka: 'ჩანჩქერი', en: 'Waterfall' } },
                                { id: 'reservoir', name: { ka: 'წყალსაცავი', en: 'Reservoir' } },
                                { id: 'swamp-marsh', name: { ka: 'ჭაობი', en: 'Swamp / Marsh' } },
                                { id: 'lagoon', name: { ka: 'ლაგუნა', en: 'Lagoon' } },
                                { id: 'liman', name: { ka: 'ლიმანი', en: 'Liman' } },
                                { id: 'oasis', name: { ka: 'ოაზისი', en: 'Oasis' } },
                                { id: 'artesian-well', name: { ka: 'არტეზიული ჭა', en: 'Artesian Well' } },
                                { id: 'groundwater', name: { ka: 'გრუნტის წყლები', en: 'Groundwater' } },
                                { id: 'river-basin', name: { ka: 'მდინარის აუზი', en: 'River Basin' } },
                                { id: 'watershed', name: { ka: 'წყალგამყოფი', en: 'Watershed' } },
                                { id: 'aquatory', name: { ka: 'აკვატორია', en: 'Aquatory / Water Area' } },
                            ]
                        },
                        {
                            id: 'hydrosphere-famous-objects',
                            name: { ka: 'ცნობილი ობიექტები', en: 'Famous Objects' },
                            keywords: [
                                { id: 'nile', name: { ka: 'ნილოსი', en: 'Nile' } },
                                { id: 'amazon', name: { ka: 'ამაზონი', en: 'Amazon' } },
                                { id: 'mississippi', name: { ka: 'მისისიპი', en: 'Mississippi' } },
                                { id: 'yangtze', name: { ka: 'იანძი', en: 'Yangtze' } },
                                { id: 'ganges', name: { ka: 'განგი', en: 'Ganges' } },
                                { id: 'danube', name: { ka: 'დუნაი', en: 'Danube' } },
                                { id: 'volga', name: { ka: 'ვოლგა', en: 'Volga' } },
                                { id: 'congo', name: { ka: 'კონგო', en: 'Congo' } },
                                { id: 'rhine', name: { ka: 'რაინი', en: 'Rhine' } },
                                { id: 'baikal', name: { ka: 'ბაიკალი', en: 'Baikal' } },
                                { id: 'caspian-sea', name: { ka: 'კასპიის ზღვა', en: 'Caspian Sea' } },
                                { id: 'aral-sea', name: { ka: 'არალის ზღვა', en: 'Aral Sea' } },
                                { id: 'lake-victoria', name: { ka: 'ვიქტორიას ტბა', en: 'Lake Victoria' } },
                                { id: 'lake-tanganyika', name: { ka: 'ტანგანიიკა', en: 'Lake Tanganyika' } },
                                { id: 'great-lakes', name: { ka: 'დიდი ტბები', en: 'Great Lakes' } },
                                { id: 'black-sea', name: { ka: 'შავი ზღვა', en: 'Black Sea' } },
                                { id: 'mediterranean-sea', name: { ka: 'ხმელთაშუა ზღვა', en: 'Mediterranean Sea' } },
                                { id: 'caribbean-sea', name: { ka: 'კარიბის ზღვა', en: 'Caribbean Sea' } },
                                { id: 'red-sea', name: { ka: 'წითელი ზღვა', en: 'Red Sea' } },
                                { id: 'strait-of-gibraltar', name: { ka: 'გიბრალტარის სრუტე', en: 'Strait of Gibraltar' } },
                                { id: 'english-channel', name: { ka: 'ლა-მანში', en: 'English Channel' } },
                                { id: 'suez-canal', name: { ka: 'სუეცის არხი', en: 'Suez Canal' } },
                                { id: 'panama-canal', name: { ka: 'პანამის არხი', en: 'Panama Canal' } },
                                { id: 'niagara-falls', name: { ka: 'ნიაგარას ჩანჩქერი', en: 'Niagara Falls' } },
                                { id: 'angel-falls', name: { ka: 'ანხელის ჩანჩქერი', en: 'Angel Falls' } },
                                { id: 'iguazu-falls', name: { ka: 'იგუასუს ჩანჩქერი', en: 'Iguazu Falls' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'islands-archipelagos',
                    name: { ka: '🏝️ კუნძულები და არქიპელაგები', en: '🏝️ Islands and Archipelagos' },
                    subSections: [
                        {
                            id: 'islands-keywords',
                            name: { ka: 'საკვანძო სიტყვები', en: 'Keywords' },
                            keywords: [
                                { id: 'island', name: { ka: 'კუნძული (კონტინენტური, ვულკანური)', en: 'Island (continental, volcanic)' } },
                                { id: 'peninsula', name: { ka: 'ნახევარკუნძული', en: 'Peninsula' } },
                                { id: 'archipelago', name: { ka: 'არქიპელაგი', en: 'Archipelago' } },
                                { id: 'atoll', name: { ka: 'ატოლი', en: 'Atoll' } },
                                { id: 'coral-reef', name: { ka: 'მარჯნის რიფი', en: 'Coral Reef' } },
                                { id: 'cape', name: { ka: 'კონცხი', en: 'Cape' } },
                            ]
                        },
                        {
                            id: 'islands-famous-objects',
                            name: { ka: 'ცნობილი ობიექტები', en: 'Famous Objects' },
                            keywords: [
                                { id: 'greenland', name: { ka: 'გრენლანდია', en: 'Greenland' } },
                                { id: 'madagascar', name: { ka: 'მადაგასკარი', en: 'Madagascar' } },
                                { id: 'great-britain', name: { ka: 'დიდი ბრიტანეთი', en: 'Great Britain' } },
                                { id: 'japan', name: { ka: 'იაპონია', en: 'Japan' } },
                                { id: 'philippines', name: { ka: 'ფილიპინები', en: 'Philippines' } },
                                { id: 'indonesia', name: { ka: 'ინდონეზია', en: 'Indonesia' } },
                                { id: 'cuba', name: { ka: 'კუბა', en: 'Cuba' } },
                                { id: 'iceland', name: { ka: 'ისლანდია', en: 'Iceland' } },
                                { id: 'new-guinea', name: { ka: 'ახალი გვინეა', en: 'New Guinea' } },
                                { id: 'hawaii', name: { ka: 'ჰავაი', en: 'Hawaii' } },
                                { id: 'maldives', name: { ka: 'მალდივები', en: 'Maldives' } },
                                { id: 'caribbean-islands', name: { ka: 'კარიბის კუნძულები', en: 'Caribbean Islands' } },
                                { id: 'balkan-peninsula', name: { ka: 'ბალკანეთის ნახევარკუნძული', en: 'Balkan Peninsula' } },
                                { id: 'scandinavian-peninsula', name: { ka: 'სკანდინავიის ნახევარკუნძული', en: 'Scandinavian Peninsula' } },
                                { id: 'arabian-peninsula', name: { ka: 'არაბეთის ნახევარკუნძული', en: 'Arabian Peninsula' } },
                                { id: 'kamchatka-peninsula', name: { ka: 'კამჩატკის ნახევარკუნძული', en: 'Kamchatka Peninsula' } },
                                { id: 'iberian-peninsula', name: { ka: 'პირენეის ნახევარკუნძული', en: 'Iberian Peninsula' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'climate-natural-zones',
                    name: { ka: '☀️ კლიმატი და ბუნებრივი ზონები', en: '☀️ Climate and Natural Zones' },
                    subSections: [
                        {
                            id: 'climate-keywords',
                            name: { ka: 'საკვანძო სიტყვები', en: 'Keywords' },
                            keywords: [
                                { id: 'climate', name: { ka: 'კლიმატი', en: 'Climate' } },
                                { id: 'weather', name: { ka: 'ამინდი', en: 'Weather' } },
                                { id: 'climatic-zone', name: { ka: 'კლიმატური სარტყელი (ეკვატორული, ტროპიკული, სუბტროპიკული, ზომიერი, სუბარქტიკული, არქტიკული)', en: 'Climatic zone (equatorial, tropical, subtropical, temperate, subarctic, arctic)' } },
                                { id: 'atmospheric-front', name: { ka: 'ატმოსფერული ფრონტი', en: 'Atmospheric Front' } },
                                { id: 'temperature-inversion', name: { ka: 'ტემპერატურული ინვერსია', en: 'Temperature Inversion' } },
                                { id: 'precipitation', name: { ka: 'ნალექი', en: 'Precipitation' } },
                                { id: 'evaporation', name: { ka: 'აორთქლება', en: 'Evaporation' } },
                                { id: 'condensation', name: { ka: 'კონდენსაცია', en: 'Condensation' } },
                                { id: 'humidity', name: { ka: 'ტენიანობა', en: 'Humidity' } },
                                { id: 'cyclone', name: { ka: 'ციკლონი', en: 'Cyclone' } },
                                { id: 'anticyclone', name: { ka: 'ანტიციკლონი', en: 'Anticyclone' } },
                                { id: 'tornado', name: { ka: 'ტორნადო', en: 'Tornado' } },
                                { id: 'hurricane-storm', name: { ka: 'ქარიშხალი', en: 'Hurricane / Storm' } },
                                { id: 'monsoon', name: { ka: 'მუსონი', en: 'Monsoon' } },
                                { id: 'trade-wind', name: { ka: 'პასატი', en: 'Trade Wind' } },
                                { id: 'natural-zone', name: { ka: 'ბუნებრივი ზონა', en: 'Natural Zone' } },
                                { id: 'tundra', name: { ka: 'ტუნდრა', en: 'Tundra' } },
                                { id: 'taiga', name: { ka: 'ტაიგა', en: 'Taiga' } },
                                { id: 'steppe', name: { ka: 'სტეპი', en: 'Steppe' } },
                                { id: 'prairie', name: { ka: 'პრერია', en: 'Prairie' } },
                                { id: 'savanna', name: { ka: 'სავანა', en: 'Savanna' } },
                                { id: 'desert', name: { ka: 'უდაბნო', en: 'Desert' } },
                                { id: 'semi-desert', name: { ka: 'ნახევარუდაბნო', en: 'Semi-desert' } },
                                { id: 'jungle', name: { ka: 'ჯუნგლები', en: 'Jungle' } },
                                { id: 'equatorial-forest', name: { ka: 'ეკვატორული ტყე', en: 'Equatorial Forest' } },
                                { id: 'monsoon-forest', name: { ka: 'მუსონური ტყე', en: 'Monsoon Forest' } },
                                { id: 'mediterranean-vegetation', name: { ka: 'ხმელთაშუაზღვიური მცენარეულობა', en: 'Mediterranean vegetation' } },
                            ]
                        },
                        {
                            id: 'climate-famous-objects',
                            name: { ka: 'ცნობილი ობიექტები', en: 'Famous Objects' },
                            keywords: [
                                { id: 'sahara', name: { ka: 'საჰარა', en: 'Sahara' } },
                                { id: 'gobi', name: { ka: 'გობი', en: 'Gobi' } },
                                { id: 'kalahari', name: { ka: 'კალაჰარი', en: 'Kalahari' } },
                                { id: 'atacama', name: { ka: 'ატაკამა', en: 'Atacama' } },
                                { id: 'arabian-desert', name: { ka: 'არაბეთის უდაბნო', en: 'Arabian Desert' } },
                                { id: 'amazon-jungle', name: { ka: 'ამაზონის ჯუნგლები', en: 'Amazon Jungle' } },
                                { id: 'congo-basin', name: { ka: 'კონგოს აუზი', en: 'Congo Basin' } },
                                { id: 'siberian-taiga', name: { ka: 'ციმბირის ტაიგა', en: 'Siberian Taiga' } },
                                { id: 'african-savanna', name: { ka: 'აფრიკული სავანა', en: 'African Savanna' } },
                                { id: 'argentine-pampas', name: { ka: 'არგენტინული პამპასები', en: 'Argentine Pampas' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'human-geography',
            name: { ka: '🗺️ II. ადამიანის გეოგრაფია', en: '🗺️ II. Human Geography' },
            sections: [
                {
                    id: 'political-geography',
                    name: { ka: '🏛️ პოლიტიკური გეოგრაფია', en: '🏛️ Political Geography' },
                    subSections: [
                        {
                            id: 'countries-territories',
                            name: { ka: 'ქვეყნები და ტერიტორიები', en: 'Countries and Territories' },
                            keywords: [
                                { id: 'country', name: { ka: 'ქვეყანა', en: 'Country' } },
                                { id: 'state', name: { ka: 'სახელმწიფო', en: 'State' } },
                                { id: 'border', name: { ka: 'საზღვარი (სახმელეთო, საზღვაო)', en: 'Border (land, maritime)' } },
                                { id: 'territorial-waters', name: { ka: 'ტერიტორიული წყლები', en: 'Territorial Waters' } },
                                { id: 'airspace', name: { ka: 'საჰაერო სივრცე', en: 'Airspace' } },
                                { id: 'sovereignty', name: { ka: 'სუვერენიტეტი', en: 'Sovereignty' } },
                                { id: 'republic', name: { ka: 'რესპუბლიკა', en: 'Republic' } },
                                { id: 'monarchy', name: { ka: 'მონარქია', en: 'Monarchy' } },
                                { id: 'federation', name: { ka: 'ფედერაცია', en: 'Federation' } },
                                { id: 'confederation', name: { ka: 'კონფედერაცია', en: 'Confederation' } },
                                { id: 'unitary-state', name: { ka: 'უნიტარული სახელმწიფო', en: 'Unitary State' } },
                                { id: 'empire', name: { ka: 'იმპერია', en: 'Empire' } },
                                { id: 'colony', name: { ka: 'კოლონია', en: 'Colony' } },
                                { id: 'protectorate', name: { ka: 'პროტექტორატი', en: 'Protectorate' } },
                                { id: 'autonomous-region', name: { ka: 'ავტონომიური რეგიონი', en: 'Autonomous Region' } },
                                { id: 'dependent-territory', name: { ka: 'დამოკიდებული ტერიტორია', en: 'Dependent Territory' } },
                                { id: 'enclave', name: { ka: 'ანკლავი', en: 'Enclave' } },
                                { id: 'exclave', name: { ka: 'ექსკლავი', en: 'Exclave' } },
                                { id: 'buffer-zone', name: { ka: 'ბუფერული ზონა', en: 'Buffer Zone' } },
                                { id: 'demilitarized-zone', name: { ka: 'დემილიტარიზებული ზონა', en: 'Demilitarized Zone' } },
                                { id: 'annexation', name: { ka: 'ანექსია', en: 'Annexation' } },
                                { id: 'secession-geo', name: { ka: 'სეცესია', en: 'Secession' } },
                                { id: 'geopolitics-geo', name: { ka: 'გეოპოლიტიკა', en: 'Geopolitics' } },
                            ]
                        },
                        {
                            id: 'administrative-units',
                            name: { ka: 'ადმინისტრაციული ერთეულები', en: 'Administrative Units' },
                            keywords: [
                                { id: 'capital', name: { ka: 'დედაქალაქი', en: 'Capital' } },
                                { id: 'city', name: { ka: 'ქალაქი', en: 'City' } },
                                { id: 'region', name: { ka: 'რეგიონი', en: 'Region' } },
                                { id: 'province', name: { ka: 'პროვინცია', en: 'Province' } },
                                { id: 'state-admin', name: { ka: 'შტატი', en: 'State' } },
                                { id: 'district', name: { ka: 'ოლქი', en: 'District' } },
                                { id: 'municipality', name: { ka: 'მუნიციპალიტეტი', en: 'Municipality' } },
                                { id: 'metropolis', name: { ka: 'მეტროპოლისი', en: 'Metropolis' } },
                                { id: 'agglomeration', name: { ka: 'აგლომერაცია', en: 'Agglomeration' } },
                                { id: 'megalopolis-admin', name: { ka: 'მეგაპოლისი', en: 'Megalopolis' } },
                            ]
                        },
                        {
                            id: 'state-symbols',
                            name: { ka: 'სახელმწიფო სიმბოლოები', en: 'State Symbols' },
                            keywords: [
                                { id: 'flag', name: { ka: 'დროშა', en: 'Flag' } },
                                { id: 'coat-of-arms', name: { ka: 'გერბი', en: 'Coat of Arms' } },
                                { id: 'anthem', name: { ka: 'ჰიმნი', en: 'Anthem' } },
                                { id: 'motto', name: { ka: 'დევიზი', en: 'Motto' } },
                                { id: 'national-symbol', name: { ka: 'ეროვნული სიმბოლო', en: 'National Symbol' } },
                                { id: 'heraldry', name: { ka: 'ჰერალდიკა', en: 'Heraldry' } },
                                { id: 'vexillology', name: { ka: 'ვექსილოლოგია', en: 'Vexillology' } },
                            ]
                        },
                        {
                            id: 'international-organizations-unions',
                            name: { ka: 'საერთაშორისო ორგანიზაციები და კავშირები', en: 'International Organizations and Unions' },
                            keywords: [
                                { id: 'un', name: { ka: 'გაერო (UN)', en: 'United Nations' } },
                                { id: 'eu', name: { ka: 'ევროკავშირი (EU)', en: 'European Union' } },
                                { id: 'nato', name: { ka: 'ნატო (NATO)', en: 'North Atlantic Treaty Organization' } },
                                { id: 'g7-g20', name: { ka: 'დიდი შვიდეული/ოცეული (G7/G20)', en: 'Group of Seven/Twenty' } },
                                { id: 'opec', name: { ka: 'OPEC', en: 'Organization of the Petroleum Exporting Countries' } },
                                { id: 'brics', name: { ka: 'BRICS', en: 'BRICS' } },
                                { id: 'asean', name: { ka: 'ASEAN', en: 'Association of Southeast Asian Nations' } },
                                { id: 'african-union', name: { ka: 'აფრიკის კავშირი', en: 'African Union' } },
                                { id: 'arab-league', name: { ka: 'არაბული ლიგა', en: 'Arab League' } },
                                { id: 'red-cross-red-crescent', name: { ka: 'წითელი ჯვარი და წითელი ნახევარმთვარე', en: 'Red Cross and Red Crescent' } },
                                { id: 'unesco', name: { ka: 'იუნესკო (UNESCO)', en: 'UNESCO' } },
                                { id: 'world-bank', name: { ka: 'მსოფლიო ბანკი', en: 'World Bank' } },
                                { id: 'wto', name: { ka: 'მსოფლიო სავაჭრო ორგანიზაცია (WTO)', en: 'World Trade Organization' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'social-cultural-geography',
                    name: { ka: '🏘️ სოციალური და კულტურული გეოგრაფია', en: '🏘️ Social and Cultural Geography' },
                    subSections: [
                        {
                            id: 'demography-population',
                            name: { ka: 'დემოგრაფია და მოსახლეობა', en: 'Demography and Population' },
                            keywords: [
                                { id: 'population', name: { ka: 'მოსახლეობა', en: 'Population' } },
                                { id: 'population-explosion', name: { ka: 'დემოგრაფიული აფეთქება', en: 'Population Explosion' } },
                                { id: 'census', name: { ka: 'მოსახლეობის აღწერა', en: 'Census' } },
                                { id: 'demographic-transition', name: { ka: 'დემოგრაფიული გადასვლა', en: 'Demographic Transition' } },
                                { id: 'age-pyramid', name: { ka: 'ასაკობრივი პირამიდა', en: 'Age Pyramid' } },
                                { id: 'birth-rate', name: { ka: 'შობადობა', en: 'Birth Rate' } },
                                { id: 'mortality-rate', name: { ka: 'სიკვდილიანობა', en: 'Mortality Rate' } },
                                { id: 'migration-demo', name: { ka: 'მიგრაცია', en: 'Migration' } },
                                { id: 'emigration', name: { ka: 'ემიგრაცია', en: 'Emigration' } },
                                { id: 'immigration', name: { ka: 'იმიგრაცია', en: 'Immigration' } },
                                { id: 'diaspora', name: { ka: 'დიასპორა', en: 'Diaspora' } },
                                { id: 'urbanization-demo', name: { ka: 'ურბანიზაცია', en: 'Urbanization' } },
                                { id: 'suburbanization', name: { ka: 'სუბურბანიზაცია', en: 'Suburbanization' } },
                                { id: 'population-density', name: { ka: 'მოსახლეობის სიმჭიდროვე', en: 'Population Density' } },
                                { id: 'ethnic-group', name: { ka: 'ეთნიკური ჯგუფი', en: 'Ethnic Group' } },
                                { id: 'race-demo', name: { ka: 'რასა', en: 'Race' } },
                                { id: 'nation', name: { ka: 'ერი', en: 'Nation' } },
                                { id: 'indigenous-population', name: { ka: 'ძირძველი მოსახლეობა', en: 'Indigenous Population' } },
                                { id: 'identity-demo', name: { ka: 'იდენტობა', en: 'Identity' } },
                            ]
                        },
                        {
                            id: 'languages-religions',
                            name: { ka: 'ენები და რელიგიები', en: 'Languages and Religions' },
                            keywords: [
                                { id: 'language-family-geo', name: { ka: 'ენათა ოჯახი', en: 'Language Family' } },
                                { id: 'world-languages-geo', name: { ka: 'მსოფლიო ენები', en: 'World Languages' } },
                                { id: 'official-language', name: { ka: 'ოფიციალური ენა', en: 'Official Language' } },
                                { id: 'dialect-geo', name: { ka: 'დიალექტი', en: 'Dialect' } },
                                { id: 'lingua-franca', name: { ka: 'ლინგვა ფრანკა', en: 'Lingua Franca' } },
                                { id: 'world-religions', name: { ka: 'მსოფლიო რელიგიები (ქრისტიანობა, ისლამი, იუდაიზმი, ბუდიზმი, ინდუიზმი)', en: 'World Religions (Christianity, Islam, Judaism, Buddhism, Hinduism)' } },
                                { id: 'denomination', name: { ka: 'კონფესია', en: 'Denomination' } },
                                { id: 'cultural-diffusion-geo', name: { ka: 'კულტურული დიფუზია', en: 'Cultural Diffusion' } },
                            ]
                        },
                        {
                            id: 'historical-regions-civilizations',
                            name: { ka: 'ისტორიული რეგიონები და ცივილიზაციები', en: 'Historical Regions and Civilizations' },
                            keywords: [
                                { id: 'mesopotamia-geo', name: { ka: 'შუამდინარეთი (მესოპოტამია)', en: 'Mesopotamia' } },
                                { id: 'ancient-egypt-geo', name: { ka: 'ძველი ეგვიპტე', en: 'Ancient Egypt' } },
                                { id: 'ancient-greece-geo', name: { ka: 'ძველი საბერძნეთი', en: 'Ancient Greece' } },
                                { id: 'roman-empire-geo', name: { ka: 'რომის იმპერია', en: 'Roman Empire' } },
                                { id: 'persian-empire-geo', name: { ka: 'სპარსეთის იმპერია', en: 'Persian Empire' } },
                                { id: 'babylon', name: { ka: 'ბაბილონი', en: 'Babylon' } },
                                { id: 'ottoman-empire-geo', name: { ka: 'ოსმალეთის იმპერია', en: 'Ottoman Empire' } },
                                { id: 'byzantine-empire-geo', name: { ka: 'ბიზანტიის იმპერია', en: 'Byzantine Empire' } },
                                { id: 'mongol-empire-geo', name: { ka: 'მონღოლთა იმპერია', en: 'Mongol Empire' } },
                                { id: 'maya-civilization', name: { ka: 'მაიას ცივილიზაცია', en: 'Maya Civilization' } },
                                { id: 'aztec-empire', name: { ka: 'აცტეკების იმპერია', en: 'Aztec Empire' } },
                                { id: 'inca-empire', name: { ka: 'ინკების იმპერია', en: 'Inca Empire' } },
                                { id: 'silk-road-geo', name: { ka: 'აბრეშუმის გზა', en: 'Silk Road' } },
                                { id: 'phoenicia', name: { ka: 'ფინიკია', en: 'Phoenicia' } },
                                { id: 'carthage-geo', name: { ka: 'კართაგენი', en: 'Carthage' } },
                                { id: 'sparta', name: { ka: 'სპარტა', en: 'Sparta' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'economic-geography',
                    name: { ka: '📈 ეკონომიკური გეოგრაფია', en: '📈 Economic Geography' },
                    subSections: [
                        {
                            id: 'economic-geography-keywords',
                            name: { ka: 'საკვანძო სიტყვები', en: 'Keywords' },
                            keywords: [
                                { id: 'sectors-of-economy', name: { ka: 'ეკონომიკის სექტორები (პირველადი, მეორეული, მესამეული)', en: 'Sectors of the economy (primary, secondary, tertiary)' } },
                                { id: 'natural-resource-econ', name: { ka: 'ბუნებრივი რესურსი', en: 'Natural Resource' } },
                                { id: 'mineral-resource-econ', name: { ka: 'წიაღისეული', en: 'Mineral Resource' } },
                                { id: 'agriculture-econ-geo', name: { ka: 'სოფლის მეურნეობა (აგროკულტურა)', en: 'Agriculture' } },
                                { id: 'industry-econ-geo', name: { ka: 'მრეწველობა', en: 'Industry' } },
                                { id: 'energy-resources', name: { ka: 'ენერგორესურსები (ნავთობი, გაზი, ქვანახშირი)', en: 'Energy Resources (oil, gas, coal)' } },
                                { id: 'heavy-light-industry', name: { ka: 'მძიმე/მსუბუქი მრეწველობა', en: 'Heavy/Light Industry' } },
                                { id: 'tourism-econ-geo', name: { ka: 'ტურიზმი', en: 'Tourism' } },
                                { id: 'infrastructure-econ-geo', name: { ka: 'ინფრასტრუქტურა', en: 'Infrastructure' } },
                                { id: 'transport-hub', name: { ka: 'სატრანსპორტო კვანძი', en: 'Transport Hub' } },
                                { id: 'port-econ-geo', name: { ka: 'პორტი', en: 'Port' } },
                                { id: 'trade-route', name: { ka: 'სავაჭრო გზა', en: 'Trade Route' } },
                                { id: 'globalization-econ-geo', name: { ka: 'გლობალიზაცია', en: 'Globalization' } },
                                { id: 'logistics-econ-geo', name: { ka: 'ლოგისტიკა', en: 'Logistics' } },
                                { id: 'free-economic-zone', name: { ka: 'თავისუფალი ეკონომიკური ზონა', en: 'Free Economic Zone' } },
                                { id: 'import', name: { ka: 'იმპორტი', en: 'Import' } },
                                { id: 'export', name: { ka: 'ექსპორტი', en: 'Export' } },
                                { id: 'supply-chain', name: { ka: 'მიწოდების ჯაჭვი', en: 'Supply Chain' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'world-landmarks-heritage',
            name: { ka: '📍 III. მსოფლიოს ღირსშესანიშნაობები და მემკვიდრეობა', en: '📍 III. World Landmarks and Heritage' },
            sections: [
                {
                    id: 'wonders-famous-sites',
                    name: { ka: '🌟 მსოფლიოს საოცრებები და ცნობილი ადგილები', en: '🌟 Wonders of the World and Famous Sites' },
                    subSections: [
                        {
                            id: 'wonders-keywords',
                            name: { ka: 'საკვანძო სიტყვები', en: 'Keywords' },
                            keywords: [
                                { id: 'seven-wonders', name: { ka: 'მსოფლიოს შვიდი საოცრება (ანტიკური და თანამედროვე)', en: 'Seven Wonders of the World (ancient and new)' } },
                                { id: 'unesco-world-heritage', name: { ka: 'იუნესკოს მსოფლიო მემკვიდრეობა', en: 'UNESCO World Heritage' } },
                                { id: 'natural-monument', name: { ka: 'ბუნების ძეგლი', en: 'Natural Monument' } },
                                { id: 'architectural-monument', name: { ka: 'არქიტექტურული ძეგლი', en: 'Architectural Monument' } },
                                { id: 'cultural-landscape', name: { ka: 'კულტურული ლანდშაფტი', en: 'Cultural Landscape' } },
                                { id: 'pyramids-of-giza', name: { ka: 'გიზას პირამიდები', en: 'Pyramids of Giza' } },
                                { id: 'great-wall-of-china', name: { ka: 'ჩინეთის დიდი კედელი', en: 'Great Wall of China' } },
                                { id: 'colosseum-landmark', name: { ka: 'კოლიზეუმი', en: 'Colosseum' } },
                                { id: 'petra', name: { ka: 'პეტრა', en: 'Petra' } },
                                { id: 'taj-mahal', name: { ka: 'თაჯ-მაჰალი', en: 'Taj Mahal' } },
                                { id: 'machu-picchu', name: { ka: 'მაჩუ-პიქჩუ', en: 'Machu Picchu' } },
                                { id: 'chichen-itza', name: { ka: 'ჩიჩენ-იცა', en: 'Chichen Itza' } },
                                { id: 'christ-the-redeemer', name: { ka: 'ქრისტეს ქანდაკება (რიო-დე-ჟანეირო)', en: 'Christ the Redeemer' } },
                                { id: 'eiffel-tower', name: { ka: 'ეიფელის კოშკი', en: 'Eiffel Tower' } },
                                { id: 'statue-of-liberty', name: { ka: 'თავისუფლების ქანდაკება', en: 'Statue of Liberty' } },
                                { id: 'stonehenge', name: { ka: 'სტოუნჰენჯი', en: 'Stonehenge' } },
                                { id: 'angkor-wat', name: { ka: 'ანგკორ-ვატი', en: 'Angkor Wat' } },
                                { id: 'acropolis-of-athens', name: { ka: 'ათენის აკროპოლისი', en: 'Acropolis of Athens' } },
                                { id: 'kremlin', name: { ka: 'კრემლი', en: 'Kremlin' } },
                                { id: 'hagia-sophia', name: { ka: 'აია-სოფია', en: 'Hagia Sophia' } },
                                { id: 'easter-island-moai', name: { ka: 'აღდგომის კუნძულის ქანდაკებები (მოაი)', en: 'Easter Island Moai' } },
                                { id: 'palace-of-versailles', name: { ka: 'ვერსალის სასახლე', en: 'Palace of Versailles' } },
                                { id: 'great-barrier-reef', name: { ka: 'დიდი ბარიერული რიფი', en: 'Great Barrier Reef' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'geographical-concepts-cartography',
            name: { ka: '🧭 IV. გეოგრაფიული ცნებები და კარტოგრაფია', en: '🧭 IV. Geographical Concepts and Cartography' },
            sections: [
                {
                    id: 'maps-geographic-coordinates',
                    name: { ka: '🗺️ რუკები და გეოგრაფიული კოორდინატები', en: '🗺️ Maps and Geographic Coordinates' },
                    subSections: [
                        {
                            id: 'maps-keywords',
                            name: { ka: 'საკვანძო სიტყვები', en: 'Keywords' },
                            keywords: [
                                { id: 'map-types', name: { ka: 'რუკა (ფიზიკური, პოლიტიკური, ტოპოგრაფიული, კლიმატური, თემატური, სინოპტიკური)', en: 'Map (physical, political, topographic, climatic, thematic, synoptic)' } },
                                { id: 'atlas-geo', name: { ka: 'ატლასი', en: 'Atlas' } },
                                { id: 'globe-geo', name: { ka: 'გლობუსი', en: 'Globe' } },
                                { id: 'cartography', name: { ka: 'კარტოგრაფია', en: 'Cartography' } },
                                { id: 'map-projection', name: { ka: 'კარტოგრაფიული პროექცია (მერკატორის, პეტერსის)', en: 'Map Projection (Mercator, Peters)' } },
                                { id: 'scale-geo', name: { ka: 'მასშტაბი', en: 'Scale' } },
                                { id: 'map-symbol', name: { ka: 'პირობითი ნიშანი', en: 'Map Symbol' } },
                                { id: 'legend', name: { ka: 'ლეგენდა', en: 'Legend' } },
                                { id: 'isoline', name: { ka: 'იზოლინია', en: 'Isoline' } },
                                { id: 'contour-line', name: { ka: 'ჰორიზონტალი', en: 'Contour Line' } },
                                { id: 'meridian', name: { ka: 'მერიდიანი', en: 'Meridian' } },
                                { id: 'parallel', name: { ka: 'პარალელი', en: 'Parallel' } },
                                { id: 'equator-geo', name: { ka: 'ეკვატორი', en: 'Equator' } },
                                { id: 'longitude-geo', name: { ka: 'გრძედი', en: 'Longitude' } },
                                { id: 'latitude-geo', name: { ka: 'განედი', en: 'Latitude' } },
                                { id: 'geographic-coordinates', name: { ka: 'გეოგრაფიული კოორდინატები', en: 'Geographic Coordinates' } },
                                { id: 'pole', name: { ka: 'პოლუსი (ჩრდილოეთი/სამხრეთი)', en: 'Pole (North/South)' } },
                                { id: 'hemisphere', name: { ka: 'ნახევარსფერო', en: 'Hemisphere' } },
                                { id: 'time-zone', name: { ka: 'სასაათო სარტყელი', en: 'Time Zone' } },
                                { id: 'prime-meridian', name: { ka: 'გრინვიჩის მერიდიანი', en: 'Prime Meridian' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'modern-technologies-concepts',
                    name: { ka: '📡 თანამედროვე ტექნოლოგიები და ცნებები', en: '📡 Modern Technologies and Concepts' },
                    subSections: [
                        {
                            id: 'modern-tech-keywords',
                            name: { ka: 'საკვანძო სიტყვები', en: 'Keywords' },
                            keywords: [
                                { id: 'gis-tech', name: { ka: 'გეოინფორმაციული სისტემა (GIS)', en: 'Geographic Information System' } },
                                { id: 'gps-tech', name: { ka: 'გლობალური პოზიციონირების სისტემა (GPS)', en: 'Global Positioning System' } },
                                { id: 'satellite-navigation-tech', name: { ka: 'სატელიტური ნავიგაცია', en: 'Satellite Navigation' } },
                                { id: 'remote-sensing-tech', name: { ka: 'დისტანციური ზონდირება', en: 'Remote Sensing' } },
                                { id: 'satellite-image-tech', name: { ka: 'სატელიტური სურათი', en: 'Satellite Image' } },
                                { id: 'geodatabase', name: { ka: 'გეომონაცემთა ბაზა', en: 'Geodatabase' } },
                                { id: 'relief-tech', name: { ka: 'რელიეფი', en: 'Relief / Terrain' } },
                                { id: 'landscape-tech', name: { ka: 'ლანდშაფტი', en: 'Landscape' } },
                                { id: 'azimuth', name: { ka: 'აზიმუტი', en: 'Azimuth' } },
                                { id: 'compass', name: { ka: 'კომპასი', en: 'Compass' } },
                                { id: 'horizon', name: { ka: 'ჰორიზონტი', en: 'Horizon' } },
                            ]
                        }
                    ]
                }
            ]
        }
    ],
};
