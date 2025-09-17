import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native'; // <-- Alert-ის იმპორტი
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useLocalization } from '../context/LocalizationContext';
import * as dataService from '../services/dataService';
import { LocalizedName } from '../data/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const QuizSetupScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    const { locale, t } = useLocalization();
    const categories = dataService.getCategoryList();

    const [selectedCategory, setSelectedCategory] = useState<{ id: string; name: string; icon: string } | null>(null);

    useLayoutEffect(() => {
        navigation.setOptions({ title: t('quizTitle') });
    }, [navigation, t]);

    const startQuiz = (difficulty: 'easy' | 'medium' | 'hard') => {
        if (!selectedCategory) return;
        const keywords = dataService.getAllKeywordsByCategoryId(selectedCategory.id);
        
        if (keywords.length < 4) {
            // ვიყენებთ Alert.alert-ს
            Alert.alert("ყურადღება", "ამ კატეგორიაში არასაკმარისი სიტყვებია ქვიზის დასაწყებად.");
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
            <View style={styles.container}>
                 <TouchableOpacity onPress={() => setSelectedCategory(null)} style={styles.backButton}>
                    <Text style={styles.backButtonText}>← {t('categoriesTitle')}</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{selectedCategory.icon} {selectedCategory.name}</Text>
                <Text style={styles.subtitle}>{t('chooseDifficulty')}</Text>
                <TouchableOpacity style={[styles.difficultyButton, styles.easy]} onPress={() => startQuiz('easy')}>
                    <Text style={styles.buttonText}>{t('easy')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.difficultyButton, styles.medium]} onPress={() => startQuiz('medium')}>
                    <Text style={styles.buttonText}>{t('medium')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.difficultyButton, styles.hard]} onPress={() => startQuiz('hard')}>
                    <Text style={styles.buttonText}>{t('hard')}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('chooseCategory')}</Text>
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={styles.itemContainer}
                        onPress={() => setSelectedCategory({ id: item.id, name: item.name[locale as keyof LocalizedName], icon: item.icon })}
                    >
                        <Text style={styles.icon}>{item.icon}</Text>
                        <Text style={styles.itemText}>{item.name[locale as keyof LocalizedName]}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10 },
    title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 },
    subtitle: { fontSize: 18, textAlign: 'center', marginBottom: 20, color: 'gray' },
    itemContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 20, marginVertical: 8, marginHorizontal: 16, borderRadius: 12, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 2 },
    icon: { fontSize: 24, marginRight: 15 },
    itemText: { fontSize: 18, fontWeight: '500' },
    difficultyButton: { padding: 20, marginVertical: 10, marginHorizontal: 16, borderRadius: 10, alignItems: 'center' },
    buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    easy: { backgroundColor: '#28a745' },
    medium: { backgroundColor: '#ffc107' },
    hard: { backgroundColor: '#dc3545' },
    backButton: { padding: 10, alignSelf: 'flex-start' },
    backButtonText: { fontSize: 16, color: '#007AFF' },
});

export default QuizSetupScreen;
