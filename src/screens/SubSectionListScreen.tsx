import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useLocalization } from '../context/LocalizationContext';
import * as dataService from '../services/dataService';
import { LocalizedName } from '../data/types';

type Props = NativeStackScreenProps<RootStackParamList, 'SubSectionList'>;

const SubSectionListScreen = ({ route, navigation }: Props) => {
    const { sectionId, sectionName } = route.params;
    const { locale, t } = useLocalization();
    const section = dataService.getSectionById(sectionId);

    useLayoutEffect(() => {
        navigation.setOptions({ title: sectionName });
    }, [navigation, sectionName]);

    if (!section) {
        return <View style={styles.container}><Text>{t('sectionsNotFound')}</Text></View>;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={section.subSections}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={styles.itemContainer}
                        onPress={() => navigation.navigate('KeywordList', { 
                            subSectionId: item.id, 
                            subSectionName: item.name[locale as keyof LocalizedName] 
                        })}
                    >
                        <Text style={styles.itemText}>{item.name[locale as keyof LocalizedName]}</Text>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={<Text>{t('keywordsNotFound')}</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    itemContainer: { backgroundColor: '#fff', padding: 20, marginVertical: 8, marginHorizontal: 16, borderRadius: 8, elevation: 2 },
    itemText: { fontSize: 18 },
});

export default SubSectionListScreen;