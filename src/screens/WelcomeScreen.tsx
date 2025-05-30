import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AuthStackParamList } from '../navigation/AuthNavigator';

const googleIcon: ImageSourcePropType = require('../assets/icon/google_icon.png');
const kakaoIcon: ImageSourcePropType = require('../assets/icon/kakao_icon.png');
const backgroundImage: ImageSourcePropType = require('../assets/welcome_background.png');

WebBrowser.maybeCompleteAuthSession();

type WelcomeScreenProps = NativeStackScreenProps<AuthStackParamList, 'Welcome'> & {
  onLogin: () => void;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onLogin }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImageFullScreen}
        resizeMode="cover"
        imageStyle={!backgroundImage ? { backgroundColor: '#f0f0f0' } : {}}
      >
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.topSectionContainer}>
            <Text style={styles.title}>잇픽(EatPick)</Text>
            <Text style={styles.title}>요리 창의력을 펼쳐보세요</Text>
            <Text style={styles.description}>
              {'재료 사진을 찍으면, 맞춤 레시피와 칼로리 정보를\n제공해드립니다.'}
            </Text>
          </View>

          <View style={styles.bottomSectionContainer}>
            <TouchableOpacity
              style={[styles.button, styles.getStartedButton]}
              onPress={onLogin}
            >
              <Text style={[styles.buttonText, styles.getStartedButtonText]}>
                시작하기
              </Text>
            </TouchableOpacity>

            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>또는 다음으로 계속</Text>
              <View style={styles.dividerLine} />
            </View>

            <TouchableOpacity
              style={[styles.button, styles.socialButton, styles.googleButton]}
              onPress={onLogin}
            >
              {googleIcon && <Image source={googleIcon} style={styles.socialIcon} />}
              <Text style={[styles.buttonText, styles.googleButtonText, styles.socialButtonText]}>
                Google로 시작하기
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.socialButton, styles.kakaoButton]}
              onPress={onLogin}
            >
              {kakaoIcon && <Image source={kakaoIcon} style={styles.socialIcon} />}
              <Text style={[styles.buttonText, styles.kakaoButtonText, styles.socialButtonText]}>
                Kakao로 시작하기
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImageFullScreen: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  topSectionContainer: {
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? '30%' : '25%',
  },
  title: {
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif-bold',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  description: {
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
    fontSize: 16,
    color: '#F0F0F0',
    textAlign: 'center',
    lineHeight: 24,
    paddingBottom: 30,
    paddingTop: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 8,
  },
  bottomSectionContainer: {
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    paddingBottom: Platform.OS === 'ios' ? 50 : 40,
    gap: 12,
  },
  button: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: '100%',
    overflow: 'hidden',
  },
  buttonText: {
    fontSize: 16,
    letterSpacing: 0.2,
  },
  getStartedButton: {
    backgroundColor: '#e92932',
  },
  getStartedButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loginEmailButton: {
    backgroundColor: '#f4f0f0',
  },
  loginEmailButtonText: {
    color: '#181111',
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(224, 224, 224, 0.7)',
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 12,
    color: '#E0E0E0',
    textTransform: 'uppercase',
  },
  socialButton: {},
  googleButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  googleButtonText: {
    color: '#333333',
    fontWeight: '500',
  },
  kakaoButton: {
    backgroundColor: '#FEE500',
  },
  kakaoButtonText: {
    color: '#191919',
    fontWeight: '500',
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
    marginLeft: 4,
    resizeMode: 'contain',
  },
  socialButtonText: {
    flex: 1,
    textAlign: 'center',
  },
});

export default WelcomeScreen; 