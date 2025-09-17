import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useLocalization } from '../context/LocalizationContext';
import * as dataService from '../services/dataService';
import { SearchResult } from '../services/dataService';
import { LocalizedName } from '../data/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SearchScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    const { t, locale } = useLocalization();
    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);

    const handleSearch = (text: string) => {
        setSearchText(text);
        if (text.length > 2) {
            const searchResults = dataService.searchAllKeywords(text);
            setResults(searchResults);
        } else {
            setResults([]);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={t('searchPlaceholder')}
                value={searchText}
                onChangeText={handleSearch}
            />
            <FlatList
                data={results}
                keyExtractor={(item) => item.keyword.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={styles.itemContainer}
                        onPress={() => navigation.navigate('KeywordList', { 
                            subSectionId: item.subSectionId,
                            subSectionName: item.subSectionName[locale as keyof LocalizedName]
                        })}
                    >
                        <Text style={styles.itemText}>
                            {locale === 'ka' 
                                ? `${item.keyword.name.ka} - ${item.keyword.name.en}` 
                                : `${item.keyword.name.en} - ${item.keyword.name.ka}`}
                        </Text>
                        <Text style={styles.categoryText}>
                            {item.subSectionName[locale as keyof LocalizedName]}
                        </Text>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={
                    searchText.length > 2 ? (
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>{t('noResultsFound')}</Text>
                        </View>
                    ) : null
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    input: {
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        margin: 16,
        borderRadius: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    itemContainer: { 
        backgroundColor: '#fff', 
        padding: 20, 
        marginVertical: 8, 
        marginHorizontal: 16, 
        borderRadius: 8
    },
    itemText: { 
        fontSize: 16,
        fontWeight: '500'
    },
    categoryText: {
        fontSize: 14,
        color: 'gray',
        marginTop: 4
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    emptyText: {
        fontSize: 16,
        color: '#666'
    }
});

export default SearchScreen;