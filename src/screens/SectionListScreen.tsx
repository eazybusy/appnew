import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useLocalization } from '../context/LocalizationContext';
import * as dataService from '../services/dataService';
import { LocalizedName } from '../data/types';

type Props = NativeStackScreenProps<RootStackParamList, 'SectionList'>;

const SectionListScreen = ({ route, navigation }: Props) => {
    const { subCategoryId, subCategoryName } = route.params;
    const { locale, t } = useLocalization();
    // ვასწორებთ ფუნქციის სახელს: getSubCategoryById
    const subCategory = dataService.getSubCategoryById(subCategoryId);

    useLayoutEffect(() => {
        navigation.setOptions({ title: subCategoryName });
    }, [navigation, subCategoryName]);

    if (!subCategory) {
        return <View style={styles.container}><Text>{t('subCategoriesNotFound')}</Text></View>;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={subCategory.sections}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={styles.itemContainer}
                        onPress={() => navigation.navigate('SubSectionList', { 
                            sectionId: item.id, 
                            sectionName: item.name[locale as keyof LocalizedName] 
                        })}
                    >
                        <Text style={styles.itemText}>{item.name[locale as keyof LocalizedName]}</Text>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={<Text>{t('sectionsNotFound')}</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    itemContainer: { backgroundColor: '#fff', padding: 20, marginVertical: 8, marginHorizontal: 16, borderRadius: 8, elevation: 2 },
    itemText: { fontSize: 18 },
});

export default SectionListScreen;