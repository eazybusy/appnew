// src/context/ThemeContext.tsx
import React, { createContext, useState, useContext, useEffect, useMemo, ReactNode } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getPaperTheme, AppTheme } from '../themes/paperThemes';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: AppTheme;
  themeMode: ThemeMode;
  toggleTheme: (mode: ThemeMode) => void;
  colorScheme: ColorSchemeName; // მიმდინარე სისტემური სქემა
}

// 1. კონტექსტის შექმნა
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2. პროვაიდერი
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('system');
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>(Appearance.getColorScheme());

  // ** სისტემური თემის ცვლილებების მოსმენა **
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  // ** შენახული თემის ჩატვირთვა **
  useEffect(() => {
    const loadTheme = async () => {
      const storedMode = await AsyncStorage.getItem('userThemeMode');
      if (storedMode) {
        setThemeMode(storedMode as ThemeMode);
      }
    };
    loadTheme();
  }, []);

  // ** თემის გადართვის ლოგიკა **
  const toggleTheme = async (newMode: ThemeMode) => {
    setThemeMode(newMode);
    await AsyncStorage.setItem('userThemeMode', newMode);
  };

  // ** აქტიური Paper Theme-ის გამოთვლა **
  const activeColorScheme = themeMode === 'system' ? colorScheme : themeMode;
  const theme = useMemo(() => getPaperTheme(activeColorScheme), [activeColorScheme]);

  return (
    <ThemeContext.Provider value={{ theme, themeMode, toggleTheme, colorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Custom Hook-ი
export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useAppTheme must be used within a ThemeProvider');
  }
  return context;
};