// src/screens/SearchWithElasticsearchScreen.tsx

import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

/**
 * @file SearchWithElasticsearchScreen.tsx
 * @brief This screen provides a dedicated interface for searching recipes, ingredients, or users using Elasticsearch.
 * 
 * @description
 * This screen allows users to perform complex searches across different types of data (recipes,
 * ingredients, possibly users) leveraging the power of Elasticsearch.
 * It adheres to the Single Responsibility Principle by focusing solely on the search functionality
 * and its interaction with the Elasticsearch backend.
 * 
 * @notes
 * - This screen will interface with an `ElasticsearchService.ts` (to be created in `src/services/`) 
 *   which will encapsulate the actual Elasticsearch query logic.
 * - Queries will need to be structured based on user input, potentially allowing for filters,
 *   sorting, and full-text search capabilities.
 * - Display of search results will need to be versatile to handle different data types.
 * - Consider implementing features like search suggestions or autocomplete.
 * 
 * @example
 * <SearchWithElasticsearchScreen /> 
 * 
 * @see ../services/ElasticsearchService.ts 
 */

interface SearchResult {
  id: string;
  type: 'recipe' | 'ingredient' | 'user'; // Example types
  title: string;
  summary: string;
}

interface SearchWithElasticsearchScreenProps {
  // Define props here
}

const SearchWithElasticsearchScreen: React.FC<SearchWithElasticsearchScreenProps> = (props) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = async () => {
    // In a real app, this would call ElasticsearchService.search(query)
    console.log('Searching for:', query);
    // Dummy results for now
    setResults([
      { id: '1', type: 'recipe', title: 'Found Recipe 1', summary: 'A recipe matching your query.' },
      { id: '2', type: 'ingredient', title: 'Found Ingredient A', summary: 'An ingredient from the database.' },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Elasticsearch Search</Text>
      <TextInput
        style={styles.input}
        placeholder="Search recipes, ingredients, users..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text style={styles.resultType}>{item.type.toUpperCase()}</Text>
            <Text style={styles.resultTitle}>{item.title}</Text>
            <Text>{item.summary}</Text>
          </View>
        )}
        style={styles.resultsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  resultsList: {
    marginTop: 16,
  },
  resultItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  resultType: {
    fontSize: 12,
    color: '#555',
    marginBottom: 4,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default SearchWithElasticsearchScreen;
