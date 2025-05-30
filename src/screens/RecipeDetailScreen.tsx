// src/screens/RecipeDetailScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

/**
 * @file RecipeDetailScreen.tsx
 * @brief This screen is responsible for displaying detailed information about a selected recipe.
 * 
 * @description
 * This screen shows comprehensive details for a recipe including its ingredients, preparation steps,
 * cooking time, nutritional information, and user ratings/reviews.
 * It adheres to the Single Responsibility Principle by focusing solely on presenting the details of a single recipe.
 * 
 * @notes
 * - Full recipe details might be fetched from an API or a local database using a recipe ID.
 * - Nutritional information display might require specific formatting or components.
 * - User interactions like saving a recipe or adding a rating could be initiated from this screen.
 * 
 * @example
 * <RecipeDetailScreen recipeId="123" /> 
 * 
 * @see RecipeListScreen.tsx
 */

interface RecipeDetail {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  cookingTime: string;
  nutritionalInfo: {
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
  };
  // Add other relevant recipe detail properties
}

interface RecipeDetailScreenProps {
  recipeId: string; // Or the full recipe object could be passed as a prop
  // Define other props here
}

const RecipeDetailScreen: React.FC<RecipeDetailScreenProps> = (props) => {
  // In a real app, you would fetch recipe details based on props.recipeId
  const recipe: RecipeDetail = { // Dummy data
    id: props.recipeId,
    name: "Sample Recipe",
    ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3"],
    instructions: ["Step 1", "Step 2", "Step 3"],
    cookingTime: "30 minutes",
    nutritionalInfo: { calories: "500 kcal", protein: "30g", carbs: "50g", fat: "20g" }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>
      
      <Text style={styles.sectionTitle}>Ingredients:</Text>
      {recipe.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.listItem}>{ingredient}</Text>
      ))}
      
      <Text style={styles.sectionTitle}>Instructions:</Text>
      {recipe.instructions.map((instruction, index) => (
        <Text key={index} style={styles.listItem}>{instruction}</Text>
      ))}
      
      <Text style={styles.sectionTitle}>Cooking Time:</Text>
      <Text style={styles.listItem}>{recipe.cookingTime}</Text>
      
      <Text style={styles.sectionTitle}>Nutritional Information:</Text>
      <Text style={styles.listItem}>Calories: {recipe.nutritionalInfo.calories}</Text>
      <Text style={styles.listItem}>Protein: {recipe.nutritionalInfo.protein}</Text>
      <Text style={styles.listItem}>Carbs: {recipe.nutritionalInfo.carbs}</Text>
      <Text style={styles.listItem}>Fat: {recipe.nutritionalInfo.fat}</Text>
      
      {/* Future UI elements for ratings, saving, etc. will go here */}
    </ScrollView>
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'semibold',
    marginTop: 12,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default RecipeDetailScreen;
