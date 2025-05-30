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
  useColorScheme, // useColorScheme 훅 임포트
} from 'react-native';
import { AuthStackParamList } from '../navigation/AuthNavigator';
import { Colors } from '../constants/Colors'; // Colors 임포트

const googleIcon: ImageSourcePropType = require('../assets/icon/google_icon.png');
const kakaoIcon: ImageSourcePropType = require('../assets/icon/kakao_icon.png');
const backgroundImage: ImageSourcePropType = require('../assets/welcome_background.png');

WebBrowser.maybeCompleteAuthSession();

type WelcomeScreenProps = NativeStackScreenProps<AuthStackParamList, 'Welcome'> & {
  onLogin: () => void;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onLogin }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const currentColors = Colors[colorScheme];

  // 배경 이미지가 어둡기 때문에 상태 표시줄 텍스트는 밝게 유지
  const statusBarContentStyle = 'light-content';
  // 배경 이미지 로딩 실패 또는 지연 시 보일 배경색
  const fallbackBackgroundColor = currentColors.background;

  return (
    <>
      <StatusBar barStyle={statusBarContentStyle} backgroundColor={fallbackBackgroundColor} />
      <ImageBackground
        source={backgroundImage}
        style={[styles.backgroundImageFullScreen, { backgroundColor: fallbackBackgroundColor }]}
        resizeMode="cover"
        // imageStyle의 fallback backgroundColor는 이제 style의 backgroundColor로 처리됨
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
              style={[styles.button, { backgroundColor: currentColors.primary }]} // 테마 색상 적용
              onPress={onLogin}
            >
              <Text style={[styles.buttonText, styles.getStartedButtonText]}>
                시작하기
              </Text>
            </TouchableOpacity>

            <View style={styles.dividerContainer}>
              <View style={[styles.dividerLine, { backgroundColor: currentColors.borderColor }]} />
              <Text style={[styles.dividerText, { color: currentColors.placeholderText }]}>또는 다음으로 계속</Text>
              <View style={[styles.dividerLine, { backgroundColor: currentColors.borderColor }]} />
            </View>

            <TouchableOpacity
              style={[
                styles.button,
                styles.socialButton,
                { backgroundColor: currentColors.cardBackground, borderColor: currentColors.borderColor, borderWidth: 1 } // 테마 색상 적용
              ]}
              onPress={onLogin}
            >
              {googleIcon && <Image source={googleIcon} style={styles.socialIcon} />}
              <Text style={[styles.buttonText, { color: currentColors.text }, styles.socialButtonText]}> {/* 테마 색상 적용 */}
                Google로 시작하기
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.socialButton, styles.kakaoButton]} // 카카오 버튼은 브랜드 색상 유지
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
    // backgroundColor 는 컴포넌트에서 동적으로 설정
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
  description: { // 어두운 배경 이미지 위에 밝은 텍스트를 사용하므로 기존 색상 유지
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
    fontSize: 16,
    color: '#F0F0F0', // 밝은 색상 유지
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
  // getStartedButton의 backgroundColor는 컴포넌트에서 동적으로 설정
  getStartedButtonText: { // '시작하기' 버튼 텍스트 색상
    color: '#FFFFFF', // 기본적으로 밝은 색상 유지 (주요 버튼이므로)
    fontWeight: 'bold',
  },
  // loginEmailButton, loginEmailButtonText 스타일은 현재 사용되지 않으므로 변경 없음
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
  // dividerLine의 backgroundColor는 컴포넌트에서 동적으로 설정
  dividerLine: {
    flex: 1,
    height: 1,
    // backgroundColor 는 동적 할당
  },
  // dividerText의 color는 컴포넌트에서 동적으로 설정
  dividerText: {
    marginHorizontal: 10,
    fontSize: 12,
    // color 는 동적 할당
    textTransform: 'uppercase',
  },
  socialButton: {}, // 소셜 버튼 공통 스타일 (필요시 추가)
  // googleButton의 backgroundColor, borderColor는 컴포넌트에서 동적으로 설정
  // googleButtonText의 color는 컴포넌트에서 동적으로 설정
  kakaoButton: { // 카카오 버튼은 브랜드 색상을 유지
    backgroundColor: '#FEE500',
  },
  kakaoButtonText: { // 카카오 버튼 텍스트 색상 (브랜드 가이드라인 따름)
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