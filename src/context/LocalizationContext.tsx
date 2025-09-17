import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import i18n from '../services/i18n';
import { getLanguage, saveLanguage } from '../services/storage';
import { ActivityIndicator, View } from 'react-native';

interface LocalizationContextType {
    locale: string | null; // <-- შევცვალეთ, რომ შეეძლოს null-ის მიღება
    isLoading: boolean; // <-- დავამატეთ ჩატვირთვის სტატუსი
    setLocale: (locale: string) => void;
    t: (scope: string, options?: object) => string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider = ({ children }: { children: ReactNode }) => {
    const [locale, setLocaleState] = useState<string | null>(null); // <-- საწყისი მდგომარეობა არის null
    const [isLoading, setIsLoading] = useState(true); // <-- ვამატებთ ჩატვირთვის სტატუსს

    useEffect(() => {
        const loadLanguage = async () => {
            try {
                const savedLang = await getLanguage();
                if (savedLang) {
                    setLocale(savedLang);
                }
            } catch (e) {
                console.error("Failed to load language.", e);
            } finally {
                setIsLoading(false);
            }
        };
        loadLanguage();
    }, []);

    const setLocale = (newLocale: string) => {
        i18n.locale = newLocale;
        setLocaleState(newLocale);
        saveLanguage(newLocale);
    };

    const t = (scope: string, options?: object) => {
        // თუ ენა არჩეული არაა, დროებით ვიყენებთ default ენას
        return i18n.t(scope, { ...options, locale: locale || i18n.defaultLocale });
    }

    return (
        <LocalizationContext.Provider value={{ locale, isLoading, setLocale, t }}>
            {children}
        </LocalizationContext.Provider>
    );
};

export const useLocalization = () => {
    const context = useContext(LocalizationContext);
    if (context === undefined) {
        throw new Error('useLocalization must be used within a LocalizationProvider');
    }
    return context;
};

