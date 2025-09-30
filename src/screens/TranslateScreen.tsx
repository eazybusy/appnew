import React, { useState, useMemo } from 'react';
import { View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { TextInput, Button, Card, List, Text, useTheme, Divider, IconButton } from 'react-native-paper';
import { useLocalization } from '../context/LocalizationContext';
import * as dataService from '../services/dataService';
import type { TranslationResult } from '../services/dataService';

const TranslateScreen = () => {
    const { t, locale } = useLocalization();
    const theme = useTheme(); // Paper-ის თემის ობიექტი

    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [alternatives, setAlternatives] = useState<TranslationResult[]>([]);
    const [sourceLang, setSourceLang] = useState(locale);
    const [isNotFound, setIsNotFound] = useState(false);

    // სტატუს ბარის სტილი (Dark Theme-ისთვის Light, Light Theme-ისთვის Dark)
    const statusBarStyle = theme.dark ? 'light-content' : 'dark-content';

    const { sourcePlaceholder, sourceLanguageLabel, targetLanguageLabel } = useMemo(() => ({
        sourcePlaceholder: sourceLang === 'ka' ? t('translatePlaceholderKa') : t('translatePlaceholderEn'),
        sourceLanguageLabel: sourceLang === 'ka' ? 'ქართული' : 'English',
        targetLanguageLabel: sourceLang === 'ka' ? 'English' : 'ქართული',
    }), [sourceLang, t]);

    const handleTranslate = () => {
        if (!inputText.trim()) {
            setTranslatedText('');
            setAlternatives([]);
            setIsNotFound(false);
            return;
        }

        const results = dataService.findAllTranslations(inputText.trim(), sourceLang);

        if (results && results.length > 0) {
            setTranslatedText(results[0].translated); 
            setAlternatives(results.slice(1));
            setIsNotFound(false);
        } else {
            setTranslatedText(t('translationNotFound'));
            setAlternatives([]);
            setIsNotFound(true);
        }
    };

    const switchLanguages = () => {
        const newSourceLang = sourceLang === 'ka' ? 'en' : 'ka';
        setSourceLang(newSourceLang);
        
        setInputText('');
        setTranslatedText('');
        
        setAlternatives([]);
        setIsNotFound(false);
    };

    return (
        // 1. ScrollView-ის ფონის ფერის დამატება
        <ScrollView 
            style={[styles.container, { backgroundColor: theme.colors.background }]} 
            contentContainerStyle={styles.contentContainer}
        >
            {/* 2. სტატუსის ზოლის ფერის დინამიურად დაყენება */}
            <StatusBar barStyle={statusBarStyle} backgroundColor={theme.colors.background} />

            <Card style={styles.card}>
                <Card.Content>
                    <TextInput
                        label={sourceLanguageLabel}
                        placeholder={sourcePlaceholder}
                        value={inputText}
                        onChangeText={setInputText}
                        onSubmitEditing={handleTranslate}
                        mode="outlined"
                        style={styles.input}
                    />
                    
                    <IconButton
                        icon="swap-vertical"
                        size={28}
                        onPress={switchLanguages}
                        style={styles.switchButton}
                    />

                    {/* 3. Output Container-ის ფონის დინამიურად დაყენება */}
                    <View style={[
                        styles.outputContainer, 
                        { backgroundColor: theme.colors.surfaceVariant } // გამოიყენეთ Paper-ის მეორადი ფონი (surfaceVariant)
                    ]}>
                        <Text style={[styles.languageLabel, { color: theme.colors.onSurfaceVariant }]}>
                            {targetLanguageLabel}
                        </Text>
                        <Text style={[styles.outputText, { color: theme.colors.primary }]}>
                            {translatedText}
                        </Text>
                    </View>

                </Card.Content>
                <Card.Actions>
                    <Button 
                        mode="contained" 
                        onPress={handleTranslate} 
                        style={styles.translateButton}
                        icon="translate"
                    >
                        {t('translateButton')}
                    </Button>
                </Card.Actions>
            </Card>

            {alternatives.length > 0 && (
                 <Card style={styles.card}>
                    <Card.Title title={t('alternativeTranslationsTitle')} />
                    <Card.Content>
                        {alternatives.map((item, index) => (
                            <React.Fragment key={index}>
                                <List.Item
                                    title={item.original}
                                    description={item.translated}
                                    left={props => <List.Icon {...props} icon="circle-small" />}
                                />
                                {index < alternatives.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                    </Card.Content>
                </Card>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // ხისტი ფერი ამოღებულია და გადატანილია კომპონენტზე
    },
    contentContainer: {
        padding: 16,
    },
    card: {
        marginBottom: 16,
    },
    input: {
        marginBottom: 10,
    },
    switchButton: {
        alignSelf: 'center',
    },
    outputContainer: {
        minHeight: 80,
        padding: 12,
        borderRadius: 8,
        // ხისტი ფერი (#f0f0f0) ამოღებულია და გადატანილია კომპონენტზე
        justifyContent: 'center',
        marginTop: 10,
    },
    languageLabel: {
        fontSize: 14,
        marginBottom: 4,
    },
    outputText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    translateButton: {
        flex: 1,
    },
});

export default TranslateScreen;