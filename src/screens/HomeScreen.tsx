import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useTheme } from 'react-native-paper'; // <-- Hook-ის იმპორტი

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const { width, height } = Dimensions.get('window');

const ANIMATION_DURATION = 8000; // 8 წამი

const HomeScreen = ({ navigation }: Props) => {
    const theme = useTheme(); // <-- თემის ობიექტი
    
    // სტატუსის ზოლის ფერი და სტილი
    // რადგან ფონი მუქია, barStyle იქნება light-content
    const statusBarStyle = 'light-content'; 
    const statusBarColor = theme.colors.background; // იყენებს თემის ფონს (რომელიც მუქ რეჟიმში შავი იქნება)

    useEffect(() => {
        // ავტომატური გადართვა LanguageSelection-ზე 8 წამში
        const timer = setTimeout(() => {
            navigation.replace('LanguageSelection');
        }, ANIMATION_DURATION);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        // 1. მთავარი View-ს ფონის დინამიურად დაყენება
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <StatusBar barStyle={statusBarStyle} backgroundColor={statusBarColor} />
            <LottieView
                source={require('../assets/animations/home.json')} // შენი JSON
                autoPlay
                loop={false}
                resizeMode="cover"
                style={{ width, height }}
            />
        </View>
    );
};

// სტილიდან ამოღებულია ხისტი ფერი
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;