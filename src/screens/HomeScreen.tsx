import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StatusBar, LayoutChangeEvent } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay, Easing } from 'react-native-reanimated';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const SPLASH_DURATION = 3500;
const WORD_TO_ANIMATE = "სიტყვაობანა";

// 1. ვუბრუნებთ ნავიგაციის props-ებს
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
    const theme = useTheme();
    // ...ანიმაციის ლოგიკა უცვლელია...
    const [layouts, setLayouts] = useState<{ [key: string]: { x: number, width: number } }>({});
    const dotX = useSharedValue(0);
    const rotation = useSharedValue(0);

    const handleLayout = (char: string, index: number, event: LayoutChangeEvent) => {
        const { x, width } = event.nativeEvent.layout;
        setLayouts(prev => ({ ...prev, [`${char}_${index}`]: { x, width } }));
    };

    const animatedDotStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: dotX.value },
                { rotate: `${rotation.value}deg` },
            ],
        };
    });

    // 2. ვასწორებთ ნავიგაციის ლოგიკას
    useEffect(() => {
        const timer = setTimeout(() => {
            // ანიმაციის შემდეგ ყოველთვის გადავდივართ ენის არჩევის ეკრანზე
            navigation.replace('LanguageSelection');
        }, SPLASH_DURATION);

        return () => clearTimeout(timer);
    }, [navigation]);

    useEffect(() => {
        const letters = WORD_TO_ANIMATE.split('');
        if (Object.keys(layouts).length === letters.length) {
            const firstLetterLayout = layouts[`${letters[0]}_0`];
            const lastLetterLayout = layouts[`${letters[letters.length - 1]}_${letters.length - 1}`];

            dotX.value = firstLetterLayout.x;
            const animationDuration = 2800;
            const startDelay = 200;

            dotX.value = withDelay(startDelay, withTiming(
                lastLetterLayout.x + lastLetterLayout.width - 30,
                { duration: animationDuration, easing: Easing.inOut(Easing.ease) }
            ));
            rotation.value = withDelay(startDelay, withTiming(
                360 * 3,
                { duration: animationDuration, easing: Easing.linear }
            ));
        }
    }, [layouts, dotX, rotation]);

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <StatusBar barStyle="dark-content" backgroundColor={theme.colors.background} />
            <View style={styles.wordContainer}>
                <Animated.View style={[styles.jumpingDot, { backgroundColor: theme.colors.primary }, animatedDotStyle]}>
                    <Text style={styles.dotText}>Word Play</Text>
                </Animated.View>
                {WORD_TO_ANIMATE.split('').map((char, index) => (
                    <Text
                        key={`${char}_${index}`}
                        variant="displayMedium"
                        style={[styles.letter, { color: theme.colors.primary }]}
                        onLayout={(event) => handleLayout(char, index, event)}>
                        {char}
                    </Text>
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


