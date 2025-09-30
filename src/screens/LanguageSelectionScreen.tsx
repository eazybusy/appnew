import React, { useMemo } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Image } from 'react-native';
import { Text, Card, useTheme, Avatar, Appbar } from 'react-native-paper'; 
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useLocalization } from '../context/LocalizationContext';
import { useAuth } from '../context/AuthContext'; 
// ვცვლით იმპორტს useThemeContext-დან useAppTheme-ზე
import { useAppTheme } from '../context/ThemeContext'; // <-- სწორი კონტექსტის იმპორტი

type Props = NativeStackScreenProps<RootStackParamList, 'LanguageSelection'>;

const LanguageSelectionScreen = ({ navigation }: Props) => {
    const theme = useTheme(); // Paper-ის თემა
    const { setLocale } = useLocalization();
    const { userName } = useAuth(); 
    // ვიღებთ თემის მდგომარეობას და ფუნქციას თქვენი კონტექსტიდან
    const { themeMode, toggleTheme } = useAppTheme(); // <-- Hook-ის სწორი სახელი

    // გამოვთვლით isDarkTheme სტატუსს
    const isDarkTheme = theme.dark; // Paper-ის თემა ავტომატურად იძლევა სწორ მნიშვნელობას
    
    // სტატუსის ზოლის ფერი და სტილი
    const statusBarStyle = theme.dark ? 'light-content' : 'dark-content';

    // თემის გადართვის ლოგიკა: გადართვა dark/light რეჟიმებს შორის
    const handleThemeToggle = () => {
        // თუ თემა მუქია, გადავდივართ ღიაზე, თუ ღიაა, გადავდივართ მუქზე.
        const newMode = theme.dark ? 'light' : 'dark'; 
        toggleTheme(newMode);
    };

    const handleLanguageSelect = (language: string) => {
        setLocale(language);
        if (userName) {
            navigation.replace('Main');
        } else {
            navigation.navigate('UserNameInput');
        }
    };

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
            <StatusBar barStyle={statusBarStyle} backgroundColor={theme.colors.background} />
            
            {/* Appbar - სათაურის ზოლი თემის გადართვის ღილაკით */}
            <Appbar.Header style={{ backgroundColor: theme.colors.background, elevation: 0 }}>
                <Appbar.Content title="" /> 
                
                <Appbar.Action 
                    // ხატულა დინამიურად იცვლება თემის მიხედვით
                    icon={isDarkTheme ? 'white-balance-sunny' : 'weather-night'}
                    color={theme.colors.primary}
                    onPress={handleThemeToggle} // <-- თემის გადართვის ფუნქცია
                    size={26}
                />
            </Appbar.Header>

            <View style={styles.container}>
                <Avatar.Icon size={80} icon="translate" style={{ marginBottom: 20 }} />
                
                <Text variant="headlineMedium" style={styles.title}>
                    აირჩიეთ ენა
                </Text>
                
                <Text 
                    variant="bodyLarge" 
                    style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}
                >
                    Choose your preferred language
                </Text>

                <Card style={styles.card} onPress={() => handleLanguageSelect('ka')}>
                    <Card.Title
                        title="ქართული"
                        left={(props) => <Image {...props} source={require('../assets/images/georgia_flag.png')} style={styles.flagImage} />}
                    />
                </Card>

                <Card style={styles.card} onPress={() => handleLanguageSelect('en')}>
                    <Card.Title
                        title="English"
                        left={(props) => <Image {...props} source={require('../assets/images/uk_flag.png')} style={styles.flagImage} />}
                    />
                </Card>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { textAlign: 'center' },
    subtitle: { 
        marginTop: 8, 
        marginBottom: 48, 
        textAlign: 'center' 
    },
    card: {
        width: '100%',
        marginVertical: 8,
        elevation: 2,
    },
    flagImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});

export default LanguageSelectionScreen;