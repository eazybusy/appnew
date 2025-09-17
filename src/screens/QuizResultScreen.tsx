import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useLocalization } from '../context/LocalizationContext';
import * as storage from '../services/storage';
import { useAuth } from '../context/AuthContext';

type Props = NativeStackScreenProps<RootStackParamList, 'QuizResult'>;

const QuizResultScreen = ({ route, navigation }: Props) => {
    const { score, totalQuestions, incorrectAnswers, categoryName } = route.params;
    const { t } = useLocalization();
    const { userName } = useAuth();
    
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
        Alert.alert(t('saved'));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t('quizResultTitle')}</Text>
            <Text style={styles.scoreText}>{t('yourScore')}: {score} / {totalQuestions}</Text>
            
            {incorrectAnswers.length > 0 && (
                <>
                    <Text style={styles.listTitle}>{t('incorrectAnswers')}:</Text>
                    <FlatList
                        data={incorrectAnswers}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.resultItem}>
                                <Text style={styles.resultItemText}>{item.name.ka} - {item.name.en}</Text>
                                <TouchableOpacity onPress={() => handleSaveToFavorites(item.id)}>
                                    <Text style={styles.favoriteText}>⭐</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        style={styles.list}
                    />
                </>
            )}

            <TouchableOpacity style={styles.button} onPress={() => navigation.replace('QuizSetup')}>
                <Text style={styles.buttonText}>{t('tryAnotherQuiz')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.homeButton]} onPress={() => navigation.popToTop()}>
                <Text style={styles.buttonText}>{t('backToHome')}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#f0f4f8' },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#333' },
    scoreText: { fontSize: 22, marginBottom: 20, color: '#555' },
    listTitle: { fontSize: 20, fontWeight: '600', marginTop: 20, marginBottom: 10, alignSelf: 'flex-start' },
    list: { width: '100%' },
    resultItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: 15, marginVertical: 5, borderRadius: 10, width: '100%', borderWidth: 1, borderColor: '#eee' },
    resultItemText: { fontSize: 16 },
    favoriteText: { fontSize: 24 },
    button: { width: '100%', backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
    homeButton: { backgroundColor: '#6c757d' },
    buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default QuizResultScreen;
