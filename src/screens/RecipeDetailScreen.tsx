import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
  Image,
  Dimensions,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { HomeStackParamList } from '../navigation/AppNavigator'; // Adjust path if needed
import { Colors } from '../constants/Colors'; // Adjust path if needed
import CustomAppBar from '../../components/organisms/CustomAppBar'; // CustomAppBar 임포트

// 상세 레시피 정보를 위한 목업 데이터
const detailedMockRecipes = [
  {
    id: 'r1', // MainScreen 또는 RecipeScreen의 ID와 일치해야 함
    name: '클래식 김치찌개',
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMDJfMTEg%2FMDAxNzA0MTYwNjYxNTI4.OcC_hHcuLrP42q3jGqN72xWvR3nQECH3B5Y78Q6iVzcg.L2O_mGUtuSlqRODEzOF9vRFLS3pZkLgTjLhqHMAWfOAg.JPEG.ddsyjk%2FIMG_9279.JPG&type=sc960_832',
    ingredients: [
      { name: '김치', amount: '1/4 포기' },
      { name: '돼지고기 (목살 또는 삼겹살)', amount: '150g' },
      { name: '두부', amount: '1/2 모' },
      { name: '대파', amount: '1/2 대' },
      { name: '양파', amount: '1/4 개' },
      { name: '고춧가루', amount: '1큰술' },
      { name: '다진 마늘', amount: '1작은술' },
      { name: '국간장 또는 액젓', amount: '1작은술 (선택)' },
      { name: '물 또는 멸치육수', amount: '400ml' },
    ],
    instructions: [
      '돼지고기는 먹기 좋은 크기로 썰고, 김치도 적당히 썰어 준비합니다.',
      '양파는 채 썰고, 대파는 어슷하게 썰며, 두부는 도톰하게 썹니다.',
      '냄비에 참기름(또는 식용유)을 약간 두르고 돼지고기를 볶다가 고기 색이 변하면 김치를 넣고 함께 2-3분간 볶습니다.',
      '물(또는 멸치육수)을 붓고 다진 마늘, 고춧가루를 넣어 강한 불에서 끓입니다.',
      '찌개가 끓어오르면 중불로 줄이고 양파를 넣어 10분 정도 더 끓여 김치가 부드러워지도록 합니다.',
      '두부와 대파를 넣고 한소끔 더 끓입니다. 맛을 보고 필요하면 국간장이나 액젓으로 간을 맞춥니다.',
      '그릇에 담아 맛있게 즐깁니다.',
    ],
    cookingTime: '약 30-40분',
    difficulty: '쉬움',
    nutritionalInfo: { calories: '약 350 kcal', protein: '25g', carbs: '30g', fat: '15g' },
  },
  {
    id: 'r2',
    name: '든든한 된장찌개',
    image: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAxMTZfMjYg%2FMDAxNzA1MzgyNTY2MDQx.vJ-G7pYc7231pXkF6aXp_7PbnQ-uH2X5f78_NlHq0yIg.S6NfdB_ZqjQz6kUYoNeQ6y6Oqf9TqN8E9vtR18Vq4LMg.JPEG.sundoong2%2FIMG_4010.jpeg&type=sc960_832',
    ingredients: [
      { name: '된장', amount: '2-3큰술' },
      { name: '두부', amount: '1/2 모' },
      { name: '애호박', amount: '1/3 개' },
      { name: '양파', amount: '1/4 개' },
      { name: '감자', amount: '1/2 개 (선택)' },
      { name: '청양고추', amount: '1개 (선택)' },
      { name: '대파', amount: '1/4 대' },
      { name: '멸치 다시마 육수', amount: '400-500ml' },
    ],
    instructions: [
      '멸치와 다시마로 육수를 우려냅니다. (또는 시판 육수 사용)',
      '애호박, 양파, 감자, 두부는 먹기 좋은 크기로 썹니다. 대파와 청양고추는 어슷하게 썹니다.',
      '냄비에 육수를 붓고 된장을 풀어줍니다. 감자를 넣고 먼저 익혀줍니다.',
      '육수가 끓어오르면 애호박, 양파를 넣고 중불에서 끓입니다.',
      '채소가 어느 정도 익으면 두부, 대파, 청양고추를 넣고 한소끔 더 끓여 완성합니다.',
    ],
    cookingTime: '약 25-30분',
    difficulty: '쉬움',
    nutritionalInfo: { calories: '약 280 kcal', protein: '15g', carbs: '25g', fat: '10g' },
  },
  {
    id: 't1', // MainScreen의 trending item ID와 일치
    name: '홈메이드 초밥',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPoAhWaxoklXjELJAv7phbVzqPt_Eacf9Oy5pGRjhuc3_UmCN7LMoJrlkPUgzLvgGO7wuvBrasXyJlpVXFS35XBAiM2OYp2dgk5-w28R3ySFCTFe_SNWzxQqKtLl1kihOA_yMUueIeccbt_G66b7amuJoHYriyGeq2kTuv7YdTTTh4dL0EvOo7qk6dNhWGPoBJXbON_QcODhVzkQsKm1WCR56BBoT9cPOp9nopjyRTqn75UsI9vcW_FAOoeqv7vGHG3YsKVygqPNJ4',
    ingredients: [
        { name: '밥', amount: '2공기' },
        { name: '배합초 (식초, 설탕, 소금)', amount: '적당량' },
        { name: '신선한 회 (연어, 참치 등)', amount: '200g' },
        { name: '김', amount: '약간' },
        { name: '와사비', amount: '취향껏' },
    ],
    instructions: [
        '따뜻한 밥에 배합초를 넣고 잘 섞어 초밥용 밥을 준비합니다.',
        '준비된 회를 적당한 크기로 썹니다.',
        '밥을 한입 크기로 뭉치고 와사비를 살짝 바른 후 회를 얹어 초밥을 만듭니다.',
        '김으로 군함말이나 마끼를 만들 수도 있습니다.',
    ],
    cookingTime: '약 40분 (밥짓는 시간 제외)',
    difficulty: '보통',
    nutritionalInfo: { calories: '약 450 kcal', protein: '30g', carbs: '55g', fat: '12g' },
  }
];

// RouteProp 타입 정의
type RecipeDetailScreenRouteProp = RouteProp<HomeStackParamList, 'RecipeDetail'>;

const RecipeDetailScreen: React.FC = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const currentColors = Colors[colorScheme];
  const route = useRoute<RecipeDetailScreenRouteProp>();
  const { recipeId } = route.params;

  const recipe = detailedMockRecipes.find(r => r.id === recipeId);

  if (!recipe) {
    return (
      <View style={{flex: 1, backgroundColor: currentColors.background }}>
        <CustomAppBar title="레시피 정보 없음" showBackButton={true} />
        <View style={[styles.container, styles.centered]}>
          <Text style={[styles.errorText, { color: currentColors.text }]}>레시피를 찾을 수 없습니다.</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: currentColors.background }}>
      <CustomAppBar title={recipe.name} showBackButton={true} />
      <ScrollView style={styles.container}>
        {recipe.image && (
          <Image source={{ uri: recipe.image }} style={styles.recipeImage} resizeMode="cover" />
        )}
        <View style={styles.contentContainer}>
          {/* 기존 recipe.name Text는 CustomAppBar의 title로 대체되었으므로 삭제
          <Text style={[styles.title, { color: currentColors.text }]}>{recipe.name}</Text>
          */}

          <View style={styles.metaSection}>
            <Text style={[styles.metaText, { color: currentColors.placeholderText }]}>조리 시간: {recipe.cookingTime}</Text>
            <Text style={[styles.metaText, { color: currentColors.placeholderText }]}>난이도: {recipe.difficulty}</Text>
          </View>
          <Text style={[styles.metaText, { color: currentColors.placeholderText, marginBottom: 20 }]}>칼로리: {recipe.nutritionalInfo.calories}</Text>

          <Text style={[styles.sectionTitle, { color: currentColors.primary }]}>재료</Text>
          {recipe.ingredients.map((ingredient, index) => (
            <View key={index} style={[styles.listItem, { borderBottomColor: currentColors.borderColor }]}>
              <Text style={[styles.listItemText, { color: currentColors.text }]}>{ingredient.name}</Text>
              <Text style={[styles.listItemAmount, { color: currentColors.placeholderText }]}>{ingredient.amount}</Text>
            </View>
          ))}

          <Text style={[styles.sectionTitle, { color: currentColors.primary, marginTop: 20 }]}>조리 방법</Text>
          {recipe.instructions.map((instruction, index) => (
            <Text key={index} style={[styles.instructionText, { color: currentColors.text }]}>
              {`${index + 1}. ${instruction}`}
            </Text>
          ))}

          <Text style={[styles.sectionTitle, { color: currentColors.primary, marginTop: 20 }]}>영양 정보</Text>
          <Text style={[styles.infoText, { color: currentColors.text }]}>칼로리: {recipe.nutritionalInfo.calories}</Text>
          <Text style={[styles.infoText, { color: currentColors.text }]}>단백질: {recipe.nutritionalInfo.protein}</Text>
          <Text style={[styles.infoText, { color: currentColors.text }]}>탄수화물: {recipe.nutritionalInfo.carbs}</Text>
          <Text style={[styles.infoText, { color: currentColors.text }]}>지방: {recipe.nutritionalInfo.fat}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { // 이제 ScrollView 또는 오류 시 View의 스타일이 됨
    flex: 1,
  },
  centered: { // 오류 메시지 중앙 정렬을 위해 유지
    justifyContent: 'center',
    alignItems: 'center',
  },
  recipeImage: {
    width: '100%',
    height: Dimensions.get('window').width * 0.7,
    backgroundColor: '#e0e0e0', // 이미지 로딩 중 배경색
  },
  contentContainer: {
    padding: 20,
  },
  // title 스타일은 CustomAppBar로 대체되었으므로 삭제
  // title: {
  //   fontSize: 28,
  //   fontWeight: 'bold',
  //   marginBottom: 12,
  //   textAlign: 'center',
  // },
  metaSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
    marginTop: 8, // 이미지와 제목 사이 간격 (제목이 AppBar로 이동했으므로 이미지 바로 아래 메타 정보)
  },
  metaText: {
    fontSize: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 10, // 이전 제목과의 간격 유지 또는 조정
    marginBottom: 12,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10, // 패딩 증가
    borderBottomWidth: StyleSheet.hairlineWidth, // 더 얇은 구분선
    // borderBottomColor는 컴포넌트에서 동적으로 설정
  },
  listItemText: {
    fontSize: 16,
    flex: 1,
  },
  listItemAmount: {
    fontSize: 16,
  },
  instructionText: {
    fontSize: 16,
    lineHeight: 26, // 줄 간격 증가
    marginBottom: 10, // 각 단계 사이 간격 증가
  },
  infoText: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 4,
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
  }
});

export default RecipeDetailScreen;
