import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useLocalization } from '../context/LocalizationContext';
import * as dataService from '../services/dataService';

type Props = NativeStackScreenProps<RootStackParamList, 'KeywordList'>;

const KeywordListScreen = ({ route, navigation }: Props) => {
    const { subSectionId, subSectionName } = route.params;
    const { locale, t } = useLocalization();
    const subSection = dataService.getSubSectionById(subSectionId);

    useLayoutEffect(() => {
        navigation.setOptions({ title: subSectionName });
    }, [navigation, subSectionName]);

    if (!subSection || subSection.keywords.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.emptyText}>{t('keywordsNotFound')}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={subSection.keywords}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>
                            {locale === 'ka' 
                                ? `${item.name.ka} - ${item.name.en}` 
                                : `${item.name.en} - ${item.name.ka}`}
                        </Text>
                    </View>
                )}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>{t('keywordsNotFound')}</Text>
                    </View>
                }
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
        backgroundColor: '#fff', 
        padding: 20, 
        marginVertical: 8, 
        marginHorizontal: 16, 
        borderRadius: 8,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
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
        color: '#666',
    }
});

export default KeywordListScreen;