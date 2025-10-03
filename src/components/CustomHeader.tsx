// AppTabs.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CategoryListScreen from "../screens/CategoryListScreen";
import TranslateScreen from "../screens/TranslateScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import QuizSetupScreen from "../screens/QuizSetupScreen";
import LeaderboardScreen from "../screens/LeaderboardScreen";

import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Categories" component={CategoryListScreen} />
      <Tab.Screen name="Translate" component={TranslateScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Quiz" component={QuizSetupScreen} />
      <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
    </Tab.Navigator>
  );
}
