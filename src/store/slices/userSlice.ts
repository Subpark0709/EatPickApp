// src/store/slices/userSlice.ts

/**
 * @file userSlice.ts
 * @brief Redux Toolkit slice for managing user-related state.
 * 
 * @description
 * This slice handles the global state for user authentication and profile information.
 * This includes the user's authentication status (e.g., logged in, logged out),
 * the user's profile data, loading indicators for authentication or profile update processes,
 * and any error messages related to user operations.
 * It adheres to the Single Responsibility Principle by focusing solely on user-related state.
 */

import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// Assuming User and UserProfile models/interfaces might exist
// import { User, UserProfile } from '../../models/User'; // Adjust path as needed
// Assuming UserService is used for API calls
// import UserService, { Credentials } from '../../services/UserService'; // Adjust path
import { RootState } from '../index'; // To type selector functions

// Define a type for the user slice state
interface UserState {
  currentUser: any | null; // Replace 'any' with your User model/interface
  isAuthenticated: boolean;
  isLoading: boolean; // For auth processes like login/signup or profile fetching
  error: string | null | undefined;
  userProfile: any | null; // Replace 'any' with UserProfile
}

// Define the initial state
const initialState: UserState = {
  currentUser: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  userProfile: null,
};

// Example Async Thunk for user login
// Note: Ensure UserService, Credentials, and User types are properly defined and imported
/*
export const loginUser = createAsyncThunk(
  'user/login', // Action type prefix
  async (credentials: Credentials, { dispatch, rejectWithValue }) => {
    try {
      // const user = await UserService.login(credentials);
      // dispatch(fetchUserProfile(user.id)); // Optionally fetch profile right after login
      // return user; // Payload for the fulfilled action
      return { id: 'mockUser', email: credentials.email, token: 'mockToken' }; // Placeholder
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || err.message || 'Login failed');
    }
  }
);
*/

// Example Async Thunk for fetching user profile
/*
export const fetchUserProfile = createAsyncThunk(
  'user/fetchProfile',
  async (userId: string, { rejectWithValue }) => { // Or token could be taken from state if already there
    try {
      // const userProfile = await UserService.getUserProfile(userId); // Assuming service takes userId or uses stored token
      // return userProfile;
      return { id: userId, name: 'Mock User', email: 'mock@example.com' }; // Placeholder
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || err.message || 'Failed to fetch profile');
    }
  }
);
*/

const userSlice = createSlice({
  name: 'user', // Slice name in the root state
  initialState,
  // Reducers for synchronous actions
  reducers: {
    setUser: (state, action: PayloadAction<any>) => { // Replace 'any' with User model
      state.currentUser = action.payload;
      state.isAuthenticated = !!action.payload; // True if payload is not null/undefined
      state.isLoading = false;
      state.error = null;
    },
    setUserProfile: (state, action: PayloadAction<any>) => { // Replace 'any' with UserProfile model
      state.userProfile = action.payload;
      state.isLoading = false;
    },
    clearUser: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.userProfile = null;
      state.isLoading = false;
      state.error = null;
    },
    setAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setAuthError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
  // Reducers for async actions handled by createAsyncThunk
  // extraReducers: (builder) => {
  //   builder
  //     // Login User
  //     .addCase(loginUser.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = null;
  //     })
  //     .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => { // Replace 'any' with User
  //       state.isLoading = false;
  //       state.currentUser = action.payload;
  //       state.isAuthenticated = true;
  //     })
  //     .addCase(loginUser.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload as string;
  //       state.currentUser = null;
  //       state.isAuthenticated = false;
  //     })
  //     // Fetch User Profile
  //     .addCase(fetchUserProfile.pending, (state) => {
  //       state.isLoading = true; // Or a specific profileLoading state
  //     })
  //     .addCase(fetchUserProfile.fulfilled, (state, action: PayloadAction<any>) => { // Replace 'any' with UserProfile
  //       state.isLoading = false;
  //       state.userProfile = action.payload;
  //     })
  //     .addCase(fetchUserProfile.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload as string; // Or a specific profileError state
  //     });
  // },
});

// Export synchronous actions
export const { 
  setUser, 
  setUserProfile,
  clearUser, 
  setAuthLoading, 
  setAuthError 
} = userSlice.actions;

// Export selectors
export const selectCurrentUser = (state: RootState) => state.user.currentUser;
export const selectIsAuthenticated = (state: RootState) => state.user.isAuthenticated;
export const selectUserProfile = (state: RootState) => state.user.userProfile;
export const selectUserLoading = (state: RootState) => state.user.isLoading;
export const selectUserError = (state: RootState) => state.user.error;

// Export the reducer as default
export default userSlice.reducer;
