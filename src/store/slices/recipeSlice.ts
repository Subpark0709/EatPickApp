// src/store/slices/recipeSlice.ts

/**
 * @file recipeSlice.ts
 * @brief Redux Toolkit slice for managing recipe-related state.
 * 
 * @description
 * This slice handles the global state for recipes. This includes lists of recipes 
 * (e.g., fetched based on ingredients, search results), details of a currently selected recipe,
 * loading indicators for asynchronous operations, and any error messages related to recipe data.
 * It adheres to the Single Responsibility Principle by focusing solely on recipe-related state.
 */

import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// It's good practice to define interfaces for your data structures
// For example, if you have a Recipe model:
// import { Recipe, RecipeDetail } from '../../models/Recipe'; // Adjust path as needed
// And if you use RecipeService for API calls:
// import RecipeService from '../../services/RecipeService'; // Adjust path as needed
import { RootState } from '../index'; // To type selector functions

// Define a type for the slice state
interface RecipeState {
  recipeList: any[]; // Replace 'any' with your Recipe model/interface, e.g., Recipe[]
  currentRecipe: any | null; // Replace 'any' with RecipeDetail or similar
  isLoading: boolean;
  error: string | null | undefined; // Can be string for error messages, or null/undefined
}

// Define the initial state using that type
const initialState: RecipeState = {
  recipeList: [],
  currentRecipe: null,
  isLoading: false,
  error: null,
};

// Example Async Thunk for fetching recipes by ingredients
// Note: Ensure RecipeService and Recipe types are properly defined and imported
/*
export const fetchRecipesByIngredients = createAsyncThunk(
  'recipes/fetchByIngredients', // Action type prefix
  async (ingredients: string[], { rejectWithValue }) => {
    try {
      // const recipes = await RecipeService.getRecipesByIngredients(ingredients);
      // return recipes; // Payload for the fulfilled action
      return [{id: '1', name: 'Mock Recipe'}]; // Placeholder if service is not ready
    } catch (err: any) {
      // Use rejectWithValue to return a custom error payload
      return rejectWithValue(err.response?.data?.message || err.message || 'Failed to fetch recipes');
    }
  }
);
*/

// Example Async Thunk for fetching recipe details
/*
export const fetchRecipeDetails = createAsyncThunk(
  'recipes/fetchDetails', // Action type prefix
  async (recipeId: string, { rejectWithValue }) => {
    try {
      // const recipeDetail = await RecipeService.getRecipeDetails(recipeId);
      // return recipeDetail; // Payload for the fulfilled action
      return {id: recipeId, name: 'Mock Detail Recipe', ingredients: []}; // Placeholder
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || err.message || 'Failed to fetch recipe details');
    }
  }
);
*/

const recipeSlice = createSlice({
  name: 'recipes', // This will be the slice name in the root state
  initialState,
  // Reducers for synchronous actions
  reducers: {
    setRecipeList: (state, action: PayloadAction<any[]>) => { // Replace 'any'
      state.recipeList = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setCurrentRecipe: (state, action: PayloadAction<any | null>) => { // Replace 'any'
      state.currentRecipe = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setRecipesLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setRecipesError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearRecipeState: (state) => {
      state.recipeList = [];
      state.currentRecipe = null;
      state.isLoading = false;
      state.error = null;
    }
  },
  // Reducers for async actions handled by createAsyncThunk
  // extraReducers: (builder) => {
  //   builder
  //     // Handling fetchRecipesByIngredients
  //     .addCase(fetchRecipesByIngredients.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchRecipesByIngredients.fulfilled, (state, action: PayloadAction<any[]>) => { // Replace 'any'
  //       state.isLoading = false;
  //       state.recipeList = action.payload;
  //     })
  //     .addCase(fetchRecipesByIngredients.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload as string; // Payload from rejectWithValue
  //     })
  //     // Handling fetchRecipeDetails
  //     .addCase(fetchRecipeDetails.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = null;
  //     })
  //     .addCase(fetchRecipeDetails.fulfilled, (state, action: PayloadAction<any>) => { // Replace 'any'
  //       state.isLoading = false;
  //       state.currentRecipe = action.payload;
  //     })
  //     .addCase(fetchRecipeDetails.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload as string; // Payload from rejectWithValue
  //     });
  // },
});

// Export synchronous actions
export const { 
  setRecipeList, 
  setCurrentRecipe, 
  setRecipesLoading, 
  setRecipesError,
  clearRecipeState
} = recipeSlice.actions;

// Export selectors to easily access data from this slice
export const selectRecipeList = (state: RootState) => state.recipes.recipeList;
export const selectCurrentRecipe = (state: RootState) => state.recipes.currentRecipe;
export const selectRecipesLoading = (state: RootState) => state.recipes.isLoading;
export const selectRecipesError = (state: RootState) => state.recipes.error;

// Export the reducer as default
export default recipeSlice.reducer;
