import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

// Screens
import HomeScreen from '../screens/HomeScreen';
import LanguageSelectionScreen from '../screens/LanguageSelectionScreen';
import UserNameInputScreen from '../screens/UserNameInputScreen';
import MainTabNavigator from './MainTabNavigator';
import SubCategoryScreen from '../screens/SubCategoryScreen';
import SectionListScreen from '../screens/SectionListScreen';
import SubSectionListScreen from '../screens/SubSectionListScreen';
import KeywordListScreen from '../screens/KeywordListScreen';
import QuizScreen from '../screens/QuizScreen';
import QuizSetupScreen from '../screens/QuizSetupScreen';
import QuizResultScreen from '../screens/QuizResultScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home" // 1. აპლიკაცია ყოველთვის იწყება Home ეკრანით
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* 2. ყველა ეკრანი ისევ აქ არის განსაზღვრული */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LanguageSelection" component={LanguageSelectionScreen} />
        <Stack.Screen name="UserNameInput" component={UserNameInputScreen} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen name="SubCategory" component={SubCategoryScreen} options={{ headerShown: true }} />
        <Stack.Screen name="SectionList" component={SectionListScreen} options={{ headerShown: true }} />
        <Stack.Screen name="SubSectionList" component={SubSectionListScreen} options={{ headerShown: true }} />
        <Stack.Screen name="KeywordList" component={KeywordListScreen} options={{ headerShown: true }} />
        <Stack.Screen name="QuizSetup" component={QuizSetupScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ headerShown: true }} />
        <Stack.Screen name="QuizResult" component={QuizResultScreen} options={{ headerShown: true }} />
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

