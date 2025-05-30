import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors'; // Colors 임포트
import { useNavigation } from '@react-navigation/native'; // useNavigation 임포트
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; // 타입 임포트
import { HomeStackParamList } from '../navigation/AppNavigator'; // 경로 수정 필요시 확인


// TODO: 이 데이터는 실제 API 호출 또는 상태 관리 라이브러리에서 가져와야 합니다.
// 임시 추천 데이터 (한국어) - 이 부분은 현재 화면에 직접 사용되지 않으므로 변경 없음
const recommended = [
  {
    id: 'r1', // id 추가
    title: '크리미 파스타',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwFhnRmETpWL7XQk6PKkuMHaPvZ714wtdioU5_eS7BD0ECrOvBe7qos2cEPAnf6HUpBxJqItE3Qhpg30hKra5WEgv7Bo4DglpBU7Ktm1iKNe1k11rbxdr9YccCAxDNrBtppidO4ZjDZuiyv82Ur2Tshg0uGP6u4qLc9ZHtDWr0Pfg4VUVhZEpSePX03pSrQRj1MqB1JVokbl1_U0xzpLBLgxTqu9tkkOBPMknTirrOWHKHGU2Yq1clsLPsW0Zav6rnUPX0OvwCThp5',
  },
  {
    id: 'r2', // id 추가
    title: '신선한 정원 샐러드',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhOncgJuiLb94aapREjVAyD-8V3kr88ruL77YO7uhWxM-wMYAibYep0IAErHhWBLUy4QFVfgGazXSzBwDyqtHy3DhjIhwukWGMRJnTA7ewIOXs8l6Jtsycn-QvnqPX5u8z38TQezIXjfF5JbV-jS17H_swTgWnolaGK42bdWFg1Ibf4-VVhHztkWZEx_9p94z6Mx7px9mxKAhk77RJWvXCx_xifH-acFMPvstPO7Xfr_CwrJZCtoHLUaG3XYZVvoiesHbuP1R9Knm_',
  },
  {
    id: 'r3', // id 추가
    title: '토마토 수프',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx84Lm4qKp8WCMTofQZYvwtT4crwgI4xEndTNZ4171bqkhQRBaU4uUrvECRKR9r94Vr2mO9CjBVIIOVna0O28d9sDhoNJKWQVoO0RMTP39l7o0_VxKCK3_FQbL_kZP3m80h3i6wswkMYmC_-P8iIt8jKTSWTZqgjoEBhha-OuPLPw45UebaVlgQwZcav7fPztUOzK1W9z6jhXsLIOXPbY4fnsxDL_Qc9Z74jrX6eLEz9l-4cvfcKn9vfyQKsr5z90s25mI_75X08pJ',
  },
];
// 임시 트렌딩 데이터 (한국어) - id 추가
const trending = [
  {
    id: 't1', // id 추가
    title: '홈메이드 초밥',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPoAhWaxoklXjELJAv7phbVzqPt_Eacf9Oy5pGRjhuc3_UmCN7LMoJrlkPUgzLvgGO7wuvBrasXyJlpVXFS35XBAiM2OYp2dgk5-w28R3ySFCTFe_SNWzxQqKtLl1kihOA_yMUueIeccbt_G66b7amuJoHYriyGeq2kTuv7YdTTTh4dL0EvOo7qk6dNhWGPoBJXbON_QcODhVzkQsKm1WCR56BBoT9cPOp9nopjyRTqn75UsI9vcW_FAOoeqv7vGHG3YsKVygqPNJ4',
  },
  {
    id: 't2', // id 추가
    title: '정통 타코',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaWk6jXso5dJ_9_Lrk4uFG4JuiKyvFTN3pdccsuhjigUCP1INmnIirw4ZjaquQAeORl19KBVwv654TrJ7afTtnJ7j0MfdX8EQN75gc1XZXLfklNHZ4y99X-7Y1VHrKDnNN6MoVPpxJk_C-A5-HiCu644WVyIdhPF4_30hJVraXhkc-s185WRn-TZh18FcKkzAjHXCGv81qjQvpNIhQ8idtpdfvUQ9CnDmWXlL2DVR4awVgUVsh1zVQoqbeKTZAO7vT6HdEyrLD96Tp',
  },
  {
    id: 't3', // id 추가
    title: '고급 피자',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA49SpyHSKqWsQX2Bo0THpzTFTJkGYBy23P_rpxDUBonHRHtxsmfjlbotPE3rVE1GorVpq-bJpPXQXvz_Ma6jxG32ey07sJnYRwsFpZzXeGdgvqAGUooITXPqVDQXgcAUToWA70eGPwSE7o9u29tIUNbr__5f6mfVGIxXDmtktXgpcwNgN3D_BwUih6-fptt2weK86p83WZuF5eSuqd9h6r-y_LvpO9SNkM_WXsDnA6BlzMEVP6UsJXJZmIJHT1J6e0ffJGhKwjgpn',
  },
];
// 임시 커뮤니티 데이터 (한국어) - id 추가
const community = [
  {
    id: 'c1', // id 추가
    title: "사용자1의 레시피",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBL_tt37bvGLtdHP5MOLnKOl7PF-aX_mOYQPMoWGjfsqeniK00CTCkdenmd7TPr3qARLMK0NltMDet0tgnRPVBindCiO4HeXvvuEntANx8NvNR6N-vTmRzC383Rm8pXjwOYyJPTKB74O2MrMGihPrapP5Dja44H1OaT-Q_xvMcR8UnDlyHMyPGHAcejYt24wHCcaLEsacIU-z_2mBfuGpmqCs08z7yZc_BvW43fMfl5TSgr2wpt3TLFqwFz5cYCOuT4GyyjmxXPSgBZ',
  },
  {
    id: 'c2', // id 추가
    title: "사용자2의 요리 팁",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwV_r5Vhm5q8LbspcQFWFllLmNpaq3EYaJNLywsWscifjZ_X_c8IwQamA59MIB4uh5pX3NZK65h95oTN4CFYiXwnIPbkfUxMYrtNxaTCsb3UyTDOthFKyrRvVR97Bi1_N4UxzLgJBmS8k4Q972Id86CeR7WRFB0tRETq0Gi5KnG3ORFMYl2vEzYqZPZPruTtGFBJLS1C-u7b1oQux1uyUjWo_pzNsS3WHl4mj9b-ZKi4uFC_hKzqvek6UMEACy6E8wpq_o_7WV_nnX',
  },
  {
    id: 'c3', // id 추가
    title: "사용자3의 음식 사진",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUQAzUAn_e9knxIp07hM2vtjryoMsz5zDT8Bj7vZNHbaeOuej4DBi4Dim1bilKoJG7ryVQryjDDr6NrhiUXZY8VBxC1KEHqqVppgEsBXzivAhrR_QLH7zVJ9ZjueNnga2tYunv40gFn4Zo3maekg3Kp7tyOaeW8ydUpo6Mth_6wah6DE6MmJxUrWMAfyAJyMcPbXwYOXpL1yjx1BfOFzQ4av9t9rKXcxCklMUm-tWZkmzPkMH-xVlUQP13vJa2cYD-2F23iQRf4EyZ',
  },
];

const { width } = Dimensions.get('window');

// HomeStackParamList에 대한 네비게이션 속성 타입 정의
type MainScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList>;

export default function MainScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const currentColors = Colors[colorScheme];
  const navigation = useNavigation<MainScreenNavigationProp>(); // 네비게이션 훅 사용

  // StyleSheet 내부에서 currentColors를 사용하기 위해 함수 외부에서 스타일을 생성하거나,
  // 컴포넌트 내에서 스타일 객체를 직접 생성해야 합니다. 여기서는 후자를 택합니다.
  // 또는 MainScreen 컴포넌트 자체를 클래스 컴포넌트로 만들거나 고차 컴포넌트(HOC)를 사용할 수 있습니다.
  // 이 예제에서는 스타일을 동적으로 생성하는 대신, 주요 색상만 인라인으로 적용하거나,
  // StyleSheet.create에 전달되는 객체를 함수로 만들어 currentColors를 인자로 받도록 수정할 수 있습니다.
  // 편의상, 여기서는 StyleSheet.create를 그대로 사용하고, 필요한 부분에 currentColors를 직접 참조합니다.

  // 하단 탭바 직접 구현 없이, 본문 내용만 렌더링
  return (
    <ScrollView style={[mainStyles.container, { backgroundColor: currentColors.background }]}>
      {/* 헤더 */}
      <View style={mainStyles.headerRow}>
        <Text style={[mainStyles.headerTitle, { color: currentColors.text }]}>홈</Text>
      </View>

      {/* 빠른 실행 버튼 */}
      <View style={mainStyles.quickRow}>
        <TouchableOpacity
          style={[mainStyles.quickButtonRed, { backgroundColor: currentColors.primary }]}
          onPress={() => navigation.navigate('Camera')} // Camera 스크린으로 네비게이트
        >
          <Text style={[mainStyles.quickButtonTextRed, { color: currentColors.cardBackground }]}>사진 찍기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[mainStyles.quickButtonGray, { backgroundColor: currentColors.cardBackground, marginLeft: 12 }]} // 버튼 간 간격 추가
          onPress={() => navigation.navigate('IngredientInput')} // IngredientInput 스크린으로 네비게이트
        >
          <Text style={[mainStyles.quickButtonTextGray, { color: currentColors.text }]}>업로드</Text>
        </TouchableOpacity>
      </View>

      {/* 트렌딩 섹션 */}
      <Text style={[mainStyles.sectionTitle, { color: currentColors.text }]}>요즘 인기 레시피</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 8 }}>
        {trending.map((item) => (
          <TouchableOpacity
            key={item.id} // item.id를 key로 사용
            style={[mainStyles.recipeCard, { marginRight: 12, backgroundColor: currentColors.cardBackground }]}
            onPress={() => navigation.navigate('RecipeDetail', { recipeId: item.id })}
          >
            <Image source={{ uri: item.image }} style={[mainStyles.recipeImage, { backgroundColor: currentColors.borderColor }]} />
            <Text style={[mainStyles.recipeTitle, { color: currentColors.text }]}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* 커뮤니티 섹션 */}
      <Text style={[mainStyles.sectionTitle, { color: currentColors.text }]}>커뮤니티</Text>
      <View style={mainStyles.communityGrid}>
        {community.map((item) => (
          <TouchableOpacity
            key={item.id} // item.id를 key로 사용
            // marginRight 스타일을 제거하여 idx 관련 오류 방지 및 단순화
            style={[mainStyles.communityCard, { marginBottom: 12, backgroundColor: currentColors.cardBackground }]}
            onPress={() => navigation.navigate('RecipeDetail', { recipeId: item.id })}
          >
            <Image source={{ uri: item.image }} style={[mainStyles.communityImage, { backgroundColor: currentColors.borderColor }]} />
            <Text style={[mainStyles.recipeTitle, { color: currentColors.text }]}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ height: 24 }} />
    </ScrollView>
  );
}

// StyleSheet는 한 번만 생성되므로, 동적 색상 변경은 인라인 스타일 또는 다른 접근 방식이 필요합니다.
// 여기서는 주요 배경 및 텍스트 색상을 위주로 인라인 스타일을 적용하고,
// StyleSheet의 값들은 기본(라이트모드) 또는 정적 값으로 간주합니다.
// 보다 완벽한 테마 적용을 위해서는 스타일 생성 방식을 변경해야 할 수 있습니다.
const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor는 컴포넌트에서 currentColors.background로 적용
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 8,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    // color는 컴포넌트에서 currentColors.text로 적용
    paddingLeft: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    // color는 컴포넌트에서 currentColors.text로 적용
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 8,
  },
  quickRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  quickButtonRed: { // backgroundColor는 컴포넌트에서 currentColors.primary로 적용
    flex: 1,
    borderRadius: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickButtonGray: { // backgroundColor는 컴포넌트에서 currentColors.cardBackground로 적용
    flex: 1,
    borderRadius: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickButtonTextRed: { // color는 컴포넌트에서 currentColors.cardBackground로 적용
    fontWeight: 'bold',
    fontSize: 15,
  },
  quickButtonTextGray: { // color는 컴포넌트에서 currentColors.text로 적용
    fontWeight: 'bold',
    fontSize: 15,
  },
  recipeCard: { // backgroundColor는 컴포넌트에서 currentColors.cardBackground로 적용
    width: 120,
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
  },
  recipeImage: { // backgroundColor는 컴포넌트에서 currentColors.borderColor로 적용
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  recipeTitle: { // color는 컴포넌트에서 currentColors.text로 적용
    fontSize: 15,
    fontWeight: '500',
    marginTop: 8,
    marginBottom: 8,
    textAlign: 'center',
  },
  communityGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16, // Grid 좌우 패딩
    paddingTop: 8,
    justifyContent: 'space-between', // 아이템 사이에 공간을 균등하게 배분
  },
  communityCard: { // backgroundColor는 컴포넌트에서 currentColors.cardBackground로 적용
    width: (width - 16 * 2 - 12) / 2, // 16은 그리드 좌우 패딩, 12는 아이템 간 간격
    borderRadius: 16,
    overflow: 'hidden',
    alignItems: 'center',
    // marginBottom will be applied inline in the map function
  },
  communityImage: { // backgroundColor는 컴포넌트에서 currentColors.borderColor로 적용
    width: '100%',
    aspectRatio: 1,
    borderRadius: 16,
  },
});