import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import * as storage from '../services/storage';
import * as dataService from '../services/dataService';
import { useLocalization } from '../context/LocalizationContext';
import { Keyword } from '../data/types';

const FavoritesScreen = () => {
    const { t, locale } = useLocalization();
    const [favoriteKeywords, setFavoriteKeywords] = useState<Keyword[]>([]);

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
        <View style={styles.container}>
            <FlatList
                data={favoriteKeywords}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>
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
                        <Text style={styles.emptyText}>{t('noFavoritesYet')}</Text>
                    </View>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    itemContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: 20, marginVertical: 8, marginHorizontal: 16, borderRadius: 10, borderWidth: 1, borderColor: '#eee' },
    itemText: { fontSize: 16, flex: 1 },
    removeText: { fontSize: 24, marginLeft: 15 },
    emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 },
    emptyText: { fontSize: 16, color: '#666' },
});

export default FavoritesScreen;