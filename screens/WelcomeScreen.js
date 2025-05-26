// 파일 경로: EatPickApp/screens/WelcomeScreen.js (또는 app/index.js 등 첫 화면 파일)

import React from 'react'; // React 임포트
import {
    Image,
    ImageBackground,
    Platform, // Platform 임포트
    ScrollView,
    StatusBar, // 상태 표시줄 스타일링
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

// --- 이미지 변수 처리 ---
// 실제 이미지를 사용하려면 아래 주석을 해제하고,
// ../../assets/ 또는 ../assets/ 등 프로젝트 구조에 맞게 경로를 수정하세요.
// assets 폴더에 해당 이미지 파일을 넣어주세요.

const googleIcon = require('../assets/icon/google_icon.png'); // 예: screens 폴더 기준 루트의 assets
const kakaoIcon = require('../assets/icon/kakao_icon.png'); // 예: screens 폴더 기준 루트의 assets
const backgroundImage = require('../assets/welcome_background.png'); // 예: screens 폴더 기준 루트의 assets

// 임시: 실제 이미지가 없을 경우 오류 방지를 위해 null 또는 기본 이미지로 설정
// 실제 이미지를 준비한 후에는 위의 require 문으로 교체하세요.
// const googleIcon = null; // 실제 아이콘 준비 후 경로로 교체
// const kakaoIcon = null; // 실제 아이콘 준비 후 경로로 교체
// const backgroundImage = null; // 실제 배경 이미지 준비 후 경로로 교체
// 기본 배경색을 원하시면 backgroundImage를 null로 두고, ImageBackground 대신 View에 배경색을 적용할 수 있습니다.
// 예: <View style={[styles.backgroundImageFullScreen, {backgroundColor: '원하는색'}]}>

const WelcomeScreen = () => {
  const handleGetStarted = () => console.log('시작하기 버튼 클릭');
  const handleLoginWithEmail = () => console.log('이메일로 로그인 버튼 클릭');
  const handleGoogleLogin = () => console.log('구글로 로그인 버튼 클릭');
  const handleKakaoLogin = () => console.log('카카오로 로그인 버튼 클릭');

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ImageBackground
        source={backgroundImage} // backgroundImage가 null이면 기본 배경 또는 아무것도 표시 안 함
        style={styles.backgroundImageFullScreen}
        resizeMode="cover"
        // backgroundImage가 null일 경우를 대비한 기본 배경색 (선택 사항)
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
              onPress={handleGetStarted}
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
              onPress={handleGoogleLogin}
            >
              {/* googleIcon이 유효할 때만 Image 컴포넌트를 렌더링 */}
              {googleIcon && <Image source={googleIcon} style={styles.icon} />}
              <Text style={[styles.buttonText, styles.googleButtonText]}>
                Google로 시작하기
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.socialButton, styles.kakaoButton]}
              onPress={handleKakaoLogin}
            >
              {/* kakaoIcon이 유효할 때만 Image 컴포넌트를 렌더링 */}
              {kakaoIcon && <Image source={kakaoIcon} style={styles.icon} />}
              <Text style={[styles.buttonText, styles.kakaoButtonText]}>
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
        backgroundColor: '#FFFFFF', // 배경 이미지 로딩 실패 시 기본 배경
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    topSectionContainer: {
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? '30%' : '25%', // StatusBar 투명화에 따른 상단 여백 조정
    },
    title: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif-bold',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF', // <<< 글자색 변경 (예: 흰색)
        textAlign: 'center',
        paddingBottom: 12,
        // 텍스트 가독성을 위한 그림자 효과 (선택 사항)
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    description: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
        fontSize: 16,
        color: '#F0F0F0', // <<< 글자색 변경 (예: 밝은 회색) 또는 '#FFFFFF' (흰색)
        textAlign: 'center',
        lineHeight: 24,
        paddingBottom: 30,
        paddingTop: 4,
        // 텍스트 가독성을 위한 그림자 효과 (선택 사항)
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 8
    },
    bottomSectionContainer: {
        width: '100%',
        maxWidth: 480,
        alignSelf: 'center',
        paddingBottom: Platform.OS === 'ios' ? 50 : 40, // 하단 여백 조정
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
        backgroundColor: 'rgba(224, 224, 224, 0.7)', // 배경이 어두울 경우 구분선도 약간 투명도 조절
    },
    dividerText: {
        marginHorizontal: 10,
        fontSize: 12,
        color: '#E0E0E0', // 배경이 어두울 경우 구분선 텍스트 색상도 밝게
        textTransform: 'uppercase',
    },
    socialButton: {
        // 소셜 버튼 공통 스타일 (필요 시 추가)
    },
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
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
});

export default WelcomeScreen;