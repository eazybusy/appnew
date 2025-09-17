import { Category } from '../types';

export const TECHNOLOGY_CATEGORY: Category = {
    id: 'technology',
    name: { ka: '🤖💡 ტექნოლოგიები და ინოვაცია', en: '🤖💡 Technologies and Innovation' },
    icon: '🤖💡',
    subCategories: [
        {
            id: 'energy-environment',
            name: { ka: '🔋🌍 ენერგეტიკა და გარემოს დაცვა', en: '🔋🌍 Energy and Environmental Protection' },
            sections: [
                {
                    id: 'energy-sources',
                    name: { ka: 'I. ენერგიის წყაროები', en: 'I. Energy Sources' },
                    subSections: [
                        {
                            id: 'solar-energy',
                            name: { ka: '☀️ მზის ენერგია', en: '☀️ Solar Energy' },
                            keywords: [
                                { id: 'photocell', name: { ka: 'ფოტოელემენტი', en: 'Photocell' } },
                                { id: 'solar-panel', name: { ka: 'მზის პანელი (მონოკრისტალური, პოლიკრისტალური)', en: 'Solar Panel (monocrystalline, polycrystalline)' } },
                                { id: 'photovoltaics', name: { ka: 'ფოტოვოლტაიკა', en: 'Photovoltaics' } },
                                { id: 'photoelectric-effect', name: { ka: 'ფოტოელექტრული ეფექტი', en: 'Photoelectric effect' } },
                                { id: 'heliostat', name: { ka: 'ჰელიოსტატი', en: 'Heliostat' } },
                                { id: 'inverter', name: { ka: 'ინვერტორი', en: 'Inverter' } },
                                { id: 'solar-tracker', name: { ka: 'მზის ტრეკერი', en: 'Solar tracker' } },
                                { id: 'silicon', name: { ka: 'სილიციუმი', en: 'Silicon' } },
                                { id: 'solar-radiation', name: { ka: 'მზის გამოსხივება', en: 'Solar radiation' } },
                                { id: 'solar-thermal-collector', name: { ka: 'მზის თერმული კოლექტორი', en: 'Solar thermal collector' } },
                                { id: 'csp', name: { ka: 'კონცენტრირებული მზის ენერგია (CSP)', en: 'Concentrated solar power (CSP)' } },
                                { id: 'solar-power-plant', name: { ka: 'მზის ელექტროსადგური', en: 'Solar power plant' } },
                            ]
                        },
                        {
                            id: 'wind-energy',
                            name: { ka: 'ქარის ენერგია', en: 'Wind Energy' },
                            keywords: [
                                { id: 'wind-turbine', name: { ka: 'ქარის ტურბინა (ჰორიზონტალური, ვერტიკალური)', en: 'Wind turbine (horizontal-axis, vertical-axis)' } },
                                { id: 'wind-generator', name: { ka: 'ქარის გენერატორი', en: 'Wind generator' } },
                                { id: 'rotor', name: { ka: 'როტორი', en: 'Rotor' } },
                                { id: 'nacelle', name: { ka: 'გონდოლა', en: 'Nacelle' } },
                                { id: 'anemometer', name: { ka: 'ანემომეტრი', en: 'Anemometer' } },
                                { id: 'wind-farm', name: { ka: 'ქარის ელექტროსადგური (ფერმა)', en: 'Wind farm' } },
                                { id: 'offshore-wind-energy', name: { ka: 'ოფშორული (საზღვაო) ქარის ენერგია', en: 'Offshore wind energy' } },
                            ]
                        },
                        {
                            id: 'hydropower',
                            name: { ka: 'ჰიდროენერგეტიკა', en: 'Hydropower' },
                            keywords: [
                                { id: 'hpp', name: { ka: 'ჰიდროელექტროსადგური (ჰესი)', en: 'Hydroelectric power plant (HPP)' } },
                                { id: 'dam-hydro', name: { ka: 'კაშხალი', en: 'Dam' } },
                                { id: 'turbine-hydro', name: { ka: 'ტურბინა', en: 'Turbine' } },
                                { id: 'generator-hydro', name: { ka: 'გენერატორი', en: 'Generator' } },
                                { id: 'reservoir-hydro', name: { ka: 'წყალსაცავი', en: 'Reservoir' } },
                                { id: 'micro-hydro', name: { ka: 'მიკრო ჰესი', en: 'Micro hydro' } },
                                { id: 'wave-energy', name: { ka: 'ტალღური ენერგია', en: 'Wave energy' } },
                                { id: 'tidal-energy', name: { ka: 'მოქცევის ენერგია', en: 'Tidal energy' } },
                                { id: 'pumped-storage-hydroelectricity', name: { ka: 'ჰიდროაკუმულატორი', en: 'Pumped-storage hydroelectricity' } },
                            ]
                        },
                        {
                            id: 'geothermal-energy',
                            name: { ka: 'გეოთერმული ენერგია', en: 'Geothermal Energy' },
                            keywords: [
                                { id: 'geothermal-power-plant', name: { ka: 'გეოთერმული სადგური', en: 'Geothermal power plant' } },
                                { id: 'geyser-geo', name: { ka: 'გეიზერი', en: 'Geyser' } },
                                { id: 'heat-pump', name: { ka: 'სითბური ტუმბო', en: 'Heat pump' } },
                                { id: 'underground-heat', name: { ka: 'მიწისქვეშა სითბო', en: 'Underground heat' } },
                                { id: 'binary-cycle', name: { ka: 'ბინარული ციკლი', en: 'Binary cycle' } },
                                { id: 'dry-steam-power-plant', name: { ka: 'მშრალი ორთქლის სადგური', en: 'Dry steam power plant' } },
                            ]
                        },
                        {
                            id: 'biomass-energy',
                            name: { ka: 'ბიომასის ენერგია', en: 'Biomass Energy' },
                            keywords: [
                                { id: 'biomass', name: { ka: 'ბიომასა', en: 'Biomass' } },
                                { id: 'biofuel-biomass', name: { ka: 'ბიოსაწვავი (ბიოეთანოლი, ბიოდიზელი)', en: 'Biofuel (bioethanol, biodiesel)' } },
                                { id: 'biogas', name: { ka: 'ბიოგაზი', en: 'Biogas' } },
                                { id: 'biomass-boiler', name: { ka: 'ბიომასის ქვაბი', en: 'Biomass boiler' } },
                                { id: 'gasification-biomass', name: { ka: 'გაზიფიკაცია', en: 'Gasification' } },
                                { id: 'pyrolysis-biomass', name: { ka: 'პირוליზი', en: 'Pyrolysis' } },
                            ]
                        },
                        {
                            id: 'fossil-fuels',
                            name: { ka: '🏭 წიაღისეული საწვავი', en: '🏭 Fossil Fuels' },
                            keywords: [
                                { id: 'petroleum', name: { ka: 'ნავთობი', en: 'Petroleum (Oil)' } },
                                { id: 'natural-gas-fossil', name: { ka: 'ბუნებრივი აირი', en: 'Natural gas' } },
                                { id: 'coal-fossil', name: { ka: 'ქვანახშირი', en: 'Coal' } },
                                { id: 'peat', name: { ka: 'ტორფი', en: 'Peat' } },
                                { id: 'shale-fossil', name: { ka: 'ფიქალი', en: 'Shale' } },
                                { id: 'combustion', name: { ka: 'წვა', en: 'Combustion' } },
                                { id: 'greenhouse-gases-fossil', name: { ka: 'სათბურის აირები', en: 'Greenhouse gases' } },
                                { id: 'petroleum-products', name: { ka: 'ნავთობპროდუქტები', en: 'Petroleum products' } },
                                { id: 'fractional-distillation', name: { ka: 'ფრაქციული დისტილაცია', en: 'Fractional distillation' } },
                                { id: 'cracking-fossil', name: { ka: 'კრეკინგი', en: 'Cracking' } },
                            ]
                        },
                        {
                            id: 'thermal-power-plants',
                            name: { ka: 'თბოელექტროსადგურები', en: 'Thermal Power Plants' },
                            keywords: [
                                { id: 'tpp', name: { ka: 'თბოელექტროსადგური (თესი)', en: 'Thermal power plant (TPP)' } },
                                { id: 'steam-turbine', name: { ka: 'ორთქლის ტურბინა', en: 'Steam turbine' } },
                                { id: 'combined-cycle-power-plant', name: { ka: 'კომბინირებული ციკლის სადგური', en: 'Combined cycle power plant' } },
                                { id: 'emissions', name: { ka: 'გამონაბოლქვი', en: 'Emissions' } },
                                { id: 'cooling-tower', name: { ka: 'გრიგალი (გამაგრილებელი კოშკი)', en: 'Cooling tower' } },
                            ]
                        },
                        {
                            id: 'nuclear-fission-reactors',
                            name: { ka: '⚛️ ბირთვული დაშლის რეაქტორები', en: '⚛️ Nuclear Fission Reactors' },
                            keywords: [
                                { id: 'nuclear-reactor-fission', name: { ka: 'ბირთვული რეაქტორი', en: 'Nuclear reactor' } },
                                { id: 'nuclear-fission-fission', name: { ka: 'ბირთვული დაშლა', en: 'Nuclear fission' } },
                                { id: 'uranium', name: { ka: 'ურანი', en: 'Uranium' } },
                                { id: 'plutonium', name: { ka: 'პლუტონიუმი', en: 'Plutonium' } },
                                { id: 'radioactive-waste', name: { ka: 'რადიოაქტიური ნარჩენები', en: 'Radioactive waste' } },
                                { id: 'npp', name: { ka: 'ატომური ელექტროსადგური (აესი)', en: 'Nuclear power plant (NPP)' } },
                                { id: 'chain-reaction-fission', name: { ka: 'ჯაჭვური რეაქცია', en: 'Chain reaction' } },
                                { id: 'neutron-moderation', name: { ka: 'ნეიტრონების შენელება', en: 'Neutron moderation' } },
                                { id: 'control-rod', name: { ka: 'საკონტროლო ღერო', en: 'Control rod' } },
                            ]
                        },
                        {
                            id: 'nuclear-fusion-research',
                            name: { ka: 'ბირთვული სინთეზის კვლევები', en: 'Nuclear Fusion Research' },
                            keywords: [
                                { id: 'nuclear-fusion-fusion', name: { ka: 'ბირთვული სინთეზი', en: 'Nuclear fusion' } },
                                { id: 'thermonuclear-reaction-fusion', name: { ka: 'თერმობირთვული რეაქცია', en: 'Thermonuclear reaction' } },
                                { id: 'tokamak-fusion', name: { ka: 'ტოკამაკი', en: 'Tokamak' } },
                                { id: 'stellarator-fusion', name: { ka: 'სტელარატორი', en: 'Stellarator' } },
                                { id: 'iter', name: { ka: 'ITER (საერთაშორისო თერმობირთვული ექსპერიმენტული რეაქტორი)', en: 'ITER (International Thermonuclear Experimental Reactor)' } },
                                { id: 'plasma-fusion', name: { ka: 'პლაზმა', en: 'Plasma' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'energy-management-efficiency',
                    name: { ka: '🔌 II. ენერგიის მართვა და ეფექტურობა', en: '🔌 II. Energy Management and Efficiency' },
                    subSections: [
                        {
                            id: 'energy-storage-technologies',
                            name: { ka: '🔋 ენერგიის შენახვის ტექნოლოგიები', en: '🔋 Energy Storage Technologies' },
                            keywords: [
                                { id: 'accumulator', name: { ka: 'აკუმულატორი', en: 'Accumulator' } },
                                { id: 'battery', name: { ka: 'ბატარეა (ლითიუმ-იონური, მყარსხეულიანი)', en: 'Battery (lithium-ion, solid-state)' } },
                                { id: 'pumped-storage-hydro', name: { ka: 'ჰიდროაკუმულირებადი სადგური', en: 'Pumped-storage hydroelectricity' } },
                                { id: 'supercapacitor', name: { ka: 'სუპერკონდენსატორი', en: 'Supercapacitor' } },
                                { id: 'flywheel-energy-storage', name: { ka: 'მფრინავი ბორბალი (Flywheel)', en: 'Flywheel energy storage' } },
                                { id: 'energy-storage', name: { ka: 'ენერგიის შენახვა', en: 'Energy storage' } },
                                { id: 'kinetic-energy-storage', name: { ka: 'კინეტიკური ენერგიის შენახვა', en: 'Kinetic energy storage' } },
                                { id: 'thermal-energy-storage', name: { ka: 'თერმული ენერგიის შენახვა', en: 'Thermal energy storage' } },
                            ]
                        },
                        {
                            id: 'energy-efficiency',
                            name: { ka: '💡 ენერგოეფექტურობა', en: '💡 Energy Efficiency' },
                            keywords: [
                                { id: 'energy-efficiency-term', name: { ka: 'ენერგოეფექტურობა', en: 'Energy efficiency' } },
                                { id: 'thermal-insulation-eff', name: { ka: 'თბოიზოლაცია', en: 'Thermal insulation' } },
                                { id: 'led-lighting', name: { ka: 'LED განათება', en: 'LED lighting' } },
                                { id: 'energy-audit', name: { ka: 'ენერგოაუდიტი', en: 'Energy audit' } },
                                { id: 'passive-house', name: { ka: 'პასიური სახლი', en: 'Passive house' } },
                                { id: 'energy-conservation', name: { ka: 'ენერგიის დაზოგვა', en: 'Energy conservation' } },
                                { id: 'recuperation', name: { ka: 'რეკუპერაცია', en: 'Recuperation' } },
                                { id: 'cogeneration', name: { ka: 'კოგენერაცია', en: 'Cogeneration' } },
                                { id: 'energy-performance-certificate', name: { ka: 'ენერგეტიკული სერტიფიკატი', en: 'Energy performance certificate' } },
                            ]
                        },
                        {
                            id: 'smart-grids',
                            name: { ka: '🕸️ ჭკვიანი ქსელები (Smart Grids)', en: '🕸️ Smart Grids' },
                            keywords: [
                                { id: 'smart-grid', name: { ka: 'ჭკვიანი ქსელი', en: 'Smart grid' } },
                                { id: 'smart-meter', name: { ka: 'ჭკვიანი მრიცხველი', en: 'Smart meter' } },
                                { id: 'demand-side-management', name: { ka: 'ენერგიის მოთხოვნის მართვა', en: 'Demand-side management' } },
                                { id: 'distributed-generation', name: { ka: 'განაწილებული გენერაცია', en: 'Distributed generation' } },
                                { id: 'microgrid', name: { ka: 'მიკროქსელი (Microgrid)', en: 'Microgrid' } },
                                { id: 'two-way-communication', name: { ka: 'ორმხრივი კომუნიკაცია', en: 'Two-way communication' } },
                                { id: 'grid-balancing', name: { ka: 'ქსელის ბალანსირება', en: 'Grid balancing' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'environmental-technologies',
                    name: { ka: '🌱 III. გარემოსდაცვითი ტექნოლოგიები (ეკოტექნოლოგიები)', en: '🌱 III. Environmental Technologies (Ecotechnologies)' },
                    subSections: [
                        {
                            id: 'waste-management-recycling',
                            name: { ka: '♻️ ნარჩენების მართვა და გადამუშავება', en: '♻️ Waste Management and Recycling' },
                            keywords: [
                                { id: 'recycling-technologies', name: { ka: 'გადამუშავების ტექნოლოგიები (Recycling)', en: 'Recycling Technologies' } },
                                { id: 'recycling', name: { ka: 'გადამუშავება', en: 'Recycling' } },
                                { id: 'waste-separation', name: { ka: 'ნარჩენების სეპარაცია (დახარისხება)', en: 'Waste separation (sorting)' } },
                                { id: 'secondary-raw-material', name: { ka: 'მეორადი ნედლეული', en: 'Secondary raw material' } },
                                { id: 'circular-economy', name: { ka: 'ცირკულარული ეკონომიკა', en: 'Circular economy' } },
                                { id: 'upcycling', name: { ka: 'Upcycling', en: 'Upcycling' } },
                                { id: 'waste-hierarchy', name: { ka: 'ნარჩენების იერარქია', en: 'Waste hierarchy' } },
                                { id: 'reuse', name: { ka: 'ხელახალი გამოყენება', en: 'Reuse' } },
                                { id: 'composting-biodegradation', name: { ka: 'კომპოსტირება და ბიოდეგრადაცია', en: 'Composting and Biodegradation' } },
                                { id: 'composting', name: { ka: 'კომპოსტირება', en: 'Composting' } },
                                { id: 'biodegradation', name: { ka: 'ბიოდეგრადაცია', en: 'Biodegradation' } },
                                { id: 'organic-waste', name: { ka: 'ორგანული ნარჩენები', en: 'Organic waste' } },
                                { id: 'anaerobic-digestion', name: { ka: 'ანაერობული დაშლა', en: 'Anaerobic digestion' } },
                                { id: 'bioplastic', name: { ka: 'ბიოპლასტმასა', en: 'Bioplastic' } },
                                { id: 'vermicomposting', name: { ka: 'ვერმიკომპოსტირება', en: 'Vermicomposting' } },
                                { id: 'waste-to-energy', name: { ka: 'ნარჩენებიდან ენერგიის მიღება', en: 'Waste-to-Energy' } },
                                { id: 'incineration', name: { ka: 'ინსინერაცია', en: 'Incineration' } },
                                { id: 'pyrolysis-waste', name: { ka: 'პიროლიზი', en: 'Pyrolysis' } },
                                { id: 'gasification-waste', name: { ka: 'გაზიფიკაცია', en: 'Gasification' } },
                                { id: 'landfill-gas', name: { ka: 'ნაგავსაყრელის გაზი', en: 'Landfill gas' } },
                                { id: 'sanitary-landfill', name: { ka: 'სანიტარული პოლიგონი', en: 'Sanitary landfill' } },
                            ]
                        },
                        {
                            id: 'pollution-control',
                            name: { ka: '💨 დაბინძურების კონტროლი', en: '💨 Pollution Control' },
                            keywords: [
                                { id: 'water-purification-filtration', name: { ka: 'წყლის გაწმენდა და ფილტრაცია', en: 'Water Purification and Filtration' } },
                                { id: 'water-treatment-plant', name: { ka: 'წყლის გამწმენდი ნაგებობა', en: 'Water treatment plant' } },
                                { id: 'filtration', name: { ka: 'ფილტრაცია', en: 'Filtration' } },
                                { id: 'activated-carbon', name: { ka: 'აქტივირებული ნახშირი', en: 'Activated carbon' } },
                                { id: 'reverse-osmosis', name: { ka: 'უკუოსმოსი', en: 'Reverse osmosis' } },
                                { id: 'disinfection-water', name: { ka: 'დეზინფექცია (ქლორირება, ულტრაიისფერი)', en: 'Disinfection (chlorination, ultraviolet)' } },
                                { id: 'desalination', name: { ka: 'გამტკნარება', en: 'Desalination' } },
                                { id: 'aeration', name: { ka: 'აერაცია', en: 'Aeration' } },
                                { id: 'sedimentation', name: { ka: 'სედიმენტაცია', en: 'Sedimentation' } },
                                { id: 'air-filtration-emission-control', name: { ka: 'ჰაერის ფილტრაცია და ემისიების კონტროლი', en: 'Air Filtration and Emission Control' } },
                                { id: 'air-filter', name: { ka: 'ჰაერის ფილტრი', en: 'Air filter' } },
                                { id: 'emission-control', name: { ka: 'ემისიების კონტროლი', en: 'Emission control' } },
                                { id: 'catalytic-converter', name: { ka: 'კატალიზური კონვერტორი', en: 'Catalytic converter' } },
                                { id: 'scrubber', name: { ka: 'სკრუბერი', en: 'Scrubber' } },
                                { id: 'electrostatic-precipitator', name: { ka: 'ელექტროსტატიკური ფილტრი', en: 'Electrostatic precipitator' } },
                                { id: 'ccs', name: { ka: 'ნახშირბადის დაჭერა და შენახვა (CCS)', en: 'Carbon Capture and Storage (CCS)' } },
                                { id: 'soil-remediation', name: { ka: 'ნიადაგის გაჯანსაღება (რემედიაცია)', en: 'Soil Remediation' } },
                                { id: 'soil-remediation-term', name: { ka: 'ნიადაგის რემედიაცია', en: 'Soil remediation' } },
                                { id: 'bioremediation', name: { ka: 'ბიორემედიაცია', en: 'Bioremediation' } },
                                { id: 'phytoremediation', name: { ka: 'ფიტორემედიაცია', en: 'Phytoremediation' } },
                                { id: 'contaminated-site-cleanup', name: { ka: 'დაბინძურებული ტერიტორიების გაწმენდა', en: 'Contaminated site cleanup' } },
                                { id: 'soil-washing', name: { ka: 'ნიადაგის გამორეცხვა', en: 'Soil washing' } },
                            ]
                        },
                        {
                            id: 'sustainable-resources-technologies',
                            name: { ka: '🏞️ მდგრადი რესურსები და ტექნოლოგიები', en: '🏞️ Sustainable Resources and Technologies' },
                            keywords: [
                                { id: 'sustainable-agriculture', name: { ka: 'მდგრადი სოფლის მეურნეობა (AgriTech)', en: 'Sustainable Agriculture (AgriTech)' } },
                                { id: 'agritech', name: { ka: 'აგროტექნოლოგიები', en: 'AgriTech' } },
                                { id: 'precision-agriculture', name: { ka: 'ზუსტი ფერმერობა', en: 'Precision agriculture' } },
                                { id: 'hydroponics', name: { ka: 'ჰიდროპონიკა', en: 'Hydroponics' } },
                                { id: 'aeroponics', name: { ka: 'აეროპონიკა', en: 'Aeroponics' } },
                                { id: 'aquaponics', name: { ka: 'აკვაპონიკა', en: 'Aquaponics' } },
                                { id: 'drip-irrigation', name: { ka: 'წვეთოვანი რწყვა', en: 'Drip irrigation' } },
                                { id: 'vertical-farming', name: { ka: 'ვერტიკალური ფერმები', en: 'Vertical farming' } },
                                { id: 'genetic-engineering-agri', name: { ka: 'გენური ინჟინერია', en: 'Genetic engineering' } },
                                { id: 'permaculture', name: { ka: 'პერმაკულტურა', en: 'Permaculture' } },
                                { id: 'green-building-tech', name: { ka: 'მწვანე მშენებლობა', en: 'Green Building' } },
                                { id: 'green-building-term', name: { ka: 'მწვანე შენობა', en: 'Green building' } },
                                { id: 'eco-friendly-materials', name: { ka: 'ეკოლოგიურად სუფთა მასალები', en: 'Eco-friendly materials' } },
                                { id: 'energy-efficient-design', name: { ka: 'ენერგოეფექტური დიზაინი', en: 'Energy-efficient design' } },
                                { id: 'leed-certification', name: { ka: 'LEED სერტიფიკატი', en: 'LEED certification' } },
                                { id: 'green-roof', name: { ka: 'მწვანე სახურავი', en: 'Green roof' } },
                                { id: 'passive-cooling-heating', name: { ka: 'პასიური გაგრილება/გათბობა', en: 'Passive cooling/heating' } },
                                { id: 'water-resource-management', name: { ka: 'წყლის რესურსების მართვა', en: 'Water Resource Management' } },
                                { id: 'water-conservation', name: { ka: 'წყლის კონსერვაცია', en: 'Water conservation' } },
                                { id: 'rainwater-harvesting', name: { ka: 'წვიმის წყლის შეგროვება', en: 'Rainwater harvesting' } },
                                { id: 'water-efficiency', name: { ka: 'წყლის ეფექტიანი გამოყენება', en: 'Water efficiency' } },
                                { id: 'greywater-recycling', name: { ka: 'ნაცრისფერი წყლის გადამუშავება', en: 'Greywater recycling' } },
                            ]
                        },
                        {
                            id: 'environmental-monitoring',
                            name: { ka: '🛰️ გარემოს მონიტორინგი', en: '🛰️ Environmental Monitoring' },
                            keywords: [
                                { id: 'sensors-drones-satellite-monitoring', name: { ka: 'სენსორები, დრონები და სატელიტური მონიტორინგი', en: 'Sensors, Drones, and Satellite Monitoring' } },
                                { id: 'environmental-sensor', name: { ka: 'გარემოს სენსორი', en: 'Environmental sensor' } },
                                { id: 'drone-env', name: { ka: 'დრონი', en: 'Drone' } },
                                { id: 'satellite-imagery', name: { ka: 'სატელიტური სურათი', en: 'Satellite imagery' } },
                                { id: 'remote-sensing-env', name: { ka: 'დისტანციური ზონდირება', en: 'Remote sensing' } },
                                { id: 'gis-env', name: { ka: 'გეოინფორმაციული სისტემები (GIS)', en: 'Geographic Information Systems (GIS)' } },
                                { id: 'lidar-env', name: { ka: 'ლიდარი (LIDAR)', en: 'LIDAR' } },
                                { id: 'spectrometer-env', name: { ka: 'სპექტრომეტრი', en: 'Spectrometer' } },
                                { id: 'climate-modeling', name: { ka: 'კლიმატური მოდელირება', en: 'Climate Modeling' } },
                                { id: 'climate-model', name: { ka: 'კლიმატური მოდელი', en: 'Climate model' } },
                                { id: 'computer-simulation-climate', name: { ka: 'კომპიუტერული სიმულაცია', en: 'Computer simulation' } },
                                { id: 'climate-change-prediction', name: { ka: 'კლიმატის ცვლილების პროგნოზირება', en: 'Climate change prediction' } },
                                { id: 'data-analysis-climate', name: { ka: 'მონაცემთა ანალიზი', en: 'Data analysis' } },
                                { id: 'paleoclimatology-climate', name: { ka: 'პალეოკლიმატოლოგია', en: 'Paleoclimatology' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'engineering',
            name: { ka: '🛠️ ინჟინერია', en: '🛠️ Engineering' },
            sections: [
                {
                    id: 'classical-fundamental-engineering',
                    name: { ka: '🏛️ I. კლასიკური და ფუნდამენტური ინჟინერია', en: '🏛️ I. Classical and Fundamental Engineering' },
                    subSections: [
                        {
                            id: 'civil-engineering',
                            name: { ka: '🏗️ სამოქალაქო ინჟინერია', en: '🏗️ Civil Engineering' },
                            keywords: [
                                { id: 'structural-engineering', name: { ka: 'სტრუქტურული ინჟინერია', en: 'Structural Engineering' } },
                                { id: 'bridge', name: { ka: 'ხიდი', en: 'Bridge' } },
                                { id: 'building', name: { ka: 'შენობა', en: 'Building' } },
                                { id: 'tower', name: { ka: 'კოშკი', en: 'Tower' } },
                                { id: 'beam', name: { ka: 'კოჭი', en: 'Beam' } },
                                { id: 'column', name: { ka: 'სვეტი', en: 'Column' } },
                                { id: 'foundation-civil', name: { ka: 'საძირკველი', en: 'Foundation' } },
                                { id: 'rebar', name: { ka: 'არმატურა', en: 'Rebar (Reinforcement bar)' } },
                                { id: 'pile', name: { ka: 'ხიმინჯი', en: 'Pile' } },
                                { id: 'load-civil', name: { ka: 'დატვირთვა', en: 'Load' } },
                                { id: 'strength', name: { ka: 'სიმტკიცე', en: 'Strength' } },
                                { id: 'deformation-civil', name: { ka: 'დეფორმაცია', en: 'Deformation' } },
                                { id: 'structural-mechanics', name: { ka: 'სამშენებლო მექანიკა', en: 'Structural mechanics' } },
                                { id: 'strength-of-materials', name: { ka: 'მასალათა გამძლეობა', en: 'Strength of materials' } },
                                { id: 'transportation-engineering', name: { ka: 'სატრანსპორტო ინჟინერია', en: 'Transportation Engineering' } },
                                { id: 'road', name: { ka: 'გზა', en: 'Road' } },
                                { id: 'highway', name: { ka: 'ავტომაგისტრალი', en: 'Highway' } },
                                { id: 'airport', name: { ka: 'აეროპორტი', en: 'Airport' } },
                                { id: 'railway', name: { ka: 'რკინიგზა', en: 'Railway' } },
                                { id: 'port', name: { ka: 'პორტი', en: 'Port' } },
                                { id: 'traffic-flow', name: { ka: 'სატრანსპორტო ნაკადი', en: 'Traffic flow' } },
                                { id: 'pavement', name: { ka: 'გზის საფარი', en: 'Pavement' } },
                                { id: 'logistics-transport', name: { ka: 'ლოგისტიკა', en: 'Logistics' } },
                                { id: 'traffic-management', name: { ka: 'საგზაო მოძრაობის მართვა', en: 'Traffic management' } },
                                { id: 'urban-infrastructure', name: { ka: 'ურბანული ინფრასტრუქტურა', en: 'Urban infrastructure' } },
                                { id: 'hydraulic-engineering', name: { ka: 'ჰიდროტექნიკური ინჟინერია', en: 'Hydraulic Engineering' } },
                                { id: 'dam-hydraulic', name: { ka: 'კაშხალი', en: 'Dam' } },
                                { id: 'irrigation-system', name: { ka: 'სარწყავი სისტემა', en: 'Irrigation system' } },
                                { id: 'canal', name: { ka: 'არხი', en: 'Canal' } },
                                { id: 'water-supply', name: { ka: 'წყალმომარაგება', en: 'Water supply' } },
                                { id: 'sewerage-hydraulic', name: { ka: 'კანალიზაცია', en: 'Sewerage' } },
                                { id: 'hydraulics', name: { ka: 'ჰიდრავლიკა', en: 'Hydraulics' } },
                                { id: 'drainage-system', name: { ka: 'სადრენაჟო სისტემა', en: 'Drainage system' } },
                                { id: 'reservoir-hydraulic', name: { ka: 'წყალსაცავი', en: 'Reservoir' } },
                            ]
                        },
                        {
                            id: 'mechanical-engineering',
                            name: { ka: '⚙️ მექანიკური ინჟინერია', en: '⚙️ Mechanical Engineering' },
                            keywords: [
                                { id: 'thermal-engineering-energy-systems', name: { ka: 'თერმული ინჟინერია და ენერგეტიკული სისტემები', en: 'Thermal Engineering and Energy Systems' } },
                                { id: 'internal-combustion-engine', name: { ka: 'შიდა წვის ძრავა', en: 'Internal combustion engine' } },
                                { id: 'jet-engine', name: { ka: 'რეაქტიული ძრავა', en: 'Jet engine' } },
                                { id: 'turbine-mech', name: { ka: 'ტურბინა', en: 'Turbine' } },
                                { id: 'heat-exchanger', name: { ka: 'თბოგადამცემი', en: 'Heat exchanger' } },
                                { id: 'thermodynamics-mech', name: { ka: 'თერმოდინამიკა', en: 'Thermodynamics' } },
                                { id: 'heating', name: { ka: 'გათბობა', en: 'Heating' } },
                                { id: 'ventilation', name: { ka: 'ვენტილაცია', en: 'Ventilation' } },
                                { id: 'hvac', name: { ka: 'კონდიცირება (HVAC)', en: 'Air conditioning (HVAC)' } },
                                { id: 'mechanism-design-machine-building', name: { ka: 'მექანიზმების დიზაინი და მანქანათმშენებლობა', en: 'Mechanism Design and Machine Building' } },
                                { id: 'mechanism', name: { ka: 'მექანიზმი', en: 'Mechanism' } },
                                { id: 'gear', name: { ka: 'კბილანა', en: 'Gear' } },
                                { id: 'bearing', name: { ka: 'საკისარი', en: 'Bearing' } },
                                { id: 'cad', name: { ka: 'კომპიუტერული დაპროექტება (CAD)', en: 'Computer-Aided Design (CAD)' } },
                                { id: 'cam', name: { ka: 'კომპიუტერული წარმოება (CAM)', en: 'Computer-Aided Manufacturing (CAM)' } },
                                { id: '3d-modeling-mech', name: { ka: '3D მოდელირება', en: '3D modeling' } },
                                { id: 'robotics-mech', name: { ka: 'რობოტექნიკა', en: 'Robotics' } },
                                { id: 'kinematics-mech', name: { ka: 'კინემატიკა', en: 'Kinematics' } },
                                { id: 'mechatronics', name: { ka: 'მექატრონიკა', en: 'Mechatronics' } },
                                { id: 'mechatronics-term', name: { ka: 'მექატრონიკა', en: 'Mechatronics' } },
                                { id: 'robot-mech', name: { ka: 'რობოტი', en: 'Robot' } },
                                { id: 'sensor-mech', name: { ka: 'სენსორი', en: 'Sensor' } },
                                { id: 'actuator', name: { ka: 'ამძრავი (Actuator)', en: 'Actuator' } },
                                { id: 'controller-mech', name: { ka: 'კონტროლერი', en: 'Controller' } },
                                { id: 'automation-mech', name: { ka: 'ავტომატიზაცია', en: 'Automation' } },
                                { id: 'cybernetics', name: { ka: 'კიბერნეტიკა', en: 'Cybernetics' } },
                                { id: 'embedded-systems-mech', name: { ka: 'ჩაშენებული სისტემები', en: 'Embedded systems' } },
                            ]
                        },
                        {
                            id: 'chemical-engineering',
                            name: { ka: '⚗️ ქიმიური ინჟინერია', en: '⚗️ Chemical Engineering' },
                            keywords: [
                                { id: 'process-engineering', name: { ka: 'პროცესების ინჟინერია', en: 'Process Engineering' } },
                                { id: 'chemical-reactor', name: { ka: 'ქიმიური რეაქტორი', en: 'Chemical reactor' } },
                                { id: 'mass-transfer-chem', name: { ka: 'მასის გადაცემა', en: 'Mass transfer' } },
                                { id: 'heat-transfer-chem', name: { ka: 'სითბოს გადაცემა', en: 'Heat transfer' } },
                                { id: 'distillation-chem', name: { ka: 'დისტილაცია', en: 'Distillation' } },
                                { id: 'extraction-chem', name: { ka: 'ექსტრაქცია', en: 'Extraction' } },
                                { id: 'separation', name: { ka: 'სეპარაცია', en: 'Separation' } },
                                { id: 'catalysis-chem', name: { ka: 'კატალიზი', en: 'Catalysis' } },
                                { id: 'process-optimization', name: { ka: 'პროცესის ოპტიმიზაცია', en: 'Process optimization' } },
                                { id: 'reactor-design', name: { ka: 'რეაქტორის დიზაინი', en: 'Reactor design' } },
                                { id: 'biochemical-engineering', name: { ka: 'ბიოქიმიური ინჟინერია', en: 'Biochemical Engineering' } },
                                { id: 'bioreactor', name: { ka: 'ბიორეაქტორი', en: 'Bioreactor' } },
                                { id: 'fermentation-chem', name: { ka: 'ფერმენტაცია', en: 'Fermentation' } },
                                { id: 'biotechnology-chem', name: { ka: 'ბიოტექნოლოგია', en: 'Biotechnology' } },
                                { id: 'pharmaceutical-manufacturing', name: { ka: 'ფარმაცევტული წარმოება', en: 'Pharmaceutical manufacturing' } },
                                { id: 'biofuel-production', name: { ka: 'ბიოსაწვავის წარმოება', en: 'Biofuel production' } },
                                { id: 'tissue-engineering-chem', name: { ka: 'ქსოვილური ინჟინერია', en: 'Tissue engineering' } },
                            ]
                        },
                        {
                            id: 'electrical-engineering',
                            name: { ka: '⚡ ელექტროინჟინერია', en: '⚡ Electrical Engineering' },
                            keywords: [
                                { id: 'power-systems', name: { ka: 'ენერგეტიკული სისტემები', en: 'Power Systems' } },
                                { id: 'power-generation', name: { ka: 'ელექტროენერგიის გენერაცია', en: 'Power generation' } },
                                { id: 'transmission', name: { ka: 'გადაცემა', en: 'Transmission' } },
                                { id: 'distribution', name: { ka: 'განაწილება', en: 'Distribution' } },
                                { id: 'transformer', name: { ka: 'ტრანსფორმატორი', en: 'Transformer' } },
                                { id: 'generator-elec', name: { ka: 'გენერატორი', en: 'Generator' } },
                                { id: 'electric-motor', name: { ka: 'ელექტროძრავა', en: 'Electric motor' } },
                                { id: 'power-system', name: { ka: 'ენერგოსისტემა', en: 'Power system' } },
                                { id: 'high-voltage', name: { ka: 'მაღალი ძაბვა', en: 'High voltage' } },
                                { id: 'substation', name: { ka: 'ქვესადგური', en: 'Substation' } },
                                { id: 'control-systems', name: { ka: 'მართვის სისტემები', en: 'Control Systems' } },
                                { id: 'control-theory', name: { ka: 'მართვის თეორია', en: 'Control theory' } },
                                { id: 'feedback', name: { ka: 'უკუკავშირი', en: 'Feedback' } },
                                { id: 'controller-elec', name: { ka: 'კონტროლერი', en: 'Controller' } },
                                { id: 'automation-elec', name: { ka: 'ავტომატიზაცია', en: 'Automation' } },
                                { id: 'electrical-circuit', name: { ka: 'ელექტრული წრედი', en: 'Electrical circuit' } },
                                { id: 'circuit-design', name: { ka: 'სქემოტექნიკა', en: 'Circuit design' } },
                                { id: 'plc', name: { ka: 'PLC (პროგრამირებადი ლოგიკური კონტროლერი)', en: 'PLC (Programmable Logic Controller)' } },
                                { id: 'sensor-networks', name: { ka: 'სენსორული ქსელები', en: 'Sensor networks' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'computer-electronic-engineering',
                    name: { ka: '💻 II. კომპიუტერული და ელექტრონული ინჟინერია', en: '💻 II. Computer and Electronic Engineering' },
                    subSections: [
                        {
                            id: 'electronic-engineering',
                            name: { ka: '🔌 ელექტრონული ინჟინერია', en: '🔌 Electronic Engineering' },
                            keywords: [
                                { id: 'microelectronics', name: { ka: 'მიკროელექტრონიკა', en: 'Microelectronics' } },
                                { id: 'integrated-circuit', name: { ka: 'ინტეგრირებული სქემა (ჩიპი)', en: 'Integrated circuit (chip)' } },
                                { id: 'transistor', name: { ka: 'ტრანზისტორი', en: 'Transistor' } },
                                { id: 'diode', name: { ka: 'დიოდი', en: 'Diode' } },
                                { id: 'semiconductor-elec', name: { ka: 'ნახევარგამტარი', en: 'Semiconductor' } },
                                { id: 'pcb', name: { ka: 'ნაბეჭდი პლატა (PCB)', en: 'Printed Circuit Board (PCB)' } },
                                { id: 'microchip', name: { ka: 'მიკროსქემა', en: 'Microchip' } },
                                { id: 'vlsi', name: { ka: 'VLSI (ძალიან დიდი ინტეგრაციის სქემა)', en: 'VLSI (Very Large Scale Integration)' } },
                                { id: 'telecommunications', name: { ka: 'ტელეკომუნიკაციები', en: 'Telecommunications' } },
                                { id: 'signal-processing', name: { ka: 'სიგნალების დამუშავება', en: 'Signal Processing' } },
                                { id: 'signal', name: { ka: 'სიგნალი (ანალოგური, ციფრული)', en: 'Signal (analog, digital)' } },
                                { id: 'antenna', name: { ka: 'ანტენა', en: 'Antenna' } },
                                { id: 'modulation', name: { ka: 'მოდულაცია', en: 'Modulation' } },
                                { id: 'filtration', name: { ka: 'ფილტრაცია', en: 'Filtration' } },
                                { id: 'fiber-optic-communication', name: { ka: 'ოპტიკურ-ბოჭკოვანი კავშირი', en: 'Fiber-optic communication' } },
                                { id: 'mobile-communication', name: { ka: 'მობილური კავშირგაბმულობა (4G, 5G, 6G)', en: 'Mobile communication (4G, 5G, 6G)' } },
                                { id: 'wi-fi-telecom', name: { ka: 'Wi-Fi', en: 'Wi-Fi' } },
                                { id: 'bluetooth', name: { ka: 'Bluetooth', en: 'Bluetooth' } },
                            ]
                        },
                        {
                            id: 'computer-engineering',
                            name: { ka: '🖥️ კომპიუტერული ინჟინერია', en: '🖥️ Computer Engineering' },
                            keywords: [
                                { id: 'computer-architecture', name: { ka: 'კომპიუტერული არქიტექტურა (Hardware)', en: 'Computer Architecture (Hardware)' } },
                                { id: 'hardware', name: { ka: 'აპარატურული უზრუნველყოფა', en: 'Hardware' } },
                                { id: 'cpu', name: { ka: 'ცენტრალური პროცესორი (CPU)', en: 'Central Processing Unit (CPU)' } },
                                { id: 'gpu', name: { ka: 'გრაფიკული პროცესორი (GPU)', en: 'Graphics Processing Unit (GPU)' } },
                                { id: 'ram', name: { ka: 'მეხსიერება (RAM)', en: 'Memory (RAM)' } },
                                { id: 'hdd-ssd', name: { ka: 'მყარი დისკი (HDD, SSD)', en: 'Hard Drive (HDD, SSD)' } },
                                { id: 'motherboard', name: { ka: 'დედაპლატა', en: 'Motherboard' } },
                                { id: 'video-card', name: { ka: 'ვიდეობარათი', en: 'Video card' } },
                                { id: 'peripheral-devices', name: { ka: 'პერიფერიული მოწყობილობები', en: 'Peripheral devices' } },
                                { id: 'embedded-systems', name: { ka: 'ჩაშენებული სისტემები (Embedded Systems)', en: 'Embedded Systems' } },
                                { id: 'embedded-system', name: { ka: 'ჩაშენებული სისტემა', en: 'Embedded system' } },
                                { id: 'microcontroller', name: { ka: 'მიკროკონტროლერი', en: 'Microcontroller' } },
                                { id: 'rtos', name: { ka: 'რეალური დროის სისტემები (RTOS)', en: 'Real-Time Operating Systems (RTOS)' } },
                                { id: 'iot-comp', name: { ka: 'ნივთების ინტერნეტი (IoT)', en: 'Internet of Things (IoT)' } },
                                { id: 'firmware', name: { ka: 'firmware', en: 'firmware' } },
                            ]
                        },
                        {
                            id: 'software-engineering',
                            name: { ka: '👨‍💻 პროგრამული უზრუნველყოფის ინჟინერია', en: '👨‍💻 Software Engineering' },
                            keywords: [
                                { id: 'systems-design-architecture', name: { ka: 'სისტემების დაპროექტება და არქიტექტურა', en: 'Systems Design and Architecture' } },
                                { id: 'software-architecture', name: { ka: 'პროგრამული არქიტექტურა', en: 'Software architecture' } },
                                { id: 'algorithm-soft', name: { ka: 'ალგორითმი', en: 'Algorithm' } },
                                { id: 'data-structure-soft', name: { ka: 'მონაცემთა სტრუქტურა', en: 'Data structure' } },
                                { id: 'database-soft', name: { ka: 'მონაცემთა ბაზა', en: 'Database' } },
                                { id: 'operating-system', name: { ka: 'ოპერაციული სისტემა', en: 'Operating system' } },
                                { id: 'programming-language', name: { ka: 'პროგრამირების ენა', en: 'Programming language' } },
                                { id: 'api', name: { ka: 'API (აპლიკაციის პროგრამირების ინტერფეისი)', en: 'API (Application Programming Interface)' } },
                                { id: 'sdk', name: { ka: 'SDK (Software Development Kit)', en: 'SDK (Software Development Kit)' } },
                                { id: 'software-testing-qa', name: { ka: 'ტესტირება და ხარისხის უზრუნველყოფა', en: 'Software Testing and Quality Assurance' } },
                                { id: 'testing', name: { ka: 'ტესტირება (ერთეული, ინტეგრაციული, სისტემური)', en: 'Testing (unit, integration, system)' } },
                                { id: 'qa', name: { ka: 'ხარისხის უზრუნველყოფა (QA)', en: 'Quality Assurance (QA)' } },
                                { id: 'bug', name: { ka: 'ხარვეზი (Bug)', en: 'Bug' } },
                                { id: 'debugging', name: { ka: 'გამართვა (Debugging)', en: 'Debugging' } },
                                { id: 'software-development-life-cycle', name: { ka: 'პროგრამული უზრუნველყოფის სასიცოცხლო ციკლი', en: 'Software development life cycle' } },
                                { id: 'agile', name: { ka: 'Agile', en: 'Agile' } },
                                { id: 'scrum', name: { ka: 'Scrum', en: 'Scrum' } },
                                { id: 'waterfall', name: { ka: 'Waterfall', en: 'Waterfall' } },
                                { id: 'devops', name: { ka: 'DevOps', en: 'DevOps' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'advanced-interdisciplinary-engineering',
                    name: { ka: '🔬 III. მოწინავე და ინტერდისციპლინარული ინჟინერია', en: '🔬 III. Advanced and Interdisciplinary Engineering' },
                    subSections: [
                        {
                            id: 'aerospace-engineering',
                            name: { ka: '🚀 საავიაციო და კოსმოსური ინჟინერია', en: '🚀 Aerospace Engineering' },
                            keywords: [
                                { id: 'airplane', name: { ka: 'თვითმფრინავი', en: 'Airplane' } },
                                { id: 'spacecraft-aero', name: { ka: 'კოსმოსური ხომალდი', en: 'Spacecraft' } },
                                { id: 'aerodynamics-aero', name: { ka: 'აეროდინამიკა', en: 'Aerodynamics' } },
                                { id: 'propulsion-system', name: { ka: 'მამოძრავებელი სისტემა', en: 'Propulsion system' } },
                                { id: 'rocket-aero', name: { ka: 'რაკეტა', en: 'Rocket' } },
                                { id: 'satellite-aero', name: { ka: 'თანამგზავრი', en: 'Satellite' } },
                                { id: 'avionics-aero', name: { ka: 'ავიონიკა', en: 'Avionics' } },
                                { id: 'drone-aero', name: { ka: 'დრონი', en: 'Drone' } },
                                { id: 'flight-dynamics', name: { ka: 'ფრენის დინამიკა', en: 'Flight dynamics' } },
                            ]
                        },
                        {
                            id: 'biomedical-engineering',
                            name: { ka: '🧬 ბიოსამედიცინო ინჟინერია', en: '🧬 Biomedical Engineering' },
                            keywords: [
                                { id: 'medical-devices', name: { ka: 'სამედიცინო მოწყობილობები', en: 'Medical devices' } },
                                { id: 'biomechanics-bioeng', name: { ka: 'ბიომექანიკა', en: 'Biomechanics' } },
                                { id: 'tissue-engineering-bioeng', name: { ka: 'ქსოვილური ინჟინერია', en: 'Tissue engineering' } },
                                { id: 'prosthetics', name: { ka: 'პროთეზირება', en: 'Prosthetics' } },
                                { id: 'bionics', name: { ka: 'ბიონიკა', en: 'Bionics' } },
                                { id: 'medical-imaging', name: { ka: 'სამედიცინო ვიზუალიზაცია (MRI, CT, PET)', en: 'Medical imaging (MRI, CT, PET)' } },
                                { id: 'biosensor-bioeng', name: { ka: 'ბიოსენსორი', en: 'Biosensor' } },
                            ]
                        },
                        {
                            id: 'materials-science-engineering',
                            name: { ka: '🧱 მასალათმცოდნეობა და საინჟინრო მეცნიერება', en: '🧱 Materials Science and Engineering' },
                            keywords: [
                                { id: 'materials-science', name: { ka: 'მასალათმცოდნეობა', en: 'Materials science' } },
                                { id: 'alloy-materials', name: { ka: 'შენადნობი', en: 'Alloy' } },
                                { id: 'polymer-materials', name: { ka: 'პოლიმერი', en: 'Polymer' } },
                                { id: 'ceramic-materials', name: { ka: 'კერამიკა', en: 'Ceramic' } },
                                { id: 'composite-material-materials', name: { ka: 'კომპოზიტური მასალა', en: 'Composite material' } },
                                { id: 'nanomaterials', name: { ka: 'ნანომასალები', en: 'Nanomaterials' } },
                                { id: 'crystallography-materials', name: { ka: 'კრისტალოგრაფია', en: 'Crystallography' } },
                                { id: 'corrosion-materials', name: { ka: 'კოროზია', en: 'Corrosion' } },
                                { id: 'metallurgy', name: { ka: 'მეტალურგია', en: 'Metallurgy' } },
                            ]
                        },
                        {
                            id: 'nuclear-engineering',
                            name: { ka: '☢️ ბირთვული ინჟინერია', en: '☢️ Nuclear Engineering' },
                            keywords: [
                                { id: 'nuclear-reactor-eng', name: { ka: 'ბირთვული რეაქტორი', en: 'Nuclear reactor' } },
                                { id: 'radiation-shielding', name: { ka: 'რადიაციული დაცვა', en: 'Radiation shielding' } },
                                { id: 'nuclear-safety', name: { ka: 'ბირთვული უსაფრთხოება', en: 'Nuclear safety' } },
                                { id: 'radioactive-waste-management', name: { ka: 'რადიოაქტიური ნარჩენების მართვა', en: 'Radioactive waste management' } },
                                { id: 'nuclear-medicine-eng', name: { ka: 'ბირთვული მედიცინა', en: 'Nuclear medicine' } },
                            ]
                        },
                        {
                            id: 'environmental-engineering',
                            name: { ka: '🌳 გარემოსდაცვითი ინჟინერია', en: '🌳 Environmental Engineering' },
                            keywords: [
                                { id: 'pollution-control-eng', name: { ka: 'დაბინძურების კონტროლი', en: 'Pollution control' } },
                                { id: 'water-treatment', name: { ka: 'წყლის დამუშავება', en: 'Water treatment' } },
                                { id: 'waste-management-eng', name: { ka: 'ნარჩენების მართვა', en: 'Waste management' } },
                                { id: 'renewable-energy-systems', name: { ka: 'განახლებადი ენერგიის სისტემები', en: 'Renewable energy systems' } },
                                { id: 'ecological-engineering', name: { ka: 'ეკოლოგიური ინჟინერია', en: 'Ecological engineering' } },
                                { id: 'sustainable-design', name: { ka: 'მდგრადი დიზაინი', en: 'Sustainable design' } },
                            ]
                        },
                        {
                            id: 'systems-engineering',
                            name: { ka: '🧩 სისტემური ინჟინერია', en: '🧩 Systems Engineering' },
                            keywords: [
                                { id: 'complex-systems', name: { ka: 'რთული სისტემები', en: 'Complex systems' } },
                                { id: 'system-modeling', name: { ka: 'სისტემის მოდელირება', en: 'System modeling' } },
                                { id: 'optimization-eng', name: { ka: 'ოპტიმიზაცია', en: 'Optimization' } },
                                { id: 'integration', name: { ka: 'ინტეგრაცია', en: 'Integration' } },
                                { id: 'project-management-eng', name: { ka: 'პროექტის მართვა', en: 'Project management' } },
                                { id: 'risk-analysis', name: { ka: 'რისკების ანალიზი', en: 'Risk analysis' } },
                                { id: 'requirements-analysis', name: { ka: 'მოთხოვნების ანალიზი', en: 'Requirements analysis' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'computer-technologies',
            name: { ka: '💻 კომპიუტერული ტექნოლოგიები', en: '💻 Computer Technologies' },
            sections: [
                {
                    id: 'computer-science-fundamentals',
                    name: { ka: 'I. კომპიუტერული მეცნიერების საფუძვლები (Computer Science)', en: 'I. Fundamentals of Computer Science' },
                    subSections: [
                        {
                            id: 'algorithms-data-structures',
                            name: { ka: '🧮 ალგორითმები და მონაცემთა სტრუქტურები', en: '🧮 Algorithms and Data Structures' },
                            keywords: [
                                { id: 'algorithm-cs', name: { ka: 'ალგორითმი', en: 'Algorithm' } },
                                { id: 'data-structure', name: { ka: 'მონაცემთა სტრუქტურა', en: 'Data structure' } },
                                { id: 'array', name: { ka: 'მასივი', en: 'Array' } },
                                { id: 'linked-list', name: { ka: 'ბმული სია', en: 'Linked list' } },
                                { id: 'stack', name: { ka: 'სტეკი', en: 'Stack' } },
                                { id: 'queue', name: { ka: 'რიგი', en: 'Queue' } },
                                { id: 'tree-cs', name: { ka: 'ხე', en: 'Tree' } },
                                { id: 'graph-cs', name: { ka: 'გრაფი', en: 'Graph' } },
                                { id: 'hash-table', name: { ka: 'ჰეშ-ცხრილი', en: 'Hash table' } },
                                { id: 'sorting-algorithms', name: { ka: 'სორტირების ალგორითმები', en: 'Sorting algorithms' } },
                                { id: 'search-algorithms', name: { ka: 'ძიების ალგორითმები', en: 'Search algorithms' } },
                                { id: 'complexity-analysis', name: { ka: 'სირთულის ანალიზი (Big O notation)', en: 'Complexity analysis (Big O notation)' } },
                                { id: 'dynamic-programming', name: { ka: 'დინამიური პროგრამირება', en: 'Dynamic programming' } },
                            ]
                        },
                        {
                            id: 'programming-languages-paradigms',
                            name: { ka: '⌨️ პროგრამირების ენები და პარადიგმები', en: '⌨️ Programming Languages and Paradigms' },
                            keywords: [
                                { id: 'programming-language-list', name: { ka: 'პროგრამირების ენა (Python, Java, C++, JavaScript, Go, Rust)', en: 'Programming language (Python, Java, C++, JavaScript, Go, Rust)' } },
                                { id: 'paradigm', name: { ka: 'პარადიგმა (ობიექტზე ორიენტირებული, ფუნქციური, პროცედურული, ლოგიკური)', en: 'Paradigm (object-oriented, functional, procedural, logical)' } },
                                { id: 'syntax', name: { ka: 'სინტაქსი', en: 'Syntax' } },
                                { id: 'semantics', name: { ka: 'სემანტიკა', en: 'Semantics' } },
                                { id: 'compiler', name: { ka: 'კომპილატორი', en: 'Compiler' } },
                                { id: 'interpreter', name: { ka: 'ინტერპრეტატორი', en: 'Interpreter' } },
                                { id: 'debugging-cs', name: { ka: 'Debugging (გამართვა)', en: 'Debugging' } },
                                { id: 'version-control-git', name: { ka: 'ვერსიების კონტროლი (Git)', en: 'Version control (Git)' } },
                            ]
                        },
                        {
                            id: 'theory-of-computation',
                            name: { ka: '⚙️ გამოთვლითი თეორია', en: '⚙️ Theory of Computation' },
                            keywords: [
                                { id: 'turing-machine', name: { ka: 'ტიურინგის მანქანა', en: 'Turing machine' } },
                                { id: 'automata-theory', name: { ka: 'ავტომატების თეორია', en: 'Automata theory' } },
                                { id: 'formal-languages', name: { ka: 'ფორმალური ენები', en: 'Formal languages' } },
                                { id: 'computational-complexity', name: { ka: 'გამოთვლითი სირთულე (P vs NP)', en: 'Computational complexity (P vs NP)' } },
                                { id: 'algorithmic-undecidability', name: { ka: 'ალგორითმული გადაუწყვეტადობა', en: 'Algorithmic undecidability' } },
                            ]
                        },
                        {
                            id: 'computer-architecture-hardware',
                            name: { ka: '🔩 კომპიუტერული არქიტექტურა (Hardware)', en: '🔩 Computer Architecture (Hardware)' },
                            keywords: [
                                { id: 'cpu-hardware', name: { ka: 'ცენტრალური პროცესორი (CPU)', en: 'Central Processing Unit (CPU)' } },
                                { id: 'ram-hardware', name: { ka: 'ოპერატიული მეხსიერება (RAM)', en: 'Random Access Memory (RAM)' } },
                                { id: 'ssd-hdd-hardware', name: { ka: 'მყარი დისკი (SSD, HDD)', en: 'Solid-State Drive (SSD), Hard Disk Drive (HDD)' } },
                                { id: 'motherboard-hardware', name: { ka: 'დედაპლატა', en: 'Motherboard' } },
                                { id: 'gpu-hardware', name: { ka: 'გრაფიკული პროცესორი (GPU)', en: 'Graphics Processing Unit (GPU)' } },
                                { id: 'cache-memory', name: { ka: 'ქეშ-მეხსიერება', en: 'Cache memory' } },
                                { id: 'bits-bytes', name: { ka: 'ბიტები და ბაიტები', en: 'Bits and bytes' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'software-development',
                    name: { ka: '👨‍💻 II. პროგრამული უზრუნველყოფის შემუშავება', en: '👨‍💻 II. Software Development' },
                    subSections: [
                        {
                            id: 'web-development',
                            name: { ka: '🌐 ვებ-დეველოპმენტი', en: '🌐 Web Development' },
                            keywords: [
                                { id: 'front-end', name: { ka: 'Front-end (HTML, CSS, JavaScript, React, Angular, Vue)', en: 'Front-end (HTML, CSS, JavaScript, React, Angular, Vue)' } },
                                { id: 'back-end', name: { ka: 'Back-end (სერვერი, API, Node.js, Python, PHP, Java, Go)', en: 'Back-end (server, API, Node.js, Python, PHP, Java, Go)' } },
                                { id: 'devops-web', name: { ka: 'DevOps (CI/CD, Docker, Kubernetes)', en: 'DevOps (CI/CD, Docker, Kubernetes)' } },
                                { id: 'full-stack', name: { ka: 'Full-stack', en: 'Full-stack' } },
                                { id: 'web-hosting', name: { ka: 'ვებ-ჰოსტინგი', en: 'Web hosting' } },
                                { id: 'domain', name: { ka: 'დომენი', en: 'Domain' } },
                            ]
                        },
                        {
                            id: 'mobile-app-development',
                            name: { ka: '📱 მობილური აპლიკაციების დეველოპმენტი', en: '📱 Mobile App Development' },
                            keywords: [
                                { id: 'native-development', name: { ka: 'ნეითივ დეველოპმენტი (Swift, Kotlin)', en: 'Native development (Swift, Kotlin)' } },
                                { id: 'cross-platform-development', name: { ka: 'კროს-პლატფორმული დეველოპმენტი (React Native, Flutter, Xamarin)', en: 'Cross-platform development (React Native, Flutter, Xamarin)' } },
                                { id: 'mobile-ui-ux', name: { ka: 'მობილური ინტერფეისი (UI/UX)', en: 'Mobile UI/UX' } },
                                { id: 'app-store', name: { ka: 'App Store', en: 'App Store' } },
                                { id: 'google-play', name: { ka: 'Google Play', en: 'Google Play' } },
                            ]
                        },
                        {
                            id: 'game-development',
                            name: { ka: '🎮 თამაშების დეველოპმენტი (Game Dev)', en: '🎮 Game Development (Game Dev)' },
                            keywords: [
                                { id: 'game-engine', name: { ka: 'თამაშის ძრავა (Unity, Unreal Engine)', en: 'Game engine (Unity, Unreal Engine)' } },
                                { id: 'gameplay-dev', name: { ka: 'გეიმპლეი', en: 'Gameplay' } },
                                { id: '2d-3d-graphics', name: { ka: '2D/3D გრაფიკა', en: '2D/3D graphics' } },
                                { id: 'game-physics', name: { ka: 'თამაშის ფიზიკა', en: 'Game physics' } },
                                { id: 'level-design-dev', name: { ka: 'დონის დიზაინი', en: 'Level design' } },
                                { id: 'ai-in-games', name: { ka: 'ხელოვნური ინტელექტი თამაშებში', en: 'AI in games' } },
                            ]
                        },
                        {
                            id: 'dbms',
                            name: { ka: '🗃️ მონაცემთა ბაზების მართვის სისტემები (DBMS)', en: '🗃️ Database Management Systems (DBMS)' },
                            keywords: [
                                { id: 'database', name: { ka: 'მონაცემთა ბაზა', en: 'Database' } },
                                { id: 'dbms-term', name: { ka: 'DBMS', en: 'DBMS' } },
                                { id: 'sql', name: { ka: 'SQL', en: 'SQL' } },
                                { id: 'nosql', name: { ka: 'NoSQL (MongoDB, Redis)', en: 'NoSQL (MongoDB, Redis)' } },
                                { id: 'relational-database', name: { ka: 'რელაციური ბაზა', en: 'Relational database' } },
                                { id: 'table', name: { ka: 'ცხრილი', en: 'Table' } },
                                { id: 'index-db', name: { ka: 'ინდექსი', en: 'Index' } },
                                { id: 'transaction', name: { ka: 'ტრანზაქცია', en: 'Transaction' } },
                                { id: 'data-modeling', name: { ka: 'მონაცემთა მოდელირება', en: 'Data modeling' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'ai-data-science',
                    name: { ka: '🧠 III. ხელოვნური ინტელექტი და მონაცემთა მეცნიერება', en: '🧠 III. Artificial Intelligence and Data Science' },
                    subSections: [
                        {
                            id: 'machine-learning',
                            name: { ka: '🤖 მანქანური სწავლება (Machine Learning)', en: '🤖 Machine Learning' },
                            keywords: [
                                { id: 'deep-learning', name: { ka: 'ღრმა სწავლება (Deep Learning) და ნეირონული ქსელები', en: 'Deep Learning and Neural Networks' } },
                                { id: 'machine-learning-term', name: { ka: 'მანქანური სწავლება', en: 'Machine Learning' } },
                                { id: 'model-training', name: { ka: 'მოდელის დასწავლა (მასწავლებლით, უმასწავლოდ, განმტკიცებით)', en: 'Model training (supervised, unsupervised, reinforcement)' } },
                                { id: 'regression-ml', name: { ka: 'რეგრესია', en: 'Regression' } },
                                { id: 'classification', name: { ka: 'კლასიფიკაცია', en: 'Classification' } },
                                { id: 'clustering', name: { ka: 'კლასტერიზაცია', en: 'Clustering' } },
                                { id: 'deep-learning-term', name: { ka: 'ღრმა სწავლება', en: 'Deep Learning' } },
                                { id: 'neural-network', name: { ka: 'ნერვული ქსელი', en: 'Neural Network' } },
                                { id: 'tensorflow', name: { ka: 'TensorFlow', en: 'TensorFlow' } },
                                { id: 'pytorch', name: { ka: 'PyTorch', en: 'PyTorch' } },
                            ]
                        },
                        {
                            id: 'data-science',
                            name: { ka: '📊 მონაცემთა მეცნიერება (Data Science)', en: '📊 Data Science' },
                            keywords: [
                                { id: 'big-data', name: { ka: 'დიდი მონაცემები (Big Data)', en: 'Big Data' } },
                                { id: 'big-data-term', name: { ka: 'დიდი მონაცემები', en: 'Big Data' } },
                                { id: 'data-mining', name: { ka: 'მონაცემთა მოპოვება (Data Mining)', en: 'Data Mining' } },
                                { id: 'hadoop', name: { ka: 'Hadoop', en: 'Hadoop' } },
                                { id: 'spark', name: { ka: 'Spark', en: 'Spark' } },
                                { id: 'data-warehouse', name: { ka: 'მონაცემთა საწყობი', en: 'Data warehouse' } },
                                { id: 'data-analysis-visualization', name: { ka: 'მონაცემთა ანალიზი და ვიზუალიზაცია', en: 'Data Analysis and Visualization' } },
                                { id: 'data-analysis', name: { ka: 'მონაცემთა ანალიზი', en: 'Data analysis' } },
                                { id: 'statistics-ds', name: { ka: 'სტატისტიკა', en: 'Statistics' } },
                                { id: 'visualization', name: { ka: 'ვიზუალიზაცია', en: 'Visualization' } },
                                { id: 'dashboard', name: { ka: 'Dashboard', en: 'Dashboard' } },
                                { id: 'bi', name: { ka: 'ბიზნეს ანალიტიკა (BI)', en: 'Business Intelligence (BI)' } },
                            ]
                        },
                        {
                            id: 'specialized-fields-of-ai',
                            name: { ka: '🗣️ AI-ის სპეციალიზებული სფეროები', en: '🗣️ Specialized Fields of AI' },
                            keywords: [
                                { id: 'nlp', name: { ka: 'ბუნებრივი ენის დამუშავება (NLP)', en: 'Natural Language Processing (NLP)' } },
                                { id: 'nlp-term', name: { ka: 'NLP', en: 'NLP' } },
                                { id: 'text-analysis', name: { ka: 'ტექსტის ანალიზი', en: 'Text analysis' } },
                                { id: 'sentiment-analysis', name: { ka: 'სენტიმენტ ანალიზი', en: 'Sentiment analysis' } },
                                { id: 'machine-translation', name: { ka: 'მანქანური თარგმანი', en: 'Machine translation' } },
                                { id: 'chatbot', name: { ka: 'ჩატ-ბოტი', en: 'Chatbot' } },
                                { id: 'speech-recognition', name: { ka: 'მეტყველების ამოცნობა', en: 'Speech recognition' } },
                                { id: 'computer-vision', name: { ka: 'კომპიუტერული ხედვა (Computer Vision)', en: 'Computer Vision' } },
                                { id: 'computer-vision-term', name: { ka: 'კომპიუტერული ხედვა', en: 'Computer vision' } },
                                { id: 'image-recognition', name: { ka: 'გამოსახულების ამოცნობა', en: 'Image recognition' } },
                                { id: 'object-detection', name: { ka: 'ობიექტის დეტექცია', en: 'Object detection' } },
                                { id: 'facial-recognition', name: { ka: 'სახის ამოცნობა', en: 'Facial recognition' } },
                                { id: 'segmentation-cv', name: { ka: 'სეგმენტაცია', en: 'Segmentation' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'infrastructure-security',
                    name: { ka: '🔒 IV. ინფრასტრუქტურა და უსაფრთხოება', en: '🔒 IV. Infrastructure and Security' },
                    subSections: [
                        {
                            id: 'computer-networks',
                            name: { ka: '🌐 კომპიუტერული ქსელები', en: '🌐 Computer Networks' },
                            keywords: [
                                { id: 'internet-protocols', name: { ka: 'ინტერნეტის პროტოკოლები (TCP/IP)', en: 'Internet Protocols (TCP/IP)' } },
                                { id: 'network', name: { ka: 'ქსელი', en: 'Network' } },
                                { id: 'internet', name: { ka: 'ინტერნეტი', en: 'Internet' } },
                                { id: 'protocol', name: { ka: 'პროტოკოლი (TCP/IP, HTTP, FTP, DNS)', en: 'Protocol (TCP/IP, HTTP, FTP, DNS)' } },
                                { id: 'ip-address', name: { ka: 'IP მისამართი', en: 'IP address' } },
                                { id: 'router', name: { ka: 'როუტერი', en: 'Router' } },
                                { id: 'switch', name: { ka: 'სვიჩი', en: 'Switch' } },
                                { id: 'lan', name: { ka: 'LAN', en: 'LAN' } },
                                { id: 'wan', name: { ka: 'WAN', en: 'WAN' } },
                                { id: 'wi-fi-network', name: { ka: 'Wi-Fi', en: 'Wi-Fi' } },
                            ]
                        },
                        {
                            id: 'cloud-computing',
                            name: { ka: '☁️ ღრუბლოვანი ტექნოლოგიები (Cloud Computing)', en: '☁️ Cloud Computing' },
                            keywords: [
                                { id: 'cloud-computing-term', name: { ka: 'ღრუბლოვანი გამოთვლები', en: 'Cloud computing' } },
                                { id: 'iaas', name: { ka: 'IaaS (ინფრასტრუქტურა, როგორც სერვისი)', en: 'IaaS (Infrastructure as a Service)' } },
                                { id: 'paas', name: { ka: 'PaaS (პლატფორმა, როგორც სერვისი)', en: 'PaaS (Platform as a Service)' } },
                                { id: 'saas', name: { ka: 'SaaS (პროგრამული უზრუნველყოფა, როგორც სერვისი)', en: 'SaaS (Software as a Service)' } },
                                { id: 'virtualization', name: { ka: 'ვირტუალიზაცია', en: 'Virtualization' } },
                                { id: 'serverless-computing', name: { ka: 'სერვერების გარეშე გამოთვლები (Serverless)', en: 'Serverless computing' } },
                                { id: 'aws', name: { ka: 'AWS', en: 'AWS' } },
                                { id: 'azure', name: { ka: 'Azure', en: 'Azure' } },
                                { id: 'google-cloud', name: { ka: 'Google Cloud', en: 'Google Cloud' } },
                            ]
                        },
                        {
                            id: 'cybersecurity',
                            name: { ka: '🛡️ კიბერუსაფრთხოება', en: '🛡️ Cybersecurity' },
                            keywords: [
                                { id: 'network-security', name: { ka: 'ქსელური უსაფრთხოება', en: 'Network Security' } },
                                { id: 'cryptography-sec', name: { ka: 'კრიპტოგრაფია', en: 'Cryptography' } },
                                { id: 'ethical-hacking', name: { ka: 'ეთიკური ჰაკინგი', en: 'Ethical Hacking' } },
                                { id: 'cybersecurity-term', name: { ka: 'კიბერუსაფრთხოება', en: 'Cybersecurity' } },
                                { id: 'firewall', name: { ka: 'ფაირვოლი', en: 'Firewall' } },
                                { id: 'encryption', name: { ka: 'შიფრაცია (Encryption)', en: 'Encryption' } },
                                { id: 'malware', name: { ka: 'მავნე პროგრამა (Malware)', en: 'Malware' } },
                                { id: 'virus-sec', name: { ka: 'ვირუსი', en: 'Virus' } },
                                { id: 'phishing', name: { ka: 'ფიშინგი', en: 'Phishing' } },
                                { id: 'penetration-testing', name: { ka: 'შეღწევადობის ტესტირება', en: 'Penetration testing' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'new-emerging-technologies',
                    name: { ka: '🚀 V. ახალი და პერსპექტიული ტექნოლოგიები', en: '🚀 V. New and Emerging Technologies' },
                    subSections: [
                        {
                            id: 'blockchain-cryptocurrencies',
                            name: { ka: '🔗 ბლოკჩეინი და კრიპტოვალუტები', en: '🔗 Blockchain and Cryptocurrencies' },
                            keywords: [
                                { id: 'blockchain', name: { ka: 'ბლოკჩეინი', en: 'Blockchain' } },
                                { id: 'cryptocurrency-list', name: { ka: 'კრიპტოვალუტა (ბიტკოინი, ეთერიუმი)', en: 'Cryptocurrency (Bitcoin, Ethereum)' } },
                                { id: 'smart-contract', name: { ka: 'სმარტ კონტრაქტი', en: 'Smart contract' } },
                                { id: 'decentralization', name: { ka: 'დეცენტრალიზაცია', en: 'Decentralization' } },
                                { id: 'mining', name: { ka: 'მაინინგი', en: 'Mining' } },
                                { id: 'nft', name: { ka: 'NFT (შეუცვლელი ტოკენი)', en: 'NFT (Non-Fungible Token)' } },
                                { id: 'defi', name: { ka: 'DeFi (დეცენტრალიზებული ფინანსები)', en: 'DeFi (Decentralized Finance)' } },
                            ]
                        },
                        {
                            id: 'vr-ar',
                            name: { ka: '🕶️ ვირტუალური და გაფართოებული რეალობა (VR/AR)', en: '🕶️ Virtual and Augmented Reality (VR/AR)' },
                            keywords: [
                                { id: 'virtual-reality', name: { ka: 'ვირტუალური რეალობა (VR)', en: 'Virtual Reality (VR)' } },
                                { id: 'augmented-reality-term', name: { ka: 'გაფართოებული/დამატებითი რეალობა (AR)', en: 'Augmented Reality (AR)' } },
                                { id: 'mixed-reality-term', name: { ka: 'შერეული რეალობა (MR)', en: 'Mixed Reality (MR)' } },
                                { id: 'immersive-experience', name: { ka: 'იმერსიული გამოცდილება', en: 'Immersive experience' } },
                                { id: 'vr-ar-headset', name: { ka: 'VR/AR სათვალე', en: 'VR/AR headset' } },
                                { id: 'metaverse', name: { ka: 'მეტასამყარო', en: 'Metaverse' } },
                            ]
                        },
                        {
                            id: 'iot',
                            name: { ka: '💡 ნივთების ინტერნეტი (IoT)', en: '💡 Internet of Things (IoT)' },
                            keywords: [
                                { id: 'iot-term', name: { ka: 'ნივთების ინტერნეტი', en: 'Internet of Things' } },
                                { id: 'smart-device', name: { ka: 'ჭკვიანი მოწყობილობა', en: 'Smart device' } },
                                { id: 'sensor-iot', name: { ka: 'სენსორი', en: 'Sensor' } },
                                { id: 'smart-home', name: { ka: 'ჭკვიანი სახლი', en: 'Smart home' } },
                                { id: 'smart-city', name: { ka: 'ჭკვიანი ქალაქი', en: 'Smart city' } },
                                { id: 'connected-devices', name: { ka: 'დაკავშირებული მოწყობილობები', en: 'Connected devices' } },
                            ]
                        },
                        {
                            id: 'quantum-computing',
                            name: { ka: '🔬 კვანტური გამოთვლები', en: '🔬 Quantum Computing' },
                            keywords: [
                                { id: 'quantum-computer-term', name: { ka: 'კვანტური კომპიუტერი', en: 'Quantum computer' } },
                                { id: 'qubit-term', name: { ka: 'კუბიტი', en: 'Qubit' } },
                                { id: 'superposition', name: { ka: 'სუპერპოზიცია', en: 'Superposition' } },
                                { id: 'quantum-entanglement-term', name: { ka: 'კვანტური გადახლართულობა', en: 'Quantum entanglement' } },
                                { id: 'quantum-algorithm', name: { ka: 'კვანტური ალგორითმი', en: 'Quantum algorithm' } },
                                { id: 'quantum-cryptography-term', name: { ka: 'კვანტური კრიპტოგრაფია', en: 'Quantum cryptography' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'space-aviation-technologies',
            name: { ka: '🚀 კოსმოსური და საავიაციო ტექნოლოგიები', en: '🚀 Space and Aviation Technologies' },
            sections: [
                {
                    id: 'space-technologies',
                    name: { ka: 'I. კოსმოსური ტექნოლოგიები', en: 'I. Space Technologies' },
                    subSections: [
                        {
                            id: 'launch-systems-spaceflight',
                            name: { ka: '🛰️ გამშვები სისტემები და კოსმოსური ფრენა', en: '🛰️ Launch Systems and Spaceflight' },
                            keywords: [
                                { id: 'rocketry-rocket-engines', name: { ka: 'რაკეტმშენებლობა და სარაკეტო ძრავები', en: 'Rocketry and Rocket Engines' } },
                                { id: 'rocket', name: { ka: 'რაკეტა', en: 'Rocket' } },
                                { id: 'launch-vehicle', name: { ka: 'რაკეტა-მატარებელი', en: 'Launch vehicle' } },
                                { id: 'rocket-engine', name: { ka: 'სარაკეტო ძრავა (თხევადსაწვავიანი, მყარსაწვავიანი, იონური)', en: 'Rocket engine (liquid-propellant, solid-propellant, ion)' } },
                                { id: 'stage', name: { ka: 'საფეხური', en: 'Stage' } },
                                { id: 'payload', name: { ka: 'სასარგებლო ტვირთი', en: 'Payload' } },
                                { id: 'spacecraft', name: { ka: 'კოსმოსური ხომალდი', en: 'Spacecraft' } },
                                { id: 'orbit-space', name: { ka: 'ორბიტა', en: 'Orbit' } },
                                { id: 'trajectory', name: { ka: 'ტრაექტორია', en: 'Trajectory' } },
                                { id: 'ballistics', name: { ka: 'ბალისტიკა', en: 'Ballistics' } },
                                { id: 'cosmodromes-launch-infrastructure', name: { ka: 'კოსმოდრომები და გაშვების ინფრასტრუქტურა', en: 'Cosmodromes and Launch Infrastructure' } },
                                { id: 'cosmodrome-spaceport', name: { ka: 'კოსმოდრომი', en: 'Cosmodrome/Spaceport' } },
                                { id: 'launch-complex', name: { ka: 'სასტარტო კომპლექსი (გასაშვები მოედანი)', en: 'Launch complex (launch pad)' } },
                                { id: 'mission-control-center', name: { ka: 'ფრენების მართვის ცენტრი', en: 'Mission control center' } },
                                { id: 'assembly-testing-facility', name: { ka: 'აწყობა-გამოცდის კორპუსი', en: 'Assembly and testing facility' } },
                                { id: 'telemetry', name: { ka: 'ტელემეტრია', en: 'Telemetry' } },
                                { id: 'manned-spacecraft', name: { ka: 'პილოტირებული კოსმოსური ხომალდები', en: 'Manned Spacecraft' } },
                                { id: 'spacecraft-manned', name: { ka: 'კოსმოსური ხომალდი', en: 'Spacecraft' } },
                                { id: 'capsule', name: { ka: 'კაფსულა', en: 'Capsule' } },
                                { id: 'astronaut', name: { ka: 'ასტრონავტი', en: 'Astronaut' } },
                                { id: 'cosmonaut', name: { ka: 'კოსმონავტი', en: 'Cosmonaut' } },
                                { id: 'taikonaut', name: { ka: 'ტაიკონავტი', en: 'Taikonaut' } },
                                { id: 'spacesuit', name: { ka: 'სკაფანდრი', en: 'Spacesuit' } },
                                { id: 're-entry', name: { ka: 'ატმოსფეროში დაბრუნება', en: 'Re-entry' } },
                                { id: 'docking', name: { ka: 'დოკირება', en: 'Docking' } },
                            ]
                        },
                        {
                            id: 'satellites-orbital-systems',
                            name: { ka: '📡 სატელიტები და ორბიტალური სისტემები', en: '📡 Satellites and Orbital Systems' },
                            keywords: [
                                { id: 'communication-broadcasting-satellites', name: { ka: 'საკომუნიკაციო და სამაუწყებლო სატელიტები', en: 'Communication and Broadcasting Satellites' } },
                                { id: 'satellite-comm', name: { ka: 'თანამგზავრი', en: 'Satellite' } },
                                { id: 'satellite-communication', name: { ka: 'სატელიტური კავშირი', en: 'Satellite communication' } },
                                { id: 'geostationary-orbit', name: { ka: 'გეოსტაციონარული ორბიტა', en: 'Geostationary orbit' } },
                                { id: 'transponder-sat', name: { ka: 'ტრანსპონდერი', en: 'Transponder' } },
                                { id: 'satellite-internet-tv', name: { ka: 'სატელიტური ინტერნეტი/ტელევიზია', en: 'Satellite internet/television' } },
                                { id: 'starlink', name: { ka: 'Starlink', en: 'Starlink' } },
                                { id: 'earth-observation-meteorological-satellites', name: { ka: 'დედამიწის დაკვირვებისა და მეტეოროლოგიური სატელიტები', en: 'Earth Observation and Meteorological Satellites' } },
                                { id: 'remote-sensing-sat', name: { ka: 'დისტანციური ზონდირება', en: 'Remote sensing' } },
                                { id: 'meteorological-satellite', name: { ka: 'მეტეოროლოგიური თანამგზავრი', en: 'Meteorological satellite' } },
                                { id: 'satellite-photography', name: { ka: 'სატელიტური ფოტოგრაფია', en: 'Satellite photography' } },
                                { id: 'climate-monitoring', name: { ka: 'კლიმატის მონიტორინგი', en: 'Climate monitoring' } },
                                { id: 'gis-sat', name: { ka: 'GIS', en: 'GIS' } },
                                { id: 'gnss', name: { ka: 'გლობალური სანავიგაციო სისტემები', en: 'Global Navigation Satellite Systems' } },
                                { id: 'gps-nav', name: { ka: 'GPS', en: 'GPS' } },
                                { id: 'galileo', name: { ka: 'Galileo', en: 'Galileo' } },
                                { id: 'glonass', name: { ka: 'GLONASS', en: 'GLONASS' } },
                                { id: 'beidou', name: { ka: 'BeiDou', en: 'BeiDou' } },
                                { id: 'satellite-navigation', name: { ka: 'სატელიტური ნავიგაცია', en: 'Satellite navigation' } },
                                { id: 'geolocation', name: { ka: 'გეოლოკაცია', en: 'Geolocation' } },
                            ]
                        },
                        {
                            id: 'space-exploration-utilization',
                            name: { ka: '🔭 კოსმოსის კვლევა და ათვისება', en: '🔭 Space Exploration and Utilization' },
                            keywords: [
                                { id: 'space-stations-orbital-habitats', name: { ka: 'კოსმოსური სადგურები და ორბიტალური ჰაბიტატები', en: 'Space Stations and Orbital Habitats' } },
                                { id: 'iss', name: { ka: 'საერთაშორისო კოსმოსური სადგური (ISS)', en: 'International Space Station (ISS)' } },
                                { id: 'orbital-station', name: { ka: 'ორბიტალური სადგური', en: 'Orbital station' } },
                                { id: 'microgravity', name: { ka: 'მიკროგრავიტაცია', en: 'Microgravity' } },
                                { id: 'space-laboratory', name: { ka: 'კოსმოსური ლაბორატორია', en: 'Space laboratory' } },
                                { id: 'interplanetary-probes-rovers', name: { ka: 'პლანეტათაშორისი ზონდები და როვერები', en: 'Interplanetary Probes and Rovers' } },
                                { id: 'automatic-interplanetary-station', name: { ka: 'ავტომატური პლანეტათაშორისი სადგური', en: 'Automatic interplanetary station' } },
                                { id: 'probe', name: { ka: 'ზონდი', en: 'Probe' } },
                                { id: 'rover', name: { ka: 'პლანეტმავალი (როვერი)', en: 'Rover' } },
                                { id: 'flyby', name: { ka: 'გადაფრენა (Flyby)', en: 'Flyby' } },
                                { id: 'orbiter-probe', name: { ka: 'ორბიტერი', en: 'Orbiter' } },
                                { id: 'lander-probe', name: { ka: 'დასაშვები აპარატი (Lander)', en: 'Lander' } },
                                { id: 'space-telescopes', name: { ka: 'კოსმოსური ტელესკოპები (Hubble, James Webb)', en: 'Space Telescopes (Hubble, James Webb)' } },
                                { id: 'hubble-space-telescope', name: { ka: 'ჰაბლის ტელესკოპი', en: 'Hubble Space Telescope' } },
                                { id: 'james-webb-space-telescope', name: { ka: 'ჯეიმს უების ტელესკოპი', en: 'James Webb Space Telescope' } },
                                { id: 'space-observatory', name: { ka: 'კოსმოსური ობსერვატორია', en: 'Space observatory' } },
                                { id: 'astrophotography-space', name: { ka: 'ასტროფოტოგრაფია', en: 'Astrophotography' } },
                                { id: 'exoplanet-research', name: { ka: 'ეგზოპლანეტების კვლევა', en: 'Exoplanet research' } },
                                { id: 'life-support-systems', name: { ka: 'სიცოცხლის უზრუნველყოფის სისტემები', en: 'Life Support Systems' } },
                                { id: 'life-support-system', name: { ka: 'სიცოცხლის უზრუნველყოფის სისტემა', en: 'Life support system' } },
                                { id: 'oxygen-generation', name: { ka: 'ჟანგბადის გენერაცია', en: 'Oxygen generation' } },
                                { id: 'water-regeneration', name: { ka: 'წყლის რეგენერაცია', en: 'Water regeneration' } },
                                { id: 'radiation-shielding-space', name: { ka: 'რადიაციული დაცვა', en: 'Radiation shielding' } },
                                { id: 'artificial-gravity', name: { ka: 'ხელოვნური გრავიტაცია', en: 'Artificial gravity' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'aviation-technologies',
            name: { ka: '✈️ II. საავიაციო ტექნოლოგიები', en: '✈️ II. Aviation Technologies' },
            sections: [
                {
                    id: 'aerodynamics-aircraft-design',
                    name: { ka: '💨 აეროდინამიკა და საფრენი აპარატების დიზაინი', en: '💨 Aerodynamics and Aircraft Design' },
                    subSections: [
                        {
                            id: 'airplanes-helicopters',
                            name: { ka: 'თვითმფრინავები, ვერტმფრენები', en: 'Airplanes, Helicopters' },
                            keywords: [
                                { id: 'airplane-aviation', name: { ka: 'თვითმფრინავი', en: 'Airplane' } },
                                { id: 'helicopter', name: { ka: 'ვერტმფრენი', en: 'Helicopter' } },
                                { id: 'wing', name: { ka: 'ფრთა', en: 'Wing' } },
                                { id: 'fuselage', name: { ka: 'ფიუზელაჟი', en: 'Fuselage' } },
                                { id: 'main-rotor', name: { ka: 'მზიდი ხრახნი (როტორი)', en: 'Main rotor' } },
                                { id: 'lift-aviation', name: { ka: 'ამწევი ძალა', en: 'Lift' } },
                                { id: 'aerodynamic-drag', name: { ka: 'აეროდინამიკური წინაღობა', en: 'Drag' } },
                                { id: 'supersonic-aircraft', name: { ka: 'ზებგერითი თვითმფრინავი', en: 'Supersonic aircraft' } },
                                { id: 'hypersonic-aircraft', name: { ka: 'ჰიპერსონიული თვითმფრინავი', en: 'Hypersonic aircraft' } },
                            ]
                        },
                        {
                            id: 'uavs-drones',
                            name: { ka: 'უპილოტო საფრენი აპარატები (დრონები)', en: 'Unmanned Aerial Vehicles (Drones)' },
                            keywords: [
                                { id: 'uav-drone', name: { ka: 'უპილოტო საფრენი აპარატი (დრონი)', en: 'Unmanned Aerial Vehicle (UAV/Drone)' } },
                                { id: 'quadcopter', name: { ka: 'კვადროკოპტერი', en: 'Quadcopter' } },
                                { id: 'autonomous-flight', name: { ka: 'ავტონომიური ფრენა', en: 'Autonomous flight' } },
                                { id: 'surveillance-drone', name: { ka: 'სადაზვერვო დრონი', en: 'Surveillance drone' } },
                                { id: 'delivery-drone', name: { ka: 'მიწოდების დრონი', en: 'Delivery drone' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'engines-propulsion-systems',
                    name: { ka: '🔥 ძრავები და მამოძრავებელი სისტემები', en: '🔥 Engines and Propulsion Systems' },
                    subSections: [
                        {
                            id: 'turbojet-turboprop-engines',
                            name: { ka: 'ტურბორეაქტიული და ტურბოხრახნიანი ძრავები', en: 'Turbojet and Turboprop Engines' },
                            keywords: [
                                { id: 'turbojet-engine', name: { ka: 'ტურბორეაქტიული ძრავა', en: 'Turbojet engine' } },
                                { id: 'turboprop-engine', name: { ka: 'ტურბოხრახნიანი ძრავა', en: 'Turboprop engine' } },
                                { id: 'jet-propulsion', name: { ka: 'რეაქტიული მოძრაობა', en: 'Jet propulsion' } },
                                { id: 'thrust', name: { ka: 'წევის ძალა', en: 'Thrust' } },
                                { id: 'afterburner', name: { ka: 'ფორსაჟი', en: 'Afterburner' } },
                                { id: 'piston-engine', name: { ka: 'დგუშიანი ძრავა', en: 'Piston engine' } },
                            ]
                        },
                        {
                            id: 'rocket-hybrid-engines',
                            name: { ka: 'რაკეტული და ჰიბრიდული ძრავები', en: 'Rocket and Hybrid Engines' },
                            keywords: [
                                { id: 'rocket-engine-aviation', name: { ka: 'რაკეტული ძრავა', en: 'Rocket engine' } },
                                { id: 'hybrid-engine', name: { ka: 'ჰიბრიდული ძრავა', en: 'Hybrid engine' } },
                                { id: 'solid-liquid-fuel', name: { ka: 'მყარი/თხევადი საწვავი', en: 'Solid/liquid fuel' } },
                                { id: 'booster', name: { ka: 'ამაჩქარებელი', en: 'Booster' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'avionics-navigation-control',
                    name: { ka: '🧭 ავიონიკა, ნავიგაცია და მართვა', en: '🧭 Avionics, Navigation, and Control' },
                    subSections: [
                        {
                            id: 'flight-control-systems',
                            name: { ka: 'ფრენის მართვის სისტემები', en: 'Flight Control Systems' },
                            keywords: [
                                { id: 'fly-by-wire', name: { ka: 'ელექტროდისტანციური მართვის სისტემა (Fly-by-wire)', en: 'Fly-by-wire' } },
                                { id: 'autopilot-aviation', name: { ka: 'ავტოპილოტი', en: 'Autopilot' } },
                                { id: 'cockpit', name: { ka: 'პილოტის კაბინა', en: 'Cockpit' } },
                                { id: 'black-box', name: { ka: 'შავი ყუთი', en: 'Black box' } },
                                { id: 'ifr', name: { ka: 'ინსტრუმენტული ფრენის სისტემა (IFR)', en: 'Instrument Flight Rules (IFR)' } },
                            ]
                        },
                        {
                            id: 'navigation-communication-equipment',
                            name: { ka: 'სანავიგაციო და საკომუნიკაციო აღჭურვილობა', en: 'Navigation and Communication Equipment' },
                            keywords: [
                                { id: 'avionics', name: { ka: 'ავიონიკა', en: 'Avionics' } },
                                { id: 'navigation-aviation', name: { ka: 'ნავიგაცია', en: 'Navigation' } },
                                { id: 'radar', name: { ka: 'რადარი', en: 'Radar' } },
                                { id: 'radio-communication', name: { ka: 'რადიოკავშირი', en: 'Radio communication' } },
                                { id: 'gps-aviation', name: { ka: 'GPS', en: 'GPS' } },
                                { id: 'transponder-aviation', name: { ka: 'ტრანსპონდერი', en: 'Transponder' } },
                                { id: 'tcas', name: { ka: 'TCAS (შეჯახების თავიდან აცილების სისტემა)', en: 'TCAS (Traffic Collision Avoidance System)' } },
                            ]
                        },
                        {
                            id: 'air-traffic-control',
                            name: { ka: 'საჰაერო მოძრაობის მართვა', en: 'Air Traffic Control' },
                            keywords: [
                                { id: 'air-traffic-control-term', name: { ka: 'საჰაერო მოძრაობის მართვა', en: 'Air traffic control' } },
                                { id: 'air-traffic-controller', name: { ka: 'ავიადისპეტჩერი', en: 'Air traffic controller' } },
                                { id: 'flight-path', name: { ka: 'ფრენის მარშრუტი', en: 'Flight path' } },
                                { id: 'air-corridor', name: { ka: 'საჰაერო დერეფანი', en: 'Air corridor' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'aviation-materials-structures',
                    name: { ka: '🔩 საავიაციო მასალები და კონსტრუქციები', en: '🔩 Aviation Materials and Structures' },
                    subSections: [
                        {
                            id: 'composite-materials-aviation',
                            name: { ka: 'კომპოზიტური მასალები', en: 'Composite Materials' },
                            keywords: [
                                { id: 'composite-material-aviation', name: { ka: 'კომპოზიტური მასალა', en: 'Composite material' } },
                                { id: 'carbon-fiber', name: { ka: 'ნახშირბადის ბოჭკო', en: 'Carbon fiber' } },
                                { id: 'fiberglass', name: { ka: 'მინაბოჭკო', en: 'Fiberglass' } },
                                { id: 'kevlar', name: { ka: 'კევლარი', en: 'Kevlar' } },
                                { id: 'sandwich-panels', name: { ka: 'სენდვიჩ-პანელები', en: 'Sandwich panels' } },
                            ]
                        },
                        {
                            id: 'high-strength-alloys',
                            name: { ka: 'მაღალი სიმტკიცის შენადნობები', en: 'High-Strength Alloys' },
                            keywords: [
                                { id: 'aviation-alloy', name: { ka: 'საავიაციო შენადნობი', en: 'Aviation alloy' } },
                                { id: 'aluminum-alloys', name: { ka: 'ალუმინის შენადნობები', en: 'Aluminum alloys' } },
                                { id: 'titanium-alloys', name: { ka: 'ტიტანის შენადნობები', en: 'Titanium alloys' } },
                                { id: 'heat-resistance', name: { ka: 'თბომედეგობა', en: 'Heat resistance' } },
                                { id: 'fatigue-strength', name: { ka: 'დაღლილობითი სიმტკიცე', en: 'Fatigue strength' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'robotics-automation',
            name: { ka: '🤖 რობოტექნიკა და ავტომატიზაცია', en: '🤖 Robotics and Automation' },
            sections: [
                {
                    id: 'robotics-fundamentals',
                    name: { ka: 'I. რობოტექნიკის საფუძვლები', en: 'I. Fundamentals of Robotics' },
                    subSections: [
                        {
                            id: 'robot-components',
                            name: { ka: '🦾 რობოტის კომპონენტები', en: '🦾 Robot Components' },
                            keywords: [
                                { id: 'actuator-robotics', name: { ka: 'აქტივატორი', en: 'Actuator' } },
                                { id: 'servo-motor', name: { ka: 'სერვო ძრავა', en: 'Servo motor' } },
                                { id: 'stepper-motor', name: { ka: 'სტეპერ ძრავა', en: 'Stepper motor' } },
                                { id: 'hydraulic-pneumatic-actuator', name: { ka: 'ჰიდრავლიკური/პნევმატური ამძრავი', en: 'Hydraulic/pneumatic actuator' } },
                                { id: 'manipulator', name: { ka: 'მანიპულატორი', en: 'Manipulator' } },
                                { id: 'gripper', name: { ka: 'მჭიდი (захват)', en: 'Gripper' } },
                                { id: 'joint-robotics', name: { ka: 'სახსარი', en: 'Joint' } },
                                { id: 'end-effector', name: { ka: 'ენდ-ეფექტორი', en: 'End-effector' } },
                                { id: 'sensors-perception-systems', name: { ka: 'სენსორები და აღქმის სისტემები', en: 'Sensors and Perception Systems' } },
                                { id: 'sensor-robotics', name: { ka: 'სენსორი', en: 'Sensor' } },
                                { id: 'camera-robotics', name: { ka: 'კამერა', en: 'Camera' } },
                                { id: 'lidar-robotics', name: { ka: 'ლიდარი (LIDAR)', en: 'LIDAR' } },
                                { id: 'sonar-robotics', name: { ka: 'სონარი', en: 'Sonar' } },
                                { id: 'infrared-sensor', name: { ka: 'ინფრაწითელი სენსორი', en: 'Infrared sensor' } },
                                { id: 'gyroscope', name: { ka: 'გიროსკოპი', en: 'Gyroscope' } },
                                { id: 'accelerometer', name: { ka: 'აქსელერომეტრი', en: 'Accelerometer' } },
                                { id: 'tactile-sensor', name: { ka: 'ტაქტილური სენსორი', en: 'Tactile sensor' } },
                                { id: 'proprioception-robotics', name: { ka: 'პროპრიოცეფცია', en: 'Proprioception' } },
                                { id: 'control-systems-robotics', name: { ka: 'მართვის სისტემები', en: 'Control Systems' } },
                                { id: 'controller-robotics', name: { ka: 'კონტროლერი', en: 'Controller' } },
                                { id: 'microcontroller-robotics', name: { ka: 'მიკროკონტროლერი', en: 'Microcontroller' } },
                                { id: 'control-board', name: { ka: 'მართვის პლატა', en: 'Control board' } },
                                { id: 'feedback-robotics', name: { ka: 'უკუკავშირი (Feedback)', en: 'Feedback' } },
                                { id: 'ros', name: { ka: 'რობოტის ოპერაციული სისტემა (ROS)', en: 'Robot Operating System (ROS)' } },
                            ]
                        },
                        {
                            id: 'robotic-ai',
                            name: { ka: '🧠 რობოტული ხელოვნური ინტელექტი (Robotic AI)', en: '🧠 Robotic Artificial Intelligence (Robotic AI)' },
                            keywords: [
                                { id: 'navigation-motion-planning', name: { ka: 'ნავიგაცია და მოძრაობის დაგეგმვა', en: 'Navigation and Motion Planning' } },
                                { id: 'navigation-robotics', name: { ka: 'ნავიგაცია', en: 'Navigation' } },
                                { id: 'path-planning', name: { ka: 'მარშრუტის დაგეგმვა', en: 'Path planning' } },
                                { id: 'localization', name: { ka: 'ლოკალიზაცია', en: 'Localization' } },
                                { id: 'mapping-robotics', name: { ka: 'რუკის შედგენა', en: 'Mapping' } },
                                { id: 'slam', name: { ka: 'SLAM (ერთდროული ლოკალიზაცია და რუკის აგება)', en: 'SLAM (Simultaneous Localization and Mapping)' } },
                                { id: 'obstacle-avoidance', name: { ka: 'დაბრკოლებების თავიდან აცილება', en: 'Obstacle avoidance' } },
                                { id: 'machine-learning-in-robotics', name: { ka: 'მანქანური სწავლება რობოტექნიკაში', en: 'Machine Learning in Robotics' } },
                                { id: 'reinforcement-learning', name: { ka: 'განმტკიცებით სწავლება', en: 'Reinforcement learning' } },
                                { id: 'computer-vision-robotics', name: { ka: 'კომპიუტერული ხედვა', en: 'Computer vision' } },
                                { id: 'pattern-recognition', name: { ka: 'ნიმუშების ამოცნობა', en: 'Pattern recognition' } },
                                { id: 'robot-learning', name: { ka: 'რობოტის "დასწავლა"', en: 'Robot learning' } },
                                { id: 'imitation-learning', name: { ka: 'იმიტაციური სწავლება', en: 'Imitation learning' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'types-applications-of-robots',
                    name: { ka: '🏭 II. რობოტების ტიპები და გამოყენება', en: '🏭 II. Types and Applications of Robots' },
                    subSections: [
                        {
                            id: 'industrial-robots',
                            name: { ka: '🔧 სამრეწველო რობოტები', en: '🔧 Industrial Robots' },
                            keywords: [
                                { id: 'industrial-robot', name: { ka: 'სამრეწველო რობოტი', en: 'Industrial robot' } },
                                { id: 'robotic-manipulator', name: { ka: 'რობოტი-მანიპულატორი (რობოტული მკლავი)', en: 'Robotic manipulator (robotic arm)' } },
                                { id: 'assembly-line', name: { ka: 'ასამბლეის ხაზი', en: 'Assembly line' } },
                                { id: 'welding-robot', name: { ka: 'შედუღების რობოტი', en: 'Welding robot' } },
                                { id: 'painting-robot', name: { ka: 'შეღებვის რობოტი', en: 'Painting robot' } },
                                { id: 'collaborative-robot', name: { ka: 'კოლაბორაციული რობოტი (კობოტი)', en: 'Collaborative robot (cobot)' } },
                                { id: 'manufacturing-automation', name: { ka: 'წარმოების ავტომატიზაცია', en: 'Manufacturing automation' } },
                            ]
                        },
                        {
                            id: 'service-robots',
                            name: { ka: '🛎️ სერვის-რობოტები', en: '🛎️ Service Robots' },
                            keywords: [
                                { id: 'domestic-robots', name: { ka: 'საყოფაცხოვრებო რობოტები', en: 'Domestic Robots' } },
                                { id: 'robotic-vacuum-cleaner', name: { ka: 'რობოტი მტვერსასრუტი', en: 'Robotic vacuum cleaner' } },
                                { id: 'robotic-lawn-mower', name: { ka: 'გაზონის საკრეჭი რობოტი', en: 'Robotic lawn mower' } },
                                { id: 'window-cleaning-robot', name: { ka: 'ფანჯრების მწმენდი რობოტი', en: 'Window-cleaning robot' } },
                                { id: 'social-robot', name: { ka: 'სოციალური რობოტი', en: 'Social robot' } },
                                { id: 'medical-assistive-robots', name: { ka: 'სამედიცინო და საასისტენტო რობოტები', en: 'Medical and Assistive Robots' } },
                                { id: 'surgical-robot', name: { ka: 'ქირურგიული რობოტი (მაგ: da Vinci)', en: 'Surgical robot (e.g., da Vinci)' } },
                                { id: 'rehabilitation-robot', name: { ka: 'სარეაბილიტაციო რობოტი', en: 'Rehabilitation robot' } },
                                { id: 'exoskeleton', name: { ka: 'ეგზოჩონჩხი', en: 'Exoskeleton' } },
                                { id: 'telepresence-robot', name: { ka: 'ტელეპრეზენს რობოტი', en: 'Telepresence robot' } },
                                { id: 'logistics-robots', name: { ka: 'ლოგისტიკური რობოტები', en: 'Logistics Robots' } },
                                { id: 'warehouse-robot', name: { ka: 'საწყობის რობოტი', en: 'Warehouse robot' } },
                                { id: 'delivery-robot', name: { ka: 'მიტანის სერვისის რობოტი', en: 'Delivery robot' } },
                                { id: 'agv', name: { ka: 'ავტომატიზებული მართვადი სატრანსპორტო საშუალება (AGV)', en: 'Automated Guided Vehicle (AGV)' } },
                            ]
                        },
                        {
                            id: 'autonomous-systems',
                            name: { ka: '🚗 ავტონომიური სისტემები', en: '🚗 Autonomous Systems' },
                            keywords: [
                                { id: 'uavs-drones-auto', name: { ka: 'უპილოტო საფრენი აპარატები (დრონები)', en: 'Unmanned Aerial Vehicles (Drones)' } },
                                { id: 'drone-auto', name: { ka: 'დრონი', en: 'Drone' } },
                                { id: 'quadcopter-auto', name: { ka: 'კვადროკოპტერი', en: 'Quadcopter' } },
                                { id: 'autonomous-flight-auto', name: { ka: 'ავტონომიური ფრენა', en: 'Autonomous flight' } },
                                { id: 'aerial-photography', name: { ka: 'საჰაერო გადაღება', en: 'Aerial photography' } },
                                { id: 'drone-swarm', name: { ka: 'დრონების გუნდი (Swarm)', en: 'Drone swarm' } },
                                { id: 'self-driving-cars', name: { ka: 'თვითმართვადი მანქანები', en: 'Self-Driving Cars' } },
                                { id: 'self-driving-car', name: { ka: 'თვითმართვადი მანქანა', en: 'Self-driving car' } },
                                { id: 'autonomous-vehicle', name: { ka: 'ავტონომიური ტრანსპორტი', en: 'Autonomous vehicle' } },
                                { id: 'sensor-fusion', name: { ka: 'სენსორების შერწყმა', en: 'Sensor fusion' } },
                                { id: 'autopilot-auto', name: { ka: 'ავტოპილოტი', en: 'Autopilot' } },
                                { id: 'v2x-communication', name: { ka: 'V2X (Vehicle-to-everything) კომუნიკაცია', en: 'V2X (Vehicle-to-everything) communication' } },
                                { id: 'exploration-robots', name: { ka: 'საკვლევი რობოტები', en: 'Exploration Robots' } },
                                { id: 'space-rover', name: { ka: 'კოსმოსური როვერი', en: 'Space rover' } },
                                { id: 'auv', name: { ka: 'წყალქვეშა რობოტი (AUV)', en: 'Autonomous Underwater Vehicle (AUV)' } },
                                { id: 'hazardous-environment-robots', name: { ka: 'სახიფათო გარემოს რობოტები', en: 'Hazardous environment robots' } },
                                { id: 'search-and-rescue-robots', name: { ka: 'სამძებრო-სამაშველო რობოტები', en: 'Search and rescue robots' } },
                            ]
                        },
                        {
                            id: 'humanoid-biomimetic-robots',
                            name: { ka: '🚶‍♂️ ჰუმანოიდი და ბიომიმეტური რობოტები', en: '🚶‍♂️ Humanoid and Biomimetic Robots' },
                            keywords: [
                                { id: 'humanoid-robot', name: { ka: 'ჰუმანოიდი რობოტი', en: 'Humanoid robot' } },
                                { id: 'android', name: { ka: 'ანდროიდი', en: 'Android' } },
                                { id: 'biomimetic-robot', name: { ka: 'ბიომიმეტური რობოტი (ბიო-რობოტი)', en: 'Biomimetic robot (bio-robot)' } },
                                { id: 'animal-robot', name: { ka: 'რობოტი-ცხოველი', en: 'Animal robot' } },
                                { id: 'soft-robotics', name: { ka: 'რბილი რობოტექნიკა (Soft Robotics)', en: 'Soft robotics' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'automation-systems',
                    name: { ka: '🕹️ III. ავტომატიზაციის სისტემები', en: '🕹️ III. Automation Systems' },
                    subSections: [
                        {
                            id: 'industrial-automation',
                            name: { ka: '🏭 სამრეწველო ავტომატიზაცია', en: '🏭 Industrial Automation' },
                            keywords: [
                                { id: 'plc-automation', name: { ka: 'პროგრამირებადი ლოგიკური კონტროლერები (PLC)', en: 'Programmable Logic Controllers (PLC)' } },
                                { id: 'plc-term', name: { ka: 'PLC', en: 'PLC' } },
                                { id: 'manufacturing-automation-ind', name: { ka: 'წარმოების ავტომატიზაცია', en: 'Manufacturing automation' } },
                                { id: 'industrial-control', name: { ka: 'სამრეწველო კონტროლი', en: 'Industrial control' } },
                                { id: 'hmi', name: { ka: 'HMI (ადამიანი-მანქანის ინტერფეისი)', en: 'HMI (Human-Machine Interface)' } },
                                { id: 'scada-systems', name: { ka: 'SCADA სისტემები', en: 'SCADA Systems' } },
                                { id: 'scada', name: { ka: 'SCADA (დისპეტჩერული მართვის და მონაცემთა შეგროვების სისტემა)', en: 'SCADA (Supervisory Control and Data Acquisition)' } },
                                { id: 'ics', name: { ka: 'სამრეწველო მართვის სისტემა (ICS)', en: 'Industrial Control System (ICS)' } },
                                { id: 'industry-4-0', name: { ka: 'ინდუსტრია 4.0', en: 'Industry 4.0' } },
                            ]
                        },
                        {
                            id: 'robotic-process-automation',
                            name: { ka: '📈 პროცესების პროგრამული ავტომატიზაცია (RPA)', en: '📈 Robotic Process Automation (RPA)' },
                            keywords: [
                                { id: 'rpa', name: { ka: 'RPA', en: 'RPA' } },
                                { id: 'software-robot', name: { ka: 'პროგრამული რობოტი (ბოტი)', en: 'Software robot (bot)' } },
                                { id: 'workflow-automation', name: { ka: 'სამუშაო პროცესის ავტომატიზაცია', en: 'Workflow automation' } },
                                { id: 'data-entry-automation', name: { ka: 'მონაცემთა შეყვანის ავტომატიზაცია', en: 'Data entry automation' } },
                                { id: 'bpm', name: { ka: 'ბიზნეს პროცესების მართვა (BPM)', en: 'Business Process Management (BPM)' } },
                            ]
                        },
                        {
                            id: 'building-automation',
                            name: { ka: '🏠 შენობების ავტომატიზაცია (ჭკვიანი სახლი)', en: '🏠 Building Automation (Smart Home)' },
                            keywords: [
                                { id: 'smart-home-auto', name: { ka: 'ჭკვიანი სახლი', en: 'Smart home' } },
                                { id: 'bms', name: { ka: 'შენობის მართვის სისტემა (BMS)', en: 'Building Management System (BMS)' } },
                                { id: 'smart-lighting', name: { ka: 'ჭკვიანი განათება', en: 'Smart lighting' } },
                                { id: 'smart-thermostat', name: { ka: 'ჭკვიანი თერმოსტატი', en: 'Smart thermostat' } },
                                { id: 'smart-lock', name: { ka: 'ჭკვიანი საკეტი', en: 'Smart lock' } },
                                { id: 'iot-auto', name: { ka: 'ნივთების ინტერნეტი (IoT)', en: 'Internet of Things (IoT)' } },
                            ]
                        }
                    ]
                }
            ]
        }
    ],
};