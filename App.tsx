import React from 'react';
import { PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';
import { LocalizationProvider } from './src/context/LocalizationContext';
import { AuthProvider } from './src/context/AuthContext';

// App.tsx არის ჩვენი აპლიკაციის მთავარი "ასაწყობი" ფაილი.
function App(): React.JSX.Element {
  return (
    // 1. PaperProvider: ეს კომპონენტი უზრუნველყოფს, რომ ჩვენი ახალი დიზაინის
    // კომპონენტები (ღილაკები, ბარათები) ხელმისაწვდომი იყოს მთელ აპლიკაციაში.
    <PaperProvider>
      {/* 2. LocalizationProvider: ეს "ახსოვს" მომხმარებლის მიერ არჩეულ ენას. */}
      <LocalizationProvider>
        {/* 3. AuthProvider: ეს "ახსოვს" მომხმარებლის სახელს. */}
        <AuthProvider>
          {/* 4. AppNavigator: ჩვენი აპლიკაციის "ტვინი". ის ახლა ხედავს
              ყველა ზედა პროვაიდერის მონაცემებს და შეუძლია მიიღოს სწორი
              გადაწყვეტილება, თუ რომელი ეკრანი აჩვენოს. */}
          <AppNavigator />
        </AuthProvider>
      </LocalizationProvider>
    </PaperProvider>
  );
}

export default App;
