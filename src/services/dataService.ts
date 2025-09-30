import { CATEGORY_LIST } from '../data/category-list';
import { SCIENCE_CATEGORY } from '../data/categories/science';
import { HEALTH_CATEGORY } from '../data/categories/health';
import { HISTORY_CATEGORY } from '../data/categories/history';
import { CULTURE_CATEGORY } from '../data/categories/culture';
import { TECHNOLOGY_CATEGORY } from '../data/categories/technology';
import { LIFESTYLE_CATEGORY } from '../data/categories/lifestyle';
import { PHILOSOPHY_CATEGORY } from '../data/categories/philosophy';
import { SPORT_CATEGORY } from '../data/categories/sport';
import { GEOGRAPHY_CATEGORY } from '../data/categories/geography';
import { PROFESSIONS_CATEGORY } from '../data/categories/professions';
import { Category, SubCategory, Section, SubSection, Keyword, LocalizedName } from '../data/types';

// Define the valid language codes for clarity
type LangCode = 'ka' | 'en'; 

const ALL_CATEGORIES_MAP: { [key: string]: Category } = {
  science: SCIENCE_CATEGORY,
  health: HEALTH_CATEGORY,
  society: HISTORY_CATEGORY, // Note: society maps to HISTORY_CATEGORY
  culture: CULTURE_CATEGORY,
  technology: TECHNOLOGY_CATEGORY,
  lifestyle: LIFESTYLE_CATEGORY,
  philosophy: PHILOSOPHY_CATEGORY,
  sport: SPORT_CATEGORY,
  geography: GEOGRAPHY_CATEGORY,
  professions: PROFESSIONS_CATEGORY,
};

export interface SearchResult {
    keyword: Keyword;
    subSectionId: string;
    subSectionName: LocalizedName;
}

export interface TranslationResult {
    original: string;
    translated: string;
}

// ... (Rest of the helper functions remain unchanged) ...

export const getCategoryList = () => {
  return CATEGORY_LIST;
};

export const getCategoryById = (categoryId: string): Category | undefined => {
    return ALL_CATEGORIES_MAP[categoryId];
};

export const getSubCategoryById = (subCategoryId: string): SubCategory | undefined => {
    for (const category of Object.values(ALL_CATEGORIES_MAP)) {
        const found = category.subCategories.find(sub => sub.id === subCategoryId);
        if (found) return found;
    }
    return undefined;
};

export const getSectionById = (sectionId: string): Section | undefined => {
    for (const category of Object.values(ALL_CATEGORIES_MAP)) {
        for (const subCategory of category.subCategories) {
            const found = subCategory.sections.find(sec => sec.id === sectionId);
            if (found) return found;
        }
    }
    return undefined;
};

export const getSubSectionById = (subSectionId: string): SubSection | undefined => {
    for (const category of Object.values(ALL_CATEGORIES_MAP)) {
        for (const subCategory of category.subCategories) {
            for (const section of subCategory.sections) {
                const found = section.subSections.find(subSec => subSec.id === subSectionId);
                if (found) return found;
            }
        }
    }
    return undefined;
};

export const getAllKeywordsByCategoryId = (categoryId: string): Keyword[] => {
    const category = getCategoryById(categoryId);
    if (!category) return [];
    let allKeywords: Keyword[] = [];
    category.subCategories.forEach(subCategory => {
        subCategory.sections.forEach(section => {
            section.subSections.forEach(subSection => {
                allKeywords = [...allKeywords, ...subSection.keywords];
            });
        });
    });
    return allKeywords;
};

export const getKeywordById = (keywordId: string): Keyword | undefined => {
    for (const category of Object.values(ALL_CATEGORIES_MAP)) {
        for (const subCategory of category.subCategories) {
            for (const section of subCategory.sections) {
                for (const subSection of section.subSections) {
                    const found = subSection.keywords.find(kw => kw.id === keywordId);
                    if (found) return found;
                }
            }
        }
    }
    return undefined;
};

// --- ფუნქცია განახლებულია ენის პარამეტრის დამატებით და ლოგიკის მორგებით ---
export const findAllTranslations = (text: string, sourceLang: LangCode): TranslationResult[] => { // FIX: Added sourceLang parameter
    const searchText = text.toLowerCase().trim();
    if (!searchText) return [];
    
    const searchLang = sourceLang;
    const targetLang = sourceLang === 'ka' ? 'en' : 'ka'; // Determine the target language

    const exactMatches: TranslationResult[] = [];
    const partialMatches: TranslationResult[] = [];
    const addedKeywordIds = new Set<string>(); // დუბლიკატების თავიდან ასაცილებლად

    for (const category of Object.values(ALL_CATEGORIES_MAP)) {
        for (const subCategory of category.subCategories) {
            for (const section of subCategory.sections) {
                for (const subSection of section.subSections) {
                    for (const keyword of subSection.keywords) {
                        if (addedKeywordIds.has(keyword.id)) {
                            continue;
                        }
                        
                        // Extract words for the search and target languages
                        const searchWord = keyword.name[searchLang].toLowerCase();
                        const targetWord = keyword.name[targetLang];
                        
                        const result: TranslationResult = {
                            original: keyword.name[searchLang], // Original in search language
                            translated: keyword.name[targetLang], // Translation in target language
                        };

                        // 1. ვამოწმებთ ზუსტ დამთხვევას საძიებო ენაზე
                        if (searchWord === searchText) {
                            exactMatches.push(result);
                            addedKeywordIds.add(keyword.id);
                        } 
                        // 2. თუ ზუსტი დამთხვევა არაა, ვამოწმებთ ნაწილობრივს საძიებო ენაზე
                        else if (searchWord.includes(searchText)) {
                            partialMatches.push(result);
                            addedKeywordIds.add(keyword.id);
                        }
                    }
                }
            }
        }
    }
    // ვაბრუნებთ ჯერ ზუსტ, შემდეგ კი ნაწილობრივ დამთხვევებს
    return [...exactMatches, ...partialMatches];
};


export const searchAllKeywords = (query: string): SearchResult[] => {
    if (!query.trim()) {
        return [];
    }
    const lowercasedQuery = query.toLowerCase().trim();
    const results: SearchResult[] = [];

    for (const category of Object.values(ALL_CATEGORIES_MAP)) {
        for (const subCategory of category.subCategories) {
            for (const section of subCategory.sections) {
                for (const subSection of section.subSections) {
                    for (const keyword of subSection.keywords) {
                        if (keyword.name.ka.toLowerCase().includes(lowercasedQuery) || keyword.name.en.toLowerCase().includes(lowercasedQuery)) {
                            results.push({
                                keyword,
                                subSectionId: subSection.id,
                                subSectionName: subSection.name,
                            });
                        }
                    }
                }
            }
        }
    }
    return results;
};