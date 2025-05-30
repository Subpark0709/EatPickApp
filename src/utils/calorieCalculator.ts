// src/utils/calorieCalculator.ts

/**
 * @file calorieCalculator.ts
 * @brief Utility functions for basic client-side calorie estimations or data formatting.
 * 
 * @description
 * This module provides helper functions related to calorie and nutritional data.
 * It's important to clarify that primary nutrition data and complex calculations 
 * should ideally come from a dedicated backend service or a specialized third-party API 
 * (e.g., Edamam, Nutritionix) to ensure accuracy and access to a comprehensive food database.
 * The utilities here might be used for very simple estimations based on user input,
 * formatting data received from APIs, or performing minor calculations on already fetched data.
 * It adheres to the Single Responsibility Principle by focusing on calorie/nutrition-related utility functions.
 * 
 * @example
 * import { formatNutritionData, simpleEstimateCalories } from './calorieCalculator';
 * 
 * const ingredients = [{ name: 'Apple', quantity: 1, unit: 'medium' }];
 * const estimatedCals = simpleEstimateCalories(ingredients);
 * console.log(estimatedCals);
 * 
 * const apiData = { "totalNutrients": { "ENERC_KCAL": { "label": "Energy", "quantity": 200, "unit": "kcal" } } };
 * const formatted = formatNutritionData(apiData);
 * console.log(formatted.calories);
 */

// Define basic interfaces for ingredients and formatted nutrition data
export interface IngredientInput {
  name: string;
  quantity: number;
  unit: string; // e.g., 'g', 'ml', 'oz', 'cup', 'item'
  // Could add more fields like foodId from a database if available
}

export interface FormattedNutrition {
  calories?: number;
  protein?: number; // in grams
  carbs?: number;   // in grams
  fat?: number;     // in grams
  // Add other relevant nutrients as needed
}

/**
 * A very simplistic client-side calorie estimation based on a predefined map.
 * This is a placeholder and NOT a substitute for a proper nutrition API.
 * @param {IngredientInput[]} ingredients - An array of ingredients provided by the user.
 * @returns {number} An estimated total calorie count.
 */
export const simpleEstimateCalories = (ingredients: IngredientInput[]): number => {
  console.log('Estimating calories for ingredients:', ingredients);
  let totalCalories = 0;
  // Super simple example map (calories per unit for some items)
  const calorieMap: { [key: string]: { perUnit: string; calories: number } } = {
    'apple': { perUnit: 'medium', calories: 95 },
    'banana': { perUnit: 'medium', calories: 105 },
    'chicken breast': { perUnit: '100g', calories: 165 },
    'rice': { perUnit: '1cup_cooked', calories: 205 },
  };

  ingredients.forEach(ing => {
    const key = ing.name.toLowerCase();
    const mapEntry = calorieMap[key];
    if (mapEntry) {
      // This logic needs to be much more robust for real-world use (unit conversion, quantity scaling)
      // For now, if unit matches (very loosely), add calories multiplied by quantity
      if (ing.unit.toLowerCase().includes(mapEntry.perUnit.split('_')[0])) {
         totalCalories += mapEntry.calories * ing.quantity;
      }
    }
  });
  return totalCalories;
};

/**
 * Formats nutrition data received from an external API into a simpler structure.
 * The structure of `apiResponse` will depend heavily on the specific API used.
 * @param {any} apiResponse - The raw response object from a nutrition API.
 * @returns {FormattedNutrition} A structured object with key nutritional information.
 */
export const formatNutritionData = (apiResponse: any): FormattedNutrition => {
  console.log('Formatting API nutrition data:', apiResponse);
  const formatted: FormattedNutrition = {};

  // Example for an Edamam-like structure (this needs to be adapted to the actual API)
  // if (apiResponse?.totalNutrients?.ENERC_KCAL) {
  //   formatted.calories = Math.round(apiResponse.totalNutrients.ENERC_KCAL.quantity);
  // }
  // if (apiResponse?.totalNutrients?.PROCNT) {
  //   formatted.protein = Math.round(apiResponse.totalNutrients.PROCNT.quantity);
  // }
  // if (apiResponse?.totalNutrients?.CHOCDF) { // CHOCDF usually means total carbohydrates
  //   formatted.carbs = Math.round(apiResponse.totalNutrients.CHOCDF.quantity);
  // }
  // if (apiResponse?.totalNutrients?.FAT) {
  //   formatted.fat = Math.round(apiResponse.totalNutrients.FAT.quantity);
  // }

  // Placeholder if no data or different structure
  if (Object.keys(formatted).length === 0) {
    return { calories: apiResponse?.calories || 0, protein: 0, carbs: 0, fat: 0 }; // Basic fallback
  }

  return formatted;
};

/**
 * Calculates total nutrition for a list of ingredients, each having FormattedNutrition.
 * @param {Array<{ item: IngredientInput, nutrition: FormattedNutrition }>} ingredientsWithNutrition
 * @returns {FormattedNutrition} Aggregated nutritional information.
 */
export const sumNutritionForRecipe = (
  ingredientsWithNutrition: Array<{ item: IngredientInput, nutrition: FormattedNutrition }>
): FormattedNutrition => {
  const total: FormattedNutrition = { calories: 0, protein: 0, carbs: 0, fat: 0 };
  ingredientsWithNutrition.forEach(ing => {
    total.calories = (total.calories || 0) + (ing.nutrition.calories || 0);
    total.protein = (total.protein || 0) + (ing.nutrition.protein || 0);
    total.carbs = (total.carbs || 0) + (ing.nutrition.carbs || 0);
    total.fat = (total.fat || 0) + (ing.nutrition.fat || 0);
  });
  return total;
};


export default {
  simpleEstimateCalories,
  formatNutritionData,
  sumNutritionForRecipe,
};
