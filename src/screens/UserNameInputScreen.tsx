import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Text, TextInput, useTheme, HelperText } from 'react-native-paper';
import { useLocalization } from '../context/LocalizationContext';
import { useAuth } from '../context/AuthContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

// import { useAppTheme } from '../context/ThemeContext'; // <-- თუ დაგჭირდებათ toggleTheme ფუნქცია

type Props = NativeStackScreenProps<RootStackParamList, 'UserNameInput'>;

const UserNameInputScreen = ({ navigation }: Props) => {
    const { t } = useLocalization();
    const { signIn } = useAuth();
    // იყენებს Paper-ის თემის ობიექტს (რომელიც ჩვენს პერსონალურ ფერებს შეიცავს)
    const theme = useTheme(); 
    const [name, setName] = useState('');
    const [isError, setIsError] = useState(false);

    // ამ ცვლადით განვსაზღვრავთ, რა სტილი უნდა მივცეთ სტატუსის ზოლს (თეთრი ტექსტი მუქ ფონზე და პირიქით)
    const statusBarStyle = theme.dark ? 'light-content' : 'dark-content';

    const handleContinue = async () => {
        if (name.trim().length < 2) {
            setIsError(true);
            return;
        }
        await signIn(name);
        // ✨ მთავარი შესწორება: სახელის შენახვის შემდეგ გადავდივართ მთავარ ეკრანზე
        navigation.replace('Main');
    };

    return (
        // ფონის ფერი: იყენებს theme.colors.background-ს
        <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
            {/* სტატუსის ზოლის ფერის დინამიურად დაყენება */}
            <StatusBar barStyle={statusBarStyle} backgroundColor={theme.colors.background} />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <View style={styles.content}>
                    <Text variant="headlineMedium" style={styles.title}>{t('userNameTitle')}</Text>
                    
                    {/* subtitle-ის ფერი: ჩავანაცვლეთ ხისტი 'gray' ფერით თემის ფერი */}
                    <Text 
                        variant="bodyLarge" 
                        style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}
                    >
                        {t('userNameSubtitle')}
                    </Text>

                    <TextInput
                        label={t('userNameLabel')}
                        placeholder={t('userNamePlaceholder')}
                        value={name}
                        onChangeText={(text) => {
                            setName(text);
                            if (isError) setIsError(false);
                        }}
                        mode="outlined"
                        style={styles.input}
                        error={isError}
                    />
                    <HelperText type="error" visible={isError}>
                        {t('nameRequiredError')}
                    </HelperText>

                    <Button
                        mode="contained"
                        onPress={handleContinue}
                        icon="arrow-right-circle"
                        style={styles.button}
                        contentStyle={styles.buttonContent}
                    >
                        {t('userNameButton')}
                    </Button>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
    container: { flex: 1, justifyContent: 'center' },
    content: { padding: 20 },
    title: { textAlign: 'center', marginBottom: 8 },
    // subtitle სტილს აღარ სჭირდება ხისტი ფერი, რადგან მას პირდაპირ ვაძლევთ კომპონენტზე
    subtitle: { textAlign: 'center', marginBottom: 32 }, 
    input: { width: '100%' },
    button: { marginTop: 16, borderRadius: 8 },
    buttonContent: { height: 48 },
});

export default UserNameInputScreen;