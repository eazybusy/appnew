import React from 'react';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const WORD_1 = "სიტყვაობანა";
const WORD_2 = "WordPlay";
const NAVIGATION_DELAY = 5000; // გავზარდეთ დრო 5 წამამდე

// --- ახალი, უნივერსალური კომპონენტი ასოების ანიმაციისთვის ---
type AnimatedLetterProps = {
  char: string;
  index: number;
  totalLetters: number;
  isReversed?: boolean; // მარჯვნიდან მარცხნივ ეფექტისთვის
  appear: boolean;
};

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({ char, index, totalLetters, isReversed = false, appear }) => {
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(20);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }],
    }));

    React.useEffect(() => {
        // ვიანგარიშებთ დაყოვნებას მიმართულების მიხედვით
        const delay = isReversed ? (totalLetters - 1 - index) * 80 : index * 80;
        
        // ვანიმირებთ გამოჩენას ან გაქრობას `appear` ცვლადის მიხედვით
        opacity.value = withDelay(delay, withTiming(appear ? 1 : 0, { duration: 400 }));
        translateY.value = withDelay(delay, withTiming(appear ? 0 : 20, { duration: 400 }));
    }, [appear]);

    return (
        <Animated.View style={animatedStyle}>
            <Text variant="displayMedium" style={styles.letter}>{char}</Text>
        </Animated.View>
    );
};


type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
    const theme = useTheme();
    // state-ები, რომლებიც მართავენ ანიმაციის ფაზებს
    const [phase, setPhase] = React.useState(1); // 1:ჩნდება, 2:ქრება, 3:ჩნდება ახალი

    React.useEffect(() => {
        // ანიმაციის სრული თანმიმდევრობა
        const t1 = setTimeout(() => setPhase(2), 2000); // 2 წამის შემდეგ ვიწყებთ გაქრობას
        const t2 = setTimeout(() => setPhase(3), 3000); // 3 წამის შემდეგ ვაჩენთ ახალ სიტყვას

        // ნავიგაცია 5 წამის შემდეგ
        const navTimer = setTimeout(() => {
            navigation.replace('LanguageSelection');
        }, NAVIGATION_DELAY);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(navTimer);
        };
    }, [navigation]);
    
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <StatusBar barStyle="dark-content" backgroundColor={theme.colors.background} />

            <View style={styles.wordContainer}>
                {phase < 3 && WORD_1.split('').map((char, index) => (
                    <AnimatedLetter
                        key={`word1_${index}`}
                        char={char}
                        index={index}
                        totalLetters={WORD_1.length}
                        appear={phase === 1} // გამოჩნდეს, თუ პირველი ფაზაა
                    />
                ))}
                
                {phase === 3 && WORD_2.split('').map((char, index) => (
                     <AnimatedLetter
                        key={`word2_${index}`}
                        char={char}
                        index={index}
                        totalLetters={WORD_2.length}
                        appear={true} // ამ ფაზაში ყოველთვის ჩანს
                        isReversed={true} // მარჯვნიდან მარცხნივ
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wordContainer: {
        flexDirection: 'row',
        // დავამატეთ ჩრდილის სტილები, რომელიც ორივე სიტყვაზე იმოქმედებს
        ...Platform.select({
            ios: {
                shadowColor: '#0f0f0fff',
                shadowOffset: { width: 5, height: 10 },
                shadowOpacity: 5,
                shadowRadius: 3,
            },
            android: {
                shadowColor: '#0a0a0aff',
                shadowOffset: { width: 5, height: 10 },
                shadowOpacity: 5,
                shadowRadius: 3,
                // Android-ზე ჩრდილი ასოებს ცალ-ცალკე ექნებათ
            },
        }),
    },
    letter: {
        fontWeight: 'bold',
        color: '#333',
        fontSize: 36,
         ...Platform.select({
            android: {
                elevation: 5,
            }
        })
    },
});

export default HomeScreen;