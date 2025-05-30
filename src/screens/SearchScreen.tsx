import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors'; // Colors 임포트
import CustomAppBar from '../../components/organisms/CustomAppBar'; // CustomAppBar 임포트

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
    <View style={{ flex: 1, backgroundColor: currentColors.background }}>
      <CustomAppBar title="레시피 검색" />
      <ScrollView
        style={styles.scrollViewContainer} // Renamed from styles.container to avoid conflict if any
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* 기존 헤더 View는 CustomAppBar로 대체되었으므로 삭제됨
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: currentColors.text }]}>검색</Text>
        </View>
        */}

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
        <View style={{height: 20}} />{/* Add some bottom padding */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: { // Was styles.container, renamed for clarity
    flex: 1,
  },
  // header 및 headerTitle 스타일은 CustomAppBar로 대체되어 삭제
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 12, // 늘림
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16, // CustomAppBar 아래에 간격 추가
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    height: 48,
  },
  searchIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    height: '100%',
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  categoryItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  categoryText: {
    fontSize: 15,
    fontWeight: '500',
  },
  recentSearchesContainer: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  recentSearchItem: {
    paddingVertical: 14, // 늘림
    borderBottomWidth: StyleSheet.hairlineWidth, // 얇은 선
  },
  recentSearchText: {
    fontSize: 16,
  },
});

export default SearchScreen;