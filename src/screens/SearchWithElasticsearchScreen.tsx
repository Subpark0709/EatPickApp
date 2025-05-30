// src/screens/SearchWithElasticsearchScreen.tsx

import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, useColorScheme } from 'react-native'; // TouchableOpacity, useColorScheme 추가
import { Colors } from '../constants/Colors'; // Colors 임포트

/**
 * @file SearchWithElasticsearchScreen.tsx
 * @brief Elasticsearch를 사용하여 레시피, 재료 또는 사용자를 검색하기 위한 전용 인터페이스를 제공하는 화면입니다.
 *
 * @description
 * 이 화면을 통해 사용자는 Elasticsearch의 강력한 기능을 활용하여 다양한 유형의 데이터(레시피,
 * 재료, 사용자 등)에 걸쳐 복잡한 검색을 수행할 수 있습니다.
 * 검색 기능과 Elasticsearch 백엔드와의 상호 작용에만 집중함으로써 단일 책임 원칙을 준수합니다.
 *
 * @notes
 * - 이 화면은 실제 Elasticsearch 쿼리 로직을 캡슐화할 `ElasticsearchService.ts`(`src/services/`에 생성 예정)와
 *   인터페이스합니다.
 * - 쿼리는 사용자 입력을 기반으로 구성되어야 하며, 필터, 정렬 및 전체 텍스트 검색 기능을
 *   허용할 수 있습니다.
 * - 검색 결과 표시는 다양한 데이터 유형을 처리할 수 있도록 다목적이어야 합니다.
 * - 검색 제안 또는 자동 완성 같은 기능 구현을 고려하십시오.
 *
 * @example
 * <SearchWithElasticsearchScreen />
 *
 * @see ../services/ElasticsearchService.ts
 */

interface SearchResult {
  id: string;
  type: 'recipe' | 'ingredient' | 'user'; // 예시 유형
  title: string;
  summary: string;
}

interface SearchWithElasticsearchScreenProps {
  // 여기에 props 정의
}

const SearchWithElasticsearchScreen: React.FC<SearchWithElasticsearchScreenProps> = (props) => {
  const colorScheme = useColorScheme() ?? 'light';
  const currentColors = Colors[colorScheme];

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = async () => {
    // 실제 앱에서는 ElasticsearchService.search(query)를 호출합니다.
    console.log('검색어:', query);
    // 현재는 임시 결과
    setResults([
      { id: '1', type: 'recipe', title: '검색된 레시피 1', summary: '쿼리와 일치하는 레시피입니다.' },
      { id: '2', type: 'ingredient', title: '검색된 재료 A', summary: '데이터베이스의 재료입니다.' },
    ]);
  };

  return (
    <View style={[styles.container, { backgroundColor: currentColors.background }]}>
      <Text style={[styles.title, { color: currentColors.text }]}>Elasticsearch 검색</Text>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: currentColors.borderColor,
            backgroundColor: currentColors.cardBackground,
            color: currentColors.text,
            placeholderTextColor: currentColors.placeholderText
          }
        ]}
        placeholder="레시피, 재료, 사용자 검색..."
        value={query}
        onChangeText={setQuery}
      />
      <TouchableOpacity
        style={[styles.searchButton, { backgroundColor: currentColors.primary }]}
        onPress={handleSearch}
      >
        <Text style={[styles.searchButtonText, { color: currentColors.cardBackground }]}>검색</Text>
      </TouchableOpacity>
      
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[
            styles.resultItem,
            { borderBottomColor: currentColors.borderColor, backgroundColor: currentColors.cardBackground }
          ]}>
            <Text style={[styles.resultType, { color: currentColors.placeholderText }]}>{item.type.toUpperCase()}</Text>
            <Text style={[styles.resultTitle, { color: currentColors.text }]}>{item.title}</Text>
            <Text style={[styles.resultSummary, { color: currentColors.text }]}>{item.summary}</Text>
          </View>
        )}
        style={styles.resultsList}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />} // 아이템 간 간격
      />
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
  input: {
    height: 48, // 높이 증가
    borderWidth: 1,
    paddingHorizontal: 12, // 패딩 조절
    marginBottom: 12, // 버튼과의 간격
    borderRadius: 8, // 모서리 둥글게
  },
  searchButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16, // 결과 목록과의 간격
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultsList: {
    marginTop: 8, // 버튼과의 간격 조절 후 추가된 부분
  },
  resultItem: {
    padding: 12,
    // borderBottomWidth: 1, // ItemSeparatorComponent로 대체 또는 카드 디자인에서는 제거
    borderRadius: 8,
    marginVertical: 4, // 아이템 간 수직 간격
  },
  resultType: {
    fontSize: 12,
    marginBottom: 4,
    opacity: 0.7, // 약간 흐리게
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  resultSummary: { // 요약 텍스트 스타일 추가
    fontSize: 14,
  }
});

export default SearchWithElasticsearchScreen;
