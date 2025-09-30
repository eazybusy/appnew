// src/themes/paperThemes.ts
import { MD3LightTheme as DefaultTheme, MD3DarkTheme as DarkTheme } from 'react-native-paper';
import { ColorSchemeName } from 'react-native';

// 1. Light Theme
export const lightTheme = {
  ...DefaultTheme, // Paper-ის სტანდარტული Light თემის გადმოტანა
  colors: {
    ...DefaultTheme.colors, // სტანდარტული ფერების შენარჩუნება
    // თქვენი პერსონალური ფერები
    primary: '#007AFF',      // ღილაკების აქცენტი
    onPrimary: '#FFFFFF',    // ღილაკის ტექსტი
    background: '#F9F9F9',   // აპლიკაციის ფონი
    text: '#121212',         // ტექსტის ფერი
    surface: '#FFFFFF',      // ბარათების ფონი
  },
};

// 2. Dark Theme
export const darkTheme = {
  ...DarkTheme, // Paper-ის სტანდარტული Dark თემის გადმოტანა
  colors: {
    ...DarkTheme.colors, // სტანდარტული ფერების შენარჩუნება
    // თქვენი პერსონალური ფერები
    primary: '#BB86FC',      // აქცენტი (იისფერი)
    onPrimary: '#000000',    // ღილაკის ტექსტი
    background: '#121212',   // მუქი ფონი
    text: '#FFFFFF',         // ტექსტის ფერი
    surface: '#1D1D1D',      // ბარათების ფონი
  },
};

// 3. თემის ამორჩევის ფუნქცია
export const getPaperTheme = (colorScheme: ColorSchemeName) => {
    return colorScheme === 'dark' ? darkTheme : lightTheme;
};

// 4. Paper-ის თემის ტიპის ექსპორტი (კომპონენტებში გამოსაყენებლად)
export type AppTheme = typeof lightTheme;