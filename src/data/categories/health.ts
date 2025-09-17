import { Category } from '../types';

export const HEALTH_CATEGORY: Category = {
    id: 'health',
    name: { ka: '🧑‍⚕️❤️ ადამიანი და ჯანმრთელობა', en: '🧑‍⚕️❤️ Human and Health' },
    icon: '🧑‍⚕️',
    subCategories: [
        {
            id: 'human-biology',
            name: { ka: '🧬 ადამიანის ბიოლოგია', en: '🧬 Human Biology' },
            sections: [
                {
                    id: 'structure-function',
                    name: { ka: '🔬 I. სტრუქტურა და ფუნქცია', en: '🔬 I. Structure and Function' },
                    subSections: [
                        {
                            id: 'anatomy',
                            name: { ka: 'ანატომია (მაკროსკოპული, მიკროსკოპული)', en: 'Anatomy (Macroscopic, Microscopic)' },
                            keywords: [
                                { id: 'artery', name: { ka: 'არტერია', en: 'Artery' } },
                                { id: 'heart', name: { ka: 'გული', en: 'Heart' } },
                                { id: 'spleen', name: { ka: 'ელენთა', en: 'Spleen' } },
                                { id: 'vein', name: { ka: 'ვენა', en: 'Vein' } },
                                { id: 'organ', name: { ka: 'ორგანო', en: 'Organ' } },
                                { id: 'organ-system', name: { ka: 'ორგანოთა სისტემა', en: 'Organ System' } },
                                { id: 'digestive-system', name: { ka: 'საჭმლის მომნელებელი', en: 'Digestive' } },
                                { id: 'respiratory-system', name: { ka: 'სასუნთქი', en: 'Respiratory' } },
                                { id: 'circulatory-system', name: { ka: 'სისხლისმიმოქცევის', en: 'Circulatory' } },
                                { id: 'nervous-system', name: { ka: 'ნერვული', en: 'Nervous' } },
                                { id: 'endocrine-system', name: { ka: 'ენდოკრინული', en: 'Endocrine' } },
                                { id: 'musculoskeletal-system', name: { ka: 'საყრდენ-მამოძრავებელი', en: 'Musculoskeletal' } },
                                { id: 'excretory-system', name: { ka: 'გამომყოფი', en: 'Excretory' } },
                                { id: 'reproductive-system', name: { ka: 'რეპროდუქციული', en: 'Reproductive' } },
                                { id: 'lymphatic-system', name: { ka: 'ლიმფური', en: 'Lymphatic' } },
                                { id: 'immune-system', name: { ka: 'იმუნური', en: 'Immune' } },
                                { id: 'skin', name: { ka: 'კანი', en: 'Skin' } },
                                { id: 'capillary', name: { ka: 'კაპილარი', en: 'Capillary' } },
                                { id: 'muscle', name: { ka: 'კუნთი', en: 'Muscle' } },
                                { id: 'stomach', name: { ka: 'კუჭი', en: 'Stomach' } },
                                { id: 'lymph-node', name: { ka: 'ლიმფური კვანძი', en: 'Lymph Node' } },
                                { id: 'gallbladder', name: { ka: 'ნაღვლის ბუშტი', en: 'Gallbladder' } },
                                { id: 'joint', name: { ka: 'სახსარი', en: 'Joint' } },
                                { id: 'brain', name: { ka: 'ტვინი', en: 'Brain' } },
                                { id: 'topographic-anatomy', name: { ka: 'ტოპოგრაფიული ანატომია', en: 'Topographic Anatomy' } },
                                { id: 'cell', name: { ka: 'უჯრედი', en: 'Cell' } },
                                { id: 'lungs', name: { ka: 'ფილტვები', en: 'Lungs' } },
                                { id: 'tissue', name: { ka: 'ქსოვილი (ეპითელური, შემაერთებელი, კუნთოვანი, ნერვული)', en: 'Tissue (Epithelial, Connective, Muscular, Nervous)' } },
                                { id: 'liver', name: { ka: 'ღვიძლი', en: 'Liver' } },
                                { id: 'skeleton', name: { ka: 'ჩონჩხი', en: 'Skeleton' } },
                                { id: 'bone', name: { ka: 'ძვალი', en: 'Bone' } },
                                { id: 'kidney', name: { ka: 'თირკმელი', en: 'Kidney' } },
                                { id: 'histology', name: { ka: 'ჰისტოლოგია', en: 'Histology' } },
                                { id: 'cytology', name: { ka: 'ციტოლოგია', en: 'Cytology' } },
                                { id: 'fascia', name: { ka: 'ფასცია', en: 'Fascia' } },
                                { id: 'tendon', name: { ka: 'მყესი', en: 'Tendon' } },
                            ]
                        },
                        {
                            id: 'physiology',
                            name: { ka: 'ფიზიოლოგია', en: 'Physiology' },
                            keywords: [
                                { id: 'absorption', name: { ka: 'აბსორბცია', en: 'Absorption' } },
                                { id: 'blood-pressure', name: { ka: 'არტერიული წნევა', en: 'Blood Pressure' } },
                                { id: 'excretion', name: { ka: 'გამოყოფა (ექსკრეცია)', en: 'Excretion' } },
                                { id: 'heart-rate-regulation', name: { ka: 'გულისცემის რეგულაცია', en: 'Heart Rate Regulation' } },
                                { id: 'endocrine-control', name: { ka: 'ენდოკრინული კონტროლი', en: 'Endocrine Control' } },
                                { id: 'muscle-contraction', name: { ka: 'კუნთის შეკუმშვა', en: 'Muscle Contraction' } },
                                { id: 'metabolism', name: { ka: 'მეტაბოლიზმი', en: 'Metabolism' } },
                                { id: 'nerve-impulse', name: { ka: 'ნერვული იმპულსი', en: 'Nerve Impulse' } },
                                { id: 'receptor', name: { ka: 'რეცეპტორი', en: 'Receptor' } },
                                { id: 'digestion', name: { ka: 'საჭმლის მონელება', en: 'Digestion' } },
                                { id: 'blood-circulation', name: { ka: 'სისხლის მიმოქცევა', en: 'Blood Circulation' } },
                                { id: 'body-temperature', name: { ka: 'სხეულის ტემპერატურა', en: 'Body Temperature' } },
                                { id: 'respiration', name: { ka: 'სუნთქვა', en: 'Respiration' } },
                                { id: 'feedback-mechanism', name: { ka: 'უკუკავშირის მექანიზმი (დადებითი/უარყოფითი)', en: 'Feedback Mechanism (Positive/Negative)' } },
                                { id: 'homeostasis', name: { ka: 'ჰომეოსტაზი', en: 'Homeostasis' } },
                                { id: 'osmoregulation', name: { ka: 'ოსმორეგულაცია', en: 'Osmoregulation' } },
                                { id: 'gas-exchange', name: { ka: 'გაზთა ცვლა', en: 'Gas Exchange' } },
                            ]
                        },
                        {
                            id: 'pathophysiology',
                            name: { ka: 'პათოფიზიოლოგია', en: 'Pathophysiology' },
                            keywords: [
                                { id: 'inflammation', name: { ka: 'ანთება', en: 'Inflammation' } },
                                { id: 'atrophy', name: { ka: 'ატროფია', en: 'Atrophy' } },
                                { id: 'disease', name: { ka: 'დაავადება', en: 'Disease' } },
                                { id: 'imbalance', name: { ka: 'დისბალანსი', en: 'Imbalance' } },
                                { id: 'thrombosis', name: { ka: 'თრომბოზი', en: 'Thrombosis' } },
                                { id: 'infection', name: { ka: 'ინფექცია', en: 'Infection' } },
                                { id: 'ischemia', name: { ka: 'იშემია', en: 'Ischemia' } },
                                { id: 'necrosis', name: { ka: 'ნეკროზი', en: 'Necrosis' } },
                                { id: 'pathology', name: { ka: 'პათოლოგია', en: 'Pathology' } },
                                { id: 'symptom', name: { ka: 'სიმპტომი', en: 'Symptom' } },
                                { id: 'syndrome', name: { ka: 'სინდრომი', en: 'Syndrome' } },
                                { id: 'tumor', name: { ka: 'სიმსივნე', en: 'Tumor' } },
                                { id: 'failure', name: { ka: 'უკმარისობა (გულის, ფილტვის, თირკმლის)', en: 'Failure (Heart, Lung, Kidney)' } },
                                { id: 'fever', name: { ka: 'ცხელება', en: 'Fever' } },
                                { id: 'shock', name: { ka: 'შოკი', en: 'Shock' } },
                                { id: 'edema', name: { ka: 'შეშუპება', en: 'Edema' } },
                                { id: 'hypertrophy', name: { ka: 'ჰიპერტროფია', en: 'Hypertrophy' } },
                                { id: 'hypoxia', name: { ka: 'ჰიპოქსია', en: 'Hypoxia' } },
                                { id: 'pain', name: { ka: 'ტკივილი', en: 'Pain' } },
                            ]
                        },
                        {
                            id: 'biomechanics',
                            name: { ka: 'ბიომექანიკა', en: 'Biomechanics' },
                            keywords: [
                                { id: 'balance', name: { ka: 'ბალანსი', en: 'Balance' } },
                                { id: 'lever', name: { ka: 'ბერკეტი', en: 'Lever' } },
                                { id: 'load', name: { ka: 'დატვირთვა', en: 'Load' } },
                                { id: 'deformation', name: { ka: 'დეფორმაცია', en: 'Deformation' } },
                                { id: 'kinetics', name: { ka: 'კინეტიკა', en: 'Kinetics' } },
                                { id: 'kinematics', name: { ka: 'კინემატიკა', en: 'Kinematics' } },
                                { id: 'coordination', name: { ka: 'კოორდინაცია', en: 'Coordination' } },
                                { id: 'muscular-force', name: { ka: 'კუნთოვანი ძალა', en: 'Muscular Force' } },
                                { id: 'axis-of-motion', name: { ka: 'მოძრაობის ღერძი', en: 'Axis of Motion' } },
                                { id: 'tendon-biomechanics', name: { ka: 'მყესი', en: 'Tendon' } },
                                { id: 'posture', name: { ka: 'პოზა', en: 'Posture' } },
                                { id: 'proprioception', name: { ka: 'პროპრიოცეფცია', en: 'Proprioception' } },
                                { id: 'center-of-gravity', name: { ka: 'სიმძიმის ცენტრი', en: 'Center of Gravity' } },
                                { id: 'gait', name: { ka: 'სიარულის მანერა', en: 'Gait' } },
                                { id: 'joint-biomechanics', name: { ka: 'სახსარი', en: 'Joint' } },
                                { id: 'bone-density', name: { ka: 'ძვლის სიმკვრივე', en: 'Bone Density' } },
                                { id: 'ligament', name: { ka: 'იოგი', en: 'Ligament' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'genetic-code-development',
                    name: { ka: '🧬 II. გენეტიკური კოდი და განვითარება', en: '🧬 II. Genetic Code and Development' },
                    subSections: [
                        {
                            id: 'genetics',
                            name: { ka: 'გენეტიკა', en: 'Genetics' },
                            keywords: [
                                { id: 'allele', name: { ka: 'ალელი', en: 'Allele' } },
                                { id: 'gene', name: { ka: 'გენი', en: 'Gene' } },
                                { id: 'genetic-counseling', name: { ka: 'გენეტიკური კონსულტაცია', en: 'Genetic Counseling' } },
                                { id: 'genotype', name: { ka: 'გენოტიპი', en: 'Genotype' } },
                                { id: 'dna', name: { ka: 'დნმ', en: 'DNA' } },
                                { id: 'dominant', name: { ka: 'დომინანტური', en: 'Dominant' } },
                                { id: 'karyotype', name: { ka: 'კარიოტიპი', en: 'Karyotype' } },
                                { id: 'hereditary-disease', name: { ka: 'მემკვიდრეობითი დაავადება', en: 'Hereditary Disease' } },
                                { id: 'mutation', name: { ka: 'მუტაცია', en: 'Mutation' } },
                                { id: 'recessive', name: { ka: 'რეცესიული', en: 'Recessive' } },
                                { id: 'sex-linked-inheritance', name: { ka: 'სქესთან შეჭიდული მემკვიდრეობა', en: 'Sex-linked Inheritance' } },
                                { id: 'phenotype', name: { ka: 'ფენოტიპი', en: 'Phenotype' } },
                                { id: 'chromosome', name: { ka: 'ქრომოსომა', en: 'Chromosome' } },
                            ]
                        },
                        {
                            id: 'genomics-epigenetics',
                            name: { ka: 'გენომიკა და ეპიგენეტიკა', en: 'Genomics and Epigenetics' },
                            keywords: [
                                { id: 'genetic-marker', name: { ka: 'გენეტიკური მარკერი', en: 'Genetic Marker' } },
                                { id: 'genome', name: { ka: 'გენომი', en: 'Genome' } },
                                { id: 'genome-map', name: { ka: 'გენომის რუკა', en: 'Genome Map' } },
                                { id: 'gene-expression', name: { ka: 'გენის ექსპრესია', en: 'Gene Expression' } },
                                { id: 'gene-therapy', name: { ka: 'გენური თერაპია', en: 'Gene Therapy' } },
                                { id: 'dna-methylation', name: { ka: 'დნმ-ის მეთილირება', en: 'DNA Methylation' } },
                                { id: 'dna-sequencing', name: { ka: 'დნმ-ის სეკვენირება', en: 'DNA Sequencing' } },
                                { id: 'epigenetics', name: { ka: 'ეპიგენეტიკა', en: 'Epigenetics' } },
                                { id: 'snp', name: { ka: 'სინგლ-ნუკლეოტიდური პოლიმორფიზმი (SNP)', en: 'Single-Nucleotide Polymorphism (SNP)' } },
                                { id: 'histone-modification', name: { ka: 'ჰისტონების მოდიფიკაცია', en: 'Histone Modification' } },
                            ]
                        },
                        {
                            id: 'developmental-biology',
                            name: { ka: 'განვითარების ბიოლოგია (ემბრიოლოგია)', en: 'Developmental Biology (Embryology)' },
                            keywords: [
                                { id: 'fertilization', name: { ka: 'განაყოფიერება', en: 'Fertilization' } },
                                { id: 'growth', name: { ka: 'ზრდა', en: 'Growth' } },
                                { id: 'zygote', name: { ka: 'ზიგოტა', en: 'Zygote' } },
                                { id: 'fetus', name: { ka: 'ნაყოფი', en: 'Fetus' } },
                                { id: 'neurulation', name: { ka: 'ნერვული მილის ფორმირება', en: 'Neurulation' } },
                                { id: 'organogenesis', name: { ka: 'ორგანოგენეზი', en: 'Organogenesis' } },
                                { id: 'placenta', name: { ka: 'პლაცენტა', en: 'Placenta' } },
                                { id: 'puberty', name: { ka: 'სქესობრივი მომწიფება', en: 'Puberty' } },
                                { id: 'cell-differentiation', name: { ka: 'უჯრედული დიფერენციაცია', en: 'Cell Differentiation' } },
                                { id: 'stem-cell', name: { ka: 'ღეროვანი უჯრედი', en: 'Stem Cell' } },
                                { id: 'embryo', name: { ka: 'ემბრიონი', en: 'Embryo' } },
                            ]
                        },
                        {
                            id: 'biogerontology',
                            name: { ka: 'ბიოგერონტოლოგია', en: 'Biogerontology' },
                            keywords: [
                                { id: 'antioxidant', name: { ka: 'ანტიოქსიდანტი', en: 'Antioxidant' } },
                                { id: 'age-related-diseases', name: { ka: 'ასაკობრივი დაავადებები (ალცჰაიმერი, პარკინსონი)', en: 'Age-related Diseases (Alzheimer\'s, Parkinson\'s)' } },
                                { id: 'aging', name: { ka: 'დაბერება', en: 'Aging' } },
                                { id: 'regeneration', name: { ka: 'რეგენერაცია', en: 'Regeneration' } },
                                { id: 'lifespan', name: { ka: 'სიცოცხლის ხანგრძლივობა', en: 'Lifespan' } },
                                { id: 'telomere', name: { ka: 'ტელომერი', en: 'Telomere' } },
                                { id: 'free-radicals', name: { ka: 'თავისუფალი რადიკალები', en: 'Free Radicals' } },
                                { id: 'cellular-senescence', name: { ka: 'უჯრედული დაბერება (სენესცენცია)', en: 'Cellular Senescence' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'systems-regulation',
                    name: { ka: '⚙️ III. სისტემები და რეგულაცია', en: '⚙️ III. Systems and Regulation' },
                    subSections: [
                        {
                            id: 'immunology',
                            name: { ka: 'იმუნოლოგია', en: 'Immunology' },
                            keywords: [
                                { id: 'autoimmune-disease', name: { ka: 'ავტოიმუნური დაავადება', en: 'Autoimmune Disease' } },
                                { id: 'allergy', name: { ka: 'ალერგია', en: 'Allergy' } },
                                { id: 'antigen', name: { ka: 'ანტიგენი', en: 'Antigen' } },
                                { id: 'antibody', name: { ka: 'ანტისხეული', en: 'Antibody' } },
                                { id: 'vaccination', name: { ka: 'ვაქცინაცია', en: 'Vaccination' } },
                                { id: 'immunity', name: { ka: 'იმუნიტეტი (თანდაყოლილი, შეძენილი)', en: 'Immunity (Innate, Acquired)' } },
                                { id: 'immunodeficiency', name: { ka: 'იმუნოდეფიციტი', en: 'Immunodeficiency' } },
                                { id: 'lymphocyte', name: { ka: 'ლიმფოციტი (T-უჯრედი, B-უჯრედი)', en: 'Lymphocyte (T-cell, B-cell)' } },
                                { id: 'macrophage', name: { ka: 'მაკროფაგი', en: 'Macrophage' } },
                                { id: 'neutrophil', name: { ka: 'ნეიტროფილი', en: 'Neutrophil' } },
                                { id: 'cytokine', name: { ka: 'ციტოკინი', en: 'Cytokine' } },
                            ]
                        },
                        {
                            id: 'endocrinology',
                            name: { ka: 'ენდოკრინოლოგია', en: 'Endocrinology' },
                            keywords: [
                                { id: 'adrenaline', name: { ka: 'ადრენალინი', en: 'Adrenaline' } },
                                { id: 'endocrine-gland', name: { ka: 'ენდოკრინული ჯირკვალი', en: 'Endocrine Gland' } },
                                { id: 'estrogen', name: { ka: 'ესტროგენი', en: 'Estrogen' } },
                                { id: 'adrenal-gland', name: { ka: 'თირკმელზედა ჯირკვალი', en: 'Adrenal Gland' } },
                                { id: 'insulin', name: { ka: 'ინსულინი', en: 'Insulin' } },
                                { id: 'metabolic-regulation', name: { ka: 'მეტაბოლიზმის რეგულაცია', en: 'Metabolic Regulation' } },
                                { id: 'progesterone', name: { ka: 'პროგესტერონი', en: 'Progesterone' } },
                                { id: 'testosterone', name: { ka: 'ტესტოსტერონი', en: 'Testosterone' } },
                                { id: 'feedback-principle', name: { ka: 'უკუკავშირის პრინციპი', en: 'Feedback Principle' } },
                                { id: 'thyroid-gland', name: { ka: 'ფარისებრი ჯირკვალი', en: 'Thyroid Gland' } },
                                { id: 'hypothalamus', name: { ka: 'ჰიპოთალამუსი', en: 'Hypothalamus' } },
                                { id: 'pituitary-gland', name: { ka: 'ჰიპოფიზი', en: 'Pituitary Gland' } },
                                { id: 'hormone', name: { ka: 'ჰორმონი', en: 'Hormone' } },
                            ]
                        },
                        {
                            id: 'neurobiology',
                            name: { ka: 'ნეირობიოლოგია', en: 'Neurobiology' },
                            keywords: [
                                { id: 'acetylcholine', name: { ka: 'აცეტილქოლინი', en: 'Acetylcholine' } },
                                { id: 'glutamate', name: { ka: 'გლუტამატი', en: 'Glutamate' } },
                                { id: 'dopamine', name: { ka: 'დოფამინი', en: 'Dopamine' } },
                                { id: 'spinal-cord', name: { ka: 'ზურგის ტვინი', en: 'Spinal Cord' } },
                                { id: 'memory', name: { ka: 'მეხსიერება', en: 'Memory' } },
                                { id: 'neurotransmitter', name: { ka: 'ნეირომედიატორი', en: 'Neurotransmitter' } },
                                { id: 'neuron', name: { ka: 'ნეირონი', en: 'Neuron' } },
                                { id: 'neuroplasticity', name: { ka: 'ნეიროპლასტიურობა', en: 'Neuroplasticity' } },
                                { id: 'pns-cns', name: { ka: 'პერიფერიული/ცენტრალური ნერვული სისტემა', en: 'Peripheral/Central Nervous System' } },
                                { id: 'reflex', name: { ka: 'რეფლექსი', en: 'Reflex' } },
                                { id: 'serotonin', name: { ka: 'სეროტონინი', en: 'Serotonin' } },
                                { id: 'synapse', name: { ka: 'სინაფსი', en: 'Synapse' } },
                                { id: 'brain-parts', name: { ka: 'ტვინი (დიდი ჰემისფეროები, ნათხემი, ტვინის ღერო)', en: 'Brain (Cerebral Hemispheres, Cerebellum, Brainstem)' } },
                            ]
                        },
                        {
                            id: 'human-microbiome',
                            name: { ka: 'ადამიანის მიკრობიომი', en: 'Human Microbiome' },
                            keywords: [
                                { id: 'bacteria', name: { ka: 'ბაქტერია', en: 'Bacteria' } },
                                { id: 'dysbiosis', name: { ka: 'დისბაქტერიოზი', en: 'Dysbiosis' } },
                                { id: 'virus', name: { ka: 'ვირუსი', en: 'Virus' } },
                                { id: 'microbiome', name: { ka: 'მიკრობიომი', en: 'Microbiome' } },
                                { id: 'microbiota', name: { ka: 'მიკრობიოტა', en: 'Microbiota' } },
                                { id: 'microbial-metabolism', name: { ka: 'მიკრობული მეტაბოლიზმი', en: 'Microbial Metabolism' } },
                                { id: 'gut-flora', name: { ka: 'ნაწლავის ფლორა', en: 'Gut Flora' } },
                                { id: 'prebiotic', name: { ka: 'პრებიოტიკი', en: 'Prebiotic' } },
                                { id: 'probiotic', name: { ka: 'პრობიოტიკი', en: 'Probiotic' } },
                                { id: 'symbiosis-micro', name: { ka: 'სიმბიოზი', en: 'Symbiosis' } },
                                { id: 'fungus', name: { ka: 'სოკო', en: 'Fungus' } },
                            ]
                        },
                        {
                            id: 'chronobiology',
                            name: { ka: 'ქრონობიოლოგია', en: 'Chronobiology' },
                            keywords: [
                                { id: 'biological-rhythm', name: { ka: 'ბიოლოგიური რიტმი', en: 'Biological Rhythm' } },
                                { id: 'biological-clock', name: { ka: 'ბიოლოგიური საათი', en: 'Biological Clock' } },
                                { id: 'morning-chronotype', name: { ka: 'დილის ქრონოტიპი ("ტოროლა")', en: 'Morning Chronotype ("Lark")' } },
                                { id: 'evening-chronotype', name: { ka: 'საღამოს ქრონოტიპი ("ბუ")', en: 'Evening Chronotype ("Owl")' } },
                                { id: 'sleep-wake-cycle', name: { ka: 'ძილ-ღვიძილის ციკლი', en: 'Sleep-Wake Cycle' } },
                                { id: 'melatonin', name: { ka: 'მელატონინი', en: 'Melatonin' } },
                                { id: 'sad', name: { ka: 'სეზონური აფექტური აშლილობა', en: 'Seasonal Affective Disorder (SAD)' } },
                                { id: 'circadian-rhythm', name: { ka: 'ცირკადული რიტმი', en: 'Circadian Rhythm' } },
                                { id: 'jet-lag', name: { ka: 'ჯეტლაგი', en: 'Jet Lag' } },
                                { id: 'hormonal-cycles', name: { ka: 'ჰორმონალური ციკლები', en: 'Hormonal Cycles' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'evolution-adaptation',
                    name: { ka: '👣 IV. ევოლუცია და ადაპტაცია', en: '👣 IV. Evolution and Adaptation' },
                    subSections: [
                        {
                            id: 'human-evolution',
                            name: { ka: 'ადამიანის ევოლუცია', en: 'Human Evolution' },
                            keywords: [
                                { id: 'australopithecus', name: { ka: 'ავსტრალოპითეკი', en: 'Australopithecus' } },
                                { id: 'bipedalism', name: { ka: 'ბიპედალიზმი', en: 'Bipedalism' } },
                                { id: 'tool-use', name: { ka: 'იარაღის გამოყენება', en: 'Tool Use' } },
                                { id: 'cognitive-revolution', name: { ka: 'კოგნიტური რევოლუცია', en: 'Cognitive Revolution' } },
                                { id: 'cultural-evolution', name: { ka: 'კულტურული ევოლუცია', en: 'Cultural Evolution' } },
                                { id: 'neanderthal', name: { ka: 'ნეანდერტალელი', en: 'Neanderthal' } },
                                { id: 'use-of-fire', name: { ka: 'ცეცხლის გამოყენება', en: 'Use of Fire' } },
                                { id: 'hominid', name: { ka: 'ჰომინიდი', en: 'Hominid' } },
                                { id: 'homo-erectus', name: { ka: 'ჰომო ერექტუსი', en: 'Homo erectus' } },
                                { id: 'homo-habilis', name: { ka: 'ჰომო ჰაბილისი', en: 'Homo habilis' } },
                                { id: 'homo-sapiens', name: { ka: 'ჰომო საპიენსი', en: 'Homo sapiens' } },
                            ]
                        },
                        {
                            id: 'physical-anthropology',
                            name: { ka: 'ფიზიკური ანთროპოლოგია', en: 'Physical Anthropology' },
                            keywords: [
                                { id: 'adaptation', name: { ka: 'ადაპტაცია', en: 'Adaptation' } },
                                { id: 'human-population', name: { ka: 'ადამიანთა პოპულაცია', en: 'Human Population' } },
                                { id: 'anthropology', name: { ka: 'ანთროპოლოგია', en: 'Anthropology' } },
                                { id: 'biological-diversity', name: { ka: 'ბიოლოგიური მრავალფეროვნება', en: 'Biological Diversity' } },
                                { id: 'genetic-variation', name: { ka: 'გენეტიკური ვარიაცია', en: 'Genetic Variation' } },
                                { id: 'climatic-adaptation', name: { ka: 'კლიმატური ადაპტაცია', en: 'Climatic Adaptation' } },
                                { id: 'race', name: { ka: 'რასა', en: 'Race' } },
                                { id: 'phenotypic-plasticity', name: { ka: 'ფენოტიპური პლასტიურობა', en: 'Phenotypic Plasticity' } },
                            ]
                        },
                        {
                            id: 'primatology',
                            name: { ka: 'პრიმატოლოგია', en: 'Primatology' },
                            keywords: [
                                { id: 'great-ape', name: { ka: 'ადამიანის მსგავსი მაიმუნი (შიმპანზე, გორილა, ორანგუტანი)', en: 'Great Ape (Chimpanzee, Gorilla, Orangutan)' } },
                                { id: 'communication', name: { ka: 'კომუნიკაცია', en: 'Communication' } },
                                { id: 'primate', name: { ka: 'პრიმატი', en: 'Primate' } },
                                { id: 'common-ancestor', name: { ka: 'საერთო წინაპარი', en: 'Common Ancestor' } },
                                { id: 'social-behavior', name: { ka: 'სოციალური ქცევა', en: 'Social Behavior' } },
                                { id: 'group-structure', name: { ka: 'ჯგუფური სტრუქტურა', en: 'Group Structure' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'medicine',
            name: { ka: '❤️ მედიცინა', en: '❤️ Medicine' },
            sections: [
                {
                    id: 'prevention-public-health',
                    name: { ka: '🛡️ I. პრევენცია და საზოგადოებრივი ჯანდაცვა', en: '🛡️ I. Prevention and Public Health' },
                    subSections: [
                        {
                            id: 'public-health',
                            name: { ka: 'საზოგადოებრივი ჯანდაცვა', en: 'Public Health' },
                            keywords: [
                                { id: 'disease-prevention', name: { ka: 'დაავადებათა პრევენცია', en: 'Disease Prevention' } },
                                { id: 'epidemiological-surveillance', name: { ka: 'ეპიდემიოლოგიური მონიტორინგი', en: 'Epidemiological Surveillance' } },
                                { id: 'population-health', name: { ka: 'მოსახლეობის ჯანმრთელობა', en: 'Population Health' } },
                                { id: 'public-services', name: { ka: 'საზოგადოებრივი სერვისები', en: 'Public Services' } },
                                { id: 'screening', name: { ka: 'სკრინინგი', en: 'Screening' } },
                                { id: 'health-policy', name: { ka: 'ჯანდაცვის პოლიტიკა', en: 'Health Policy' } },
                                { id: 'health-statistics', name: { ka: 'ჯანდაცვის სტატისტიკა', en: 'Health Statistics' } },
                                { id: 'health-education', name: { ka: 'ჯანმრთელობის განათლება', en: 'Health Education' } },
                                { id: 'health-promotion', name: { ka: 'ჯანმრთელობის ხელშეწყობა', en: 'Health Promotion' } },
                            ]
                        },
                        {
                            id: 'epidemiology',
                            name: { ka: 'ეპიდემიოლოგია', en: 'Epidemiology' },
                            keywords: [
                                { id: 'morbidity', name: { ka: 'ავადობა', en: 'Morbidity' } },
                                { id: 'transmission-routes', name: { ka: 'გადაცემის გზები', en: 'Transmission Routes' } },
                                { id: 'spread-prevention', name: { ka: 'გავრცელების პრევენცია', en: 'Spread Prevention' } },
                                { id: 'endemic', name: { ka: 'ენდემია', en: 'Endemic' } },
                                { id: 'epidemic', name: { ka: 'ეპიდემია', en: 'Epidemic' } },
                                { id: 'incubation-period', name: { ka: 'ინკუბაციური პერიოდი', en: 'Incubation Period' } },
                                { id: 'source-of-infection', name: { ka: 'ინფექციის წყარო', en: 'Source of Infection' } },
                                { id: 'pandemic', name: { ka: 'პანდემია', en: 'Pandemic' } },
                                { id: 'risk-factor', name: { ka: 'რისკ-ფაქტორი', en: 'Risk Factor' } },
                                { id: 'mortality', name: { ka: 'სიკვდილიანობა', en: 'Mortality' } },
                                { id: 'disease-transmission-modeling', name: { ka: 'დაავადების გავრცელების მოდელირება', en: 'Disease Transmission Modeling' } },
                            ]
                        },
                        {
                            id: 'hygiene-sanitation',
                            name: { ka: 'ჰიგიენა და სანიტარია', en: 'Hygiene and Sanitation' },
                            keywords: [
                                { id: 'antisepsis', name: { ka: 'ანტისეპტიკა', en: 'Antisepsis' } },
                                { id: 'asepsis', name: { ka: 'ასეპტიკა', en: 'Asepsis' } },
                                { id: 'environmental-pollution-control', name: { ka: 'გარემოს დაბინძურების კონტროლი', en: 'Environmental Pollution Control' } },
                                { id: 'disinfection', name: { ka: 'დეზინფექცია', en: 'Disinfection' } },
                                { id: 'personal-hygiene', name: { ka: 'პირადი ჰიგიენა', en: 'Personal Hygiene' } },
                                { id: 'food-safety', name: { ka: 'საკვების უსაფრთხოება', en: 'Food Safety' } },
                                { id: 'sanitation', name: { ka: 'სანიტარია', en: 'Sanitation' } },
                                { id: 'sanitary-norms', name: { ka: 'სანიტარული ნორმები', en: 'Sanitary Norms' } },
                                { id: 'drinking-water', name: { ka: 'სასმელი წყალი', en: 'Drinking Water' } },
                                { id: 'sterilization', name: { ka: 'სტერილიზაცია', en: 'Sterilization' } },
                            ]
                        },
                        {
                            id: 'preventive-medicine',
                            name: { ka: 'პრევენციული მედიცინა', en: 'Preventive Medicine' },
                            keywords: [
                                { id: 'vaccination-inoculation', name: { ka: 'ვაქცინაცია (აცრა)', en: 'Vaccination (Inoculation)' } },
                                { id: 'immunization', name: { ka: 'იმუნიზაცია', en: 'Immunization' } },
                                { id: 'prophylactic-check-up', name: { ka: 'პროფილაქტიკური გასინჯვა', en: 'Prophylactic Check-up' } },
                                { id: 'risk-assessment', name: { ka: 'რისკების შეფასება', en: 'Risk Assessment' } },
                                { id: 'chemoprophylaxis', name: { ka: 'ქიმიოპროფილაქტიკა', en: 'Chemoprophylaxis' } },
                                { id: 'lifestyle-recommendations', name: { ka: 'ცხოვრების წესის რეკომენდაციები', en: 'Lifestyle Recommendations' } },
                                { id: 'health-programs', name: { ka: 'ჯანმრთელობის პროგრამები', en: 'Health Programs' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'diagnostics',
                    name: { ka: '🩺 II. დიაგნოსტიკა', en: '🩺 II. Diagnostics' },
                    subSections: [
                        {
                            id: 'radiology-imaging',
                            name: { ka: 'რადიოლოგია და ვიზუალიზაცია', en: 'Radiology and Imaging' },
                            keywords: [
                                { id: 'angiography', name: { ka: 'ანგიოგრაფია', en: 'Angiography' } },
                                { id: 'nuclear-medicine', name: { ka: 'ბირთვული მედიცინა', en: 'Nuclear Medicine' } },
                                { id: 'gamma-camera', name: { ka: 'გამა-კამერა', en: 'Gamma Camera' } },
                                { id: 'dopplerography', name: { ka: 'დოპლეროგრაფია', en: 'Dopplerography' } },
                                { id: 'echocardiography', name: { ka: 'ექოკარდიოგრაფია', en: 'Echocardiography' } },
                                { id: 'echosonography-ultrasound', name: { ka: 'ექოსკოპია', en: 'Echosonography / Ultrasound' } },
                                { id: 'ct', name: { ka: 'კომპიუტერული ტომოგრაფია (CT)', en: 'Computed Tomography (CT)' } },
                                { id: 'mri', name: { ka: 'მაგნიტურ-რეზონანსული ტომოგრაფია (MRI)', en: 'Magnetic Resonance Imaging (MRI)' } },
                                { id: 'mammography', name: { ka: 'მამოგრაფია', en: 'Mammography' } },
                                { id: 'pet', name: { ka: 'პოზიტრონ-ემისიური ტომოგრაფია (PET)', en: 'Positron Emission Tomography (PET)' } },
                                { id: 'radiography-x-ray', name: { ka: 'რენტგენოგრაფია', en: 'Radiography / X-ray' } },
                                { id: 'sonogram', name: { ka: 'სონოგრამა', en: 'Sonogram' } },
                                { id: 'ultrasound-diagnostics', name: { ka: 'ულტრაბგერითი დიაგნოსტიკა', en: 'Ultrasound Diagnostics' } },
                                { id: 'fluoroscopy', name: { ka: 'ფლუოროსკოპია', en: 'Fluoroscopy' } },
                                { id: 'fmri', name: { ka: 'ფუნქციური MRI (fMRI)', en: 'Functional MRI (fMRI)' } },
                            ]
                        },
                        {
                            id: 'pathology-diag',
                            name: { ka: 'პათოლოგია', en: 'Pathology' },
                            keywords: [
                                { id: 'autopsy', name: { ka: 'აუტოფსია (გაკვეთა)', en: 'Autopsy' } },
                                { id: 'biopsy', name: { ka: 'ბიოფსია', en: 'Biopsy' } },
                                { id: 'frozen-section', name: { ka: 'გაყინული შრე', en: 'Frozen Section' } },
                                { id: 'immunohistochemistry', name: { ka: 'იმუნოჰისტოქიმია', en: 'Immunohistochemistry' } },
                                { id: 'molecular-histology', name: { ka: 'მოლეკულური ჰისტოლოგია', en: 'Molecular Histology' } },
                                { id: 'smear-test', name: { ka: 'ნაცხის ანალიზი', en: 'Smear Test' } },
                                { id: 'pap-test', name: { ka: 'პაპ-ტესტი', en: 'Pap Test' } },
                                { id: 'pathologist', name: { ka: 'პათოლოგანატომი', en: 'Pathologist' } },
                                { id: 'forensic-pathology', name: { ka: 'სასამართლო-სამედიცინო ექსპერტიზა', en: 'Forensic Pathology' } },
                                { id: 'determination-of-cause-of-death', name: { ka: 'სიკვდილის მიზეზის დადგენა', en: 'Determination of Cause of Death' } },
                                { id: 'cellular-atypia', name: { ka: 'უჯრედული ატიპია', en: 'Cellular Atypia' } },
                                { id: 'cytopathology', name: { ka: 'ციტოპათოლოგია', en: 'Cytopathology' } },
                                { id: 'histopathology', name: { ka: 'ჰისტოპათოლოგია', en: 'Histopathology' } },
                            ]
                        },
                        {
                            id: 'laboratory-medicine',
                            name: { ka: 'ლაბორატორიული მედიცინა', en: 'Laboratory Medicine' },
                            keywords: [
                                { id: 'antibiogram', name: { ka: 'ანტიბიოტიკოგრამა', en: 'Antibiogram' } },
                                { id: 'antibody-titer', name: { ka: 'ანტისხეულების ტიტრი', en: 'Antibody Titer' } },
                                { id: 'bacterial-culture', name: { ka: 'ბაქტერიული კულტურა', en: 'Bacterial Culture' } },
                                { id: 'biochemical-analysis', name: { ka: 'ბიოქიმიური ანალიზი', en: 'Biochemical Analysis' } },
                                { id: 'elisa', name: { ka: 'იმუნოფერმენტული ანალიზი (ELISA)', en: 'Enzyme-Linked Immunosorbent Assay (ELISA)' } },
                                { id: 'coagulogram', name: { ka: 'კოაგულოგრამა', en: 'Coagulogram' } },
                                { id: 'lipid-panel', name: { ka: 'ლიპიდური სპექტრი', en: 'Lipid Panel' } },
                                { id: 'pcr-diagnostics', name: { ka: 'PCR დიაგნოსტიკა', en: 'PCR Diagnostics' } },
                                { id: 'cbc', name: { ka: 'სისხლის საერთო ანალიზი', en: 'Complete Blood Count (CBC)' } },
                                { id: 'blood-type', name: { ka: 'სისხლის ჯგუფი', en: 'Blood Type' } },
                                { id: 'blood-smear', name: { ka: 'სისხლის ნაცხი', en: 'Blood Smear' } },
                                { id: 'enzymes', name: { ka: 'ფერმენტები', en: 'Enzymes' } },
                                { id: 'urinalysis', name: { ka: 'შარდის ანალიზი', en: 'Urinalysis' } },
                                { id: 'hemoglobin', name: { ka: 'ჰემოგლობინი', en: 'Hemoglobin' } },
                                { id: 'hematocrit', name: { ka: 'ჰემატოკრიტი', en: 'Hematocrit' } },
                            ]
                        },
                        {
                            id: 'medical-genetics',
                            name: { ka: 'სამედიცინო გენეტიკა', en: 'Medical Genetics' },
                            keywords: [
                                { id: 'genetic-screening', name: { ka: 'გენეტიკური სკრინინგი', en: 'Genetic Screening' } },
                                { id: 'genetic-testing', name: { ka: 'გენეტიკური ტესტირება', en: 'Genetic Testing' } },
                                { id: 'genetic-predisposition', name: { ka: 'გენეტიკური წინასწარგანწყობა', en: 'Genetic Predisposition' } },
                                { id: 'gene-mutation', name: { ka: 'გენის მუტაცია', en: 'Gene Mutation' } },
                                { id: 'karyotyping', name: { ka: 'კარიოტიპირება', en: 'Karyotyping' } },
                                { id: 'prenatal-diagnosis', name: { ka: 'პრენატალური დიაგნოსტიკა', en: 'Prenatal Diagnosis' } },
                                { id: 'hereditary-disease-med', name: { ka: 'მემკვიდრეობითი დაავადება', en: 'Hereditary Disease' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'therapeutic-medicine',
                    name: { ka: '💊 III. თერაპიული მედიცინა (არაქირურგიული)', en: '💊 III. Therapeutic Medicine (Non-Surgical)' },
                    subSections: [
                        {
                            id: 'family-medicine',
                            name: { ka: 'ოჯახის მედიცინა / პირველადი ჯანდაცვა', en: 'Family Medicine / Primary Care' },
                            keywords: [
                                { id: 'anamnesis', name: { ka: 'ანამნეზი', en: 'Anamnesis' } },
                                { id: 'examination', name: { ka: 'გასინჯვა', en: 'Examination' } },
                                { id: 'diagnosis', name: { ka: 'დიაგნოზი', en: 'Diagnosis' } },
                                { id: 'treatment', name: { ka: 'მკურნალობა', en: 'Treatment' } },
                                { id: 'referral', name: { ka: 'მიმართვა (რეფერალი)', en: 'Referral' } },
                                { id: 'patient', name: { ka: 'პაციენტი', en: 'Patient' } },
                                { id: 'prescription', name: { ka: 'რეცეპტი', en: 'Prescription' } },
                                { id: 'chronic-disease-management', name: { ka: 'ქრონიკული დაავადებების მართვა', en: 'Chronic Disease Management' } },
                                { id: 'doctor', name: { ka: 'ექიმი', en: 'Doctor' } },
                            ]
                        },
                        {
                            id: 'internal-medicine-specialties',
                            name: { ka: 'შიდა მედიცინის სპეციალობები', en: 'Internal Medicine Specialties' },
                            keywords: [
                                { id: 'cardiology', name: { ka: 'კარდიოლოგია', en: 'Cardiology' } },
                                { id: 'arrhythmia', name: { ka: 'არითმია', en: 'Arrhythmia' } },
                                { id: 'atherosclerosis', name: { ka: 'ათეროსკლეროზი', en: 'Atherosclerosis' } },
                                { id: 'heart-failure', name: { ka: 'გულის უკმარისობა', en: 'Heart Failure' } },
                                { id: 'ecg', name: { ka: 'ეკგ', en: 'ECG' } },
                                { id: 'infarction', name: { ka: 'ინფარქტი', en: 'Infarction' } },
                                { id: 'angina-pectoris', name: { ka: 'სტენოკარდია', en: 'Angina Pectoris' } },
                                { id: 'hypertension', name: { ka: 'ჰიპერტენზია', en: 'Hypertension' } },
                                { id: 'pulmonology', name: { ka: 'პულმონოლოგია', en: 'Pulmonology' } },
                                { id: 'asthma', name: { ka: 'ასთმა', en: 'Asthma' } },
                                { id: 'bronchitis', name: { ka: 'ბრონქიტი', en: 'Bronchitis' } },
                                { id: 'pneumonia', name: { ka: 'პნევმონია', en: 'Pneumonia' } },
                                { id: 'spirometry', name: { ka: 'სპირომეტრია', en: 'Spirometry' } },
                                { id: 'tuberculosis', name: { ka: 'ტუბერკულოზი', en: 'Tuberculosis' } },
                                { id: 'copd', name: { ka: 'ფილტვის ქრონიკული ობსტრუქციული დაავადება (ფქოდ)', en: 'Chronic Obstructive Pulmonary Disease (COPD)' } },
                                { id: 'gastroenterology', name: { ka: 'გასტროენტეროლოგია', en: 'Gastroenterology' } },
                                { id: 'gastritis', name: { ka: 'გასტრიტი', en: 'Gastritis' } },
                                { id: 'gastroscopy', name: { ka: 'გასტროსკოპია', en: 'Gastroscopy' } },
                                { id: 'colitis', name: { ka: 'კოლიტი', en: 'Colitis' } },
                                { id: 'colonoscopy', name: { ka: 'კოლონოსკოპია', en: 'Colonoscopy' } },
                                { id: 'stomach-ulcer', name: { ka: 'კუჭის წყლული', en: 'Stomach Ulcer' } },
                                { id: 'hepatitis', name: { ka: 'ჰეპატიტი', en: 'Hepatitis' } },
                                { id: 'endocrinology-spec', name: { ka: 'ენდოკრინოლოგია', en: 'Endocrinology' } },
                                { id: 'diabetes', name: { ka: 'დიაბეტი', en: 'Diabetes' } },
                                { id: 'insulin-resistance', name: { ka: 'ინსულინური რეზისტენტობა', en: 'Insulin Resistance' } },
                                { id: 'metabolic-syndrome', name: { ka: 'მეტაბოლური სინდრომი', en: 'Metabolic Syndrome' } },
                                { id: 'obesity', name: { ka: 'სიმსუქნე', en: 'Obesity' } },
                                { id: 'thyroid-diseases', name: { ka: 'ფარისებრი ჯირკვლის დაავადებები', en: 'Thyroid Diseases' } },
                                { id: 'goiter', name: { ka: 'ჩიყვი', en: 'Goiter' } },
                                { id: 'nephrology', name: { ka: 'ნეფროლოგია', en: 'Nephrology' } },
                                { id: 'glomerulonephritis', name: { ka: 'გლომერულონეფრიტი', en: 'Glomerulonephritis' } },
                                { id: 'dialysis', name: { ka: 'დიალიზი', en: 'Dialysis' } },
                                { id: 'renal-failure', name: { ka: 'თირკმლის უკმარისობა', en: 'Renal Failure' } },
                                { id: 'kidney-stones', name: { ka: 'კენჭოვანი დაავადება', en: 'Kidney Stones' } },
                                { id: 'pyelonephritis', name: { ka: 'პიელონეფრიტი', en: 'Pyelonephritis' } },
                                { id: 'rheumatology', name: { ka: 'რევმატოლოგია', en: 'Rheumatology' } },
                                { id: 'arthritis', name: { ka: 'ართრიტი (რევმატოიდული, ოსტეოართრიტი)', en: 'Arthritis (Rheumatoid, Osteoarthritis)' } },
                                { id: 'vasculitis', name: { ka: 'ვასკულიტი', en: 'Vasculitis' } },
                                { id: 'gout', name: { ka: 'პოდაგრა', en: 'Gout' } },
                                { id: 'systemic-lupus-erythematosus', name: { ka: 'სისტემური წითელი მგლურა', en: 'Systemic Lupus Erythematosus' } },
                                { id: 'hematology', name: { ka: 'ჰემატოლოგია', en: 'Hematology' } },
                                { id: 'anemia', name: { ka: 'ანემია', en: 'Anemia' } },
                                { id: 'coagulation', name: { ka: 'კოაგულაცია', en: 'Coagulation' } },
                                { id: 'leukemia', name: { ka: 'ლეიკემია', en: 'Leukemia' } },
                                { id: 'lymphoma', name: { ka: 'ლიმფომა', en: 'Lymphoma' } },
                                { id: 'blood-transfusion', name: { ka: 'სისხლის გადასხმა', en: 'Blood Transfusion' } },
                                { id: 'hemophilia', name: { ka: 'ჰემოფილია', en: 'Hemophilia' } },
                                { id: 'hemostasis', name: { ka: 'ჰემოსტაზი', en: 'Hemostasis' } },
                                { id: 'oncology', name: { ka: 'ონკოლოგია', en: 'Oncology' } },
                                { id: 'malignant-benign-tumor', name: { ka: 'ავთვისებიანი/კეთილთვისებიანი სიმსივნე', en: 'Malignant/Benign Tumor' } },
                                { id: 'biopsy-oncology', name: { ka: 'ბიოფსია', en: 'Biopsy' } },
                                { id: 'immunotherapy', name: { ka: 'იმუნოთერაპია', en: 'Immunotherapy' } },
                                { id: 'cancer', name: { ka: 'კიბო', en: 'Cancer' } },
                                { id: 'metastasis', name: { ka: 'მეტასტაზი', en: 'Metastasis' } },
                                { id: 'radiation-therapy', name: { ka: 'სხივური თერაპია', en: 'Radiation Therapy' } },
                                { id: 'chemotherapy', name: { ka: 'ქიმიოთერაპია', en: 'Chemotherapy' } },
                                { id: 'neurology', name: { ka: 'ნევროლოგია', en: 'Neurology' } },
                                { id: 'multiple-sclerosis', name: { ka: 'გაფანტული სკლეროზი', en: 'Multiple Sclerosis' } },
                                { id: 'eeg', name: { ka: 'ეეგ', en: 'EEG' } },
                                { id: 'epilepsy', name: { ka: 'ეპილეფსია', en: 'Epilepsy' } },
                                { id: 'stroke', name: { ka: 'ინსულტი', en: 'Stroke' } },
                                { id: 'parkinsons-disease', name: { ka: 'პარკინსონის დაავადება', en: 'Parkinson\'s Disease' } },
                                { id: 'migraine', name: { ka: 'შაკიკი', en: 'Migraine' } },
                                { id: 'dermatology', name: { ka: 'დერმატოლოგია', en: 'Dermatology' } },
                                { id: 'acne', name: { ka: 'აკნე', en: 'Acne' } },
                                { id: 'dermatitis', name: { ka: 'დერმატიტი', en: 'Dermatitis' } },
                                { id: 'dermatoscopy', name: { ka: 'დერმატოსკოპია', en: 'Dermatoscopy' } },
                                { id: 'eczema', name: { ka: 'ეგზემა', en: 'Eczema' } },
                                { id: 'skin-cancer', name: { ka: 'კანის კიბო', en: 'Skin Cancer' } },
                                { id: 'psoriasis', name: { ka: 'ფსორიაზი', en: 'Psoriasis' } },
                                { id: 'infectious-diseases', name: { ka: 'ინფექციური დაავადებები', en: 'Infectious Diseases' } },
                                { id: 'antibiotic', name: { ka: 'ანტიბიოტიკი', en: 'Antibiotic' } },
                                { id: 'antiviral', name: { ka: 'ანტივირუსული', en: 'Antiviral' } },
                                { id: 'bacterium', name: { ka: 'ბაქტერია', en: 'Bacterium' } },
                                { id: 'virus-infectious', name: { ka: 'ვირუსი', en: 'Virus' } },
                                { id: 'parasite', name: { ka: 'პარაზიტი', en: 'Parasite' } },
                                { id: 'sepsis', name: { ka: 'სეფსისი', en: 'Sepsis' } },
                                { id: 'fungus-infectious', name: { ka: 'სოკო', en: 'Fungus' } },
                                { id: 'allergology-clinical-immunology', name: { ka: 'ალერგოლოგია და კლინიკური იმუნოლოგია', en: 'Allergology and Clinical Immunology' } },
                                { id: 'allergen', name: { ka: 'ალერგენი', en: 'Allergen' } },
                                { id: 'allergy-spec', name: { ka: 'ალერგია', en: 'Allergy' } },
                                { id: 'anaphylactic-shock', name: { ka: 'ანაფილაქსიური შოკი', en: 'Anaphylactic Shock' } },
                                { id: 'immunotherapy-allergy', name: { ka: 'იმუნოთერაპია', en: 'Immunotherapy' } },
                                { id: 'urticaria', name: { ka: 'ჭინჭრის ციება', en: 'Urticaria' } },
                                { id: 'intensive-care', name: { ka: 'ინტენსიური თერაპია (რეანიმატოლოგია)', en: 'Intensive Care (Reanimatology)' } },
                                { id: 'critical-condition', name: { ka: 'კრიტიკული მდგომარეობა', en: 'Critical Condition' } },
                                { id: 'monitoring', name: { ka: 'მონიტორინგი', en: 'Monitoring' } },
                                { id: 'resuscitation', name: { ka: 'რეანიმაცია', en: 'Resuscitation' } },
                                { id: 'sepsis-intensive', name: { ka: 'სეფსისი', en: 'Sepsis' } },
                                { id: 'mechanical-ventilation', name: { ka: 'ფილტვის ხელოვნური ვენტილაცია', en: 'Mechanical Ventilation' } },
                                { id: 'shock-intensive', name: { ka: 'შოკი', en: 'Shock' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'surgery',
                    name: { ka: '🔪 IV. ქირურგია', en: '🔪 IV. Surgery' },
                    subSections: [
                        {
                            id: 'general-surgery',
                            name: { ka: 'ზოგადი ქირურგია', en: 'General Surgery' },
                            keywords: [
                                { id: 'anesthesia', name: { ka: 'ანესთეზია', en: 'Anesthesia' } },
                                { id: 'appendectomy', name: { ka: 'აპენდექტომია', en: 'Appendectomy' } },
                                { id: 'laparoscopy', name: { ka: 'ლაპაროსკოპია', en: 'Laparoscopy' } },
                                { id: 'operation-surgery', name: { ka: 'ოპერაცია', en: 'Operation / Surgery' } },
                                { id: 'scalpel', name: { ka: 'სკალპელი', en: 'Scalpel' } },
                                { id: 'hemostasis-surgery', name: { ka: 'სისხლდენის კონტროლი', en: 'Hemostasis' } },
                                { id: 'hernia-repair', name: { ka: 'თიაქრის ოპერაცია', en: 'Hernia Repair' } },
                            ]
                        },
                        {
                            id: 'neurosurgery',
                            name: { ka: 'ნეიროქირურგია', en: 'Neurosurgery' },
                            keywords: [
                                { id: 'aneurysm', name: { ka: 'ანევრიზმა', en: 'Aneurysm' } },
                                { id: 'craniotomy', name: { ka: 'კრანიოტომია', en: 'Craniotomy' } },
                                { id: 'brain-tumor', name: { ka: 'ტვინის სიმსივნე', en: 'Brain Tumor' } },
                                { id: 'intracranial-pressure', name: { ka: 'ქალასშიდა წნევა', en: 'Intracranial Pressure' } },
                                { id: 'herniated-disc', name: { ka: 'ხერხემლის თიაქარი', en: 'Herniated Disc' } },
                            ]
                        },
                        {
                            id: 'orthopedics-traumatology',
                            name: { ka: 'ორთოპედია-ტრავმატოლოგია', en: 'Orthopedics and Traumatology' },
                            keywords: [
                                { id: 'dislocation', name: { ka: 'ამოვარდნილობა', en: 'Dislocation' } },
                                { id: 'arthroscopy', name: { ka: 'ართროსკოპია', en: 'Arthroscopy' } },
                                { id: 'endoprosthesis', name: { ka: 'ენდოპროთეზირება', en: 'Endoprosthesis' } },
                                { id: 'fracture', name: { ka: 'მოტეხილობა', en: 'Fracture' } },
                                { id: 'reposition', name: { ka: 'რეპოზიცია', en: 'Reposition' } },
                                { id: 'trauma', name: { ka: 'ტრავმა', en: 'Trauma' } },
                                { id: 'fixation', name: { ka: 'ფიქსაცია', en: 'Fixation' } },
                            ]
                        },
                        {
                            id: 'cardiovascular-surgery',
                            name: { ka: 'კარდიოვასკულარული ქირურგია', en: 'Cardiovascular Surgery' },
                            keywords: [
                                { id: 'angioplasty', name: { ka: 'ანგიოპლასტიკა', en: 'Angioplasty' } },
                                { id: 'aortic-aneurysm', name: { ka: 'აორტის ანევრიზმა', en: 'Aortic Aneurysm' } },
                                { id: 'valve-replacement', name: { ka: 'სარქვლის პროთეზირება', en: 'Valve Replacement' } },
                                { id: 'stenting', name: { ka: 'სტენტირება', en: 'Stenting' } },
                                { id: 'bypass-surgery', name: { ka: 'შუნტირება', en: 'Bypass Surgery' } },
                            ]
                        },
                        {
                            id: 'plastic-reconstructive-surgery',
                            name: { ka: 'პლასტიკური და რეკონსტრუქციული ქირურგია', en: 'Plastic and Reconstructive Surgery' },
                            keywords: [
                                { id: 'burn', name: { ka: 'დამწვრობა', en: 'Burn' } },
                                { id: 'skin-grafting', name: { ka: 'კანის გადანერგვა', en: 'Skin Grafting' } },
                                { id: 'cosmetic-surgery', name: { ka: 'კოსმეტიკური ქირურგია', en: 'Cosmetic Surgery' } },
                                { id: 'liposuction', name: { ka: 'ლიპოსაქცია', en: 'Liposuction' } },
                                { id: 'scar', name: { ka: 'ნაწიბური', en: 'Scar' } },
                                { id: 'reconstruction', name: { ka: 'რეკონსტრუქცია', en: 'Reconstruction' } },
                            ]
                        },
                        {
                            id: 'urology',
                            name: { ka: 'უროლოგია', en: 'Urology' },
                            keywords: [
                                { id: 'kidney-stone', name: { ka: 'კენჭი თირკმელში', en: 'Kidney Stone' } },
                                { id: 'lithotripsy', name: { ka: 'ლითოტრიფსია', en: 'Lithotripsy' } },
                                { id: 'prostatic-adenoma', name: { ka: 'პროსტატის ადენომა', en: 'Prostatic Adenoma' } },
                                { id: 'cystoscopy', name: { ka: 'ცისტოსკოპია', en: 'Cystoscopy' } },
                            ]
                        },
                        {
                            id: 'ophthalmology',
                            name: { ka: 'ოფთალმოლოგია', en: 'Ophthalmology' },
                            keywords: [
                                { id: 'retinal-detachment', name: { ka: 'ბადურას ჩამოცლა', en: 'Retinal Detachment' } },
                                { id: 'glaucoma', name: { ka: 'გლაუკომა', en: 'Glaucoma' } },
                                { id: 'cataract', name: { ka: 'კატარაქტა', en: 'Cataract' } },
                                { id: 'laser-correction', name: { ka: 'ლაზერული კორექცია', en: 'Laser Correction' } },
                                { id: 'vitrectomy', name: { ka: 'ვიტრექტომია', en: 'Vitrectomy' } },
                            ]
                        },
                        {
                            id: 'otolaryngology',
                            name: { ka: 'ოტოლარინგოლოგია (ყელ-ყურ-ცხვირი)', en: 'Otolaryngology (ENT)' },
                            keywords: [
                                { id: 'adenoids', name: { ka: 'ადენოიდები', en: 'Adenoids' } },
                                { id: 'rhinoplasty', name: { ka: 'რინოპლასტიკა', en: 'Rhinoplasty' } },
                                { id: 'sinusitis', name: { ka: 'სინუსიტი', en: 'Sinusitis' } },
                                { id: 'hearing-loss', name: { ka: 'სმენის დაქვეითება', en: 'Hearing Loss' } },
                                { id: 'tonsillectomy', name: { ka: 'ტონზილექტომია', en: 'Tonsillectomy' } },
                            ]
                        },
                        {
                            id: 'surgical-oncology',
                            name: { ka: 'ონკოქირურგია', en: 'Surgical Oncology' },
                            keywords: [
                                { id: 'lymph-node-dissection', name: { ka: 'ლიმფური კვანძების დისექცია', en: 'Lymph Node Dissection' } },
                                { id: 'mastectomy', name: { ka: 'მასტექტომია', en: 'Mastectomy' } },
                                { id: 'radical-surgery', name: { ka: 'რადიკალური ოპერაცია', en: 'Radical Surgery' } },
                                { id: 'tumor-resection', name: { ka: 'სიმსივნის ამოკვეთა', en: 'Tumor Resection' } },
                            ]
                        },
                        {
                            id: 'transplantology',
                            name: { ka: 'ტრანსპლანტოლოგია', en: 'Transplantology' },
                            keywords: [
                                { id: 'donor', name: { ka: 'დონორი', en: 'Donor' } },
                                { id: 'immunosuppression', name: { ka: 'იმუნოსუპრესია', en: 'Immunosuppression' } },
                                { id: 'organ-transplantation', name: { ka: 'ორგანოს გადანერგვა', en: 'Organ Transplantation' } },
                                { id: 'recipient', name: { ka: 'რეციპიენტი', en: 'Recipient' } },
                            ]
                        }
                    ]
                },
            ]
        },
        {
            id: 'psychology-cognitive-sciences',
            name: { ka: '🧠 ფსიქოლოგია და კოგნიტური მეცნიერებები', en: '🧠 Psychology and Cognitive Sciences' },
            sections: [
                {
                    id: 'fundamental-fields-psychology',
                    name: { ka: '🌐 I. ფსიქოლოგიის ფუნდამენტური დარგები', en: '🌐 I. Fundamental Fields of Psychology' },
                    subSections: [
                        {
                            id: 'cognitive-processes',
                            name: { ka: 'კოგნიტური პროცესები', en: 'Cognitive Processes' },
                            keywords: [
                                { id: 'thinking', name: { ka: 'აზროვნება', en: 'Thinking' } },
                                { id: 'perception', name: { ka: 'აღქმა', en: 'Perception' } },
                                { id: 'gestalt', name: { ka: 'გეშტალტი', en: 'Gestalt' } },
                                { id: 'emotion', name: { ka: 'ემოცია', en: 'Emotion' } },
                                { id: 'intelligence', name: { ka: 'ინტელექტი (IQ)', en: 'Intelligence (IQ)' } },
                                { id: 'classical-operant-conditioning', name: { ka: 'კლასიკური/ოპერანტული განპირობებულობა', en: 'Classical/Operant Conditioning' } },
                                { id: 'cognitive-bias', name: { ka: 'კოგნიტური მიკერძოება', en: 'Cognitive Bias' } },
                                { id: 'concentration', name: { ka: 'კონცენტრაცია', en: 'Concentration' } },
                                { id: 'logic', name: { ka: 'ლოგიკა', en: 'Logic' } },
                                { id: 'memory-psy', name: { ka: 'მეხსიერება (ხანმოკლე, ხანგრძლივი)', en: 'Memory (Short-term, Long-term)' } },
                                { id: 'motivation', name: { ka: 'მოტივაცია', en: 'Motivation' } },
                                { id: 'problem-solving', name: { ka: 'პრობლემის გადაჭრა', en: 'Problem Solving' } },
                                { id: 'sensory-adaptation', name: { ka: 'სენსორული ადაპტაცია', en: 'Sensory Adaptation' } },
                                { id: 'stimulus', name: { ka: 'სტიმული', en: 'Stimulus' } },
                                { id: 'stress', name: { ka: 'სტრესი', en: 'Stress' } },
                                { id: 'learning-psy', name: { ka: 'სწავლა', en: 'Learning' } },
                                { id: 'sensation', name: { ka: 'შეგრძნება (მხედველობა, სმენა, ყნოსვა, გემო, შეხება)', en: 'Sensation (Vision, Hearing, Smell, Taste, Touch)' } },
                            ]
                        },
                        {
                            id: 'personality-social-psychology',
                            name: { ka: 'პიროვნების და სოციუმის ფსიქოლოგია', en: 'Personality and Social Psychology' },
                            keywords: [
                                { id: 'big-five-personality-traits', name: { ka: '"დიდი ხუთეული"', en: 'Big Five Personality Traits' } },
                                { id: 'unconscious', name: { ka: 'არაცნობიერი', en: 'Unconscious' } },
                                { id: 'attitude', name: { ka: 'ატიტიუდი', en: 'Attitude' } },
                                { id: 'developmental-psychology', name: { ka: 'განვითარების ფსიქოლოგია', en: 'Developmental Psychology' } },
                                { id: 'extraversion-introversion', name: { ka: 'ექსტრავერსია/ინტროვერსია', en: 'Extraversion/Introversion' } },
                                { id: 'identity', name: { ka: 'იდენტობა', en: 'Identity' } },
                                { id: 'conformity', name: { ka: 'კონფორმულობა', en: 'Conformity' } },
                                { id: 'leadership', name: { ka: 'ლიდერობა', en: 'Leadership' } },
                                { id: 'attachment', name: { ka: 'მიჯაჭვულობა', en: 'Attachment' } },
                                { id: 'personality', name: { ka: 'პიროვნება', en: 'Personality' } },
                                { id: 'personality-psychology', name: { ka: 'პიროვნების ფსიქოლოგია', en: 'Personality Psychology' } },
                                { id: 'social-influence', name: { ka: 'სოციალური გავლენა', en: 'Social Influence' } },
                                { id: 'social-norms', name: { ka: 'სოციალური ნორმები', en: 'Social Norms' } },
                                { id: 'social-psychology', name: { ka: 'სოციალური ფსიქოლოგია', en: 'Social Psychology' } },
                                { id: 'stereotype', name: { ka: 'სტერეოტიპი', en: 'Stereotype' } },
                                { id: 'temperament', name: { ka: 'ტემპერამენტი', en: 'Temperament' } },
                                { id: 'psychoanalysis', name: { ka: 'ფსიქოანალიზი (მე/Ego, იგი/Id, ზე-მე/Superego)', en: 'Psychoanalysis (Ego, Id, Superego)' } },
                                { id: 'character', name: { ka: 'ხასიათი', en: 'Character' } },
                            ]
                        },
                        {
                            id: 'biological-evolutionary-foundations',
                            name: { ka: 'ბიოლოგიური და ევოლუციური საფუძვლები', en: 'Biological and Evolutionary Foundations' },
                            keywords: [
                                { id: 'adaptation-psy', name: { ka: 'ადაპტაცია', en: 'Adaptation' } },
                                { id: 'biological-psychology', name: { ka: 'ბიოლოგიური ფსიქოლოგია', en: 'Biological Psychology' } },
                                { id: 'evolutionary-psychology', name: { ka: 'ევოლუციური ფსიქოლოგია', en: 'Evolutionary Psychology' } },
                                { id: 'experimental-psychology', name: { ka: 'ექსპერიმენტული ფსიქოლოგია', en: 'Experimental Psychology' } },
                                { id: 'neurotransmitter-psy', name: { ka: 'ნეირომედიატორი', en: 'Neurotransmitter' } },
                                { id: 'neuron-psy', name: { ka: 'ნეირონი', en: 'Neuron' } },
                                { id: 'scientific-method', name: { ka: 'სამეცნიერო მეთოდი', en: 'Scientific Method' } },
                                { id: 'brain-psy', name: { ka: 'ტვინი', en: 'Brain' } },
                                { id: 'physiological-response', name: { ka: 'ფიზიოლოგიური რეაქცია', en: 'Physiological Response' } },
                                { id: 'hormones-psy', name: { ka: 'ჰორმონები', en: 'Hormones' } },
                            ]
                        },
                        {
                            id: 'positive-psychology',
                            name: { ka: 'პოზიტიური ფსიქოლოგია', en: 'Positive Psychology' },
                            keywords: [
                                { id: 'happiness', name: { ka: 'ბედნიერება', en: 'Happiness' } },
                                { id: 'well-being', name: { ka: 'კეთილდღეობა', en: 'Well-being' } },
                                { id: 'gratitude', name: { ka: 'მადლიერება', en: 'Gratitude' } },
                                { id: 'resilience', name: { ka: 'მედეგობა', en: 'Resilience' } },
                                { id: 'flow-state', name: { ka: 'ნაკადის (Flow) მდგომარეობა', en: 'Flow State' } },
                                { id: 'optimism', name: { ka: 'ოპტიმიზმი', en: 'Optimism' } },
                                { id: 'character-strengths', name: { ka: 'პიროვნული სიძლიერეები', en: 'Character Strengths' } },
                                { id: 'purpose-in-life', name: { ka: 'ცხოვრების მიზანი', en: 'Purpose in Life' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'applied-psychology-psychotherapy',
                    name: { ka: '🛋️ II. გამოყენებითი ფსიქოლოგია და ფსიქოთერაპია', en: '🛋️ II. Applied Psychology and Psychotherapy' },
                    subSections: [
                        {
                            id: 'clinical-psychology-mental-health',
                            name: { ka: 'კლინიკური ფსიქოლოგია და ფსიქიკური ჯანმრთელობა', en: 'Clinical Psychology and Mental Health' },
                            keywords: [
                                { id: 'dsm-icd', name: { ka: 'DSM/ICD (დაავადებათა კლასიფიკატორები)', en: 'DSM/ICD (Diagnostic Manuals)' } },
                                { id: 'depression', name: { ka: 'დეპრესია', en: 'Depression' } },
                                { id: 'clinical-psychology', name: { ka: 'კლინიკური ფსიქოლოგია', en: 'Clinical Psychology' } },
                                { id: 'personality-disorder', name: { ka: 'პიროვნული აშლილობა', en: 'Personality Disorder' } },
                                { id: 'projective-test', name: { ka: 'პროექციული მეთოდიკა (რორშახის ტესტი)', en: 'Projective Test (Rorschach Test)' } },
                                { id: 'mental-disorder', name: { ka: 'ფსიქიკური აშლილობა', en: 'Mental Disorder' } },
                                { id: 'psychodiagnostics', name: { ka: 'ფსიქოდიაგნოსტიკა', en: 'Psychodiagnostics' } },
                                { id: 'psychopathology', name: { ka: 'ფსიქოპათოლოგია', en: 'Psychopathology' } },
                                { id: 'psychological-test', name: { ka: 'ფსიქოლოგიური ტესტი', en: 'Psychological Test' } },
                                { id: 'schizophrenia', name: { ka: 'შიზოფრენია', en: 'Schizophrenia' } },
                                { id: 'anxiety-disorders', name: { ka: 'შფოთვითი აშლილობები', en: 'Anxiety Disorders' } },
                            ]
                        },
                        {
                            id: 'schools-of-psychotherapy',
                            name: { ka: 'ფსიქოთერაპიის სკოლები', en: 'Schools of Psychotherapy' },
                            keywords: [
                                { id: 'unconscious-psy', name: { ka: 'არაცნობიერი', en: 'Unconscious' } },
                                { id: 'defense-mechanisms', name: { ka: 'დაცვითი მექანიზმები', en: 'Defense Mechanisms' } },
                                { id: 'empathy', name: { ka: 'ემპათია', en: 'Empathy' } },
                                { id: 'existential-therapy', name: { ka: 'ეგზისტენციალური თერაპია', en: 'Existential Therapy' } },
                                { id: 'cbt', name: { ka: 'კოგნიტურ-ბიჰევიორული თერაპია (CBT)', en: 'Cognitive-Behavioral Therapy (CBT)' } },
                                { id: 'family-group-therapy', name: { ka: 'ოჯახური/ჯგუფური თერაპია', en: 'Family/Group Therapy' } },
                                { id: 'psychoanalysis', name: { ka: 'ფსიქოანალიზი', en: 'Psychoanalysis' } },
                                { id: 'self-actualization', name: { ka: 'თვითაქტუალიზაცია', en: 'Self-Actualization' } },
                                { id: 'humanistic-therapy', name: { ka: 'ჰუმანისტური თერაპია', en: 'Humanistic Therapy' } },
                            ]
                        },
                        {
                            id: 'psychology-in-other-fields',
                            name: { ka: 'ფსიქოლოგია სხვა სფეროებში', en: 'Psychology in Other Fields' },
                            keywords: [
                                { id: 'forensic-psychology', name: { ka: 'იურიდიული ფსიქოლოგია', en: 'Forensic Psychology' } },
                                { id: 'neuropsychology', name: { ka: 'ნეიროფსიქოლოგია', en: 'Neuropsychology' } },
                                { id: 'organizational-psychology', name: { ka: 'ორგანიზაციული ფსიქოლოგია', en: 'Organizational Psychology' } },
                                { id: 'burnout', name: { ka: 'პროფესიული გადაწვა', en: 'Burnout' } },
                                { id: 'educational-psychology', name: { ka: 'საგანმანათლებლო ფსიქოლოგია', en: 'Educational Psychology' } },
                                { id: 'sports-psychology', name: { ka: 'სპორტის ფსიქოლოგია', en: 'Sports Psychology' } },
                                { id: 'health-psychology', name: { ka: 'ჯანმრთელობის ფსიქოლოგია', en: 'Health Psychology' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'cognitive-sciences',
                    name: { ka: '💡 III. კოგნიტური მეცნიერებები (გონების კვლევა)', en: '💡 III. Cognitive Sciences (Study of Mind)' },
                    subSections: [
                        {
                            id: 'cognitive-sciences-keywords',
                            name: {ka: 'კოგნიტური მეცნიერებები', en: 'Cognitive Sciences'},
                            keywords: [
                                { id: 'philosophy-of-mind', name: { ka: 'გონების ფილოსოფია', en: 'Philosophy of Mind' } },
                                { id: 'language-acquisition', name: { ka: 'ენის ათვისება', en: 'Language Acquisition' } },
                                { id: 'information-processing', name: { ka: 'ინფორმაციის გადამუშავება', en: 'Information Processing' } },
                                { id: 'qualia', name: { ka: 'კვალია', en: 'Qualia' } },
                                { id: 'cognitive-architecture', name: { ka: 'კოგნიტური არქიტექტურა', en: 'Cognitive Architecture' } },
                                { id: 'cognitive-science', name: { ka: 'კოგნიტური მეცნიერება', en: 'Cognitive Science' } },
                                { id: 'machine-learning', name: { ka: 'მანქანური სწავლება', en: 'Machine Learning' } },
                                { id: 'mental-model', name: { ka: 'მენტალური მოდელი', en: 'Mental Model' } },
                                { id: 'metacognition', name: { ka: 'მეტაკოგნიცია', en: 'Metacognition' } },
                                { id: 'neuroscience', name: { ka: 'ნეირომეცნიერება', en: 'Neuroscience' } },
                                { id: 'neuroplasticity-cog', name: { ka: 'ნეიროპლასტიურობა', en: 'Neuroplasticity' } },
                                { id: 'mirror-neurons', name: { ka: 'სარკისებრი ნეირონები', en: 'Mirror Neurons' } },
                                { id: 'brain-imaging', name: { ka: 'ტვინის ვიზუალიზაცია (fMRI, EEG)', en: 'Brain Imaging (fMRI, EEG)' } },
                                { id: 'phenomenology', name: { ka: 'ფენომენოლოგია', en: 'Phenomenology' } },
                                { id: 'psycholinguistics', name: { ka: 'ფსიქოლინგვისტიკა', en: 'Psycholinguistics' } },
                                { id: 'consciousness', name: { ka: 'ცნობიერება', en: 'Consciousness' } },
                                { id: 'artificial-intelligence', name: { ka: 'ხელოვნური ინტელექტი', en: 'Artificial Intelligence' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'healthy-lifestyle',
            name: { ka: '🏃 ჯანსაღი ცხოვრება', en: '🏃 Healthy Lifestyle' },
            sections: [
                {
                    id: 'physical-health',
                    name: { ka: '🥗 I. ფიზიკური ჯანმრთელობა', en: '🥗 I. Physical Health' },
                    subSections: [
                        {
                            id: 'nutrition-dietetics',
                            name: { ka: 'კვება და დიეტოლოგია', en: 'Nutrition and Dietetics' },
                            keywords: [
                                { id: 'antioxidant-nutrition', name: { ka: 'ანტიოქსიდანტი', en: 'Antioxidant' } },
                                { id: 'glycemic-index', name: { ka: 'გლიკემიური ინდექსი', en: 'Glycemic Index' } },
                                { id: 'balanced-diet', name: { ka: 'დაბალანსებული კვება', en: 'Balanced Diet' } },
                                { id: 'dehydration', name: { ka: 'დეჰიდრატაცია', en: 'Dehydration' } },
                                { id: 'diet', name: { ka: 'დიეტა (ხმელთაშუა ზღვის, კეტო, პალეო)', en: 'Diet (Mediterranean, Keto, Paleo)' } },
                                { id: 'electrolytes', name: { ka: 'ელექტროლიტები', en: 'Electrolytes' } },
                                { id: 'veganism', name: { ka: 'ვეგანობა', en: 'Veganism' } },
                                { id: 'vegetarianism', name: { ka: 'ვეგეტარიანელობა', en: 'Vegetarianism' } },
                                { id: 'vitamins', name: { ka: 'ვიტამინები', en: 'Vitamins' } },
                                { id: 'intermittent-fasting', name: { ka: 'ინტერვალური შიმშილი', en: 'Intermittent Fasting' } },
                                { id: 'calorie', name: { ka: 'კალორია', en: 'Calorie' } },
                                { id: 'minerals', name: { ka: 'მინერალები', en: 'Minerals' } },
                                { id: 'nutrients', name: { ka: 'ნუტრიენტები (მაკრო, მიკრო)', en: 'Nutrients (Macro, Micro)' } },
                                { id: 'organic-food', name: { ka: 'ორგანული საკვები', en: 'Organic Food' } },
                                { id: 'portion-control', name: { ka: 'პორციის კონტროლი', en: 'Portion Control' } },
                                { id: 'dietary-supplements', name: { ka: 'საკვები დანამატები', en: 'Dietary Supplements' } },
                                { id: 'fiber', name: { ka: 'უჯრედისი', en: 'Fiber' } },
                                { id: 'protein-nutrition', name: { ka: 'ცილა', en: 'Protein' } },
                                { id: 'fat-nutrition', name: { ka: 'ცხიმი', en: 'Fat' } },
                                { id: 'carbohydrate-nutrition', name: { ka: 'ნახშირწყალი', en: 'Carbohydrate' } },
                            ]
                        },
                        {
                            id: 'sports-fitness',
                            name: { ka: 'სპორტი და ფიტნესი', en: 'Sports and Fitness' },
                            keywords: [
                                { id: 'aerobics', name: { ka: 'აერობიკა', en: 'Aerobics' } },
                                { id: 'bodybuilding', name: { ka: 'ბოდიბილდინგი', en: 'Bodybuilding' } },
                                { id: 'cool-down', name: { ka: 'გაგრილება', en: 'Cool-down' } },
                                { id: 'warm-up', name: { ka: 'გახურება', en: 'Warm-up' } },
                                { id: 'yoga', name: { ka: 'იოგა', en: 'Yoga' } },
                                { id: 'cardio-exercise', name: { ka: 'კარდიო ვარჯიში', en: 'Cardio Exercise' } },
                                { id: 'crossfit', name: { ka: 'კროსფიტი', en: 'CrossFit' } },
                                { id: 'muscle-hypertrophy', name: { ka: 'კუნთის ჰიპერტროფია', en: 'Muscle Hypertrophy' } },
                                { id: 'flexibility', name: { ka: 'მოქნილობა', en: 'Flexibility' } },
                                { id: 'pilates', name: { ka: 'პილატესი', en: 'Pilates' } },
                                { id: 'running', name: { ka: 'სირბილი', en: 'Running' } },
                                { id: 'stretching', name: { ka: 'სტრეჩინგი', en: 'Stretching' } },
                                { id: 'fitness', name: { ka: 'ფიტნესი', en: 'Fitness' } },
                                { id: 'swimming', name: { ka: 'ცურვა', en: 'Swimming' } },
                                { id: 'strength-training', name: { ka: 'ძალისმიერი ვარჯიში', en: 'Strength Training' } },
                                { id: 'hiit', name: { ka: 'HIIT', en: 'HIIT (High-Intensity Interval Training)' } },
                            ]
                        },
                        {
                            id: 'sleep-rest',
                            name: { ka: 'ძილი და დასვენება', en: 'Sleep and Rest' },
                            keywords: [
                                { id: 'active-rest', name: { ka: 'აქტიური დასვენება', en: 'Active Rest' } },
                                { id: 'rem-deep-sleep', name: { ka: 'REM/ღრმა ძილი', en: 'REM/Deep Sleep' } },
                                { id: 'recreation', name: { ka: 'რეკრეაცია', en: 'Recreation' } },
                                { id: 'insomnia', name: { ka: 'უძილობა', en: 'Insomnia' } },
                                { id: 'sleep-cycle', name: { ka: 'ძილის ციკლი', en: 'Sleep Cycle' } },
                                { id: 'sleep-hygiene', name: { ka: 'ძილის ჰიგიენა', en: 'Sleep Hygiene' } },
                                { id: 'sleep-schedule', name: { ka: 'ძილის რეჟიმი', en: 'Sleep Schedule' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'mental-emotional-wellbeing',
                    name: { ka: '😊 II. მენტალური და ემოციური კეთილდღეობა', en: '😊 II. Mental and Emotional Wellbeing' },
                    subSections: [
                        {
                            id: 'stress-management',
                            name: { ka: 'სტრესის მართვა', en: 'Stress Management' },
                            keywords: [
                                { id: 'adrenaline-stress', name: { ka: 'ადრენალინი', en: 'Adrenaline' } },
                                { id: 'autogenic-training', name: { ka: 'ავტოტრენინგი', en: 'Autogenic Training' } },
                                { id: 'visualization', name: { ka: 'ვიზუალიზაცია', en: 'Visualization' } },
                                { id: 'cortisol', name: { ka: 'კორტიზოლი', en: 'Cortisol' } },
                                { id: 'progressive-muscle-relaxation', name: { ka: 'პროგრესული კუნთური რელაქსაცია', en: 'Progressive Muscle Relaxation' } },
                                { id: 'burnout-stress', name: { ka: 'პროფესიული გადაწვა', en: 'Burnout' } },
                                { id: 'relaxation', name: { ka: 'რელაქსაცია', en: 'Relaxation' } },
                                { id: 'stress-management-term', name: { ka: 'სტრესი', en: 'Stress' } },
                                { id: 'deep-breathing', name: { ka: 'ღრმა სუნთქვა', en: 'Deep Breathing' } },
                                { id: 'fight-or-flight-response', name: { ka: '„ბრძოლა-ან-გაქცევის“ რეაქცია', en: 'Fight-or-Flight Response' } },
                            ]
                        },
                        {
                            id: 'meditation-mindfulness',
                            name: { ka: 'მედიტაცია და გონებამახვილობა (Mindfulness)', en: 'Meditation and Mindfulness' },
                            keywords: [
                                { id: 'being-in-the-present-moment', name: { ka: 'აწმყო მომენტში ყოფნა', en: 'Being in the Present Moment' } },
                                { id: 'mindfulness', name: { ka: 'გონებამახვილობა', en: 'Mindfulness' } },
                                { id: 'meditation', name: { ka: 'მედიტაცია', en: 'Meditation' } },
                                { id: 'body-scan', name: { ka: 'სხეულის სკანირება', en: 'Body Scan' } },
                                { id: 'awareness', name: { ka: 'ცნობიერება', en: 'Awareness' } },
                            ]
                        },
                        {
                            id: 'emotional-intelligence',
                            name: { ka: 'ემოციური ინტელექტი (EQ)', en: 'Emotional Intelligence (EQ)' },
                            keywords: [
                                { id: 'empathy', name: { ka: 'ემპათია', en: 'Empathy' } },
                                { id: 'emotional-intelligence-term', name: { ka: 'ემოციური ინტელექტი', en: 'Emotional Intelligence' } },
                                { id: 'self-regulation', name: { ka: 'თვითრეგულაცია', en: 'Self-Regulation' } },
                                { id: 'self-awareness', name: { ka: 'თვითცნობიერება', en: 'Self-Awareness' } },
                                { id: 'social-skills', name: { ka: 'სოციალური უნარები', en: 'Social Skills' } },
                            ]
                        },
                        {
                            id: 'positive-practices',
                            name: { ka: 'პოზიტიური პრაქტიკები', en: 'Positive Practices' },
                            keywords: [
                                { id: 'affirmations', name: { ka: 'აფირმაციები', en: 'Affirmations' } },
                                { id: 'gratitude-journal', name: { ka: 'მადლიერების დღიური', en: 'Gratitude Journal' } },
                                { id: 'optimism-psy', name: { ka: 'ოპტიმიზმი', en: 'Optimism' } },
                                { id: 'personal-growth', name: { ka: 'პიროვნული ზრდა', en: 'Personal Growth' } },
                                { id: 'self-esteem', name: { ka: 'თვითშეფასება', en: 'Self-esteem' } },
                            ]
                        },
                        {
                            id: 'digital-hygiene',
                            name: { ka: 'ციფრული ჰიგიენა', en: 'Digital Hygiene' },
                            keywords: [
                                { id: 'information-overload', name: { ka: 'ინფორმაციული გადატვირთვა', en: 'Information Overload' } },
                                { id: 'social-media-detox', name: { ka: 'სოციალური მედიისგან დასვენება', en: 'Social Media Detox' } },
                                { id: 'digital-detox', name: { ka: 'ციფრული დეტოქსი', en: 'Digital Detox' } },
                                { id: 'screen-time', name: { ka: 'ეკრანთან გატარებული დრო', en: 'Screen Time' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'body-care-prevention',
                    name: { ka: '🧼 III. სხეულზე ზრუნვა და პრევენცია', en: '🧼 III. Body Care and Prevention' },
                    subSections: [
                        {
                            id: 'personal-hygiene-care',
                            name: { ka: 'პირადი ჰიგიენა', en: 'Personal Hygiene' },
                            keywords: [
                                { id: 'intimate-hygiene', name: { ka: 'ინტიმური ჰიგიენა', en: 'Intimate Hygiene' } },
                                { id: 'skin-care', name: { ka: 'კანის მოვლა', en: 'Skin Care' } },
                                { id: 'oral-hygiene', name: { ka: 'პირის ღრუს ჰიგიენა', en: 'Oral Hygiene' } },
                                { id: 'hair-care', name: { ka: 'თმის მოვლა', en: 'Hair Care' } },
                                { id: 'hand-washing', name: { ka: 'ხელების დაბანა', en: 'Hand Washing' } },
                            ]
                        },
                        {
                            id: 'bad-habits-prevention',
                            name: { ka: 'მავნე ჩვევების პრევენცია', en: 'Prevention of Bad Habits' },
                            keywords: [
                                { id: 'abstinence', name: { ka: 'აბსტინენცია', en: 'Abstinence' } },
                                { id: 'moderate-alcohol-consumption', name: { ka: 'ალკოჰოლის ზომიერი მოხმარება', en: 'Moderate Alcohol Consumption' } },
                                { id: 'addiction', name: { ka: 'დამოკიდებულება', en: 'Addiction' } },
                                { id: 'smoking-cessation', name: { ka: 'თამბაქოსთვის თავის დანებება', en: 'Smoking Cessation' } },
                            ]
                        },
                        {
                            id: 'regular-medical-check-ups',
                            name: { ka: 'რეგულარული სამედიცინო შემოწმებები', en: 'Regular Medical Check-ups' },
                            keywords: [
                                { id: 'blood-pressure-control', name: { ka: 'არტერიული წნევის კონტროლი', en: 'Blood Pressure Control' } },
                                { id: 'routine-vaccination', name: { ka: 'გეგმიური ვაქცინაცია', en: 'Routine Vaccination' } },
                                { id: 'preventive-screening', name: { ka: 'პროფილაქტიკური სკრინინგი', en: 'Preventive Screening' } },
                                { id: 'blood-test', name: { ka: 'სისხლის ანალიზი', en: 'Blood Test' } },
                                { id: 'annual-check-up', name: { ka: 'ყოველწლიური შემოწმება (Check-up)', en: 'Annual Check-up' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'holistic-approaches-practices',
                    name: { ka: '🌿 IV. ჰოლისტური მიდგომები და პრაქტიკები', en: '🌿 IV. Holistic Approaches and Practices' },
                    subSections: [
                        {
                            id: 'holistic-keywords',
                            name: {ka: 'ჰოლისტური პრაქტიკები', en: 'Holistic Practices'},
                            keywords: [
                                { id: 'ayurveda', name: { ka: 'აიურვედა', en: 'Ayurveda' } },
                                { id: 'acupressure', name: { ka: 'აკუპრესურა', en: 'Acupressure' } },
                                { id: 'acupuncture', name: { ka: 'აკუპუნქტურა', en: 'Acupuncture' } },
                                { id: 'aromatherapy', name: { ka: 'არომათერაპია', en: 'Aromatherapy' } },
                                { id: 'asana', name: { ka: 'ასანა', en: 'Asana' } },
                                { id: 'essential-oils', name: { ka: 'ეთერზეთები', en: 'Essential Oils' } },
                                { id: 'yoga-holistic', name: { ka: 'იოგა', en: 'Yoga' } },
                                { id: 'meditation-holistic', name: { ka: 'მედიტაცია', en: 'Meditation' } },
                                { id: 'pranayama', name: { ka: 'პრანაიამა', en: 'Pranayama' } },
                                { id: 'medicinal-plants-holistic', name: { ka: 'სამკურნალო მცენარეები', en: 'Medicinal Plants' } },
                                { id: 'traditional-chinese-medicine', name: { ka: 'ტრადიციული ჩინური მედიცინა (ინ-იანი, ცი ენერგია)', en: 'Traditional Chinese Medicine (Yin-Yang, Qi Energy)' } },
                                { id: 'phytotherapy-holistic', name: { ka: 'ფიტოთერაპია', en: 'Phytotherapy' } },
                                { id: 'chakra', name: { ka: 'ჩაკრა', en: 'Chakra' } },
                            ]
                        }
                    ]
                }
            ]
        }
    ],
};
