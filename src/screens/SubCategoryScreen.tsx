import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useLocalization } from '../context/LocalizationContext';
import { getCategoryById } from '../services/dataService';
import { LocalizedName } from '../data/types';

type Props = NativeStackScreenProps<RootStackParamList, 'SubCategory'>;

const SubCategoryScreen = ({ route, navigation }: Props) => {
    const { categoryId, categoryName } = route.params;
    const { locale, t } = useLocalization();
    const category = getCategoryById(categoryId);

    useLayoutEffect(() => {
        navigation.setOptions({ title: categoryName });
    }, [navigation, categoryName]);

    if (!category) {
        return <View style={styles.container}><Text>Category not found.</Text></View>;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={category.subCategories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={styles.itemContainer}
                        onPress={() => navigation.navigate('SectionList', {
                            subCategoryId: item.id,
                            subCategoryName: item.name[locale as keyof LocalizedName]
                        })}
                    >
                        <Text style={styles.itemText}>{item.name[locale as keyof LocalizedName]}</Text>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={<Text>{t('subCategoriesNotFound')}</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#f5f5f5' 
    },
    itemContainer: { 
        backgroundColor: '#ffffff', 
        padding: 20, 
        marginVertical: 8, 
        marginHorizontal: 16, 
        borderRadius: 12, 
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    itemText: { 
        fontSize: 18 
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: 'gray',
    }
});

export default SubCategoryScreen;