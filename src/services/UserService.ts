// src/services/UserService.ts

/**
 * @file UserService.ts
 * @brief This service is responsible for managing user authentication and user profile data.
 * 
 * @description
 * This service handles all API calls related to user authentication, including login, signup, and logout.
 * It also manages CRUD (Create, Read, Update, Delete) operations for user profile information.
 * It adheres to the Single Responsibility Principle by focusing solely on user authentication and data management.
 * 
 * @example
 * // How to import and use
 * import UserService from './UserService';
 * // const user = await UserService.login({ email: 'test@example.com', password: 'password' });
 * // const profile = await UserService.getUserProfile();
 */

// Define basic types for User, Credentials, UserInfo, UserProfile (can be expanded)
interface Credentials {
  email: string;
  password_plain: string; // Or other auth method
}

interface User {
  id: string;
  email: string;
  name?: string;
  token?: string; // Auth token (e.g., JWT)
}

interface UserInfo { // For signup
  email: string;
  password_plain: string;
  name: string;
  // other signup fields
}

interface UserProfile {
  id: string;
  name: string;
  email: string;
  bio?: string;
  dietaryRestrictions?: string[];
  allergies?: string[];
  // other profile fields
}

const API_BASE_URL = 'https://your-api-domain.com/api/v1/users'; // Placeholder for your backend user API

const UserService = {
  /**
   * Logs in a user with the provided credentials.
   * @async
   * @param {Credentials} credentials - The user's login credentials.
   * @returns {Promise<User>} A promise that resolves to the user object, including an auth token.
   * @throws {Error} If login fails (e.g., invalid credentials, network error).
   */
  login: async (credentials: Credentials): Promise<User> => {
    console.log('UserService.login called with credentials:', credentials.email);
    // Example:
    // const response = await fetch(`${API_BASE_URL}/login`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(credentials),
    // });
    // if (!response.ok) {
    //   const errorData = await response.json().catch(() => ({ message: 'Login failed' }));
    //   throw new Error(errorData.message || 'Login failed due to an unknown error');
    // }
    // return response.json(); // Expected to return User object with token
    return Promise.resolve({ id: 'user123', email: credentials.email, name: 'Test User', token: 'fake-jwt-token' }); // Placeholder
  },

  /**
   * Signs up a new user with the provided information.
   * @async
   * @param {UserInfo} userInfo - The information for the new user.
   * @returns {Promise<User>} A promise that resolves to the newly created user object.
   * @throws {Error} If signup fails (e.g., email already exists, validation error).
   */
  signup: async (userInfo: UserInfo): Promise<User> => {
    console.log('UserService.signup called for user:', userInfo.email);
    // Example:
    // const response = await fetch(`${API_BASE_URL}/signup`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(userInfo),
    // });
    // if (!response.ok) {
    //   const errorData = await response.json().catch(() => ({ message: 'Signup failed' }));
    //   throw new Error(errorData.message || 'Signup failed due to an unknown error');
    // }
    // return response.json(); // Expected to return User object
    return Promise.resolve({ id: 'user124', email: userInfo.email, name: userInfo.name, token: 'new-fake-jwt-token' }); // Placeholder
  },

  /**
   * Fetches the profile of the currently authenticated user.
   * Requires an auth token to be sent in headers (handled by an interceptor or directly).
   * @async
   * @returns {Promise<UserProfile>} A promise that resolves to the user's profile data.
   * @throws {Error} If fetching fails (e.g., not authenticated, network error).
   */
  getUserProfile: async (): Promise<UserProfile> => {
    console.log('UserService.getUserProfile called');
    // Example:
    // const token = localStorage.getItem('authToken'); // Or get from a secure store / state manager
    // const response = await fetch(`${API_BASE_URL}/profile`, {
    //   headers: { 'Authorization': `Bearer ${token}` },
    // });
    // if (!response.ok) {
    //   throw new Error('Failed to fetch user profile');
    // }
    // return response.json();
    return Promise.resolve({
      id: 'user123',
      name: 'Test User',
      email: 'test@example.com',
      bio: 'Loves cooking!',
      dietaryRestrictions: ['Vegetarian'],
      allergies: ['Nuts'],
    }); // Placeholder
  },

  /**
   * Updates the profile of the currently authenticated user.
   * Requires an auth token.
   * @async
   * @param {Partial<UserProfile>} profileData - The profile data to update.
   * @returns {Promise<UserProfile>} A promise that resolves to the updated user profile.
   * @throws {Error} If updating fails.
   */
  updateUserProfile: async (profileData: Partial<UserProfile>): Promise<UserProfile> => {
    console.log('UserService.updateUserProfile called with data:', profileData);
    // Example:
    // const token = localStorage.getItem('authToken');
    // const response = await fetch(`${API_BASE_URL}/profile`, {
    //   method: 'PUT',
    //   headers: { 
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${token}`,
    //   },
    //   body: JSON.stringify(profileData),
    // });
    // if (!response.ok) {
    //   throw new Error('Failed to update user profile');
    // }
    // return response.json();
    const currentProfile = await UserService.getUserProfile(); // Simulate update
    return Promise.resolve({ ...currentProfile, ...profileData }); // Placeholder
  },
  
  /**
   * Logs out the current user.
   * This might involve clearing local tokens and/or calling a backend logout endpoint.
   * @async
   * @returns {Promise<void>}
   */
  logout: async (): Promise<void> => {
    console.log('UserService.logout called');
    // Example:
    // localStorage.removeItem('authToken');
    // Optionally call a backend endpoint:
    // await fetch(`${API_BASE_URL}/logout`, { method: 'POST', headers: { 'Authorization': `Bearer ${token}` } });
    return Promise.resolve();
  }

  // Add other related functions like deleteAccount, requestPasswordReset, etc.
};

export default UserService;
