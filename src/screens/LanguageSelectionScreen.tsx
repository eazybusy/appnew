import React from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, Image } from 'react-native';
import { Text, Card, useTheme, Avatar } from 'react-native-paper';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useLocalization } from '../context/LocalizationContext';
import { useAuth } from '../context/AuthContext'; // 1. ვიძახებთ AuthContext-ს

type Props = NativeStackScreenProps<RootStackParamList, 'LanguageSelection'>;

const LanguageSelectionScreen = ({ navigation }: Props) => {
    const theme = useTheme();
    const { setLocale } = useLocalization();
    const { userName } = useAuth(); // 2. ვიღებთ ინფორმაციას მომხმარებლის შესახებ

    const handleLanguageSelect = (language: string) => {
        setLocale(language);
        // 3. ✨ მთავარი ლოგიკა: ვამოწმებთ, არსებობს თუ არა მომხმარებელი
        if (userName) {
            // თუ სახელი უკვე შენახულია, პირდაპირ გადავდივართ მთავარ ეკრანზე
            navigation.replace('Main');
        } else {
            // თუ არა, გადავდივართ სახელის შეყვანის ეკრანზე
            navigation.navigate('UserNameInput');
        }
    };

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.container}>
                <Avatar.Icon size={80} icon="translate" style={{ marginBottom: 20 }} />
                <Text variant="headlineMedium" style={styles.title}>
                    აირჩიეთ ენა
                </Text>
                <Text variant="bodyLarge" style={styles.subtitle}>
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
    subtitle: { color: 'gray', marginTop: 8, marginBottom: 48, textAlign: 'center' },
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