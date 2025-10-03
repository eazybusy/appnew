import React, { useMemo } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useLocalization } from '../context/LocalizationContext';
import { getCategoryList } from '../services/dataService';
import { LocalizedName } from '../data/types';
import { useTheme } from 'react-native-paper';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const CategoryListScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    const { locale } = useLocalization();
    const categories = getCategoryList();
    
    const theme = useTheme();
    const statusBarStyle = theme.dark ? 'light-content' : 'dark-content';

    const dynamicColors = useMemo(() => ({
        containerBackground: theme.colors.background,
        itemBackground: theme.colors.surface,
        itemText: theme.colors.onSurface,
        itemShadow: theme.dark ? theme.colors.primary : '#000',
    }), [theme.colors, theme.dark]);

    return (
        <View style={[styles.container, { backgroundColor: dynamicColors.containerBackground }]}>
            <StatusBar barStyle={statusBarStyle} backgroundColor={dynamicColors.containerBackground} />
            <FlatList
                data={categories}
                keyExtractor={(item) => item.id}
                // --- დამატებული ხაზი, რომელიც ამატებს ცარიელ ადგილს სიის ბოლოში ---
                contentContainerStyle={{ paddingBottom: 100 }}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={[
                            styles.itemContainer,
                            { 
                                backgroundColor: dynamicColors.itemBackground, 
                                shadowColor: dynamicColors.itemShadow,
                                shadowOpacity: theme.dark ? 0.4 : 0.22,
                            }
                        ]}
                        onPress={() => navigation.navigate('SubCategory', { 
                            categoryId: item.id, 
                            categoryName: item.name[locale as keyof LocalizedName] 
                        })}
                    >
                        <Text style={styles.icon}>{item.icon}</Text>
                        <Text style={[styles.itemText, { color: dynamicColors.itemText }]}>
                            {item.name[locale as keyof LocalizedName]}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    itemContainer: { 
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20, 
        marginVertical: 8, 
        marginHorizontal: 16, 
        borderRadius: 12, 
        elevation: 2, 
        shadowOffset: { width: 0, height: 1 }, 
        shadowRadius: 2.22 
    },
    icon: {
        fontSize: 24,
        marginRight: 15,
    },
    itemText: { 
        fontSize: 18, 
        fontWeight: '500',
        flex: 1,
    },
});

export default CategoryListScreen;