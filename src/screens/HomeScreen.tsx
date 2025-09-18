import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, LayoutChangeEvent, StyleProp, TextStyle } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay, Easing, withRepeat, withSequence } from 'react-native-reanimated';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const SPLASH_DURATION = 3500;
const WORD_TO_ANIMATE = "სიტყვაობანა";

type AnimatedLetterProps = {
  char: string;
  index: number;
  onLayout: (event: LayoutChangeEvent) => void;
  style: StyleProp<TextStyle>;
};

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({ char, index, onLayout, style }) => {
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(10);

    useEffect(() => {
        opacity.value = withDelay(index * 100, withTiming(1, { duration: 400 }));
        translateY.value = withDelay(index * 100, withTiming(0, { duration: 400 }));
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }],
    }));

    return (
        <Animated.View style={animatedStyle}>
            <Text
                variant="displayMedium"
                style={style}
                onLayout={onLayout}>
                {char}
            </Text>
        </Animated.View>
    );
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
    const theme = useTheme();
    const [layouts, setLayouts] = useState<{ [key: string]: { x: number, width: number } }>({});
    const dotX = useSharedValue(0);
    const rotation = useSharedValue(0);
    const dotY = useSharedValue(0);

    const handleLayout = (char: string, index: number, event: LayoutChangeEvent) => {
        const { x, width } = event.nativeEvent.layout;
        setLayouts(prev => ({ ...prev, [`${char}_${index}`]: { x, width } }));
    };

    const animatedDotStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: dotX.value },
                { translateY: dotY.value },
                { rotate: `${rotation.value}deg` },
            ],
        };
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('LanguageSelection');
        }, SPLASH_DURATION);
        return () => clearTimeout(timer);
    }, [navigation]);
    
    useEffect(() => {
        const letters = WORD_TO_ANIMATE.split('');
        if (Object.keys(layouts).length === letters.length) {
            const firstLetterLayout = layouts[`${letters[0]}_0`];
            // --- აი ეს ხაზი გასწორდა ---
            const lastLetterLayout = layouts[`${letters[letters.length - 1]}_${letters.length - 1}`];

            dotX.value = firstLetterLayout.x;
            const animationDuration = 2800;
            const startDelay = 500;

            dotX.value = withDelay(startDelay, withTiming(
                lastLetterLayout.x + lastLetterLayout.width - 30,
                { duration: animationDuration, easing: Easing.inOut(Easing.ease) }
            ));
            rotation.value = withDelay(startDelay, withTiming(
                360 * 3,
                { duration: animationDuration, easing: Easing.linear }
            ));

            const bounceHeight = -25;
            const bounces = 5;
            const singleBounceDuration = animationDuration / bounces;

            dotY.value = withDelay(startDelay, withRepeat(
                withSequence(
                    withTiming(bounceHeight, { duration: singleBounceDuration / 2, easing: Easing.out(Easing.ease) }),
                    withTiming(0, { duration: singleBounceDuration / 2, easing: Easing.in(Easing.ease) })
                ),
                bounces,
                false
            ));
        }
    }, [layouts, dotX, rotation, dotY]);

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <StatusBar barStyle="dark-content" backgroundColor={theme.colors.background} />
            <View style={styles.wordContainer}>
                <Animated.View style={[styles.jumpingDot, { backgroundColor: theme.colors.primary }, animatedDotStyle]}>
                    <Text style={styles.dotText}>Word Play</Text>
                </Animated.View>
                {WORD_TO_ANIMATE.split('').map((char, index) => (
                    <AnimatedLetter
                        key={`${char}_${index}`}
                        char={char}
                        index={index}
                        style={[styles.letter, { color: theme.colors.primary }]}
                        onLayout={(event) => handleLayout(char, index, event)}
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
        position: 'relative',
    },
    letter: {
        fontWeight: 'bold',
    },
    jumpingDot: {
        width: 45,
        height: 45,
        borderRadius: 5,
        position: 'absolute',
        top: -40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
});

export default HomeScreen;