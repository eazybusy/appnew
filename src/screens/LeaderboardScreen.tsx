import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import * as storage from '../services/storage';
import { QuizResult } from '../services/storage';
import { useLocalization } from '../context/LocalizationContext';

const LeaderboardScreen = () => {
    const { t } = useLocalization();
    const [results, setResults] = useState<QuizResult[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadResults = async () => {
        setIsLoading(true);
        const savedResults = await storage.getQuizResults();
        // ვალაგებთ შედეგებს ქულების კლების მიხედვით
        savedResults.sort((a, b) => b.score - a.score);
        setResults(savedResults);
        setIsLoading(false);
    };

    useFocusEffect(
        useCallback(() => {
            loadResults();
        }, [])
    );

    if (isLoading) {
        return <View style={styles.container}><ActivityIndicator size="large" /></View>;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={results}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.rank}>{index + 1}.</Text>
                        <View style={styles.infoContainer}>
                            <Text style={styles.name}>{item.userName}</Text>
                            <Text style={styles.category}>{item.categoryName}</Text>
                        </View>
                        <Text style={styles.score}>{item.score} / {item.totalQuestions}</Text>
                    </View>
                )}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>{t('noResultsYet')}</Text>
                    </View>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    itemContainer: { flexDirection: 'row', backgroundColor: '#fff', padding: 15, marginVertical: 8, marginHorizontal: 16, borderRadius: 10, alignItems: 'center', elevation: 2 },
    rank: { fontSize: 18, fontWeight: 'bold', marginRight: 15, width: 30, },
    infoContainer: { flex: 1 },
    name: { fontSize: 16, fontWeight: 'bold' },
    category: { fontSize: 14, color: 'gray' },
    score: { fontSize: 18, fontWeight: 'bold', color: '#007AFF' },
    emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
    emptyText: { fontSize: 16, color: '#666' },
});

export default LeaderboardScreen;