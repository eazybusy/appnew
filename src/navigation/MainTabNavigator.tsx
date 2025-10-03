import React from 'react';
import { BackHandler, Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native'; // useNavigation-ის იმპორტი
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appbar, useTheme } from 'react-native-paper';
import { useLocalization } from '../context/LocalizationContext';

import CustomTabBar from '../components/CustomTabBar'; 
import CategoryListScreen from '../screens/CategoryListScreen';
import TranslateScreen from '../screens/TranslateScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import QuizSetupScreen from '../screens/QuizSetupScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import { RootStackParamList } from './types'; // RootStackParamList-ის იმპორტი

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    const { t } = useLocalization();
    const theme = useTheme();
    
    // useNavigation hook-ის გამოყენება, რათა შევძლოთ სხვა Stack-ზე გადასვლა
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
                Alert.alert(t('exitTitle'), t('exitMessage'), [
                    { text: t('no'), style: 'cancel', onPress: () => null },
                    { text: t('yes'), onPress: () => BackHandler.exitApp() },
                ]);
                return true;
            };
            const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
            return () => subscription.remove();
        }, [t])
    );

    return (
        <Tab.Navigator
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{
                header: ({ options }) => { // navigation პარამეტრი აღარ გვჭირდება, რადგან hook-ით ვიღებთ
                    return (
                        <Appbar.Header style={{ backgroundColor: theme.colors.background }}>
                            <Appbar.Content title={options.title} />
                            {/* ენის შეცვლის ღილაკი */}
                            <Appbar.Action
                                icon="earth"
                                onPress={() => navigation.navigate('LanguageSelection')}
                            />
                        </Appbar.Header>
                    );
                },
            }}
        >
            <Tab.Screen
                name="Categories"
                component={CategoryListScreen}
                options={{ title: t('tabCategories') }}
            />
            <Tab.Screen
                name="Quiz"
                component={QuizSetupScreen}
                options={{ title: t('tabQuiz') }}
            />
            <Tab.Screen
                name="Leaderboard"
                component={LeaderboardScreen}
                options={{ title: t('tabLeaderboard') }}
            />
            <Tab.Screen
                name="Translate"
                component={TranslateScreen}
                options={{ title: t('tabTranslate') }}
            />
            <Tab.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{ title: t('tabFavorites') }}
            />
        </Tab.Navigator>
    );
};

export default MainTabNavigator;