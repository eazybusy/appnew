import { Category } from '../types';

export const PHILOSOPHY_CATEGORY: Category = {
    id: 'philosophy',
    name: { ka: '🤔 ფილოსოფია, რელიგია და კომუნიკაცია', en: '🤔 Philosophy, Religion, and Communication' },
    icon: '🤔',
    subCategories: [
        {
            id: 'philosophy-thought',
            name: { ka: '🧠 ფილოსოფია და აზროვნება', en: '🧠 Philosophy and Thought' },
            sections: [
                {
                    id: 'tools-of-thought-logic',
                    name: { ka: '🛠️ I. აზროვნების ინსტრუმენტები და ლოგიკა', en: '🛠️ I. Tools of Thought and Logic' },
                    subSections: [
                        {
                            id: 'formal-symbolic-logic',
                            name: { ka: '🔗 ფორმალური და სიმბოლური ლოგიკა', en: '🔗 Formal and Symbolic Logic' },
                            keywords: [
                                { id: 'abduction', name: { ka: 'აბდუქცია', en: 'Abduction' } },
                                { id: 'analysis-logic', name: { ka: 'ანალიზი', en: 'Analysis' } },
                                { id: 'axiom-logic', name: { ka: 'აქსიომა', en: 'Axiom' } },
                                { id: 'definition', name: { ka: 'განმარტება', en: 'Definition' } },
                                { id: 'proof', name: { ka: 'დამტკიცება', en: 'Proof' } },
                                { id: 'deduction', name: { ka: 'დედუქცია', en: 'Deduction' } },
                                { id: 'induction-logic', name: { ka: 'ინდუქცია', en: 'Induction' } },
                                { id: 'quantifier-logic', name: { ka: 'კვანტორი', en: 'Quantifier' } },
                                { id: 'evidence', name: { ka: 'მტკიცებულება', en: 'Evidence' } },
                                { id: 'paradox', name: { ka: 'პარადოქსი', en: 'Paradox' } },
                                { id: 'postulate', name: { ka: 'პოსტულატი', en: 'Postulate' } },
                                { id: 'predicate-logic', name: { ka: 'პრედიკატების ლოგიკა', en: 'Predicate Logic' } },
                                { id: 'proposition-logic', name: { ka: 'პროპოზიცია', en: 'Proposition' } },
                                { id: 'syllogism', name: { ka: 'სილოგიზმი', en: 'Syllogism' } },
                                { id: 'symbolic-logic', name: { ka: 'სიმბოლური ლოგიკა', en: 'Symbolic Logic' } },
                                { id: 'synthesis-logic', name: { ka: 'სინთეზი', en: 'Synthesis' } },
                                { id: 'tautology', name: { ka: 'ტავტოლოგია', en: 'Tautology' } },
                                { id: 'negation', name: { ka: 'უარყოფა', en: 'Negation' } },
                            ]
                        },
                        {
                            id: 'critical-thinking',
                            name: { ka: '🧐 კრიტიკული აზროვნება', en: '🧐 Critical Thinking' },
                            keywords: [
                                { id: 'argument-analysis', name: { ka: 'არგუმენტის ანალიზი', en: 'Argument Analysis' } },
                                { id: 'justification', name: { ka: 'დასაბუთება', en: 'Justification' } },
                                { id: 'inference', name: { ka: 'დასკვნა', en: 'Inference' } },
                                { id: 'interpretation-critical', name: { ka: 'ინტერპრეტაცია', en: 'Interpretation' } },
                                { id: 'cognitive-bias-critical', name: { ka: 'კოგნიტური მიკერძოება (Bias)', en: 'Cognitive Bias' } },
                                { id: 'critique', name: { ka: 'კრიტიკა', en: 'Critique' } },
                                { id: 'logical-fallacy', name: { ka: 'ლოგიკური შეცდომა', en: 'Logical Fallacy' } },
                                { id: 'reasoning', name: { ka: 'მსჯელობა', en: 'Reasoning' } },
                                { id: 'presumption', name: { ka: 'პრეზუმფცია', en: 'Presumption' } },
                                { id: 'reflection-critical', name: { ka: 'რეფლექსია', en: 'Reflection' } },
                                { id: 'fact-checking', name: { ka: 'ფაქტების შემოწმება', en: 'Fact-checking' } },
                                { id: 'evaluation-critical', name: { ka: 'შეფასება', en: 'Evaluation' } },
                                { id: 'hypothesis-critical', name: { ka: 'ჰიპოთეზა', en: 'Hypothesis' } },
                            ]
                        },
                        {
                            id: 'dialectic',
                            name: { ka: '↔️ დიალექტიკა', en: '↔️ Dialectic' },
                            keywords: [
                                { id: 'antithesis', name: { ka: 'ანტითეზისი', en: 'Antithesis' } },
                                { id: 'debate', name: { ka: 'დებატები', en: 'Debate' } },
                                { id: 'dialogue-dialectic', name: { ka: 'დიალოგი', en: 'Dialogue' } },
                                { id: 'discussion', name: { ka: 'დისკუსია', en: 'Discussion' } },
                                { id: 'thesis', name: { ka: 'თეზისი', en: 'Thesis' } },
                                { id: 'consensus', name: { ka: 'კონსენსუსი', en: 'Consensus' } },
                                { id: 'conflict-dialectic', name: { ka: 'კონფლიქტი', en: 'Conflict' } },
                                { id: 'counterargument', name: { ka: 'კონტრარგუმენტი', en: 'Counterargument' } },
                                { id: 'opposition-dialectic', name: { ka: 'ოპონირება', en: 'Opposition' } },
                                { id: 'polemic', name: { ka: 'პოლემიკა', en: 'Polemic' } },
                                { id: 'synthesis-dialectic', name: { ka: 'სინთეზი', en: 'Synthesis' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'history-of-philosophy',
                    name: { ka: '📜 II. ფილოსოფიის ისტორია და სკოლები', en: '📜 II. History of Philosophy and Schools' },
                    subSections: [
                        {
                            id: 'ancient-philosophy',
                            name: { ka: '🏛️ ანტიკური ფილოსოფია', en: '🏛️ Ancient Philosophy' },
                            keywords: [
                                { id: 'aristotelianism', name: { ka: 'არისტოტელიზმი', en: 'Aristotelianism' } },
                                { id: 'epicureanism', name: { ka: 'ეპიკურეიზმი', en: 'Epicureanism' } },
                                { id: 'cynicism', name: { ka: 'კინიკოსები', en: 'Cynicism' } },
                                { id: 'naturalism-philosophy', name: { ka: 'ნატურალიზმი', en: 'Naturalism' } },
                                { id: 'neoplatonism', name: { ka: 'ნეოპლატონიზმი', en: 'Neoplatonism' } },
                                { id: 'platonism', name: { ka: 'პლატონიზმი', en: 'Platonism' } },
                                { id: 'platonic-academy', name: { ka: 'პლატონის აკადემია', en: 'Platonic Academy' } },
                                { id: 'skepticism-philosophy', name: { ka: 'სკეპტიციზმი', en: 'Skepticism' } },
                                { id: 'socrates', name: { ka: 'სოკრატე', en: 'Socrates' } },
                                { id: 'pre-socratics', name: { ka: 'სოკრატემდელები', en: 'Pre-Socratics' } },
                                { id: 'sophists', name: { ka: 'სოფისტები', en: 'Sophists' } },
                                { id: 'stoicism', name: { ka: 'სტოიციზმი', en: 'Stoicism' } },
                            ]
                        },
                        {
                            id: 'medieval-philosophy',
                            name: { ka: '⛪ შუა საუკუნეების ფილოსოფია', en: '⛪ Medieval Philosophy' },
                            keywords: [
                                { id: 'augustine', name: { ka: 'ავგუსტინე', en: 'Augustine' } },
                                { id: 'averroes', name: { ka: 'ავეროესი', en: 'Averroes' } },
                                { id: 'nominalism', name: { ka: 'ნომინალიზმი', en: 'Nominalism' } },
                                { id: 'patristics', name: { ka: 'პატრისტიკა', en: 'Patristics' } },
                                { id: 'realism-philosophy', name: { ka: 'რეალიზმი', en: 'Realism' } },
                                { id: 'scholasticism', name: { ka: 'სქოლასტიკა', en: 'Scholasticism' } },
                                { id: 'theological-philosophy', name: { ka: 'თეოლოგიური ფილოსოფია', en: 'Theological Philosophy' } },
                                { id: 'thomas-aquinas', name: { ka: 'თომა აქვინელი', en: 'Thomas Aquinas' } },
                            ]
                        },
                        {
                            id: 'renaissance-early-modern-philosophy',
                            name: { ka: '🎨 აღორძინებისა და ახალი დროის ფილოსოფია (XVII-XVIII სს.)', en: '🎨 Renaissance and Early Modern Philosophy (17th-18th Centuries)' },
                            keywords: [
                                { id: 'enlightenment-philosophy', name: { ka: 'განმანათლებლობა', en: 'Enlightenment' } },
                                { id: 'empiricism', name: { ka: 'ემპირიზმი (ლოკი, ბერკლი, ჰიუმი)', en: 'Empiricism (Locke, Berkeley, Hume)' } },
                                { id: 'monad', name: { ka: 'მონადა', en: 'Monad' } },
                                { id: 'rationalism', name: { ka: 'რაციონალიზმი (დეკარტი, სპინოზა, ლაიბნიცი)', en: 'Rationalism (Descartes, Spinoza, Leibniz)' } },
                                { id: 'humanism-philosophy', name: { ka: 'ჰუმანიზმი', en: 'Humanism' } },
                            ]
                        },
                        {
                            id: 'german-classical-philosophy',
                            name: { ka: '🇩🇪 გერმანული კლასიკური ფილოსოფია', en: '🇩🇪 German Classical Philosophy' },
                            keywords: [
                                { id: 'absolute-idea', name: { ka: 'აბსოლუტური იდეა', en: 'Absolute Idea' } },
                                { id: 'idealism', name: { ka: 'იდეალიზმი', en: 'Idealism' } },
                                { id: 'kant', name: { ka: 'კანტი', en: 'Kant' } },
                                { id: 'categorical-imperative', name: { ka: 'კატეგორიული იმპერატივი', en: 'Categorical Imperative' } },
                                { id: 'transcendental', name: { ka: 'ტრანსცენდენტული', en: 'Transcendental' } },
                                { id: 'fichte', name: { ka: 'ფიხტე', en: 'Fichte' } },
                                { id: 'schelling', name: { ka: 'შელინგი', en: 'Schelling' } },
                                { id: 'hegel', name: { ka: 'ჰეგელი', en: 'Hegel' } },
                            ]
                        },
                        {
                            id: '19th-century-philosophy',
                            name: { ka: '✒️ XIX საუკუნის ფილოსოფია', en: '✒️ 19th-Century Philosophy' },
                            keywords: [
                                { id: 'kierkegaard', name: { ka: 'კირკეგორი', en: 'Kierkegaard' } },
                                { id: 'marxism-philosophy', name: { ka: 'მარქსიზმი', en: 'Marxism' } },
                                { id: 'materialism-philosophy', name: { ka: 'მატერიალიზმი', en: 'Materialism' } },
                                { id: 'nietzsche', name: { ka: 'ნიცშე', en: 'Nietzsche' } },
                                { id: 'positivism', name: { ka: 'პოზიტივიზმი', en: 'Positivism' } },
                                { id: 'pragmatism', name: { ka: 'პრაგმატიზმი', en: 'Pragmatism' } },
                                { id: 'utilitarianism-philosophy', name: { ka: 'უტილიტარიზმი', en: 'Utilitarianism' } },
                                { id: 'schopenhauer', name: { ka: 'შოპენჰაუერი', en: 'Schopenhauer' } },
                            ]
                        },
                        {
                            id: '20th-century-contemporary-philosophy',
                            name: { ka: '💡 XX საუკუნის და თანამედროვე ფილოსოფია', en: '💡 20th-Century and Contemporary Philosophy' },
                            keywords: [
                                { id: 'analytic-philosophy', name: { ka: 'ანალიტიკური ფილოსოფია', en: 'Analytic Philosophy' } },
                                { id: 'existentialism', name: { ka: 'ეგზისტენციალიზმი', en: 'Existentialism' } },
                                { id: 'critical-theory', name: { ka: 'კრიტიკული თეორია', en: 'Critical Theory' } },
                                { id: 'continental-philosophy', name: { ka: 'კონტინენტური ფილოსოფია', en: 'Continental Philosophy' } },
                                { id: 'postmodernism-philosophy', name: { ka: 'პოსტმოდერნიზმი', en: 'Postmodernism' } },
                                { id: 'post-structuralism-philosophy', name: { ka: 'პოსტსტრუქტურალიზმი', en: 'Post-structuralism' } },
                                { id: 'structuralism-philosophy', name: { ka: 'სტრუქტურალიზმი', en: 'Structuralism' } },
                                { id: 'feminist-philosophy', name: { ka: 'ფემინისტური ფილოსოფია', en: 'Feminist Philosophy' } },
                                { id: 'phenomenology-philosophy', name: { ka: 'ფენომენოლოგია', en: 'Phenomenology' } },
                                { id: 'hermeneutics-philosophy', name: { ka: 'ჰერმენევტიკა', en: 'Hermeneutics' } },
                            ]
                        },
                        {
                            id: 'eastern-philosophy',
                            name: { ka: '🌏 აღმოსავლური ფილოსოფია', en: '🌏 Eastern Philosophy' },
                            keywords: [
                                { id: 'buddhist-philosophy', name: { ka: 'ბუდისტური ფილოსოფია', en: 'Buddhist Philosophy' } },
                                { id: 'taoism', name: { ka: 'დაოსიზმი', en: 'Taoism' } },
                                { id: 'vedanta', name: { ka: 'ვედანტა', en: 'Vedanta' } },
                                { id: 'zen', name: { ka: 'ზენი', en: 'Zen' } },
                                { id: 'yoga-philosophy', name: { ka: 'იოგა', en: 'Yoga' } },
                                { id: 'karma-philosophy', name: { ka: 'კარმა', en: 'Karma' } },
                                { id: 'confucianism', name: { ka: 'კონფუციანელობა', en: 'Confucianism' } },
                                { id: 'legalism', name: { ka: 'ლეგალიზმი', en: 'Legalism' } },
                                { id: 'nirvana-philosophy', name: { ka: 'ნირვანა', en: 'Nirvana' } },
                                { id: 'middle-way', name: { ka: 'შუა გზა', en: 'Middle Way' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'main-branches-of-philosophy',
                    name: { ka: '🌌 III. ფილოსოფიის ძირითადი დარგები', en: '🌌 III. Main Branches of Philosophy' },
                    subSections: [
                        {
                            id: 'metaphysics',
                            name: { ka: '❓ მეტაფიზიკა (რა არსებობს?)', en: '❓ Metaphysics (What exists?)' },
                            keywords: [
                                { id: 'the-absolute', name: { ka: 'აბსოლუტი', en: 'The Absolute' } },
                                { id: 'existence', name: { ka: 'არსებობა', en: 'Existence' } },
                                { id: 'determinism', name: { ka: 'დეტერმინიზმი', en: 'Determinism' } },
                                { id: 'time', name: { ka: 'დრო', en: 'Time' } },
                                { id: 'essence', name: { ka: 'ესენცია', en: 'Essence' } },
                                { id: 'free-will', name: { ka: 'თავისუფალი ნება', en: 'Free Will' } },
                                { id: 'idea', name: { ka: 'იდეა', en: 'Idea' } },
                                { id: 'causality', name: { ka: 'კაუზალობა (მიზეზობრიობა)', en: 'Causality' } },
                                { id: 'cosmology-meta', name: { ka: 'კოსმოლოგია', en: 'Cosmology' } },
                                { id: 'matter', name: { ka: 'მატერია', en: 'Matter' } },
                                { id: 'ontology', name: { ka: 'ონტოლოგია', en: 'Ontology' } },
                                { id: 'reality', name: { ka: 'რეალობა', en: 'Reality' } },
                                { id: 'universe', name: { ka: 'სამყარო', en: 'Universe' } },
                                { id: 'space', name: { ka: 'სივრცე', en: 'Space' } },
                                { id: 'substance', name: { ka: 'სუბსტანცია', en: 'Substance' } },
                                { id: 'phenomenon', name: { ka: 'ფენომენი', en: 'Phenomenon' } },
                                { id: 'form', name: { ka: 'ფორმა', en: 'Form' } },
                                { id: 'being', name: { ka: 'ყოფიერება', en: 'Being' } },
                                { id: 'contingency', name: { ka: 'შემთხვევითობა', en: 'Contingency' } },
                            ]
                        },
                        {
                            id: 'epistemology',
                            name: { ka: '💡 ეპისტემოლოგია (რა ვიცით?)', en: '💡 Epistemology (What can we know?)' },
                            keywords: [
                                { id: 'a-priori-a-posteriori', name: { ka: 'აპრიორი/აპოსტერიორი', en: 'A priori/A posteriori' } },
                                { id: 'experience', name: { ka: 'გამოცდილება', en: 'Experience' } },
                                { id: 'justification-epistemology', name: { ka: 'დასაბუთება', en: 'Justification' } },
                                { id: 'empiricism-epistemology', name: { ka: 'ემპირიზმი', en: 'Empiricism' } },
                                { id: 'intuition', name: { ka: 'ინტუიცია', en: 'Intuition' } },
                                { id: 'methodology', name: { ka: 'მეთოდოლოგია', en: 'Methodology' } },
                                { id: 'philosophy-of-science', name: { ka: 'მეცნიერების ფილოსოფია', en: 'Philosophy of Science' } },
                                { id: 'objective-knowledge', name: { ka: 'ობიექტური ცოდნა', en: 'Objective Knowledge' } },
                                { id: 'rationalism-epistemology', name: { ka: 'რაციონალიზმი', en: 'Rationalism' } },
                                { id: 'belief', name: { ka: 'რწმენა', en: 'Belief' } },
                                { id: 'reliability', name: { ka: 'სანდოობა', en: 'Reliability' } },
                                { id: 'skepticism-epistemology', name: { ka: 'სკეპტიციზმი', en: 'Skepticism' } },
                                { id: 'solipsism', name: { ka: 'სოლიფსიზმი', en: 'Solipsism' } },
                                { id: 'subjective-perception', name: { ka: 'სუბიექტური აღქმა', en: 'Subjective Perception' } },
                                { id: 'knowledge-epistemology', name: { ka: 'ცოდნა', en: 'Knowledge' } },
                                { id: 'truth', name: { ka: 'ჭეშმარიტება', en: 'Truth' } },
                            ]
                        },
                        {
                            id: 'ethics',
                            name: { ka: '⚖️ ეთიკა (როგორ უნდა ვიცხოვროთ?)', en: '⚖️ Ethics (How should we live?)' },
                            keywords: [
                                { id: 'altruism-ethics', name: { ka: 'ალტრუიზმი', en: 'Altruism' } },
                                { id: 'evil', name: { ka: 'ბოროტება', en: 'Evil' } },
                                { id: 'deontology', name: { ka: 'დეონტოლოგია', en: 'Deontology' } },
                                { id: 'egoism', name: { ka: 'ეგოიზმი', en: 'Egoism' } },
                                { id: 'passion', name: { ka: 'ვნება', en: 'Passion' } },
                                { id: 'morality', name: { ka: 'მორალი', en: 'Morality' } },
                                { id: 'duty-ethics', name: { ka: 'მოვალეობა', en: 'Duty' } },
                                { id: 'will', name: { ka: 'ნება', en: 'Will' } },
                                { id: 'nihilism', name: { ka: 'ნიჰილიზმი', en: 'Nihilism' } },
                                { id: 'responsibility', name: { ka: 'პასუხისმგებლობა', en: 'Responsibility' } },
                                { id: 'justice-ethics', name: { ka: 'სამართლიანობა', en: 'Justice' } },
                                { id: 'virtue-ethics', name: { ka: 'სათნოების ეთიკა', en: 'Virtue Ethics' } },
                                { id: 'goodness', name: { ka: 'სიკეთე', en: 'Goodness' } },
                                { id: 'social-norm-ethics', name: { ka: 'სოციალური ნორმა', en: 'Social Norm' } },
                                { id: 'utilitarianism-ethics', name: { ka: 'უტილიტარიზმი', en: 'Utilitarianism' } },
                                { id: 'values-ethics', name: { ka: 'ღირებულებები', en: 'Values' } },
                            ]
                        },
                        {
                            id: 'political-philosophy',
                            name: { ka: '🏛️ პოლიტიკური ფილოსოფია', en: '🏛️ Political Philosophy' },
                            keywords: [
                                { id: 'anarchism-pol-phil', name: { ka: 'ანარქიზმი', en: 'Anarchism' } },
                                { id: 'freedom', name: { ka: 'თავისუფლება', en: 'Freedom' } },
                                { id: 'legitimacy', name: { ka: 'ლეგიტიმურობა', en: 'Legitimacy' } },
                                { id: 'civic-duty', name: { ka: 'სამოქალაქო ვალდებულება', en: 'Civic Duty' } },
                                { id: 'justice-pol-phil', name: { ka: 'სამართლიანობა', en: 'Justice' } },
                                { id: 'social-contract-pol-phil', name: { ka: 'სოციალური კონტრაქტი', en: 'Social Contract' } },
                                { id: 'sovereignty-pol-phil', name: { ka: 'სუვერენიტეტი', en: 'Sovereignty' } },
                                { id: 'utopia-pol-phil', name: { ka: 'უტოპია', en: 'Utopia' } },
                                { id: 'rights-pol-phil', name: { ka: 'უფლებები', en: 'Rights' } },
                                { id: 'state-pol-phil', name: { ka: 'სახელმწიფო', en: 'State' } },
                                { id: 'authority-government', name: { ka: 'ხელისუფლება', en: 'Authority/Government' } },
                                { id: 'democracy-pol-phil', name: { ka: 'დემოკრატია', en: 'Democracy' } },
                            ]
                        },
                        {
                            id: 'aesthetics',
                            name: { ka: '🎨 ესთეტიკა (რა არის მშვენიერება?)', en: '🎨 Aesthetics (What is beauty?)' },
                            keywords: [
                                { id: 'the-sublime', name: { ka: 'ამაღლებულობა', en: 'The Sublime' } },
                                { id: 'perception-aesthetics', name: { ka: 'აღქმა', en: 'Perception' } },
                                { id: 'taste', name: { ka: 'გემოვნება', en: 'Taste' } },
                                { id: 'emotional-impact', name: { ka: 'ემოციური გავლენა', en: 'Emotional Impact' } },
                                { id: 'catharsis-aesthetics', name: { ka: 'კათარზისი', en: 'Catharsis' } },
                                { id: 'creativity', name: { ka: 'კრეატიულობა', en: 'Creativity' } },
                                { id: 'mimesis', name: { ka: 'მიმესისი', en: 'Mimesis' } },
                                { id: 'beauty', name: { ka: 'სილამაზე', en: 'Beauty' } },
                                { id: 'symbolism-aesthetics', name: { ka: 'სიმბოლიზმი', en: 'Symbolism' } },
                                { id: 'symmetry-aesthetics', name: { ka: 'სიმეტრია', en: 'Symmetry' } },
                                { id: 'the-tragic', name: { ka: 'ტრაგიკული', en: 'The Tragic' } },
                                { id: 'form-content', name: { ka: 'ფორმა/შინაარსი', en: 'Form/Content' } },
                                { id: 'philosophy-of-art', name: { ka: 'ხელოვნების ფილოსოფია', en: 'Philosophy of Art' } },
                                { id: 'harmony-aesthetics', name: { ka: 'ჰარმონია', en: 'Harmony' } },
                                { id: 'creation', name: { ka: 'შემოქმედება', en: 'Creation' } },
                            ]
                        },
                        {
                            id: 'philosophy-of-mind',
                            name: { ka: '🤖 გონების ფილოსოფია', en: '🤖 Philosophy of Mind' },
                            keywords: [
                                { id: 'mental-structures', name: { ka: 'გონებრივი სტრუქტურები', en: 'Mental Structures' } },
                                { id: 'dualism', name: { ka: 'დუალიზმი', en: 'Dualism' } },
                                { id: 'identity-mind', name: { ka: 'იდენტობა', en: 'Identity' } },
                                { id: 'intellect', name: { ka: 'ინტელექტი', en: 'Intellect' } },
                                { id: 'intentionality', name: { ka: 'ინტენციონალობა', en: 'Intentionality' } },
                                { id: 'qualia-mind', name: { ka: 'კვალია', en: 'Qualia' } },
                                { id: 'cognition', name: { ka: 'კოგნიცია', en: 'Cognition' } },
                                { id: 'materialism-mind', name: { ka: 'მატერიალიზმი', en: 'Materialism' } },
                                { id: 'sentience', name: { ka: 'მგრძნობელობა', en: 'Sentience' } },
                                { id: 'agency', name: { ka: 'მოქმედება', en: 'Agency' } },
                                { id: 'mind-body-problem', name: { ka: 'სხეული-გონების პრობლემა', en: 'Mind-body Problem' } },
                                { id: 'subjectivity', name: { ka: 'სუბიექტურობა', en: 'Subjectivity' } },
                                { id: 'psyche', name: { ka: 'ფსიქიკა', en: 'Psyche' } },
                                { id: 'consciousness-mind', name: { ka: 'ცნობიერება', en: 'Consciousness' } },
                                { id: 'self-awareness-mind', name: { ka: 'თვითშეგნება', en: 'Self-awareness' } },
                                { id: 'ai-mind', name: { ka: 'ხელოვნური ინტელექტი', en: 'Artificial Intelligence' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'universal-concepts-dichotomies',
                    name: { ka: '☯️ IV. უნივერსალური ცნებები და დიქოტომიები', en: '☯️ IV. Universal Concepts and Dichotomies' },
                    subSections: [
                        {
                            id: 'universal-concepts-keywords',
                            name: {ka: 'უნივერსალური ცნებები', en: 'Universal Concepts'},
                            keywords: [
                                { id: 'abstract-concrete', name: { ka: 'აბსტრაქტული/კონკრეტული', en: 'Abstract/Concrete' } },
                                { id: 'active-passive', name: { ka: 'აქტიური/პასიური', en: 'Active/Passive' } },
                                { id: 'part-whole', name: { ka: 'ერთეული/მთელი', en: 'Part/Whole' } },
                                { id: 'freedom-necessity', name: { ka: 'თავისუფლება/აუცილებლობა', en: 'Freedom/Necessity' } },
                                { id: 'material-ideal', name: { ka: 'მატერიალური/იდეალური', en: 'Material/Ideal' } },
                                { id: 'objective-subjective', name: { ka: 'ობიექტური/სუბიექტური', en: 'Objective/Subjective' } },
                                { id: 'potential-actual', name: { ka: 'პოტენციური/აქტუალური', en: 'Potential/Actual' } },
                                { id: 'reality-illusion', name: { ka: 'რეალობა/ილუზია', en: 'Reality/Illusion' } },
                                { id: 'finite-infinite', name: { ka: 'სასრული/უსასრულო', en: 'Finite/Infinite' } },
                                { id: 'system-structure', name: { ka: 'სისტემა/სტრუქტურა', en: 'System/Structure' } },
                                { id: 'subject-object', name: { ka: 'სუბიექტი/ობიექტი', en: 'Subject/Object' } },
                                { id: 'symbol-metaphor', name: { ka: 'სიმბოლო/მეტაფორა', en: 'Symbol/Metaphor' } },
                                { id: 'change-permanence', name: { ka: 'ცვლილება/მუდმივობა', en: 'Change/Permanence' } },
                                { id: 'order-chaos', name: { ka: 'წესრიგი/ქაოსი', en: 'Order/Chaos' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'religion-worldview',
            name: { ka: '🕊️ რელიგია და მსოფლმხედველობა', en: '🕊️ Religion and Worldview' },
            sections: [
                {
                    id: 'world-religions',
                    name: { ka: '🌏 I. მსოფლიო რელიგიები', en: '🌏 I. World Religions' },
                    subSections: [
                        {
                            id: 'abrahamic-religions',
                            name: { ka: '✡️✝️☪️ აბრაამული რელიგიები', en: '✡️✝️☪️ Abrahamic Religions' },
                            keywords: [
                                { id: 'bahai-faith', name: { ka: 'ბაჰაიზმი', en: 'Baháʼí Faith' } },
                                { id: 'revelation', name: { ka: 'გამოცხადება', en: 'Revelation' } },
                                { id: 'islam', name: { ka: 'ისლამი (სუნიზმი, შიიზმი)', en: 'Islam (Sunnism, Shiism)' } },
                                { id: 'judaism', name: { ka: 'იუდაიზმი', en: 'Judaism' } },
                                { id: 'messiah', name: { ka: 'მესია', en: 'Messiah' } },
                                { id: 'christianity', name: { ka: 'ქრისტიანობა (კათოლიციზმი, პროტესტანტიზმი, მართლმადიდებლობა)', en: 'Christianity (Catholicism, Protestantism, Orthodoxy)' } },
                                { id: 'prophet', name: { ka: 'წინასწარმეტყველი', en: 'Prophet' } },
                                { id: 'covenant', name: { ka: 'აღთქმა', en: 'Covenant' } },
                            ]
                        },
                        {
                            id: 'dharmic-religions',
                            name: { ka: '☸️ დჰარმული (ინდური) რელიგიები', en: '☸️ Dharmic (Indian) Religions' },
                            keywords: [
                                { id: 'buddhism', name: { ka: 'ბუდიზმი (თერავადა, მაჰაიანა)', en: 'Buddhism (Theravada, Mahayana)' } },
                                { id: 'dharma', name: { ka: 'დჰარმა', en: 'Dharma' } },
                                { id: 'hinduism', name: { ka: 'ინდუიზმი (ვაიშნავიზმი, შაივიზმი)', en: 'Hinduism (Vaishnavism, Shaivism)' } },
                                { id: 'jainism', name: { ka: 'ჯაინიზმი', en: 'Jainism' } },
                                { id: 'moksha', name: { ka: 'მოკშა', en: 'Moksha' } },
                                { id: 'samsara', name: { ka: 'სამსარა', en: 'Samsara' } },
                                { id: 'sikhism', name: { ka: 'სიქიზმი', en: 'Sikhism' } },
                            ]
                        },
                        {
                            id: 'east-asian-religions',
                            name: { ka: '🐉 აღმოსავლეთ აზიის რელიგიები', en: '🐉 East Asian Religions' },
                            keywords: [
                                { id: 'taoism', name: { ka: 'დაოსიზმი (ტაოიზმი)', en: 'Taoism' } },
                                { id: 'confucianism-rel', name: { ka: 'კონფუციანელობა', en: 'Confucianism' } },
                                { id: 'shintoism', name: { ka: 'სინტოიზმი', en: 'Shinto' } },
                                { id: 'tao', name: { ka: 'ტაო', en: 'Tao' } },
                            ]
                        },
                        {
                            id: 'polytheistic-indigenous-beliefs',
                            name: { ka: '🗿 პოლითეისტური და ძირძველი რწმენები', en: '🗿 Polytheistic and Indigenous Beliefs' },
                            keywords: [
                                { id: 'animism-rel', name: { ka: 'ანიმიზმი', en: 'Animism' } },
                                { id: 'ancient-religions', name: { ka: 'ანტიკური რელიგიები (ეგვიპტური, ბერძნულ-რომაული, სკანდინავიური)', en: 'Ancient Religions (Egyptian, Greco-Roman, Norse)' } },
                                { id: 'indigenous-tribal-beliefs', name: { ka: 'ადგილობრივი/ტომობრივი რწმენები', en: 'Indigenous/Tribal Beliefs' } },
                                { id: 'zoroastrianism', name: { ka: 'ზოროასტრიზმი', en: 'Zoroastrianism' } },
                                { id: 'pantheon-rel', name: { ka: 'პანთეონი', en: 'Pantheon' } },
                                { id: 'shamanism-rel', name: { ka: 'შამანიზმი', en: 'Shamanism' } },
                                { id: 'totemism-rel', name: { ka: 'ტოტემიზმი', en: 'Totemism' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'fields-of-religious-studies',
                    name: { ka: '📚 II. რელიგიის კვლევის მიმართულებები', en: '📚 II. Fields of Religious Studies' },
                    subSections: [
                        {
                            id: 'history-of-religion',
                            name: { ka: '⏳ რელიგიის ისტორია', en: '⏳ History of Religion' },
                            keywords: [
                                { id: 'historical-impact', name: { ka: 'ისტორიული გავლენა', en: 'Historical Impact' } },
                                { id: 'religious-wars-hist', name: { ka: 'რელიგიური ომები', en: 'Religious Wars' } },
                                { id: 'evolution-of-religion', name: { ka: 'რელიგიის ევოლუცია', en: 'Evolution of Religion' } },
                                { id: 'reformation-rel', name: { ka: 'რეფორმაცია', en: 'Reformation' } },
                                { id: 'syncretism', name: { ka: 'სინკრეტიზმი', en: 'Syncretism' } },
                                { id: 'key-events', name: { ka: 'ძირითადი მოვლენები', en: 'Key Events' } },
                            ]
                        },
                        {
                            id: 'theology',
                            name: { ka: '📖 თეოლოგია', en: '📖 Theology' },
                            keywords: [
                                { id: 'apologetics', name: { ka: 'აპოლოგეტიკა', en: 'Apologetics' } },
                                { id: 'dogmatic-theology', name: { ka: 'დოგმატური თეოლოგია', en: 'Dogmatic Theology' } },
                                { id: 'moral-theology', name: { ka: 'მორალური თეოლოგია', en: 'Moral Theology' } },
                                { id: 'pastoral-theology', name: { ka: 'პასტორალური თეოლოგია', en: 'Pastoral Theology' } },
                                { id: 'doctrine', name: { ka: 'დოქტრინა', en: 'Doctrine' } },
                                { id: 'exegesis', name: { ka: 'ეგზეგეტიკა', en: 'Exegesis' } },
                                { id: 'hermeneutics-theo', name: { ka: 'ჰერმენევტიკა', en: 'Hermeneutics' } },
                            ]
                        },
                        {
                            id: 'philosophy-of-religion',
                            name: { ka: '🤔 რელიგიის ფილოსოფია', en: '🤔 Philosophy of Religion' },
                            keywords: [
                                { id: 'theodicy', name: { ka: 'თეოდიცეა', en: 'Theodicy' } },
                                { id: 'faith-and-reason', name: { ka: 'რწმენა და გონება', en: 'Faith and Reason' } },
                                { id: 'arguments-for-existence-of-god', name: { ka: 'ღმერთის არსებობის არგუმენტები', en: 'Arguments for the Existence of God' } },
                                { id: 'ethics-and-morality', name: { ka: 'ეთიკა და მორალი', en: 'Ethics and Morality' } },
                            ]
                        },
                        {
                            id: 'comparative-religion',
                            name: { ka: '🔄 შედარებითი რელიგიათმცოდნეობა', en: '🔄 Comparative Religion' },
                            keywords: [
                                { id: 'cultural-influence', name: { ka: 'კულტურული გავლენა', en: 'Cultural Influence' } },
                                { id: 'similarities-differences', name: { ka: 'მსგავსება და განსხვავება', en: 'Similarities and Differences' } },
                                { id: 'comparison-of-religions', name: { ka: 'რელიგიების შედარება', en: 'Comparison of Religions' } },
                                { id: 'universal-themes', name: { ka: 'უნივერსალური თემები', en: 'Universal Themes' } },
                            ]
                        },
                        {
                            id: 'sociology-anthropology-of-religion',
                            name: { ka: '👥 რელიგიის სოციოლოგია და ანთროპოლოგია', en: '👥 Sociology and Anthropology of Religion' },
                            keywords: [
                                { id: 'institutions', name: { ka: 'ინსტიტუციები', en: 'Institutions' } },
                                { id: 'religion-and-cultural-identity', name: { ka: 'რელიგია და კულტურული იდენტობა', en: 'Religion and Cultural Identity' } },
                                { id: 'religion-in-society', name: { ka: 'რელიგია საზოგადოებაში', en: 'Religion in Society' } },
                                { id: 'sacralization', name: { ka: 'საკრალიზაცია', en: 'Sacralization' } },
                                { id: 'social-functions', name: { ka: 'სოციალური ფუნქციები', en: 'Social Functions' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'religious-concepts-practices',
                    name: { ka: '📜 III. რელიგიური ცნებები და პრაქტიკები', en: '📜 III. Religious Concepts and Practices' },
                    subSections: [
                        {
                            id: 'sacred-texts-scriptures',
                            name: { ka: '📖 საღვთო წერილები და წმინდა ტექსტები', en: '📖 Sacred Texts and Scriptures' },
                            keywords: [
                                { id: 'bible', name: { ka: 'ბიბლია (ძველი და ახალი აღთქმა)', en: 'Bible (Old and New Testament)' } },
                                { id: 'vedas-rel', name: { ka: 'ვედები', en: 'Vedas' } },
                                { id: 'talmud', name: { ka: 'თალმუდი', en: 'Talmud' } },
                                { id: 'torah', name: { ka: 'თორა', en: 'Torah' } },
                                { id: 'tripitaka', name: { ka: 'ტრიპიტაკა', en: 'Tripitaka' } },
                                { id: 'quran', name: { ka: 'ყურანი', en: 'Quran' } },
                                { id: 'ancient-myths', name: { ka: 'უძველესი მითები', en: 'Ancient Myths' } },
                            ]
                        },
                        {
                            id: 'rituals-prayers-services',
                            name: { ka: '🙏 რიტუალები, ლოცვები და მსახურებები', en: '🙏 Rituals, Prayers, and Services' },
                            keywords: [
                                { id: 'purification', name: { ka: 'განწმენდა', en: 'Purification' } },
                                { id: 'eucharist', name: { ka: 'ევქარისტია', en: 'Eucharist' } },
                                { id: 'liturgy', name: { ka: 'ლიტურგიკა', en: 'Liturgy' } },
                                { id: 'prayer', name: { ka: 'ლოცვა', en: 'Prayer' } },
                                { id: 'mantra', name: { ka: 'მანტრა', en: 'Mantra' } },
                                { id: 'meditation-rel', name: { ka: 'მედიტაცია', en: 'Meditation' } },
                                { id: 'sacrifice', name: { ka: 'მსხვერპლშეწირვა', en: 'Sacrifice' } },
                                { id: 'procession', name: { ka: 'მსვლელობა', en: 'Procession' } },
                                { id: 'baptism', name: { ka: 'ნათლობა', en: 'Baptism' } },
                                { id: 'ceremonies', name: { ka: 'სადღესასწაულო ცერემონიები', en: 'Ceremonies' } },
                                { id: 'sacrament', name: { ka: 'საიდუმლო', en: 'Sacrament' } },
                            ]
                        },
                        {
                            id: 'mythology-cosmology-rel',
                            name: { ka: '🌌 მითოლოგია და კოსმოლოგია', en: '🌌 Mythology and Cosmology' },
                            keywords: [
                                { id: 'angels', name: { ka: 'ანგელოზები', en: 'Angels' } },
                                { id: 'demons', name: { ka: 'დემონები', en: 'Demons' } },
                                { id: 'myth-rel', name: { ka: 'მითი', en: 'Myth' } },
                                { id: 'demigods', name: { ka: 'ნახევარღმერთები', en: 'Demigods' } },
                                { id: 'creation-rel', name: { ka: 'სამყაროს შექმნა', en: 'Creation' } },
                                { id: 'gods', name: { ka: 'ღმერთები', en: 'Gods' } },
                            ]
                        },
                        {
                            id: 'eschatology',
                            name: { ka: '🔚 ესქატოლოგია', en: '🔚 Eschatology' },
                            keywords: [
                                { id: 'apocalypse', name: { ka: 'აპოკალიფსი', en: 'Apocalypse' } },
                                { id: 'judgment-day', name: { ka: 'განკითხვის დღე', en: 'Judgment Day' } },
                                { id: 'reincarnation-rel', name: { ka: 'რეინკარნაცია', en: 'Reincarnation' } },
                                { id: 'afterlife-rel', name: { ka: 'საიქიო', en: 'Afterlife' } },
                                { id: 'heaven-hell', name: { ka: 'სამოთხე/ჯოჯოხეთი', en: 'Heaven/Hell' } },
                                { id: 'end-of-life', name: { ka: 'სიცოცხლის დასასრული', en: 'End of Life' } },
                                { id: 'end-times', name: { ka: 'უკანასკნელი დღეები', en: 'End Times' } },
                            ]
                        },
                        {
                            id: 'symbols-architecture-rel',
                            name: { ka: '⛪ სიმბოლოები და არქიტექტურა', en: '⛪ Symbols and Architecture' },
                            keywords: [
                                { id: 'church-rel', name: { ka: 'ეკლესია', en: 'Church' } },
                                { id: 'mosque', name: { ka: 'მეჩეთი', en: 'Mosque' } },
                                { id: 'monastery-rel', name: { ka: 'მონასტერი', en: 'Monastery' } },
                                { id: 'pagoda', name: { ka: 'პაგოდა', en: 'Pagoda' } },
                                { id: 'pilgrimage', name: { ka: 'პილიგრიმობა', en: 'Pilgrimage' } },
                                { id: 'relic-rel', name: { ka: 'რელიქვია', en: 'Relic' } },
                                { id: 'sacred-symbols', name: { ka: 'საკრალური ნიშნები', en: 'Sacred Symbols' } },
                                { id: 'shrine', name: { ka: 'სალოცავი', en: 'Shrine' } },
                                { id: 'synagogue', name: { ka: 'სინაგოგა', en: 'Synagogue' } },
                                { id: 'temples', name: { ka: 'ტაძრები', en: 'Temples' } },
                                { id: 'iconography', name: { ka: 'ხატწერა', en: 'Iconography' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'secularism-modernity',
                    name: { ka: '🔬 IV. სეკულარიზმი და თანამედროვეობა', en: '🔬 IV. Secularism and Modernity' },
                    subSections: [
                        {
                            id: 'secularism',
                            name: { ka: '🏢 სეკულარიზმი', en: '🏢 Secularism' },
                            keywords: [
                                { id: 'separation-of-church-and-state', name: { ka: 'რელიგიისა და სახელმწიფოს გამიჯვნა', en: 'Separation of Church and State' } },
                                { id: 'secular-law', name: { ka: 'საერო კანონმდებლობა', en: 'Secular Law' } },
                                { id: 'secularization-term', name: { ka: 'სეკულარიზაცია', en: 'Secularization' } },
                            ]
                        },
                        {
                            id: 'non-religious-worldviews',
                            name: { ka: '🧘 არარელიგიური მსოფლმხედველობა', en: '🧘 Non-religious Worldviews' },
                            keywords: [
                                { id: 'agnosticism', name: { ka: 'აგნოსტიციზმი', en: 'Agnosticism' } },
                                { id: 'atheism', name: { ka: 'ათეიზმი', en: 'Atheism' } },
                                { id: 'naturalism-rel', name: { ka: 'ნატურალიზმი', en: 'Naturalism' } },
                                { id: 'skepticism-rel', name: { ka: 'სკეპტიციზმი', en: 'Skepticism' } },
                                { id: 'humanism-rel', name: { ka: 'ჰუმანიზმი', en: 'Humanism' } },
                            ]
                        },
                        {
                            id: 'new-religious-movements',
                            name: { ka: '🆕 ახალი რელიგიური მოძრაობები', en: '🆕 New Religious Movements' },
                            keywords: [
                                { id: 'new-age', name: { ka: 'New Age', en: 'New Age' } },
                                { id: 'cult', name: { ka: 'კულტი', en: 'Cult' } },
                                { id: 'sect-rel', name: { ka: 'სექტა', en: 'Sect' } },
                                { id: 'spiritualism', name: { ka: 'სპირიტიზმი', en: 'Spiritualism' } },
                                { id: 'modern-beliefs', name: { ka: 'თანამედროვე რწმენები', en: 'Modern Beliefs' } },
                            ]
                        },
                        {
                            id: 'interfaith-dialogue',
                            name: { ka: '🤝 რელიგიათაშორისი დიალოგი', en: '🤝 Interfaith Dialogue' },
                            keywords: [
                                { id: 'ecumenism', name: { ka: 'ეკუმენიზმი', en: 'Ecumenism' } },
                                { id: 'interfaith-relations', name: { ka: 'ინტერრელიგიური ურთიერთობა', en: 'Interfaith Relations' } },
                                { id: 'tolerance', name: { ka: 'ტოლერანტობა', en: 'Tolerance' } },
                                { id: 'harmony-rel', name: { ka: 'ჰარმონია', en: 'Harmony' } },
                                { id: 'conflict-prevention', name: { ka: 'კონფლიქტის თავიდან აცილება', en: 'Conflict Prevention' } },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 'language-communication',
            name: { ka: '💬 ენა და კომუნიკაცია', en: '💬 Language and Communication' },
            sections: [
                {
                    id: 'linguistics',
                    name: { ka: '🔬 I. ლინგვისტიკა (ენათმეცნიერება)', en: '🔬 I. Linguistics' },
                    subSections: [
                        {
                            id: 'language-structure',
                            name: { ka: '🧱 ენის სტრუქტურა', en: '🧱 Language Structure' },
                            keywords: [
                                { id: 'phonetics', name: { ka: 'ფონეტიკა', en: 'Phonetics' } },
                                { id: 'phonology', name: { ka: 'ფონოლოგია (ბგერა, ფონემა, ინტონაცია)', en: 'Phonology (Sound, Phoneme, Intonation)' } },
                                { id: 'morphology-ling', name: { ka: 'მორფოლოგია (მორფემა, აფიქსი, ფუძე, ფლექსია)', en: 'Morphology (Morpheme, Affix, Root, Inflection)' } },
                                { id: 'syntax', name: { ka: 'სინტაქსი (წინადადება, სინტაგმა, პუნქტუაცია)', en: 'Syntax (Sentence, Phrase, Punctuation)' } },
                                { id: 'semantics-ling', name: { ka: 'სემანტიკა (მნიშვნელობა, სინონიმია, ანტონიმია, პოლისემია)', en: 'Semantics (Meaning, Synonymy, Antonymy, Polysemy)' } },
                                { id: 'pragmatics', name: { ka: 'პრაგმატიკა (კონტექსტი, დისკურსი, ნარატივი)', en: 'Pragmatics (Context, Discourse, Narrative)' } },
                            ]
                        },
                        {
                            id: 'interdisciplinary-linguistics',
                            name: { ka: '🌐 ინტერდისციპლინარული ლინგვისტიკა', en: '🌐 Interdisciplinary Linguistics' },
                            keywords: [
                                { id: 'sociolinguistics-ling', name: { ka: 'სოციოლინგვისტიკა (დიალექტი, ჟარგონი)', en: 'Sociolinguistics (Dialect, Jargon)' } },
                                { id: 'psycholinguistics-ling', name: { ka: 'ფსიქოლინგვისტიკა (ენის ათვისება)', en: 'Psycholinguistics (Language Acquisition)' } },
                                { id: 'historical-linguistics', name: { ka: 'ისტორიული ლინგვისტიკა (ენის ევოლუცია)', en: 'Historical Linguistics (Language Evolution)' } },
                                { id: 'computational-linguistics', name: { ka: 'გამოთვლითი ლინგვისტიკა (NLP, მანქანური თარგმანი)', en: 'Computational Linguistics (NLP, Machine Translation)' } },
                                { id: 'neurolinguistics', name: { ka: 'ნეიროლინგვისტიკა', en: 'Neurolinguistics' } },
                            ]
                        },
                        {
                            id: 'world-languages',
                            name: { ka: '🗺️ მსოფლიოს ენები', en: '🗺️ World Languages' },
                            keywords: [
                                { id: 'language-families', name: { ka: 'ენათა ოჯახები (ინდოევროპული, ქართველური, ურალური)', en: 'Language Families (Indo-European, Kartvelian, Uralic)' } },
                                { id: 'language-classification', name: { ka: 'ენების კლასიფიკაცია (ბუნებრივი, ხელოვნური, მკვდარი)', en: 'Language Classification (Natural, Artificial, Extinct)' } },
                                { id: 'constructed-languages', name: { ka: 'ხელოვნური ენები (ესპერანტო, კლინგონური)', en: 'Constructed Languages (Esperanto, Klingon)' } },
                                { id: 'sign-language', name: { ka: 'ჟესტების ენა (ASL)', en: 'Sign Language (ASL)' } },
                            ]
                        }
                    ]
                },
                {
                    id: 'communication',
                    name: { ka: '🗣️ II. კომუნიკაცია', en: '🗣️ II. Communication' },
                    subSections: [
                        {
                            id: 'communication-theory-models',
                            name: { ka: '📈 კომუნიკაციის თეორია და მოდელები', en: '📈 Communication Theory and Models' },
                            keywords: [
                                { id: 'interactive-transactional-model', name: { ka: 'ინტერაქტიული/ტრანსაქციული მოდელი', en: 'Interactive/Transactional Model' } },
                                { id: 'encoding-decoding', name: { ka: 'კოდირება-დეკოდირება', en: 'Encoding-Decoding' } },
                                { id: 'semiotics', name: { ka: 'სემიოტიკა', en: 'Semiotics' } },
                                { id: 'symbol-comm', name: { ka: 'სიმბოლო', en: 'Symbol' } },
                                { id: 'shannon-weaver-model', name: { ka: 'შენონ-ვივერის მოდელი', en: 'Shannon-Weaver Model' } },
                                { id: 'sign', name: { ka: 'ნიშანი', en: 'Sign' } },
                                { id: 'feedback-comm', name: { ka: 'უკუკავშირი', en: 'Feedback' } },
                                { id: 'channel', name: { ka: 'არხი', en: 'Channel' } },
                                { id: 'noise', name: { ka: 'ხმაური', en: 'Noise' } },
                            ]
                        },
                        {
                            id: 'types-of-communication',
                            name: { ka: '🎭 კომუნიკაციის ტიპები', en: '🎭 Types of Communication' },
                            keywords: [
                                { id: 'verbal-communication', name: { ka: 'ვერბალური (ზეპირი, წერილობითი)', en: 'Verbal (Oral, Written)' } },
                                { id: 'nonverbal-communication', name: { ka: 'არავერბალური (ჟესტები, მიმიკა, სხეულის ენა, პროქსემიკა, ჰაპტიკა)', en: 'Nonverbal (Gestures, Facial Expressions, Body Language, Proxemics, Haptics)' } },
                                { id: 'visual-communication', name: { ka: 'ვიზუალური (ინფოგრაფიკა, დიაგრამები)', en: 'Visual (Infographics, Diagrams)' } },
                            ]
                        },
                        {
                            id: 'contexts-of-communication',
                            name: { ka: '🌍 კომუნიკაციის კონტექსტები', en: '🌍 Contexts of Communication' },
                            keywords: [
                                { id: 'interpersonal', name: { ka: 'ინტერპერსონალური', en: 'Interpersonal' } },
                                { id: 'organizational-communication', name: { ka: 'ორგანიზაციული (იერარქია)', en: 'Organizational (Hierarchy)' } },
                                { id: 'mass-communication', name: { ka: 'მასობრივი (მედია, პროპაგანდა)', en: 'Mass (Media, Propaganda)' } },
                                { id: 'intercultural-communication', name: { ka: 'ინტერკულტურული (კულტურული შოკი)', en: 'Intercultural (Culture Shock)' } },
                                { id: 'group-communication', name: { ka: 'ჯგუფური', en: 'Group' } },
                            ]
                        },
                        {
                            id: 'applied-communication',
                            name: { ka: '🛠️ გამოყენებითი კომუნიკაცია', en: '🛠️ Applied Communication' },
                            keywords: [
                                { id: 'rhetoric', name: { ka: 'რიტორიკა (ორატორული ხელოვნება)', en: 'Rhetoric (Oratory)' } },
                                { id: 'public-relations-comm', name: { ka: 'საზოგადოებასთან ურთიერთობა (PR, რეპუტაციის მართვა)', en: 'Public Relations (PR, Reputation Management)' } },
                                { id: 'negotiation-comm', name: { ka: 'მოლაპარაკება (მედიაცია)', en: 'Negotiation (Mediation)' } },
                                { id: 'journalism', name: { ka: 'ჟურნალისტიკა (ეთიკა, ინტერვიუ)', en: 'Journalism (Ethics, Interview)' } },
                                { id: 'corporate-communication', name: { ka: 'კორპორაციული კომუნიკაცია', en: 'Corporate Communication' } },
                                { id: 'marketing-communication-comm', name: { ka: 'მარკეტინგული კომუნიკაცია', en: 'Marketing Communication' } },
                            ]
                        },
                        {
                            id: 'modern-fields-of-communication',
                            name: { ka: '💻 თანამედროვე კომუნიკაციის სფეროები', en: '💻 Modern Fields of Communication' },
                            keywords: [
                                { id: 'translation-comm', name: { ka: 'თარგმნა', en: 'Translation' } },
                                { id: 'localization-comm', name: { ka: 'ლოკალიზაცია', en: 'Localization' } },
                                { id: 'digital-communication', name: { ka: 'ციფრული კომუნიკაცია (სოციალური მედია, ბლოგინგი, ციფრული ეტიკეტი)', en: 'Digital Communication (Social Media, Blogging, Digital Etiquette)' } },
                                { id: 'health-communication', name: { ka: 'სამედიცინო კომუნიკაცია', en: 'Health Communication' } },
                            ]
                        }
                    ]
                }
            ]
        }
    ],
};