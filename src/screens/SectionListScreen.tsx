import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useLocalization } from '../context/LocalizationContext';
import * as dataService from '../services/dataService';
import { LocalizedName } from '../data/types';
import { useTheme } from 'react-native-paper'; // <-- Hook-ის იმპორტი

type Props = NativeStackScreenProps<RootStackParamList, 'SectionList'>;

const SectionListScreen = ({ route, navigation }: Props) => {
    const { subCategoryId, subCategoryName } = route.params;
    const { locale, t } = useLocalization();
    // ვასწორებთ ფუნქციის სახელს: getSubCategoryById
    const subCategory = dataService.getSubCategoryById(subCategoryId);

    // 1. თემის ობიექტის მიღება
    const theme = useTheme();
    const statusBarStyle = theme.dark ? 'light-content' : 'dark-content';

    // დინამიური ფერები
    const dynamicColors = {
        containerBackground: theme.colors.background, // ეკრანის ფონი
        itemBackground: theme.colors.surface, // ბარათების ფონი
        itemText: theme.colors.onSurface, // ტექსტის ფერი
    };

    useLayoutEffect(() => {
        navigation.setOptions({ title: subCategoryName });
    }, [navigation, subCategoryName]);

    if (!subCategory) {
        // საწყისი View-ის ფონისა და ტექსტის ფერის დინამიურად დაყენება
        return (
            <View style={[styles.container, { backgroundColor: dynamicColors.containerBackground }]}>
                <Text style={{ color: dynamicColors.itemText }}>{t('subCategoriesNotFound')}</Text>
            </View>
        );
    }

    return (
        // 2. მთავარ View-ზე დინამიური ფონის და სტატუსის ზოლის დამატება
        <View style={[styles.container, { backgroundColor: dynamicColors.containerBackground }]}>
            <StatusBar barStyle={statusBarStyle} backgroundColor={dynamicColors.containerBackground} />
            <FlatList
                data={subCategory.sections}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={[
                            styles.itemContainer, 
                            // 3. Item Container-ის ფონის დინამიურად დაყენება
                            { backgroundColor: dynamicColors.itemBackground }
                        ]}
                        onPress={() => navigation.navigate('SubSectionList', { 
                            sectionId: item.id, 
                            sectionName: item.name[locale as keyof LocalizedName] 
                        })}
                    >
                        {/* 4. ტექსტის ფერის დინამიურად დაყენება */}
                        <Text style={[styles.itemText, { color: dynamicColors.itemText }]}>
                            {item.name[locale as keyof LocalizedName]}
                        </Text>
                    </TouchableOpacity>
                )}
                // 5. ცარიელი სიის ტექსტის ფერის დინამიურად დაყენება
                ListEmptyComponent={<Text style={{ color: dynamicColors.itemText }}>{t('sectionsNotFound')}</Text>}
            />
        </View>
    );
};

// სტილებიდან ხისტი ფერები ამოღებულია
const styles = StyleSheet.create({
    container: { flex: 1 },
    itemContainer: { 
        padding: 20, 
        marginVertical: 8, 
        marginHorizontal: 16, 
        borderRadius: 8, 
        elevation: 2 
        // ფონის ფერები ამოღებულია
    },
    itemText: { 
        fontSize: 18 
        // ტექსტის ფერი ამოღებულია
    },
});

export default SectionListScreen;