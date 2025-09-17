import AsyncStorage from '@react-native-async-storage/async-storage';
import { Keyword } from '../data/types';

const LANGUAGE_KEY = '@SityvaobanaApp:language';
const USER_NAME_KEY = '@SityvaobanaApp:userName';
const FAVORITES_KEY = '@SityvaobanaApp:favorites';
const QUIZ_RESULTS_KEY = '@SityvaobanaApp:quizResults';

export interface QuizResult {
    id: string;
    userName: string;
    categoryName: string;
    score: number;
    totalQuestions: number;
    date: string;
}

export const saveLanguage = async (language: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(LANGUAGE_KEY, language);
  } catch (error) {
    console.error('Failed to save the language to storage', error);
  }
};

export const getLanguage = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem(LANGUAGE_KEY);
  } catch (error) {
    console.error('Failed to get the language from storage', error);
    return null;
  }
};

export const saveUserName = async (name: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(USER_NAME_KEY, name);
    } catch (error) {
      console.error('Failed to save the user name to storage', error);
    }
};
  
export const getUserName = async (): Promise<string | null> => {
    try {
      return await AsyncStorage.getItem(USER_NAME_KEY);
    } catch (error) {
      console.error('Failed to get the user name from storage', error);
      return null;
    }
};

export const clearUserData = async (): Promise<void> => {
    try {
        await AsyncStorage.removeItem(USER_NAME_KEY);
    } catch (error) {
        console.error('Failed to clear user data', error);
    }
};

export const getFavoriteKeywords = async (): Promise<string[]> => {
    try {
        const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
        return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
        console.error('Failed to get favorite keywords', error);
        return [];
    }
};

export const addFavoriteKeyword = async (keywordId: string): Promise<void> => {
    try {
        const favorites = await getFavoriteKeywords();
        if (!favorites.includes(keywordId)) {
            const newFavorites = [...favorites, keywordId];
            await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
        }
    } catch (error) {
        console.error('Failed to add favorite keyword', error);
    }
};

export const removeFavoriteKeyword = async (keywordId: string): Promise<void> => {
    try {
        let favorites = await getFavoriteKeywords();
        const newFavorites = favorites.filter(id => id !== keywordId);
        await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    } catch (error) {
        console.error('Failed to remove favorite keyword', error);
    }
};

export const getQuizResults = async (): Promise<QuizResult[]> => {
    try {
        const results = await AsyncStorage.getItem(QUIZ_RESULTS_KEY);
        return results ? JSON.parse(results) : [];
    } catch (error) {
        console.error('Failed to get quiz results', error);
        return [];
    }
};

export const saveQuizResult = async (result: Omit<QuizResult, 'id' | 'date'>): Promise<void> => {
    try {
        const results = await getQuizResults();
        const newResult: QuizResult = {
            ...result,
            id: Date.now().toString(),
            date: new Date().toISOString(),
        };
        const newResults = [...results, newResult];
        await AsyncStorage.setItem(QUIZ_RESULTS_KEY, JSON.stringify(newResults));
    } catch (error) {
        console.error('Failed to save quiz result', error);
    }
};