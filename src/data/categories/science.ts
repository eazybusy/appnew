import { Category } from '../types';

export const SCIENCE_CATEGORY: Category = {
    id: 'science',
    name: { ka: 'მეცნიერება და ბუნება', en: 'Science and Nature' },
    icon: '🌌',
    subCategories: [
        {
            id: 'astronomy-cosmology',
            name: { ka: '🔭 ასტრონომია და კოსმოლოგია', en: '🔭 Astronomy and Cosmology' },
            sections: [
                {
                    id: 'research-methods-instruments',
                    name: { ka: 'I. კვლევის მეთოდები და ინსტრუმენტები', en: 'I. Research Methods and Instruments' },
                    subSections: [
                        {
                            id: 'observational-astronomy',
                            name: { ka: 'დაკვირვებითი ასტრონომია', en: 'Observational Astronomy' },
                            keywords: [
                                { id: 'adaptive-optics', name: { ka: 'ადაპტიური ოპტიკა', en: 'Adaptive optics' } },
                                { id: 'astrography', name: { ka: 'ასტროგრაფია', en: 'Astrography' } },
                                { id: 'astrometry', name: { ka: 'ასტრომეტრია', en: 'Astrometry' } },
                                { id: 'astrophotography', name: { ka: 'ასტროფოტოგრაფია', en: 'Astrophotography' } },
                                { id: 'gamma-ray-astronomy', name: { ka: 'გამა-ასტრონომია', en: 'Gamma-ray astronomy' } },
                                { id: 'doppler-effect', name: { ka: 'დოპლერის ეფექტი', en: 'Doppler effect' } },
                                { id: 'drift-scanning', name: { ka: 'დრიფტის სკანირება', en: 'Drift scanning' } },
                                { id: 'stellar-magnitude', name: { ka: 'ვარსკვლავური სიდიდე (ხილული/აბსოლუტური)', en: 'Stellar magnitude (apparent/absolute)' } },
                                { id: 'infrared-astronomy', name: { ka: 'ინფრაწითელი ასტრონომია', en: 'Infrared astronomy' } },
                                { id: 'interferometry', name: { ka: 'ინტერფერომეტრია', en: 'Interferometry' } },
                                { id: 'neutrino-astronomy', name: { ka: 'ნეიტრინული ასტრონომია', en: 'Neutrino astronomy' } },
                                { id: 'observatory', name: { ka: 'ობსერვატორია', en: 'Observatory' } },
                                { id: 'occultation', name: { ka: 'ოკულტაცია', en: 'Occultation' } },
                                { id: 'optical-astronomy', name: { ka: 'ოპტიკური ასტრონომია', en: 'Optical astronomy' } },
                                { id: 'parallax', name: { ka: 'პარალაქსი', en: 'Parallax' } },
                                { id: 'polarimetry', name: { ka: 'პოლარიმეტრია', en: 'Polarimetry' } },
                                { id: 'radio-astronomy', name: { ka: 'რადიოასტრონომია', en: 'Radio astronomy' } },
                                { id: 'radio-telescope', name: { ka: 'რადიოტელესკოპი', en: 'Radio telescope' } },
                                { id: 'x-ray-astronomy', name: { ka: 'რენტგენული ასტრონომია', en: 'X-ray astronomy' } },
                                { id: 'light-curve', name: { ka: 'სინათლის მრუდე', en: 'Light curve' } },
                                { id: 'spectral-resolution', name: { ka: 'სპექტრის რეზოლუცია', en: 'Spectral resolution' } },
                                { id: 'spectral-analysis', name: { ka: 'სპექტრული ანალიზი', en: 'Spectral analysis' } },
                                { id: 'spectroscopy', name: { ka: 'სპექტროსკოპია', en: 'Spectroscopy' } },
                                { id: 'telescope', name: { ka: 'ტელესკოპი (რეფლექტორი, რეფრაქტორი)', en: 'Telescope (reflector, refractor)' } },
                                { id: 'transit', name: { ka: 'ტრანზიტი', en: 'Transit' } },
                                { id: 'ultraviolet-astronomy', name: { ka: 'ულტრაიისფერი ასტრონომია', en: 'Ultraviolet astronomy' } },
                                { id: 'photometry', name: { ka: 'ფოტომეტრია', en: 'Photometry' } },
                                { id: 'photometric-filters', name: { ka: 'ფოტომეტრიული ფილტრები', en: 'Photometric filters' } },
                                { id: 'digital-sensor', name: { ka: 'ციფრული სენსორი (CCD/CMOS)', en: 'Digital sensor (CCD/CMOS)' } },
                                { id: 'all-sky-survey', name: { ka: 'ცის სრული დაკვირვება (Survey)', en: 'All-sky survey' } },
                                { id: 'transit-method', name: { ka: 'ტრანზიტული მეთოდი', en: 'Transit method' } },
                            ]
                        },
                        {
                            id: 'theoretical-astrophysics',
                            name: { ka: 'თეორიული ასტროფიზიკა', en: 'Theoretical Astrophysics' },
                            keywords: [
                                { id: 'accretion-disk', name: { ka: 'აკრეციული დისკო', en: 'Accretion disk' } },
                                { id: 'nuclear-synthesis', name: { ka: 'ბირთვული სინთეზი (ნუკლეოსინთეზი)', en: 'Nuclear synthesis (nucleosynthesis)' } },
                                { id: 'gravitational-collapse', name: { ka: 'გრავიტაციული კოლაფსი', en: 'Gravitational collapse' } },
                                { id: 'stellar-models', name: { ka: 'ვარსკვლავური მოდელები', en: 'Stellar models' } },
                                { id: 'stellar-wind', name: { ka: 'ვარსკვლავური ქარი', en: 'Stellar wind' } },
                                { id: 'cosmic-strings', name: { ka: 'კოსმოსური სიმები', en: 'Cosmic strings' } },
                                { id: 'magnetohydrodynamics', name: { ka: 'მაგნიტოჰიდროდინამიკა (MHD)', en: 'Magnetohydrodynamics (MHD)' } },
                                { id: 'noethers-theorem', name: { ka: 'ნოთერის თეორემა', en: 'Noether\'s theorem' } },
                                { id: 'plasma-physics', name: { ka: 'პლაზმის ფიზიკა', en: 'Plasma physics' } },
                                { id: 'radiative-transfer', name: { ka: 'რადიაციული ტრანსფერი', en: 'Radiative transfer' } },
                                { id: 'radiation-pressure', name: { ka: 'რადიაციული წნევა', en: 'Radiation pressure' } },
                                { id: 'relativistic-astrophysics', name: { ka: 'რელატივისტური ასტროფიზიკა', en: 'Relativistic astrophysics' } },
                                { id: 'symmetry-breaking', name: { ka: 'სიმეტრიის დარღვევა', en: 'Symmetry breaking' } },
                                { id: 'stochastic-processes', name: { ka: 'სტოქასტური (შემთხვევითი) პროცესები', en: 'Stochastic (random) processes' } },
                                { id: 'hydrostatic-equilibrium', name: { ka: 'ჰიდროსტატიკური წონასწორობა', en: 'Hydrostatic equilibrium' } },
                                { id: 'shock-waves', name: { ka: 'შოკური ტალღები', en: 'Shock waves' } },
                                { id: 'quantum-mechanics', name: { ka: 'კვანტური მექანიკა', en: 'Quantum mechanics' } },
                                { id: 'general-relativity', name: { ka: 'ფარდობითობის ზოგადი თეორია', en: 'General relativity' } },
                            ]
                        },
                        {
                            id: 'celestial-mechanics',
                            name: { ka: 'ციური მექანიკა', en: 'Celestial Mechanics' },
                            keywords: [
                                { id: 'apocenter', name: { ka: 'აპოცენტრი', en: 'Apocenter' } },
                                { id: 'ascending-descending-node', name: { ka: 'აღმავალი/დაღმავალი კვანძი', en: 'Ascending/descending node' } },
                                { id: 'gravitational-field', name: { ka: 'გრავიტაციული ველი', en: 'Gravitational field' } },
                                { id: 'gravitational-maneuver', name: { ka: 'გრავიტაციული მანევრი', en: 'Gravitational maneuver' } },
                                { id: 'eccentricity', name: { ka: 'ექსცენტრისიტეტი', en: 'Eccentricity' } },
                                { id: 'inclination', name: { ka: 'ინკლინაცია', en: 'Inclination' } },
                                { id: 'keplers-laws', name: { ka: 'კეპლერის კანონები', en: 'Kepler\'s laws' } },
                                { id: 'lagrange-points', name: { ka: 'ლაგრანჟის წერტილები', en: 'Lagrange points' } },
                                { id: 'tidal-forces', name: { ka: 'მოქცევის ძალები', en: 'Tidal forces' } },
                                { id: 'newtons-law-of-universal-gravitation', name: { ka: 'ნიუტონის მსოფლიო მიზიდულობის კანონი', en: 'Newton\'s law of universal gravitation' } },
                                { id: 'orbit', name: { ka: 'ორბიტა', en: 'Orbit' } },
                                { id: 'orbital-resonance', name: { ka: 'ორბიტული რეზონანსი', en: 'Orbital resonance' } },
                                { id: 'pericenter', name: { ka: 'პერიცენტრი', en: 'Pericenter' } },
                                { id: 'precession', name: { ka: 'პრეცესია', en: 'Precession' } },
                                { id: 'roche-limit', name: { ka: 'როშის ზღვარი', en: 'Roche limit' } },
                                { id: 'three-body-problem', name: { ka: 'სამი სხეულის ამოცანა', en: 'Three-body problem' } },
                                { id: 'mean-true-anomaly', name: { ka: 'საშუალო/ჭეშმარიტი ანომალია', en: 'Mean/true anomaly' } },
                                { id: 'hill-sphere', name: { ka: 'ჰილის სფერო', en: 'Hill sphere' } },
                                { id: 'gravitational-potential', name: { ka: 'გრავიტაციული პოტენციალი', en: 'Gravitational potential' } },
                                { id: 'geodesic-line', name: { ka: 'გეოდეზიური ხაზი', en: 'Geodesic line' } },
                                { id: 'newtonian-mechanics', name: { ka: 'ნიუტონური მექანიკა', en: 'Newtonian mechanics' } },
                            ]
                        },
                        {
                            id: 'astronomical-tools-technologies',
                            name: { ka: '🛰️ ასტრონომიული ხელსაწყოები და ტექნოლოგიები', en: '🛰️ Astronomical Tools and Technologies' },
                            keywords: [
                                { id: 'ccd-camera', name: { ka: 'CCD კამერა', en: 'CCD camera' } },
                                { id: 'spacex-starship', name: { ka: 'SpaceX Starship', en: 'SpaceX Starship' } },
                                { id: 'interferometric-array', name: { ka: 'ინტერფერომეტრული მასივი', en: 'Interferometric array' } },
                                { id: 'coronagraph', name: { ka: 'კორონოგრაფი', en: 'Coronagraph' } },
                                { id: 'space-probe', name: { ka: 'კოსმოსური ზონდი', en: 'Space probe' } },
                                { id: 'spacecraft', name: { ka: 'კოსმოსური ხომალდი (ვოიაჯერი, პიონერი, კასინი)', en: 'Spacecraft (Voyager, Pioneer, Cassini)' } },
                                { id: 'mars-rover', name: { ka: 'მარსმავალი (როვერი)', en: 'Mars rover (rover)' } },
                                { id: 'orbiter', name: { ka: 'ორბიტერი', en: 'Orbiter' } },
                                { id: 'lander', name: { ka: 'პლანეტამავალი (ლენდერი)', en: 'Lander' } },
                                { id: 'vlbi', name: { ka: 'რადიოინტერფერომეტრი (VLBI)', en: 'Radio interferometer (VLBI)' } },
                                { id: 'radiometer', name: { ka: 'რადიომეტრი', en: 'Radiometer' } },
                                { id: 'saturn-v', name: { ka: 'სატურნი V', en: 'Saturn V' } },
                                { id: 'spectrograph', name: { ka: 'სპექტროგრაფი', en: 'Spectrograph' } },
                                { id: 'telescope-hubble-webb', name: { ka: 'ტელესკოპი (ჰაბლი, ჯეიმს ვები, კეკი, VLT)', en: 'Telescope (Hubble, James Webb, Keck, VLT)' } },
                                { id: 'starshade', name: { ka: 'ვარსკვლავური ჩრდილქოლგა (Starshade)', en: 'Starshade' } },
                                { id: 'narrow-band-filter', name: { ka: 'ვიწროზოლის ფილტრი', en: 'Narrow-band filter' } },
                                { id: 'synchrotron', name: { ka: 'სინქროტრონი', en: 'Synchrotron' } },
                                { id: 'adaptive-optics-system', name: { ka: 'ადაპტიური ოპტიკური სისტემა', en: 'Adaptive optics system' } },
                            ]
                        },
                        {
                            id: 'data-metrology-analysis',
                            name: { ka: '📈 მონაცემები, მეტროლოგია და ანალიზი', en: '📈 Data, Metrology, and Analysis' },
                            keywords: [
                                { id: 'astrometric-calibration', name: { ka: 'ასტრომეტრიული კალიბრაცია', en: 'Astrometric calibration' } },
                                { id: 'astronomical-catalogs', name: { ka: 'ასტრონომიული კატალოგები', en: 'Astronomical catalogs' } },
                                { id: 'astronomical-data-archives', name: { ka: 'ასტრონომიული მონაცემთა არქივები', en: 'Astronomical data archives' } },
                                { id: 'virtual-observatory', name: { ka: 'ვირტუალური ობსერვატორია', en: 'Virtual observatory' } },
                                { id: 'machine-learning-in-astronomy', name: { ka: 'მანქანური სწავლება ასტრონომიაში', en: 'Machine learning in astronomy' } },
                                { id: 'monte-carlo-simulations', name: { ka: 'მონტე-კარლოს სიმულაციები', en: 'Monte Carlo simulations' } },
                                { id: 'radio-mapping', name: { ka: 'რადიომაპინგი', en: 'Radio mapping' } },
                                { id: 'signal-to-noise-ratio', name: { ka: 'სიგნალი-ხმაურის თანაფარდობა (S/N)', en: 'Signal-to-noise ratio (S/N)' } },
                                { id: 'light-curve-modeling', name: { ka: 'სინათლის მრუდის მოდელირება', en: 'Light curve modeling' } },
                                { id: 'synthetic-observations', name: { ka: 'სინთეტიკური დაკვირვებები', en: 'Synthetic observations' } },
                                { id: 'photometric-calibration', name: { ka: 'ფოტომეტრიული კალიბრაცია', en: 'Photometric calibration' } },
                                { id: 'time-series-analysis', name: { ka: 'დროითი რიგების ანალიზი', en: 'Time series analysis' } },
                                { id: 'bioinformatics', name: { ka: 'ბიოინფორმატიკა', en: 'Bioinformatics' } },
                            ]
                        },
                        {
                            id: 'coordinates-units-time',
                            name: { ka: '⏳ კოორდინატები, ერთეულები და დრო', en: '⏳ Coordinates, Units, and Time' },
                            keywords: [
                                { id: 'apogee-perigee', name: { ka: 'აპოგეი/პერიგეი', en: 'Apogee/perigee' } },
                                { id: 'astronomical-unit', name: { ka: 'ასტრონომიული ერთეული (AU)', en: 'Astronomical unit (AU)' } },
                                { id: 'galactic-coordinates', name: { ka: 'გალაქტიკური კოორდინატები', en: 'Galactic coordinates' } },
                                { id: 'equatorial-coordinates', name: { ka: 'ეკვატორული კოორდინატები', en: 'Equatorial coordinates' } },
                                { id: 'ecliptic-coordinates', name: { ka: 'ექლიპტიკური კოორდინატები', en: 'Ecliptic coordinates' } },
                                { id: 'parsec', name: { ka: 'პარსეკი', en: 'Parsec' } },
                                { id: 'radian-degree', name: { ka: 'რადიანი/გრადუსი', en: 'Radian/degree' } },
                                { id: 'sidereal-time', name: { ka: 'სიდერიული დრო', en: 'Sidereal time' } },
                                { id: 'light-year', name: { ka: 'სინათლის წელი', en: 'Light-year' } },
                                { id: 'synodic-period', name: { ka: 'სინოდური პერიოდი', en: 'Synodic period' } },
                                { id: 'celestial-sphere', name: { ka: 'ციური სფერო', en: 'Celestial sphere' } },
                                { id: 'julian-date', name: { ka: 'ჯულიანის თარიღი', en: 'Julian date' } },
                                { id: 'coordinate-system', name: { ka: 'კოორდინატთა სისტემა', en: 'Coordinate system' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'cosmic-objects-systems',
                    name: { ka: '🌌 კოსმოსური ობიექტები და სისტემები', en: '🌌 Cosmic Objects and Systems' },
                    subSections: [
                        {
                            id: 'planetology',
                            name: { ka: '🪐 პლანეტოლოგია', en: '🪐 Planetology' },
                            keywords: [
                                { id: 'albedo', name: { ka: 'ალბედო', en: 'Albedo' } },
                                { id: 'asteroid', name: { ka: 'ასტეროიდი', en: 'Asteroid' } },
                                { id: 'atmosphere', name: { ka: 'ატმოსფერო', en: 'Atmosphere' } },
                                { id: 'gas-giant', name: { ka: 'გაზის გიგანტი', en: 'Gas giant' } },
                                { id: 'exoplanet', name: { ka: 'ეგზოპლანეტა', en: 'Exoplanet' } },
                                { id: 'volcanism-cryovolcanism', name: { ka: 'ვულკანიზმი/კრიოვულკანიზმი', en: 'Volcanism/cryovolcanism' } },
                                { id: 'satellite', name: { ka: 'თანამგზავრი', en: 'Satellite' } },
                                { id: 'rocky-planet', name: { ka: 'კლდოვანი პლანეტა', en: 'Rocky planet' } },
                                { id: 'comet', name: { ka: 'კომეტა', en: 'Comet' } },
                                { id: 'kuiper-belt', name: { ka: 'კოიპერის სარტყელი', en: 'Kuiper belt' } },
                                { id: 'magnetosphere', name: { ka: 'მაგნიტოსფერო', en: 'Magnetosphere' } },
                                { id: 'meteor-meteorite', name: { ka: 'მეტეორი/მეტეორიტი', en: 'Meteor/meteorite' } },
                                { id: 'oort-cloud', name: { ka: 'ოორტის ღრუბელი', en: 'Oort cloud' } },
                                { id: 'planet', name: { ka: 'პლანეტა', en: 'Planet' } },
                                { id: 'planetary-geology', name: { ka: 'პლანეტარული გეოლოგია', en: 'Planetary geology' } },
                                { id: 'planetary-rings', name: { ka: 'პლანეტარული რგოლები', en: 'Planetary rings' } },
                                { id: 'interplanetary-station', name: { ka: 'პლანეტათშორისი სადგური', en: 'Interplanetary station' } },
                                { id: 'protoplanetary-disk', name: { ka: 'პროტოპლანეტური დისკო', en: 'Protoplanetary disk' } },
                                { id: 'tectonics', name: { ka: 'ტექტონიკა', en: 'Tectonics' } },
                                { id: 'trans-neptunian-objects', name: { ka: 'ტრანსნეპტუნური ობიექტები (TNO)', en: 'Trans-Neptunian objects (TNO)' } },
                                { id: 'trojan-asteroids', name: { ka: 'ტროიანი ასტეროიდები', en: 'Trojan asteroids' } },
                                { id: 'centaurs', name: { ka: 'ცენტავრები', en: 'Centaurs' } },
                                { id: 'ice-giant', name: { ka: 'ყინულის გიგანტი', en: 'Ice giant' } },
                                { id: 'dwarf-planet', name: { ka: 'ჯუჯა პლანეტა (პლუტონი, ცერერა, ერისი)', en: 'Dwarf planet (Pluto, Ceres, Eris)' } },
                                { id: 'protoplanetary-disc-alt', name: { ka: 'პროტოპლანეტარული დისკო', en: 'Protoplanetary disc' } },
                            ]
                        },
                        {
                            id: 'stellar-astronomy',
                            name: { ka: '✨ ვარსკვლავური ასტრონომია', en: '✨ Stellar Astronomy' },
                            keywords: [
                                { id: 'stellar-evolution', name: { ka: 'ვარსკვლავის ევოლუცია', en: 'Stellar evolution' } },
                                { id: 'star-cluster', name: { ka: 'ვარსკვლავური გროვა (გლობულარული/ღია)', en: 'Star cluster (globular/open)' } },
                                { id: 'wolf-rayet-star', name: { ka: 'ვოლფ-რაიეს ვარსკვლავი', en: 'Wolf-Rayet star' } },
                                { id: 'white-dwarf', name: { ka: 'თეთრი ჯუჯა', en: 'White dwarf' } },
                                { id: 'blue-supergiant', name: { ka: 'ლურჯი სუპერგიგანტი', en: 'Blue supergiant' } },
                                { id: 'magnetar', name: { ka: 'მაგნეტარი', en: 'Magnetar' } },
                                { id: 'main-sequence', name: { ka: 'მთავარი მიმდევრობა', en: 'Main sequence' } },
                                { id: 'neutron-star', name: { ka: 'ნეიტრონული ვარსკვლავი', en: 'Neutron star' } },
                                { id: 'binary-contact-system', name: { ka: 'ორმაგი/კონტაქტური სისტემა', en: 'Binary/contact system' } },
                                { id: 'protostar', name: { ka: 'პროტოვარსკვლავი', en: 'Protostar' } },
                                { id: 'pulsar', name: { ka: 'პულსარი', en: 'Pulsar' } },
                                { id: 'variable-star', name: { ka: 'ცვალებადი ვარსკვლავი (ცეფეიდები, RR Lyrae)', en: 'Variable star (Cepheid, RR Lyrae)' } },
                                { id: 'pre-main-sequence', name: { ka: 'წინამთავარი მიმდევრობა', en: 'Pre-main-sequence' } },
                                { id: 'red-giant', name: { ka: 'წითელი გიგანტი', en: 'Red giant' } },
                                { id: 'brown-dwarf', name: { ka: 'ყავისფერი ჯუჯა', en: 'Brown dwarf' } },
                                { id: 'hertzsprung-russell-diagram', name: { ka: 'ჰერცშპრუნგ–რასელის დიაგრამა', en: 'Hertzsprung-Russell diagram' } },
                                { id: 'hypergiant', name: { ka: 'ჰიპერგიგანტი', en: 'Hypergiant' } },
                                { id: 'supernova', name: { ka: 'ზეახალი (სუპერნოვა) ტიპი Ia/II', en: 'Supernova (Type Ia/II)' } },
                                { id: 'supernova-remnant', name: { ka: 'ზეახლის ნარჩენი', en: 'Supernova remnant' } },
                                { id: 'nova', name: { ka: 'ნოვა', en: 'Nova' } },
                            ]
                        },
                        {
                            id: 'solar-physics-heliophysics',
                            name: { ka: '☀️ მზის ფიზიკა და ჰელიოფიზიკა', en: '☀️ Solar Physics and Heliophysics' },
                            keywords: [
                                { id: 'granulation', name: { ka: 'გრანულაცია', en: 'Granulation' } },
                                { id: 'corona', name: { ka: 'კორონა', en: 'Corona' } },
                                { id: 'coronal-mass-ejection', name: { ka: 'კორონალური მასის ეჟექცია (CME)', en: 'Coronal mass ejection (CME)' } },
                                { id: 'space-weather', name: { ka: 'კოსმოსური ამინდი', en: 'Space weather' } },
                                { id: 'solar-flare', name: { ka: 'მზის აფეთქება', en: 'Solar flare' } },
                                { id: 'solar-dynamo', name: { ka: 'მზის დინამო', en: 'Solar dynamo' } },
                                { id: 'sunspots', name: { ka: 'მზის ლაქები', en: 'Sunspots' } },
                                { id: 'solar-cycle', name: { ka: 'მზის ციკლი', en: 'Solar cycle' } },
                                { id: 'solar-wind', name: { ka: 'მზის ქარი', en: 'Solar wind' } },
                                { id: 'faculae', name: { ka: 'ფაქულები', en: 'Faculae' } },
                                { id: 'photosphere', name: { ka: 'ფოტოსფერო', en: 'Photosphere' } },
                                { id: 'chromosphere', name: { ka: 'ქრომოსფერო', en: 'Chromosphere' } },
                                { id: 'heliosphere', name: { ka: 'ჰელიოსფერო', en: 'Heliosphere' } },
                                { id: 'prominences', name: { ka: 'პროტუბერანციები', en: 'Prominences' } },
                                { id: 'solar-ignition', name: { ka: 'მზის ანთება', en: 'Solar ignition' } },
                            ]
                        },
                        {
                            id: 'nebulae-interstellar-space',
                            name: { ka: '🌫️ ნისლეულები და ვარსკვლავთშორისი სივრცე', en: '🌫️ Nebulae and Interstellar Space' },
                            keywords: [
                                { id: 'h-ii-region', name: { ka: 'H II რეგიონი', en: 'H II region' } },
                                { id: 'reflection-nebula', name: { ka: 'ამრეკლავი ნისლეული', en: 'Reflection nebula' } },
                                { id: 'dark-nebula', name: { ka: 'ბნელი ნისლეული', en: 'Dark nebula' } },
                                { id: 'emission-nebula', name: { ka: 'ემისიური ნისლეული', en: 'Emission nebula' } },
                                { id: 'interstellar-medium', name: { ka: 'ვარსკვლავთშორისი გარემო', en: 'Interstellar medium' } },
                                { id: 'interstellar-dust-gas', name: { ka: 'ვარსკვლავთშორისი მტვერი და გაზი', en: 'Interstellar dust and gas' } },
                                { id: 'cosmic-rays', name: { ka: 'კოსმოსური სხივები', en: 'Cosmic rays' } },
                                { id: 'molecular-cloud', name: { ka: 'მოლეკულური ღრუბელი', en: 'Molecular cloud' } },
                                { id: 'planetary-nebula', name: { ka: 'პლანეტარული ნისლეული', en: 'Planetary nebula' } },
                                { id: 'photodissociation-region', name: { ka: 'ფოტოდისოციაციური რეგიონი (PDR)', en: 'Photodissociation region (PDR)' } },
                                { id: 'shock-front', name: { ka: 'შოკური ფრონტი', en: 'Shock front' } },
                                { id: 'globule', name: { ka: 'გლობულა', en: 'Globule' } },
                                { id: 'stellar-nursery', name: { ka: 'ვარსკვლავური აკვანი', en: 'Stellar nursery' } },
                            ]
                        },
                        {
                            id: 'galactic-extragalactic-astronomy',
                            name: { ka: '💫 გალაქტიკური და ექსტრაგალაქტიკური ასტრონომია', en: '💫 Galactic and Extragalactic Astronomy' },
                            keywords: [
                                { id: 'local-group', name: { ka: 'ადგილობრივი ჯგუფი', en: 'Local Group' } },
                                { id: 'andromeda-galaxy', name: { ka: 'ანდრომედას გალაქტიკა', en: 'Andromeda Galaxy' } },
                                { id: 'active-galactic-nucleus', name: { ka: 'აქტიური გალაქტიკური ბირთვი (AGN)', en: 'Active galactic nucleus (AGN)' } },
                                { id: 'blazar', name: { ka: 'ბლაზარი', en: 'Blazar' } },
                                { id: 'galaxy-collision-merger', name: { ka: 'გალაქტიკათა შეჯახება/შერწყმა', en: 'Galaxy collision/merger' } },
                                { id: 'galaxy-cluster-supercluster', name: { ka: 'გალაქტიკების გროვა/ზეგროვა', en: 'Galaxy cluster/supercluster' } },
                                { id: 'galaxy-types', name: { ka: 'გალაქტიკების ტიპები (სპირალური, ელიფსური, არაწესიერი, ლენტიკულარული)', en: 'Galaxy types (spiral, elliptical, irregular, lenticular)' } },
                                { id: 'galactic-dynamics', name: { ka: 'გალაქტიკური დინამიკა', en: 'Galactic dynamics' } },
                                { id: 'galactic-disk-halo-bulge', name: { ka: 'გალაქტიკური დისკო/ჰალო/ბულჟი', en: 'Galactic disk/halo/bulge' } },
                                { id: 'galactic-bar', name: { ka: 'გალაქტიკური ზოლი (ბარი)', en: 'Galactic bar' } },
                                { id: 'zodiacal-light', name: { ka: 'ზოდიაქალური სინათლე', en: 'Zodiacal light' } },
                                { id: 'milky-way', name: { ka: 'ირმის ნახტომი', en: 'Milky Way' } },
                                { id: 'quasar', name: { ka: 'კვაზარი', en: 'Quasar' } },
                                { id: 'magellanic-clouds', name: { ka: 'მაგელანის დიდი და მცირე ნისლეულები', en: 'Large and Small Magellanic Clouds' } },
                                { id: 'dark-matter-halo', name: { ka: 'მუქი მატერიის ჰალო', en: 'Dark matter halo' } },
                                { id: 'gravitational-field-lensing', name: { ka: 'გრავიტაციული ველის ლინზირება', en: 'Gravitational field lensing' } },
                            ]
                        },
                    ]
                },
                {
                    id: 'compact-objects-gravitational-waves',
                    name: { ka: '⚫ კომპაქტური ობიექტები და გრავიტაციული ტალღები', en: '⚫ Compact Objects and Gravitational Waves' },
                    subSections: [
                        {
                            id: 'compact-objects-keywords',
                            name: {ka: 'კომპაქტური ობიექტები', en: 'Compact Objects'}, // This level might not have a direct name in user's text, so I made one
                            keywords: [
                                { id: 'accretion', name: { ka: 'აკრეცია', en: 'Accretion' } },
                                { id: 'accretion-jets', name: { ka: 'აკრეციული ჭავლები (ჯეტები)', en: 'Accretion jets' } },
                                { id: 'gravitational-lensing', name: { ka: 'გრავიტაციული ლინზირება', en: 'Gravitational lensing' } },
                                { id: 'gravitational-wave', name: { ka: 'გრავიტაციული ტალღა', en: 'Gravitational wave' } },
                                { id: 'gravitational-wave-detector', name: { ka: 'გრავიტაციული ტალღის დეტექტორი (LIGO, Virgo, KAGRA, LISA)', en: 'Gravitational wave detector (LIGO, Virgo, KAGRA, LISA)' } },
                                { id: 'ergosphere', name: { ka: 'ერგოსფერო', en: 'Ergosphere' } },
                                { id: 'magnetar-compact', name: { ka: 'მაგნეტარი', en: 'Magnetar' } },
                                { id: 'event-horizon', name: { ka: 'მოვლენათა ჰორიზონტი', en: 'Event horizon' } },
                                { id: 'pulsar-compact', name: { ka: 'პულსარი', en: 'Pulsar' } },
                                { id: 'singularity', name: { ka: 'სინგულარობა', en: 'Singularity' } },
                                { id: 'black-hole', name: { ka: 'შავი ხვრელი (შვარცშილდის/კერის)', en: 'Black hole (Schwarzschild/Kerr)' } },
                                { id: 'schwarzschild-radius', name: { ka: 'შვარცშილდის რადიუსი', en: 'Schwarzschild radius' } },
                                { id: 'wormhole', name: { ka: 'ჭიახვრელი', en: 'Wormhole' } },
                                { id: 'hawking-radiation', name: { ka: 'ჰოკინგის გამოსხივება', en: 'Hawking radiation' } },
                                { id: 'cosmic-gravitational-object', name: { ka: 'კოსმოსური გრავიტაციული ობიექტი', en: 'Cosmic gravitational object' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'large-scale-study-universe',
                    name: { ka: '🧪 სამყაროს ფართომასშტაბიანი კვლევა', en: '🧪 Large-Scale Study of the Universe' },
                    subSections: [
                        {
                            id: 'cosmology',
                            name: { ka: '🌌 კოსმოლოგია', en: '🌌 Cosmology' },
                            keywords: [
                                { id: 'lambda-cdm-model', name: { ka: 'ΛCDM მოდელი', en: 'ΛCDM model' } },
                                { id: 'antimatter', name: { ka: 'ანტიმატერია', en: 'Antimatter' } },
                                { id: 'baryonic-acoustic-oscillations', name: { ka: 'ბარიონული აკუსტიკური რხევები (BAO)', en: 'Baryonic acoustic oscillations (BAO)' } },
                                { id: 'dark-energy', name: { ka: 'ბნელი ენერგია', en: 'Dark energy' } },
                                { id: 'dark-matter', name: { ka: 'ბნელი მატერია', en: 'Dark matter' } },
                                { id: 'flatness-problem', name: { ka: 'ბრტყელობის პრობლემა', en: 'Flatness problem' } },
                                { id: 'big-bang', name: { ka: 'დიდი აფეთქება', en: 'Big Bang' } },
                                { id: 'great-wall-filament', name: { ka: 'დიდი კედელი (ფილამენტი)', en: 'Great Wall (filament)' } },
                                { id: 'inflation', name: { ka: 'ინფლაცია', en: 'Inflation' } },
                                { id: 'cosmological-principle', name: { ka: 'კოსმოლოგიური პრინციპი', en: 'Cosmological principle' } },
                                { id: 'cmb', name: { ka: 'კოსმოსური მიკროტალღური ფონური გამოსხივება (CMB)', en: 'Cosmic microwave background radiation (CMB)' } },
                                { id: 'reionization', name: { ka: 'რეიონიზაცია', en: 'Reionization' } },
                                { id: 'recombination', name: { ka: 'რეკომბინაცია', en: 'Recombination' } },
                                { id: 'age-of-universe', name: { ka: 'სამყაროს ასაკი', en: 'Age of the universe' } },
                                { id: 'expansion-of-universe', name: { ka: 'სამყაროს გაფართოება', en: 'Expansion of the universe' } },
                                { id: 'large-scale-structure-universe', name: { ka: 'სამყაროს ფართომასშტაბიანი სტრუქტურა', en: 'Large-scale structure of the universe' } },
                                { id: 'friedmann-models', name: { ka: 'ფრიდმანის მოდელები', en: 'Friedmann models' } },
                                { id: 'hubbles-law', name: { ka: 'ჰაბლის კანონი', en: 'Hubble\'s law' } },
                                { id: 'horizon-problem', name: { ka: 'ჰორიზონტის პრობლემა', en: 'Horizon problem' } },
                                { id: 'redshift', name: { ka: 'წითელი წანაცვლება', en: 'Redshift' } },
                            ]
                        },
                        {
                            id: 'astrobiology',
                            name: { ka: '👽 ასტრობიოლოგია', en: '👽 Astrobiology' },
                            keywords: [
                                { id: 'seti', name: { ka: 'SETI', en: 'SETI' } },
                                { id: 'extraterrestrial-life', name: { ka: 'არამიწიერი სიცოცხლე', en: 'Extraterrestrial life' } },
                                { id: 'biosignatures', name: { ka: 'ბიოსიგნატურები', en: 'Biosignatures' } },
                                { id: 'drake-equation', name: { ka: 'დრეიკის განტოლება', en: 'Drake equation' } },
                                { id: 'exoplanet-atmospheres', name: { ka: 'ეგზოპლანეტების ატმოსფეროები', en: 'Exoplanet atmospheres' } },
                                { id: 'extremophiles', name: { ka: 'ექსტრემოფილები', en: 'Extremophiles' } },
                                { id: 'cosmic-biology', name: { ka: 'კოსმოსური ბიოლოგია', en: 'Cosmic biology' } },
                                { id: 'panspermia', name: { ka: 'პანსპერმია', en: 'Panspermia' } },
                                { id: 'habitable-zone', name: { ka: 'სასიცოცხლო ზონა (HZ)', en: 'Habitable zone (HZ)' } },
                                { id: 'origin-of-life', name: { ka: 'სიცოცხლის წარმოშობა (აბიოგენეზი)', en: 'Origin of life (abiogenesis)' } },
                                { id: 'technosignatures', name: { ka: 'ტექნოსიგნატურები', en: 'Technosignatures' } },
                                { id: 'transit-spectroscopy', name: { ka: 'ტრანზიტული სპექტროგრაფია', en: 'Transit spectroscopy' } },
                                { id: 'habitability-indices', name: { ka: 'ჰაბიტაბელურობის ინდექსები', en: 'Habitability indices' } },
                                { id: 'cosmogenesis', name: { ka: 'კოსმოგენეზი', en: 'Cosmogenesis' } },
                            ]
                        },
                        {
                            id: 'astrochemistry',
                            name: { ka: '⚛️ ასტროქიმია', en: '⚛️ Astrochemistry' },
                            keywords: [
                                { id: 'interstellar-molecules', name: { ka: 'ვარსკვლავთშორისი მოლეკულები', en: 'Interstellar molecules' } },
                                { id: 'isotopic-analysis', name: { ka: 'იზოტოპური ანალიზი', en: 'Isotopic analysis' } },
                                { id: 'cosmochemistry', name: { ka: 'კოსმოქიმია', en: 'Cosmochemistry' } },
                                { id: 'cosmic-chemical-reactions', name: { ka: 'კოსმოსური ქიმიური რეაქციები', en: 'Cosmic chemical reactions' } },
                                { id: 'molecular-clouds-astrochem', name: { ka: 'მოლეკულური ღრუბლები', en: 'Molecular clouds' } },
                                { id: 'dust-mineralogy', name: { ka: 'მტვრის მინერალოგია', en: 'Dust mineralogy' } },
                                { id: 'pahs', name: { ka: 'პოლიციკლური არომატული ნახშირწყალბადები (PAHs)', en: 'Polycyclic aromatic hydrocarbons (PAHs)' } },
                                { id: 'prebiotic-molecules', name: { ka: 'პრებიოტიკური მოლეკულები', en: 'Prebiotic molecules' } },
                                { id: 'chemical-evolution', name: { ka: 'ქიმიური ევოლუცია', en: 'Chemical evolution' } },
                                { id: 'icy-grains', name: { ka: 'ყინულოვანი მარცვლები', en: 'Icy grains' } },
                                { id: 'chemical-elements', name: { ka: 'ქიმიური ელემენტები', en: 'Chemical elements' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'biology',
            name: { ka: '🌱 ბიოლოგია', en: '🌱 Biology' },
            sections: [
                {
                    id: 'molecular-cellular-biology',
                    name: { ka: '🧬 მოლეკულური და უჯრედული ბიოლოგია', en: '🧬 Molecular and Cellular Biology' },
                    subSections: [
                        {
                            id: 'biochemistry',
                            name: { ka: 'ბიოქიმია', en: 'Biochemistry' },
                            keywords: [
                                { id: 'amino-acid', name: { ka: 'ამინომჟავა', en: 'Amino acid' } },
                                { id: 'anabolism', name: { ka: 'ანაბოლიზმი', en: 'Anabolism' } },
                                { id: 'atp', name: { ka: 'ატფ (ადენოზინტრიფოსფატი)', en: 'ATP (adenosine triphosphate)' } },
                                { id: 'buffer-systems', name: { ka: 'ბუფერული სისტემები', en: 'Buffer systems' } },
                                { id: 'glycolysis', name: { ka: 'გლიკოლიზი', en: 'Glycolysis' } },
                                { id: 'glucose', name: { ka: 'გლუკოზა', en: 'Glucose' } },
                                { id: 'vitamin', name: { ka: 'ვიტამინი', en: 'Vitamin' } },
                                { id: 'electron-transport-chain', name: { ka: 'ელექტრონების ტრანსპორტის ჯაჭვი', en: 'Electron transport chain' } },
                                { id: 'inhibitor-constant', name: { ka: 'ინჰიბიტორის მუდმივა', en: 'Inhibitor constant' } },
                                { id: 'catabolism', name: { ka: 'კატაბოლიზმი', en: 'Catabolism' } },
                                { id: 'coenzymes', name: { ka: 'კოფერმენტები', en: 'Coenzymes' } },
                                { id: 'krebs-cycle', name: { ka: 'კრებსის ციკლი', en: 'Krebs cycle' } },
                                { id: 'lipid', name: { ka: 'ლიპიდი', en: 'Lipid' } },
                                { id: 'metabolism', name: { ka: 'მეტაბოლიზმი', en: 'Metabolism' } },
                                { id: 'mineral', name: { ka: 'მინერალი', en: 'Mineral' } },
                                { id: 'carbohydrates', name: { ka: 'ნახშირწყლები', en: 'Carbohydrates' } },
                                { id: 'nucleic-acid', name: { ka: 'ნუკლეინის მჟავა', en: 'Nucleic acid' } },
                                { id: 'enzyme', name: { ka: 'ფერმენტი', en: 'Enzyme' } },
                                { id: 'enzyme-kinetics', name: { ka: 'ფერმენტული კინეტიკა', en: 'Enzyme kinetics' } },
                                { id: 'enzyme-complexes', name: { ka: 'ფერმენტული კომპლექსები', en: 'Enzyme complexes' } },
                                { id: 'photosynthesis', name: { ka: 'ფოტოსინთეზი', en: 'Photosynthesis' } },
                                { id: 'chemosynthesis', name: { ka: 'ქიმიოსინთეზი', en: 'Chemosynthesis' } },
                                { id: 'hormone', name: { ka: 'ჰორმონი', en: 'Hormone' } },
                                { id: 'protein', name: { ka: 'ცილა', en: 'Protein' } },
                                { id: 'fat', name: { ka: 'ცხიმი', en: 'Fat' } },
                                { id: 'biochemical-analysis', name: { ka: 'ბიოქიმიური ანალიზი', en: 'Biochemical analysis' } },
                            ]
                        },
                        {
                            id: 'cell-biology',
                            name: { ka: '🔬 უჯრედის ბიოლოგია', en: '🔬 Cell Biology' },
                            keywords: [
                                { id: 'actin', name: { ka: 'აქტინი', en: 'Actin' } },
                                { id: 'apoptosis', name: { ka: 'აპოპტოზი', en: 'Apoptosis' } },
                                { id: 'nucleus', name: { ka: 'ბირთვი', en: 'Nucleus' } },
                                { id: 'golgi-apparatus', name: { ka: 'გოლჯის აპარატი', en: 'Golgi apparatus' } },
                                { id: 'diffusion', name: { ka: 'დიფუზია', en: 'Diffusion' } },
                                { id: 'endoplasmic-reticulum', name: { ka: 'ენდოპლაზმური ბადე (გლუვი/მარცვლოვანი)', en: 'Endoplasmic reticulum (smooth/rough)' } },
                                { id: 'endocytosis', name: { ka: 'ენდოციტოზი', en: 'Endocytosis' } },
                                { id: 'eukaryote', name: { ka: 'ეუკარიოტი', en: 'Eukaryote' } },
                                { id: 'vacuole', name: { ka: 'ვაკუოლი', en: 'Vacuole' } },
                                { id: 'exocytosis', name: { ka: 'ექსოციტოზი', en: 'Exocytosis' } },
                                { id: 'fluid-mosaic-model', name: { ka: 'თხევად-მოზაიკური მოდელი', en: 'Fluid-mosaic model' } },
                                { id: 'confocal-microscopy', name: { ka: 'კონფოკალური მიკროსკოპია', en: 'Confocal microscopy' } },
                                { id: 'cryomicroscopy', name: { ka: 'კრიომიკროსკოპია', en: 'Cryomicroscopy' } },
                                { id: 'lysosome', name: { ka: 'ლიზოსომა', en: 'Lysosome' } },
                                { id: 'meiosis', name: { ka: 'მეიოზი', en: 'Meiosis' } },
                                { id: 'myosin', name: { ka: 'მიოზინი', en: 'Myosin' } },
                                { id: 'microtubule', name: { ka: 'მიკროტუბული', en: 'Microtubule' } },
                                { id: 'mitosis', name: { ka: 'მიტოზი', en: 'Mitosis' } },
                                { id: 'mitochondrion', name: { ka: 'მიტოქონდრია', en: 'Mitochondrion' } },
                                { id: 'osmosis', name: { ka: 'ოსმოსი', en: 'Osmosis' } },
                                { id: 'peroxisome', name: { ka: 'პეროქსისომა', en: 'Peroxisome' } },
                                { id: 'prokaryote', name: { ka: 'პროკარიოტი', en: 'Prokaryote' } },
                                { id: 'ribosome', name: { ka: 'რიბოსომა', en: 'Ribosome' } },
                                { id: 'tubulin', name: { ka: 'ტუბულინი', en: 'Tubulin' } },
                                { id: 'cell', name: { ka: 'უჯრედი', en: 'Cell' } },
                                { id: 'cell-wall', name: { ka: 'უჯრედის კედელი', en: 'Cell wall' } },
                                { id: 'cell-membrane', name: { ka: 'უჯრედის მემბრანა', en: 'Cell membrane' } },
                                { id: 'ultrastructure', name: { ka: 'ულტრასტრუქტურა', en: 'Ultrastructure' } },
                                { id: 'phagocytosis', name: { ka: 'ფაგოციტოზი', en: 'Phagocytosis' } },
                                { id: 'chloroplast', name: { ka: 'ქლოროპლასტი', en: 'Chloroplast' } },
                                { id: 'cytoplasm', name: { ka: 'ციტოპლაზმა', en: 'Cytoplasm' } },
                                { id: 'cytoskeleton', name: { ka: 'ციტოსკელეტი', en: 'Cytoskeleton' } },
                                { id: 'cytokinesis', name: { ka: 'ციკლოკინეზი', en: 'Cytokinesis' } },
                                { id: 'cytoplasmic-streaming', name: { ka: 'ციტოპლაზმური დინება', en: 'Cytoplasmic streaming' } },
                            ]
                        },
                        {
                            id: 'molecular-biology',
                            name: { ka: '🧬 მოლეკულური ბიოლოგია', en: '🧬 Molecular Biology' },
                            keywords: [
                                { id: 'crispr', name: { ka: 'CRISPR', en: 'CRISPR' } },
                                { id: 'gene', name: { ka: 'გენი', en: 'Gene' } },
                                { id: 'genetic-code', name: { ka: 'გენეტიკური კოდი', en: 'Genetic code' } },
                                { id: 'genetic-engineering', name: { ka: 'გენური ინჟინერია', en: 'Genetic engineering' } },
                                { id: 'dna', name: { ka: 'დნმ (დეზოქსირიბონუკლეინის მჟავა)', en: 'DNA (deoxyribonucleic acid)' } },
                                { id: 'epistasis', name: { ka: 'ეპისტაზი', en: 'Epistasis' } },
                                { id: 'metabolomics', name: { ka: 'მეტაბოლომიკა', en: 'Metabolomics' } },
                                { id: 'micro-rna', name: { ka: 'მიკრო-რნმ', en: 'micro-RNA' } },
                                { id: 'mutation', name: { ka: 'მუტაცია', en: 'Mutation' } },
                                { id: 'pcr', name: { ka: 'პოლიმერაზული ჯაჭვური რეაქცია (პჯრ)', en: 'Polymerase chain reaction (PCR)' } },
                                { id: 'proteomics', name: { ka: 'პროტეომიკა', en: 'Proteomics' } },
                                { id: 'regulatory-elements', name: { ka: 'რეგულატორული ელემენტები', en: 'Regulatory elements' } },
                                { id: 'replication', name: { ka: 'რეპლიკაცია', en: 'Replication' } },
                                { id: 'rna', name: { ka: 'რნმ (რიბონუკლეინის მჟავა)', en: 'RNA (ribonucleic acid)' } },
                                { id: 'synthetic-oligonucleotides', name: { ka: 'სინთეზური ოლიგონუკლეოტიდები', en: 'Synthetic oligonucleotides' } },
                                { id: 'splicing', name: { ka: 'სპლაისინგი', en: 'Splicing' } },
                                { id: 'transcriptomics', name: { ka: 'ტრანსკრიპტომიკა', en: 'Transcriptomics' } },
                                { id: 'transcription', name: { ka: 'ტრანსკრიფცია', en: 'Transcription' } },
                                { id: 'translation', name: { ka: 'ტრანსლაცია', en: 'Translation' } },
                                { id: 'chromatin', name: { ka: 'ქრომატინი', en: 'Chromatin' } },
                                { id: 'chromosome', name: { ka: 'ქრომოსომა', en: 'Chromosome' } },
                                { id: 'promoter', name: { ka: 'პრომოტორი', en: 'Promoter' } },
                                { id: 'repressor', name: { ka: 'რეპრესორი', en: 'Repressor' } },
                                { id: 'operon', name: { ka: 'ოპერონი', en: 'Operon' } },
                            ]
                        },
                        {
                            id: 'developmental-biology',
                            name: { ka: '🥚 განვითარების ბიოლოგია (ემბრიოლოგია)', en: '🥚 Developmental Biology (Embryology)' },
                            keywords: [
                                { id: 'apical-dominance', name: { ka: 'აპიკალური დომინანტობა', en: 'Apical dominance' } },
                                { id: 'gastrulation', name: { ka: 'გასტრულაცია', en: 'Gastrulation' } },
                                { id: 'embryo', name: { ka: 'ემბრიონი', en: 'Embryo' } },
                                { id: 'zygote', name: { ka: 'ზიგოტა', en: 'Zygote' } },
                                { id: 'induction', name: { ka: 'ინდუქცია', en: 'Induction' } },
                                { id: 'larva', name: { ka: 'ლარვა', en: 'Larva' } },
                                { id: 'metamorphosis', name: { ka: 'მეტამორფოზი', en: 'Metamorphosis' } },
                                { id: 'morphogenesis', name: { ka: 'მორფოგენეზი', en: 'Morphogenesis' } },
                                { id: 'neurulation', name: { ka: 'ნეურულაცია', en: 'Neurulation' } },
                                { id: 'organogenesis', name: { ka: 'ორგანogeneზი', en: 'Organogenesis' } },
                                { id: 'regeneration', name: { ka: 'რეგენერაცია', en: 'Regeneration' } },
                                { id: 'cell-differentiation', name: { ka: 'უჯრედული დიფერენციაცია', en: 'Cell differentiation' } },
                                { id: 'stem-cell', name: { ka: 'ღეროვანი უჯრედი', en: 'Stem cell' } },
                                { id: 'germline', name: { ka: 'ჩანასახი', en: 'Germline' } },
                                { id: 'embryonic-layers', name: { ka: 'ემბრიონული ფენები (ექტოდერმა, მეზოდერმა, ენდოდერმა)', en: 'Embryonic layers (ectoderm, mesoderm, endoderm)' } },
                                { id: 'blastula', name: { ka: 'ბლასტულა', en: 'Blastula' } },
                            ]
                        },
                        {
                            id: 'structural-biology',
                            name: { ka: '⛓️ სტრუქტურული ბიოლოგია', en: '⛓️ Structural Biology' },
                            keywords: [
                                { id: 'alpha-helix', name: { ka: 'ალფა-სპირალი', en: 'Alpha-helix' } },
                                { id: 'beta-sheet', name: { ka: 'ბეტა-შრე', en: 'Beta-sheet' } },
                                { id: 'nmr', name: { ka: 'ბირთვული მაგნიტური რეზონანსი (ბმრ)', en: 'Nuclear magnetic resonance (NMR)' } },
                                { id: 'domains', name: { ka: 'დომენები', en: 'Domains' } },
                                { id: 'cryo-em', name: { ka: 'კრიო-ელექტრონული მიკროსკოპია (კრიო-EM)', en: 'Cryo-electron microscopy (cryo-EM)' } },
                                { id: 'ligand-binding', name: { ka: 'ლიგანდის შეკავშირება', en: 'Ligand binding' } },
                                { id: 'molecular-modeling', name: { ka: 'მოლეკულური მოდელირება', en: 'Molecular modeling' } },
                                { id: 'x-ray-crystallography', name: { ka: 'რენტგენოკრისტალოგრაფია', en: 'X-ray crystallography' } },
                                { id: 'protein-structure', name: { ka: 'ცილის სტრუქტურა (პირველადი, მეორეული, მესამეული, მეოთხეული)', en: 'Protein structure (primary, secondary, tertiary, quaternary)' } },
                                { id: 'protein-complex', name: { ka: 'ცილოვანი კომპლექსი', en: 'Protein complex' } },
                                { id: 'structural-genomics', name: { ka: 'სტრუქტურული გენომიკა', en: 'Structural genomics' } },
                            ]
                        },
                    ]
                },
               {
                    id: 'genetics-and-evolution',
                    name: { ka: '🧬 გენეტიკა და ევოლუცია', en: '🧬 Genetics and Evolution' },
                    subSections: [
                        {
                            id: 'classical-genetics',
                            name: { ka: '👨‍🔬 კლასიკური გენეტიკა (მენდელის კანონები)', en: '👨‍🔬 Classical Genetics (Mendelian Laws)' },
                            keywords: [
                                { id: 'allele', name: { ka: 'ალელი', en: 'Allele' } },
                                { id: 'genotype', name: { ka: 'გენოტიპი', en: 'Genotype' } },
                                { id: 'dominant', name: { ka: 'დომინანტური', en: 'Dominant' } },
                                { id: 'heredity', name: { ka: 'მემკვიდრეობითობა', en: 'Heredity' } },
                                { id: 'punnett-square', name: { ka: 'პენეტის ცხრილი', en: 'Punnett square' } },
                                { id: 'recessive', name: { ka: 'რეცესიული', en: 'Recessive' } },
                                { id: 'phenotype', name: { ka: 'ფენოტიპი', en: 'Phenotype' } },
                                { id: 'crossbreeding', name: { ka: 'შეჯვარება', en: 'Crossbreeding' } },
                                { id: 'hybrid', name: { ka: 'ჰიბრიდი', en: 'Hybrid' } },
                                { id: 'heterozygous', name: { ka: 'ჰეტეროზიგოტური', en: 'Heterozygous' } },
                                { id: 'homozygous', name: { ka: 'ჰომოზიგოტური', en: 'Homozygous' } },
                                { id: 'mendelian-laws', name: { ka: 'მენდელის კანონები', en: 'Mendelian laws' } },
                                { id: 'co-dominance', name: { ka: 'კო-დომინირება', en: 'Co-dominance' } },
                            ]
                        },
                        {
                            id: 'population-genetics',
                            name: { ka: '👥 პოპულაციური გენეტიკა', en: '👥 Population Genetics' },
                            keywords: [
                                { id: 'allele-frequency', name: { ka: 'ალელის სიხშირე', en: 'Allele frequency' } },
                                { id: 'natural-selection', name: { ka: 'ბუნებრივი გადარჩევა', en: 'Natural selection' } },
                                { id: 'genetic-drift', name: { ka: 'გენეტიკური დრეიფი', en: 'Genetic drift' } },
                                { id: 'gene-flow', name: { ka: 'გენთა ნაკადი', en: 'Gene flow' } },
                                { id: 'gene-pool', name: { ka: 'გენოფონდი', en: 'Gene pool' } },
                                { id: 'inbreeding', name: { ka: 'ინბრიდინგი', en: 'Inbreeding' } },
                                { id: 'population', name: { ka: 'პოპულაცია', en: 'Population' } },
                                { id: 'selective-pressure', name: { ka: 'სელექციური წნევა', en: 'Selective pressure' } },
                                { id: 'hardy-weinberg-equilibrium', name: { ka: 'ჰარდი-ვაინბერგის წონასწორობა', en: 'Hardy-Weinberg equilibrium' } },
                                { id: 'population-size', name: { ka: 'პოპულაციის ზომა', en: 'Population size' } },
                                { id: 'genetic-diversity', name: { ka: 'გენეტიკური მრავალფეროვნება', en: 'Genetic diversity' } },
                            ]
                        },
                        {
                            id: 'genomics-epigenetics',
                            name: { ka: '📖 გენომიკა და ეპიგენეტიკა', en: '📖 Genomics and Epigenetics' },
                            keywords: [
                                { id: 'bioinformatics-gen', name: { ka: 'ბიოინფორმატიკა', en: 'Bioinformatics' } },
                                { id: 'genome', name: { ka: 'გენომი', en: 'Genome' } },
                                { id: 'genome-editing', name: { ka: 'გენომის რედაქტირება', en: 'Genome editing' } },
                                { id: 'gene-expression', name: { ka: 'გენის ექსპრესია', en: 'Gene expression' } },
                                { id: 'dna-methylation', name: { ka: 'დნმ-ის მეთილირება', en: 'DNA methylation' } },
                                { id: 'dna-sequencing', name: { ka: 'დნმ-ის სექვენირება', en: 'DNA sequencing' } },
                                { id: 'epigenetic-modification', name: { ka: 'ეპიგენეტიკური მოდიფიკაცია', en: 'Epigenetic modification' } },
                                { id: 'transcriptomics-gen', name: { ka: 'ტრანსკრიპტომიკა', en: 'Transcriptomics' } },
                                { id: 'chromatin-remodeling', name: { ka: 'ქრომატინის რემოდელირება', en: 'Chromatin remodeling' } },
                                { id: 'histones', name: { ka: 'ჰისტონები', en: 'Histones' } },
                                { id: 'hox-genes', name: { ka: 'ჰოქს-გენები', en: 'Hox genes' } },
                                { id: 'micro-rna-gen', name: { ka: 'მიკრო-რნმ', en: 'micro-RNA' } },
                            ]
                        },
                        {
                            id: 'evolutionary-biology',
                            name: { ka: '🦖 ევოლუციური ბიოლოგია', en: '🦖 Evolutionary Biology' },
                            keywords: [
                                { id: 'adaptation', name: { ka: 'ადაპტაცია', en: 'Adaptation' } },
                                { id: 'analogous-organs', name: { ka: 'ანალოგიური ორგანოები', en: 'Analogous organs' } },
                                { id: 'natural-selection-evo', name: { ka: 'ბუნებრივი გადარჩევა', en: 'Natural selection' } },
                                { id: 'divergence', name: { ka: 'დივერგენცია', en: 'Divergence' } },
                                { id: 'evolution', name: { ka: 'ევოლუცია', en: 'Evolution' } },
                                { id: 'co-evolution', name: { ka: 'კოევოლუცია', en: 'Co-evolution' } },
                                { id: 'convergence', name: { ka: 'კონვერგენცია', en: 'Convergence' } },
                                { id: 'fossil', name: { ka: 'ნამარხი', en: 'Fossil' } },
                                { id: 'common-ancestor', name: { ka: 'საერთო წინაპარი', en: 'Common ancestor' } },
                                { id: 'speciation', name: { ka: 'სახეობათა წარმოშობა (სპეციაცია)', en: 'Speciation' } },
                                { id: 'charles-darwin', name: { ka: 'ჩარლზ დარვინი', en: 'Charles Darwin' } },
                                { id: 'artificial-selection', name: { ka: 'ხელოვნური გადარჩევა', en: 'Artificial selection' } },
                                { id: 'homologous-organs', name: { ka: 'ჰომოლოგიური ორგანოები', en: 'Homologous organs' } },
                                { id: 'paleoanthropology', name: { ka: 'პალეოანთროპოლოგია', en: 'Paleoanthropology' } },
                                { id: 'phylogenetic-tree-evo', name: { ka: 'ფილოგენეტიკური ხე', en: 'Phylogenetic tree' } },
                            ]
                        },
                        {
                            id: 'phylogenetics',
                            name: { ka: '🌳 ფილოგენეტიკა', en: '🌳 Phylogenetics' },
                            keywords: [
                                { id: 'genus', name: { ka: 'გვარი', en: 'Genus' } },
                                { id: 'cladistics', name: { ka: 'კლადისტიკა', en: 'Cladistics' } },
                                { id: 'cladogram', name: { ka: 'კლადოგრამა', en: 'Cladogram' } },
                                { id: 'class', name: { ka: 'კლასი', en: 'Class' } },
                                { id: 'molecular-clock', name: { ka: 'მოლეკულური საათი', en: 'Molecular clock' } },
                                { id: 'family', name: { ka: 'ოჯახი', en: 'Family' } },
                                { id: 'order', name: { ka: 'რიგი', en: 'Order' } },
                                { id: 'lineage', name: { ka: 'საგვარეულო ხაზი', en: 'Lineage' } },
                                { id: 'kingdom', name: { ka: 'სამეფო', en: 'Kingdom' } },
                                { id: 'species', name: { ka: 'სახეობა', en: 'Species' } },
                                { id: 'taxonomy', name: { ka: 'ტაქსონომია', en: 'Taxonomy' } },
                                { id: 'phylum', name: { ka: 'ტიპი', en: 'Phylum' } },
                                { id: 'phylogenetic-tree-phylo', name: { ka: 'ფილოგენეტიკური ხე', en: 'Phylogenetic tree' } },
                                { id: 'binomial-nomenclature', name: { ka: 'ბინომიალური ნომენკლატურა', en: 'Binomial nomenclature' } },
                            ]
                        },
                    ]
                },
                {
                    id: 'organismal-biology',
                    name: { ka: '🧠 ორგანიზმების ბიოლოგია', en: '🧠 Organismal Biology' },
                    subSections: [
                        {
                            id: 'anatomy-morphology',
                            name: { ka: '🧍 ანატომია და მორფოლოგია', en: '🧍 Anatomy and Morphology' },
                            keywords: [
                                { id: 'anatomy', name: { ka: 'ანატომია', en: 'Anatomy' } },
                                { id: 'heart', name: { ka: 'გული', en: 'Heart' } },
                                { id: 'endothelium', name: { ka: 'ენდოთელიუმი', en: 'Endothelium' } },
                                { id: 'epithelium', name: { ka: 'ეპითელიუმი', en: 'Epithelium' } },
                                { id: 'kidney', name: { ka: 'თირკმელი', en: 'Kidney' } },
                                { id: 'skin', name: { ka: 'კანი', en: 'Skin' } },
                                { id: 'muscle', name: { ka: 'კუნთი', en: 'Muscle' } },
                                { id: 'morphology', name: { ka: 'მორფოლოგია', en: 'Morphology' } },
                                { id: 'organ', name: { ka: 'ორგანო', en: 'Organ' } },
                                { id: 'organ-system', name: { ka: 'ორგანოთა სისტემა', en: 'Organ system' } },
                                { id: 'blood-vessel', name: { ka: 'სისხლძარღვი', en: 'Blood vessel' } },
                                { id: 'brain', name: { ka: 'ტვინი', en: 'Brain' } },
                                { id: 'lung', name: { ka: 'ფილტვი', en: 'Lung' } },
                                { id: 'tissue', name: { ka: 'ქსოვილი', en: 'Tissue' } },
                                { id: 'liver', name: { ka: 'ღვიძლი', en: 'Liver' } },
                                { id: 'skeleton', name: { ka: 'ჩონჩხი', en: 'Skeleton' } },
                                { id: 'histology', name: { ka: 'ჰისტოლოგია', en: 'Histology' } },
                                { id: 'cytology', name: { ka: 'ციტოლოგია', en: 'Cytology' } },
                                { id: 'embryology', name: { ka: 'ემბრიოლოგია', en: 'Embryology' } },
                            ]
                        },
                        {
                            id: 'physiology',
                            name: { ka: '🌱 ფიზიოლოგია (მცენარეთა და ცხოველთა)', en: '🌱 Physiology (Plant and Animal)' },
                            keywords: [
                                { id: 'excretion', name: { ka: 'გამოყოფა', en: 'Excretion' } },
                                { id: 'neural-regulation', name: { ka: 'ნერვული რეგულაცია', en: 'Neural regulation' } },
                                { id: 'osmoregulation', name: { ka: 'ოსმორეგულაცია', en: 'Osmoregulation' } },
                                { id: 'digestion', name: { ka: 'საჭმლის მონელება', en: 'Digestion' } },
                                { id: 'blood-circulation', name: { ka: 'სისხლის მიმოქცევა', en: 'Blood circulation' } },
                                { id: 'respiration', name: { ka: 'სუნთქვა', en: 'Respiration' } },
                                { id: 'transpiration', name: { ka: 'ტრანსპირაცია', en: 'Transpiration' } },
                                { id: 'tropism', name: { ka: 'ტროპიზმი', en: 'Tropism' } },
                                { id: 'physiology-phy', name: { ka: 'ფიზიოლოგია', en: 'Physiology' } },
                                { id: 'photosynthesis-phy', name: { ka: 'ფოტოსინთეზი', en: 'Photosynthesis' } },
                                { id: 'homeostasis', name: { ka: 'ჰომეოსტაზი', en: 'Homeostasis' } },
                                { id: 'thermoregulation', name: { ka: 'თერმორეგულაცია', en: 'Thermoregulation' } },
                            ]
                        },
                        {
                            id: 'immunology',
                            name: { ka: '🛡️ იმუნოლოგია', en: '🛡️ Immunology' },
                            keywords: [
                                { id: 'allergy', name: { ka: 'ალერგია', en: 'Allergy' } },
                                { id: 'inflammation', name: { ka: 'ანთება', en: 'Inflammation' } },
                                { id: 'antigen', name: { ka: 'ანტიგენი', en: 'Antigen' } },
                                { id: 'antibody', name: { ka: 'ანტისხეული', en: 'Antibody' } },
                                { id: 'autoimmune-disease', name: { ka: 'ავტოიმუნური დაავადება', en: 'Autoimmune disease' } },
                                { id: 'natural-killer-cell', name: { ka: 'ბუნებრივი მკვლელი უჯრედი', en: 'Natural killer cell' } },
                                { id: 'vaccine', name: { ka: 'ვაქცინა', en: 'Vaccine' } },
                                { id: 'immunity', name: { ka: 'იმუნიტეტი (თანდაყოლილი, შეძენილი)', en: 'Immunity (innate, acquired)' } },
                                { id: 'immune-system', name: { ka: 'იმუნური სისტემა', en: 'Immune system' } },
                                { id: 'interferons', name: { ka: 'ინტერფერონები', en: 'Interferons' } },
                                { id: 'complement-system', name: { ka: 'კომპლემენტის სისტემა', en: 'Complement system' } },
                                { id: 'leukocyte', name: { ka: 'ლეიკოციტი', en: 'Leukocyte' } },
                                { id: 'lymphocyte', name: { ka: 'ლიმფოციტი (T-უჯრედი, B-უჯრედი)', en: 'Lymphocyte (T-cell, B-cell)' } },
                                { id: 'macrophage', name: { ka: 'მაკროფაგი', en: 'Macrophage' } },
                                { id: 'neutrophil', name: { ka: 'ნეიტროფილი', en: 'Neutrophil' } },
                                { id: 'cytokines', name: { ka: 'ციტოკინები', en: 'Cytokines' } },
                                { id: 'mhc', name: { ka: 'ძირითადი ჰისტოკომპატიბილობის კომპლექსი (MHC)', en: 'Major histocompatibility complex (MHC)' } },
                                { id: 'immunoglobulin', name: { ka: 'იმუნოგლობულინი', en: 'Immunoglobulin' } },
                            ]
                        },
                        {
                            id: 'endocrinology',
                            name: { ka: '🧪 ენდოკრინოლოგია (ჰორმონალური სისტემა)', en: '🧪 Endocrinology (Hormonal System)' },
                            keywords: [
                                { id: 'adrenaline', name: { ka: 'ადრენალინი', en: 'Adrenaline' } },
                                { id: 'endocrine-system', name: { ka: 'ენდოკრინული სისტემა', en: 'Endocrine system' } },
                                { id: 'estrogen', name: { ka: 'ესტროგენი', en: 'Estrogen' } },
                                { id: 'adrenal-gland', name: { ka: 'თირკმელზედა ჯირკვალი', en: 'Adrenal gland' } },
                                { id: 'insulin', name: { ka: 'ინსულინი', en: 'Insulin' } },
                                { id: 'melatonin', name: { ka: 'მელატონინი', en: 'Melatonin' } },
                                { id: 'pancreas', name: { ka: 'პანკრეასი', en: 'Pancreas' } },
                                { id: 'testosterone', name: { ka: 'ტესტოსტერონი', en: 'Testosterone' } },
                                { id: 'thyroid-gland', name: { ka: 'ფარისებრი ჯირკვალი', en: 'Thyroid gland' } },
                                { id: 'pituitary-gland', name: { ka: 'ჰიპოფიზი', en: 'Pituitary gland' } },
                                { id: 'hormone-endo', name: { ka: 'ჰორმონი', en: 'Hormone' } },
                                { id: 'gland', name: { ka: 'ჯირკვალი', en: 'Gland' } },
                                { id: 'pheromone', name: { ka: 'ფერომონი', en: 'Pheromone' } },
                            ]
                        },
                        {
                            id: 'neurobiology',
                            name: { ka: '🧠 ნეირობიოლოგია (ნერვული სისტემა)', en: '🧠 Neurobiology (Nervous System)' },
                            keywords: [
                                { id: 'axon', name: { ka: 'აქსონი', en: 'Axon' } },
                                { id: 'glial-cells', name: { ka: 'გლიური უჯრედები (ასტროციტი, ოლიგოდენდროციტი, შვანის უჯრედი)', en: 'Glial cells (astrocyte, oligodendrocyte, Schwann cell)' } },
                                { id: 'long-term-depression', name: { ka: 'გრძელვადიანი დეპრესია', en: 'Long-term depression' } },
                                { id: 'long-term-potentiation', name: { ka: 'გრძელვადიანი პოტენციაცია', en: 'Long-term potentiation' } },
                                { id: 'resting-potential', name: { ka: 'დასვენების პოტენციალი', en: 'Resting potential' } },
                                { id: 'dendrite', name: { ka: 'დენდრიტი', en: 'Dendrite' } },
                                { id: 'spinal-cord', name: { ka: 'ზურგის ტვინი', en: 'Spinal cord' } },
                                { id: 'myelin', name: { ka: 'მიელინი', en: 'Myelin' } },
                                { id: 'action-potential', name: { ka: 'მოქმედების პოტენციალი', en: 'Action potential' } },
                                { id: 'neurotransmitter', name: { ka: 'ნეირომედიატორი', en: 'Neurotransmitter' } },
                                { id: 'neuron', name: { ka: 'ნეირონი', en: 'Neuron' } },
                                { id: 'neural-plasticity', name: { ka: 'ნეირონული პლასტიურობა', en: 'Neural plasticity' } },
                                { id: 'nerve-impulse', name: { ka: 'ნერვული იმპულსი', en: 'Nerve impulse' } },
                                { id: 'peripheral-nervous-system', name: { ka: 'პერიფერიული ნერვული სისტემა', en: 'Peripheral nervous system' } },
                                { id: 'reflex', name: { ka: 'რეფლექსი', en: 'Reflex' } },
                                { id: 'synapse', name: { ka: 'სინაფსი', en: 'Synapse' } },
                                { id: 'brain-neuro', name: { ka: 'ტვინი', en: 'Brain' } },
                                { id: 'central-nervous-system', name: { ka: 'ცენტრალური ნერვული სისტემა', en: 'Central nervous system' } },
                                { id: 'neuropathology', name: { ka: 'ნეიროპათოლოგია', en: 'Neuropathology' } },
                            ]
                        },
                        {
                            id: 'reproductive-biology',
                            name: { ka: '👶 რეპროდუქციული ბიოლოგია', en: '👶 Reproductive Biology' },
                            keywords: [
                                { id: 'reproduction', name: { ka: 'გამრავლება (სქესობრივი, უსქესო)', en: 'Reproduction (sexual, asexual)' } },
                                { id: 'gamete', name: { ka: 'გამეტა', en: 'Gamete' } },
                                { id: 'fertilization', name: { ka: 'განაყოფიერება', en: 'Fertilization' } },
                                { id: 'in-vitro-fertilization', name: { ka: 'ინ-ვიტრო განაყოფიერება', en: 'In vitro fertilization' } },
                                { id: 'contraception', name: { ka: 'კონტრაცეპცია', en: 'Contraception' } },
                                { id: 'ovum', name: { ka: 'კვერცხუჯრედი', en: 'Ovum' } },
                                { id: 'menstrual-cycle', name: { ka: 'მენსტრუალური ციკლი', en: 'Menstrual cycle' } },
                                { id: 'pregnancy', name: { ka: 'ორსულობა', en: 'Pregnancy' } },
                                { id: 'placentation', name: { ka: 'პლაცენტაცია', en: 'Placentation' } },
                                { id: 'prenatal-screening', name: { ka: 'პრენატალური სკრინინგი', en: 'Prenatal screening' } },
                                { id: 'reproductive-organs', name: { ka: 'რეპროდუქციული ორგანოები', en: 'Reproductive organs' } },
                                { id: 'spermatozoid', name: { ka: 'სპერმატოზოიდი', en: 'Spermatozoid' } },
                                { id: 'fecundation', name: { ka: 'განაყოფიერება', en: 'Fecundation' } },
                            ]
                        },
                    ]
                },
                {
                    id: 'biodiversity-systematics',
                    name: { ka: '🌍 ბიომრავალფეროვნება და სისტემატიკა', en: '🌍 Biodiversity and Systematics' },
                    subSections: [
                        {
                            id: 'botany',
                            name: { ka: '🌿 ბოტანიკა', en: '🌿 Botany' },
                            keywords: [
                                { id: 'grass', name: { ka: 'ბალახი', en: 'Grass' } },
                                { id: 'shrub', name: { ka: 'ბუჩქი', en: 'Shrub' } },
                                { id: 'fern', name: { ka: 'გვიმრა', en: 'Fern' } },
                                { id: 'dendrology', name: { ka: 'დენდროლოგია', en: 'Dendrology' } },
                                { id: 'seed', name: { ka: 'თესლი', en: 'Seed' } },
                                { id: 'wood', name: { ka: 'მერქანი', en: 'Wood' } },
                                { id: 'mycorrhiza', name: { ka: 'მიკორიზა', en: 'Mycorrhiza' } },
                                { id: 'plant', name: { ka: 'მცენარე', en: 'Plant' } },
                                { id: 'fruit', name: { ka: 'ნაყოფი', en: 'Fruit' } },
                                { id: 'root', name: { ka: 'ფესვი', en: 'Root' } },
                                { id: 'leaf', name: { ka: 'ფოთოლი', en: 'Leaf' } },
                                { id: 'c3-c4-cam-photosynthesis', name: { ka: 'ფოტოსინთეზის C3/C4/CAM ტიპები', en: 'C3/C4/CAM types of photosynthesis' } },
                                { id: 'phloem', name: { ka: 'ფლოემა', en: 'Phloem' } },
                                { id: 'chlorophyll', name: { ka: 'ქლოროფილი', en: 'Chlorophyll' } },
                                { id: 'xylem', name: { ka: 'ქსილემა', en: 'Xylem' } },
                                { id: 'flower', name: { ka: 'ყვავილი', en: 'Flower' } },
                                { id: 'stem', name: { ka: 'ღერო', en: 'Stem' } },
                                { id: 'algae', name: { ka: 'წყალმცენარე', en: 'Algae' } },
                                { id: 'moss', name: { ka: 'ხავსი', en: 'Moss' } },
                                { id: 'tree', name: { ka: 'ხე', en: 'Tree' } },
                                { id: 'palynology', name: { ka: 'პალინოლოგია', en: 'Palynology' } },
                                { id: 'lichen', name: { ka: 'ლიქენი', en: 'Lichen' } },
                            ]
                        },
                        {
                            id: 'zoology',
                            name: { ka: '🦁 ზოოლოგია', en: '🦁 Zoology' },
                            keywords: [
                                { id: 'amphibian', name: { ka: 'ამფიბია', en: 'Amphibian' } },
                                { id: 'arthropod', name: { ka: 'ართროპოდი', en: 'Arthropod' } },
                                { id: 'echinoderm', name: { ka: 'ეკინოდერმა', en: 'Echinoderm' } },
                                { id: 'fish-ichthyology', name: { ka: 'თევზი (იქთიოლოგია)', en: 'Fish (ichthyology)' } },
                                { id: 'mollusk', name: { ka: 'მოლუსკი', en: 'Mollusk' } },
                                { id: 'insect-entomology', name: { ka: 'მწერი (ენტომოლოგია)', en: 'Insect (entomology)' } },
                                { id: 'reptile-herpetology', name: { ka: 'რეპტილია (ჰერპეტოლოგია)', en: 'Reptile (herpetology)' } },
                                { id: 'invertebrate', name: { ka: 'უხერხემლო', en: 'Invertebrate' } },
                                { id: 'bird-ornithology', name: { ka: 'ფრინველი (ორნითოლოგია)', en: 'Bird (ornithology)' } },
                                { id: 'sponge', name: { ka: 'ღრუბელი', en: 'Sponge' } },
                                { id: 'animal', name: { ka: 'ცხოველი', en: 'Animal' } },
                                { id: 'mammal-mammalogy', name: { ka: 'ძუძუმწოვარი (მემლიოლოგია)', en: 'Mammal (mammalogy)' } },
                                { id: 'worm', name: { ka: 'ჭია', en: 'Worm' } },
                                { id: 'vertebrate', name: { ka: 'ხერხემლიანი', en: 'Vertebrate' } },
                                { id: 'taxonomy-zoo', name: { ka: 'ტაქსონომია', en: 'Taxonomy' } },
                                { id: 'zoogeography', name: { ka: 'ზოოგეოგრაფია', en: 'Zoogeography' } },
                            ]
                        },
                        {
                            id: 'microbiology',
                            name: { ka: '🦠 მიკრობიოლოგია', en: '🦠 Microbiology' },
                            keywords: [
                                { id: 'antibiotic', name: { ka: 'ანტიბიოტიკი', en: 'Antibiotic' } },
                                { id: 'antimicrobial-resistance', name: { ka: 'ანტიმიკრობული რეზისტენტობა', en: 'Antimicrobial resistance' } },
                                { id: 'archaea', name: { ka: 'არქეა', en: 'Archaea' } },
                                { id: 'bacteria', name: { ka: 'ბაქტერია', en: 'Bacteria' } },
                                { id: 'bacteriology', name: { ka: 'ბაქტერიოლოგია', en: 'Bacteriology' } },
                                { id: 'biofilm', name: { ka: 'ბიოფილმი', en: 'Biofilm' } },
                                { id: 'virus', name: { ka: 'ვირუსი', en: 'Virus' } },
                                { id: 'virology', name: { ka: 'ვირუსოლოგია', en: 'Virology' } },
                                { id: 'cultivation', name: { ka: 'კულტივირება', en: 'Cultivation' } },
                                { id: 'quorum-sensing', name: { ka: 'კვორუმ-სენსინგი', en: 'Quorum sensing' } },
                                { id: 'microbe', name: { ka: 'მიკრობი', en: 'Microbe' } },
                                { id: 'microorganism', name: { ka: 'მიკროორგანიზმი', en: 'Microorganism' } },
                                { id: 'pathogen', name: { ka: 'პათოგენი', en: 'Pathogen' } },
                                { id: 'phage-therapy', name: { ka: 'ფაგოთერაპია', en: 'Phage therapy' } },
                                { id: 'fermentation', name: { ka: 'ფერმენტაცია', en: 'Fermentation' } },
                                { id: 'microbiome', name: { ka: 'მიკრობიომი', en: 'Microbiome' } },
                            ]
                        },
                        {
                            id: 'mycology',
                            name: { ka: '🍄 მიკოლოგია', en: '🍄 Mycology' },
                            keywords: [
                                { id: 'lichen-myco', name: { ka: 'ლიქენი', en: 'Lichen' } },
                                { id: 'mycorrhiza-myco', name: { ka: 'მიკორიზა', en: 'Mycorrhiza' } },
                                { id: 'mycelium', name: { ka: 'მიცელიუმი', en: 'Mycelium' } },
                                { id: 'mold', name: { ka: 'ობი', en: 'Mold' } },
                                { id: 'yeast', name: { ka: 'საფუარი', en: 'Yeast' } },
                                { id: 'mushroom', name: { ka: 'სოკო', en: 'Mushroom' } },
                                { id: 'toxic-mushrooms', name: { ka: 'ტოქსიკური სოკოები', en: 'Toxic mushrooms' } },
                                { id: 'cap-mushroom', name: { ka: 'ქუდიანი სოკო', en: 'Cap mushroom' } },
                                { id: 'hypha', name: { ka: 'ჰიფი', en: 'Hypha' } },
                                { id: 'microbiology-myco', name: { ka: 'მიკრობიოლოგია', en: 'Microbiology' } },
                            ]
                        },
                        {
                            id: 'parasitology',
                            name: { ka: '🪱 პარაზიტოლოგია', en: '🪱 Parasitology' },
                            keywords: [
                                { id: 'vector', name: { ka: 'ვექტორი', en: 'Vector' } },
                                { id: 'endoparasite', name: { ka: 'ენდოპარაზიტი', en: 'Endoparasite' } },
                                { id: 'ectoparasite', name: { ka: 'ექტოპარაზიტი', en: 'Ectoparasite' } },
                                { id: 'tapeworms', name: { ka: 'ლენტიჭიები', en: 'Tapeworms' } },
                                { id: 'host', name: { ka: 'მასპინძელი', en: 'Host' } },
                                { id: 'parasite', name: { ka: 'პარაზიტი', en: 'Parasite' } },
                                { id: 'plasmodium', name: { ka: 'პლაზმოდიუმი', en: 'Plasmodium' } },
                                { id: 'toxoplasma', name: { ka: 'ტოქსოპლაზმა', en: 'Toxoplasma' } },
                                { id: 'intermediate-host', name: { ka: 'შუალედური მასპინძელი', en: 'Intermediate host' } },
                                { id: 'trichinella', name: { ka: 'ტრიქინელა', en: 'Trichinella' } },
                            ]
                        },
                        {
                            id: 'protistology',
                            name: { ka: '💧 პროტისტოლოგია', en: '💧 Protistology' },
                            keywords: [
                                { id: 'amoeba', name: { ka: 'ამება', en: 'Amoeba' } },
                                { id: 'diatom', name: { ka: 'დიატომეა', en: 'Diatom' } },
                                { id: 'dinoflagellate', name: { ka: 'დინოფლაგელატი', en: 'Dinoflagellate' } },
                                { id: 'euglena', name: { ka: 'ევგლენა', en: 'Euglena' } },
                                { id: 'paramecium', name: { ka: 'ინფუზორია-ქუსლანა', en: 'Paramecium' } },
                                { id: 'plankton', name: { ka: 'პლანქტონი', en: 'Plankton' } },
                                { id: 'protists', name: { ka: 'პროტისტები', en: 'Protists' } },
                                { id: 'protozoa', name: { ka: 'უმარტივესები', en: 'Protozoa' } },
                            ]
                        },
                        {
                            id: 'paleobiology',
                            name: { ka: '🦴 პალეობიოლოგია', en: '🦴 Paleobiology' },
                            keywords: [
                                { id: 'petrification', name: { ka: 'გაქვავება', en: 'Petrification' } },
                                { id: 'extinction', name: { ka: 'გადაშენება', en: 'Extinction' } },
                                { id: 'dinosaur', name: { ka: 'დინოზავრი', en: 'Dinosaur' } },
                                { id: 'cenozoic-era', name: { ka: 'კაინოზოური ერა', en: 'Cenozoic era' } },
                                { id: 'mammoth', name: { ka: 'მამონტი', en: 'Mammoth' } },
                                { id: 'mass-extinction', name: { ka: 'მასობრივი გადაშენება', en: 'Mass extinction' } },
                                { id: 'mesozoic-era', name: { ka: 'მეზოზოური ერა', en: 'Mesozoic era' } },
                                { id: 'fossil-organism', name: { ka: 'ნამარხი ორგანიზმი', en: 'Fossil organism' } },
                                { id: 'paleozoic-era', name: { ka: 'პალეოზოური ერა', en: 'Paleozoic era' } },
                                { id: 'trilobite', name: { ka: 'ტრილობიტი', en: 'Trilobite' } },
                                { id: 'paleontology', name: { ka: 'პალეონტოლოგია', en: 'Paleontology' } },
                            ]
                        },
                    ]
                },
                {
                    id: 'ecology-and-behavior',
                    name: { ka: '🌳 ეკოლოგია და ქცევა', en: '🌳 Ecology and Behavior' },
                    subSections: [
                        {
                            id: 'population-and-community-ecology',
                            name: { ka: '👥 პოპულაციური და საზოგადოების ეკოლოგია', en: '👥 Population and Community Ecology' },
                            keywords: [
                                { id: 'allopatry', name: { ka: 'ალოპატრია', en: 'Allopatry' } },
                                { id: 'range', name: { ka: 'არეალი', en: 'Range' } },
                                { id: 'ecological-niche', name: { ka: 'ეკოლოგიური ნიშა', en: 'Ecological niche' } },
                                { id: 'community', name: { ka: 'თემი', en: 'Community' } },
                                { id: 'competition', name: { ka: 'კონკურენცია', en: 'Competition' } },
                                { id: 'predation', name: { ka: 'მტაცებლობა', en: 'Predation' } },
                                { id: 'population-eco', name: { ka: 'პოპულაცია', en: 'Population' } },
                                { id: 'keystone-species', name: { ka: 'საკვანძო სახეობა (keystone species)', en: 'Keystone species' } },
                                { id: 'symbiosis', name: { ka: 'სიმბიოზი (მუტუალიზმი, კომენსალიზმი, პარაზიტიზმი)', en: 'Symbiosis (mutualism, commensalism, parasitism)' } },
                                { id: 'sympatry', name: { ka: 'სინპატრია', en: 'Sympatry' } },
                                { id: 'ecogenetics', name: { ka: 'ეკოგენეტიკა', en: 'Ecogenetics' } },
                            ]
                        },
                        {
                            id: 'ecosystem-ecology',
                            name: { ka: '♻️ ეკოსისტემების ეკოლოგია', en: '♻️ Ecosystem Ecology' },
                            keywords: [
                                { id: 'biome', name: { ka: 'ბიომი', en: 'Biome' } },
                                { id: 'ecosystem', name: { ka: 'ეკოსისტემა', en: 'Ecosystem' } },
                                { id: 'energy-pyramid', name: { ka: 'ენერგიის პირამიდა', en: 'Energy pyramid' } },
                                { id: 'food-chain', name: { ka: 'კვებითი ჯაჭვი', en: 'Food chain' } },
                                { id: 'food-web', name: { ka: 'კვებითი ქსელი', en: 'Food web' } },
                                { id: 'consumer', name: { ka: 'კონსუმენტი', en: 'Consumer' } },
                                { id: 'biogeochemical-cycle', name: { ka: 'ნივთიერებათა წრებრუნვა (ნახშირბადი, აზოტი, ფოსფორი, წყალი)', en: 'Biogeochemical cycle (carbon, nitrogen, phosphorus, water)' } },
                                { id: 'producer', name: { ka: 'პროდუცენტი', en: 'Producer' } },
                                { id: 'decomposer', name: { ka: 'რედუცენტი', en: 'Decomposer' } },
                                { id: 'trophic-level', name: { ka: 'ტროფიკული დონე', en: 'Trophic level' } },
                                { id: 'habitat', name: { ka: 'ჰაბიტატი', en: 'Habitat' } },
                                { id: 'biodiversity-eco', name: { ka: 'ბიომრავალფეროვნება', en: 'Biodiversity' } },
                            ]
                        },
                        {
                            id: 'biogeography',
                            name: { ka: '🗺️ ბიოგეოგრაფია', en: '🗺️ Biogeography' },
                            keywords: [
                                { id: 'biogeographical-zones', name: { ka: 'ბიოგეოგრაფიული ზონები', en: 'Biogeographical zones' } },
                                { id: 'endemic-species', name: { ka: 'ენდემური სახეობა', en: 'Endemic species' } },
                                { id: 'invasive-species', name: { ka: 'ინვაზიური სახეობა', en: 'Invasive species' } },
                                { id: 'climatic-zones', name: { ka: 'კლიმატური ზონები', en: 'Climatic zones' } },
                                { id: 'continental-drift', name: { ka: 'კონტინენტური დრეიფი', en: 'Continental drift' } },
                                { id: 'cosmopolitan-species', name: { ka: 'კოსმოპოლიტი სახეობა', en: 'Cosmopolitan species' } },
                                { id: 'species-distribution', name: { ka: 'სახეობათა გავრცელება', en: 'Species distribution' } },
                                { id: 'geology-bio', name: { ka: 'გეოლოგია', en: 'Geology' } },
                            ]
                        },
                        {
                            id: 'conservation-biology',
                            name: { ka: '🌿 კონსერვაციული ბიოლოგია', en: '🌿 Conservation Biology' },
                            keywords: [
                                { id: 'biodiversity-con', name: { ka: 'ბიომრავალფეროვნება', en: 'Biodiversity' } },
                                { id: 'endangered-species', name: { ka: 'გადაშენების პირას მყოფი სახეობა', en: 'Endangered species' } },
                                { id: 'pollution', name: { ka: 'დაბინძურება', en: 'Pollution' } },
                                { id: 'protected-area', name: { ka: 'დაცული ტერიტორია (ნაკრძალი, ეროვნული პარკი)', en: 'Protected area (reserve, national park)' } },
                                { id: 'climate-change', name: { ka: 'კლიმატის ცვლილება', en: 'Climate change' } },
                                { id: 'sustainable-development', name: { ka: 'მდგრადი განვითარება', en: 'Sustainable development' } },
                                { id: 'fragmentation', name: { ka: 'ფრაგმენტაცია', en: 'Fragmentation' } },
                                { id: 'red-book', name: { ka: '„წითელიწიგნი“', en: '"Red Book"' } },
                                { id: 'habitat-degradation', name: { ka: 'ჰაბიტატის დეგრადაცია', en: 'Habitat degradation' } },
                                { id: 'nature-conservation', name: { ka: 'ბუნების დაცვა', en: 'Nature conservation' } },
                            ]
                        },
                        {
                            id: 'ethology',
                            name: { ka: '🐾 ეთოლოგია (ცხოველთა ქცევა)', en: '🐾 Ethology (Animal Behavior)' },
                            keywords: [
                                { id: 'aggression', name: { ka: 'აგრესია', en: 'Aggression' } },
                                { id: 'altruism', name: { ka: 'ალტრუიზმი', en: 'Altruism' } },
                                { id: 'learning', name: { ka: 'დასწავლა', en: 'Learning' } },
                                { id: 'imprinting', name: { ka: 'იმპრინტინგი', en: 'Imprinting' } },
                                { id: 'instinct', name: { ka: 'ინსტინქტი', en: 'Instinct' } },
                                { id: 'communication', name: { ka: 'კომუნიკაცია', en: 'Communication' } },
                                { id: 'migration', name: { ka: 'მიგრაცია', en: 'Migration' } },
                                { id: 'conditioned-reflex', name: { ka: 'პირობითი რეფლექსი', en: 'Conditioned reflex' } },
                                { id: 'signals', name: { ka: 'სიგნალები', en: 'Signals' } },
                                { id: 'social-behavior', name: { ka: 'სოციალური ქცევა', en: 'Social behavior' } },
                                { id: 'territoriality', name: { ka: 'ტერიტორიულობა', en: 'Territoriality' } },
                                { id: 'behavior', name: { ka: 'ქცევა', en: 'Behavior' } },
                                { id: 'animal-psychology', name: { ka: 'ცხოველთა ფსიქოლოგია', en: 'Animal psychology' } },
                            ]
                        },
                        {
                            id: 'urban-ecology',
                            name: { ka: '🏙️ ურბანული ეკოლოგია', en: '🏙️ Urban Ecology' },
                            keywords: [
                                { id: 'anthropogenic-factor', name: { ka: 'ანთროპოგენური ფაქტორი', en: 'Anthropogenic factor' } },
                                { id: 'synanthropic-species', name: { ka: 'სინანტროპული სახეობა', en: 'Synanthropic species' } },
                                { id: 'urban-heat-island', name: { ka: 'სითბური კუნძული', en: 'Urban heat island' } },
                                { id: 'urban-ecosystem', name: { ka: 'ურბანული ეკოსისტემა', en: 'Urban ecosystem' } },
                                { id: 'urban-flora-fauna', name: { ka: 'ქალაქის ფლორა და ფაუნა', en: 'Urban flora and fauna' } },
                                { id: 'ecological-stressor', name: { ka: 'ეკოლოგიური სტრესორი', en: 'Ecological stressor' } },
                                { id: 'urbanization', name: { ka: 'ურბანიზაცია', en: 'Urbanization' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'applied-biology',
                    name: { ka: '⚙️ გამოყენებითი ბიოლოგია', en: '⚙️ Applied Biology' },
                    subSections: [
                        {
                            id: 'medical-biology',
                            name: { ka: '⚕️ სამედიცინო ბიოლოგია', en: '⚕️ Medical Biology' },
                            keywords: [
                                { id: 'genetic-disease', name: { ka: 'გენეტიკური დაავადება', en: 'Genetic disease' } },
                                { id: 'disease', name: { ka: 'დაავადება', en: 'Disease' } },
                                { id: 'diagnostics', name: { ka: 'დიაგნოსტიკა', en: 'Diagnostics' } },
                                { id: 'epidemiology', name: { ka: 'ეპიდემიოლოგია', en: 'Epidemiology' } },
                                { id: 'vaccination', name: { ka: 'ვაქცინაცია', en: 'Vaccination' } },
                                { id: 'therapy', name: { ka: 'თერაპია', en: 'Therapy' } },
                                { id: 'infection', name: { ka: 'ინფექცია', en: 'Infection' } },
                                { id: 'oncology', name: { ka: 'ონკოლოგია', en: 'Oncology' } },
                                { id: 'pathology', name: { ka: 'პათოლოგია', en: 'Pathology' } },
                                { id: 'medical-genetics', name: { ka: 'სამედიცინო გენეტიკა', en: 'Medical genetics' } },
                            ]
                        },
                        {
                            id: 'biotechnology-bioengineering',
                            name: { ka: '💡 ბიოტექნოლოგია და ბიოინჟინერია', en: '💡 Biotechnology and Bioengineering' },
                            keywords: [
                                { id: 'biopharmaceuticals', name: { ka: 'ბიოფარმაცევტული პრეპარატები', en: 'Biopharmaceuticals' } },
                                { id: 'bioremediation', name: { ka: 'ბიორემედიაცია', en: 'Bioremediation' } },
                                { id: 'biofuel', name: { ka: 'ბიოსაწვავი', en: 'Biofuel' } },
                                { id: 'biosensor', name: { ka: 'ბიოსენსორი', en: 'Biosensor' } },
                                { id: 'gmo', name: { ka: 'გენმოდიფიცირებული ორგანიზმი (გმო)', en: 'Genetically modified organism (GMO)' } },
                                { id: 'industrial-fermentation', name: { ka: 'ინდუსტრიული ფერმენტაცია', en: 'Industrial fermentation' } },
                                { id: 'cloning', name: { ka: 'კლონირება', en: 'Cloning' } },
                                { id: 'synthetic-biology', name: { ka: 'სინთეზური ბიოლოგია (ხელოვნური გენი, ბიოაგური)', en: 'Synthetic biology (artificial gene, bio-brick)' } },
                                { id: 'tissue-engineering', name: { ka: 'ქსოვილური ინჟინერია', en: 'Tissue engineering' } },
                                { id: 'bioinformatics-biotech', name: { ka: 'ბიოინფორმატიკა', en: 'Bioinformatics' } },
                            ]
                        },
                        {
                            id: 'agricultural-biology',
                            name: { ka: '🌾 სოფლის მეურნეობის ბიოლოგია (აგრობიოლოგია)', en: '🌾 Agricultural Biology (Agrobiology)' },
                            keywords: [
                                { id: 'agroecosystem', name: { ka: 'აგროეკოსისტემა', en: 'Agroecosystem' } },
                                { id: 'agrobiotechnology', name: { ka: 'აგრობიოტექნოლოგია', en: 'Agrobiotechnology' } },
                                { id: 'plant-cultivation', name: { ka: 'მემცენარეობა', en: 'Plant cultivation' } },
                                { id: 'animal-husbandry', name: { ka: 'მეცხოველეობა', en: 'Animal husbandry' } },
                                { id: 'soil-science', name: { ka: 'ნიადაგმცოდნეობა', en: 'Soil science' } },
                                { id: 'pesticide', name: { ka: 'პესტიციდი', en: 'Pesticide' } },
                                { id: 'fertilizer', name: { ka: 'სასუქი', en: 'Fertilizer' } },
                                { id: 'selection', name: { ka: 'სელექცია', en: 'Selection' } },
                                { id: 'hybridization', name: { ka: 'ჰიბრიდიზაცია', en: 'Hybridization' } },
                                { id: 'agrochemistry', name: { ka: 'აგროქიმია', en: 'Agrochemistry' } },
                            ]
                        },
                        {
                            id: 'forensic-biology',
                            name: { ka: '🕵️ სასამართლო ბიოლოგია', en: '🕵️ Forensic Biology' },
                            keywords: [
                                { id: 'biological-sample', name: { ka: 'ბიოლოგიური ნიმუში', en: 'Biological sample' } },
                                { id: 'genetic-identification', name: { ka: 'გენეტიკური იდენტიფიკაცია', en: 'Genetic identification' } },
                                { id: 'dna-fingerprinting', name: { ka: 'დნმ-ის ანაბეჭდი', en: 'DNA fingerprinting' } },
                                { id: 'forensic-medical-examination', name: { ka: 'სასამართლო-სამედიცინო ექსპერტიზა', en: 'Forensic medical examination' } },
                                { id: 'bloodstain-analysis', name: { ka: 'სისხლის კვალის ანალიზი', en: 'Bloodstain analysis' } },
                                { id: 'bioengineering-forensic', name: { ka: 'ბიოინჟინერია', en: 'Bioengineering' } },
                            ]
                        },
                        {
                            id: 'pharmaceutical-biology',
                            name: { ka: '💊 ფარმაცევტული ბიოლოგია', en: '💊 Pharmaceutical Biology' },
                            keywords: [
                                { id: 'bioactive-molecules', name: { ka: 'ბიოაქტიური მოლეკულები', en: 'Bioactive molecules' } },
                                { id: 'natural-compounds', name: { ka: 'ბუნებრივი ნაერთები', en: 'Natural compounds' } },
                                { id: 'medicinal-plants', name: { ka: 'სამკურნალო მცენარეები', en: 'Medicinal plants' } },
                                { id: 'toxicology', name: { ka: 'ტოქსიკოლოგია', en: 'Toxicology' } },
                                { id: 'pharmacology', name: { ka: 'ფარმაკოლოგია', en: 'Pharmacology' } },
                                { id: 'phytotherapy', name: { ka: 'ფიტოთერაპია', en: 'Phytotherapy' } },
                                { id: 'drug-discovery', name: { ka: 'წამლის აღმოჩენა', en: 'Drug discovery' } },
                                { id: 'pharmacogenetics', name: { ka: 'ფარმაკოგენეტიკა', en: 'Pharmacogenetics' } },
                            ]
                        },
                    ]
                },
            ]
        },
        {
            id: 'earth-sciences',
            name: { ka: '🌍 დედამიწის მეცნიერებები', en: '🌍 Earth Sciences' },
            sections: [
                {
                    id: 'geology',
                    name: { ka: '⛰️ გეოლოგია', en: '⛰️ Geology' },
                    subSections: [
                        {
                            id: 'earth-materials',
                            name: { ka: '💎 დედამიწის მასალები (მინერალოგია, პეტროლოგია)', en: '💎 Earth Materials (Mineralogy, Petrology)' },
                            keywords: [
                                { id: 'sedimentary-rocks', name: { ka: 'დანალექი ქანები (ქვიშაქვა, კირქვა)', en: 'Sedimentary rocks (sandstone, limestone)' } },
                                { id: 'calcite', name: { ka: 'კალციტი', en: 'Calcite' } },
                                { id: 'quartz', name: { ka: 'კვარცი', en: 'Quartz' } },
                                { id: 'crystal', name: { ka: 'კრისტალი', en: 'Crystal' } },
                                { id: 'lava', name: { ka: 'ლავა', en: 'Lava' } },
                                { id: 'magma', name: { ka: 'მაგმა', en: 'Magma' } },
                                { id: 'igneous-rocks', name: { ka: 'მაგმური ქანები (გრანიტი, ბაზალტი)', en: 'Igneous rocks (granite, basalt)' } },
                                { id: 'marble', name: { ka: 'მარმარილო', en: 'Marble' } },
                                { id: 'metamorphic-rocks', name: { ka: 'მეტამორფული ქანები', en: 'Metamorphic rocks' } },
                                { id: 'mineral-geo', name: { ka: 'მინერალი', en: 'Mineral' } },
                                { id: 'mineralogy', name: { ka: 'მინერალოგია', en: 'Mineralogy' } },
                                { id: 'feldspar', name: { ka: 'მინდვრის შპატი', en: 'Feldspar' } },
                                { id: 'petrology', name: { ka: 'პეტროლოგია', en: 'Petrology' } },
                                { id: 'hardness-scale', name: { ka: 'სიხისტის სკალა', en: 'Hardness scale' } },
                                { id: 'shale', name: { ka: 'ფიქალი', en: 'Shale' } },
                                { id: 'rock', name: { ka: 'ქანი', en: 'Rock' } },
                                { id: 'gemstone', name: { ka: 'ძვირფასი ქვა', en: 'Gemstone' } },
                                { id: 'geochemistry', name: { ka: 'გეოქიმია', en: 'Geochemistry' } },
                            ]
                        },
                        {
                            id: 'earth-history',
                            name: { ka: '🦕 დედამიწის ისტორია (სტრატიგრაფია, პალეონტოლოგია)', en: '🦕 Earth History (Stratigraphy, Paleontology)' },
                            keywords: [
                                { id: 'geologic-time-scale', name: { ka: 'გეოლოგიური დროის სკალა (ეონი, ერა, პერიოდი, ეპოქა)', en: 'Geologic time scale (eon, era, period, epoch)' } },
                                { id: 'dating-methods', name: { ka: 'დათარიღების მეთოდები (რადიოკარბონული)', en: 'Dating methods (radiocarbon)' } },
                                { id: 'cambrian-explosion', name: { ka: 'კამბრიული აფეთქება', en: 'Cambrian explosion' } },
                                { id: 'continental-drift-geo', name: { ka: 'კონტინენტური დრეიფი', en: 'Continental drift' } },
                                { id: 'fossil-geo', name: { ka: 'ნამარხი (ფოსილი)', en: 'Fossil' } },
                                { id: 'paleontology-geo', name: { ka: 'პალეონტოლოგია', en: 'Paleontology' } },
                                { id: 'pangaea', name: { ka: 'პანგეა', en: 'Pangaea' } },
                                { id: 'stratigraphy', name: { ka: 'სტრატიგრაფია', en: 'Stratigraphy' } },
                                { id: 'layer', name: { ka: 'შრე', en: 'Layer' } },
                                { id: 'extinction-geo', name: { ka: 'გადაშენება', en: 'Extinction' } },
                                { id: 'geochronology', name: { ka: 'გეოქრონოლოგია', en: 'Geochronology' } },
                            ]
                        },
                        {
                            id: 'earth-structure-processes',
                            name: { ka: '🌎 დედამიწის სტრუქტურა და პროცესები (სტრუქტურული გეოლოგია, ფილების ტექტონიკა)', en: '🌎 Earth\'s Structure and Processes (Structural Geology, Plate Tectonics)' },
                            keywords: [
                                { id: 'asthenosphere', name: { ka: 'ასთენოსფერო', en: 'Asthenosphere' } },
                                { id: 'core', name: { ka: 'ბირთვი', en: 'Core' } },
                                { id: 'weathering', name: { ka: 'გამოფიტვა', en: 'Weathering' } },
                                { id: 'sediment-deposition', name: { ka: 'დანალექების დაგროვება', en: 'Sediment deposition' } },
                                { id: 'earths-crust', name: { ka: 'დედამიწის ქერქი', en: 'Earth\'s crust' } },
                                { id: 'erosion', name: { ka: 'ეროზია', en: 'Erosion' } },
                                { id: 'lithosphere', name: { ka: 'ლითოსფერო', en: 'Lithosphere' } },
                                { id: 'mantle', name: { ka: 'მანტია', en: 'Mantle' } },
                                { id: 'fold', name: { ka: 'ნაოჭი', en: 'Fold' } },
                                { id: 'orogeny', name: { ka: 'ოროგენეზისი (მთათა წარმოშობა)', en: 'Orogeny (mountain formation)' } },
                                { id: 'rift', name: { ka: 'რიფტი', en: 'Rift' } },
                                { id: 'fault', name: { ka: 'რღვევა (ნაწევი, ნაძრავი)', en: 'Fault (normal, reverse)' } },
                                { id: 'spreading', name: { ka: 'სპრედინგი', en: 'Spreading' } },
                                { id: 'subduction', name: { ka: 'სუბდუქცია', en: 'Subduction' } },
                                { id: 'tectonic-plate', name: { ka: 'ტექტონიკური ფილა', en: 'Tectonic plate' } },
                                { id: 'seismology', name: { ka: 'სეისმოლოგია', en: 'Seismology' } },
                            ]
                        },
                        {
                            id: 'geological-hazards',
                            name: { ka: '🌋 გეოლოგიური საფრთხეები (სეისმოლოგია, ვულკანოლოგია)', en: '🌋 Geological Hazards (Seismology, Volcanology)' },
                            keywords: [
                                { id: 'eruption', name: { ka: 'ამოფრქვევა', en: 'Eruption' } },
                                { id: 'volcano', name: { ka: 'ვულკანი', en: 'Volcano' } },
                                { id: 'volcanology', name: { ka: 'ვულკანოლოგია', en: 'Volcanology' } },
                                { id: 'volcanic-ash', name: { ka: 'ვულკანური ფერფლი', en: 'Volcanic ash' } },
                                { id: 'geyser', name: { ka: 'გეიზერი', en: 'Geyser' } },
                                { id: 'epicenter', name: { ka: 'ეპიცენტრი', en: 'Epicenter' } },
                                { id: 'crater', name: { ka: 'კრატერი', en: 'Crater' } },
                                { id: 'landslide', name: { ka: 'მეწყერი', en: 'Landslide' } },
                                { id: 'earthquake', name: { ka: 'მიწისძვრა', en: 'Earthquake' } },
                                { id: 'richter-scale', name: { ka: 'რიხტერის სკალა', en: 'Richter scale' } },
                                { id: 'seismology-hazards', name: { ka: 'სეისმოლოგია', en: 'Seismology' } },
                                { id: 'seismic-wave', name: { ka: 'სეისმური ტალღა', en: 'Seismic wave' } },
                                { id: 'tsunami', name: { ka: 'ცუნამი', en: 'Tsunami' } },
                                { id: 'hypocenter', name: { ka: 'ჰიპოცენტრი', en: 'Hypocenter' } },
                                { id: 'debris-flow', name: { ka: 'ღვარცოფი', en: 'Debris flow' } },
                            ]
                        },
                        {
                            id: 'applied-geology',
                            name: { ka: '🛢️ გამოყენებითი გეოლოგია (სასარგებლო წიაღისეული, საინჟინრო გეოლოგია, ჰიდროგეოლოგია)', en: '🛢️ Applied Geology (Mineral Resources, Engineering Geology, Hydrogeology)' },
                            keywords: [
                                { id: 'artesian-well', name: { ka: 'არტეზიული ჭა', en: 'Artesian well' } },
                                { id: 'natural-gas', name: { ka: 'ბუნებრივი აირი', en: 'Natural gas' } },
                                { id: 'soil-mechanics', name: { ka: 'გრუნტის მექანიკა', en: 'Soil mechanics' } },
                                { id: 'groundwater', name: { ka: 'გრუნტის წყლები', en: 'Groundwater' } },
                                { id: 'quarry', name: { ka: 'კარიერი', en: 'Quarry' } },
                                { id: 'dam', name: { ka: 'კაშხალი', en: 'Dam' } },
                                { id: 'ore', name: { ka: 'მადანი', en: 'Ore' } },
                                { id: 'petroleum', name: { ka: 'ნავთობი', en: 'Petroleum' } },
                                { id: 'engineering-geology', name: { ka: 'საინჟინრო გეოლოგია', en: 'Engineering geology' } },
                                { id: 'mineral-resources', name: { ka: 'სასარგებლო წიაღისეული', en: 'Mineral resources' } },
                                { id: 'coal', name: { ka: 'ქვანახშირი', en: 'Coal' } },
                                { id: 'mine', name: { ka: 'შახტი', en: 'Mine' } },
                                { id: 'aquifer', name: { ka: 'წყალშემცველი ჰორიზონტი', en: 'Aquifer' } },
                                { id: 'hydrogeology', name: { ka: 'ჰიდროგეოლოგია', en: 'Hydrogeology' } },
                            ]
                        },
                        {
                            id: 'speleology',
                            name: { ka: '🦇 სპელეოლოგია (მღვიმეების კვლევა)', en: '🦇 Speleology (Cave Research)' },
                            keywords: [
                                { id: 'karst-sinkhole', name: { ka: 'კარსტული ძაბრი', en: 'Karst sinkhole' } },
                                { id: 'cave', name: { ka: 'მღვიმე', en: 'Cave' } },
                                { id: 'cave-fauna', name: { ka: 'მღვიმური ფაუნა', en: 'Cave fauna' } },
                                { id: 'underground-river', name: { ka: 'მიწისქვეშა მდინარე', en: 'Underground river' } },
                                { id: 'siphon', name: { ka: 'სიფონი', en: 'Siphon' } },
                                { id: 'speleologist', name: { ka: 'სპელეოლოგი', en: 'Speleologist' } },
                                { id: 'stalactite', name: { ka: 'სტალაქტიტი', en: 'Stalactite' } },
                                { id: 'stalagmite', name: { ka: 'სტალაგმიტი', en: 'Stalagmite' } },
                                { id: 'stalagnate', name: { ka: 'სტალაგნატი', en: 'Stalagnate' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'geography',
                    name: { ka: '🗺️ გეოგრაფია', en: '🗺️ Geography' },
                    subSections: [
                        {
                            id: 'physical-geography',
                            name: { ka: '🏞️ ფიზიკური გეოგრაფია (გეომორფოლოგია, ბიოგეოგრაფია)', en: '🏞️ Physical Geography (Geomorphology, Biogeography)' },
                            keywords: [
                                { id: 'natural-zone', name: { ka: 'ბუნებრივი ზონა', en: 'Natural zone' } },
                                { id: 'geomorphology', name: { ka: 'გეომორფოლოგია', en: 'Geomorphology' } },
                                { id: 'lowland', name: { ka: 'დაბლობი', en: 'Lowland' } },
                                { id: 'dune', name: { ka: 'დიუნა', en: 'Dune' } },
                                { id: 'equator', name: { ka: 'ეკვატორი', en: 'Equator' } },
                                { id: 'plain', name: { ka: 'ვაკე', en: 'Plain' } },
                                { id: 'highland', name: { ka: 'ზეგანი', en: 'Highland' } },
                                { id: 'canyon', name: { ka: 'კანიონი', en: 'Canyon' } },
                                { id: 'landscape', name: { ka: 'ლანდშაფტი', en: 'Landscape' } },
                                { id: 'mountain', name: { ka: 'მთა', en: 'Mountain' } },
                                { id: 'river', name: { ka: 'მდინარე', en: 'River' } },
                                { id: 'pole', name: { ka: 'პოლუსი', en: 'Pole' } },
                                { id: 'relief', name: { ka: 'რელიეფი', en: 'Relief' } },
                                { id: 'coastline', name: { ka: 'სანაპირო ზოლი', en: 'Coastline' } },
                                { id: 'lake', name: { ka: 'ტბა', en: 'Lake' } },
                                { id: 'desert', name: { ka: 'უდაბნო', en: 'Desert' } },
                                { id: 'waterfall', name: { ka: 'ჩანჩქერი', en: 'Waterfall' } },
                                { id: 'valley', name: { ka: 'ხეობა', en: 'Valley' } },
                                { id: 'volcanic-plateau', name: { ka: 'ვულკანური პლატო', en: 'Volcanic plateau' } },
                            ]
                        },
                        {
                            id: 'socio-economic-geography',
                            name: { ka: '🏙️ სოციალურ-ეკონომიკური გეოგრაფია (ადამიანის გეოგრაფია)', en: '🏙️ Socio-Economic Geography (Human Geography)' },
                            keywords: [
                                { id: 'demography', name: { ka: 'დემოგრაფია', en: 'Demography' } },
                                { id: 'economy', name: { ka: 'ეკონომიკა', en: 'Economy' } },
                                { id: 'language', name: { ka: 'ენა', en: 'Language' } },
                                { id: 'culture', name: { ka: 'კულტურა', en: 'Culture' } },
                                { id: 'migration-geo', name: { ka: 'მიგრაცია', en: 'Migration' } },
                                { id: 'population-geo', name: { ka: 'მოსახლეობა', en: 'Population' } },
                                { id: 'industry', name: { ka: 'მრეწველობა', en: 'Industry' } },
                                { id: 'political-map', name: { ka: 'პოლიტიკური რუკა', en: 'Political map' } },
                                { id: 'religion', name: { ka: 'რელიგია', en: 'Religion' } },
                                { id: 'border', name: { ka: 'საზღვარი', en: 'Border' } },
                                { id: 'state', name: { ka: 'სახელმწიფო', en: 'State' } },
                                { id: 'village', name: { ka: 'სოფელი', en: 'Village' } },
                                { id: 'agriculture', name: { ka: 'სოფლის მეურნეობა', en: 'Agriculture' } },
                                { id: 'transport', name: { ka: 'ტრანსპორტი', en: 'Transport' } },
                                { id: 'tourism', name: { ka: 'ტურიზმი', en: 'Tourism' } },
                                { id: 'urbanization-geo', name: { ka: 'ურბანიზაცია', en: 'Urbanization' } },
                                { id: 'city', name: { ka: 'ქალაქი', en: 'City' } },
                            ]
                        },
                        {
                            id: 'cartography-gis',
                            name: { ka: '📍 კარტოგრაფია და გეოინფორმაციული სისტემები (GIS)', en: '📍 Cartography and Geographic Information Systems (GIS)' },
                            keywords: [
                                { id: 'gis', name: { ka: 'GIS', en: 'GIS' } },
                                { id: 'gps', name: { ka: 'GPS', en: 'GPS' } },
                                { id: 'atlas', name: { ka: 'ატლასი', en: 'Atlas' } },
                                { id: 'latitude', name: { ka: 'განედი', en: 'Latitude' } },
                                { id: 'longitude', name: { ka: 'გრძედი', en: 'Longitude' } },
                                { id: 'globe', name: { ka: 'გლობუსი', en: 'Globe' } },
                                { id: 'remote-sensing', name: { ka: 'დისტანციური ზონდირება', en: 'Remote sensing' } },
                                { id: 'cartographic-projection', name: { ka: 'კარტოგრაფიული პროექცია', en: 'Cartographic projection' } },
                                { id: 'coordinates', name: { ka: 'კოორდინატები', en: 'Coordinates' } },
                                { id: 'scale', name: { ka: 'მასშტაბი', en: 'Scale' } },
                                { id: 'conventional-sign', name: { ka: 'პირობითი ნიშანი', en: 'Conventional sign' } },
                                { id: 'map', name: { ka: 'რუკა', en: 'Map' } },
                                { id: 'satellite-image', name: { ka: 'სატელიტური სურათი', en: 'Satellite image' } },
                                { id: 'topographic-map', name: { ka: 'ტოპოგრაფიული რუკა', en: 'Topographic map' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'atmospheric-sciences',
                    name: { ka: '☁️ ატმოსფერული მეცნიერებები', en: '☁️ Atmospheric Sciences' },
                    subSections: [
                        {
                            id: 'meteorology',
                            name: { ka: '🌬️ მეტეოროლოგია (ამინდის შესწავლა და პროგნოზირება)', en: '🌬️ Meteorology (Weather Study and Forecasting)' },
                            keywords: [
                                { id: 'weather', name: { ka: 'ამინდი', en: 'Weather' } },
                                { id: 'weather-forecast', name: { ka: 'ამინდის პროგნოზი', en: 'Weather forecast' } },
                                { id: 'anticyclone', name: { ka: 'ანტიციკლონი', en: 'Anticyclone' } },
                                { id: 'atmosphere-composition', name: { ka: 'ატმოსფერო (ტროპოსფერო, სტრატოსფერო)', en: 'Atmosphere (troposphere, stratosphere)' } },
                                { id: 'atmospheric-pressure', name: { ka: 'ატმოსფერული წნევა', en: 'Atmospheric pressure' } },
                                { id: 'barometer', name: { ka: 'ბარომეტრი', en: 'Barometer' } },
                                { id: 'meteorological-station', name: { ka: 'მეტეოროლოგიური სადგური', en: 'Meteorological station' } },
                                { id: 'precipitation', name: { ka: 'ნალექი (წვიმა, თოვლი, სეტყვა)', en: 'Precipitation (rain, snow, hail)' } },
                                { id: 'temperature', name: { ka: 'ტემპერატურა', en: 'Temperature' } },
                                { id: 'humidity', name: { ka: 'ტენიანობა', en: 'Humidity' } },
                                { id: 'thermometer', name: { ka: 'თერმომეტრი', en: 'Thermometer' } },
                                { id: 'cyclone', name: { ka: 'ციკლონი', en: 'Cyclone' } },
                                { id: 'wind', name: { ka: 'ქარი', en: 'Wind' } },
                                { id: 'cloud', name: { ka: 'ღრუბელი', en: 'Cloud' } },
                                { id: 'climate-change-meteo', name: { ka: 'კლიმატური ცვლილება', en: 'Climate change' } },
                            ]
                        },
                        {
                            id: 'climatology-paleoclimatology',
                            name: { ka: '🌡️ კლიმატოლოგია და პალეოკლიმატოლოგია', en: '🌡️ Climatology and Paleoclimatology' },
                            keywords: [
                                { id: 'global-warming', name: { ka: 'გლობალური დათბობა', en: 'Global warming' } },
                                { id: 'el-nino-la-nina', name: { ka: 'ელ-ნინიო/ლა-ნინია', en: 'El Niño/La Niña' } },
                                { id: 'ice-age', name: { ka: 'გამყინვარების პერიოდი', en: 'Ice age' } },
                                { id: 'climate', name: { ka: 'კლიმატი', en: 'Climate' } },
                                { id: 'climatic-zone', name: { ka: 'კლიმატური სარტყელი', en: 'Climatic zone' } },
                                { id: 'monsoon', name: { ka: 'მუსონი', en: 'Monsoon' } },
                                { id: 'paleoclimatology', name: { ka: 'პალეოკლიმატოლოგია', en: 'Paleoclimatology' } },
                                { id: 'trade-wind', name: { ka: 'პასატი', en: 'Trade wind' } },
                                { id: 'greenhouse-effect', name: { ka: 'სათბურის ეფექტი', en: 'Greenhouse effect' } },
                                { id: 'season', name: { ka: 'სეზონი', en: 'Season' } },
                            ]
                        },
                        {
                            id: 'atmospheric-chemistry-air-pollution',
                            name: { ka: '💨 ატმოსფერული ქიმია და ჰაერის დაბინძურება', en: '💨 Atmospheric Chemistry and Air Pollution' },
                            keywords: [
                                { id: 'aerosol', name: { ka: 'აეროზოლი', en: 'Aerosol' } },
                                { id: 'atmospheric-composition', name: { ka: 'ატმოსფეროს შემადგენლობა (აზოტი, ჟანგბადი)', en: 'Atmospheric composition (nitrogen, oxygen)' } },
                                { id: 'acid-rain', name: { ka: 'მჟავა წვიმა', en: 'Acid rain' } },
                                { id: 'carbon-monoxide', name: { ka: 'ნახშირბადის მონოქსიდი', en: 'Carbon monoxide' } },
                                { id: 'ozone-layer', name: { ka: 'ოზონის შრე', en: 'Ozone layer' } },
                                { id: 'greenhouse-gases', name: { ka: 'სათბურის აირები (ნახშირორჟანგი, მეთანი)', en: 'Greenhouse gases (carbon dioxide, methane)' } },
                                { id: 'smog', name: { ka: 'სმოგი', en: 'Smog' } },
                                { id: 'air-pollution', name: { ka: 'ჰაერის დაბინძურება', en: 'Air pollution' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'oceanology-hydrosphere',
                    name: { ka: '🌊 ოკეანოლოგია და ჰიდროსფერო', en: '🌊 Oceanology and Hydrosphere' },
                    subSections: [
                        {
                            id: 'oceanography',
                            name: { ka: '🌊 ოკეანოგრაფია (ფიზიკური, ქიმიური, ბიოლოგიური, გეოლოგიური)', en: '🌊 Oceanography (Physical, Chemical, Biological, Geological)' },
                            keywords: [
                                { id: 'gulf-stream', name: { ka: 'გოლფსტრიმი', en: 'Gulf Stream' } },
                                { id: 'current', name: { ka: 'დინება', en: 'Current' } },
                                { id: 'sea', name: { ka: 'ზღვა', en: 'Sea' } },
                                { id: 'marine-biology', name: { ka: 'ზღვის ბიოლოგია', en: 'Marine biology' } },
                                { id: 'coral-reef', name: { ka: 'მარჯნის რიფი', en: 'Coral reef' } },
                                { id: 'salinity', name: { ka: 'მარილიანობა', en: 'Salinity' } },
                                { id: 'tide', name: { ka: 'მიქცევა და მოქცევა', en: 'Tide' } },
                                { id: 'ocean', name: { ka: 'ოკეანე', en: 'Ocean' } },
                                { id: 'seabed', name: { ka: 'ოკეანის ფსკერი', en: 'Seabed' } },
                                { id: 'oceanography-term', name: { ka: 'ოკეანოგრაფია', en: 'Oceanography' } },
                                { id: 'plankton-ocean', name: { ka: 'პლანქტონი', en: 'Plankton' } },
                                { id: 'wave', name: { ka: 'ტალღა', en: 'Wave' } },
                                { id: 'shelf', name: { ka: 'შელფი', en: 'Shelf' } },
                                { id: 'trench', name: { ka: 'ღრმული', en: 'Trench' } },
                            ]
                        },
                        {
                            id: 'hydrology',
                            name: { ka: '💧 ჰიდროლოგია (ზედაპირული და მიწისქვეშა წყლები)', en: '💧 Hydrology (Surface and Groundwater)' },
                            keywords: [
                                { id: 'groundwater-hydro', name: { ka: 'გრუნტის წყლები', en: 'Groundwater' } },
                                { id: 'surface-runoff', name: { ka: 'ზედაპირული ჩამონადენი', en: 'Surface runoff' } },
                                { id: 'river-basin', name: { ka: 'მდინარის აუზი', en: 'River basin' } },
                                { id: 'watershed', name: { ka: 'წყალგამყოფი', en: 'Watershed' } },
                                { id: 'flood', name: { ka: 'წყალდიდობა', en: 'Flood' } },
                                { id: 'flash-flood', name: { ka: 'წყალმოვარდნა', en: 'Flash flood' } },
                                { id: 'water-cycle', name: { ka: 'წყლის წრებრუნვა', en: 'Water cycle' } },
                                { id: 'spring', name: { ka: 'წყარო', en: 'Spring' } },
                                { id: 'well', name: { ka: 'ჭა', en: 'Well' } },
                                { id: 'hydrology-term', name: { ka: 'ჰიდროლოგია', en: 'Hydrology' } },
                                { id: 'hydrosphere', name: { ka: 'ჰიდროსფერო', en: 'Hydrosphere' } },
                            ]
                        },
                        {
                            id: 'limnology',
                            name: { ka: '🏞️ ლიმნოლოგია (ტბები და მდინარეები)', en: '🏞️ Limnology (Lakes and Rivers)' },
                            keywords: [
                                { id: 'delta', name: { ka: 'დელტა', en: 'Delta' } },
                                { id: 'estuary', name: { ka: 'ესტუარი', en: 'Estuary' } },
                                { id: 'limnology-term', name: { ka: 'ლიმნოლოგია', en: 'Limnology' } },
                                { id: 'river-lim', name: { ka: 'მდინარე', en: 'River' } },
                                { id: 'freshwater', name: { ka: 'მტკნარი წყალი', en: 'Freshwater' } },
                                { id: 'source', name: { ka: 'სათავე', en: 'Source' } },
                                { id: 'lake-lim', name: { ka: 'ტბა', en: 'Lake' } },
                                { id: 'reservoir', name: { ka: 'წყალსაცავი', en: 'Reservoir' } },
                                { id: 'swamp', name: { ka: 'ჭაობი', en: 'Swamp' } },
                                { id: 'estuary-mouth', name: { ka: 'შესართავი', en: 'Estuary' } },
                            ]
                        },
                        {
                            id: 'glaciology',
                            name: { ka: '❄️ გლაციოლოგია (მყინვარები და ყინული)', en: '❄️ Glaciology (Glaciers and Ice)' },
                            keywords: [
                                { id: 'iceberg', name: { ka: 'აისბერგი', en: 'Iceberg' } },
                                { id: 'glaciology-term', name: { ka: 'გლაციოლოგია', en: 'Glaciology' } },
                                { id: 'sea-ice', name: { ka: 'ზღვის ყინული', en: 'Sea ice' } },
                                { id: 'cryosphere', name: { ka: 'კრიოსფერო', en: 'Cryosphere' } },
                                { id: 'permafrost', name: { ka: 'მუდმივი მზრალობა', en: 'Permafrost' } },
                                { id: 'glacier', name: { ka: 'მყინვარი', en: 'Glacier' } },
                                { id: 'moraine', name: { ka: 'მორენა', en: 'Moraine' } },
                                { id: 'firn', name: { ka: 'ფირნი', en: 'Firn' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'soil-science',
                    name: { ka: '🏜️ ნიადაგმცოდნეობა', en: '🏜️ Soil Science' },
                    subSections: [
                        {
                            id: 'soil-formation-classification-resources',
                            name: { ka: '🌳 ნიადაგის ფორმირება, კლასიფიკაცია და რესურსები', en: '🌳 Soil Formation, Classification, and Resources' },
                            keywords: [
                                { id: 'clay', name: { ka: 'თიხა', en: 'Clay' } },
                                { id: 'silt', name: { ka: 'ლამი', en: 'Silt' } },
                                { id: 'acidity-ph', name: { ka: 'მჟავიანობა (pH)', en: 'Acidity (pH)' } },
                                { id: 'fertility', name: { ka: 'ნაყოფიერება', en: 'Fertility' } },
                                { id: 'soil', name: { ka: 'ნიადაგი', en: 'Soil' } },
                                { id: 'soil-erosion', name: { ka: 'ნიადაგის ეროზია', en: 'Soil erosion' } },
                                { id: 'soil-profile', name: { ka: 'ნიადაგის პროფილი', en: 'Soil profile' } },
                                { id: 'soil-types', name: { ka: 'ნიადაგის ტიპები (შავმიწა, წითელმიწა, პოძოლი)', en: 'Soil types (chernozem, red earth, podzol)' } },
                                { id: 'pedology', name: { ka: 'პედოლოგია', en: 'Pedology' } },
                                { id: 'sand', name: { ka: 'ქვიშა', en: 'Sand' } },
                                { id: 'horizon', name: { ka: 'ჰორიზონტი', en: 'Horizon' } },
                                { id: 'humus', name: { ka: 'ჰუმუსი', en: 'Humus' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'environmental-science',
                    name: { ka: '♻️ გარემოსდაცვითი მეცნიერება', en: '♻️ Environmental Science' },
                    subSections: [
                        {
                            id: 'climate-change-science',
                            name: { ka: '🌎 კლიმატის ცვლილების მეცნიერება', en: '🌎 Climate Change Science' },
                            keywords: [
                                { id: 'adaptation-env', name: { ka: 'ადაპტაცია', en: 'Adaptation' } },
                                { id: 'anthropogenic-factor-env', name: { ka: 'ანთროპოგენური ფაქტორი', en: 'Anthropogenic factor' } },
                                { id: 'climate-modeling', name: { ka: 'კლიმატის მოდელირება', en: 'Climate modeling' } },
                                { id: 'climate-change-env', name: { ka: 'კლიმატის ცვლილება', en: 'Climate change' } },
                                { id: 'carbon-footprint', name: { ka: 'ნახშირბადის კვალი', en: 'Carbon footprint' } },
                                { id: 'paris-agreement', name: { ka: 'პარიზის შეთანხმება', en: 'Paris Agreement' } },
                                { id: 'mitigation', name: { ka: 'შერბილება', en: 'Mitigation' } },
                                { id: 'greenhouse-gases-env', name: { ka: 'სათბურის აირები', en: 'Greenhouse gases' } },
                            ]
                        },
                        {
                            id: 'sustainable-management-natural-resources',
                            name: { ka: '🔋 ბუნებრივი რესურსების მდგრადი მართვა', en: '🔋 Sustainable Management of Natural Resources' },
                            keywords: [
                                { id: 'non-renewable-resource', name: { ka: 'არაგანახლებადი რესურსი', en: 'Non-renewable resource' } },
                                { id: 'natural-resource', name: { ka: 'ბუნებრივი რესურსი', en: 'Natural resource' } },
                                { id: 'recycling', name: { ka: 'გადამუშავება', en: 'Recycling' } },
                                { id: 'renewable-resource', name: { ka: 'განახლებადი რესურსი (მზის ენერგია, ქარის ენერგია)', en: 'Renewable resource (solar energy, wind energy)' } },
                                { id: 'conservation', name: { ka: 'კონსერვაცია', en: 'Conservation' } },
                                { id: 'sustainable-development-env', name: { ka: 'მდგრადი განვითარება', en: 'Sustainable development' } },
                                { id: 'resource-saving', name: { ka: 'რესურსების დაზოგვა', en: 'Resource saving' } },
                            ]
                        },
                        {
                            id: 'ecosystem-conservation-restoration',
                            name: { ka: '🌿 ეკოსისტემების კონსერვაცია და აღდგენა', en: '🌿 Ecosystem Conservation and Restoration' },
                            keywords: [
                                { id: 'biodiversity-env', name: { ka: 'ბიომრავალფეროვნება', en: 'Biodiversity' } },
                                { id: 'endangered-species-env', name: { ka: 'გადაშენების პირას მყოფი სახეობა', en: 'Endangered species' } },
                                { id: 'pollution-env', name: { ka: 'დაბინძურება', en: 'Pollution' } },
                                { id: 'protected-area-env', name: { ka: 'დაცული ტერიტორია (ნაკრძალი, ეროვნული პარკი)', en: 'Protected area (reserve, national park)' } },
                                { id: 'climate-change-eco-rest', name: { ka: 'კლიმატის ცვლილება', en: 'Climate change' } },
                                { id: 'sustainable-development-eco-rest', name: { ka: 'მდგრადი განვითარება', en: 'Sustainable development' } },
                                { id: 'fragmentation-env', name: { ka: 'ფრაგმენტაცია', en: 'Fragmentation' } },
                                { id: 'red-book-env', name: { ka: '„წითელიწიგნი“', en: '"Red Book"' } },
                                { id: 'habitat-degradation-env', name: { ka: 'ჰაბიტატის დეგრადაცია', en: 'Habitat degradation' } },
                                { id: 'ecological-restoration', name: { ka: 'ეკოლოგიური აღდგენა', en: 'Ecological restoration' } },
                            ]
                        },
                        {
                            id: 'environmental-pollution-monitoring',
                            name: { ka: '🏭 გარემოს დაბინძურება და მონიტორინგი', en: '🏭 Environmental Pollution and Monitoring' },
                            keywords: [
                                { id: 'eia', name: { ka: 'გარემოზე ზემოქმედების შეფასება (გზშ)', en: 'Environmental impact assessment (EIA)' } },
                                { id: 'pollution-types', name: { ka: 'დაბინძურება (წყლის, ჰაერის, ნიადაგის)', en: 'Pollution (water, air, soil)' } },
                                { id: 'pollutant', name: { ka: 'დამაბინძურებელი', en: 'Pollutant' } },
                                { id: 'monitoring', name: { ka: 'მონიტორინგი', en: 'Monitoring' } },
                                { id: 'waste-management', name: { ka: 'ნარჩენების მართვა', en: 'Waste management' } },
                                { id: 'toxic-substance', name: { ka: 'ტოქსიკური ნივთიერება', en: 'Toxic substance' } },
                                { id: 'eutrophication', name: { ka: 'ეუტროფიკაცია', en: 'Eutrophication' } },
                            ]
                        }
                    ]
                },   
            ]
        },
 {
            id: 'mathematics',
            name: { ka: '🔢 მათემატიკა', en: '🔢 Mathematics' },
            sections: [
                {
                    id: 'algebra-number-theory',
                    name: { ka: '🧮 ალგებრა და რიცხვთა თეორია', en: '🧮 Algebra and Number Theory' },
                    subSections: [
                        {
                            id: 'number-theory',
                            name: { ka: '➕ რიცხვთა თეორია (არითმეტიკა)', en: '➕ Number Theory (Arithmetic)' },
                            keywords: [
                                { id: 'arithmetic-operations', name: { ka: 'არითმეტიკული ოპერაციები', en: 'Arithmetic operations' } },
                                { id: 'divisor', name: { ka: 'გამყოფი', en: 'Divisor' } },
                                { id: 'euclidean-algorithm', name: { ka: 'ევკლიდეს ალგორითმი', en: 'Euclidean algorithm' } },
                                { id: 'sieve-of-eratosthenes', name: { ka: 'ერატოსთენეს საცერი', en: 'Sieve of Eratosthenes' } },
                                { id: 'prime-number', name: { ka: 'მარტივი რიცხვი', en: 'Prime number' } },
                                { id: 'modular-arithmetic', name: { ka: 'მოდულარული არითმეტიკა', en: 'Modular arithmetic' } },
                                { id: 'remainder', name: { ka: 'ნაშთი', en: 'Remainder' } },
                                { id: 'number-types', name: { ka: 'რიცხვი (ნატურალური, მთელი, რაციონალური, ირაციონალური)', en: 'Number (natural, integer, rational, irrational)' } },
                                { id: 'composite-number', name: { ka: 'შედგენილი რიცხვი', en: 'Composite number' } },
                                { id: 'gcd', name: { ka: 'უდიდესი საერთო გამყოფი (უსგ)', en: 'Greatest common divisor (GCD)' } },
                                { id: 'lcm', name: { ka: 'უმცირესი საერთო ჯერადი (უსჯ)', en: 'Least common multiple (LCM)' } },
                                { id: 'fermats-last-theorem', name: { ka: 'ფერმას დიდი თეორემა', en: 'Fermat\'s Last Theorem' } },
                                { id: 'multiple', name: { ka: 'ჯერადი', en: 'Multiple' } },
                                { id: 'number-theory-main', name: { ka: 'რიცხვების თეორია', en: 'Number theory' } },
                            ]
                        },
                        {
                            id: 'linear-algebra',
                            name: { ka: '📐 წრფივი ალგებრა', en: '📐 Linear Algebra' },
                            keywords: [
                                { id: 'basis', name: { ka: 'ბაზისი', en: 'Basis' } },
                                { id: 'dimension', name: { ka: 'განზომილება', en: 'Dimension' } },
                                { id: 'determinant', name: { ka: 'დეტერმინანტი', en: 'Determinant' } },
                                { id: 'vector', name: { ka: 'ვექტორი', en: 'Vector' } },
                                { id: 'vector-space', name: { ka: 'ვექტორული სივრცე', en: 'Vector space' } },
                                { id: 'cramers-rule', name: { ka: 'კრამერის წესი', en: 'Cramer\'s rule' } },
                                { id: 'matrix', name: { ka: 'მატრიცა', en: 'Matrix' } },
                                { id: 'eigenvector', name: { ka: 'საკუთრივი ვექტორი', en: 'Eigenvector' } },
                                { id: 'eigenvalue', name: { ka: 'საკუთრივი მნიშვნელობა', en: 'Eigenvalue' } },
                                { id: 'scalar', name: { ka: 'სკალარი', en: 'Scalar' } },
                                { id: 'transposition', name: { ka: 'ტრანსპონირება', en: 'Transposition' } },
                                { id: 'linear-transformation', name: { ka: 'წრფივი გარდაქმნა', en: 'Linear transformation' } },
                                { id: 'system-of-linear-equations', name: { ka: 'წრფივ განტოლებათა სისტემა', en: 'System of linear equations' } },
                                { id: 'gaussian-elimination', name: { ka: 'გაუსის მეთოდი', en: 'Gaussian elimination' } },
                                { id: 'rank', name: { ka: 'რანგი', en: 'Rank' } },
                            ]
                        },
                        {
                            id: 'abstract-algebra',
                            name: { ka: '🧩 აბსტრაქტული ალგებრა', en: '🧩 Abstract Algebra' },
                            keywords: [
                                { id: 'abelian-group', name: { ka: 'აბელური ჯგუფი', en: 'Abelian group' } },
                                { id: 'field', name: { ka: 'ველი', en: 'Field' } },
                                { id: 'ideal', name: { ka: 'იდეალი', en: 'Ideal' } },
                                { id: 'isomorphism', name: { ka: 'იზომორფიზმი', en: 'Isomorphism' } },
                                { id: 'polynomial', name: { ka: 'პოლინომი', en: 'Polynomial' } },
                                { id: 'ring', name: { ka: 'რგოლი', en: 'Ring' } },
                                { id: 'set', name: { ka: 'სიმრავლე', en: 'Set' } },
                                { id: 'subring', name: { ka: 'ქვერგოლი', en: 'Subring' } },
                                { id: 'group', name: { ka: 'ჯგუფი', en: 'Group' } },
                                { id: 'homomorphism', name: { ka: 'ჰომომორფიზმი', en: 'Homomorphism' } },
                                { id: 'vector-space-abstract', name: { ka: 'ვექტორული სივრცე', en: 'Vector space' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'analysis',
                    name: { ka: '📈 ანალიზი', en: '📈 Analysis' },
                    subSections: [
                        {
                            id: 'calculus',
                            name: { ka: '📊 აღრიცხვა (კალკულუსი) - დიფერენციალური და ინტეგრალური', en: '📊 Calculus - Differential and Integral' },
                            keywords: [
                                { id: 'asymptote', name: { ka: 'ასიმპტოტა', en: 'Asymptote' } },
                                { id: 'differential', name: { ka: 'დიფერენციალი', en: 'Differential' } },
                                { id: 'extremum', name: { ka: 'ექსტრემუმი (მაქსიმუმი, მინიმუმი)', en: 'Extremum (maximum, minimum)' } },
                                { id: 'limit', name: { ka: 'ზღვარი', en: 'Limit' } },
                                { id: 'integral', name: { ka: 'ინტეგრალი (განსაზღვრული, განუსაზღვრელი)', en: 'Integral (definite, indefinite)' } },
                                { id: 'newton-leibniz-formula', name: { ka: 'ნიუტონ-ლაიბნიცის ფორმულა', en: 'Newton-Leibniz formula' } },
                                { id: 'numerical-series', name: { ka: 'რიცხვითი მწკრივი', en: 'Numerical series' } },
                                { id: 'taylor-series', name: { ka: 'ტეილორის მწკრივი', en: 'Taylor series' } },
                                { id: 'continuity', name: { ka: 'უწყვეტობა', en: 'Continuity' } },
                                { id: 'function', name: { ka: 'ფუნქცია', en: 'Function' } },
                                { id: 'derivative', name: { ka: 'წარმოებული', en: 'Derivative' } },
                                { id: 'power-series', name: { ka: 'ხარისხოვანი მწკრივი', en: 'Power series' } },
                                { id: 'fourier-series', name: { ka: 'ფურიეს მწკრივი', en: 'Fourier series' } },
                            ]
                        },
                        {
                            id: 'real-complex-analysis',
                            name: { ka: 'ℂ ნამდვილი და კომპლექსური ანალიზი', en: 'ℂ Real and Complex Analysis' },
                            keywords: [
                                { id: 'analytic-function', name: { ka: 'ანალიზური ფუნქცია', en: 'Analytic function' } },
                                { id: 'cauchys-integral-theorem', name: { ka: 'კოშის ინტეგრალური თეორემა', en: 'Cauchy\'s integral theorem' } },
                                { id: 'complex-number', name: { ka: 'კომპლექსური რიცხვი', en: 'Complex number' } },
                                { id: 'laplace-transform', name: { ka: 'ლაპლასის გარდაქმნა', en: 'Laplace transform' } },
                                { id: 'lebesgue-integral', name: { ka: 'ლებეგის ინტეგრალი', en: 'Lebesgue integral' } },
                                { id: 'real-number', name: { ka: 'ნამდვილი რიცხვი', en: 'Real number' } },
                                { id: 'residue-theorem', name: { ka: 'რეზიდუუმის თეორემა', en: 'Residue theorem' } },
                                { id: 'fourier-analysis', name: { ka: 'ფურიეს ანალიზი', en: 'Fourier analysis' } },
                                { id: 'holomorphic-function', name: { ka: 'ჰოლომორფული ფუნქცია', en: 'Holomorphic function' } },
                            ]
                        },
                        {
                            id: 'differential-equations',
                            name: { ka: '📜 დიფერენციალური განტოლებები', en: '📜 Differential Equations' },
                            keywords: [
                                { id: 'general-particular-solution', name: { ka: 'ზოგადი/კერძო ამონახსნი', en: 'General/particular solution' } },
                                { id: 'pde', name: { ka: 'კერძო წარმოებულიანი დიფერენციალური განტოლება (კწდგ)', en: 'Partial differential equation (PDE)' } },
                                { id: 'boundary-condition', name: { ka: 'საზღვრული პირობა', en: 'Boundary condition' } },
                                { id: 'initial-condition', name: { ka: 'საწყისი პირობა', en: 'Initial condition' } },
                                { id: 'ode', name: { ka: 'ჩვეულებრივი დიფერენციალური განტოლება (ჩდგ)', en: 'Ordinary differential equation (ODE)' } },
                                { id: 'differential-operator', name: { ka: 'დიფერენციალური ოპერატორი', en: 'Differential operator' } },
                            ]
                        },
                        {
                            id: 'functional-analysis',
                            name: { ka: '📐 ფუნქციონალური ანალიზი', en: '📐 Functional Analysis' },
                            keywords: [
                                { id: 'banach-space', name: { ka: 'ბანახის სივრცე', en: 'Banach space' } },
                                { id: 'metric-space', name: { ka: 'მეტრიკული სივრცე', en: 'Metric space' } },
                                { id: 'norm', name: { ka: 'ნორმა', en: 'Norm' } },
                                { id: 'spectrum', name: { ka: 'სპექტრი', en: 'Spectrum' } },
                                { id: 'functional', name: { ka: 'ფუნქციონალი', en: 'Functional' } },
                                { id: 'function-space', name: { ka: 'ფუნქციონალური სივრცე', en: 'Function space' } },
                                { id: 'hilbert-space', name: { ka: 'ჰილბერტის სივრცე', en: 'Hilbert space' } },
                                { id: 'linear-operator', name: { ka: 'წრფივი ოპერატორი', en: 'Linear operator' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'geometry-topology',
                    name: { ka: '📐 გეომეტრია და ტოპოლოგია', en: '📐 Geometry and Topology' },
                    subSections: [
                        {
                            id: 'euclidean-geometry',
                            name: { ka: '📏 ევკლიდური გეომეტრია', en: '📏 Euclidean Geometry' },
                            keywords: [
                                { id: 'axiom', name: { ka: 'აქსიომა', en: 'Axiom' } },
                                { id: 'theorem', name: { ka: 'თეორემა', en: 'Theorem' } },
                                { id: 'angle', name: { ka: 'კუთხე', en: 'Angle' } },
                                { id: 'perpendicularity', name: { ka: 'მართობულობა', en: 'Perpendicularity' } },
                                { id: 'volume', name: { ka: 'მოცულობა', en: 'Volume' } },
                                { id: 'parallelism', name: { ka: 'პარალელურობა', en: 'Parallelism' } },
                                { id: 'perimeter', name: { ka: 'პერიმეტრი', en: 'Perimeter' } },
                                { id: 'pythagorean-theorem', name: { ka: 'პითაგორას თეორემა', en: 'Pythagorean theorem' } },
                                { id: 'triangle', name: { ka: 'სამკუთხედი', en: 'Triangle' } },
                                { id: 'plane', name: { ka: 'სიბრტყე', en: 'Plane' } },
                                { id: 'equality', name: { ka: 'ტოლობა', en: 'Equality' } },
                                { id: 'area', name: { ka: 'ფართობი', en: 'Area' } },
                                { id: 'point', name: { ka: 'წერტილი', en: 'Point' } },
                                { id: 'circle', name: { ka: 'წრეწირი', en: 'Circle' } },
                                { id: 'line', name: { ka: 'წრფე', en: 'Line' } },
                                { id: 'vector-geo', name: { ka: 'ვექტორი', en: 'Vector' } },
                            ]
                        },
                        {
                            id: 'trigonometry',
                            name: { ka: '📐 ტრიგონომეტრია', en: '📐 Trigonometry' },
                            keywords: [
                                { id: 'degree', name: { ka: 'გრადუსი', en: 'Degree' } },
                                { id: 'cosine', name: { ka: 'კოსინუსი (cos)', en: 'Cosine (cos)' } },
                                { id: 'cotangent', name: { ka: 'კოტანგენსი (cot)', en: 'Cotangent (cot)' } },
                                { id: 'radian', name: { ka: 'რადიანი', en: 'Radian' } },
                                { id: 'sine', name: { ka: 'სინუსი (sin)', en: 'Sine (sin)' } },
                                { id: 'tangent', name: { ka: 'ტანგენსი (tan)', en: 'Tangent (tan)' } },
                                { id: 'trigonometric-identities', name: { ka: 'ტრიგონომეტრიული იგივეობები', en: 'Trigonometric identities' } },
                                { id: 'unit-circle', name: { ka: 'ერთეულოვანი წრე', en: 'Unit circle' } },
                                { id: 'hypotenuse', name: { ka: 'ჰიპოტენუზა', en: 'Hypotenuse' } },
                            ]
                        },
                        {
                            id: 'differential-geometry',
                            name: { ka: '🗺️ დიფერენციალური გეომეტრია', en: '🗺️ Differential Geometry' },
                            keywords: [
                                { id: 'geodesic-line-geo', name: { ka: 'გეოდეზიური ხაზი', en: 'Geodesic line' } },
                                { id: 'manifold', name: { ka: 'მრავალნაირობა', en: 'Manifold' } },
                                { id: 'curve', name: { ka: 'მრუდი', en: 'Curve' } },
                                { id: 'riemannian-geometry', name: { ka: 'რიმანის გეომეტრია', en: 'Riemannian geometry' } },
                                { id: 'curvature', name: { ka: 'სიმრუდე', en: 'Curvature' } },
                                { id: 'tensor', name: { ka: 'ტენზორი', en: 'Tensor' } },
                                { id: 'surface', name: { ka: 'ზედაპირი', en: 'Surface' } },
                                { id: 'spherical-geometry', name: { ka: 'სფერული გეომეტრია', en: 'Spherical geometry' } },
                            ]
                        },
                        {
                            id: 'topology',
                            name: { ka: '🌀 ტოპოლოგია', en: '🌀 Topology' },
                            keywords: [
                                { id: 'connectedness', name: { ka: 'ბმულობა', en: 'Connectedness' } },
                                { id: 'knot-theory', name: { ka: 'კვანძების თეორია', en: 'Knot theory' } },
                                { id: 'compactness', name: { ka: 'კომპაქტურობა', en: 'Compactness' } },
                                { id: 'manifold-topo', name: { ka: 'მანიფოლდი', en: 'Manifold' } },
                                { id: 'mobius-strip', name: { ka: 'მებიუსის ფურცელი', en: 'Möbius strip' } },
                                { id: 'topological-space', name: { ka: 'ტოპოლოგიური სივრცე', en: 'Topological space' } },
                                { id: 'fractal', name: { ka: 'ფრაქტალი', en: 'Fractal' } },
                                { id: 'homeomorphism', name: { ka: 'ჰომეომორფიზმი', en: 'Homeomorphism' } },
                                { id: 'homotopy', name: { ka: 'ჰომოტოპია', en: 'Homotopy' } },
                                { id: 'quantum-topology', name: { ka: 'კვანტური ტოპოლოგია', en: 'Quantum topology' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'discrete-math-logic',
                    name: { ka: '🔢 დისკრეტული მათემატიკა და ლოგიკა', en: '🔢 Discrete Mathematics and Logic' },
                    subSections: [
                        {
                            id: 'combinatorics',
                            name: { ka: '🎲 კომბინატორიკა', en: '🎲 Combinatorics' },
                            keywords: [
                                { id: 'binomial-coefficient', name: { ka: 'ბინომიალური კოეფიციენტი', en: 'Binomial coefficient' } },
                                { id: 'permutation', name: { ka: 'გადანაცვლება', en: 'Permutation' } },
                                { id: 'counting-principles', name: { ka: 'დათვლის პრინციპები', en: 'Counting principles' } },
                                { id: 'dirichlets-principle', name: { ka: 'დირიხლეს პრინციპი', en: 'Dirichlet\'s principle' } },
                                { id: 'combination', name: { ka: 'წყობა', en: 'Combination' } },
                                { id: 'grouping', name: { ka: 'ჯგუფთება', en: 'Grouping' } },
                                { id: 'factorial', name: { ka: 'ფაქტორიალი', en: 'Factorial' } },
                                { id: 'set-theory', name: { ka: 'სიმრავლეების თეორია', en: 'Set theory' } },
                            ]
                        },
                        {
                            id: 'graph-theory',
                            name: { ka: '🕸️ გრაფთა თეორია', en: '🕸️ Graph Theory' },
                            keywords: [
                                { id: 'path', name: { ka: 'ბილიკი', en: 'Path' } },
                                { id: 'graph', name: { ka: 'გრაფი', en: 'Graph' } },
                                { id: 'euler-hamiltonian-cycle', name: { ka: 'ეილერის/ჰამილტონის ციკლი', en: 'Euler/Hamiltonian cycle' } },
                                { id: 'vertex', name: { ka: 'წვერო', en: 'Vertex' } },
                                { id: 'edge', name: { ka: 'წიბო', en: 'Edge' } },
                                { id: 'cycle', name: { ka: 'ციკლი', en: 'Cycle' } },
                                { id: 'tree', name: { ka: 'ხე', en: 'Tree' } },
                                { id: 'network', name: { ka: 'ქსელი', en: 'Network' } },
                                { id: 'multigraph', name: { ka: 'მრავალგრაფი', en: 'Multigraph' } },
                            ]
                        },
                        {
                            id: 'mathematical-logic',
                            name: { ka: '🧠 მათემატიკური ლოგიკა', en: '🧠 Mathematical Logic' },
                            keywords: [
                                { id: 'axiomatics', name: { ka: 'აქსიომატიკა', en: 'Axiomatics' } },
                                { id: 'rule-of-inference', name: { ka: 'დასკვნის წესი', en: 'Rule of inference' } },
                                { id: 'proposition', name: { ka: 'დებულება', en: 'Proposition' } },
                                { id: 'quantifier', name: { ka: 'კვანტორი', en: 'Quantifier' } },
                                { id: 'logical-operators', name: { ka: 'ლოგიკური ოპერატორები', en: 'Logical operators' } },
                                { id: 'predicate', name: { ka: 'პრედიკატი', en: 'Predicate' } },
                                { id: 'set-theory-logic', name: { ka: 'სიმრავლეთა თეორია', en: 'Set theory' } },
                                { id: 'truth-table', name: { ka: 'ჭეშმარიტების ცხრილი', en: 'Truth table' } },
                                { id: 'boolean-algebra', name: { ka: 'ბულის ალგებრა', en: 'Boolean algebra' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'probability-applied-math',
                    name: { ka: '📊 ალბათობა და გამოყენებითი მათემატიკა', en: '📊 Probability and Applied Mathematics' },
                    subSections: [
                        {
                            id: 'probability-theory',
                            name: { ka: '🎲 ალბათობის თეორია', en: '🎲 Probability Theory' },
                            keywords: [
                                { id: 'probability', name: { ka: 'ალბათობა', en: 'Probability' } },
                                { id: 'bayes-theorem', name: { ka: 'ბაიესის თეორემა', en: 'Bayes\' theorem' } },
                                { id: 'law-of-large-numbers', name: { ka: 'დიდი რიცხვების კანონი', en: 'Law of large numbers' } },
                                { id: 'variance', name: { ka: 'დისპერსია', en: 'Variance' } },
                                { id: 'expected-value', name: { ka: 'მათემატიკური ლოდინი', en: 'Expected value' } },
                                { id: 'random-variable', name: { ka: 'შემთხვევითი სიდიდე', en: 'Random variable' } },
                                { id: 'central-limit-theorem', name: { ka: 'ცენტრალური ზღვრული თეორემა', en: 'Central limit theorem' } },
                                { id: 'event', name: { ka: 'ხდომილობა', en: 'Event' } },
                                { id: 'distribution-function', name: { ka: 'განაწილების ფუნქცია', en: 'Distribution function' } },
                            ]
                        },
                        {
                            id: 'statistics',
                            name: { ka: '📈 სტატისტიკა', en: '📈 Statistics' },
                            keywords: [
                                { id: 'correlation', name: { ka: 'კორელაცია', en: 'Correlation' } },
                                { id: 'median', name: { ka: 'მედიანა', en: 'Median' } },
                                { id: 'mode', name: { ka: 'მოდა', en: 'Mode' } },
                                { id: 'data', name: { ka: 'მონაცემები', en: 'Data' } },
                                { id: 'population-stats', name: { ka: 'პოპულაცია', en: 'Population' } },
                                { id: 'regression', name: { ka: 'რეგრესია', en: 'Regression' } },
                                { id: 'mean', name: { ka: 'საშუალო', en: 'Mean' } },
                                { id: 'standard-deviation', name: { ka: 'სტანდარტული გადახრა', en: 'Standard deviation' } },
                                { id: 'sample', name: { ka: 'შერჩევა', en: 'Sample' } },
                                { id: 'hypothesis-testing', name: { ka: 'ჰიპოთეზის შემოწმება', en: 'Hypothesis testing' } },
                                { id: 'analysis-of-variance', name: { ka: 'დისპერსიული ანალიზი', en: 'Analysis of variance' } },
                            ]
                        },
                        {
                            id: 'numerical-analysis-optimization',
                            name: { ka: '💻 რიცხვითი ანალიზი და ოპტიმიზაცია', en: '💻 Numerical Analysis and Optimization' },
                            keywords: [
                                { id: 'algorithm', name: { ka: 'ალგორითმი', en: 'Algorithm' } },
                                { id: 'approximation', name: { ka: 'აპროქსიმაცია', en: 'Approximation' } },
                                { id: 'interpolation', name: { ka: 'ინტერპოლაცია', en: 'Interpolation' } },
                                { id: 'approximation-alt', name: { ka: 'მიახლოება', en: 'Approximation' } },
                                { id: 'monte-carlo-method', name: { ka: 'მონტე-კარლოს მეთოდი', en: 'Monte Carlo method' } },
                                { id: 'optimization', name: { ka: 'ოპტიმიზაცია', en: 'Optimization' } },
                                { id: 'numerical-integration', name: { ka: 'რიცხვითი ინტეგრება', en: 'Numerical integration' } },
                                { id: 'linear-programming', name: { ka: 'წრფივი პროგრამირება', en: 'Linear programming' } },
                                { id: 'newtons-method', name: { ka: 'ნიუტონის მეთოდი', en: 'Newton\'s method' } },
                            ]
                        },
                        {
                            id: 'cryptography',
                            name: { ka: '🔒 კრიპტოგრაფია', en: '🔒 Cryptography' },
                            keywords: [
                                { id: 'algorithm-rsa-aes', name: { ka: 'ალგორითმი (RSA, AES)', en: 'Algorithm (RSA, AES)' } },
                                { id: 'decryption', name: { ka: 'დეშიფრაცია', en: 'Decryption' } },
                                { id: 'cryptographic-hash', name: { ka: 'კრიპტოგრაფიული ჰეში (SHA-256)', en: 'Cryptographic hash (SHA-256)' } },
                                { id: 'public-private-key', name: { ka: 'საჯარო/პირადი გასაღები', en: 'Public/private key' } },
                                { id: 'digital-signature', name: { ka: 'ციფრული ხელმოწერა', en: 'Digital signature' } },
                                { id: 'encryption', name: { ka: 'შიფრაცია', en: 'Encryption' } },
                                { id: 'electronic-signature', name: { ka: 'ელექტრონული ხელმოწერა', en: 'Electronic signature' } },
                            ]
                        },
                        {
                            id: 'game-theory',
                            name: { ka: '♟️ თამაშთა თეორია', en: '♟️ Game Theory' },
                            keywords: [
                                { id: 'player', name: { ka: 'მოთამაშე', en: 'Player' } },
                                { id: 'nash-equilibrium', name: { ka: 'ნეშის წონასწორობა', en: 'Nash equilibrium' } },
                                { id: 'prisoners-dilemma', name: { ka: 'პატიმრის დილემა', en: 'Prisoner\'s dilemma' } },
                                { id: 'strategy', name: { ka: 'სტრატეგია', en: 'Strategy' } },
                                { id: 'game', name: { ka: 'თამაში', en: 'Game' } },
                                { id: 'payoff-matrix', name: { ka: 'მოგების მატრიცა', en: 'Payoff matrix' } },
                                { id: 'zero-sum-game', name: { ka: 'ნულოვანი თანხის თამაში', en: 'Zero-sum game' } },
                            ]
                        },
                        {
                            id: 'financial-mathematics',
                            name: { ka: '💰 ფინანსური მათემატიკა', en: '💰 Financial Mathematics' },
                            keywords: [
                                { id: 'annuity', name: { ka: 'ანუიტეტი', en: 'Annuity' } },
                                { id: 'stock', name: { ka: 'აქცია', en: 'Stock' } },
                                { id: 'derivatives', name: { ka: 'დერივატივები', en: 'Derivatives' } },
                                { id: 'discounting', name: { ka: 'დისკონტირება', en: 'Discounting' } },
                                { id: 'bond', name: { ka: 'ობლიგაცია', en: 'Bond' } },
                                { id: 'option', name: { ka: 'ოფციონი', en: 'Option' } },
                                { id: 'interest', name: { ka: 'პროცენტი (მარტივი, რთული)', en: 'Interest (simple, compound)' } },
                                { id: 'risk-assessment', name: { ka: 'რისკის შეფასება', en: 'Risk assessment' } },
                                { id: 'portfolio-theory', name: { ka: 'პორტფელის თეორია', en: 'Portfolio theory' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'physics',
            name: { ka: '⚛️ ფიზიკა', en: '⚛️ Physics' },
            sections: [
                {
                    id: 'fundamental-theories',
                    name: { ka: '✨ ფუნდამენტური თეორიები', en: '✨ Fundamental Theories' },
                    subSections: [
                        {
                            id: 'theoretical-physics',
                            name: { ka: '📜 თეორიული ფიზიკა', en: '📜 Theoretical Physics' },
                            keywords: [
                                { id: 'gauge-invariance', name: { ka: 'კალიბრული ინვარიანტობა', en: 'Gauge invariance' } },
                                { id: 'law', name: { ka: 'კანონი', en: 'Law' } },
                                { id: 'lagrangian', name: { ka: 'ლაგრანჟიანი', en: 'Lagrangian' } },
                                { id: 'model', name: { ka: 'მოდელი', en: 'Model' } },
                                { id: 'principle', name: { ka: 'პრინციპი', en: 'Principle' } },
                                { id: 'symmetry', name: { ka: 'სიმეტრია', en: 'Symmetry' } },
                                { id: 'theory', name: { ka: 'თეორია', en: 'Theory' } },
                                { id: 'conservation-law', name: { ka: 'შენახვის კანონი (ენერგიის, იმპულსის)', en: 'Conservation law (energy, momentum)' } },
                                { id: 'hamiltonian', name: { ka: 'ჰამილტონიანი', en: 'Hamiltonian' } },
                                { id: 'dimension-physics', name: { ka: 'განზომილება', en: 'Dimension' } },
                                { id: 'quantum-field', name: { ka: 'კვანტური ველი', en: 'Quantum field' } },
                            ]
                        },
                        {
                            id: 'general-special-relativity',
                            name: { ka: '🌌 ფარდობითობის ზოგადი და სპეციალური თეორიები', en: '🌌 General and Special Theories of Relativity' },
                            keywords: [
                                { id: 'e-mc2', name: { ka: 'E=mc²', en: 'E=mc²' } },
                                { id: 'gravitational-lensing-rel', name: { ka: 'გრავიტაციული ლინზირება', en: 'Gravitational lensing' } },
                                { id: 'gravitational-wave-rel', name: { ka: 'გრავიტაციული ტალღა', en: 'Gravitational wave' } },
                                { id: 'gravity', name: { ka: 'გრავიტაცია', en: 'Gravity' } },
                                { id: 'time-dilation', name: { ka: 'დროის შენელება', en: 'Time dilation' } },
                                { id: 'equivalence-principle', name: { ka: 'ეკვივალენტობის პრინციპი', en: 'Equivalence principle' } },
                                { id: 'mass-energy-equivalence', name: { ka: 'მასისა და ენერგიის ეკვივალენტობა', en: 'Mass-energy equivalence' } },
                                { id: 'spacetime', name: { ka: 'სივრცე-დრო', en: 'Spacetime' } },
                                { id: 'speed-of-light', name: { ka: 'სინათლის სიჩქარე', en: 'Speed of light' } },
                                { id: 'principle-of-relativity', name: { ka: 'ფარდობითობის პრინციპი', en: 'Principle of relativity' } },
                                { id: 'black-hole-rel', name: { ka: 'შავი ხვრელი', en: 'Black hole' } },
                                { id: 'length-contraction', name: { ka: 'სიგრძის შემცირება', en: 'Length contraction' } },
                                { id: 'lorentz-transformation', name: { ka: 'ლორენცის გარდაქმნა', en: 'Lorentz transformation' } },
                            ]
                        },
                        {
                            id: 'quantum-field-theory',
                            name: { ka: '⚛️ კვანტური ველის თეორია', en: '⚛️ Quantum Field Theory' },
                            keywords: [
                                { id: 'vacuum-energy', name: { ka: 'ვაკუუმის ენერგია', en: 'Vacuum energy' } },
                                { id: 'virtual-particle', name: { ka: 'ვირტუალური ნაწილაკი', en: 'Virtual particle' } },
                                { id: 'quantum-field-qft', name: { ka: 'კვანტური ველი', en: 'Quantum field' } },
                                { id: 'qed', name: { ka: 'კვანტური ელექტროდინამიკა (QED)', en: 'Quantum electrodynamics (QED)' } },
                                { id: 'qcd', name: { ka: 'კვანტური ქრომოდინამიკა (QCD)', en: 'Quantum chromodynamics (QCD)' } },
                                { id: 'renormalization', name: { ka: 'რენორმალიზაცია', en: 'Renormalization' } },
                                { id: 'feynman-diagram', name: { ka: 'ფეინმანის დიაგრამა', en: 'Feynman diagram' } },
                                { id: 'interaction', name: { ka: 'ურთიერთქმედება', en: 'Interaction' } },
                                { id: 'spontaneous-symmetry-breaking', name: { ka: 'სიმეტრიის სპონტანური დარღვევა', en: 'Spontaneous symmetry breaking' } },
                            ]
                        },
                        {
                            id: 'string-m-theory',
                            name: { ka: '🧵 სიმების თეორია და M-თეორია', en: '🧵 String Theory and M-theory' },
                            keywords: [
                                { id: 'm-theory', name: { ka: 'M-თეორია', en: 'M-theory' } },
                                { id: 'brane', name: { ka: 'ბრანა', en: 'Brane' } },
                                { id: 'extra-dimensions', name: { ka: 'დამატებითი განზომილებები', en: 'Extra dimensions' } },
                                { id: 'calabi-yau-manifold', name: { ka: 'კალაბი-იაუს მრავალნაირობა', en: 'Calabi-Yau manifold' } },
                                { id: 'string', name: { ka: 'სიმი', en: 'String' } },
                                { id: 'supersymmetry', name: { ka: 'სუპერსიმეტრია', en: 'Supersymmetry' } },
                                { id: 'holographic-principle', name: { ka: 'ჰოლოგრაფიული პრინციპი', en: 'Holographic principle' } },
                                { id: 'graviton', name: { ka: 'გრავიტონი', en: 'Graviton' } },
                            ]
                        },
                        {
                            id: 'quantum-gravity',
                            name: { ka: '⚖️ კვანტური გრავიტაცია', en: '⚖️ Quantum Gravity' },
                            keywords: [
                                { id: 'graviton-qg', name: { ka: 'გრავიტონი', en: 'Graviton' } },
                                { id: 'loop-quantum-gravity', name: { ka: 'მარყუჟული კვანტური გრავიტაცია', en: 'Loop quantum gravity' } },
                                { id: 'causality', name: { ka: 'მიზეზობრიობა', en: 'Causality' } },
                                { id: 'planck-length', name: { ka: 'პლანკის სიგრძე', en: 'Planck length' } },
                                { id: 'planck-time', name: { ka: 'პლანკის დრო', en: 'Planck time' } },
                                { id: 'spacetime-foam', name: { ka: 'სივრცე-დროის ქაფი', en: 'Spacetime foam' } },
                                { id: 'string-theory', name: { ka: 'სიმების თეორია', en: 'String theory' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'classical-world',
                    name: { ka: '⚙️ კლასიკური სამყარო (მაკროსისტემები)', en: '⚙️ Classical World (Macrosystems)' },
                    subSections: [
                        {
                            id: 'classical-mechanics',
                            name: { ka: '🚗 კლასიკური მექანიკა (კინემატიკა, დინამიკა, სტატიკა)', en: '🚗 Classical Mechanics (Kinematics, Dynamics, Statics)' },
                            keywords: [
                                { id: 'acceleration', name: { ka: 'აჩქარება', en: 'Acceleration' } },
                                { id: 'lever', name: { ka: 'ბერკეტი', en: 'Lever' } },
                                { id: 'energy', name: { ka: 'ენერგია (კინეტიკური, პოტენციური)', en: 'Energy (kinetic, potential)' } },
                                { id: 'momentum', name: { ka: 'იმპულსი', en: 'Momentum' } },
                                { id: 'inertia', name: { ka: 'ინერცია', en: 'Inertia' } },
                                { id: 'angular-momentum', name: { ka: 'კუთხური მომენტი', en: 'Angular momentum' } },
                                { id: 'mass', name: { ka: 'მასა', en: 'Mass' } },
                                { id: 'moment', name: { ka: 'მომენტი', en: 'Moment' } },
                                { id: 'motion', name: { ka: 'მოძრაობა', en: 'Motion' } },
                                { id: 'work', name: { ka: 'მუშაობა', en: 'Work' } },
                                { id: 'newtons-laws', name: { ka: 'ნიუტონის კანონები', en: 'Newton\'s laws' } },
                                { id: 'power', name: { ka: 'სიმძლავრე', en: 'Power' } },
                                { id: 'speed', name: { ka: 'სიჩქარე', en: 'Speed' } },
                                { id: 'statics', name: { ka: 'სტატიკა', en: 'Statics' } },
                                { id: 'friction', name: { ka: 'ხახუნი', en: 'Friction' } },
                                { id: 'force', name: { ka: 'ძალა', en: 'Force' } },
                                { id: 'equilibrium', name: { ka: 'წონასწორობა', en: 'Equilibrium' } },
                            ]
                        },
                        {
                            id: 'analytical-mechanics',
                            name: { ka: '📜 ანალიზური მექანიკა', en: '📜 Analytical Mechanics' },
                            keywords: [
                                { id: 'generalized-coordinates', name: { ka: 'განზოგადებული კოორდინატები', en: 'Generalized coordinates' } },
                                { id: 'lagrangian-mechanics', name: { ka: 'ლაგრანჟის მექანიკა', en: 'Lagrangian mechanics' } },
                                { id: 'principle-of-least-action', name: { ka: 'უმცირესი მოქმედების პრინციპი', en: 'Principle of least action' } },
                                { id: 'phase-space', name: { ka: 'ფაზური სივრცე', en: 'Phase space' } },
                                { id: 'hamiltonian-mechanics', name: { ka: 'ჰამილტონის მექანიკა', en: 'Hamiltonian mechanics' } },
                                { id: 'lagrange-equations', name: { ka: 'ლაგრანჟის განტოლებები', en: 'Lagrange equations' } },
                            ]
                        },
                        {
                            id: 'hydrodynamics-aerodynamics',
                            name: { ka: '🌊 ჰიდროდინამიკა და აეროდინამიკა', en: '🌊 Hydrodynamics and Aerodynamics' },
                            keywords: [
                                { id: 'gas', name: { ka: 'აირი', en: 'Gas' } },
                                { id: 'lift-force', name: { ka: 'ამწევი ძალა', en: 'Lift force' } },
                                { id: 'archimedes-law', name: { ka: 'არქიმედეს კანონი', en: 'Archimedes\' law' } },
                                { id: 'bernoullis-principle', name: { ka: 'ბერნულის პრინციპი', en: 'Bernoulli\'s principle' } },
                                { id: 'laminar-flow', name: { ka: 'ლამინარული დინება', en: 'Laminar flow' } },
                                { id: 'navier-stokes-equations', name: { ka: 'ნავიე-სტოქსის განტოლებები', en: 'Navier-Stokes equations' } },
                                { id: 'viscosity', name: { ka: 'სიბლანტე', en: 'Viscosity' } },
                                { id: 'fluid', name: { ka: 'სითხე', en: 'Fluid' } },
                                { id: 'turbulence', name: { ka: 'ტურბულენტობა', en: 'Turbulence' } },
                                { id: 'drag-force', name: { ka: 'წინაღობის ძალა', en: 'Drag force' } },
                                { id: 'pressure', name: { ka: 'წნევა', en: 'Pressure' } },
                                { id: 'foam', name: { ka: 'ქაფი', en: 'Foam' } },
                            ]
                        },
                        {
                            id: 'thermodynamics-statistical-physics',
                            name: { ka: '🌡️ თერმოდინამიკა და სტატისტიკური ფიზიკა', en: '🌡️ Thermodynamics and Statistical Physics' },
                            keywords: [
                                { id: 'absolute-zero', name: { ka: 'აბსოლუტური ნული', en: 'Absolute zero' } },
                                { id: 'boltzmann-distribution', name: { ka: 'ბოლცმანის განაწილება', en: 'Boltzmann distribution' } },
                                { id: 'entropy', name: { ka: 'ენტროპია', en: 'Entropy' } },
                                { id: 'enthalpy', name: { ka: 'ენთალპია', en: 'Enthalpy' } },
                                { id: 'laws-of-thermodynamics', name: { ka: 'თერმოდინამიკის კანონები', en: 'Laws of thermodynamics' } },
                                { id: 'heat', name: { ka: 'სითბო', en: 'Heat' } },
                                { id: 'heat-engine', name: { ka: 'სითბური ძრავა', en: 'Heat engine' } },
                                { id: 'statistical-ensemble', name: { ka: 'სტატისტიკური ანსამბლი', en: 'Statistical ensemble' } },
                                { id: 'temperature-thermo', name: { ka: 'ტემპერატურა', en: 'Temperature' } },
                                { id: 'phase-transition', name: { ka: 'ფაზური გადასვლა', en: 'Phase transition' } },
                                { id: 'internal-energy', name: { ka: 'შინაგანი ენერგია', en: 'Internal energy' } },
                                { id: 'thermodynamic-potential', name: { ka: 'თერმოდინამიკური პოტენციალი', en: 'Thermodynamic potential' } },
                            ]
                        },
                        {
                            id: 'electromagnetism-electrodynamics',
                            name: { ka: '⚡ ელექტრომაგნეტიზმი და ელექტროდინამიკა', en: '⚡ Electromagnetism and Electrodynamics' },
                            keywords: [
                                { id: 'current-el', name: { ka: 'დენი', en: 'Current' } },
                                { id: 'electric-field', name: { ka: 'ელექტრული ველი', en: 'Electric field' } },
                                { id: 'electric-charge', name: { ka: 'ელექტრული მუხტი', en: 'Electric charge' } },
                                { id: 'electric-circuit', name: { ka: 'ელექტრული წრედი', en: 'Electric circuit' } },
                                { id: 'electromagnetic-wave', name: { ka: 'ელექტრომაგნიტური ტალღა', en: 'Electromagnetic wave' } },
                                { id: 'inductance', name: { ka: 'ინდუქციურობა', en: 'Inductance' } },
                                { id: 'coulombs-law', name: { ka: 'კულონის კანონი', en: 'Coulomb\'s law' } },
                                { id: 'lorentz-force', name: { ka: 'ლორენცის ძალა', en: 'Lorentz force' } },
                                { id: 'magnetic-field', name: { ka: 'მაგნიტური ველი', en: 'Magnetic field' } },
                                { id: 'maxwells-equations', name: { ka: 'მაქსველის განტოლებები', en: 'Maxwell\'s equations' } },
                                { id: 'capacitance', name: { ka: 'ტევადობა', en: 'Capacitance' } },
                                { id: 'faradays-law', name: { ka: 'ფარადეის კანონი', en: 'Faraday\'s law' } },
                                { id: 'resistance', name: { ka: 'წინაღობა', en: 'Resistance' } },
                                { id: 'voltage', name: { ka: 'ძაბვა', en: 'Voltage' } },
                                { id: 'capacitor', name: { ka: 'კონდენსატორი', en: 'Capacitor' } },
                            ]
                        },
                        {
                            id: 'optics-photonics',
                            name: { ka: '💡 ოპტიკა და ფოტონიკა', en: '💡 Optics and Photonics' },
                            keywords: [
                                { id: 'reflection', name: { ka: 'არეკვლა', en: 'Reflection' } },
                                { id: 'refraction', name: { ka: 'გარდატეხა', en: 'Refraction' } },
                                { id: 'diffraction', name: { ka: 'დიფრაქცია', en: 'Diffraction' } },
                                { id: 'interference', name: { ka: 'ინტერფერენცია', en: 'Interference' } },
                                { id: 'laser', name: { ka: 'ლაზერი', en: 'Laser' } },
                                { id: 'lens', name: { ka: 'ლინზა', en: 'Lens' } },
                                { id: 'optical-fiber', name: { ka: 'ოპტიკური ბოჭკო', en: 'Optical fiber' } },
                                { id: 'polarization', name: { ka: 'პოლარიზაცია', en: 'Polarization' } },
                                { id: 'mirror', name: { ka: 'სარკე', en: 'Mirror' } },
                                { id: 'light', name: { ka: 'სინათლე', en: 'Light' } },
                                { id: 'spectrum-optics', name: { ka: 'სპექტრი', en: 'Spectrum' } },
                                { id: 'photon', name: { ka: 'ფოტონი', en: 'Photon' } },
                                { id: 'photonics', name: { ka: 'ფოტონიკა', en: 'Photonics' } },
                                { id: 'holography', name: { ka: 'ჰოლოგრაფია', en: 'Holography' } },
                                { id: 'quantum-optics', name: { ka: 'კვანტური ოპტიკა', en: 'Quantum optics' } },
                            ]
                        },
                        {
                            id: 'acoustics',
                            name: { ka: '🔊 აკუსტიკა (ბგერის ფიზიკა)', en: '🔊 Acoustics (Physics of Sound)' },
                            keywords: [
                                { id: 'amplitude', name: { ka: 'ამპლიტუდა', en: 'Amplitude' } },
                                { id: 'sound', name: { ka: 'ბგერა', en: 'Sound' } },
                                { id: 'speed-of-sound', name: { ka: 'ბგერის სიჩქარე', en: 'Speed of sound' } },
                                { id: 'doppler-effect-acoustics', name: { ka: 'დოპლერის ეფექტი', en: 'Doppler effect' } },
                                { id: 'echo', name: { ka: 'ექო', en: 'Echo' } },
                                { id: 'wave-acoustics', name: { ka: 'ტალღა', en: 'Wave' } },
                                { id: 'wavelength', name: { ka: 'ტალღის სიგრძე', en: 'Wavelength' } },
                                { id: 'infrasound', name: { ka: 'ინფრაბგერა', en: 'Infrasound' } },
                                { id: 'ultrasound', name: { ka: 'ულტრაბგერა', en: 'Ultrasound' } },
                                { id: 'resonance', name: { ka: 'რეზონანსი', en: 'Resonance' } },
                                { id: 'frequency', name: { ka: 'სიხშირე', en: 'Frequency' } },
                                { id: 'timbre', name: { ka: 'ხმის ტემბრი', en: 'Timbre' } },
                                { id: 'acoustic-resonance', name: { ka: 'აკუსტიკური რეზონანსი', en: 'Acoustic resonance' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'quantum-world',
                    name: { ka: '🔬 კვანტური სამყარო (მიკროსისტემები)', en: '🔬 Quantum World (Microsystems)' },
                    subSections: [
                        {
                            id: 'atomic-molecular-physics',
                            name: { ka: '⚛️ ატომური და მოლეკულური ფიზიკა', en: '⚛️ Atomic and Molecular Physics' },
                            keywords: [
                                { id: 'excited-state', name: { ka: 'აგზნებული მდგომარეობა', en: 'Excited state' } },
                                { id: 'atom', name: { ka: 'ატომი', en: 'Atom' } },
                                { id: 'atomic-orbital', name: { ka: 'ატომური ორბიტალი', en: 'Atomic orbital' } },
                                { id: 'nucleus-atom', name: { ka: 'ბირთვი', en: 'Nucleus' } },
                                { id: 'electron', name: { ka: 'ელექტრონი', en: 'Electron' } },
                                { id: 'ionization', name: { ka: 'იონიზაცია', en: 'Ionization' } },
                                { id: 'quantum-number', name: { ka: 'კვანტური რიცხვი', en: 'Quantum number' } },
                                { id: 'molecule', name: { ka: 'მოლეკულა', en: 'Molecule' } },
                                { id: 'neutron', name: { ka: 'ნეიტრონი', en: 'Neutron' } },
                                { id: 'proton', name: { ka: 'პროტონი', en: 'Proton' } },
                                { id: 'spectral-line', name: { ka: 'სპექტრული ხაზი', en: 'Spectral line' } },
                                { id: 'chemical-bond', name: { ka: 'ქიმიური ბმა', en: 'Chemical bond' } },
                                { id: 'schrodinger-equation', name: { ka: 'შრედინგერის განტოლება', en: 'Schrödinger equation' } },
                            ]
                        },
                        {
                            id: 'nuclear-physics',
                            name: { ka: '☢️ ბირთვული ფიზიკა', en: '☢️ Nuclear Physics' },
                            keywords: [
                                { id: 'alpha-beta-gamma-decay', name: { ka: 'ალფა/ბეტა/გამა დაშლა', en: 'Alpha/beta/gamma decay' } },
                                { id: 'atomic-nucleus', name: { ka: 'ატომბირთვი', en: 'Atomic nucleus' } },
                                { id: 'nuclear-fission', name: { ka: 'ბირთვული გახლეჩა', en: 'Nuclear fission' } },
                                { id: 'nuclear-fusion', name: { ka: 'ბირთვული სინთეზი', en: 'Nuclear fusion' } },
                                { id: 'isotope', name: { ka: 'იზოტოპი', en: 'Isotope' } },
                                { id: 'half-life', name: { ka: 'ნახევარდაშლის პერიოდი', en: 'Half-life' } },
                                { id: 'nucleon', name: { ka: 'ნუკლონი', en: 'Nucleon' } },
                                { id: 'radioactivity', name: { ka: 'რადიოაქტიურობა', en: 'Radioactivity' } },
                                { id: 'chain-reaction', name: { ka: 'ჯაჭვური რეაქცია', en: 'Chain reaction' } },
                                { id: 'nuclear-resonance', name: { ka: 'ბირთვული რეზონანსი', en: 'Nuclear resonance' } },
                            ]
                        },
                        {
                            id: 'particle-physics',
                            name: { ka: '🧪 ნაწილაკთა ფიზიკა (სტანდარტული მოდელი)', en: '🧪 Particle Physics (Standard Model)' },
                            keywords: [
                                { id: 'antiparticle', name: { ka: 'ანტინაწილაკი', en: 'Antiparticle' } },
                                { id: 'boson', name: { ka: 'ბოზონი', en: 'Boson' } },
                                { id: 'gluon', name: { ka: 'გლუონი', en: 'Gluon' } },
                                { id: 'elementary-particle', name: { ka: 'ელემენტარული ნაწილაკი', en: 'Elementary particle' } },
                                { id: 'quark', name: { ka: 'კვარკი', en: 'Quark' } },
                                { id: 'lepton', name: { ka: 'ლეპტონი', en: 'Lepton' } },
                                { id: 'neutrino-particle', name: { ka: 'ნეიტრინო', en: 'Neutrino' } },
                                { id: 'photon-particle', name: { ka: 'ფოტონი', en: 'Photon' } },
                                { id: 'fundamental-interaction', name: { ka: 'ფუნდამენტური ურთიერთქმედება (ძლიერი, სუსტი, ელექტრომაგნიტური, გრავიტაციული)', en: 'Fundamental interaction (strong, weak, electromagnetic, gravitational)' } },
                                { id: 'higgs-boson', name: { ka: 'ჰიგსის ბოზონი', en: 'Higgs boson' } },
                                { id: 'hadron', name: { ka: 'ადრონი', en: 'Hadron' } },
                            ]
                        },
                        {
                            id: 'quantum-optics-informatics',
                            name: { ka: '💻 კვანტური ოპტიკა და ინფორმატიკა', en: '💻 Quantum Optics and Informatics' },
                            keywords: [
                                { id: 'quantum-entanglement', name: { ka: 'კვანტური გადახლართულობა', en: 'Quantum entanglement' } },
                                { id: 'quantum-computer', name: { ka: 'კვანტური კომპიუტერი', en: 'Quantum computer' } },
                                { id: 'quantum-state', name: { ka: 'კვანტური მდგომარეობა', en: 'Quantum state' } },
                                { id: 'quantum-teleportation', name: { ka: 'კვანტური ტელეპორტაცია', en: 'Quantum teleportation' } },
                                { id: 'qubit', name: { ka: 'კუბიტი', en: 'Qubit' } },
                                { id: 'wave-function', name: { ka: 'ტალღური ფუნქცია', en: 'Wave function' } },
                                { id: 'heisenbergs-uncertainty-principle', name: { ka: 'ჰაიზენბერგის განუზღვრელობის პრინციპი', en: 'Heisenberg\'s uncertainty principle' } },
                                { id: 'schrodinger-equation-quantum', name: { ka: 'შრედინგერის განტოლება', en: 'Schrödinger equation' } },
                                { id: 'quantum-cryptography', name: { ka: 'კვანტური კრიპტოგრაფია', en: 'Quantum cryptography' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'states-of-matter',
                    name: { ka: '🧊 ნივთიერების მდგომარეობები', en: '🧊 States of Matter' },
                    subSections: [
                        {
                            id: 'condensed-matter-physics',
                            name: { ka: '💎 კონდენსირებული გარემოს ფიზიკა (მყარი სხეულები, რბილი მატერია)', en: '💎 Condensed Matter Physics (Solids, Soft Matter)' },
                            keywords: [
                                { id: 'amorphous-substance', name: { ka: 'ამორფული ნივთიერება', en: 'Amorphous substance' } },
                                { id: 'bose-einstein-condensate', name: { ka: 'ბოზე-აინშტაინის კონდენსატი', en: 'Bose-Einstein condensate' } },
                                { id: 'dielectric', name: { ka: 'დიელექტრიკი', en: 'Dielectric' } },
                                { id: 'liquid-crystal', name: { ka: 'თხევადი კრისტალი', en: 'Liquid crystal' } },
                                { id: 'colloid', name: { ka: 'კოლოიდი', en: 'Colloid' } },
                                { id: 'crystal-lattice', name: { ka: 'კრისტალური მესერი', en: 'Crystal lattice' } },
                                { id: 'metal', name: { ka: 'მეტალი', en: 'Metal' } },
                                { id: 'solid', name: { ka: 'მყარი სხეული', en: 'Solid' } },
                                { id: 'semiconductor', name: { ka: 'ნახევარგამტარი', en: 'Semiconductor' } },
                                { id: 'polymer', name: { ka: 'პოლიმერი', en: 'Polymer' } },
                                { id: 'fluid-matter', name: { ka: 'სითხე', en: 'Fluid' } },
                                { id: 'phase-diagram', name: { ka: 'ფაზური დიაგრამა', en: 'Phase diagram' } },
                            ]
                        },
                        {
                            id: 'superconductivity-superfluidity',
                            name: { ka: '⚡ ზეგამტარობა და ზედენადობა', en: '⚡ Superconductivity and Superfluidity' },
                            keywords: [
                                { id: 'critical-temperature', name: { ka: 'კრიტიკული ტემპერატურა', en: 'Critical temperature' } },
                                { id: 'cooper-pair', name: { ka: 'კუპერის წყვილი', en: 'Cooper pair' } },
                                { id: 'meissner-effect', name: { ka: 'მაისნერის ეფექტი', en: 'Meissner effect' } },
                                { id: 'superconductor', name: { ka: 'ზეგამტარი', en: 'Superconductor' } },
                                { id: 'superfluid', name: { ka: 'ზედენადი სითხე', en: 'Superfluid' } },
                                { id: 'superconducting-magnet', name: { ka: 'ზეგამტარი მაგნიტი', en: 'Superconducting magnet' } },
                            ]
                        },
                        {
                            id: 'plasma-physics-matter',
                            name: { ka: '☀️ პლაზმის ფიზიკა', en: '☀️ Plasma Physics' },
                            keywords: [
                                { id: 'ionization-plasma', name: { ka: 'იონიზაცია', en: 'Ionization' } },
                                { id: 'solar-wind-plasma', name: { ka: 'მზიური ქარი', en: 'Solar wind' } },
                                { id: 'plasma', name: { ka: 'პლაზმა', en: 'Plasma' } },
                                { id: 'polar-aurora', name: { ka: 'პოლარული ციალი', en: 'Polar aurora' } },
                                { id: 'stellarator', name: { ka: 'სტელარატორი', en: 'Stellarator' } },
                                { id: 'tokamak', name: { ka: 'ტოკამაკი', en: 'Tokamak' } },
                                { id: 'thermonuclear-reaction', name: { ka: 'თერმობირთვული რეაქცია', en: 'Thermonuclear reaction' } },
                                { id: 'plasma-screen', name: { ka: 'პლაზმური ეკრანი', en: 'Plasma screen' } },
                            ]
                        },
                        {
                            id: 'cryogenics',
                            name: { ka: '❄️ კრიოგენიკა (დაბალი ტემპერატურები)', en: '❄️ Cryogenics (Low Temperatures)' },
                            keywords: [
                                { id: 'absolute-zero-cryo', name: { ka: 'აბსოლუტური ნული', en: 'Absolute zero' } },
                                { id: 'freezing', name: { ka: 'გაყინვა', en: 'Freezing' } },
                                { id: 'low-temperature', name: { ka: 'დაბალი ტემპერატურა', en: 'Low temperature' } },
                                { id: 'liquid-nitrogen', name: { ka: 'თხევადი აზოტი', en: 'Liquid nitrogen' } },
                                { id: 'liquid-helium', name: { ka: 'თხევადი ჰელიუმი', en: 'Liquid helium' } },
                                { id: 'cryogenics-term', name: { ka: 'კრიოგენიკა', en: 'Cryogenics' } },
                                { id: 'cryosurgery', name: { ka: 'კრიოქირურგია', en: 'Cryosurgery' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'applied-interdisciplinary-physics',
                    name: { ka: '⚙️ გამოყენებითი და ინტერდისციპლინარული ფიზიკა', en: '⚙️ Applied and Interdisciplinary Physics' },
                    subSections: [
                        {
                            id: 'biophysics',
                            name: { ka: '🧬 ბიოფიზიკა', en: '🧬 Biophysics' },
                            keywords: [
                                { id: 'bioelectricity', name: { ka: 'ბიოელექტრობა', en: 'Bioelectricity' } },
                                { id: 'biomechanics', name: { ka: 'ბიომექანიკა', en: 'Biomechanics' } },
                                { id: 'biophotonics', name: { ka: 'ბიოფოტონიკა', en: 'Biophotonics' } },
                                { id: 'membrane-physics', name: { ka: 'მემბრანის ფიზიკა', en: 'Membrane physics' } },
                                { id: 'molecular-dynamics', name: { ka: 'მოლეკულური დინამიკა', en: 'Molecular dynamics' } },
                                { id: 'neurophysics', name: { ka: 'ნეიროფიზიკა', en: 'Neurophysics' } },
                                { id: 'protein-structure-bio', name: { ka: 'ცილის სტრუქტურა', en: 'Protein structure' } },
                                { id: 'bioinformatics-physics', name: { ka: 'ბიოინფორმატიკა', en: 'Bioinformatics' } },
                            ]
                        },
                        {
                            id: 'medical-physics',
                            name: { ka: '⚕️ სამედიცინო ფიზიკა', en: '⚕️ Medical Physics' },
                            keywords: [
                                { id: 'nuclear-medicine', name: { ka: 'ბირთვული მედიცინა', en: 'Nuclear medicine' } },
                                { id: 'ct', name: { ka: 'კომპიუტერული ტომოგრაფია (CT)', en: 'Computed tomography (CT)' } },
                                { id: 'mri', name: { ka: 'მაგნიტურ-რეზონანსული ტომოგრაფია (MRI)', en: 'Magnetic resonance imaging (MRI)' } },
                                { id: 'pet', name: { ka: 'პოზიტრონ-ემისიური ტომოგრაფია (PET)', en: 'Positron emission tomography (PET)' } },
                                { id: 'x-ray', name: { ka: 'რენტგენი', en: 'X-ray' } },
                                { id: 'radiation-therapy', name: { ka: 'სხივური თერაპია', en: 'Radiation therapy' } },
                                { id: 'ultrasound-diagnostics', name: { ka: 'ულტრაბგერითი დიაგნოსტიკა', en: 'Ultrasound diagnostics' } },
                                { id: 'dosimetry', name: { ka: 'დოზიმეტრია', en: 'Dosimetry' } },
                            ]
                        },
                        {
                            id: 'accelerator-physics',
                            name: { ka: '🚀 ამაჩქარებლების ფიზიკა', en: '🚀 Accelerator Physics' },
                            keywords: [
                                { id: 'lhc', name: { ka: 'დიდი ადრონული კოლაიდერი (LHC)', en: 'Large Hadron Collider (LHC)' } },
                                { id: 'particle-accelerator', name: { ka: 'ნაწილაკების ამაჩქარებელი', en: 'Particle accelerator' } },
                                { id: 'particle-detector', name: { ka: 'ნაწილაკების დეტექტორი', en: 'Particle detector' } },
                                { id: 'synchrotron-acc', name: { ka: 'სინქროტრონი', en: 'Synchrotron' } },
                                { id: 'cyclotron', name: { ka: 'ციკლოტრონი', en: 'Cyclotron' } },
                                { id: 'photon-accelerator', name: { ka: 'ფოტონის ამაჩქარებელი', en: 'Photon accelerator' } },
                            ]
                        },
                        {
                            id: 'geophysics',
                            name: { ka: '🌍 გეოფიზიკა', en: '🌍 Geophysics' },
                            keywords: [
                                { id: 'gravimetry', name: { ka: 'გრავიმეტრია', en: 'Gravimetry' } },
                                { id: 'earths-magnetic-field', name: { ka: 'დედამიწის მაგნიტური ველი', en: 'Earth\'s magnetic field' } },
                                { id: 'mantle-convection', name: { ka: 'მანტიის კონვექცია', en: 'Mantle convection' } },
                                { id: 'seismology-geo', name: { ka: 'სეისმოლოგია', en: 'Seismology' } },
                                { id: 'plate-tectonics', name: { ka: 'ფილების ტექტონიკა', en: 'Plate tectonics' } },
                                { id: 'geomagnetic-storm', name: { ka: 'გეომაგნიტური შტორმი', en: 'Geomagnetic storm' } },
                            ]
                        },
                        {
                            id: 'econophysics',
                            name: { ka: '💸 ეკონოფიზიკა', en: '💸 Econophysics' },
                            keywords: [
                                { id: 'agent-based-models', name: { ka: 'აგენტზე დაფუძნებული მოდელები', en: 'Agent-based models' } },
                                { id: 'stochastic-process', name: { ka: 'სტოქასტური პროცესი', en: 'Stochastic process' } },
                                { id: 'financial-market', name: { ka: 'ფინანსური ბაზარი', en: 'Financial market' } },
                                { id: 'chaos-theory-in-economics', name: { ka: 'ქაოსის თეორია ეკონომიკაში', en: 'Chaos theory in economics' } },
                                { id: 'random-walk', name: { ka: 'შემთხვევითი ხეტიალი', en: 'Random walk' } },
                                { id: 'financial-risk', name: { ka: 'ფინანსური რისკი', en: 'Financial risk' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'chemistry',
            name: { ka: '🧪 ქიმია', en: '🧪 Chemistry' },
            sections: [
                {
                    id: 'core-fields-of-chemistry',
                    name: { ka: '⚗️ ქიმიის ძირითადი დარგები', en: '⚗️ Core Fields of Chemistry' },
                    subSections: [
                        {
                            id: 'inorganic-chemistry',
                            name: { ka: '⚙️ არაორგანული ქიმია', en: '⚙️ Inorganic Chemistry' },
                            keywords: [
                                { id: 'actinides', name: { ka: 'აქტინოიდები', en: 'Actinides' } },
                                { id: 'nonmetals', name: { ka: 'არალითონები', en: 'Nonmetals' } },
                                { id: 'transition-metals', name: { ka: 'გარდამავალი მეტალები', en: 'Transition metals' } },
                                { id: 'noble-gases', name: { ka: 'ინერტული აირები', en: 'Noble gases' } },
                                { id: 'coordination-complexes', name: { ka: 'კოორდინაციული კომპლექსები', en: 'Coordination complexes' } },
                                { id: 'lanthanides', name: { ka: 'ლანთანოიდები', en: 'Lanthanides' } },
                                { id: 'ligand-chem', name: { ka: 'ლიგანდი', en: 'Ligand' } },
                                { id: 'periodic-table', name: { ka: 'პერიოდული სისტემა', en: 'Periodic table' } },
                                { id: 'alkali-metals', name: { ka: 'ტუტე ლითონები', en: 'Alkali metals' } },
                                { id: 'alkaline-earth-metals', name: { ka: 'ტუტე მიწა ლითონები', en: 'Alkaline earth metals' } },
                                { id: 'chelate', name: { ka: 'ქელატი', en: 'Chelate' } },
                                { id: 'halogens', name: { ka: 'ჰალოგენები', en: 'Halogens' } },
                                { id: 'oxidation-state', name: { ka: 'ჟანგვის ხარისხი', en: 'Oxidation state' } },
                                { id: 'electrochemistry', name: { ka: 'ელექტროქიმია', en: 'Electrochemistry' } },
                            ]
                        },
                        {
                            id: 'organic-chemistry',
                            name: { ka: '🧪 ორგანული ქიმია', en: '🧪 Organic Chemistry' },
                            keywords: [
                                { id: 'alkane', name: { ka: 'ალკანი', en: 'Alkane' } },
                                { id: 'alkene', name: { ka: 'ალკენი', en: 'Alkene' } },
                                { id: 'alkyne', name: { ka: 'ალკინი', en: 'Alkyne' } },
                                { id: 'aromatic-compounds', name: { ka: 'არომატული ნაერთები', en: 'Aromatic compounds' } },
                                { id: 'isomer', name: { ka: 'იზომერი (სტრუქტურული, სტერეოიზომერი)', en: 'Isomer (structural, stereoisomer)' } },
                                { id: 'hydrocarbons', name: { ka: 'ნახშირწყალბადები', en: 'Hydrocarbons' } },
                                { id: 'organic-synthesis', name: { ka: 'ორგანული სინთეზი', en: 'Organic synthesis' } },
                                { id: 'polymer-chem', name: { ka: 'პოლიმერი', en: 'Polymer' } },
                                { id: 'reaction-mechanism', name: { ka: 'რეაქციის მექანიზმი (ჩანაცვლება, მიერთება, ელიმინირება)', en: 'Reaction mechanism (substitution, addition, elimination)' } },
                                { id: 'alcohols', name: { ka: 'სპირტები', en: 'Alcohols' } },
                                { id: 'stereochemistry', name: { ka: 'სტერეოქიმია', en: 'Stereochemistry' } },
                                { id: 'functional-group', name: { ka: 'ფუნქციური ჯგუფი', en: 'Functional group' } },
                                { id: 'chirality', name: { ka: 'ქირალობა', en: 'Chirality' } },
                            ]
                        },
                        {
                            id: 'physical-chemistry',
                            name: { ka: '🌡️ ფიზიკური ქიმია', en: '🌡️ Physical Chemistry' },
                            keywords: [
                                { id: 'activation-energy', name: { ka: 'აქტივაციის ენერგია', en: 'Activation energy' } },
                                { id: 'gibbs-free-energy', name: { ka: 'გიბსის ენერგია', en: 'Gibbs free energy' } },
                                { id: 'electrolysis', name: { ka: 'ელექტროლიზი', en: 'Electrolysis' } },
                                { id: 'enthalpy-chem', name: { ka: 'ენთალპია', en: 'Enthalpy' } },
                                { id: 'entropy-chem', name: { ka: 'ენტროპია', en: 'Entropy' } },
                                { id: 'catalysis', name: { ka: 'კატალიზი', en: 'Catalysis' } },
                                { id: 'quantum-chemistry', name: { ka: 'კვანტური ქიმია', en: 'Quantum chemistry' } },
                                { id: 'kinetics', name: { ka: 'კინეტიკა', en: 'Kinetics' } },
                                { id: 'corrosion', name: { ka: 'კოროზია', en: 'Corrosion' } },
                                { id: 'ph', name: { ka: 'pH', en: 'pH' } },
                                { id: 'reaction-rate', name: { ka: 'რეაქციის სიჩქარე', en: 'Reaction rate' } },
                                { id: 'spectroscopy-chem', name: { ka: 'სპექტროსკოპია (IR, UV, NMR)', en: 'Spectroscopy (IR, UV, NMR)' } },
                                { id: 'thermodynamics-chem', name: { ka: 'თერმოდინამიკა', en: 'Thermodynamics' } },
                                { id: 'photochemistry', name: { ka: 'ფოტოქიმია', en: 'Photochemistry' } },
                                { id: 'chemical-equilibrium', name: { ka: 'ქიმიური წონასწორობა', en: 'Chemical equilibrium' } },
                            ]
                        },
                        {
                            id: 'analytical-chemistry',
                            name: { ka: '📊 ანალიზური ქიმია', en: '📊 Analytical Chemistry' },
                            keywords: [
                                { id: 'gravimetry-chem', name: { ka: 'გრავიმეტრია', en: 'Gravimetry' } },
                                { id: 'indicator', name: { ka: 'ინდიკატორი', en: 'Indicator' } },
                                { id: 'instrumental-analysis', name: { ka: 'ინსტრუმენტული ანალიზი', en: 'Instrumental analysis' } },
                                { id: 'concentration', name: { ka: 'კონცენტრაცია', en: 'Concentration' } },
                                { id: 'mass-spectrometry', name: { ka: 'მას-სპექტრომეტრია', en: 'Mass spectrometry' } },
                                { id: 'molarity', name: { ka: 'მოლარობა', en: 'Molarity' } },
                                { id: 'quantitative-analysis', name: { ka: 'რაოდენობრივი ანალიზი', en: 'Quantitative analysis' } },
                                { id: 'sample-chem', name: { ka: 'სინჯი', en: 'Sample' } },
                                { id: 'titration', name: { ka: 'ტიტვრა', en: 'Titration' } },
                                { id: 'chromatography', name: { ka: 'ქრომატოგრაფია', en: 'Chromatography' } },
                                { id: 'qualitative-analysis', name: { ka: 'ხარისხობრივი ანალიზი', en: 'Qualitative analysis' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'interdisciplinary-applied-chemistry',
                    name: { ka: '🧬 ინტერდისციპლინარული და გამოყენებითი ქიმია', en: '🧬 Interdisciplinary and Applied Chemistry' },
                    subSections: [
                        {
                            id: 'biochemistry-chem',
                            name: { ka: '🧬 ბიოქიმია (სიცოცხლის ქიმია)', en: '🧬 Biochemistry (Chemistry of Life)' },
                            keywords: [
                                { id: 'amino-acid-chem', name: { ka: 'ამინომჟავა', en: 'Amino acid' } },
                                { id: 'gene-chem', name: { ka: 'გენი', en: 'Gene' } },
                                { id: 'dna-rna', name: { ka: 'დნმ/რნმ', en: 'DNA/RNA' } },
                                { id: 'vitamin-chem', name: { ka: 'ვიტამინი', en: 'Vitamin' } },
                                { id: 'clinical-biochemistry', name: { ka: 'კლინიკური ბიოქიმია', en: 'Clinical biochemistry' } },
                                { id: 'lipid-chem', name: { ka: 'ლიპიდი', en: 'Lipid' } },
                                { id: 'metabolism-chem', name: { ka: 'მეტაბოლიზმი', en: 'Metabolism' } },
                                { id: 'carbohydrate-chem', name: { ka: 'ნახშირწყალი', en: 'Carbohydrate' } },
                                { id: 'nucleic-acid-chem', name: { ka: 'ნუკლეინის მჟავა', en: 'Nucleic acid' } },
                                { id: 'transcription-translation', name: { ka: 'ტრანსკრიფცია/ტრანსლაცია', en: 'Transcription/translation' } },
                                { id: 'enzyme-chem', name: { ka: 'ფერმენტი', en: 'Enzyme' } },
                                { id: 'hormone-chem', name: { ka: 'ჰორმონი', en: 'Hormone' } },
                                { id: 'protein-chem', name: { ka: 'ცილა', en: 'Protein' } },
                                { id: 'enzyme-kinetics-chem', name: { ka: 'ფერმენტული კინეტიკა', en: 'Enzyme kinetics' } },
                            ]
                        },
                        {
                            id: 'materials-science-nanochemistry',
                            name: { ka: '🔬 მასალათმცოდნეობა და ნანოქიმია', en: '🔬 Materials Science and Nanochemistry' },
                            keywords: [
                                { id: 'graphene', name: { ka: 'გრაფენი', en: 'Graphene' } },
                                { id: 'ceramics', name: { ka: 'კერამიკა', en: 'Ceramics' } },
                                { id: 'composite', name: { ka: 'კომპოზიტი', en: 'Composite' } },
                                { id: 'nanoparticle', name: { ka: 'ნანონაწილაკი', en: 'Nanoparticle' } },
                                { id: 'nanotechnology', name: { ka: 'ნანოტექნოლოგია', en: 'Nanotechnology' } },
                                { id: 'alloy', name: { ka: 'შენადნობი', en: 'Alloy' } },
                                { id: 'smart-materials', name: { ka: 'ჭკვიანი მასალები', en: 'Smart materials' } },
                                { id: 'biomaterials', name: { ka: 'ბიომასალები', en: 'Biomaterials' } },
                                { id: 'crystallography', name: { ka: 'კრისტალოგრაფია', en: 'Crystallography' } },
                            ]
                        },
                        {
                            id: 'pharmaceutical-chemistry',
                            name: { ka: '💊 ფარმაცევტული ქიმია', en: '💊 Pharmaceutical Chemistry' },
                            keywords: [
                                { id: 'active-ingredient', name: { ka: 'აქტიური ნივთიერება', en: 'Active ingredient' } },
                                { id: 'toxicology-chem', name: { ka: 'ტოქსიკოლოგია', en: 'Toxicology' } },
                                { id: 'pharmacodynamics', name: { ka: 'ფარმაკოდინამიკა', en: 'Pharmacodynamics' } },
                                { id: 'pharmacokinetics', name: { ka: 'ფარმაკოკინეტიკა', en: 'Pharmacokinetics' } },
                                { id: 'drug', name: { ka: 'წამალი', en: 'Drug' } },
                                { id: 'drug-synthesis', name: { ka: 'წამლის სინთეზი', en: 'Drug synthesis' } },
                                { id: 'molecular-docking', name: { ka: 'მოლეკულური დოკინგი', en: 'Molecular docking' } },
                            ]
                        },
                        {
                            id: 'environmental-chemistry',
                            name: { ka: '♻️ გარემოს ქიმია (ეკოქიმია)', en: '♻️ Environmental Chemistry (Ecochemistry)' },
                            keywords: [
                                { id: 'pollutant-chem', name: { ka: 'დამაბინძურებელი', en: 'Pollutant' } },
                                { id: 'acid-rain-chem', name: { ka: 'მჟავა წვიმა', en: 'Acid rain' } },
                                { id: 'ozone-hole', name: { ka: 'ოზონის ხვრელი', en: 'Ozone hole' } },
                                { id: 'pesticide-chem', name: { ka: 'პესტიციდი', en: 'Pesticide' } },
                                { id: 'toxin', name: { ka: 'ტოქსინი', en: 'Toxin' } },
                                { id: 'water-purification', name: { ka: 'წყლის გაწმენდა', en: 'Water purification' } },
                                { id: 'waste-management-chem', name: { ka: 'ნარჩენების მართვა', en: 'Waste management' } },
                            ]
                        },
                        {
                            id: 'green-chemistry',
                            name: { ka: '🌿 მწვანე ქიმია (მდგრადი ქიმია)', en: '🌿 Green Chemistry (Sustainable Chemistry)' },
                            keywords: [
                                { id: 'atom-economy', name: { ka: 'ატომური ეკონომია', en: 'Atom economy' } },
                                { id: 'biodegradable-polymers', name: { ka: 'ბიოდეგრადირებადი პოლიმერები', en: 'Biodegradable polymers' } },
                                { id: 'renewable-resources', name: { ka: 'განახლებადი რესურსები', en: 'Renewable resources' } },
                                { id: 'sustainability', name: { ka: 'მდგრადობა', en: 'Sustainability' } },
                                { id: 'safe-solvents', name: { ka: 'უსაფრთხო გამხსნელები', en: 'Safe solvents' } },
                                { id: 'energy-efficiency', name: { ka: 'ენერგოეფექტურობა', en: 'Energy efficiency' } },
                            ]
                        },
                        {
                            id: 'food-chemistry',
                            name: { ka: '🍎 საკვები პროდუქტების ქიმია', en: '🍎 Food Chemistry' },
                            keywords: [
                                { id: 'antioxidant', name: { ka: 'ანტიოქსიდანტი', en: 'Antioxidant' } },
                                { id: 'flavoring', name: { ka: 'არომატიზატორი', en: 'Flavoring' } },
                                { id: 'emulsifier', name: { ka: 'ემულგატორი', en: 'Emulsifier' } },
                                { id: 'preservative', name: { ka: 'კონსერვანტი', en: 'Preservative' } },
                                { id: 'food-additive', name: { ka: 'საკვები დანამატი', en: 'Food additive' } },
                                { id: 'fermentation-food', name: { ka: 'ფერმენტაცია', en: 'Fermentation' } },
                                { id: 'food-safety', name: { ka: 'საკვების უსაფრთხოება', en: 'Food safety' } },
                            ]
                        },
                        {
                            id: 'computational-theoretical-chemistry',
                            name: { ka: '💻 გამოთვლითი და თეორიული ქიმია', en: '💻 Computational and Theoretical Chemistry' },
                            keywords: [
                                { id: 'docking', name: { ka: 'დოკინგი', en: 'Docking' } },
                                { id: 'quantum-chemical-calculations', name: { ka: 'კვანტურ-ქიმიური გამოთვლები', en: 'Quantum chemical calculations' } },
                                { id: 'computer-simulation', name: { ka: 'კომპიუტერული სიმულაცია', en: 'Computer simulation' } },
                                { id: 'molecular-dynamics-chem', name: { ka: 'მოლეკულური დინამიკა', en: 'Molecular dynamics' } },
                                { id: 'molecular-modeling-chem', name: { ka: 'მოლეკულური მოდელირება', en: 'Molecular modeling' } },
                                { id: 'distillation', name: { ka: 'დისტილაცია', en: 'Distillation' } },
                            ]
                        },
                        {
                            id: 'geochemistry-cosmochemistry',
                            name: { ka: '🌍 გეოქიმია და კოსმოქიმია', en: '🌍 Geochemistry and Cosmochemistry' },
                            keywords: [
                                { id: 'isotopic-dating', name: { ka: 'იზოტოპური დათარიღება', en: 'Isotopic dating' } },
                                { id: 'meteorite-chem', name: { ka: 'მეტეორიტი', en: 'Meteorite' } },
                                { id: 'mineral-formation', name: { ka: 'მინერალების წარმოქმნა', en: 'Mineral formation' } },
                                { id: 'rock-cycle', name: { ka: 'ქანების ციკლი', en: 'Rock cycle' } },
                                { id: 'geochemical-analysis', name: { ka: 'გეოქიმიური ანალიზი', en: 'Geochemical analysis' } },
                            ]
                        },
                        {
                            id: 'nuclear-chemistry',
                            name: { ka: '☢️ ბირთვული ქიმია (რადიოქიმია)', en: '☢️ Nuclear Chemistry (Radiochemistry)' },
                            keywords: [
                                { id: 'nuclear-reactor', name: { ka: 'ბირთვული რეაქტორი', en: 'Nuclear reactor' } },
                                { id: 'radioactive-decay', name: { ka: 'რადიოაქტიური დაშლა', en: 'Radioactive decay' } },
                                { id: 'radioisotope', name: { ka: 'რადიოიზოტოპი', en: 'Radioisotope' } },
                                { id: 'radiometric-dating', name: { ka: 'რადიოაქტიური დათარიღება', en: 'Radiometric dating' } },
                                { id: 'nuclear-radiation', name: { ka: 'ბირთვული გამოსხივება', en: 'Nuclear radiation' } },
                            ]
                        },
                        {
                            id: 'petrochemistry',
                            name: { ka: '⛽ ნავთობქიმია', en: '⛽ Petrochemistry' },
                            keywords: [
                                { id: 'gasoline', name: { ka: 'ბენზინი', en: 'Gasoline' } },
                                { id: 'natural-gas-petro', name: { ka: 'ბუნებრივი აირი', en: 'Natural gas' } },
                                { id: 'refining', name: { ka: 'გადამუშავება', en: 'Refining' } },
                                { id: 'diesel', name: { ka: 'დიზელი', en: 'Diesel' } },
                                { id: 'cracking', name: { ka: 'კრეკინგი', en: 'Cracking' } },
                                { id: 'petroleum-petro', name: { ka: 'ნავთობი', en: 'Petroleum' } },
                                { id: 'polymerization', name: { ka: 'პოლიმერიზაცია', en: 'Polymerization' } },
                            ]
                        },
                        {
                            id: 'chemical-engineering',
                            name: { ka: '🏭 ქიმიური ინჟინერია', en: '🏭 Chemical Engineering' },
                            keywords: [
                                { id: 'distillation-eng', name: { ka: 'დისტილაცია', en: 'Distillation' } },
                                { id: 'extraction', name: { ka: 'ექსტრაქცია', en: 'Extraction' } },
                                { id: 'catalytic-processes', name: { ka: 'კატალიზური პროცესები', en: 'Catalytic processes' } },
                                { id: 'mass-transfer', name: { ka: 'მასის გადაცემა', en: 'Mass transfer' } },
                                { id: 'reactor', name: { ka: 'რეაქტორი', en: 'Reactor' } },
                                { id: 'heat-transfer', name: { ka: 'სითბოს გადაცემა', en: 'Heat transfer' } },
                                { id: 'chemical-process', name: { ka: 'ქიმიური პროცესი', en: 'Chemical process' } },
                                { id: 'chemical-technology', name: { ka: 'ქიმიური ტექნოლოგია', en: 'Chemical technology' } },
                            ]
                        }
                    ]
                }
            ]
        }
    ],
};


