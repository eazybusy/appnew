export interface LocalizedName {
  ka: string;
  en: string;
}

export interface Keyword {
  id: string;
  name: LocalizedName;
}

export interface SubSection {
  id: string;
  name: LocalizedName;
  keywords: Keyword[];
}

export interface Section {
  id: string;
  name: LocalizedName;
  subSections: SubSection[];
}

export interface SubCategory {
  id: string;
  name: LocalizedName;
  sections: Section[];
}

export interface Category {
  id: string;
  name: LocalizedName;
  icon: string;
  subCategories: SubCategory[];
}
