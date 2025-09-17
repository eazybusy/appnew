import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Text, TextInput, useTheme, HelperText } from 'react-native-paper';
import { useLocalization } from '../context/LocalizationContext';
import { useAuth } from '../context/AuthContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'UserNameInput'>;

const UserNameInputScreen = ({ navigation }: Props) => {
    const { t } = useLocalization();
    const { signIn } = useAuth();
    const theme = useTheme();
    const [name, setName] = useState('');
    const [isError, setIsError] = useState(false);

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
        <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
            <StatusBar barStyle="dark-content" />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <View style={styles.content}>
                    <Text variant="headlineMedium" style={styles.title}>{t('userNameTitle')}</Text>
                    <Text variant="bodyLarge" style={styles.subtitle}>{t('userNameSubtitle')}</Text>

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
    subtitle: { color: 'gray', textAlign: 'center', marginBottom: 32 },
    input: { width: '100%' },
    button: { marginTop: 16, borderRadius: 8 },
    buttonContent: { height: 48 },
});

export default UserNameInputScreen;

