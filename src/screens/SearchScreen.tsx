import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const categories = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Dessert',
  'Snacks',
  'Vegetarian',
  'Vegan',
  'Gluten-Free'
];

const recentSearches = [
  'Pasta Carbonara',
  'Chicken Curry',
  'Vegetable Stir Fry',
  'Chocolate Cake',
  'Salad'
];

const SearchScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search recipes..."
          placeholderTextColor="#886364"
        />
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {categories.map((category: string, index: number) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Recent Searches */}
      <Text style={styles.sectionTitle}>Recent Searches</Text>
      <View style={styles.recentSearchesContainer}>
        {recentSearches.map((search: string, index: number) => (
          <TouchableOpacity key={index} style={styles.recentSearchItem}>
            <Text style={styles.recentSearchText}>{search}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181111',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181111',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  searchIcon: {
    fontSize: 20,
    color: '#886364',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#181111',
  },
  categoriesContainer: {
    padding: 16,
  },
  categoryItem: {
    padding: 10,
  },
  categoryText: {
    fontSize: 16,
    color: '#181111',
  },
  recentSearchesContainer: {
    padding: 16,
  },
  recentSearchItem: {
    padding: 10,
  },
  recentSearchText: {
    fontSize: 16,
    color: '#181111',
  },
});

export default SearchScreen; 