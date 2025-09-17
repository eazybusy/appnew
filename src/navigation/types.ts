import { Keyword } from "../data/types";

export type RootStackParamList = {
    Home: undefined; // <-- დავამატეთ ჩვენი ახალი სპლეშ-ეკრანი
    LanguageSelection: undefined;
    UserNameInput: undefined;
    Main: undefined;
    SubCategory: { categoryId: string; categoryName: string };
    SectionList: { subCategoryId: string; subCategoryName: string };
    SubSectionList: { sectionId: string; sectionName: string };
    KeywordList: { subSectionId: string; subSectionName: string };
    QuizSetup: undefined;
    Quiz: { keywords: Keyword[]; categoryName: string; difficulty: 'easy' | 'medium' | 'hard' };
    QuizResult: { 
        score: number; 
        totalQuestions: number; 
        incorrectAnswers: Keyword[];
        categoryName: string;
    };
    Leaderboard: undefined;
};
