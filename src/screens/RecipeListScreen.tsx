// src/screens/RecipeListScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, FlatList, useColorScheme, TouchableOpacity } from 'react-native'; // useColorScheme, TouchableOpacity 추가
import { Colors } from '../constants/Colors'; // Colors 임포트

/**
 * @file RecipeListScreen.tsx
 * @brief 추천 레시피 목록을 표시하는 화면입니다.
 *
 * @description
 * 이 화면은 사용자가 제공한 재료를 기반으로 추천된 레시피를 표시합니다.
 * 이러한 레시피 표시에만 집중함으로써 단일 책임 원칙을 준수합니다.
 *
 * @notes
 * - 레시피 데이터는 props 또는 전역 상태 관리 솔루션(예: Redux, Zustand)을 통해 수신될 가능성이 높습니다.
 * - 목록은 스크롤 가능해야 하며 각 항목은 `RecipeDetailScreen`으로 이동하기 위해 누를 수 있어야 합니다.
 * - 레시피 목록에 대한 필터링 또는 정렬 옵션 구현을 고려하십시오.
 *
 * @example
 * <RecipeListScreen recommendedRecipes={recipes} />
 *
 * @see RecipeDetailScreen.tsx
 */

interface RecipeItem {
  id: string;
  name: string;
  // 기타 관련 레시피 요약 속성 추가
}

interface RecipeListScreenProps {
  recommendedRecipes: RecipeItem[];
  // 여기에 다른 props 정의 (예: onSelectRecipe: (recipeId: string) => void;)
  onSelectRecipe?: (recipeId: string) => void; // 선택적 콜백 추가
}

const RecipeListScreen: React.FC<RecipeListScreenProps> = ({ recommendedRecipes, onSelectRecipe }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const currentColors = Colors[colorScheme];

  const renderRecipeItem = ({ item }: { item: RecipeItem }) => (
    <TouchableOpacity onPress={() => onSelectRecipe?.(item.id)}>
      <View style={[styles.recipeItem, { borderBottomColor: currentColors.borderColor, backgroundColor: currentColors.cardBackground }]}>
        <Text style={[styles.recipeNameText, { color: currentColors.text }]}>{item.name}</Text>
        {/* 여기에 다른 레시피 요약 정보 표시 */}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: currentColors.background }]}>
      <Text style={[styles.title, { color: currentColors.text }]}>추천 레시피</Text>
      {recommendedRecipes && recommendedRecipes.length > 0 ? (
        <FlatList
          data={recommendedRecipes}
          keyExtractor={(item) => item.id}
          renderItem={renderRecipeItem}
          ItemSeparatorComponent={() => <View style={{ height: 8, backgroundColor: currentColors.background }} />} // 아이템 간 간격 및 배경색
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={[styles.emptyText, {color: currentColors.text}]}>추천 레시피가 없습니다.</Text>
        </View>
      )}
      {/* 필터링 또는 상호 작용을 위한 향후 UI 요소는 여기에 배치됩니다. */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // backgroundColor는 컴포넌트에서 동적으로 설정
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    // color는 컴포넌트에서 동적으로 설정
  },
  recipeItem: {
    padding: 16, // 패딩 증가
    borderRadius: 8, // 모서리 둥글게
    marginBottom: 8, // 아이템 간 구분을 위해 FlatList의 ItemSeparatorComponent 대신 사용 (옵션)
    // borderBottomWidth: 1, // ItemSeparatorComponent로 대체하거나, 카드 디자인에서는 제거 가능
    // borderBottomColor는 컴포넌트에서 동적으로 설정
    // backgroundColor는 컴포넌트에서 동적으로 설정
  },
  recipeNameText: { // 레시피 이름 텍스트 스타일 추가
    fontSize: 18,
    fontWeight: '500',
  },
  emptyContainer: { // 빈 목록 컨테이너 스타일
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: { // 빈 목록 텍스트 스타일
    fontSize: 16,
  }
});

export default RecipeListScreen;
