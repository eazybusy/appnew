import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import * as storage from '../services/storage';
import * as dataService from '../services/dataService';
import { useLocalization } from '../context/LocalizationContext';
import { Keyword } from '../data/types';
import { useTheme } from 'react-native-paper'; // <-- Hook-ის იმპორტი

const FavoritesScreen = () => {
    const { t, locale } = useLocalization();
    const theme = useTheme(); // <-- თემის ობიექტი
    const [favoriteKeywords, setFavoriteKeywords] = useState<Keyword[]>([]);

    const statusBarStyle = theme.dark ? 'light-content' : 'dark-content';

    // დინამიური ფერები
    const dynamicColors = useMemo(() => ({
        containerBackground: theme.colors.background, // #f5f5f5
        itemBackground: theme.colors.surface, // #fff
        itemBorder: theme.colors.outlineVariant, // #eee
        primaryText: theme.colors.onSurface,
        secondaryText: theme.colors.onSurfaceVariant, // #666
    }), [theme.colors]);


    const loadFavorites = async () => {
        const favoriteIds = await storage.getFavoriteKeywords();
        const keywordObjects = favoriteIds
            .map(id => dataService.getKeywordById(id))
            .filter((kw): kw is Keyword => kw !== undefined);
        setFavoriteKeywords(keywordObjects);
    };

    useFocusEffect(
        useCallback(() => {
            loadFavorites();
        }, [])
    );
    
    const handleRemoveFavorite = async (keywordId: string) => {
        await storage.removeFavoriteKeyword(keywordId);
        loadFavorites();
    };

    return (
        // 1. მთავარი View-ს ფონის და სტატუსის ზოლის დინამიურად დაყენება
        <View style={[styles.container, { backgroundColor: dynamicColors.containerBackground }]}>
            <StatusBar barStyle={statusBarStyle} backgroundColor={dynamicColors.containerBackground} />
            <FlatList
                data={favoriteKeywords}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View 
                        style={[
                            styles.itemContainer, 
                            { 
                                // 2. Item Container-ის ფონის, ბორდერისა და ჩრდილის დინამიურად დაყენება
                                backgroundColor: dynamicColors.itemBackground,
                                borderColor: dynamicColors.itemBorder,
                                shadowColor: theme.dark ? dynamicColors.primaryText : '#000',
                                shadowOpacity: theme.dark ? 0.4 : 0.1,
                            }
                        ]}
                    >
                        {/* 3. ტექსტის ფერის დინამიურად დაყენება */}
                        <Text style={[styles.itemText, { color: dynamicColors.primaryText }]}>
                            {locale === 'ka' 
                                ? `${item.name.ka} - ${item.name.en}` 
                                : `${item.name.en} - ${item.name.ka}`}
                        </Text>
                        <TouchableOpacity onPress={() => handleRemoveFavorite(item.id)}>
                            <Text style={styles.removeText}>🗑️</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        {/* 4. ცარიელი სიის ტექსტის ფერი */}
                        <Text style={[styles.emptyText, { color: dynamicColors.secondaryText }]}>
                            {t('noFavoritesYet')}
                        </Text>
                    </View>
                }
            />
        </View>
    );
};

// ხისტი ფერები ამოღებულია
const styles = StyleSheet.create({
    container: { flex: 1 },
    itemContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 20, 
        marginVertical: 8, 
        marginHorizontal: 16, 
        borderRadius: 10, 
        borderWidth: 1, 
        elevation: 2 
    },
    itemText: { fontSize: 16, flex: 1 },
    removeText: { fontSize: 24, marginLeft: 15 },
    emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
    emptyText: { fontSize: 16 },
});

export default FavoritesScreen;