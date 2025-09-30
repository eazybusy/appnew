import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, StatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import * as storage from '../services/storage';
import { QuizResult } from '../services/storage';
import { useLocalization } from '../context/LocalizationContext';
import { useTheme } from 'react-native-paper'; // <-- Hook-ის იმპორტი

const LeaderboardScreen = () => {
    const { t } = useLocalization();
    const theme = useTheme(); // <-- თემის ობიექტი
    const [results, setResults] = useState<QuizResult[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const statusBarStyle = theme.dark ? 'light-content' : 'dark-content';

    // დინამიური ფერები
    const dynamicColors = useMemo(() => ({
        containerBackground: theme.colors.background, // #f5f5f5
        itemBackground: theme.colors.surface, // #fff
        rankText: theme.colors.onSurface,
        nameText: theme.colors.onSurface,
        categoryText: theme.colors.onSurfaceVariant, // gray
        scoreAccent: theme.colors.primary, // #007AFF
        loadingSpinner: theme.colors.primary,
        emptyText: theme.colors.onSurfaceVariant, // #666
    }), [theme.colors]);

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
        // ActivityIndicator-ის ფონისა და ფერის დინამიურად დაყენება
        return (
            <View style={[styles.container, { backgroundColor: dynamicColors.containerBackground, justifyContent: 'center', alignItems: 'center' }]}>
                <StatusBar barStyle={statusBarStyle} backgroundColor={dynamicColors.containerBackground} />
                <ActivityIndicator size="large" color={dynamicColors.loadingSpinner} />
            </View>
        );
    }

    return (
        // 1. მთავარი View-ს ფონის და სტატუსის ზოლის დინამიურად დაყენება
        <View style={[styles.container, { backgroundColor: dynamicColors.containerBackground }]}>
            <StatusBar barStyle={statusBarStyle} backgroundColor={dynamicColors.containerBackground} />
            <FlatList
                data={results}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    // 2. Item Container-ის ფონის დინამიურად დაყენება
                    <View style={[styles.itemContainer, { backgroundColor: dynamicColors.itemBackground }]}>
                        {/* 3. რანგის ტექსტის ფერი */}
                        <Text style={[styles.rank, { color: dynamicColors.rankText }]}>{index + 1}.</Text>
                        <View style={styles.infoContainer}>
                            {/* 4. სახელის ტექსტის ფერი */}
                            <Text style={[styles.name, { color: dynamicColors.nameText }]}>{item.userName}</Text>
                            {/* 5. კატეგორიის ტექსტის ფერი */}
                            <Text style={[styles.category, { color: dynamicColors.categoryText }]}>{item.categoryName}</Text>
                        </View>
                        {/* 6. ქულის ტექსტის აქცენტირებული ფერი */}
                        <Text style={[styles.score, { color: dynamicColors.scoreAccent }]}>{item.score} / {item.totalQuestions}</Text>
                    </View>
                )}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        {/* 7. ცარიელი სიის ტექსტის ფერი */}
                        <Text style={[styles.emptyText, { color: dynamicColors.emptyText }]}>{t('noResultsYet')}</Text>
                    </View>
                }
            />
        </View>
    );
};

// ხისტი ფერები ამოღებულია
const styles = StyleSheet.create({
    container: { flex: 1 },
    itemContainer: { flexDirection: 'row', padding: 15, marginVertical: 8, marginHorizontal: 16, borderRadius: 10, alignItems: 'center', elevation: 2 },
    rank: { fontSize: 18, fontWeight: 'bold', marginRight: 15, width: 30, },
    infoContainer: { flex: 1 },
    name: { fontSize: 16, fontWeight: 'bold' },
    category: { fontSize: 14 },
    score: { fontSize: 18, fontWeight: 'bold' },
    emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
    emptyText: { fontSize: 16 },
});

export default LeaderboardScreen;