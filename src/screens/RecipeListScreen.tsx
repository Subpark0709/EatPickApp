// src/screens/RecipeListScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

/**
 * @file RecipeListScreen.tsx
 * @brief This screen is responsible for displaying a list of recommended recipes.
 * 
 * @description
 * This screen displays recipes that are recommended based on the ingredients provided by the user.
 * It adheres to the Single Responsibility Principle by focusing solely on displaying these recipes.
 * 
 * @notes
 * - Recipe data will likely be received via props or from a global state management solution (e.g., Redux, Zustand).
 * - The list will be scrollable and each item should be pressable to navigate to `RecipeDetailScreen`.
 * - Consider implementing filtering or sorting options for the recipe list.
 * 
 * @example
 * <RecipeListScreen recommendedRecipes={recipes} /> 
 * 
 * @see RecipeDetailScreen.tsx
 */

interface RecipeItem {
  id: string;
  name: string;
  // Add other relevant recipe summary properties
}

interface RecipeListScreenProps {
  recommendedRecipes: RecipeItem[];
  // Define other props here, e.g., onSelectRecipe: (recipeId: string) => void;
}

const RecipeListScreen: React.FC<RecipeListScreenProps> = ({ recommendedRecipes }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended Recipes</Text>
      <FlatList
        data={recommendedRecipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recipeItem}>
            <Text>{item.name}</Text>
            {/* Display other recipe summary info here */}
          </View>
        )}
      />
      {/* Future UI elements for filtering or interaction will go here */}
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
  recipeItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default RecipeListScreen;
