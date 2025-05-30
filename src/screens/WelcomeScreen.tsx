import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Platform,
  ScrollView,
  StatusBar,
  // StyleSheet, // Removed as styles are now imported
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './WelcomeScreen.styles'; // Import styles

const googleIcon: ImageSourcePropType = require('../assets/icon/google_icon.png');
const kakaoIcon: ImageSourcePropType = require('../assets/icon/kakao_icon.png');
const backgroundImage: ImageSourcePropType = require('../assets/welcome_background.png');

WebBrowser.maybeCompleteAuthSession();

type WelcomeScreenProps = {
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

// Removed StyleSheet.create block as it's now in WelcomeScreen.styles.ts

export default WelcomeScreen; 