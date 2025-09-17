import { Category } from '../types';

export const LIFESTYLE_CATEGORY: Category = {
    id: 'lifestyle',
    name: { ka: '🌿 ცხოვრების სტილი', en: '🌿 Lifestyle' },
    icon: '🌿',
    subCategories: [
        {
            id: 'culinary-gastronomy',
            name: { ka: '🍽️ კულინარია და გასტრონომია', en: '🍽️ Culinary & Gastronomy' },
            sections: [
                {
                    id: 'culinary-basics',
                    name: { ka: '🍳 I. კულინარიის საფუძვლები', en: '🍳 I. Culinary Basics' },
                    subSections: [
                        {
                            id: 'ingredients-products',
                            name: { ka: '🌿 ინგრედიენტები და პროდუქტები', en: '🌿 Ingredients and Products' },
                            keywords: [
                                { id: 'adjika', name: { ka: 'აჯიკა', en: 'Adjika (Spicy Georgian paste)' } },
                                { id: 'star-anise', name: { ka: 'ბადიანი', en: 'Star Anise' } },
                                { id: 'barbecue-sauce', name: { ka: 'ბარბექიუ სოუსი', en: 'Barbecue Sauce' } },
                                { id: 'bechamel', name: { ka: 'ბეშამელი', en: 'Béchamel' } },
                                { id: 'cinnamon', name: { ka: 'დარიჩინი', en: 'Cinnamon' } },
                                { id: 'vanilla', name: { ka: 'ვანილი', en: 'Vanilla' } },
                                { id: 'saffron', name: { ka: 'ზაფრანა', en: 'Saffron' } },
                                { id: 'cardamom', name: { ka: 'ილი (კარდამონი)', en: 'Cardamom' } },
                                { id: 'dill', name: { ka: 'კამა', en: 'Dill' } },
                                { id: 'ketchup', name: { ka: 'კეტჩუპი', en: 'Ketchup' } },
                                { id: 'turmeric', name: { ka: 'კურკუმა', en: 'Turmeric' } },
                                { id: 'mayonnaise', name: { ka: 'მაიონეზი', en: 'Mayonnaise' } },
                                { id: 'salt', name: { ka: 'მარილი', en: 'Salt' } },
                                { id: 'mustard', name: { ka: 'მდოგვი', en: 'Mustard' } },
                                { id: 'clove', name: { ka: 'მიხაკი', en: 'Clove' } },
                                { id: 'oregano', name: { ka: 'ორეგანო', en: 'Oregano' } },
                                { id: 'parsley', name: { ka: 'ოხრახუში', en: 'Parsley' } },
                                { id: 'paprika', name: { ka: 'პაპრიკა', en: 'Paprika' } },
                                { id: 'pesto', name: { ka: 'პესტო', en: 'Pesto' } },
                                { id: 'pepper', name: { ka: 'პილპილი', en: 'Pepper' } },
                                { id: 'mint', name: { ka: 'პიტნა', en: 'Mint' } },
                                { id: 'basil', name: { ka: 'რეჰანი', en: 'Basil' } },
                                { id: 'rosemary', name: { ka: 'როზმარინი', en: 'Rosemary' } },
                                { id: 'sage', name: { ka: 'სალბი', en: 'Sage' } },
                                { id: 'spice', name: { ka: 'სანელებელი', en: 'Spice' } },
                                { id: 'satsebeli', name: { ka: 'საწებელი', en: 'Satsebeli (Georgian sauce)' } },
                                { id: 'soy-sauce', name: { ka: 'სოიოს სოუსი', en: 'Soy Sauce' } },
                                { id: 'sauce', name: { ka: 'სოუსი', en: 'Sauce' } },
                                { id: 'tarragon', name: { ka: 'ტარხუნა', en: 'Tarragon' } },
                                { id: 'teriyaki', name: { ka: 'ტერიაკი', en: 'Teriyaki' } },
                                { id: 'coriander', name: { ka: 'ქინძი', en: 'Coriander' } },
                                { id: 'savory', name: { ka: 'ქონდარი', en: 'Savory' } },
                                { id: 'caraway', name: { ka: 'შაშკვლავი', en: 'Caraway' } },
                                { id: 'cumin', name: { ka: 'ძირა', en: 'Cumin' } },
                                { id: 'pepper-types', name: { ka: 'წიწაკა (ჩილი, ბულგარული)', en: 'Pepper (Chili, Bell Pepper)' } },
                                { id: 'khmeli-suneli', name: { ka: 'ხმელი სუნელი', en: 'Khmeli Suneli (Georgian spice mix)' } },
                                { id: 'hollandaise', name: { ka: 'ჰოლანდეზი', en: 'Hollandaise' } },
                                { id: 'ginger', name: { ka: 'ჯანჯაფილი (კოჭა)', en: 'Ginger' } },
                                { id: 'vegetables', name: { ka: 'ბოსტნეული', en: 'Vegetables' } },
                                { id: 'cleaning-peeling', name: { ka: 'გასუფთავება', en: 'Cleaning / Peeling' } },
                                { id: 'cutting-chopping', name: { ka: 'დაჭრა', en: 'Cutting / Chopping' } },
                                { id: 'oil', name: { ka: 'ზეთი (ზეითუნის, მზესუმზირის, ქოქოსის)', en: 'Oil (Olive, Sunflower, Coconut)' } },
                                { id: 'seafood', name: { ka: 'ზღვის პროდუქტები (კრევეტი, მიდია, კალმარი, ხამანწკა)', en: 'Seafood (Shrimp, Mussel, Squid, Oyster)' } },
                                { id: 'fish', name: { ka: 'თევზი (ორაგული, თინუსი)', en: 'Fish (Salmon, Tuna)' } },
                                { id: 'berries', name: { ka: 'კენკრა', en: 'Berries' } },
                                { id: 'egg', name: { ka: 'კვერცხი', en: 'Egg' } },
                                { id: 'grains', name: { ka: 'მარცვლეული (ბრინჯი, ხორბალი, ქინოა, შვრია, წიწიბურა)', en: 'Grains (Rice, Wheat, Quinoa, Oats, Buckwheat)' } },
                                { id: 'marinade', name: { ka: 'მარინადი', en: 'Marinade' } },
                                { id: 'legumes', name: { ka: 'პარკოსნები (ლობიო, ოსპი, მუხუდო)', en: 'Legumes (Beans, Lentils, Chickpeas)' } },
                                { id: 'dairy-products', name: { ka: 'რძის პროდუქტები (ყველი, რძე, იოგურტი, ხაჭო, არაჟანი, მაწონი)', en: 'Dairy Products (Cheese, Milk, Yogurt, Cottage Cheese, Sour Cream, Matsoni)' } },
                                { id: 'mushroom-culinary', name: { ka: 'სოკო', en: 'Mushroom' } },
                                { id: 'poultry', name: { ka: 'ფრინველი (ინდაური, იხვი)', en: 'Poultry (Turkey, Duck)' } },
                                { id: 'fruit-culinary', name: { ka: 'ხილი', en: 'Fruit' } },
                                { id: 'meat', name: { ka: 'ხორცი (საქონლის, ღორის, ქათმის, ცხვრის)', en: 'Meat (Beef, Pork, Chicken, Lamb)' } },
                                { id: 'vinegar', name: { ka: 'ძმარი (ვაშლის, ღვინის, ბალზამიკო)', en: 'Vinegar (Apple, Wine, Balsamic)' } },
                            ]
                        },
                        {
                            id: 'culinary-techniques',
                            name: { ka: '🔪 კულინარიული ტექნიკები', en: '🔪 Culinary Techniques' },
                            keywords: [
                                { id: 'blanching', name: { ka: 'ბლანშირება', en: 'Blanching' } },
                                { id: 'baking', name: { ka: 'გამოცხობა', en: 'Baking' } },
                                { id: 'grilling', name: { ka: 'გრილირება', en: 'Grilling' } },
                                { id: 'caramelization', name: { ka: 'კარამელიზაცია', en: 'Caramelization' } },
                                { id: 'confit', name: { ka: 'კონფი', en: 'Confit' } },
                                { id: 'boiling', name: { ka: 'მოხარშვა', en: 'Boiling' } },
                                { id: 'stewing', name: { ka: 'მოშუშვა', en: 'Stewing' } },
                                { id: 'steaming', name: { ka: 'ორთქლზე მოხარშვა', en: 'Steaming' } },
                                { id: 'poaching', name: { ka: 'პოშირება', en: 'Poaching' } },
                                { id: 'sous-vide', name: { ka: 'სუ-ვიდი (Sous-vide)', en: 'Sous-vide' } },
                                { id: 'sautéing', name: { ka: 'სუტირება (Sauté)', en: 'Sautéing' } },
                                { id: 'deep-frying', name: { ka: 'ფრიტიური (ღრმა ცხიმში შეწვა)', en: 'Deep-frying' } },
                                { id: 'braising', name: { ka: 'ჩაშუშვა', en: 'Braising' } },
                                { id: 'frying', name: { ka: 'შეწვა', en: 'Frying' } },
                                { id: 'roasting', name: { ka: 'შებრაწვა', en: 'Roasting' } },
                                { id: 'mincing', name: { ka: 'დაკეპვა (Mince)', en: 'Mincing' } },
                                { id: 'julienne', name: { ka: 'ჟიულიენი (Julienne)', en: 'Julienne' } },
                                { id: 'dicing', name: { ka: 'კუბიკებად დაჭრა (Dice)', en: 'Dicing' } },
                                { id: 'slicing-into-rings', name: { ka: 'რგოლებად დაჭრა', en: 'Slicing into rings' } },
                                { id: 'slicing', name: { ka: 'თხელ ფირფიტებად დაჭრა (Slice)', en: 'Slicing' } },
                                { id: 'batonnet', name: { ka: 'ჩხირებად დაჭრა (Batonnet)', en: 'Batonnet' } },
                                { id: 'drying', name: { ka: 'გამოშრობა', en: 'Drying' } },
                                { id: 'freezing-culinary', name: { ka: 'გაყინვა', en: 'Freezing' } },
                                { id: 'canning-preserving', name: { ka: 'დაკონსერვება', en: 'Canning / Preserving' } },
                                { id: 'salting-curing', name: { ka: 'დამარილება', en: 'Salting / Curing' } },
                                { id: 'pickling', name: { ka: 'დამწნილება', en: 'Pickling' } },
                                { id: 'marinating', name: { ka: 'მარინირება', en: 'Marinating' } },
                                { id: 'fermentation-culinary', name: { ka: 'ფერმენტაცია', en: 'Fermentation' } },
                                { id: 'smoking', name: { ka: 'შებოლვა', en: 'Smoking' } },
                                { id: 'vacuum-sealing', name: { ka: 'ვაკუუმირება', en: 'Vacuum sealing' } },
                            ]
                        },
                        {
                            id: 'pastry-arts-baking',
                            name: { ka: '🍰 საკონდიტრო ხელოვნება (ცხობა)', en: '🍰 Pastry Arts (Baking)' },
                            keywords: [
                                { id: 'sponge-cake-biscuit-dough', name: { ka: 'ბისკვიტი', en: 'Sponge cake / Biscuit dough' } },
                                { id: 'pancake-crepe-batter', name: { ka: 'ბლინის ცომი', en: 'Pancake / Crepe batter' } },
                                { id: 'muffin-cake-batter', name: { ka: 'კექსის ცომი', en: 'Muffin / Cake batter' } },
                                { id: 'yeast-dough', name: { ka: 'საფუვრიანი ცომი', en: 'Yeast dough' } },
                                { id: 'puff-pastry', name: { ka: 'ფენოვანი ცომი', en: 'Puff pastry' } },
                                { id: 'shortcrust-pastry', name: { ka: 'ფხვიერი ცომი', en: 'Shortcrust pastry' } },
                                { id: 'choux-pastry', name: { ka: 'შუს ცომი', en: 'Choux pastry' } },
                                { id: 'pizza-dough', name: { ka: 'პიცის ცომი', en: 'Pizza dough' } },
                                { id: 'meringue', name: { ka: 'ბეზე', en: 'Meringue' } },
                                { id: 'jelly-gelatin', name: { ka: 'ჟელე', en: 'Jelly / Gelatin' } },
                                { id: 'cupcake', name: { ka: 'კაპქეიქი', en: 'Cupcake' } },
                                { id: 'cream-custard', name: { ka: 'კრემი (მოხარშული, კარაქის)', en: 'Cream / Custard (pastry cream, buttercream)' } },
                                { id: 'creme-brulee', name: { ka: 'კრემ-ბრიულე', en: 'Crème brûlée' } },
                                { id: 'muffin', name: { ka: 'მაფინი', en: 'Muffin' } },
                                { id: 'mousse', name: { ka: 'მუსი', en: 'Mousse' } },
                                { id: 'cake-pastry', name: { ka: 'ნამცხვარი', en: 'Cake / Pastry' } },
                                { id: 'panna-cotta', name: { ka: 'პანაკოტა', en: 'Panna cotta' } },
                                { id: 'souffle', name: { ka: 'სუფლე', en: 'Soufflé' } },
                                { id: 'cake', name: { ka: 'ტორტი', en: 'Cake' } },
                                { id: 'pie', name: { ka: 'ღვეზელი', en: 'Pie' } },
                                { id: 'eclair', name: { ka: 'ეკლერი', en: 'Éclair' } },
                                { id: 'ganache', name: { ka: 'განაში', en: 'Ganache' } },
                                { id: 'cocoa', name: { ka: 'კაკაო', en: 'Cocoa' } },
                                { id: 'praline', name: { ka: 'პრალინე', en: 'Praline' } },
                                { id: 'tempering', name: { ka: 'ტემპერირება', en: 'Tempering' } },
                                { id: 'truffle', name: { ka: 'ტრიუფელი', en: 'Truffle' } },
                                { id: 'chocolate-types', name: { ka: 'შოკოლადი (შავი, რძიანი, თეთრი)', en: 'Chocolate (Dark, Milk, White)' } },
                            ]
                        },
                        {
                            id: 'kitchen-equipment',
                            name: { ka: '🍴 სამზარეულოს აღჭურვილობა', en: '🍴 Kitchen Equipment' },
                            keywords: [
                                { id: 'blender', name: { ka: 'ბლენდერი', en: 'Blender' } },
                                { id: 'knife', name: { ka: 'დანა', en: 'Knife' } },
                                { id: 'mixer', name: { ka: 'მიქსერი', en: 'Mixer' } },
                                { id: 'measuring-cup-spoon', name: { ka: 'საზომი ჭურჭელი', en: 'Measuring cup/spoon' } },
                                { id: 'scale', name: { ka: 'სასწორი', en: 'Scale' } },
                                { id: 'sieve-colander', name: { ka: 'საწური', en: 'Sieve / Colander' } },
                                { id: 'grater', name: { ka: 'სახეხი', en: 'Grater' } },
                                { id: 'pan-skillet', name: { ka: 'ტაფა', en: 'Pan / Skillet' } },
                                { id: 'oven', name: { ka: 'ღუმელი', en: 'Oven' } },
                                { id: 'pot', name: { ka: 'ქვაბი', en: 'Pot' } },
                                { id: 'dough-mixer', name: { ka: 'ცომის საზელი', en: 'Dough mixer' } },
                                { id: 'cutting-board', name: { ka: 'საჭრელი დაფა', en: 'Cutting board' } },
                                { id: 'bowl', name: { ka: 'ჯამი', en: 'Bowl' } },
                                { id: 'grill', name: { ka: 'გრილი', en: 'Grill' } },
                                { id: 'toaster', name: { ka: 'ტოსტერი', en: 'Toaster' } },
                                { id: 'microwave-oven', name: { ka: 'მიკროტალღური ღუმელი', en: 'Microwave oven' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'world-cuisines',
                    name: { ka: '🌍 II. მსოფლიო სამზარეულოები', en: '🌍 II. World Cuisines' },
                    subSections: [
                        {
                            id: 'european-cuisine',
                            name: { ka: '🇪🇺 ევროპული', en: '🇪🇺 European' },
                            keywords: [
                                { id: 'french-cuisine', name: { ka: 'ფრანგული', en: 'French' } },
                                { id: 'beef-bourguignon', name: { ka: 'ბეფ-ბურგინიონი', en: 'Beef Bourguignon' } },
                                { id: 'quiche', name: { ka: 'კიში', en: 'Quiche' } },
                                { id: 'croissant', name: { ka: 'კრუასანი', en: 'Croissant' } },
                                { id: 'macaron', name: { ka: 'მაკარონი (დესერტი)', en: 'Macaron' } },
                                { id: 'ratatouille', name: { ka: 'რატატუი', en: 'Ratatouille' } },
                                { id: 'foie-gras', name: { ka: 'ფუა-გრა', en: 'Foie Gras' } },
                                { id: 'onion-soup', name: { ka: 'ხახვის სუპი', en: 'Onion Soup' } },
                                { id: 'italian-cuisine', name: { ka: 'იტალიური', en: 'Italian' } },
                                { id: 'bruschetta', name: { ka: 'ბრუსკეტა', en: 'Bruschetta' } },
                                { id: 'carbonara', name: { ka: 'კარბონარა', en: 'Carbonara' } },
                                { id: 'carpaccio', name: { ka: 'კარპაჩო', en: 'Carpaccio' } },
                                { id: 'lasagna', name: { ka: 'ლაზანია', en: 'Lasagna' } },
                                { id: 'panini', name: { ka: 'პანინი', en: 'Panini' } },
                                { id: 'pasta', name: { ka: 'პასტა', en: 'Pasta' } },
                                { id: 'pizza', name: { ka: 'პიცა', en: 'Pizza' } },
                                { id: 'risotto', name: { ka: 'რიზოტო', en: 'Risotto' } },
                                { id: 'tiramisu', name: { ka: 'ტირამისუ', en: 'Tiramisu' } },
                                { id: 'gelato', name: { ka: 'ჯელატო', en: 'Gelato' } },
                                { id: 'spanish-cuisine', name: { ka: 'ესპანური', en: 'Spanish' } },
                                { id: 'gazpacho', name: { ka: 'გასპაჩო', en: 'Gazpacho' } },
                                { id: 'paella', name: { ka: 'პაელია', en: 'Paella' } },
                                { id: 'tapas', name: { ka: 'ტაპასი', en: 'Tapas' } },
                                { id: 'tortilla', name: { ka: 'ტორტილია', en: 'Tortilla' } },
                                { id: 'jamon', name: { ka: 'ხამონი', en: 'Jamón' } },
                                { id: 'churros', name: { ka: 'ჩუროსი', en: 'Churros' } },
                            ]
                        },
                        {
                            id: 'asian-cuisine',
                            name: { ka: '🌏 აზიური', en: '🌏 Asian' },
                            keywords: [
                                { id: 'chinese-cuisine', name: { ka: 'ჩინური', en: 'Chinese' } },
                                { id: 'dim-sum', name: { ka: 'დიმ-სამი', en: 'Dim Sum' } },
                                { id: 'wok', name: { ka: 'ვოკი', en: 'Wok' } },
                                { id: 'peking-duck', name: { ka: 'პეკინური იხვი', en: 'Peking Duck' } },
                                { id: 'spring-roll', name: { ka: 'სპრინგ-როლი', en: 'Spring Roll' } },
                                { id: 'sweet-sour-chicken', name: { ka: 'ტკბილ-მჟავე ქათამი', en: 'Sweet and Sour Chicken' } },
                                { id: 'japanese-cuisine', name: { ka: 'იაპონური', en: 'Japanese' } },
                                { id: 'miso-soup', name: { ka: 'მისოს სუპი', en: 'Miso Soup' } },
                                { id: 'ramen', name: { ka: 'რამენი', en: 'Ramen' } },
                                { id: 'sashimi', name: { ka: 'საშიმი', en: 'Sashimi' } },
                                { id: 'sushi', name: { ka: 'სუში', en: 'Sushi' } },
                                { id: 'tempura', name: { ka: 'ტემპურა', en: 'Tempura' } },
                                { id: 'teriyaki-jp', name: { ka: 'ტერიაკი', en: 'Teriyaki' } },
                                { id: 'udon', name: { ka: 'უდონი', en: 'Udon' } },
                                { id: 'wasabi', name: { ka: 'ვასაბი', en: 'Wasabi' } },
                                { id: 'thai-cuisine', name: { ka: 'ტაილანდური', en: 'Thai' } },
                                { id: 'mango-sticky-rice', name: { ka: 'მანგოს წებოვანი ბრინჯი', en: 'Mango Sticky Rice' } },
                                { id: 'green-curry', name: { ka: 'მწვანე კარი', en: 'Green Curry' } },
                                { id: 'pad-thai', name: { ka: 'პად-ტაი', en: 'Pad Thai' } },
                                { id: 'tom-yum', name: { ka: 'ტომ-იამი', en: 'Tom Yum' } },
                                { id: 'coconut-milk', name: { ka: 'ქოქოსის რძე', en: 'Coconut Milk' } },
                                { id: 'indian-cuisine', name: { ka: 'ინდური', en: 'Indian' } },
                                { id: 'biryani', name: { ka: 'ბირიანი', en: 'Biryani' } },
                                { id: 'curry', name: { ka: 'კარი', en: 'Curry' } },
                                { id: 'masala', name: { ka: 'მასალა', en: 'Masala' } },
                                { id: 'naan', name: { ka: 'ნაანი', en: 'Naan' } },
                                { id: 'samosa', name: { ka: 'სამოსა', en: 'Samosa' } },
                                { id: 'tandoori', name: { ka: 'ტანდური', en: 'Tandoori' } },
                                { id: 'chutney', name: { ka: 'ჩატნი', en: 'Chutney' } },
                            ]
                        },
                        {
                            id: 'americas-cuisine',
                            name: { ka: '🌎 ამერიკის', en: '🌎 Americas' },
                            keywords: [
                                { id: 'mexican-cuisine', name: { ka: 'მექსიკური', en: 'Mexican' } },
                                { id: 'burrito', name: { ka: 'ბურიტო', en: 'Burrito' } },
                                { id: 'guacamole', name: { ka: 'გუაკამოლე', en: 'Guacamole' } },
                                { id: 'enchilada', name: { ka: 'ენჩილადა', en: 'Enchilada' } },
                                { id: 'quesadilla', name: { ka: 'კესადილია', en: 'Quesadilla' } },
                                { id: 'nachos', name: { ka: 'ნაჩოსი', en: 'Nachos' } },
                                { id: 'taco', name: { ka: 'ტაკო', en: 'Taco' } },
                                { id: 'chili', name: { ka: 'ჩილი', en: 'Chili' } },
                                { id: 'peruvian-cuisine', name: { ka: 'პერუული', en: 'Peruvian' } },
                                { id: 'aji-de-gallina', name: { ka: 'აჯი დე გალინა', en: 'Ají de Gallina' } },
                                { id: 'lomo-saltado', name: { ka: 'ლომო-სალტადო', en: 'Lomo Saltado' } },
                                { id: 'ceviche', name: { ka: 'სევიჩე', en: 'Ceviche' } },
                                { id: 'american-usa-cuisine', name: { ka: 'ამერიკული (აშშ)', en: 'American (USA)' } },
                                { id: 'bbq', name: { ka: 'ბარბექიუ (BBQ)', en: 'Barbecue (BBQ)' } },
                                { id: 'brownie', name: { ka: 'ბრაუნი', en: 'Brownie' } },
                                { id: 'burger', name: { ka: 'ბურგერი', en: 'Burger' } },
                                { id: 'mac-and-cheese', name: { ka: 'მაკ-ენ-ჩიზი', en: 'Mac & Cheese' } },
                                { id: 'pancake', name: { ka: 'პანქეიქი', en: 'Pancake' } },
                                { id: 'hot-dog', name: { ka: 'ჰოთ-დოგი', en: 'Hot Dog' } },
                                { id: 'cheesecake', name: { ka: 'ჩიზქეიქი', en: 'Cheesecake' } },
                            ]
                        },
                        {
                            id: 'caucasian-middle-eastern-cuisine',
                            name: { ka: '🏔️ კავკასიური და ახლო აღმოსავლეთის', en: '🏔️ Caucasian and Middle Eastern' },
                            keywords: [
                                { id: 'georgian-cuisine', name: { ka: 'ქართული', en: 'Georgian' } },
                                { id: 'lobio', name: { ka: 'ლობიო', en: 'Lobio (Bean dish)' } },
                                { id: 'mtsvadi', name: { ka: 'მწვადი', en: 'Mtsvadi (Shish kebab)' } },
                                { id: 'satsivi', name: { ka: 'საცივი', en: 'Satsivi' } },
                                { id: 'pkhali', name: { ka: 'ფხალი', en: 'Pkhali' } },
                                { id: 'khachapuri', name: { ka: 'ხაჭაპური', en: 'Khachapuri' } },
                                { id: 'kharcho', name: { ka: 'ხარჩო', en: 'Kharcho' } },
                                { id: 'khinkali', name: { ka: 'ხინკალი', en: 'Khinkali' } },
                                { id: 'churchkhela', name: { ka: 'ჩურჩხელა', en: 'Churchkhela' } },
                                { id: 'ajapsandali', name: { ka: 'აჯაფსანდალი', en: 'Ajapsandali' } },
                                { id: 'chadi', name: { ka: 'ჭადი', en: 'Chadi' } },
                                { id: 'turkish-cuisine', name: { ka: 'თურქული', en: 'Turkish' } },
                                { id: 'borek', name: { ka: 'ბორეკი', en: 'Börek' } },
                                { id: 'dolma', name: { ka: 'დოლმა', en: 'Dolma' } },
                                { id: 'doner', name: { ka: 'დონერი', en: 'Döner' } },
                                { id: 'yogurt-turkish', name: { ka: 'იოგურტი', en: 'Yogurt' } },
                                { id: 'lahmacun', name: { ka: 'ლაჰმაჯუნი', en: 'Lahmacun' } },
                                { id: 'baklava', name: { ka: 'ფახლავა', en: 'Baklava' } },
                                { id: 'kebab', name: { ka: 'ქაბაბი', en: 'Kebab' } },
                                { id: 'lebanese-cuisine', name: { ka: 'ლიბანური', en: 'Lebanese' } },
                                { id: 'baba-ghanoush', name: { ka: 'ბაბა განუში', en: 'Baba Ghanoush' } },
                                { id: 'tabbouleh', name: { ka: 'ტაბულე', en: 'Tabbouleh' } },
                                { id: 'falafel', name: { ka: 'ფალაფელი', en: 'Falafel' } },
                                { id: 'kibbeh', name: { ka: 'ქიბე', en: 'Kibbeh' } },
                                { id: 'shawarma', name: { ka: 'შაურმა', en: 'Shawarma' } },
                                { id: 'hummus', name: { ka: 'ჰუმუსი', en: 'Hummus' } },
                            ]
                        },
                        {
                            id: 'fusion-cuisine',
                            name: { ka: '🌐 Fusion (შერეული) სამზარეულო', en: '🌐 Fusion Cuisine' },
                            keywords: [
                                { id: 'gastronomic-innovation', name: { ka: 'გასტრონომიული ინოვაცია', en: 'Gastronomic Innovation' } },
                                { id: 'culinary-experiment', name: { ka: 'კულინარიული ექსპერიმენტი', en: 'Culinary Experiment' } },
                                { id: 'fusion-of-traditions', name: { ka: 'ტრადიციების შერწყმა', en: 'Fusion of Traditions' } },
                                { id: 'fusion', name: { ka: 'ფიუჟენი', en: 'Fusion' } },
                                { id: 'eclectic', name: { ka: 'ეკლექტიკა', en: 'Eclectic' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'beverage-culture',
                    name: { ka: '🍷 III. სასმელების კულტურა', en: '🍷 III. Beverage Culture' },
                    subSections: [
                        {
                            id: 'wine-winemaking',
                            name: { ka: '🍇 ღვინო და მეღვინეობა', en: '🍇 Wine and Winemaking' },
                            keywords: [
                                { id: 'enocha', name: { ka: 'ანოქა', en: 'Enocha (Georgian wine jug)' } },
                                { id: 'tasting', name: { ka: 'დეგუსტაცია', en: 'Tasting' } },
                                { id: 'winemaking', name: { ka: 'მეღვინეობა', en: 'Winemaking' } },
                                { id: 'sommelier-wine', name: { ka: 'სომელიე', en: 'Sommelier' } },
                                { id: 'tannin', name: { ka: 'ტანინი', en: 'Tannin' } },
                                { id: 'terroir', name: { ka: 'ტერუარი', en: 'Terroir' } },
                                { id: 'qvevri', name: { ka: 'ქვევრი', en: 'Qvevri' } },
                                { id: 'wine-types', name: { ka: 'ღვინო (წითელი, თეთრი, როზე, ცქრიალა)', en: 'Wine (Red, White, Rosé, Sparkling)' } },
                                { id: 'grape-variety', name: { ka: 'ყურძნის ჯიში (საფერავი, რქაწითელი)', en: 'Grape Variety (Saperavi, Rkatsiteli)' } },
                            ]
                        },
                        {
                            id: 'beer-breweries',
                            name: { ka: '🍺 ლუდი და ლუდსახარშები', en: '🍺 Beer and Breweries' },
                            keywords: [
                                { id: 'malt', name: { ka: 'ალაო', en: 'Malt' } },
                                { id: 'craft-beer', name: { ka: 'კრაფტ-ლუდი', en: 'Craft Beer' } },
                                { id: 'beer-types', name: { ka: 'ლუდი (ლაგერი, ელი, სტაუტი, IPA)', en: 'Beer (Lager, Ale, Stout, IPA)' } },
                                { id: 'brewery', name: { ka: 'ლუდსახარში', en: 'Brewery' } },
                                { id: 'hops', name: { ka: 'სვია', en: 'Hops' } },
                            ]
                        },
                        {
                            id: 'spirits',
                            name: { ka: '🥃 მაგარი სპირტიანი სასმელები', en: '🥃 Spirits' },
                            keywords: [
                                { id: 'aperitif', name: { ka: 'აპერიტივი', en: 'Aperitif' } },
                                { id: 'vodka', name: { ka: 'არაყი', en: 'Vodka' } },
                                { id: 'whiskey', name: { ka: 'ვისკი', en: 'Whiskey' } },
                                { id: 'digestif', name: { ka: 'დიჯესტივი', en: 'Digestif' } },
                                { id: 'distillation-spirits', name: { ka: 'დისტილაცია', en: 'Distillation' } },
                                { id: 'cognac', name: { ka: 'კონიაკი', en: 'Cognac' } },
                                { id: 'rum', name: { ka: 'რომი', en: 'Rum' } },
                                { id: 'tequila', name: { ka: 'ტეკილა', en: 'Tequila' } },
                                { id: 'chacha', name: { ka: 'ჭაჭა', en: 'Chacha' } },
                                { id: 'gin', name: { ka: 'ჯინი', en: 'Gin' } },
                            ]
                        },
                        {
                            id: 'cocktails-bartending',
                            name: { ka: '🍸 კოქტეილები და ბარმენინგი', en: '🍸 Cocktails and Bartending' },
                            keywords: [
                                { id: 'bartender-cocktails', name: { ka: 'ბარმენი', en: 'Bartender' } },
                                { id: 'garnish', name: { ka: 'გარნირი', en: 'Garnish' } },
                                { id: 'cocktail-types', name: { ka: 'კოქტეილი (მოხიტო, მარგარიტა, ნეგრონი)', en: 'Cocktail (Mojito, Margarita, Negroni)' } },
                                { id: 'mixology', name: { ka: 'მიქსოლოგია', en: 'Mixology' } },
                                { id: 'shaker', name: { ka: 'შეიკერი', en: 'Shaker' } },
                            ]
                        },
                        {
                            id: 'coffee-tea',
                            name: { ka: '☕ ყავა და ჩაი', en: '☕ Coffee and Tea' },
                            keywords: [
                                { id: 'barista-coffee', name: { ka: 'ბარისტა', en: 'Barista' } },
                                { id: 'brewing', name: { ka: 'მოდუღება', en: 'Brewing' } },
                                { id: 'ceremony', name: { ka: 'ცერემონია', en: 'Ceremony' } },
                                { id: 'coffee-types', name: { ka: 'ყავა (ესპრესო, კაპუჩინო, ლატე, ამერიკანო)', en: 'Coffee (Espresso, Cappuccino, Latte, Americano)' } },
                                { id: 'tea-types', name: { ka: 'ჩაი (შავი, მწვანე, მცენარეული, ულუნი)', en: 'Tea (Black, Green, Herbal, Oolong)' } },
                            ]
                        },
                        {
                            id: 'non-alcoholic-beverages',
                            name: { ka: '🥤 უალკოჰოლო სასმელები', en: '🥤 Non-alcoholic Beverages' },
                            keywords: [
                                { id: 'kompot', name: { ka: 'კომპოტი', en: 'Kompot' } },
                                { id: 'lemonade', name: { ka: 'ლიმონათი', en: 'Lemonade' } },
                                { id: 'mineral-water', name: { ka: 'მინერალური წყალი', en: 'Mineral Water' } },
                                { id: 'smoothie', name: { ka: 'სმუზი', en: 'Smoothie' } },
                                { id: 'fresh-juice', name: { ka: 'ფრეში', en: 'Fresh Juice' } },
                                { id: 'sparkling-water', name: { ka: 'შუშხუნა წყალი', en: 'Sparkling Water' } },
                                { id: 'juice', name: { ka: 'წვენი', en: 'Juice' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'diets-food-trends',
                    name: { ka: '🥗 IV. კვების სტილები და მიმართულებები', en: '🥗 IV. Diets and Food Trends' },
                    subSections: [
                        {
                            id: 'healthy-eating',
                            name: { ka: '🥑 ჯანსაღი კვება', en: '🥑 Healthy Eating' },
                            keywords: [
                                { id: 'low-carb-diet', name: { ka: 'დაბალნახშირწყლოვანი კვება', en: 'Low-carb diet' } },
                                { id: 'ketogenic-diet', name: { ka: 'კეტოგენური დიეტა', en: 'Ketogenic diet' } },
                                { id: 'organic-products', name: { ka: 'ორგანული პროდუქტები', en: 'Organic products' } },
                                { id: 'paleo-diet', name: { ka: 'პალეო დიეტა', en: 'Paleo diet' } },
                                { id: 'superfood', name: { ka: 'სუპერფუდი', en: 'Superfood' } },
                                { id: 'gluten-free', name: { ka: 'უგლუტენო', en: 'Gluten-free' } },
                                { id: 'mediterranean-diet', name: { ka: 'ხმელთაშუა ზღვის დიეტა', en: 'Mediterranean diet' } },
                            ]
                        },
                        {
                            id: 'plant-based-diets',
                            name: { ka: '🌱 მცენარეული კვება', en: '🌱 Plant-based Diets' },
                            keywords: [
                                { id: 'vegan', name: { ka: 'ვეგანი', en: 'Vegan' } },
                                { id: 'vegetarian', name: { ka: 'ვეგეტარიანელი', en: 'Vegetarian' } },
                                { id: 'plant-based-eating', name: { ka: 'მცენარეული კვება', en: 'Plant-based eating' } },
                                { id: 'pescatarian', name: { ka: 'პესკეტარიანელი', en: 'Pescatarian' } },
                                { id: 'seitan', name: { ka: 'სეიტანი', en: 'Seitan' } },
                                { id: 'tempeh', name: { ka: 'ტემპე', en: 'Tempeh' } },
                                { id: 'tofu', name: { ka: 'ტოფუ', en: 'Tofu' } },
                            ]
                        },
                        {
                            id: 'food-science-gastronomy',
                            name: { ka: '🔬 საკვების მეცნიერება და გასტრონომია', en: '🔬 Food Science and Gastronomy' },
                            keywords: [
                                { id: 'gmo-food', name: { ka: 'GMO (გენმოდიფიცირებული პროდუქტი)', en: 'Genetically Modified Organism' } },
                                { id: 'food-technology', name: { ka: 'კვების ტექნოლოგია', en: 'Food Technology' } },
                                { id: 'preservatives', name: { ka: 'კონსერვანტები', en: 'Preservatives' } },
                                { id: 'molecular-gastronomy', name: { ka: 'მოლეკულური გასტრონომია', en: 'Molecular Gastronomy' } },
                                { id: 'pasteurization', name: { ka: 'პასტერიზაცია', en: 'Pasteurization' } },
                                { id: 'spherification', name: { ka: 'სფერიფიკაცია', en: 'Spherification' } },
                                { id: 'sous-vide-gastronomy', name: { ka: 'სუ-ვიდი', en: 'Sous-vide' } },
                                { id: 'foam-gastronomy', name: { ka: 'ქაფი', en: 'Foam' } },
                            ]
                        },
                        {
                            id: 'table-etiquette-service',
                            name: { ka: '🎩 სუფრის ეტიკეტი და სერვირება', en: '🎩 Table Etiquette and Service' },
                            keywords: [
                                { id: 'cutlery-language', name: { ka: 'დანა-ჩანგლის ენა', en: 'Cutlery language' } },
                                { id: 'service-serving', name: { ka: 'სერვირება', en: 'Service/Serving' } },
                                { id: 'table-setting', name: { ka: 'სუფრის გაწყობა', en: 'Table setting' } },
                                { id: 'table-etiquette', name: { ka: 'სუფრის ეტიკეტი', en: 'Table etiquette' } },
                                { id: 'napkin', name: { ka: 'ხელსახოცი', en: 'Napkin' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'travel-tourism',
            name: { ka: '✈️ მოგზაურობა და ტურიზმი', en: '✈️ Travel & Tourism' },
            sections: [
                {
                    id: 'travel-planning-preparation',
                    name: { ka: '🗺️ I. მოგზაურობის დაგეგმვა და მომზადება', en: '🗺️ I. Travel Planning and Preparation' },
                    subSections: [
                        {
                            id: 'budget-finance-travel',
                            name: { ka: '💰 ბიუჯეტი და ფინანსები', en: '💰 Budget and Finance' },
                            keywords: [
                                { id: 'budget', name: { ka: 'ბიუჯეტი', en: 'Budget' } },
                                { id: 'savings', name: { ka: 'დანაზოგი', en: 'Savings' } },
                                { id: 'currency-exchange', name: { ka: 'ვალუტის გაცვლა', en: 'Currency exchange' } },
                                { id: 'credit-card', name: { ka: 'საკრედიტო ბარათი', en: 'Credit card' } },
                                { id: 'travelers-check', name: { ka: 'სამოგზაურო ჩეკი', en: 'Traveler\'s check' } },
                                { id: 'costing', name: { ka: 'ხარჯთაღრიცხვა', en: 'Costing' } },
                            ]
                        },
                        {
                            id: 'destination-selection',
                            name: { ka: '📍 მიმართულების შერჩევა', en: '📍 Destination Selection' },
                            keywords: [
                                { id: 'guidebook', name: { ka: 'გზამკვლევი (Guidebook)', en: 'Guidebook' } },
                                { id: 'destination', name: { ka: 'დანიშნულების ადგილი', en: 'Destination' } },
                                { id: 'itinerary-route', name: { ka: 'მარშრუტი', en: 'Itinerary/Route' } },
                                { id: 'recommendations', name: { ka: 'რეკომენდაციები', en: 'Recommendations' } },
                                { id: 'season-travel', name: { ka: 'სეზონი', en: 'Season' } },
                            ]
                        },
                        {
                            id: 'documents-visas',
                            name: { ka: '🛂 დოკუმენტები და ვიზები', en: '🛂 Documents and Visas' },
                            keywords: [
                                { id: 'visa', name: { ka: 'ვიზა', en: 'Visa' } },
                                { id: 'international-driving-permit', name: { ka: 'მართვის მოწმობა (საერთაშორისო)', en: 'International Driving Permit' } },
                                { id: 'passport', name: { ka: 'პასპორტი', en: 'Passport' } },
                                { id: 'id-card', name: { ka: 'პირადობის მოწმობა', en: 'ID card' } },
                                { id: 'schengen-area', name: { ka: 'შენგენის ზონა', en: 'Schengen Area' } },
                            ]
                        },
                        {
                            id: 'tickets-accommodation',
                            name: { ka: '🏨 ბილეთები და საცხოვრებელი', en: '🏨 Tickets and Accommodation' },
                            keywords: [
                                { id: 'flight-ticket', name: { ka: 'ავიაბილეთი', en: 'Flight ticket' } },
                                { id: 'apartment', name: { ka: 'აპარტამენტი', en: 'Apartment' } },
                                { id: 'booking-reservation', name: { ka: 'დაჯავშნა (Booking)', en: 'Booking/Reservation' } },
                                { id: 'online-check-in', name: { ka: 'ონლაინ რეგისტრაცია', en: 'Online check-in' } },
                                { id: 'hotel', name: { ka: 'სასტუმრო', en: 'Hotel' } },
                                { id: 'hostel', name: { ka: 'ჰოსტელი', en: 'Hostel' } },
                            ]
                        },
                        {
                            id: 'packing',
                            name: { ka: '🧳 ბარგის ჩალაგება', en: '🧳 Packing' },
                            keywords: [
                                { id: 'luggage', name: { ka: 'ბარგი', en: 'Luggage' } },
                                { id: 'backpack', name: { ka: 'ზურგჩანთა', en: 'Backpack' } },
                                { id: 'minimalist-packing', name: { ka: 'მინიმალისტური ჩალაგება', en: 'Minimalist packing' } },
                                { id: 'packing-list', name: { ka: 'ჩასალაგებელი ნივთების სია', en: 'Packing list' } },
                                { id: 'suitcase', name: { ka: 'ჩემოდანი', en: 'Suitcase' } },
                                { id: 'carry-on-luggage', name: { ka: 'ხელბარგი', en: 'Carry-on luggage' } },
                            ]
                        },
                        {
                            id: 'travel-insurance',
                            name: { ka: '🛡️ სამოგზაურო დაზღვევა', en: '🛡️ Travel Insurance' },
                            keywords: [
                                { id: 'luggage-insurance', name: { ka: 'ბარგის დაზღვევა', en: 'Luggage insurance' } },
                                { id: 'trip-cancellation', name: { ka: 'მოგზაურობის გაუქმება', en: 'Trip cancellation' } },
                                { id: 'medical-coverage', name: { ka: 'სამედიცინო დაფარვა', en: 'Medical coverage' } },
                                { id: 'travel-insurance-term', name: { ka: 'სამოგზაურო დაზღვევა', en: 'Travel insurance' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'destinations-types-of-tourism',
                    name: { ka: '🌐 II. მიმართულებები და ტურიზმის სახეები', en: '🌐 II. Destinations and Types of Tourism' },
                    subSections: [
                        {
                            id: 'geographical-destinations',
                            name: { ka: '🌍 გეოგრაფიული მიმართულებები', en: '🌍 Geographical Destinations' },
                            keywords: [
                                { id: 'europe-dest', name: { ka: 'ევროპა (იტალია, საფრანგეთი)', en: 'Europe (Italy, France)' } },
                                { id: 'asia-dest', name: { ka: 'აზია (ტაილანდი, იაპონია)', en: 'Asia (Thailand, Japan)' } },
                                { id: 'americas-dest', name: { ka: 'ამერიკა (აშშ, პერუ)', en: 'The Americas (USA, Peru)' } },
                                { id: 'africa-dest', name: { ka: 'აფრიკა (ეგვიპტე, კენია)', en: 'Africa (Egypt, Kenya)' } },
                                { id: 'australia-oceania-dest', name: { ka: 'ავსტრალია და ოკეანეთი', en: 'Australia and Oceania' } },
                            ]
                        },
                        {
                            id: 'travel-styles',
                            name: { ka: '🏞️ მოგზაურობის სტილები', en: '🏞️ Travel Styles' },
                            keywords: [
                                { id: 'adventure-tourism', name: { ka: 'სათავგადასავლო ტურიზმი', en: 'Adventure Tourism' } },
                                { id: 'mountaineering-travel', name: { ka: 'ალპინიზმი', en: 'Mountaineering' } },
                                { id: 'diving-travel', name: { ka: 'დაივინგი', en: 'Diving' } },
                                { id: 'ziplining-travel', name: { ka: 'ზიპლაინი', en: 'Ziplining' } },
                                { id: 'camping', name: { ka: 'კემპინგი', en: 'Camping' } },
                                { id: 'rock-climbing-travel', name: { ka: 'კლდეზე ცოცვა', en: 'Rock climbing' } },
                                { id: 'hiking', name: { ka: 'ლაშქრობა', en: 'Hiking' } },
                                { id: 'rafting-travel', name: { ka: 'რაფტინგი', en: 'Rafting' } },
                                { id: 'surfing-travel', name: { ka: 'სერფინგი', en: 'Surfing' } },
                                { id: 'cultural-historical-tourism', name: { ka: 'კულტურული და ისტორიული', en: 'Cultural and Historical Tourism' } },
                                { id: 'archaeological-tourism', name: { ka: 'არქეოლოგიური ტურიზმი', en: 'Archaeological tourism' } },
                                { id: 'unesco-heritage', name: { ka: 'იუნესკოს მემკვიდრეობა', en: 'UNESCO Heritage' } },
                                { id: 'historical-monument', name: { ka: 'ისტორიული ძეგლი', en: 'Historical monument' } },
                                { id: 'museum-travel', name: { ka: 'მუზეუმი', en: 'Museum' } },
                                { id: 'festival-travel', name: { ka: 'ფესტივალი', en: 'Festival' } },
                                { id: 'ecotourism', name: { ka: 'ეკოტურიზმი', en: 'Ecotourism' } },
                                { id: 'national-park', name: { ka: 'ეროვნული პარკი', en: 'National park' } },
                                { id: 'sustainable-travel', name: { ka: 'მდგრადი მოგზაურობა', en: 'Sustainable travel' } },
                                { id: 'nature-reserve', name: { ka: 'ნაკრძალი', en: 'Nature reserve' } },
                                { id: 'bird-watching', name: { ka: 'ფრინველებზე დაკვირვება', en: 'Bird watching' } },
                                { id: 'gastronomic-tourism', name: { ka: 'გასტრონომიული', en: 'Gastronomic Tourism' } },
                                { id: 'gastro-tour', name: { ka: 'გასტრო-ტური', en: 'Gastro-tour' } },
                                { id: 'culinary-masterclass', name: { ka: 'კულინარიული მასტერკლასი', en: 'Culinary masterclass' } },
                                { id: 'local-cuisine', name: { ka: 'ადგილობრივი სამზარეულო', en: 'Local cuisine' } },
                                { id: 'wine-tasting', name: { ka: 'ღვინის დეგუსტაცია', en: 'Wine tasting' } },
                                { id: 'beach-resort-tourism', name: { ka: 'სანაპირო და საკურორტო', en: 'Beach and Resort Tourism' } },
                                { id: 'all-inclusive', name: { ka: '"All-Inclusive"', en: 'All-Inclusive' } },
                                { id: 'yachting', name: { ka: 'იახტინგი', en: 'Yachting' } },
                                { id: 'cruise', name: { ka: 'კრუიზი', en: 'Cruise' } },
                                { id: 'resort', name: { ka: 'კურორტი', en: 'Resort' } },
                                { id: 'beach', name: { ka: 'პლაჟი', en: 'Beach' } },
                                { id: 'backpacking', name: { ka: 'ბექპეკინგი', en: 'Backpacking' } },
                                { id: 'hitchhiking', name: { ka: 'ავტოსტოპი', en: 'Hitchhiking' } },
                                { id: 'backpacker', name: { ka: 'ბექპეკერი', en: 'Backpacker' } },
                                { id: 'budget-airlines', name: { ka: 'ბიუჯეტური ავიახაზები', en: 'Budget airlines' } },
                                { id: 'couchsurfing', name: { ka: 'ქაუჩსერფინგი', en: 'Couchsurfing' } },
                                { id: 'hostel-travel', name: { ka: 'ჰოსტელი', en: 'Hostel' } },
                                { id: 'solo-travel', name: { ka: 'სოლო მოგზაურობა', en: 'Solo Travel' } },
                                { id: 'independent-tourism', name: { ka: 'დამოუკიდებელი ტურიზმი', en: 'Independent tourism' } },
                                { id: 'traveling-alone', name: { ka: 'მარტო მოგზაურობა', en: 'Traveling alone' } },
                                { id: 'safety-travel', name: { ka: 'უსაფრთხოება', en: 'Safety' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'practical-aspects-technologies',
                    name: { ka: '🛠️ III. პრაქტიკული ასპექტები და ტექნოლოგიები', en: '🛠️ III. Practical Aspects and Technologies' },
                    subSections: [
                        {
                            id: 'transport-navigation-travel',
                            name: { ka: '🚗 ტრანსპორტი და ნავიგაცია', en: '🚗 Transport and Navigation' },
                            keywords: [
                                { id: 'gps-travel', name: { ka: 'GPS', en: 'GPS' } },
                                { id: 'google-maps', name: { ka: 'Google Maps', en: 'Google Maps' } },
                                { id: 'waze', name: { ka: 'Waze', en: 'Waze' } },
                                { id: 'bus', name: { ka: 'ავტობუსი', en: 'Bus' } },
                                { id: 'car-rental', name: { ka: 'მანქანის დაქირავება', en: 'Car rental' } },
                                { id: 'train', name: { ka: 'მატარებელი', en: 'Train' } },
                                { id: 'metro', name: { ka: 'მეტრო', en: 'Metro' } },
                                { id: 'public-transport-travel', name: { ka: 'საზოგადოებრივი ტრანსპორტი', en: 'Public transport' } },
                                { id: 'taxi', name: { ka: 'ტაქსი', en: 'Taxi' } },
                            ]
                        },
                        {
                            id: 'communication-travel',
                            name: { ka: '🗣️ კომუნიკაცია', en: '🗣️ Communication' },
                            keywords: [
                                { id: 'language-barrier', name: { ka: 'ენობრივი ბარიერი', en: 'Language barrier' } },
                                { id: 'sign-language-travel', name: { ka: 'ჟესტების ენა', en: 'Sign language' } },
                                { id: 'translator-app', name: { ka: 'მთარგმნელი აპლიკაცია', en: 'Translator app' } },
                                { id: 'phrasebook', name: { ka: 'სასაუბრო ლექსიკონი', en: 'Phrasebook' } },
                                { id: 'wifi-travel', name: { ka: 'Wi-Fi', en: 'Wi-Fi' } },
                                { id: 'roaming', name: { ka: 'როუმინგი', en: 'Roaming' } },
                            ]
                        },
                        {
                            id: 'health-safety-travel',
                            name: { ka: '⚕️ ჯანმრთელობა და უსაფრთხოება', en: '⚕️ Health and Safety' },
                            keywords: [
                                { id: 'local-laws', name: { ka: 'ადგილობრივი კანონები', en: 'Local laws' } },
                                { id: 'first-aid-kit', name: { ka: 'პირველადი დახმარების აფთიაქი', en: 'First-aid kit' } },
                                { id: 'emergency-numbers', name: { ka: 'საგანგებო ნომრები', en: 'Emergency numbers' } },
                                { id: 'mandatory-vaccinations', name: { ka: 'სავალდებულო აცრები', en: 'Mandatory vaccinations' } },
                            ]
                        },
                        {
                            id: 'digital-nomadism',
                            name: { ka: '👨‍💻 ციფრული მომთაბარეობა', en: '👨‍💻 Digital Nomadism' },
                            keywords: [
                                { id: 'long-term-visa', name: { ka: 'გრძელვადიანი ვიზა', en: 'Long-term visa' } },
                                { id: 'remote-work', name: { ka: 'დისტანციური მუშაობა', en: 'Remote work' } },
                                { id: 'coworking-space', name: { ka: 'ქოვორქინგ სივრცე', en: 'Coworking space' } },
                            ]
                        },
                        {
                            id: 'travel-apps-gadgets',
                            name: { ka: '📱 სამოგზაურო აპლიკაციები და გაჯეტები', en: '📱 Travel Apps and Gadgets' },
                            keywords: [
                                { id: 'airbnb-booking', name: { ka: 'Airbnb, Booking.com, Skyscanner, Tripadvisor', en: 'Airbnb, Booking.com, Skyscanner, Tripadvisor' } },
                                { id: 'dslr-camera', name: { ka: 'DSLR კამერა', en: 'DSLR camera' } },
                                { id: 'drone-travel', name: { ka: 'დრონი', en: 'Drone' } },
                                { id: 'action-camera', name: { ka: 'ექშენ კამერა (GoPro)', en: 'Action camera' } },
                                { id: 'power-bank', name: { ka: 'პორტატული დამტენი', en: 'Power bank' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'wellness-self-care',
            name: { ka: '🧘 ველნესი და თვითმოვლა', en: '🧘 Wellness & Self-Care' },
            sections: [
                {
                    id: 'physical-activity',
                    name: { ka: '💪 I. ფიზიკური აქტივობა', en: '💪 I. Physical Activity' },
                    subSections: [
                        {
                            id: 'fitness-sports-wellness',
                            name: { ka: '🏋️ ფიტნესი და სპორტი', en: '🏋️ Fitness and Sports' },
                            keywords: [
                                { id: 'hiit-wellness', name: { ka: 'HIIT', en: 'HIIT' } },
                                { id: 'cardio-wellness', name: { ka: 'კარდიო', en: 'Cardio' } },
                                { id: 'crossfit-wellness', name: { ka: 'კროსფიტი', en: 'CrossFit' } },
                                { id: 'pilates-wellness', name: { ka: 'პილატესი', en: 'Pilates' } },
                                { id: 'gym', name: { ka: 'სპორტდარბაზი', en: 'Gym' } },
                                { id: 'stretching-wellness', name: { ka: 'სტრეჩინგი', en: 'Stretching' } },
                                { id: 'physical-endurance', name: { ka: 'ფიზიკური გამძლეობა', en: 'Physical endurance' } },
                                { id: 'weight-training', name: { ka: 'წონით ვარჯიში', en: 'Weight training' } },
                                { id: 'yoga-wellness', name: { ka: 'იოგა', en: 'Yoga' } },
                            ]
                        },
                        {
                            id: 'outdoor-activities',
                            name: { ka: '🌳 გარე აქტივობები', en: '🌳 Outdoor Activities' },
                            keywords: [
                                { id: 'cycling-wellness', name: { ka: 'ველოსიპედით სეირნობა', en: 'Cycling' } },
                                { id: 'walking', name: { ka: 'სიარული', en: 'Walking' } },
                                { id: 'running-wellness', name: { ka: 'სირბილი', en: 'Running' } },
                                { id: 'swimming-wellness', name: { ka: 'ცურვა', en: 'Swimming' } },
                                { id: 'team-sports-wellness', name: { ka: 'გუნდური სპორტები (ფეხბურთი, კალათბურთი)', en: 'Team sports (Football, Basketball)' } },
                            ]
                        },
                        {
                            id: 'adventure-sports',
                            name: { ka: '🧗 სათავგადასავლო სპორტი', en: '🧗 Adventure Sports' },
                            keywords: [
                                { id: 'mountaineering-wellness', name: { ka: 'ალპინიზმი', en: 'Mountaineering' } },
                                { id: 'rock-climbing-wellness', name: { ka: 'კლდეზე ცოცვა', en: 'Rock climbing' } },
                                { id: 'surfing-wellness', name: { ka: 'სერფინგი', en: 'Surfing' } },
                                { id: 'skiing-wellness', name: { ka: 'თხილამურები', en: 'Skiing' } },
                                { id: 'snowboarding-wellness', name: { ka: 'სნოუბორდინგი', en: 'Snowboarding' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'mental-emotional-health',
                    name: { ka: '🧠 II. მენტალური და ემოციური ჯანმრთელობა', en: '🧠 II. Mental and Emotional Health' },
                    subSections: [
                        {
                            id: 'meditation-mindfulness-wellness',
                            name: { ka: '🧘 მედიტაცია და ცნობიერება', en: '🧘 Meditation and Mindfulness' },
                            keywords: [
                                { id: 'meditation-wellness', name: { ka: 'მედიტაცია', en: 'Meditation' } },
                                { id: 'breathing-exercises', name: { ka: 'სუნთქვითი ვარჯიშები', en: 'Breathing exercises' } },
                                { id: 'mindfulness-wellness', name: { ka: 'ცნობიერების ამაღლება (Mindfulness)', en: 'Mindfulness' } },
                                { id: 'vipassana', name: { ka: 'ვიპასანა', en: 'Vipassana' } },
                            ]
                        },
                        {
                            id: 'stress-management-relaxation',
                            name: { ka: '😌 სტრესის მართვა და რელაქსაცია', en: '😌 Stress Management and Relaxation' },
                            keywords: [
                                { id: 'art-therapy', name: { ka: 'არტ-თერაპია', en: 'Art therapy' } },
                                { id: 'relaxation-technique', name: { ka: 'დასვენების ტექნიკა', en: 'Relaxation technique' } },
                                { id: 'cbt-wellness', name: { ka: 'კოგნიტურ-ბიჰევიორული თერაპია', en: 'Cognitive Behavioral Therapy (CBT)' } },
                                { id: 'recreation-wellness', name: { ka: 'რეკრეაცია', en: 'Recreation' } },
                                { id: 'stress-management-wellness', name: { ka: 'სტრესის მართვა', en: 'Stress management' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'self-care-routines',
                    name: { ka: '🌿 III. თვითმოვლის რუტინები', en: '🌿 III. Self-Care Routines' },
                    subSections: [
                        {
                            id: 'spa-body-care',
                            name: { ka: '🛀 სპა და სხეულზე ზრუნვა', en: '🛀 Spa and Body Care' },
                            keywords: [
                                { id: 'aromatherapy-wellness', name: { ka: 'არომათერაპია', en: 'Aromatherapy' } },
                                { id: 'hydrotherapy', name: { ka: 'ჰიდროთერაპია', en: 'Hydrotherapy' } },
                                { id: 'massage', name: { ka: 'მასაჟი', en: 'Massage' } },
                                { id: 'bath-procedures', name: { ka: 'სააბაზანო პროცედურები', en: 'Bath procedures' } },
                                { id: 'sauna', name: { ka: 'საუნა', en: 'Sauna' } },
                                { id: 'spa', name: { ka: 'სპა', en: 'Spa' } },
                                { id: 'skincare', name: { ka: 'კანის მოვლა', en: 'Skincare' } },
                            ]
                        },
                        {
                            id: 'healthy-nutrition',
                            name: { ka: '🥗 ჯანსაღი კვება', en: '🥗 Healthy Nutrition' },
                            keywords: [
                                { id: 'bio-products', name: { ka: 'ბიო პროდუქტები', en: 'Bio products' } },
                                { id: 'balanced-diet-wellness', name: { ka: 'დაბალანსებული რაციონი', en: 'Balanced diet' } },
                                { id: 'detox', name: { ka: 'დეტოქსი', en: 'Detox' } },
                                { id: 'superfood-wellness', name: { ka: 'სუპერფუდი', en: 'Superfood' } },
                                { id: 'hydration', name: { ka: 'ჰიდრატაცია', en: 'Hydration' } },
                            ]
                        },
                        {
                            id: 'sleep-rest-wellness',
                            name: { ka: '🛌 ძილი და დასვენება', en: '🛌 Sleep and Rest' },
                            keywords: [
                                { id: 'biorhythm', name: { ka: 'ბიორიტმი', en: 'Biorhythm' } },
                                { id: 'regular-schedule', name: { ka: 'რეგულარული გრაფიკი', en: 'Regular schedule' } },
                                { id: 'sleep-hygiene-wellness', name: { ka: 'ძილის ჰიგიენა', en: 'Sleep hygiene' } },
                                { id: 'circadian-rhythm-wellness', name: { ka: 'ცირკადული რიტმი', en: 'Circadian rhythm' } },
                                { id: 'insomnia-wellness', name: { ka: 'ინსომნია', en: 'Insomnia' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'social-wellbeing',
                    name: { ka: '🤝 IV. სოციალური კეთილდღეობა', en: '🤝 IV. Social Wellbeing' },
                    subSections: [
                        {
                            id: 'hobbies-creativity',
                            name: { ka: '🎨 ჰობი და შემოქმედება', en: '🎨 Hobbies and Creativity' },
                            keywords: [
                                { id: 'learning-new-skills', name: { ka: 'ახალი უნარების შესწავლა', en: 'Learning new skills' } },
                                { id: 'culinary', name: { ka: 'კულინარია', en: 'Culinary' } },
                                { id: 'music-hobby', name: { ka: 'მუსიკა', en: 'Music' } },
                                { id: 'handicrafts', name: { ka: 'ხელნაკეთი ნივთები', en: 'Handicrafts' } },
                                { id: 'painting-hobby', name: { ka: 'ხატვა', en: 'Painting' } },
                            ]
                        },
                        {
                            id: 'social-connections',
                            name: { ka: '👨‍👩‍👧‍👦 სოციალური კავშირები', en: '👨‍👩‍👧‍👦 Social Connections' },
                            keywords: [
                                { id: 'friends', name: { ka: 'მეგობრები', en: 'Friends' } },
                                { id: 'family-social', name: { ka: 'ოჯახი', en: 'Family' } },
                                { id: 'common-interest-groups', name: { ka: 'საერთო ინტერესების ჯგუფები', en: 'Common interest groups' } },
                                { id: 'social-activities', name: { ka: 'სოციალური აქტივობები', en: 'Social activities' } },
                                { id: 'networking', name: { ka: 'ნეთვორქინგი', en: 'Networking' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'home-domestic-management',
            name: { ka: '🏡 შინაური ცხოვრება და სახლის მართვა', en: '🏡 Home & Domestic Management' },
            sections: [
                {
                    id: 'home-organization-design',
                    name: { ka: '🛋️ I. სახლის ორგანიზება და დიზაინი', en: '🛋️ I. Home Organization and Design' },
                    subSections: [
                        {
                            id: 'living-spaces',
                            name: { ka: '🚪 საცხოვრებელი სივრცეები', en: '🚪 Living Spaces' },
                            keywords: [
                                { id: 'bathroom', name: { ka: 'აბაზანა', en: 'Bathroom' } },
                                { id: 'garden-home', name: { ka: 'ბაღი', en: 'Garden' } },
                                { id: 'living-room', name: { ka: 'მისაღები ოთახი', en: 'Living room' } },
                                { id: 'kitchen', name: { ka: 'სამზარეულო', en: 'Kitchen' } },
                                { id: 'home-office', name: { ka: 'სამუშაო ოთახი', en: 'Home office' } },
                                { id: 'bedroom', name: { ka: 'საძინებელი', en: 'Bedroom' } },
                                { id: 'terrace', name: { ka: 'ტერასა', en: 'Terrace' } },
                                { id: 'hallway', name: { ka: 'ჰოლი', en: 'Hallway' } },
                            ]
                        },
                        {
                            id: 'organization-storage',
                            name: { ka: '📦 ორგანიზაცია და შენახვა', en: '📦 Organization and Storage' },
                            keywords: [
                                { id: 'decluttering', name: { ka: 'Decluttering', en: 'Decluttering' } },
                                { id: 'archiving', name: { ka: 'არქივაცია', en: 'Archiving' } },
                                { id: 'wardrobes', name: { ka: 'კარადები', en: 'Wardrobes' } },
                                { id: 'containers', name: { ka: 'კონტეინერები', en: 'Containers' } },
                                { id: 'minimalism-home', name: { ka: 'მინიმალიზმი', en: 'Minimalism' } },
                                { id: 'shelves', name: { ka: 'თაროები', en: 'Shelves' } },
                                { id: 'boxes', name: { ka: 'ყუთები', en: 'Boxes' } },
                            ]
                        },
                        {
                            id: 'decor-interior-design',
                            name: { ka: '🖼️ დეკორი და ინტერიერის დიზაინი', en: '🖼️ Decor and Interior Design' },
                            keywords: [
                                { id: 'furniture-decor', name: { ka: 'ავეჯი', en: 'Furniture' } },
                                { id: 'lighting', name: { ka: 'განათება', en: 'Lighting' } },
                                { id: 'decorative-accessories', name: { ka: 'დეკორატიული აქსესუარები', en: 'Decorative accessories' } },
                                { id: 'plants', name: { ka: 'მცენარეები', en: 'Plants' } },
                                { id: 'scandinavian-style', name: { ka: 'სკანდინავიური სტილი', en: 'Scandinavian style' } },
                                { id: 'modern-style', name: { ka: 'თანამედროვე სტილი', en: 'Modern style' } },
                                { id: 'textiles-decor', name: { ka: 'ტექსტილი', en: 'Textiles' } },
                                { id: 'colors-decor', name: { ka: 'ფერები', en: 'Colors' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'home-technology-sustainability',
                    name: { ka: '💡 II. სახლის ტექნოლოგიები და მდგრადობა', en: '💡 II. Home Technology and Sustainability' },
                    subSections: [
                        {
                            id: 'smart-home',
                            name: { ka: '🤖 ჭკვიანი სახლი (Smart Home)', en: '🤖 Smart Home' },
                            keywords: [
                                { id: 'iot-home', name: { ka: 'IoT (ნივთების ინტერნეტი)', en: 'Internet of Things' } },
                                { id: 'sensors-home', name: { ka: 'სენსორები', en: 'Sensors' } },
                                { id: 'security-cameras', name: { ka: 'უსაფრთხოების კამერები', en: 'Security cameras' } },
                                { id: 'voice-assistants', name: { ka: 'ხმოვანი ასისტენტები', en: 'Voice assistants' } },
                                { id: 'smart-lighting-home', name: { ka: 'ჭკვიანი განათება', en: 'Smart lighting' } },
                                { id: 'smart-thermostat-home', name: { ka: 'ჭკვიანი თერმოსტატი', en: 'Smart thermostat' } },
                            ]
                        },
                        {
                            id: 'sustainable-living',
                            name: { ka: '🌱 მდგრადი ცხოვრება', en: '🌱 Sustainable Living' },
                            keywords: [
                                { id: 'led-lighting-sustainable', name: { ka: 'LED განათება', en: 'LED lighting' } },
                                { id: 'biodegradable-products', name: { ka: 'ბიოდეგრადირებადი პროდუქტები', en: 'Biodegradable products' } },
                                { id: 'energy-efficiency-home', name: { ka: 'ენერგოეფექტურობა', en: 'Energy efficiency' } },
                                { id: 'composting-home', name: { ka: 'კომპოსტირება', en: 'Composting' } },
                                { id: 'solar-panels-home', name: { ka: 'მზის პანელები', en: 'Solar panels' } },
                                { id: 'water-conservation-home', name: { ka: 'წყლის დაზოგვა', en: 'Water conservation' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'daily-management-safety',
                    name: { ka: '🧹 III. ყოველდღიური მართვა და უსაფრთხოება', en: '🧹 III. Daily Management and Safety' },
                    subSections: [
                        {
                            id: 'cleaning-hygiene',
                            name: { ka: '🧼 დასუფთავება და ჰიგიენა', en: '🧼 Cleaning and Hygiene' },
                            keywords: [
                                { id: 'disinfection-home', name: { ka: 'დეზინფექცია', en: 'Disinfection' } },
                                { id: 'eco-friendly-cleaners', name: { ka: 'ეკოლოგიური საწმენდები', en: 'Eco-friendly cleaners' } },
                                { id: 'vacuum-cleaner', name: { ka: 'მტვერსასრუტი', en: 'Vacuum cleaner' } },
                                { id: 'standard-deep-cleaning', name: { ka: 'სტანდარტული და ღრმა დასუფთავება', en: 'Standard and deep cleaning' } },
                            ]
                        },
                        {
                            id: 'planning-budgeting-home',
                            name: { ka: '📅 დაგეგმვა და ბიუჯეტი', en: '📅 Planning and Budgeting' },
                            keywords: [
                                { id: 'meal-planning', name: { ka: 'მენიუს დაგეგმვა', en: 'Meal planning' } },
                                { id: 'food-storage', name: { ka: 'პროდუქტის შენახვა', en: 'Food storage' } },
                                { id: 'expiration-date-tracking', name: { ka: 'ვადების კონტროლი', en: 'Expiration date tracking' } },
                                { id: 'budget-planning', name: { ka: 'ბიუჯეტის დაგეგმვა', en: 'Budget planning' } },
                                { id: 'cost-optimization', name: { ka: 'ხარჯების ოპტიმიზაცია', en: 'Cost optimization' } },
                            ]
                        },
                        {
                            id: 'safety-home',
                            name: { ka: '🔥 უსაფრთხოება', en: '🔥 Safety' },
                            keywords: [
                                { id: 'co-sensor', name: { ka: 'CO სენსორი', en: 'CO sensor' } },
                                { id: 'smoke-detector', name: { ka: 'კვამლის დეტექტორი', en: 'Smoke detector' } },
                                { id: 'fire-extinguisher', name: { ka: 'ცეცხლმაქრი', en: 'Fire extinguisher' } },
                                { id: 'first-aid-kit-home', name: { ka: 'პირველადი დახმარების ყუთი', en: 'First-aid kit' } },
                                { id: 'child-pet-safety', name: { ka: 'ბავშვების/ცხოველების უსაფრთხოება', en: 'Child/Pet safety' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'hobbies-entertainment',
            name: { ka: '🎨 ჰობი და გართობა', en: '🎨 Hobbies & Entertainment' },
            sections: [
                {
                    id: 'tech-science-hobbies',
                    name: { ka: '🔬 I. ტექნოლოგიური და მეცნიერული ჰობი', en: '🔬 I. Tech and Science Hobbies' },
                    subSections: [
                        {
                            id: 'robotics-electronics-hobbies',
                            name: { ka: '🤖 რობოტიკა და ელექტრონიკა', en: '🤖 Robotics and Electronics' },
                            keywords: [
                                { id: 'arduino', name: { ka: 'Arduino', en: 'Arduino' } },
                                { id: 'raspberry-pi', name: { ka: 'Raspberry Pi', en: 'Raspberry Pi' } },
                                { id: 'diy', name: { ka: 'DIY', en: 'DIY' } },
                                { id: 'automated-projects', name: { ka: 'ავტომატიზებული პროექტები', en: 'Automated projects' } },
                                { id: 'remote-control', name: { ka: 'დისტანციური კონტროლი', en: 'Remote control' } },
                                { id: 'robotics-competitions', name: { ka: 'რობოტული კონკურსები', en: 'Robotics competitions' } },
                                { id: 'sensors-hobbies', name: { ka: 'სენსორები', en: 'Sensors' } },
                            ]
                        },
                        {
                            id: 'digital-creation-gaming',
                            name: { ka: '🎮 ციფრული შემოქმედება და გეიმინგი', en: '🎮 Digital Creation and Gaming' },
                            keywords: [
                                { id: '3d-modeling-hobbies', name: { ka: '3D მოდელირება', en: '3D Modeling' } },
                                { id: 'esports-hobbies', name: { ka: 'eSports', en: 'eSports' } },
                                { id: 'mmorpg', name: { ka: 'MMORPG', en: 'MMORPG' } },
                                { id: 'moba', name: { ka: 'MOBA', en: 'MOBA' } },
                                { id: 'pc-console', name: { ka: 'PC/კონსოლი', en: 'PC/Console' } },
                                { id: 'vr-ar-hobbies', name: { ka: 'VR/AR', en: 'VR/AR' } },
                                { id: 'game-streaming', name: { ka: 'გეიმინგის სტრიმინგი', en: 'Game streaming' } },
                                { id: 'graphic-design-hobbies', name: { ka: 'გრაფიკული დიზაინი', en: 'Graphic design' } },
                                { id: 'video-games', name: { ka: 'ვიდეოთამაშები', en: 'Video games' } },
                            ]
                        },
                        {
                            id: 'recreational-science',
                            name: { ka: '🔭 გასართობი მეცნიერება', en: '🔭 Recreational Science' },
                            keywords: [
                                { id: 'stem-hobby', name: { ka: 'STEM ჰობი', en: 'STEM hobby' } },
                                { id: 'astronomy-hobby', name: { ka: 'ასტრონომია', en: 'Astronomy' } },
                                { id: 'coding-challenges', name: { ka: 'კოდირების გამოწვევები', en: 'Coding challenges' } },
                                { id: 'science-experiments', name: { ka: 'სამეცნიერო ექსპერიმენტები', en: 'Science experiments' } },
                                { id: 'trivia', name: { ka: 'ტრივიები', en: 'Trivia' } },
                                { id: 'puzzles', name: { ka: 'პაზლები', en: 'Puzzles' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'creative-artistic-hobbies',
                    name: { ka: '🎭 II. შემოქმედებითი და მხატვრული ჰობი', en: '🎭 II. Creative and Artistic Hobbies' },
                    subSections: [
                        {
                            id: 'visual-arts-hobbies',
                            name: { ka: '🖌️ ვიზუალური ხელოვნება', en: '🖌️ Visual Arts' },
                            keywords: [
                                { id: 'stop-motion-animation', name: { ka: 'Stop-motion ანიმაცია', en: 'Stop-motion animation' } },
                                { id: 'graffiti-hobby', name: { ka: 'გრაფიტი', en: 'Graffiti' } },
                                { id: 'videography', name: { ka: 'ვიდეოგრაფია', en: 'Videography' } },
                                { id: 'illustration-hobby', name: { ka: 'ილუსტრაცია', en: 'Illustration' } },
                                { id: 'street-art-hobby', name: { ka: 'სტრიტ-არტი', en: 'Street art' } },
                                { id: 'painting-hobby-art', name: { ka: 'ფერწერა', en: 'Painting' } },
                                { id: 'photography-hobby', name: { ka: 'ფოტოგრაფია', en: 'Photography' } },
                            ]
                        },
                        {
                            id: 'crafts-diy',
                            name: { ka: '🧵 ხელსაქმე და DIY', en: '🧵 Crafts and DIY' },
                            keywords: [
                                { id: 'decoupage', name: { ka: 'დეკუპაჟი', en: 'Decoupage' } },
                                { id: 'interior-decoration', name: { ka: 'ინტერიერის დეკორაცია', en: 'Interior decoration' } },
                                { id: 'sewing', name: { ka: 'კერვა', en: 'Sewing' } },
                                { id: 'macrame', name: { ka: 'მაკრამე', en: 'Macramé' } },
                                { id: 'origami', name: { ka: 'ორიგამი', en: 'Origami' } },
                                { id: 'jewelry-making', name: { ka: 'სამკაულების დამზადება', en: 'Jewelry making' } },
                                { id: 'embroidery-craft', name: { ka: 'ქარგვა', en: 'Embroidery' } },
                                { id: 'knitting', name: { ka: 'ქსოვა', en: 'Knitting' } },
                                { id: 'wood-carving', name: { ka: 'ხეზე კვეთა', en: 'Wood carving' } },
                            ]
                        },
                        {
                            id: 'music-literature-hobbies',
                            name: { ka: '✍️ მუსიკა და ლიტერატურა', en: '✍️ Music and Literature' },
                            keywords: [
                                { id: 'blogging-hobby', name: { ka: 'ბლოგინგი', en: 'Blogging' } },
                                { id: 'playing-instrument', name: { ka: 'ინსტრუმენტზე დაკვრა', en: 'Playing an instrument' } },
                                { id: 'karaoke', name: { ka: 'კარაოკე', en: 'Karaoke' } },
                                { id: 'poetry-hobby', name: { ka: 'პოეზია', en: 'Poetry' } },
                                { id: 'singing', name: { ka: 'სიმღერა', en: 'Singing' } },
                                { id: 'book-club', name: { ka: 'წიგნის კლუბი', en: 'Book club' } },
                                { id: 'creative-writing', name: { ka: 'შემოქმედებითი წერა', en: 'Creative writing' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'intellectual-strategic-hobbies',
                    name: { ka: '♟️ III. ინტელექტუალური და სტრატეგიული ჰობი', en: '♟️ III. Intellectual and Strategic Hobbies' },
                    subSections: [
                        {
                            id: 'logic-games',
                            name: { ka: '🧠 ლოგიკური თამაშები', en: '🧠 Logic Games' },
                            keywords: [
                                { id: '3d-puzzles', name: { ka: '3D პაზლები', en: '3D puzzles' } },
                                { id: 'crosswords', name: { ka: 'კროსვორდები', en: 'Crosswords' } },
                                { id: 'rubiks-cube', name: { ka: 'რუბიკის კუბი', en: 'Rubik\'s Cube' } },
                                { id: 'sudoku', name: { ka: 'სუდოკუ', en: 'Sudoku' } },
                                { id: 'brain-teasers', name: { ka: 'თავსატეხები', en: 'Brain teasers' } },
                            ]
                        },
                        {
                            id: 'strategy-games',
                            name: { ka: '🎲 სტრატეგიული თამაშები', en: '🎲 Strategy Games' },
                            keywords: [
                                { id: 'board-games', name: { ka: 'Board Games (სამაგიდო თამაშები)', en: 'Board games' } },
                                { id: 'risk-game', name: { ka: 'Risk', en: 'Risk' } },
                                { id: 'settlers-of-catan', name: { ka: 'Settlers of Catan', en: 'Settlers of Catan' } },
                                { id: 'go-game', name: { ka: 'გო', en: 'Go' } },
                                { id: 'backgammon', name: { ka: 'ნარდი', en: 'Backgammon' } },
                                { id: 'checkers', name: { ka: 'შაში', en: 'Checkers' } },
                                { id: 'chess-hobby', name: { ka: 'ჭადრახი', en: 'Chess' } },
                            ]
                        },
                        {
                            id: 'quizzes',
                            name: { ka: '🏆 ვიქტორინები', en: '🏆 Quizzes' },
                            keywords: [
                                { id: 'intellectual-competitions', name: { ka: 'ინტელექტუალური კონკურსები', en: 'Intellectual competitions' } },
                                { id: 'online-quizzes', name: { ka: 'ონლაინ კვიზები', en: 'Online quizzes' } },
                                { id: 'pub-quizzes', name: { ka: 'პაბ-კვიზები', en: 'Pub quizzes' } },
                                { id: 'trivia-quiz', name: { ka: 'ტრივია', en: 'Trivia' } },
                                { id: 'quiz', name: { ka: 'ვიქტორინა', en: 'Quiz' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'social-activities-entertainment',
                    name: { ka: '🤝 IV. სოციალური აქტივობები და გართობა', en: '🤝 IV. Social Activities and Entertainment' },
                    subSections: [
                        {
                            id: 'events-gatherings',
                            name: { ka: '🎉 ღონისძიებები და შეკრებები', en: '🎉 Events and Gatherings' },
                            keywords: [
                                { id: 'escape-room', name: { ka: 'Escape Room', en: 'Escape room' } },
                                { id: 'cinema-club', name: { ka: 'კინოკლუბი', en: 'Cinema club' } },
                                { id: 'concerts', name: { ka: 'კონცერტები', en: 'Concerts' } },
                                { id: 'lan-party', name: { ka: 'ლან-პარტი', en: 'LAN party' } },
                                { id: 'volunteering', name: { ka: 'მოხალისეობა', en: 'Volunteering' } },
                                { id: 'music-festivals', name: { ka: 'მუსიკალური ფესტივალები', en: 'Music festivals' } },
                                { id: 'sports-events', name: { ka: 'სპორტული ღონისძიებები', en: 'Sports events' } },
                                { id: 'charity', name: { ka: 'ქველმოქმედება', en: 'Charity' } },
                                { id: 'clubs-hobby', name: { ka: 'კლუბები', en: 'Clubs' } },
                            ]
                        },
                        {
                            id: 'online-communities',
                            name: { ka: '💬 ონლაინ კომუნა', en: '💬 Online Communities' },
                            keywords: [
                                { id: 'discord', name: { ka: 'Discord', en: 'Discord' } },
                                { id: 'reddit', name: { ka: 'Reddit', en: 'Reddit' } },
                                { id: 'youtube', name: { ka: 'YouTube', en: 'YouTube' } },
                                { id: 'blogging-online', name: { ka: 'ბლოგინგი', en: 'Blogging' } },
                                { id: 'online-communication', name: { ka: 'ონლაინ კომუნიკაცია', en: 'Online communication' } },
                                { id: 'podcasts', name: { ka: 'პოდკასტები', en: 'Podcasts' } },
                                { id: 'streaming', name: { ka: 'სტრიმინგი', en: 'Streaming' } },
                                { id: 'forums', name: { ka: 'ფორუმები', en: 'Forums' } },
                            ]
                        },
                        {
                            id: 'shopping-fashion',
                            name: { ka: '🛍️ შოპინგი და მოდა', en: '🛍️ Shopping and Fashion' },
                            keywords: [
                                { id: 'accessories', name: { ka: 'აქსესუარები', en: 'Accessories' } },
                                { id: 'brand', name: { ka: 'ბრენდი', en: 'Brand' } },
                                { id: 'wardrobe', name: { ka: 'გარდერობი', en: 'Wardrobe' } },
                                { id: 'vintage-fashion', name: { ka: 'ვინტაჟი', en: 'Vintage' } },
                                { id: 'collection-fashion', name: { ka: 'კოლექცია', en: 'Collection' } },
                                { id: 'fashion-hobby', name: { ka: 'მოდა', en: 'Fashion' } },
                                { id: 'online-shopping', name: { ka: 'ონლაინ შოპინგი', en: 'Online shopping' } },
                                { id: 'style', name: { ka: 'სტილი', en: 'Style' } },
                                { id: 'trend-fashion', name: { ka: 'ტრენდი', en: 'Trend' } },
                                { id: 'discount', name: { ka: 'ფასდაკლება', en: 'Discount' } },
                            ]
                        },
                        {
                            id: 'pets',
                            name: { ka: '🐾 შინაური ცხოველები', en: '🐾 Pets' },
                            keywords: [
                                { id: 'aquarium', name: { ka: 'აკვარიუმი', en: 'Aquarium' } },
                                { id: 'veterinarian-pets', name: { ka: 'ვეტერინარი', en: 'Veterinarian' } },
                                { id: 'hamster', name: { ka: 'ზაზუნა', en: 'Hamster' } },
                                { id: 'parrot', name: { ka: 'თუთიყუში', en: 'Parrot' } },
                                { id: 'fish-pets', name: { ka: 'თევზები', en: 'Fish' } },
                                { id: 'cat', name: { ka: 'კატა', en: 'Cat' } },
                                { id: 'feeding', name: { ka: 'კვება', en: 'Feeding' } },
                                { id: 'care', name: { ka: 'მოვლა', en: 'Care' } },
                                { id: 'toys', name: { ka: 'სათამაშოები', en: 'Toys' } },
                                { id: 'training', name: { ka: 'წვრთნა', en: 'Training' } },
                                { id: 'breed', name: { ka: 'ჯიში', en: 'Breed' } },
                                { id: 'dog', name: { ka: 'ძაღლი', en: 'Dog' } },
                            ]
                        }
                    ]
                }
            ]
        }
    ],
};