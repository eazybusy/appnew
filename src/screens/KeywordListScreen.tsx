import React, { useLayoutEffect, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useLocalization } from '../context/LocalizationContext';
import * as dataService from '../services/dataService';
import { useTheme } from 'react-native-paper'; // <-- Hook-ის იმპორტი

type Props = NativeStackScreenProps<RootStackParamList, 'KeywordList'>;

const KeywordListScreen = ({ route, navigation }: Props) => {
    const { subSectionId, subSectionName } = route.params;
    const { locale, t } = useLocalization();
    const subSection = dataService.getSubSectionById(subSectionId);
    
    const theme = useTheme(); // <-- თემის ობიექტი
    const statusBarStyle = theme.dark ? 'light-content' : 'dark-content';

    // დინამიური ფერები
    const dynamicColors = useMemo(() => ({
        containerBackground: theme.colors.background, // #f5f5f5
        itemBackground: theme.colors.surface, // #fff
        primaryText: theme.colors.onSurface,
        secondaryText: theme.colors.onSurfaceVariant, // #666
        itemShadow: theme.dark ? theme.colors.primary : '#000',
    }), [theme.colors, theme.dark]);

    useLayoutEffect(() => {
        navigation.setOptions({ title: subSectionName });
    }, [navigation, subSectionName]);

    if (!subSection || subSection.keywords.length === 0) {
        // ცარიელი ეკრანის ფერების დინამიურად დაყენება
        return (
            <View style={[styles.container, { backgroundColor: dynamicColors.containerBackground }]}>
                <StatusBar barStyle={statusBarStyle} backgroundColor={dynamicColors.containerBackground} />
                <Text style={[styles.emptyText, { color: dynamicColors.secondaryText }]}>
                    {t('keywordsNotFound')}
                </Text>
            </View>
        );
    }

    return (
        // 1. მთავარი View-ს ფონის და სტატუსის ზოლის დინამიურად დაყენება
        <View style={[styles.container, { backgroundColor: dynamicColors.containerBackground }]}>
            <StatusBar barStyle={statusBarStyle} backgroundColor={dynamicColors.containerBackground} />
            <FlatList
                data={subSection.keywords}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View 
                        style={[
                            styles.itemContainer, 
                            { 
                                // 2. Item Container-ის ფონის დინამიურად დაყენება
                                backgroundColor: dynamicColors.itemBackground,
                                // ჩრდილის დინამიურად დაყენება
                                shadowColor: dynamicColors.itemShadow,
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
                    </View>
                )}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        {/* 4. ცარიელი სიის ტექსტის ფერი */}
                        <Text style={[styles.emptyText, { color: dynamicColors.secondaryText }]}>
                            {t('keywordsNotFound')}
                        </Text>
                    </View>
                }
            />
        </View>
    );
};

// ხისტი ფერები ამოღებულია
const styles = StyleSheet.create({
    container: { 
        flex: 1, 
    },
    itemContainer: { 
        padding: 20, 
        marginVertical: 8, 
        marginHorizontal: 16, 
        borderRadius: 8,
        elevation: 1,
        // shadowColor/shadowOpacity/shadowRadius დინამიურად იმართება
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 1.5,
    },
    itemText: { 
        fontSize: 16 
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    emptyText: {
        fontSize: 16,
    }
});

export default KeywordListScreen;