import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useLocalization } from '../context/LocalizationContext';
import { getCategoryById } from '../services/dataService';
import { LocalizedName } from '../data/types';
import { useTheme } from 'react-native-paper'; // <-- Hook-ის იმპორტი

type Props = NativeStackScreenProps<RootStackParamList, 'SubCategory'>;

const SubCategoryScreen = ({ route, navigation }: Props) => {
    const { categoryId, categoryName } = route.params;
    const { locale, t } = useLocalization();
    const category = getCategoryById(categoryId);

    // 1. თემის ობიექტის მიღება
    const theme = useTheme(); 
    const statusBarStyle = theme.dark ? 'light-content' : 'dark-content';
    
    // დინამიური ფერები
    const dynamicColors = {
        containerBackground: theme.colors.background,
        itemBackground: theme.colors.surface,
        itemText: theme.colors.onSurface,
        emptyText: theme.colors.onSurfaceVariant, // მეორადი ტექსტის ფერი
    };

    useLayoutEffect(() => {
        // ნავიგაციის ზოლის ფერი ავტომატურად იცვლება Paper-ის თემით
        navigation.setOptions({ title: categoryName });
    }, [navigation, categoryName]);

    if (!category) {
        // საწყისი View-ის ფონის და ტექსტის ფერის დინამიურად დაყენება
        return (
            <View style={[styles.container, { backgroundColor: dynamicColors.containerBackground }]}>
                <Text style={{ color: dynamicColors.itemText }}>Category not found.</Text>
            </View>
        );
    }

    return (
        // 2. მთავარ View-ზე დინამიური ფონის და სტატუსის ზოლის დამატება
        <View style={[styles.container, { backgroundColor: dynamicColors.containerBackground }]}>
            <StatusBar barStyle={statusBarStyle} backgroundColor={dynamicColors.containerBackground} />
            <FlatList
                data={category.subCategories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={[
                            styles.itemContainer, 
                            // 3. Item Container-ის ფონის დინამიურად დაყენება
                            { backgroundColor: dynamicColors.itemBackground }
                        ]}
                        onPress={() => navigation.navigate('SectionList', {
                            subCategoryId: item.id,
                            subCategoryName: item.name[locale as keyof LocalizedName]
                        })}
                    >
                        {/* 4. ტექსტის ფერის დინამიურად დაყენება */}
                        <Text style={[styles.itemText, { color: dynamicColors.itemText }]}>
                            {item.name[locale as keyof LocalizedName]}
                        </Text>
                    </TouchableOpacity>
                )}
                // 5. ცარიელი სიის ტექსტის ფერის დინამიურად დაყენება
                ListEmptyComponent={
                    <Text style={[styles.emptyText, { color: dynamicColors.emptyText }]}>
                        {t('subCategoriesNotFound')}
                    </Text>
                }
            />
        </View>
    );
};

// სტილებიდან ხისტი ფერები ამოღებულია
const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        // backgroundColor ამოღებულია
    },
    itemContainer: { 
        // backgroundColor ამოღებულია
        padding: 20, 
        marginVertical: 8, 
        marginHorizontal: 16, 
        borderRadius: 12, 
        elevation: 2,
        // Shadow ფერები უმჯობესია დარჩეს ხისტი, რათა Dark Mode-შიც კარგად გამოჩნდეს სიღრმე
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    itemText: { 
        fontSize: 18 
        // color ამოღებულია
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        // color ამოღებულია
    }
});

export default SubCategoryScreen;