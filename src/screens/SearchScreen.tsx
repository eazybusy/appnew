import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useLocalization } from '../context/LocalizationContext';
import * as dataService from '../services/dataService';
import { SearchResult } from '../services/dataService';
import { LocalizedName } from '../data/types';
import { useTheme } from 'react-native-paper'; // <-- Hook-ის იმპორტი

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SearchScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    const { t, locale } = useLocalization();
    const theme = useTheme(); // <-- თემის ობიექტის მიღება
    
    const [searchText, setSearchText] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);

    const statusBarStyle = theme.dark ? 'light-content' : 'dark-content';

    // დინამიური ფერები
    const dynamicColors = {
        containerBackground: theme.colors.background,
        itemContainerBackground: theme.colors.surface,
        primaryText: theme.colors.onSurface,
        secondaryText: theme.colors.onSurfaceVariant, // მეორადი ტექსტის ფერი
        inputBackground: theme.colors.surface,
        inputBorder: theme.colors.outline,
        inputPlaceholder: theme.colors.onSurfaceVariant,
        emptyText: theme.colors.onSurfaceVariant,
    };

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
        // 1. მთავარი View-ს ფონის და სტატუსის ზოლის დამატება
        <View style={[styles.container, { backgroundColor: dynamicColors.containerBackground }]}>
            <StatusBar barStyle={statusBarStyle} backgroundColor={dynamicColors.containerBackground} />
            
            <TextInput
                style={[
                    styles.input,
                    // 2. TextInput-ის სტილების დინამიურად დაყენება
                    {
                        backgroundColor: dynamicColors.inputBackground,
                        color: dynamicColors.primaryText,
                        borderColor: dynamicColors.inputBorder,
                    }
                ]}
                placeholder={t('searchPlaceholder')}
                placeholderTextColor={dynamicColors.inputPlaceholder}
                value={searchText}
                onChangeText={handleSearch}
            />
            
            <FlatList
                data={results}
                keyExtractor={(item) => item.keyword.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={[
                            styles.itemContainer,
                            // 3. ItemContainer-ის ფონის დინამიურად დაყენება
                            { backgroundColor: dynamicColors.itemContainerBackground }
                        ]}
                        onPress={() => navigation.navigate('KeywordList', { 
                            subSectionId: item.subSectionId,
                            subSectionName: item.subSectionName[locale as keyof LocalizedName]
                        })}
                    >
                        {/* 4. Item Text-ის ფერის დინამიურად დაყენება */}
                        <Text style={[styles.itemText, { color: dynamicColors.primaryText }]}>
                            {locale === 'ka' 
                                ? `${item.keyword.name.ka} - ${item.keyword.name.en}` 
                                : `${item.keyword.name.en} - ${item.keyword.name.ka}`}
                        </Text>
                        {/* 5. Category Text-ის ფერის დინამიურად დაყენება */}
                        <Text style={[styles.categoryText, { color: dynamicColors.secondaryText }]}>
                            {item.subSectionName[locale as keyof LocalizedName]}
                        </Text>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={
                    searchText.length > 2 ? (
                        <View style={styles.emptyContainer}>
                            {/* 6. Empty Text-ის ფერის დინამიურად დაყენება */}
                            <Text style={[styles.emptyText, { color: dynamicColors.emptyText }]}>{t('noResultsFound')}</Text>
                        </View>
                    ) : null
                }
            />
        </View>
    );
};

// სტილებიდან ამოღებულია ყველა ხისტი ფერი, რადგან ისინი დინამიურად გადაეცემა კომპონენტებს.
const styles = StyleSheet.create({
    container: { flex: 1 },
    input: {
        height: 50,
        paddingHorizontal: 15,
        margin: 16,
        borderRadius: 10,
        fontSize: 16,
        borderWidth: 1,
    },
    itemContainer: { 
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
    }
});

export default SearchScreen;