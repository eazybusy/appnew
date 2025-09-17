import { Category } from '../types';

export const PROFESSIONS_CATEGORY: Category = {
    id: 'professions',
    name: { ka: '🛠️ პროფესიები და ხელობები', en: '🛠️ Professions and Crafts' },
    icon: '🛠️',
    subCategories: [
        {
            id: 'medicine-healthcare-professions',
            name: { ka: '🩺 I. მედიცინა და ჯანდაცვა', en: '🩺 I. Medicine and Healthcare' },
            sections: [
                {
                    id: 'medical-professions-section',
                    name: { ka: 'სამედიცინო პროფესიები', en: 'Medical Professions' },
                    subSections: [
                        {
                            id: 'doctors-specialists',
                            name: { ka: '👨‍⚕️ ექიმები და სპეციალისტები', en: '👨‍⚕️ Doctors and Specialists' },
                            keywords: [
                                { id: 'doctor', name: { ka: 'ექიმი', en: 'Doctor' } },
                                { id: 'therapist', name: { ka: 'თერაპევტი', en: 'Therapist' } },
                                { id: 'pediatrician', name: { ka: 'პედიატრი', en: 'Pediatrician' } },
                                { id: 'family-doctor', name: { ka: 'ოჯახის ექიმი', en: 'Family doctor' } },
                                { id: 'surgeon', name: { ka: 'ქირურგი', en: 'Surgeon' } },
                                { id: 'neurosurgeon', name: { ka: 'ნეიროქირურგი', en: 'Neurosurgeon' } },
                                { id: 'plastic-surgeon', name: { ka: 'პლასტიკური ქირურგი', en: 'Plastic Surgeon' } },
                                { id: 'orthopedist', name: { ka: 'ორთოპედი', en: 'Orthopedist' } },
                                { id: 'traumatologist', name: { ka: 'ტრავმატოლოგი', en: 'Traumatologist' } },
                                { id: 'cardiologist', name: { ka: 'კარდიოლოგი', en: 'Cardiologist' } },
                                { id: 'oncologist', name: { ka: 'ონკოლოგი', en: 'Oncologist' } },
                                { id: 'neurologist', name: { ka: 'ნევროლოგი', en: 'Neurologist' } },
                                { id: 'dermatologist', name: { ka: 'დერმატოლოგი', en: 'Dermatologist' } },
                                { id: 'allergist', name: { ka: 'ალერგოლოგი', en: 'Allergist' } },
                                { id: 'immunologist-prof', name: { ka: 'იმუნოლოგი', en: 'Immunologist' } },
                                { id: 'endocrinologist-prof', name: { ka: 'ენდოკრინოლოგი', en: 'Endocrinologist' } },
                                { id: 'urologist', name: { ka: 'უროლოგი', en: 'Urologist' } },
                                { id: 'gynecologist', name: { ka: 'გინეკოლოგი', en: 'Gynecologist' } },
                                { id: 'reproductologist', name: { ka: 'რეპროდუქტოლოგი', en: 'Reproductologist' } },
                                { id: 'gastroenterologist', name: { ka: 'გასტროენტეროლოგი', en: 'Gastroenterologist' } },
                                { id: 'pulmonologist', name: { ka: 'პულმონოლოგი', en: 'Pulmonologist' } },
                                { id: 'rheumatologist', name: { ka: 'რევმატოლოგი', en: 'Rheumatologist' } },
                                { id: 'hematologist', name: { ka: 'ჰემატოლოგი', en: 'Hematologist' } },
                                { id: 'infectious-disease-specialist', name: { ka: 'ინფექციონისტი', en: 'Infectious disease specialist' } },
                                { id: 'radiologist', name: { ka: 'რადიოლოგი', en: 'Radiologist' } },
                                { id: 'reanimatologist', name: { ka: 'რეანიმატოლოგი', en: 'Reanimatologist / Intensivist' } },
                                { id: 'anesthesiologist', name: { ka: 'ანესთეზიოლოგი', en: 'Anesthesiologist' } },
                                { id: 'ophthalmologist', name: { ka: 'ოფთალმოლოგი (თვალის ექიმი)', en: 'Ophthalmologist (Eye doctor)' } },
                                { id: 'otolaryngologist', name: { ka: 'ოტოლარინგოლოგი (ყელ-ყურ-ცხვირი)', en: 'Otolaryngologist (ENT)' } },
                                { id: 'pathologist-prof', name: { ka: 'პათოლოგანატომი', en: 'Pathologist' } },
                                { id: 'psychiatrist-prof', name: { ka: 'ფსიქიატრი', en: 'Psychiatrist' } },
                                { id: 'geriatrician', name: { ka: 'გერიატრი', en: 'Geriatrician' } },
                                { id: 'epidemiologist-prof', name: { ka: 'ეპიდემიოლოგი', en: 'Epidemiologist' } },
                                { id: 'geneticist', name: { ka: 'გენეტიკოსი', en: 'Geneticist' } },
                                { id: 'toxicologist-prof', name: { ka: 'ტოქსიკოლოგი', en: 'Toxicologist' } },
                            ]
                        },
                        {
                            id: 'dentistry-professions',
                            name: { ka: '🦷 სტომატოლოგია', en: '🦷 Dentistry' },
                            keywords: [
                                { id: 'dentist', name: { ka: 'სტომატოლოგი', en: 'Dentist' } },
                                { id: 'orthodontist', name: { ka: 'ორთოდონტი', en: 'Orthodontist' } },
                                { id: 'implantologist-surgeon', name: { ka: 'ქირურგ-იმპლანტოლოგი', en: 'Implantologist Surgeon' } },
                                { id: 'endodontist', name: { ka: 'ენდოდონტი', en: 'Endodontist' } },
                                { id: 'periodontologist', name: { ka: 'პაროდონტოლოგი', en: 'Periodontologist' } },
                                { id: 'dental-technician', name: { ka: 'კბილის ტექნიკოსი', en: 'Dental Technician' } },
                                { id: 'dental-assistant', name: { ka: 'სტომატოლოგის ასისტენტი', en: 'Dental Assistant' } },
                                { id: 'hygienist', name: { ka: 'ჰიგიენისტი', en: 'Hygienist' } },
                            ]
                        },
                        {
                            id: 'medical-staff-diagnostics',
                            name: { ka: '🔬 სამედიცინო პერსონალი და დიაგნოსტიკა', en: '🔬 Medical Staff and Diagnostics' },
                            keywords: [
                                { id: 'nurse', name: { ka: 'ექთანი', en: 'Nurse' } },
                                { id: 'nurse-assistant', name: { ka: 'ექთნის თანაშემწე', en: 'Nurse\'s Assistant' } },
                                { id: 'orderly', name: { ka: 'სანიტარი', en: 'Orderly' } },
                                { id: 'laboratory-technician', name: { ka: 'ლაბორანტი', en: 'Laboratory Technician' } },
                                { id: 'microbiologist-prof', name: { ka: 'მიკრობიოლოგი', en: 'Microbiologist' } },
                                { id: 'medical-technologist', name: { ka: 'სამედიცინო ტექნოლოგი', en: 'Medical Technologist' } },
                                { id: 'x-ray-technician', name: { ka: 'რენტგენის ტექნიკოსი', en: 'X-ray Technician' } },
                                { id: 'optometrist', name: { ka: 'ოპტომეტრისტი', en: 'Optometrist' } },
                                { id: 'prosthetist', name: { ka: 'პროთეზისტი', en: 'Prosthetist' } },
                                { id: 'paramedic', name: { ka: 'სასწრაფო დახმარების ექიმი (პარამედიკოსი)', en: 'Paramedic' } },
                                { id: 'medical-representative', name: { ka: 'სამედიცინო წარმომადგენელი', en: 'Medical Representative' } },
                                { id: 'phlebotomist', name: { ka: 'ფლებოტომისტი', en: 'Phlebotomist' } },
                            ]
                        },
                        {
                            id: 'pharmacy-professions',
                            name: { ka: '💊 ფარმაცია', en: '💊 Pharmacy' },
                            keywords: [
                                { id: 'pharmacist', name: { ka: 'ფარმაცევტი', en: 'Pharmacist' } },
                                { id: 'pharmacy-technician', name: { ka: 'ფარმაცევტული ტექნიკოსი', en: 'Pharmacy Technician' } },
                                { id: 'clinical-pharmacist-prof', name: { ka: 'კლინიკური ფარმაცევტი', en: 'Clinical Pharmacist' } },
                            ]
                        },
                        {
                            id: 'rehabilitation-therapy',
                            name: { ka: '❤️‍🩹 რეაბილიტაცია და თერაპია', en: '❤️‍🩹 Rehabilitation and Therapy' },
                            keywords: [
                                { id: 'psychologist', name: { ka: 'ფსიქოლოგი', en: 'Psychologist' } },
                                { id: 'psychotherapist', name: { ka: 'ფსიქოთერაპევტი', en: 'Psychotherapist' } },
                                { id: 'speech-therapist', name: { ka: 'ლოგოპედი', en: 'Speech Therapist' } },
                                { id: 'occupational-therapist', name: { ka: 'ოკუპაციური თერაპევტი', en: 'Occupational Therapist' } },
                                { id: 'physiotherapist-prof', name: { ka: 'ფიზიოთერაპევტი', en: 'Physiotherapist' } },
                                { id: 'kinesiologist', name: { ka: 'კინეზიოლოგი', en: 'Kinesiologist' } },
                                { id: 'massage-therapist', name: { ka: 'მასაჟისტი', en: 'Massage Therapist' } },
                                { id: 'chiropractor', name: { ka: 'ქიროპრაქტორი', en: 'Chiropractor' } },
                            ]
                        },
                        {
                            id: 'veterinary-professions',
                            name: { ka: '🐾 ვეტერინარია', en: '🐾 Veterinary' },
                            keywords: [
                                { id: 'veterinarian', name: { ka: 'ვეტერინარი', en: 'Veterinarian' } },
                                { id: 'veterinary-assistant', name: { ka: 'ვეტერინარის ასისტენტი', en: 'Veterinary Assistant' } },
                                { id: 'zoopsychologist', name: { ka: 'ზოოფსიქოლოგი', en: 'Zoopsychologist' } },
                                { id: 'groomer', name: { ka: 'გრუმერი', en: 'Groomer' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'science-education-professions',
            name: { ka: '🎓 II. მეცნიერება და განათლება', en: '🎓 II. Science and Education' },
            sections: [
                {
                    id: 'science-education-section',
                    name: { ka: 'მეცნიერება და განათლების პროფესიები', en: 'Science and Education Professions' },
                    subSections: [
                        {
                            id: 'researchers-scientists',
                            name: { ka: '🔬 მკვლევრები და მეცნიერები', en: '🔬 Researchers and Scientists' },
                            keywords: [
                                { id: 'research-scientist', name: { ka: 'მეცნიერ-მკვლევარი', en: 'Research Scientist' } },
                                { id: 'physicist', name: { ka: 'ფიზიკოსი', en: 'Physicist' } },
                                { id: 'chemist', name: { ka: 'ქიმიკოსი', en: 'Chemist' } },
                                { id: 'biologist', name: { ka: 'ბიოლოგი', en: 'Biologist' } },
                                { id: 'astronomer', name: { ka: 'ასტრონომი', en: 'Astronomer' } },
                                { id: 'astrophysicist', name: { ka: 'ასტროფიზიკოსი', en: 'Astrophysicist' } },
                                { id: 'geologist-prof', name: { ka: 'გეოლოგი', en: 'Geologist' } },
                                { id: 'geographer', name: { ka: 'გეოგრაფი', en: 'Geographer' } },
                                { id: 'mathematician', name: { ka: 'მათემატიკოსი', en: 'Mathematician' } },
                                { id: 'statistician', name: { ka: 'სტატისტიკოსი', en: 'Statistician' } },
                                { id: 'ecologist-prof', name: { ka: 'ეკოლოგი', en: 'Ecologist' } },
                                { id: 'oceanographer', name: { ka: 'ოკეანოგრაფი', en: 'Oceanographer' } },
                                { id: 'meteorologist', name: { ka: 'მეტეოროლოგი', en: 'Meteorologist' } },
                                { id: 'historian', name: { ka: 'ისტორიკოსი', en: 'Historian' } },
                                { id: 'archaeologist', name: { ka: 'არქეოლოგი', en: 'Archaeologist' } },
                                { id: 'anthropologist', name: { ka: 'ანთროპოლოგი', en: 'Anthropologist' } },
                                { id: 'sociologist', name: { ka: 'სოციოლოგი', en: 'Sociologist' } },
                                { id: 'philologist', name: { ka: 'ფილოლოგი', en: 'Philologist' } },
                                { id: 'philosopher', name: { ka: 'ფილოსოფოსი', en: 'Philosopher' } },
                                { id: 'linguist', name: { ka: 'ლინგვისტი', en: 'Linguist' } },
                                { id: 'political-scientist', name: { ka: 'პოლიტოლოგი', en: 'Political Scientist' } },
                                { id: 'paleontologist', name: { ka: 'პალეონტოლოგი', en: 'Paleontologist' } },
                            ]
                        },
                        {
                            id: 'education-sector',
                            name: { ka: '👨‍🏫 განათლების სფერო', en: '👨‍🏫 Education Sector' },
                            keywords: [
                                { id: 'teacher', name: { ka: 'მასწავლებელი', en: 'Teacher' } },
                                { id: 'educator', name: { ka: 'პედაგოგი', en: 'Educator' } },
                                { id: 'professor', name: { ka: 'პროფესორი', en: 'Professor' } },
                                { id: 'lecturer', name: { ka: 'ლექტორი', en: 'Lecturer' } },
                                { id: 'associate-professor', name: { ka: 'დოცენტი', en: 'Associate Professor' } },
                                { id: 'tutor', name: { ka: 'რეპეტიტორი', en: 'Tutor' } },
                                { id: 'school-principal', name: { ka: 'სკოლის დირექტორი', en: 'School Principal' } },
                                { id: 'dean', name: { ka: 'დეკანი', en: 'Dean' } },
                                { id: 'methodologist', name: { ka: 'მეთოდისტი', en: 'Methodologist' } },
                                { id: 'school-psychologist', name: { ka: 'სკოლის ფსიქოლოგი', en: 'School Psychologist' } },
                                { id: 'special-education-teacher', name: { ka: 'სპეც-მასწავლებელი', en: 'Special Education Teacher' } },
                                { id: 'librarian', name: { ka: 'ბიბლიოთეკარი', en: 'Librarian' } },
                                { id: 'archivist', name: { ka: 'არქივარიუსი', en: 'Archivist' } },
                                { id: 'museum-curator', name: { ka: 'მუზეუმის კურატორი', en: 'Museum Curator' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'engineering-it-professions',
            name: { ka: '💻 III. ინჟინერია და IT', en: '💻 III. Engineering and IT' },
            sections: [
                {
                    id: 'engineering-it-section',
                    name: { ka: 'ინჟინერიის და IT პროფესიები', en: 'Engineering and IT Professions' },
                    subSections: [
                        {
                            id: 'engineering-professions',
                            name: { ka: '🏗️ საინჟინრო საქმე', en: '🏗️ Engineering' },
                            keywords: [
                                { id: 'engineer', name: { ka: 'ინჟინერი (სამოქალაქო, მექანიკური, ელექტრო, ქიმიური, ბიოსამედიცინო, საავიაციო, ბირთვული, გარემოსდაცვითი)', en: 'Engineer (Civil, Mechanical, Electrical, Chemical, Biomedical, Aerospace, Nuclear, Environmental)' } },
                                { id: 'architect', name: { ka: 'არქიტექტორი', en: 'Architect' } },
                                { id: 'structural-engineer', name: { ka: 'კონსტრუქტორი', en: 'Structural Engineer' } },
                                { id: 'geodesist-surveyor', name: { ka: 'გეოდეზისტი', en: 'Geodesist (Surveyor)' } },
                            ]
                        },
                        {
                            id: 'software-development-professions',
                            name: { ka: '💾 პროგრამული უზრუნველყოფის შემუშავება', en: '💾 Software Development' },
                            keywords: [
                                { id: 'programmer', name: { ka: 'პროგრამისტი', en: 'Programmer' } },
                                { id: 'software-engineer', name: { ka: 'პროგრამული უზრუნველყოფის ინჟინერი (Software Engineer)', en: 'Software Engineer' } },
                                { id: 'web-developer', name: { ka: 'ვებ-დეველოპერი (Front-end, Back-end, Full-stack)', en: 'Web Developer (Front-end, Back-end, Full-stack)' } },
                                { id: 'mobile-app-developer', name: { ka: 'მობილური აპლიკაციების დეველოპერი', en: 'Mobile App Developer' } },
                                { id: 'game-developer', name: { ka: 'თამაშების დეველოპერი (Game Developer)', en: 'Game Developer' } },
                                { id: 'embedded-systems-engineer', name: { ka: 'ჩაშენებული სისტემების ინჟინერი (Embedded Systems Engineer)', en: 'Embedded Systems Engineer' } },
                                { id: 'blockchain-developer', name: { ka: 'ბლოკჩეინ დეველოპერი', en: 'Blockchain Developer' } },
                            ]
                        },
                        {
                            id: 'data-ai-professions',
                            name: { ka: '📊 მონაცემები და ხელოვნური ინტელექტი', en: '📊 Data and Artificial Intelligence' },
                            keywords: [
                                { id: 'data-analyst', name: { ka: 'მონაცემთა ანალიტიკოსი', en: 'Data Analyst' } },
                                { id: 'data-scientist', name: { ka: 'მონაცემთა მეცნიერი (Data Scientist)', en: 'Data Scientist' } },
                                { id: 'dba', name: { ka: 'მონაცემთა ბაზის ადმინისტრატორი (DBA)', en: 'Database Administrator (DBA)' } },
                                { id: 'data-engineer', name: { ka: 'მონაცემთა ინჟინერი', en: 'Data Engineer' } },
                                { id: 'ml-engineer', name: { ka: 'მანქანური სწავლების ინჟინერი (ML Engineer)', en: 'Machine Learning Engineer' } },
                                { id: 'ai-specialist', name: { ka: 'ხელოვნური ინტელექტის სპეციალისტი', en: 'AI Specialist' } },
                            ]
                        },
                        {
                            id: 'it-infrastructure-security',
                            name: { ka: '🌐 IT ინფრასტრუქტურა და უსაფრთხოება', en: '🌐 IT Infrastructure and Security' },
                            keywords: [
                                { id: 'it-specialist', name: { ka: 'IT სპეციალისტი', en: 'IT Specialist' } },
                                { id: 'system-administrator', name: { ka: 'სისტემური ადმინისტრატორი', en: 'System Administrator' } },
                                { id: 'network-administrator', name: { ka: 'ქსელის ადმინისტრატორი', en: 'Network Administrator' } },
                                { id: 'devops-engineer', name: { ka: 'DevOps ინჟინერი', en: 'DevOps Engineer' } },
                                { id: 'cloud-engineer', name: { ka: 'Cloud ინჟინერი', en: 'Cloud Engineer' } },
                                { id: 'cybersecurity-specialist', name: { ka: 'კიბერუსაფრთხოების სპეციალისტი', en: 'Cybersecurity Specialist' } },
                                { id: 'cybersecurity-analyst', name: { ka: 'კიბერუსაფრთხოების ანალიტიკოსი', en: 'Cybersecurity Analyst' } },
                                { id: 'ethical-hacker', name: { ka: 'ეთიკური ჰაკერი', en: 'Ethical Hacker' } },
                            ]
                        },
                        {
                            id: 'product-design-management',
                            name: { ka: '🎨 პროდუქტის დიზაინი და მართვა', en: '🎨 Product Design and Management' },
                            keywords: [
                                { id: 'ui-ux-designer', name: { ka: 'UI/UX დიზაინერი', en: 'UI/UX Designer' } },
                                { id: 'product-manager', name: { ka: 'პროდუქტის მენეჯერი (Product Manager)', en: 'Product Manager' } },
                                { id: 'project-manager', name: { ka: 'პროექტის მენეჯერი (Project Manager)', en: 'Project Manager' } },
                                { id: 'qa-engineer', name: { ka: 'QA (ხარისხის კონტროლის) ინჟინერი', en: 'QA (Quality Assurance) Engineer' } },
                                { id: 'scrum-master', name: { ka: 'Scrum მასტერი', en: 'Scrum Master' } },
                                { id: 'product-owner', name: { ka: 'Product Owner', en: 'Product Owner' } },
                                { id: 'business-analyst', name: { ka: 'ბიზნეს ანალიტიკოსი', en: 'Business Analyst' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'business-finance-admin',
            name: { ka: '💼 IV. ბიზნესი, ფინანსები და ადმინისტრირება', en: '💼 IV. Business, Finance, and Administration' },
            sections: [
                {
                    id: 'business-finance-admin-section',
                    name: { ka: 'ბიზნესის, ფინანსების და ადმინისტრირების პროფესიები', en: 'Business, Finance, and Administration Professions' },
                    subSections: [
                        {
                            id: 'finance-accounting',
                            name: { ka: '💰 ფინანსები და აღრიცხვა', en: '💰 Finance and Accounting' },
                            keywords: [
                                { id: 'financier', name: { ka: 'ფინანსისტი', en: 'Financier' } },
                                { id: 'economist', name: { ka: 'ეკონომისტი', en: 'Economist' } },
                                { id: 'accountant', name: { ka: 'ბუღალტერი', en: 'Accountant' } },
                                { id: 'auditor', name: { ka: 'აუდიტორი', en: 'Auditor' } },
                                { id: 'banker', name: { ka: 'ბანკირი', en: 'Banker' } },
                                { id: 'broker', name: { ka: 'ბროკერი', en: 'Broker' } },
                                { id: 'investor-prof', name: { ka: 'ინვესტორი', en: 'Investor' } },
                                { id: 'financial-analyst', name: { ka: 'ფინანსური ანალიტიკოსი', en: 'Financial Analyst' } },
                                { id: 'actuary', name: { ka: 'აქტუარი', en: 'Actuary' } },
                                { id: 'appraiser', name: { ka: 'შემფასებელი', en: 'Appraiser' } },
                                { id: 'risk-manager', name: { ka: 'რისკების მენეჯერი', en: 'Risk Manager' } },
                                { id: 'credit-officer', name: { ka: 'საკრედიტო ექსპერტი', en: 'Credit Officer' } },
                            ]
                        },
                        {
                            id: 'management-administration',
                            name: { ka: '📈 მენეჯმენტი და მართვა', en: '📈 Management and Administration' },
                            keywords: [
                                { id: 'manager', name: { ka: 'მენეჯერი', en: 'Manager' } },
                                { id: 'director-prof', name: { ka: 'დირექტორი', en: 'Director' } },
                                { id: 'founder', name: { ka: 'დამფუძნებელი', en: 'Founder' } },
                                { id: 'entrepreneur-prof', name: { ka: 'მეწარმე', en: 'Entrepreneur' } },
                                { id: 'ceo', name: { ka: 'აღმასრულებელი დირექტორი (CEO)', en: 'Chief Executive Officer (CEO)' } },
                                { id: 'coo', name: { ka: 'ოპერაციული დირექტორი (COO)', en: 'Chief Operating Officer (COO)' } },
                                { id: 'cfo', name: { ka: 'ფინანსური დირექტორი (CFO)', en: 'Chief Financial Officer (CFO)' } },
                                { id: 'hr-manager', name: { ka: 'ადამიანური რესურსების (HR) მენეჯერი', en: 'Human Resources (HR) Manager' } },
                                { id: 'operations-manager', name: { ka: 'ოპერაციული მენეჯერი', en: 'Operations Manager' } },
                                { id: 'logistics-manager', name: { ka: 'ლოჯისტიკის მენეჯერი', en: 'Logistics Manager' } },
                                { id: 'project-coordinator', name: { ka: 'პროექტის კოორდინატორი', en: 'Project Coordinator' } },
                            ]
                        },
                        {
                            id: 'marketing-sales',
                            name: { ka: '📢 მარკეტინგი და გაყიდვები', en: '📢 Marketing and Sales' },
                            keywords: [
                                { id: 'marketer', name: { ka: 'მარკეტერი', en: 'Marketer' } },
                                { id: 'digital-marketer', name: { ka: 'ციფრული მარკეტერი', en: 'Digital Marketer' } },
                                { id: 'smm-manager', name: { ka: 'SMM მენეჯერი', en: 'SMM Manager' } },
                                { id: 'seo-specialist', name: { ka: 'SEO სპეციალისტი', en: 'SEO Specialist' } },
                                { id: 'content-manager', name: { ka: 'კონტენტ მენეჯერი', en: 'Content Manager' } },
                                { id: 'pr-manager', name: { ka: 'პიარ-მენეჯერი', en: 'PR Manager' } },
                                { id: 'brand-manager', name: { ka: 'ბრენდ მენეჯერი', en: 'Brand Manager' } },
                                { id: 'sales-manager', name: { ka: 'გაყიდვების მენეჯერი', en: 'Sales Manager' } },
                                { id: 'realtor', name: { ka: 'რეალტორი (უძრავი ქონების აგენტი)', en: 'Realtor (Real Estate Agent)' } },
                                { id: 'buyer', name: { ka: 'მყიდველი (შესყიდვების სპეციალისტი)', en: 'Buyer (Procurement Specialist)' } },
                            ]
                        },
                        {
                            id: 'administration-operations',
                            name: { ka: '📋 ადმინისტრირება და ოპერაციები', en: '📋 Administration and Operations' },
                            keywords: [
                                { id: 'administrator', name: { ka: 'ადმინისტრატორი', en: 'Administrator' } },
                                { id: 'secretary', name: { ka: 'მდივანი', en: 'Secretary' } },
                                { id: 'office-manager', name: { ka: 'ოფის მენეჯერი', en: 'Office Manager' } },
                                { id: 'operator', name: { ka: 'ოპერატორი', en: 'Operator' } },
                                { id: 'legal-counsel', name: { ka: 'იურისკონსულტი (კომპანიის)', en: 'Legal Counsel (Corporate)' } },
                                { id: 'consultant', name: { ka: 'კონსულტანტი', en: 'Consultant' } },
                                { id: 'analyst-admin', name: { ka: 'ანალიტიკოსი', en: 'Analyst' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'law-public-service',
            name: { ka: '⚖️ V. სამართალი და საჯარო სამსახური', en: '⚖️ V. Law and Public Service' },
            sections: [
                {
                    id: 'law-public-service-section',
                    name: { ka: 'სამართლის და საჯარო სამსახურის პროფესიები', en: 'Law and Public Service Professions' },
                    subSections: [
                        {
                            id: 'legal-professions',
                            name: { ka: '🏛️ იურიდიული პროფესიები', en: '🏛️ Legal Professions' },
                            keywords: [
                                { id: 'lawyer', name: { ka: 'იურისტი', en: 'Lawyer' } },
                                { id: 'attorney-advocate', name: { ka: 'ადვოკატი', en: 'Attorney/Advocate' } },
                                { id: 'judge', name: { ka: 'მოსამართლე', en: 'Judge' } },
                                { id: 'prosecutor-prof', name: { ka: 'პროკურორი', en: 'Prosecutor' } },
                                { id: 'notary', name: { ka: 'ნოტარიუსი', en: 'Notary' } },
                                { id: 'legal-consultant', name: { ka: 'იურიდიული კონსულტანტი', en: 'Legal Consultant' } },
                                { id: 'investigator', name: { ka: 'გამომძიებელი', en: 'Investigator' } },
                                { id: 'criminologist-prof', name: { ka: 'კრიმინალისტი', en: 'Criminologist' } },
                                { id: 'forensic-expert', name: { ka: 'სასამართლო ექსპერტი', en: 'Forensic Expert' } },
                                { id: 'paralegal', name: { ka: 'პარალიგალი (იურიდიული თანაშემწე)', en: 'Paralegal (Legal Assistant)' } },
                            ]
                        },
                        {
                            id: 'law-enforcement-security',
                            name: { ka: '👮‍♂️ ძალოვანი სტრუქტურები და უსაფრთხოება', en: '👮‍♂️ Law Enforcement and Security' },
                            keywords: [
                                { id: 'police-officer', name: { ka: 'პოლიციელი', en: 'Police Officer' } },
                                { id: 'patrol-officer', name: { ka: 'პატრულის ოფიცერი', en: 'Patrol Officer' } },
                                { id: 'detective', name: { ka: 'დეტექტივი', en: 'Detective' } },
                                { id: 'military-personnel', name: { ka: 'სამხედრო მოსამსახურე (ჯარისკაცი, ოფიცერი)', en: 'Military Personnel (Soldier, Officer)' } },
                                { id: 'border-guard', name: { ka: 'მესაზღვრე', en: 'Border Guard' } },
                                { id: 'customs-officer', name: { ka: 'მებაჟე', en: 'Customs Officer' } },
                                { id: 'corrections-officer', name: { ka: 'პენიტენციური სამსახურის თანამშრომელი', en: 'Corrections Officer' } },
                                { id: 'security-guard', name: { ka: 'დაცვის თანამშრომელი', en: 'Security Guard' } },
                            ]
                        },
                        {
                            id: 'emergency-services',
                            name: { ka: '🧑‍🚒 საგანგებო სიტუაციების მართვა', en: '🧑‍🚒 Emergency Services' },
                            keywords: [
                                { id: 'firefighter-rescuer', name: { ka: 'მეხანძრე-მაშველი', en: 'Firefighter-Rescuer' } },
                                { id: 'rescuer', name: { ka: 'სამაშველო სამსახურის თანამშრომელი', en: 'Rescuer' } },
                                { id: 'dispatcher', name: { ka: 'დისპეტჩერი', en: 'Dispatcher' } },
                            ]
                        },
                        {
                            id: 'diplomacy-public-service',
                            name: { ka: '🌐 დიპლომატია და საჯარო სამსახური', en: '🌐 Diplomacy and Public Service' },
                            keywords: [
                                { id: 'civil-servant', name: { ka: 'საჯარო მოხელე', en: 'Civil Servant' } },
                                { id: 'diplomat', name: { ka: 'დიპლომატი', en: 'Diplomat' } },
                                { id: 'ambassador-prof', name: { ka: 'ელჩი', en: 'Ambassador' } },
                                { id: 'consul-prof', name: { ka: 'კონსული', en: 'Consul' } },
                                { id: 'attache', name: { ka: 'ატაშე', en: 'Attaché' } },
                                { id: 'social-worker', name: { ka: 'სოციალური მუშაკი', en: 'Social Worker' } },
                                { id: 'municipal-inspector', name: { ka: 'მუნიციპალური ინსპექტორი', en: 'Municipal Inspector' } },
                                { id: 'state-auditor', name: { ka: 'სახელმწიფო აუდიტორი', en: 'State Auditor' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'arts-design-media',
            name: { ka: '🎭 VI. ხელოვნება, დიზაინი და მედია', en: '🎭 VI. Arts, Design, and Media' },
            sections: [
                {
                    id: 'arts-design-media-section',
                    name: { ka: 'ხელოვნების, დიზაინის და მედიის პროფესიები', en: 'Arts, Design, and Media Professions' },
                    subSections: [
                        {
                            id: 'visual-arts-professions',
                            name: { ka: '🎨 ვიზუალური ხელოვნება', en: '🎨 Visual Arts' },
                            keywords: [
                                { id: 'artist-painter', name: { ka: 'მხატვარი', en: 'Artist/Painter' } },
                                { id: 'sculptor', name: { ka: 'მოქანდაკე', en: 'Sculptor' } },
                                { id: 'photographer', name: { ka: 'ფოტოგრაფი', en: 'Photographer' } },
                                { id: 'illustrator', name: { ka: 'ილუსტრატორი', en: 'Illustrator' } },
                                { id: 'graphic-designer', name: { ka: 'გრაფიკული დიზაინერი', en: 'Graphic Designer' } },
                                { id: 'animator', name: { ka: 'ანიმატორი', en: 'Animator' } },
                                { id: 'ceramist', name: { ka: 'კერამიკოსი', en: 'Ceramist' } },
                                { id: 'curator', name: { ka: 'კურატორი', en: 'Curator' } },
                                { id: 'gallerist', name: { ka: 'გალერისტი', en: 'Gallerist' } },
                                { id: 'art-dealer', name: { ka: 'არტ-დილერი', en: 'Art Dealer' } },
                                { id: 'concept-artist', name: { ka: 'კონცეპტ-არტისტი', en: 'Concept Artist' } },
                            ]
                        },
                        {
                            id: 'performing-arts-professions',
                            name: { ka: '🎬 საშემსრულებლო ხელოვნება', en: '🎬 Performing Arts' },
                            keywords: [
                                { id: 'actor', name: { ka: 'მსახიობი', en: 'Actor' } },
                                { id: 'director-performing', name: { ka: 'რეჟისორი', en: 'Director' } },
                                { id: 'musician', name: { ka: 'მუსიკოსი', en: 'Musician' } },
                                { id: 'singer', name: { ka: 'მომღერალი', en: 'Singer' } },
                                { id: 'composer-performing', name: { ka: 'კომპოზიტორი', en: 'Composer' } },
                                { id: 'conductor', name: { ka: 'დირიჟორი', en: 'Conductor' } },
                                { id: 'choreographer-prof', name: { ka: 'ქორეოგრაფი', en: 'Choreographer' } },
                                { id: 'dancer', name: { ka: 'მოცეკვავე', en: 'Dancer' } },
                                { id: 'dj', name: { ka: 'დიჯეი', en: 'DJ' } },
                                { id: 'performer', name: { ka: 'პერფორმერი', en: 'Performer' } },
                                { id: 'stunt-performer', name: { ka: 'კასკადიორი', en: 'Stunt Performer' } },
                                { id: 'illusionist', name: { ka: 'ილუზიონისტი', en: 'Illusionist' } },
                            ]
                        },
                        {
                            id: 'literature-media-professions',
                            name: { ka: '✍️ ლიტერატურა და მედია', en: '✍️ Literature and Media' },
                            keywords: [
                                { id: 'writer', name: { ka: 'მწერალი', en: 'Writer' } },
                                { id: 'poet', name: { ka: 'პოეტი', en: 'Poet' } },
                                { id: 'journalist', name: { ka: 'ჟურნალისტი', en: 'Journalist' } },
                                { id: 'editor', name: { ka: 'რედაქტორი', en: 'Editor' } },
                                { id: 'proofreader', name: { ka: 'კორექტორი', en: 'Proofreader' } },
                                { id: 'screenwriter', name: { ka: 'სცენარისტი', en: 'Screenwriter' } },
                                { id: 'translator', name: { ka: 'მთარგმნელი', en: 'Translator' } },
                                { id: 'blogger', name: { ka: 'ბლოგერი', en: 'Blogger' } },
                                { id: 'influencer', name: { ka: 'ინფლუენსერი', en: 'Influencer' } },
                                { id: 'tv-host', name: { ka: 'ტელეწამყვანი', en: 'TV Host' } },
                                { id: 'radio-host', name: { ka: 'რადიოწამყვანი', en: 'Radio Host' } },
                                { id: 'producer-media', name: { ka: 'პროდიუსერი', en: 'Producer' } },
                                { id: 'cinematographer-media', name: { ka: 'კინოოპერატორი', en: 'Cinematographer' } },
                                { id: 'sound-director', name: { ka: 'ხმის რეჟისორი', en: 'Sound Director' } },
                                { id: 'technical-writer', name: { ka: 'ტექნიკური მწერალი', en: 'Technical Writer' } },
                            ]
                        },
                        {
                            id: 'design-professions',
                            name: { ka: '✨ დიზაინი', en: '✨ Design' },
                            keywords: [
                                { id: 'interior-designer', name: { ka: 'ინტერიერის დიზაინერი', en: 'Interior Designer' } },
                                { id: 'landscape-designer', name: { ka: 'ლანდშაფტის დიზაინერი', en: 'Landscape Designer' } },
                                { id: 'fashion-designer', name: { ka: 'მოდის დიზაინერი', en: 'Fashion Designer' } },
                                { id: 'web-designer', name: { ka: 'ვებ-დიზაინერი', en: 'Web Designer' } },
                                { id: 'industrial-designer', name: { ka: 'სამრეწველო დიზაინერი', en: 'Industrial Designer' } },
                                { id: 'costume-designer', name: { ka: 'კოსტიუმების დიზაინერი', en: 'Costume Designer' } },
                                { id: 'lighting-designer', name: { ka: 'განათების დიზაინერი', en: 'Lighting Designer' } },
                                { id: 'makeup-artist-design', name: { ka: 'ვიზაჟისტი', en: 'Makeup Artist' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'crafts-construction-production',
            name: { ka: '🔨 VII. ხელობები, მშენებლობა და წარმოება', en: '🔨 VII. Crafts, Construction, and Production' },
            sections: [
                {
                    id: 'crafts-construction-production-section',
                    name: { ka: 'ხელობების, მშენებლობის და წარმოების პროფესიები', en: 'Crafts, Construction, and Production Professions' },
                    subSections: [
                        {
                            id: 'craftsmen-technicians',
                            name: { ka: '🔧 ხელოსნები და ტექნიკოსები', en: '🔧 Craftsmen and Technicians' },
                            keywords: [
                                { id: 'carpenter', name: { ka: 'დურგალი', en: 'Carpenter' } },
                                { id: 'locksmith-mechanic', name: { ka: 'ზეინკალი', en: 'Locksmith/Mechanic' } },
                                { id: 'electrician', name: { ka: 'ელექტრიკოსი', en: 'Electrician' } },
                                { id: 'plumber', name: { ka: 'სანტექნიკოსი', en: 'Plumber' } },
                                { id: 'welder', name: { ka: 'შემდუღებელი', en: 'Welder' } },
                                { id: 'painter', name: { ka: 'მღებავი', en: 'Painter' } },
                                { id: 'mechanic', name: { ka: 'მექანიკოსი', en: 'Mechanic' } },
                                { id: 'furniture-maker', name: { ka: 'ავეჯის ხელოსანი', en: 'Furniture Maker' } },
                                { id: 'watchmaker', name: { ka: 'მესაათე', en: 'Watchmaker' } },
                                { id: 'jeweler', name: { ka: 'იუველირი', en: 'Jeweler' } },
                                { id: 'goldsmith', name: { ka: 'ოქრომჭედელი', en: 'Goldsmith' } },
                                { id: 'glassblower', name: { ka: 'მინის მბერავი', en: 'Glassblower' } },
                                { id: 'woodworker', name: { ka: 'ხის ხელოსანი', en: 'Woodworker' } },
                                { id: 'installer', name: { ka: 'მემონტაჟე', en: 'Installer' } },
                                { id: 'lathe-operator', name: { ka: 'ხარატი', en: 'Lathe Operator' } },
                            ]
                        },
                        {
                            id: 'light-industry-food-production',
                            name: { ka: '🧵 მსუბუქი მრეწველობა და კვება', en: '🧵 Light Industry and Food Production' },
                            keywords: [
                                { id: 'tailor', name: { ka: 'თერძი', en: 'Tailor' } },
                                { id: 'seamstress', name: { ka: 'მკერავი', en: 'Seamstress/Tailor' } },
                                { id: 'weaver', name: { ka: 'მქსოველი', en: 'Weaver' } },
                                { id: 'shoemaker', name: { ka: 'მეწაღე', en: 'Shoemaker' } },
                                { id: 'potter', name: { ka: 'მეთუნე', en: 'Potter' } },
                                { id: 'baker', name: { ka: 'მეხაბაზe', en: 'Baker' } },
                                { id: 'winemaker', name: { ka: 'მეღვინე', en: 'Winemaker' } },
                                { id: 'cheesemaker', name: { ka: 'ყველის ოსტატი', en: 'Cheesemaker' } },
                                { id: 'brewer', name: { ka: 'ლუდის მხარშავი', en: 'Brewer' } },
                            ]
                        },
                        {
                            id: 'construction-professions',
                            name: { ka: '🏗️ მშენებლობა', en: '🏗️ Construction' },
                            keywords: [
                                { id: 'builder', name: { ka: 'მშენებელი', en: 'Builder' } },
                                { id: 'bricklayer', name: { ka: 'კალატოზი', en: 'Bricklayer' } },
                                { id: 'plasterer', name: { ka: 'მლესავი', en: 'Plasterer' } },
                                { id: 'crane-operator', name: { ka: 'ამწის ოპერატორი', en: 'Crane Operator' } },
                                { id: 'excavator-operator', name: { ka: 'ექსკავატორის ოპერატორი', en: 'Excavator Operator' } },
                                { id: 'civil-engineer-prof', name: { ka: 'ინჟინერ-მშენებელი', en: 'Civil Engineer' } },
                                { id: 'site-manager-foreman', name: { ka: 'პროექტის ზედამხედველი (პრორაბი)', en: 'Site Manager (Foreman)' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'service-tourism-hospitality',
            name: { ka: '🛎️ VIII. სერვისი, ტურიზმი და მომსახურება', en: '🛎️ VIII. Service, Tourism, and Hospitality' },
            sections: [
                {
                    id: 'service-tourism-section',
                    name: { ka: 'სერვისის, ტურიზმის და მომსახურების პროფესიები', en: 'Service, Tourism, and Hospitality Professions' },
                    subSections: [
                        {
                            id: 'hospitality-tourism',
                            name: { ka: '🏨 სტუმარმასპინძლობა და ტურიზმი', en: '🏨 Hospitality and Tourism' },
                            keywords: [
                                { id: 'hotel-manager', name: { ka: 'სასტუმროს მენეჯერი', en: 'Hotel Manager' } },
                                { id: 'receptionist', name: { ka: 'ადმინისტრატორი (რესეფშენის)', en: 'Receptionist' } },
                                { id: 'concierge', name: { ka: 'კონსიერჟი', en: 'Concierge' } },
                                { id: 'porter', name: { ka: 'პორტიე', en: 'Porter' } },
                                { id: 'bellboy', name: { ka: 'ბელბოი', en: 'Bellboy' } },
                                { id: 'hostess', name: { ka: 'ჰოსტესა', en: 'Hostess' } },
                                { id: 'travel-agent', name: { ka: 'ტურისტული აგენტი', en: 'Travel Agent' } },
                                { id: 'guide', name: { ka: 'გიდი', en: 'Guide' } },
                                { id: 'tour-guide', name: { ka: 'ექსკურსიამძღოლი', en: 'Tour Guide' } },
                                { id: 'event-planner', name: { ka: 'ღონისძიებების ორგანიზატორი', en: 'Event Planner' } },
                            ]
                        },
                        {
                            id: 'food-beverages',
                            name: { ka: '👨‍🍳 კვება და სასმელები', en: '👨‍🍳 Food and Beverages' },
                            keywords: [
                                { id: 'chef', name: { ka: 'შეფ-მზარეული', en: 'Chef' } },
                                { id: 'cook', name: { ka: 'მზარეული', en: 'Cook' } },
                                { id: 'pastry-chef', name: { ka: 'კონდიტერი', en: 'Pastry Chef' } },
                                { id: 'barista', name: { ka: 'ბარისტა', en: 'Barista' } },
                                { id: 'bartender', name: { ka: 'ბარმენი', en: 'Bartender' } },
                                { id: 'waiter-waitress', name: { ka: 'მიმტანი', en: 'Waiter/Waitress' } },
                                { id: 'sommelier', name: { ka: 'სომელიე', en: 'Sommelier' } },
                                { id: 'restaurant-manager', name: { ka: 'რესტორნის მენეჯერი', en: 'Restaurant Manager' } },
                            ]
                        },
                        {
                            id: 'transport-logistics',
                            name: { ka: '✈️ ტრანსპორტი და ლოგისტიკა', en: '✈️ Transport and Logistics' },
                            keywords: [
                                { id: 'pilot', name: { ka: 'პილოტი', en: 'Pilot' } },
                                { id: 'flight-attendant', name: { ka: 'ბორტგამცილებელი', en: 'Flight Attendant' } },
                                { id: 'logistics-manager-prof', name: { ka: 'ლოგისტიკის მენეჯერი', en: 'Logistics Manager' } },
                                { id: 'driver', name: { ka: 'მძღოლი (ტაქსის, ავტობუსის, სატვირთოს)', en: 'Driver (Taxi, Bus, Truck)' } },
                                { id: 'train-driver', name: { ka: 'მატარებლის მემანქანე', en: 'Train Driver' } },
                                { id: 'ship-captain', name: { ka: 'გემის კაპიტანი', en: 'Ship Captain' } },
                                { id: 'sailor', name: { ka: 'მეზღვაური', en: 'Sailor' } },
                                { id: 'courier', name: { ka: 'კურიერი', en: 'Courier' } },
                                { id: 'postman', name: { ka: 'ფოსტალიონი', en: 'Postman' } },
                                { id: 'warehouse-manager', name: { ka: 'საწყობის მენეჯერი', en: 'Warehouse Manager' } },
                            ]
                        },
                        {
                            id: 'personal-services',
                            name: { ka: '💇‍♀️ პირადი მომსახურება', en: '💇‍♀️ Personal Services' },
                            keywords: [
                                { id: 'stylist', name: { ka: 'სტილისტი', en: 'Stylist' } },
                                { id: 'barber', name: { ka: 'დალაქი (ბარბერი)', en: 'Barber' } },
                                { id: 'cosmetologist', name: { ka: 'კოსმეტოლოგი', en: 'Cosmetologist' } },
                                { id: 'makeup-artist', name: { ka: 'ვიზაჟისტი', en: 'Makeup Artist' } },
                                { id: 'manicurist', name: { ka: 'მანიკიურის სპეციალისტი', en: 'Manicurist' } },
                                { id: 'florist', name: { ka: 'ფლორისტი', en: 'Florist' } },
                                { id: 'nanny', name: { ka: 'ძიძა', en: 'Nanny' } },
                                { id: 'personal-assistant', name: { ka: 'პირადი ასისტენტი', en: 'Personal Assistant' } },
                                { id: 'cleaner', name: { ka: 'დამლაგებელი', en: 'Cleaner' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'agriculture-environment-protection',
            name: { ka: '🌳 IX. სოფლის მეურნეობა და გარემოს დაცვა', en: '🌳 IX. Agriculture and Environmental Protection' },
            sections: [
                {
                    id: 'agriculture-environment-section',
                    name: { ka: 'სოფლის მეურნეობის და გარემოს დაცვის პროფესიები', en: 'Agriculture and Environmental Protection Professions' },
                    subSections: [
                        {
                            id: 'agrarian-sector',
                            name: { ka: '🌱 აგრარული სფერო', en: '🌱 Agrarian Sector' },
                            keywords: [
                                { id: 'farmer', name: { ka: 'ფერმერი', en: 'Farmer' } },
                                { id: 'agronomist', name: { ka: 'აგრონომი', en: 'Agronomist' } },
                                { id: 'zootechnician', name: { ka: 'ზოოტექნიკოსი', en: 'Zootechnician' } },
                                { id: 'livestock-breeder', name: { ka: 'მეცხოველე', en: 'Livestock Breeder' } },
                                { id: 'beekeeper', name: { ka: 'მეფუტკრე', en: 'Beekeeper' } },
                                { id: 'viticulturist', name: { ka: 'მევენახე', en: 'Viticulturist' } },
                                { id: 'winemaker-prof', name: { ka: 'მეღვინე', en: 'Winemaker' } },
                                { id: 'gardener', name: { ka: 'მებაღე', en: 'Gardener' } },
                                { id: 'farm-worker', name: { ka: 'ფერმის მუშა', en: 'Farm Worker' } },
                            ]
                        },
                        {
                            id: 'natural-resources-environment',
                            name: { ka: '🏞️ ბუნებრივი რესურსები და გარემო', en: '🏞️ Natural Resources and Environment' },
                            keywords: [
                                { id: 'geologist-prof-nat', name: { ka: 'გეოლოგი', en: 'Geologist' } },
                                { id: 'forester', name: { ka: 'მეტყევე', en: 'Forester' } },
                                { id: 'ranger', name: { ka: 'რეინჯერი', en: 'Ranger' } },
                                { id: 'ecologist-prof-nat', name: { ka: 'ეკოლოგი', en: 'Ecologist' } },
                                { id: 'soil-scientist-prof', name: { ka: 'ნიადაგმცოდნე', en: 'Soil Scientist' } },
                                { id: 'hydrologist-prof', name: { ka: 'ჰიდროლოგი', en: 'Hydrologist' } },
                                { id: 'environmental-engineer-prof', name: { ka: 'გარემოსდაცვითი ინჟინერი', en: 'Environmental Engineer' } },
                                { id: 'landscape-architect-prof', name: { ka: 'ლანდშაფტის არქიტექტორი', en: 'Landscape Architect' } },
                                { id: 'botanist', name: { ka: 'ბოტანიკოსი', en: 'Botanist' } },
                            ]
                        },
                        {
                            id: 'hunting-fishing',
                            name: { ka: '🎣 ნადირობა და თევზაობა', en: '🎣 Hunting and Fishing' },
                            keywords: [
                                { id: 'hunter', name: { ka: 'მონადირე', en: 'Hunter' } },
                                { id: 'fisherman', name: { ka: 'მეთევზე', en: 'Fisherman' } },
                                { id: 'fish-farmer', name: { ka: 'თევზის მეურნეობის სპეციალისტი', en: 'Fish Farmer' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'sports-fitness-professions',
            name: { ka: '🏆 X. სპორტი და ფიტნესი', en: '🏆 X. Sports and Fitness' },
            sections: [
                {
                    id: 'sports-fitness-section',
                    name: { ka: 'სპორტის და ფიტნესის პროფესიები', en: 'Sports and Fitness Professions' },
                    subSections: [
                        {
                            id: 'professional-sports',
                            name: { ka: '🏃‍♀️ პროფესიონალური სპორტი', en: '🏃‍♀️ Professional Sports' },
                            keywords: [
                                { id: 'professional-athlete', name: { ka: 'პროფესიონალი სპორტსმენი (ფეხბურთელი, კალათბურთელი, მორაგბე, მოჭიდავე, მოცურავე, ჩოგბურთელი)', en: 'Professional Athlete (Footballer, Basketball Player, Rugby Player, Wrestler, Swimmer, Tennis Player)' } },
                                { id: 'coach-prof', name: { ka: 'მწვრთნელი', en: 'Coach' } },
                                { id: 'referee-arbiter-prof', name: { ka: 'მსაჯი (არბიტრი)', en: 'Referee (Arbiter)' } },
                                { id: 'sports-agent', name: { ka: 'სპორტული აგენტი', en: 'Sports Agent' } },
                                { id: 'scout-prof', name: { ka: 'სკაუტი', en: 'Scout' } },
                                { id: 'sports-manager', name: { ka: 'სპორტული მენეჯერი', en: 'Sports Manager' } },
                            ]
                        },
                        {
                            id: 'fitness-wellness',
                            name: { ka: '💪 ფიტნესი და ველნესი', en: '💪 Fitness and Wellness' },
                            keywords: [
                                { id: 'fitness-instructor', name: { ka: 'ფიტნეს-ინსტრუქტორი', en: 'Fitness Instructor' } },
                                { id: 'personal-trainer', name: { ka: 'პერსონალური მწვრთნელი', en: 'Personal Trainer' } },
                                { id: 'yoga-instructor', name: { ka: 'იოგას ინსტრუქტორი', en: 'Yoga Instructor' } },
                                { id: 'sports-doctor', name: { ka: 'სპორტული ექიმი', en: 'Sports Doctor' } },
                                { id: 'sports-psychologist', name: { ka: 'სპორტული ფსიქოლოგი', en: 'Sports Psychologist' } },
                                { id: 'sports-dietitian', name: { ka: 'სპორტული დიეტოლოგი (ნუტრიციოლოგი)', en: 'Sports Dietitian (Nutritionist)' } },
                            ]
                        },
                        {
                            id: 'sports-media',
                            name: { ka: '🎙️ სპორტული მედია', en: '🎙️ Sports Media' },
                            keywords: [
                                { id: 'sports-commentator', name: { ka: 'სპორტული კომენტატორი', en: 'Sports Commentator' } },
                                { id: 'sports-journalist', name: { ka: 'სპორტული ჟურნალისტი', en: 'Sports Journalist' } },
                                { id: 'analyst-sport', name: { ka: 'ანალიტიკოსი', en: 'Analyst' } },
                            ]
                        }
                    ]
                }
            ]
        }
    ],
};