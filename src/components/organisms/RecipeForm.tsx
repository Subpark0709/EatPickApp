// src/components/organisms/RecipeForm.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import Button from '../atoms/Button'; // Assuming Button atom exists
// import IngredientInput from '../molecules/IngredientInput'; // Example molecule for adding ingredients

/**
 * @file RecipeForm.tsx
 * @brief An organism component for creating or editing recipes.
 * 
 * @description
 * This component provides a complete form for users to input recipe details,
 * including title, description, ingredients, instructions, etc. It is an "organism"
 * in Atomic Design, composed of various atoms and molecules (e.g., InputFields, Buttons,
 * potentially a list of IngredientInputs).
 * It adheres to the Single Responsibility Principle by managing the state, validation,
 * and submission logic for a recipe.
 * 
 * @example
 * <RecipeForm onSubmit={(recipeData) => console.log(recipeData)} />
 */

interface RecipeFormData {
  title: string;
  description: string;
  ingredients: Array<{ name: string; quantity: string }>; // Example structure
  instructions: string;
  prepTime?: string;
  cookTime?: string;
  // Add other recipe fields
}

interface RecipeFormProps {
  /** Initial data for editing an existing recipe. If not provided, form is for creation. */
  initialData?: RecipeFormData;
  /** Function to be called when the form is submitted with valid data. */
  onSubmit: (data: RecipeFormData) => void;
  /** Optional text for the submit button. Defaults to "Submit". */
  submitButtonText?: string;
}

const RecipeForm: React.FC<RecipeFormProps> = ({ initialData, onSubmit, submitButtonText = "Submit Recipe" }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  // For simplicity, ingredients and instructions are simple text inputs here.
  // In a real app, ingredients might be a list of molecules.
  const [ingredientsText, setIngredientsText] = useState(
    initialData?.ingredients.map(i => `${i.name} (${i.quantity})`).join('\n') || ''
  );
  const [instructions, setInstructions] = useState(initialData?.instructions || '');

  const handleSubmit = () => {
    // Basic validation (can be expanded with a library like Yup)
    if (!title.trim() || !instructions.trim() || !ingredientsText.trim()) {
      alert('Please fill in title, ingredients, and instructions.');
      return;
    }

    // Parse ingredientsText back into structured data (basic example)
    const parsedIngredients = ingredientsText.split('\n').map(line => {
      const match = line.match(/^(.*?)\s*\((.*?)\)$/);
      return match ? { name: match[1].trim(), quantity: match[2].trim() } : { name: line.trim(), quantity: '' };
    }).filter(ing => ing.name);


    const formData: RecipeFormData = {
      title,
      description,
      ingredients: parsedIngredients,
      instructions,
      // prepTime, cookTime, etc.
    };
    onSubmit(formData);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Recipe Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="e.g., Delicious Pasta Bake"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={description}
        onChangeText={setDescription}
        placeholder="A short summary of your recipe"
        multiline
      />

      <Text style={styles.label}>Ingredients (one per line, e.g., Flour (2 cups))</Text>
      <TextInput
        style={[styles.input, styles.multilineInput, styles.ingredientsInput]}
        value={ingredientsText}
        onChangeText={setIngredientsText}
        placeholder="Flour (2 cups)\nSugar (1 cup)\nEggs (3)"
        multiline
      />
      {/* Here you might map over an array of ingredient molecule components for better UX */}

      <Text style={styles.label}>Instructions</Text>
      <TextInput
        style={[styles.input, styles.multilineInput, styles.instructionsInput]}
        value={instructions}
        onChangeText={setInstructions}
        placeholder="Step 1: Mix ingredients...\nStep 2: Bake at 350°F..."
        multiline
      />

      <Button title={submitButtonText} onPress={handleSubmit} style={styles.submitButton} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  multilineInput: {
    minHeight: 80,
    textAlignVertical: 'top', // For Android
  },
  ingredientsInput: {
    minHeight: 100,
  },
  instructionsInput: {
    minHeight: 120,
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#28a745', // A green color for submit
  }
});

export default RecipeForm;
