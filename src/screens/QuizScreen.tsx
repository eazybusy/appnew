import React, { useState, useEffect, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Animated, StatusBar, TextStyle } from 'react-native'; // <-- Added TextStyle
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import CircularProgress from 'react-native-circular-progress-indicator';
import { RootStackParamList } from '../navigation/types';
import { useLocalization } from '../context/LocalizationContext';
import { Keyword, LocalizedName } from '../data/types';
import { useTheme, MD3Theme } from 'react-native-paper'; // <-- MD3Theme-ის იმპორტი

type Props = NativeStackScreenProps<RootStackParamList, 'Quiz'>;

// 1. Corrected Interface Extension (Error 2499 Fix)
// MD3Theme is a type, not an interface, so we define a new type by intersection.
// We only need to define the custom colors, then cast the result of useTheme.
interface CustomThemeColors {
    success: string;
    successContainer: string;
    onSuccessContainer: string;
}

// Combine MD3Theme with CustomThemeColors for the correct theme type
type AppTheme = MD3Theme & { colors: CustomThemeColors };

const shuffleArray = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const QuizScreen = ({ route, navigation }: Props) => {
    const { keywords, difficulty, categoryName } = route.params;
    const { locale, t } = useLocalization();
    // Cast the theme to our new combined type
    const theme = useTheme() as AppTheme; 
    
    const [questions, setQuestions] = useState<Keyword[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    const [incorrectAnswers, setIncorrectAnswers] = useState<Keyword[]>([]);
    const [userTextInput, setUserTextInput] = useState('');
    const [showTimeBonus, setShowTimeBonus] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);

    const bonusAnimation = useRef(new Animated.Value(0)).current;
    const nextButtonTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const statusBarStyle = theme.dark ? 'light-content' : 'dark-content';

    // დინამიური ფერები
    const dynamicColors = useMemo(() => {
        const colors = theme.colors;

        return {
            containerBackground: colors.background,
            textPrimary: colors.onSurface,
            textSecondary: colors.onSurfaceVariant,
            // ქვიზის სპეციფიკური ფერები
            quizProgressText: colors.onSurfaceVariant,
            quizCardBackground: colors.surface,
            quizCardShadow: theme.dark ? colors.primary : '#000', 
            // სტატუსის ფერები (fallback-ის გამოყენება თუ custom success ფერები არ არის განსაზღვრული)
            correctBackground: colors.successContainer || colors.tertiaryContainer, 
            correctBorder: colors.success || colors.tertiary, 
            correctText: colors.onSuccessContainer || colors.onTertiaryContainer, 
            incorrectBackground: colors.errorContainer,
            incorrectBorder: colors.error,
            incorrectText: colors.onErrorContainer,
            // ქრონომეტრის ფერები
            timerActive: colors.success || colors.tertiary, 
            timerInactive: colors.primary, 
            timerText: colors.onSurface, 
            bonusText: colors.success || colors.tertiary, 
        };
    }, [theme.dark, theme.colors]);
    
    // ... [დანარჩენი ლოგიკა]
    useEffect(() => {
        setQuestions(shuffleArray(keywords));
    }, [keywords]);

    useEffect(() => {
        if (timeLeft === 0 && !isAnswered) {
            finishQuiz();
        }
        if (isAnswered) return;
        const timer = setInterval(() => {
            setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft, isAnswered]);

    useEffect(() => {
        if (isAnswered) return; 
        
        if (nextButtonTimer.current) {
            clearTimeout(nextButtonTimer.current);
        }

        nextButtonTimer.current = setTimeout(() => {
            setShowNextButton(true);
        }, 2000);

        return () => {
            if (nextButtonTimer.current) {
                clearTimeout(nextButtonTimer.current);
            }
        };
    }, [currentQuestionIndex, isAnswered]);


    const triggerBonusAnimation = () => {
        setShowTimeBonus(true);
        bonusAnimation.setValue(0);
        Animated.sequence([
            Animated.timing(bonusAnimation, { toValue: 1, duration: 500, useNativeDriver: true }),
            Animated.timing(bonusAnimation, { toValue: 0, duration: 1000, useNativeDriver: true })
        ]).start(() => setShowTimeBonus(false));
    };

    const currentQuestion = useMemo(() => questions[currentQuestionIndex], [questions, currentQuestionIndex]);

    const options = useMemo(() => {
        if (!currentQuestion || difficulty === 'hard') return [];
        
        const answerLanguage = locale === 'ka' ? 'en' : 'ka';
        const correctAnswer = currentQuestion.name[answerLanguage as keyof LocalizedName];

        let incorrectOptions = keywords
            .filter((kw: Keyword) => kw.id !== currentQuestion.id)
            .map((kw: Keyword) => kw.name[answerLanguage as keyof LocalizedName]);

        incorrectOptions = shuffleArray(incorrectOptions).slice(0, 3);
        
        return shuffleArray([correctAnswer, ...incorrectOptions]);
    }, [currentQuestion, keywords, locale, difficulty]);

    const handleAnswer = (answer: string) => {
        if (isAnswered) return;

        if (nextButtonTimer.current) {
            clearTimeout(nextButtonTimer.current);
        }

        setIsAnswered(true);
        const answerLanguage = locale === 'ka' ? 'en' : 'ka';
        const correctAnswer = currentQuestion.name[answerLanguage as keyof LocalizedName];
        
        const isCorrectAnswer = answer.toLowerCase().trim() === correctAnswer.toLowerCase().trim();

        if (isCorrectAnswer) {
            setScore(score + 1);
            setTimeLeft(prev => prev + 2);
            triggerBonusAnimation();
            setTimeout(() => handleNext(true), 1500);
        } else {
            setIncorrectAnswers(prev => [...prev, currentQuestion]);
            setSelectedOption(answer); 
            setTimeout(() => handleNext(false), 1500); 
        }
        setSelectedOption(answer);
        if (difficulty === 'hard') {
             if (!isCorrectAnswer) {
                setUserTextInput(correctAnswer);
             }
        }
    };

    const handleNext = (answeredCorrectly = false) => {
        if (!isAnswered && !answeredCorrectly && currentQuestion && timeLeft > 0) {
            setIncorrectAnswers(prev => [...prev, currentQuestion]);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setIsAnswered(false);
            setSelectedOption(null);
            setShowNextButton(false);
            setUserTextInput('');
        } else {
            finishQuiz();
        }
    };
    
    const finishQuiz = () => {
        navigation.replace('QuizResult', {
            score,
            totalQuestions: questions.length,
            incorrectAnswers,
            categoryName,
        });
    };

    if (!currentQuestion) {
        return (
            <View style={[styles.container, { backgroundColor: dynamicColors.containerBackground }]}>
                <Text style={{ color: dynamicColors.textPrimary }}>Loading quiz...</Text>
            </View>
        );
    }
    
    const questionText = currentQuestion.name[locale as keyof LocalizedName];
    const answerLanguage = locale === 'ka' ? 'en' : 'ka';
    const correctAnswer = currentQuestion.name[answerLanguage as keyof LocalizedName];


    const bonusStyle = {
        opacity: bonusAnimation,
        transform: [{
            translateY: bonusAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -40]
            })
        }]
    };

    return (
        <View style={[styles.container, { backgroundColor: dynamicColors.containerBackground }]}>
            <StatusBar barStyle={statusBarStyle} backgroundColor={dynamicColors.containerBackground} />
            
            <View style={styles.header}>
                {/* პროგრესის ტექსტი */}
                <Text style={[styles.progressText, { color: dynamicColors.quizProgressText }]}>
                    {currentQuestionIndex + 1} / {questions.length}
                </Text>
                
                <View style={styles.timerContainer}>
                    <CircularProgress
                        value={timeLeft}
                        radius={40}
                        duration={1000}
                        progressValueColor={dynamicColors.timerText}
                        maxValue={60}
                        title={'s'}
                        titleColor={dynamicColors.timerText}
                        titleStyle={{ fontWeight: 'bold' }}
                        activeStrokeColor={dynamicColors.timerActive}
                        inActiveStrokeColor={dynamicColors.timerInactive}
                        inActiveStrokeOpacity={0.2}
                    />
                    {showTimeBonus && (
                        <Animated.Text style={[styles.timeBonus, bonusStyle, { color: dynamicColors.bonusText }]}>+2s</Animated.Text>
                    )}
                </View>
                
                {/* ქულის ტექსტი */}
                <Text style={[styles.scoreText, { color: dynamicColors.quizProgressText }]}>
                    {t('yourScore')}: {score}
                </Text>
            </View>

            {/* კითხვის კონტეინერი */}
            <View style={[
                styles.questionContainer, 
                { 
                    backgroundColor: dynamicColors.quizCardBackground,
                    shadowColor: theme.dark ? dynamicColors.quizCardShadow : '#000',
                    shadowOpacity: theme.dark ? 0.4 : 0.1,
                }
            ]}>
                <Text style={[styles.questionText, { color: dynamicColors.textPrimary }]}>
                    {questionText}
                </Text>
            </View>

            <View style={styles.optionsContainer}>
                {difficulty !== 'hard' ? (
                    options.map((option, index) => {
                        const isCorrect = option === correctAnswer;
                        const isSelected = selectedOption === option;

                        let buttonStyle = { 
                            backgroundColor: dynamicColors.quizCardBackground, 
                            borderColor: dynamicColors.textSecondary 
                        };
                        
                        // 2. Opacity Fix: Use TextStyle and Style Prop 
                        let textStyle: TextStyle = { color: dynamicColors.textPrimary }; 
                        
                        if (isAnswered) {
                            if (isCorrect) {
                                buttonStyle = { backgroundColor: dynamicColors.correctBackground, borderColor: dynamicColors.correctBorder };
                                textStyle = { color: dynamicColors.correctText };
                            } else if (isSelected) {
                                buttonStyle = { backgroundColor: dynamicColors.incorrectBackground, borderColor: dynamicColors.incorrectBorder };
                                textStyle = { color: dynamicColors.incorrectText };
                            } else {
                                // Opacity Fix: Add opacity as a separate style in the TouchableOpacity style prop
                                buttonStyle = { ...buttonStyle };
                                textStyle = { ...textStyle, opacity: 0.5 };
                            }
                        }

                        return (
                            <TouchableOpacity
                                key={index}
                                // Add opacity as a separate style if needed
                                style={[
                                    styles.optionButton,
                                    buttonStyle,
                                    isAnswered && !isCorrect && !isSelected ? { opacity: 0.5 } : null
                                ]}                                onPress={() => handleAnswer(option)}
                                disabled={isAnswered}
                            >
                                <Text style={[styles.optionText, textStyle]}>{option}</Text>
                            </TouchableOpacity>
                        );
                    })
                ) : (
                    <>
                        {/* HARD MODE INPUT */}
                        <TextInput
                            style={[
                                styles.input, 
                                { 
                                    backgroundColor: dynamicColors.quizCardBackground, 
                                    borderColor: isAnswered ? dynamicColors.incorrectBorder : dynamicColors.textSecondary,
                                    color: dynamicColors.textPrimary
                                }
                            ]}
                            placeholder={t('answerPlaceholder')} 
                            placeholderTextColor={dynamicColors.textSecondary}
                            value={userTextInput}
                            onChangeText={setUserTextInput}
                            onSubmitEditing={(e) => handleAnswer(e.nativeEvent.text)}
                            editable={!isAnswered}
                        />
                        {isAnswered && (
                            <Text style={[styles.correctAnswerText, { color: dynamicColors.correctText }]}>
                                {t('correct')}: {correctAnswer}
                            </Text>
                        )}
                    </>
                )}
            </View>

            {showNextButton && (
                <TouchableOpacity 
                    style={[styles.nextButton, { backgroundColor: theme.colors.primary }]} 
                    onPress={() => handleNext(false)}
                >
                    <Text style={[styles.nextButtonText, { color: theme.colors.onPrimary }]}>
                        {t('next')}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    header: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 20, alignItems: 'center' },
    progressText: { fontSize: 16, fontWeight: '500' },
    timerContainer: { alignItems: 'center' },
    timeBonus: { position: 'absolute', top: 0, fontSize: 18, fontWeight: 'bold' },
    scoreText: { fontSize: 16, fontWeight: '500' },
    questionContainer: { 
        padding: 20, 
        borderRadius: 12, 
        marginBottom: 20, 
        minHeight: 120, 
        justifyContent: 'center', 
        elevation: 2, 
        shadowColor: '#000', 
        shadowOpacity: 0.1, 
        shadowRadius: 5, 
        shadowOffset: { width: 0, height: 2 } 
    },
    questionText: { fontSize: 28, fontWeight: 'bold', textAlign: 'center' },
    optionsContainer: { width: '100%', flex: 1 },
    optionButton: { padding: 15, borderRadius: 12, marginVertical: 8, borderWidth: 1 },
    optionText: { fontSize: 18, textAlign: 'center', fontWeight: '500' },
    input: { width: '100%', height: 50, borderWidth: 1, borderRadius: 8, paddingHorizontal: 15, fontSize: 16, marginBottom: 10 },
    correctAnswerText: { alignSelf: 'center', fontSize: 16, marginBottom: 10 },
    nextButton: { padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
    nextButtonText: { fontSize: 16, fontWeight: 'bold' },
});

export default QuizScreen;