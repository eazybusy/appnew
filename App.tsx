// App.tsx
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';
import { LocalizationProvider } from './src/context/LocalizationContext';
import { AuthProvider } from './src/context/AuthContext';
import { ThemeProvider, useAppTheme } from './src/context/ThemeContext'; // <-- იმპორტი

// --- ახალი Root კომპონენტი PaperProvider-ისთვის ---
// ეს კომპონენტი იღებს აქტიურ თემას ThemeProvider-დან და გადასცემს მას PaperProvider-ს
const AppWrapper = () => {
  // 1. Paper-ის აქტიური თემის მიღება
  const { theme } = useAppTheme();

  return (
    // 2. PaperProvider-ისთვის Paper-ის თემის გადაცემა
    <PaperProvider theme={theme}>
      {/* 3. PaperProvider-ის შიგნით არსებული პროვაიდერები */}
      <LocalizationProvider>
        <AuthProvider>
          <AppNavigator />
        </AuthProvider>
      </LocalizationProvider>
    </PaperProvider>
  );
};

// --- მთავარი App კომპონენტი ---
// ეს კომპონენტი უზრუნველყოფს ThemeProvider-ს მთელი აპლიკაციისთვის
function App(): React.JSX.Element {
  return (
    // 1. ThemeProvider უნდა იყოს ყველაზე მაღლა
    <ThemeProvider>
      <AppWrapper />
    </ThemeProvider>
  );
}

export default App;