import React, { useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useLocalization } from '../context/LocalizationContext';
import * as storage from '../services/storage';
import { useAuth } from '../context/AuthContext';
import { useTheme } from 'react-native-paper'; // <-- Hook-ის იმპორტი

type Props = NativeStackScreenProps<RootStackParamList, 'QuizResult'>;

const QuizResultScreen = ({ route, navigation }: Props) => {
    const { score, totalQuestions, incorrectAnswers, categoryName } = route.params;
    const { t } = useLocalization();
    const { userName } = useAuth();
    const theme = useTheme(); // <-- თემის ობიექტი
    const statusBarStyle = theme.dark ? 'light-content' : 'dark-content';

    // დინამიური ფერები
    const dynamicColors = useMemo(() => ({
        containerBackground: theme.colors.background,
        primaryText: theme.colors.onSurface,
        secondaryText: theme.colors.onSurfaceVariant,
        itemBackground: theme.colors.surface,
        itemBorder: theme.colors.outlineVariant,
        primaryButton: theme.colors.primary,
        secondaryButton: theme.colors.tertiary, // მეორადი ღილაკისთვის ვიყენებთ Tertiary-ს
        buttonText: theme.colors.onPrimary,
        homeButtonText: theme.colors.onTertiary,
    }), [theme.colors]);
    
    useEffect(() => {
        if (userName) {
            storage.saveQuizResult({
                userName,
                categoryName,
                score,
                totalQuestions,
            });
        }
    }, [userName, categoryName, score, totalQuestions]);

    const handleSaveToFavorites = async (keywordId: string) => {
        await storage.addFavoriteKeyword(keywordId);
        // გამოიყენეთ Paper-ის ან RN-ის Alert
        Alert.alert(t('saved'));
    };

    return (
        <View style={[styles.container, { backgroundColor: dynamicColors.containerBackground }]}>
            <StatusBar barStyle={statusBarStyle} backgroundColor={dynamicColors.containerBackground} />
            
            <Text style={[styles.title, { color: dynamicColors.primaryText }]}>
                {t('quizResultTitle')}
            </Text>
            
            <Text style={[styles.scoreText, { color: dynamicColors.secondaryText }]}>
                {t('yourScore')}: {score} / {totalQuestions}
            </Text>
            
            {incorrectAnswers.length > 0 && (
                <>
                    <Text style={[styles.listTitle, { color: dynamicColors.primaryText }]}>
                        {t('incorrectAnswers')}:
                    </Text>
                    <FlatList
                        data={incorrectAnswers}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={[
                                styles.resultItem, 
                                { 
                                    backgroundColor: dynamicColors.itemBackground, 
                                    borderColor: dynamicColors.itemBorder 
                                }
                            ]}>
                                <Text style={[styles.resultItemText, { color: dynamicColors.primaryText }]}>
                                    {item.name.ka} - {item.name.en}
                                </Text>
                                <TouchableOpacity onPress={() => handleSaveToFavorites(item.id)}>
                                    <Text style={styles.favoriteText}>⭐</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        style={styles.list}
                    />
                </>
            )}

            {/* პირველი ღილაკი: სხვა ქვიზი */}
            <TouchableOpacity 
                style={[styles.button, { backgroundColor: dynamicColors.primaryButton }]} 
                onPress={() => navigation.replace('QuizSetup')}
            >
                <Text style={[styles.buttonText, { color: dynamicColors.buttonText }]}>
                    {t('tryAnotherQuiz')}
                </Text>
            </TouchableOpacity>

            {/* მეორე ღილაკი: მთავარ გვერდზე დაბრუნება */}
            <TouchableOpacity 
                style={[styles.button, styles.homeButton, { backgroundColor: dynamicColors.secondaryButton }]} 
                onPress={() => navigation.popToTop()}
            >
                <Text style={[styles.buttonText, { color: dynamicColors.homeButtonText }]}>
                    {t('backToHome')}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, alignItems: 'center' },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
    scoreText: { fontSize: 22, marginBottom: 20 },
    listTitle: { fontSize: 20, fontWeight: '600', marginTop: 20, marginBottom: 10, alignSelf: 'flex-start' },
    list: { width: '100%' },
    resultItem: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 15, 
        marginVertical: 5, 
        borderRadius: 10, 
        width: '100%', 
        borderWidth: 1,
    },
    resultItemText: { fontSize: 16 },
    favoriteText: { fontSize: 24 },
    button: { width: '100%', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
    homeButton: { }, // ფონის ფერი დინამიურად გადაეცემა
    buttonText: { fontSize: 16, fontWeight: 'bold' },
});

export default QuizResultScreen;