import React from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#000" />
      <LottieView
        source={require('../assets/animations/home.json')} // შენი JSON
        autoPlay
        loop={false}            // მხოლოდ ერთხელ
        resizeMode="cover"      // მთელ ეკრანს შევსება
        style={{ width, height }}
        onAnimationFinish={() => {
          navigation.replace('LanguageSelection'); // ანიმაციის დასრულების შემდეგ
        }}
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
