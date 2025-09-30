import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useLocalization } from '../context/LocalizationContext';
import * as dataService from '../services/dataService';
import { LocalizedName } from '../data/types';
import { useTheme } from 'react-native-paper'; // <-- Hook-ის იმპორტი

type Props = NativeStackScreenProps<RootStackParamList, 'SubSectionList'>;

const SubSectionListScreen = ({ route, navigation }: Props) => {
    const { sectionId, sectionName } = route.params;
    const { locale, t } = useLocalization();
    const section = dataService.getSectionById(sectionId);
    
    // 1. თემის ობიექტის მიღება
    const theme = useTheme(); 
    const statusBarStyle = theme.dark ? 'light-content' : 'dark-content';
    
    // დინამიური სტილები
    const dynamicStyles = {
        // ეს არის ეკრანის მთავარი ფონი (ადრე #f5f5f5)
        containerBackground: theme.colors.background, 
        // ეს არის ბარათების ფონი (ადრე #fff)
        itemBackground: theme.colors.surface, 
        // ეს არის ტექსტის ფერი
        itemText: theme.colors.onSurface, 
    };

    useLayoutEffect(() => {
        navigation.setOptions({ title: sectionName });
    }, [navigation, sectionName]);

    if (!section) {
        // თუ სექცია არ მოიძებნა, გამოვიყენოთ დინამიური ფერები
        return (
             <View style={[styles.container, { backgroundColor: dynamicStyles.containerBackground }]}>
                 <Text style={{ color: dynamicStyles.itemText }}>{t('sectionsNotFound')}</Text>
             </View>
        );
    }

    return (
        // 2. მთავარ View-ზე დინამიური ფონის დამატება
        <View style={[styles.container, { backgroundColor: dynamicStyles.containerBackground }]}>
            <StatusBar barStyle={statusBarStyle} backgroundColor={dynamicStyles.containerBackground} />
            <FlatList
                data={section.subSections}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={[
                            styles.itemContainer, 
                            // 3. Item Container-ის ფონის დინამიურად დაყენება
                            { backgroundColor: dynamicStyles.itemBackground }
                        ]}
                        onPress={() => navigation.navigate('KeywordList', { 
                            subSectionId: item.id, 
                            subSectionName: item.name[locale as keyof LocalizedName] 
                        })}
                    >
                        {/* 4. ტექსტის ფერის დინამიურად დაყენება */}
                        <Text style={[styles.itemText, { color: dynamicStyles.itemText }]}>
                            {item.name[locale as keyof LocalizedName]}
                        </Text>
                    </TouchableOpacity>
                )}
                // ListEmptyComponent-ის ტექსტის ფერიც დინამიურად
                ListEmptyComponent={<Text style={{ color: dynamicStyles.itemText }}>{t('keywordsNotFound')}</Text>}
            />
        </View>
    );
};

// სტილების ობიექტიდან ხისტი ფერები ამოღებულია
const styles = StyleSheet.create({
    // container-ს აღარ აქვს ხისტი ფერი
    container: { flex: 1 }, 
    // itemContainer-ს აღარ აქვს ხისტი ფერი
    itemContainer: { padding: 20, marginVertical: 8, marginHorizontal: 16, borderRadius: 8, elevation: 2 },
    // itemText-ს აღარ აქვს ხისტი ფერი
    itemText: { fontSize: 18 },
});

export default SubSectionListScreen;