import React, { useState, useEffect, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Animated } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import CircularProgress from 'react-native-circular-progress-indicator';
import { RootStackParamList } from '../navigation/types';
import { useLocalization } from '../context/LocalizationContext';
import { Keyword, LocalizedName } from '../data/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Quiz'>;

const shuffleArray = (array: any[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const QuizScreen = ({ route, navigation }: Props) => {
    const { keywords, difficulty, categoryName } = route.params;
    const { locale, t } = useLocalization();
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
    // NodeJS.Timeout-ის შეცვლა ReturnType<typeof setTimeout>-ით
    const nextButtonTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
        nextButtonTimer.current = setTimeout(() => {
            if (!isAnswered) {
                setShowNextButton(true);
            }
        }, 2000);

        return () => {
            if (nextButtonTimer.current) {
                clearTimeout(nextButtonTimer.current);
            }
        };
    }, [currentQuestionIndex]);


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

        if (answer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
    setScore(score + 1);
    setTimeLeft(prev => prev + 2);
    triggerBonusAnimation();
    setTimeout(() => handleNext(true), 1500);
} else {
    setIncorrectAnswers(prev => [...prev, currentQuestion]);
    setSelectedOption(answer); // ხაზს უსვამს არასწორ პასუხს
    setIsAnswered(true);       // ხაზს უსვამს პასუხის დასრულებას
    setTimeout(() => handleNext(false), 1500); // ავტომატურად გადადის შემდეგ კითხვაზე
}
        setSelectedOption(answer);
        if (difficulty === 'hard') setUserTextInput(correctAnswer);
    };

    const handleNext = (answeredCorrectly = false) => {
        if (!isAnswered && !answeredCorrectly && currentQuestion) {
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
        return <View style={styles.container}><Text>Loading quiz...</Text></View>;
    }
    
    const questionText = currentQuestion.name[locale as keyof LocalizedName];
    const answerLanguage = locale === 'ka' ? 'en' : 'ka';

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
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.progressText}>{currentQuestionIndex + 1} / {questions.length}</Text>
                <View style={styles.timerContainer}>
                    <CircularProgress
                        value={timeLeft}
                        radius={40}
                        duration={1000}
                        progressValueColor={'#333'}
                        maxValue={60}
                        title={'s'}
                        titleColor={'#333'}
                        titleStyle={{ fontWeight: 'bold' }}
                        activeStrokeColor={'#28a745'}
                        inActiveStrokeColor={'#007AFF'}
                        inActiveStrokeOpacity={0.2}
                    />
                    {showTimeBonus && (
                        <Animated.Text style={[styles.timeBonus, bonusStyle]}>+2s</Animated.Text>
                    )}
                </View>
                <Text style={styles.scoreText}>{t('yourScore')}: {score}</Text>
            </View>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>{questionText}</Text>
            </View>

            <View style={styles.optionsContainer}>
                {difficulty !== 'hard' ? (
                    options.map((option, index) => {
                        const correctAnswer = currentQuestion.name[answerLanguage as keyof LocalizedName];
                        const isCorrect = option === correctAnswer;
                        const isSelected = selectedOption === option;

                        return (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.optionButton,
                                    isAnswered && isCorrect && styles.correctOption,
                                    isAnswered && isSelected && !isCorrect && styles.incorrectOption,
                                ]}
                                onPress={() => handleAnswer(option)}
                                disabled={isAnswered}
                            >
                                <Text style={[
                                    styles.optionText,
                                    isAnswered && isCorrect && styles.correctOptionText,
                                    isAnswered && isSelected && !isCorrect && styles.incorrectOptionText,
                                ]}>{option}</Text>
                            </TouchableOpacity>
                        );
                    })
                ) : (
                    <>
                        <TextInput
                            style={styles.input}
                            placeholder={t('userNamePlaceholder')}
                            value={userTextInput}
                            onChangeText={setUserTextInput}
                            onSubmitEditing={(e) => handleAnswer(e.nativeEvent.text)}
                            editable={!isAnswered}
                        />
                        {isAnswered && (
                            <Text style={styles.correctAnswerText}>
                                Correct: {currentQuestion.name[answerLanguage as keyof LocalizedName]}
                            </Text>
                        )}
                    </>
                )}
            </View>

            {showNextButton && (
                <TouchableOpacity style={styles.nextButton} onPress={() => handleNext(false)}>
                    <Text style={styles.nextButtonText}>{t('next')}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f0f4f8' },
    header: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 20, alignItems: 'center' },
    progressText: { fontSize: 16, color: '#555', fontWeight: '500' },
    timerContainer: { alignItems: 'center' },
    timeBonus: { position: 'absolute', top: 0, fontSize: 18, color: '#28a745', fontWeight: 'bold' },
    scoreText: { fontSize: 16, color: '#555', fontWeight: '500' },
    questionContainer: { backgroundColor: '#fff', padding: 20, borderRadius: 12, marginBottom: 20, minHeight: 120, justifyContent: 'center', elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, shadowOffset: { width: 0, height: 2 } },
    questionText: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: '#333' },
    optionsContainer: { width: '100%', flex: 1 },
    optionButton: { backgroundColor: '#fff', padding: 15, borderRadius: 12, marginVertical: 8, borderWidth: 1, borderColor: '#ddd' },
    optionText: { fontSize: 18, textAlign: 'center', color: '#333', fontWeight: '500' },
    correctOption: { backgroundColor: '#d4edda', borderColor: '#c3e6cb' },
    correctOptionText: { color: '#155724' },
    incorrectOption: { backgroundColor: '#f8d7da', borderColor: '#f5c6cb' },
    incorrectOptionText: { color: '#721c24' },
    input: { width: '100%', height: 50, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 15, fontSize: 16, marginBottom: 10, backgroundColor: '#fff' },
    correctAnswerText: { alignSelf: 'center', color: '#28a745', fontSize: 16, marginBottom: 10 },
    nextButton: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
    nextButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default QuizScreen;