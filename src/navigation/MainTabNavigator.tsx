import React from 'react';
import { BackHandler, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomNavigation, Appbar, useTheme } from 'react-native-paper';
import CategoryListScreen from '../screens/CategoryListScreen';
import TranslateScreen from '../screens/TranslateScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import QuizSetupScreen from '../screens/QuizSetupScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import { useLocalization } from '../context/LocalizationContext';
import { RootStackParamList } from './types';

const MainTabNavigator = () => {
    const { t } = useLocalization();
    const theme = useTheme();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [index, setIndex] = React.useState(0);

    // ლოგიკა, რომელიც აპლიკაციიდან გასვლისას დასტურს ითხოვს
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

    // ეკრანების და მათი პარამეტრების განსაზღვრა
    const routes = [
        { key: 'categories', title: t('tabCategories'), focusedIcon: 'view-grid', unfocusedIcon: 'view-grid-outline' },
        { key: 'quiz', title: t('tabQuiz'), focusedIcon: 'gamepad-variant', unfocusedIcon: 'gamepad-variant-outline' },
        { key: 'leaderboard', title: t('tabLeaderboard'), focusedIcon: 'trophy', unfocusedIcon: 'trophy-outline' },
        { key: 'translate', title: t('tabTranslate'), focusedIcon: 'translate', unfocusedIcon: 'translate' },
        { key: 'favorites', title: t('tabFavorites'), focusedIcon: 'star', unfocusedIcon: 'star-outline' },
    ];

    // SceneMap აკავშირებს ეკრანის key-ს და კომპონენტს
    const renderScene = BottomNavigation.SceneMap({
        categories: CategoryListScreen,
        quiz: QuizSetupScreen,
        leaderboard: LeaderboardScreen,
        translate: TranslateScreen,
        favorites: FavoritesScreen,
    });

    return (
        <>
            {/* 1. ზედა ბარი (Appbar) ენის შეცვლის ღილაკით */}
            <Appbar.Header style={{ backgroundColor: theme.colors.primary }}>
                <Appbar.Content title={routes[index].title} color={theme.colors.onPrimary} />
                <Appbar.Action
                    icon="earth" // დედამიწის ხატულა
                    color={theme.colors.onPrimary}
                    onPress={() => navigation.navigate('LanguageSelection')}
                />
            </Appbar.Header>
            {/* 2. ქვედა ნავიგაცია (BottomNavigation) */}
            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
                shifting={true} // ანიმაციური ეფექტი
                activeColor={theme.colors.primary}
                inactiveColor={theme.colors.onSurfaceVariant}
            />
        </>
    );
};

export default MainTabNavigator;