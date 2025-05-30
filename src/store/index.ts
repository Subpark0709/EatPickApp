// src/store/index.ts

/**
 * @file index.ts
 * @brief Configures and exports the Redux store for global state management.
 * 
 * @description
 * This file sets up the Redux Toolkit store, combining all reducers (slices)
 * and applying any necessary middleware (e.g., for async operations like thunks). 
 * It serves as the single source of truth for the application's global state.
 * This setup is specifically for Redux Toolkit. If another state management library
 * like Zustand were used, this file would configure and export that specific store.
 */

import { configureStore } from '@reduxjs/toolkit';
// Import reducers from slices once they are created
// import recipeReducer from './slices/recipeSlice';
// import userReducer from './slices/userSlice';
// import { logger } from 'redux-logger'; // Example for adding middleware

const store = configureStore({
  reducer: {
    // Slices will be added here once defined, e.g.:
    // recipes: recipeReducer,
    // user: userReducer,
    // To avoid errors before slices are created, we can use a placeholder:
    placeholder: (state = {}) => state, 
  },
  // Additional middleware can be added here.
  // Redux Toolkit includes thunk middleware by default.
  // To add more middleware, use getDefaultMiddleware:
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // Example with redux-logger
});

/**
 * @typedef RootState
 * @description Type representing the root state of the Redux store.
 * This is inferred from the store itself, so it updates automatically as slices are added.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * @typedef AppDispatch
 * @description Type representing the dispatch function of the Redux store.
 * This is used to dispatch actions, including thunks.
 */
export type AppDispatch = typeof store.dispatch;

export default store;
