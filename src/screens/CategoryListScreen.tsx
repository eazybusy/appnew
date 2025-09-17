import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useLocalization } from '../context/LocalizationContext';
import { getCategoryList } from '../services/dataService';
import { LocalizedName } from '../data/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CategoryListScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    const { locale } = useLocalization();
    const categories = getCategoryList();

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={styles.itemContainer}
                        onPress={() => navigation.navigate('SubCategory', { 
                            categoryId: item.id, 
                            categoryName: item.name[locale as keyof LocalizedName] 
                        })}
                    >
                        <Text style={styles.icon}>{item.icon}</Text>
                        <Text style={styles.itemText}>{item.name[locale as keyof LocalizedName]}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f5f5f5' },
    itemContainer: { 
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff', 
        padding: 20, 
        marginVertical: 8, 
        marginHorizontal: 16, 
        borderRadius: 12, 
        elevation: 2, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 1 }, 
        shadowOpacity: 0.22, 
        shadowRadius: 2.22 
    },
    icon: {
        fontSize: 24,
        marginRight: 15,
    },
    itemText: { 
        fontSize: 18, 
        fontWeight: '500',
        flex: 1, // Ensures text wraps if it's too long
    },
});

export default CategoryListScreen;