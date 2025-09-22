import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const { width, height } = Dimensions.get('window');

const ANIMATION_DURATION = 6000; // 6 წამი

const HomeScreen = ({ navigation }: Props) => {
  useEffect(() => {
    // ავტომატური გადართვა LanguageSelection-ზე 6 წამში
    const timer = setTimeout(() => {
      navigation.replace('LanguageSelection');
    }, ANIMATION_DURATION);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#000" />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
