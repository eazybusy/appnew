import React, { useState, useMemo } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Card, List, Text, useTheme, Divider, IconButton } from 'react-native-paper';
import { useLocalization } from '../context/LocalizationContext';
import * as dataService from '../services/dataService';
// იმპორტს ვამატებთ ახალი ტიპისთვის
import type { TranslationResult } from '../services/dataService';

const TranslateScreen = () => {
    const { t, locale } = useLocalization();
    const theme = useTheme();

    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    // ვცვლით state-ის ტიპს TranslationResult[]-ზე
    const [alternatives, setAlternatives] = useState<TranslationResult[]>([]);
    const [sourceLang, setSourceLang] = useState(locale);
    const [isNotFound, setIsNotFound] = useState(false);

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
            // ვიღებთ პირველი შედეგის თარგმანს
            setTranslatedText(results[0].translated); 
            // დანარჩენი შედეგები მიდის ალტერნატივებში
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
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
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

                    <View style={styles.outputContainer}>
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
                                    // სათაურად ვაჩენთ ნაპოვნ სიტყვას
                                    title={item.original}
                                    // აღწერაში კი მის თარგმანს
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
        backgroundColor: '#f0f0f0',
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

