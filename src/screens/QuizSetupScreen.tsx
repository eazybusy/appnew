import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useLocalization } from '../context/LocalizationContext';
import * as dataService from '../services/dataService';
import { LocalizedName } from '../data/types';
import { useTheme } from 'react-native-paper'; // <-- Hook-ის იმპორტი

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const QuizSetupScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    const { locale, t } = useLocalization();
    const categories = dataService.getCategoryList();
    
    const theme = useTheme(); // <-- თემის ობიექტის მიღება
    const statusBarStyle = theme.dark ? 'light-content' : 'dark-content';

    const [selectedCategory, setSelectedCategory] = useState<{ id: string; name: string; icon: string } | null>(null);
    
    // დინამიური ფერები
    const dynamicColors = {
        containerBackground: theme.colors.background,
        itemContainerBackground: theme.colors.surface,
        primaryText: theme.colors.onSurface,
        secondaryText: theme.colors.onSurfaceVariant,
        backButton: theme.colors.primary, // #007AFF-ის ჩანაცვლება Paper Primary-ით
    };

    // სირთულის ღილაკების დინამიური ფერები
    const difficultyColors = {
        easy: theme.dark ? '#4CAF50' : '#28a745',    // მწვანე
        medium: theme.dark ? '#FFEB3B' : '#ffc107',  // ყვითელი
        hard: theme.dark ? '#F44336' : '#dc3545',    // წითელი
        text: theme.dark ? '#000000' : '#ffffff',    // ტექსტი ღილაკზე
    };

    useLayoutEffect(() => {
        navigation.setOptions({ title: t('quizTitle') });
    }, [navigation, t]);

    const startQuiz = (difficulty: 'easy' | 'medium' | 'hard') => {
        if (!selectedCategory) return;
        const keywords = dataService.getAllKeywordsByCategoryId(selectedCategory.id);
        
        if (keywords.length < 4) {
            Alert.alert(
                t('alertTitleAttention'), // გამოიყენეთ ლოკალიზებული ტექსტი
                t('quizNotEnoughWords') // გამოიყენეთ ლოკალიზებული ტექსტი
            );
            return;
        }
        navigation.navigate('Quiz', { 
            keywords, 
            difficulty, 
            categoryName: selectedCategory.name 
        });
    };

    if (selectedCategory) {
        return (
            // ფონის ფერის დინამიურად დაყენება
            <View style={[styles.container, { backgroundColor: dynamicColors.containerBackground }]}>
                <StatusBar barStyle={statusBarStyle} backgroundColor={dynamicColors.containerBackground} />
                
                <TouchableOpacity onPress={() => setSelectedCategory(null)} style={styles.backButton}>
                    {/* უკან ღილაკის ტექსტის ფერის დინამიურად დაყენება */}
                    <Text style={[styles.backButtonText, { color: dynamicColors.backButton }]}>
                        ← {t('categoriesTitle')}
                    </Text>
                </TouchableOpacity>

                {/* სათაურის ტექსტის ფერი */}
                <Text style={[styles.title, { color: dynamicColors.primaryText }]}>
                    {selectedCategory.icon} {selectedCategory.name}
                </Text>

                {/* ქვესათაურის ტექსტის ფერი */}
                <Text style={[styles.subtitle, { color: dynamicColors.secondaryText }]}>
                    {t('chooseDifficulty')}
                </Text>

                {/* სირთულის ღილაკები */}
                <TouchableOpacity style={[styles.difficultyButton, { backgroundColor: difficultyColors.easy }]} onPress={() => startQuiz('easy')}>
                    <Text style={[styles.buttonText, { color: difficultyColors.text }]}>{t('easy')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.difficultyButton, { backgroundColor: difficultyColors.medium }]} onPress={() => startQuiz('medium')}>
                    <Text style={[styles.buttonText, { color: difficultyColors.text }]}>{t('medium')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.difficultyButton, { backgroundColor: difficultyColors.hard }]} onPress={() => startQuiz('hard')}>
                    <Text style={[styles.buttonText, { color: difficultyColors.text }]}>{t('hard')}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        // ფონის ფერის დინამიურად დაყენება
        <View style={[styles.container, { backgroundColor: dynamicColors.containerBackground }]}>
            <StatusBar barStyle={statusBarStyle} backgroundColor={dynamicColors.containerBackground} />
            
            {/* სათაურის ტექსტის ფერი */}
            <Text style={[styles.title, { color: dynamicColors.primaryText }]}>{t('chooseCategory')}</Text>
            
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={[
                            styles.itemContainer,
                            // ბარათის ფონის დინამიურად დაყენება
                            { backgroundColor: dynamicColors.itemContainerBackground }
                        ]}
                        onPress={() => setSelectedCategory({ id: item.id, name: item.name[locale as keyof LocalizedName], icon: item.icon })}
                    >
                        {/* ტექსტის ფერის დინამიურად დაყენება */}
                        <Text style={[styles.icon, { color: dynamicColors.primaryText }]}>{item.icon}</Text>
                        <Text style={[styles.itemText, { color: dynamicColors.primaryText }]}>{item.name[locale as keyof LocalizedName]}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

// სტილებიდან ამოღებულია ყველა ხისტი ფერი, რათა დინამიურად იმუშაოს.
const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
    subtitle: { fontSize: 18, textAlign: 'center', marginBottom: 20 },
    itemContainer: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 20, 
        marginVertical: 8, 
        marginHorizontal: 16, 
        borderRadius: 12, 
        elevation: 2, 
        // Shadow-ს ვტოვებთ ხისტად, რომ ყველა რეჟიმში იმუშაოს
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 1 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 2 
    },
    icon: { fontSize: 24, marginRight: 15 },
    itemText: { fontSize: 18, fontWeight: '500' },
    difficultyButton: { padding: 20, marginVertical: 10, marginHorizontal: 16, borderRadius: 10, alignItems: 'center' },
    buttonText: { fontSize: 18, fontWeight: 'bold' },
    // ხისტი ფერები (easy, medium, hard) ამოღებულია
    // backButton-ის ფერი ამოღებულია
    backButton: { padding: 10, alignSelf: 'flex-start' },
    backButtonText: { fontSize: 16 },
});

export default QuizSetupScreen;