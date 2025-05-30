import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors'; // Colors 임포트

// 카테고리 목록 (한국어)
const categories = [
  '아침 식사',
  '점심 식사',
  '저녁 식사',
  '디저트',
  '간식',
  '채식',
  '비건',
  '글루텐 프리'
];

// 최근 검색어 예시 (한국어)
const recentSearches = [
  '까르보나라 파스타',
  '치킨 커리',
  '야채 볶음',
  '초콜릿 케이크',
  '샐러드'
];

const SearchScreen: React.FC = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const currentColors = Colors[colorScheme];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: currentColors.background }]}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled" // 검색창 입력 중 다른 곳 탭 시 키보드 숨김
    >
      {/* 헤더 */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: currentColors.text }]}>검색</Text>
      </View>

      {/* 검색창 */}
      <View style={[styles.searchContainer, { backgroundColor: currentColors.cardBackground, borderColor: currentColors.borderColor }]}>
        <Text style={[styles.searchIcon, { color: currentColors.placeholderText }]}>🔍</Text>
        <TextInput
          style={[styles.searchInput, { color: currentColors.text }]}
          placeholder="레시피 검색..."
          placeholderTextColor={currentColors.placeholderText}
        />
      </View>

      {/* 카테고리 */}
      <Text style={[styles.sectionTitle, { color: currentColors.text }]}>카테고리</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContainer}>
        {categories.map((category: string, index: number) => (
          <TouchableOpacity key={index} style={[styles.categoryItem, { backgroundColor: currentColors.cardBackground }]}>
            <Text style={[styles.categoryText, { color: currentColors.text }]}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* 최근 검색어 */}
      <Text style={[styles.sectionTitle, { color: currentColors.text }]}>최근 검색어</Text>
      <View style={styles.recentSearchesContainer}>
        {recentSearches.map((search: string, index: number) => (
          <TouchableOpacity key={index} style={[styles.recentSearchItem, { borderBottomColor: currentColors.borderColor }]}>
            <Text style={[styles.recentSearchText, { color: currentColors.text }]}>{search}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor는 컴포넌트에서 동적으로 설정
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 24, // 상태 표시줄 고려
    paddingBottom: 8,
    alignItems: 'center', // 중앙 정렬
  },
  headerTitle: {
    fontSize: 22, // 크기 약간 증가
    fontWeight: 'bold',
    // color는 컴포넌트에서 동적으로 설정
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600', // semibold 대신
    // color는 컴포넌트에서 동적으로 설정
    paddingHorizontal: 16,
    marginTop: 24, // 섹션 간 간격
    marginBottom: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16, // 좌우 마진
    paddingHorizontal: 12, // 내부 패딩
    borderRadius: 12, // 모서리 둥글게
    borderWidth: 1,
    // backgroundColor, borderColor는 컴포넌트에서 동적으로 설정
    height: 48, // 높이 고정
  },
  searchIcon: {
    fontSize: 20,
    // color는 컴포넌트에서 동적으로 설정
    marginRight: 8, // 아이콘과 텍스트 입력창 간격
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    // color는 컴포넌트에서 동적으로 설정
    height: '100%', // 부모 높이 채우기
  },
  categoriesContainer: {
    paddingHorizontal: 16, // 좌우 패딩
    paddingVertical: 8, // 상하 패딩
  },
  categoryItem: {
    paddingVertical: 10, // 상하 패딩
    paddingHorizontal: 16, // 좌우 패딩
    borderRadius: 20, // 타원형 모양
    marginRight: 10, // 아이템 간 간격
    // backgroundColor는 컴포넌트에서 동적으로 설정
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1, // 안드로이드 그림자
    shadowColor: '#000', // iOS 그림자
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  categoryText: {
    fontSize: 15, // 폰트 크기 조절
    fontWeight: '500',
    // color는 컴포넌트에서 동적으로 설정
  },
  recentSearchesContainer: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  recentSearchItem: {
    paddingVertical: 12, // 상하 패딩 증가
    borderBottomWidth: 1,
    // borderBottomColor는 컴포넌트에서 동적으로 설정
  },
  recentSearchText: {
    fontSize: 16,
    // color는 컴포넌트에서 동적으로 설정
  },
});

export default SearchScreen;