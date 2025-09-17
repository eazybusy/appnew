import { LocalizedName } from './types';

export interface CategoryInfo {
    id: string;
    name: LocalizedName;
    icon: string;
}

export const CATEGORY_LIST: CategoryInfo[] = [
    { id: 'science', name: { ka: 'მეცნიერება და ბუნება', en: 'Science and Nature' }, icon: '🌌' },
    { id: 'health', name: { ka: 'ადამიანი და ჯანმრთელობა', en: 'Human and Health' }, icon: '🧑‍⚕️' },
    { id: 'society', name: { ka: 'საზოგადოება და ისტორია', en: 'Society and History' }, icon: '🏛️' },
    { id: 'culture', name: { ka: 'ხელოვნება და კულტურა', en: 'Art and Culture' }, icon: '🎨' },
    { id: 'technology', name: { ka: 'ტექნოლოგიები და ინოვაცია', en: 'Technologies and Innovation' }, icon: '🤖' },
    { id: 'lifestyle', name: { ka: 'ცხოვრების სტილი', en: 'Lifestyle' }, icon: '🌿' },
    { id: 'philosophy', name: { ka: 'ფილოსოფია, რელიგია და კომუნიკაცია', en: 'Philosophy, Religion, and Communication' }, icon: '🤔' },
    { id: 'sport', name: { ka: 'სპორტი', en: 'Sport' }, icon: '🏆' },
    { id: 'geography', name: { ka: 'გეოგრაფია და მსოფლიო', en: 'Geography and the World' }, icon: '🌎' },
    { id: 'professions', name: { ka: 'პროფესიები და ხელობები', en: 'Professions and Crafts' }, icon: '🛠️' },
];