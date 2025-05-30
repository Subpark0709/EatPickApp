// src/navigation/RootNavigator.tsx
import React, { useState } from 'react';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
// import { useAuth } from '../store/hooks/useAuth'; // Example of a custom hook to get auth state
// To use a custom hook from the store, ensure your Redux store is set up and a context provider is available if needed,
// or that the hook correctly connects to the store (e.g. using useSelector from react-redux).

/**
 * @file RootNavigator.tsx
 * @brief Determines which navigator to display based on authentication state.
 * 
 * @description
 * This component acts as the main switch for navigation trees. It renders
 * the AuthNavigator for unauthenticated users and AppNavigator for authenticated users.
 * It also wraps the chosen navigator in NavigationContainer, which is essential for
 * React Navigation to function. The authentication state is currently simulated
 * but should be replaced with actual logic from a global state (e.g., Redux, Zustand) or context.
 */
const RootNavigator: React.FC = () => {
  // Simulate authentication state - replace with actual auth logic from store/context later
  // Defaulting to true allows direct testing of AppNavigator and its screens.
  // Set to false to test AuthNavigator.
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  // Example of how you might integrate with a global state or async storage for auth:
  // const { user, isLoadingAuth } = useAuth(); // Assuming useAuth() provides user and loading state
  // useEffect(() => {
  //   // This effect would run when `user` or `isLoadingAuth` changes from your auth hook/store
  //   if (!isLoadingAuth) {
  //     setIsAuthenticated(!!user); // Update based on whether a user object exists
  //   }
  // }, [user, isLoadingAuth]);

  // if (isLoadingAuth) {
  //   // Optionally return a loading spinner or splash screen while checking auth
  //   return <View><Text>Loading authentication...</Text></View>;
  // }

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return isAuthenticated ? <AppNavigator /> : <AuthNavigator onLogin={handleLogin} />;
};

export default RootNavigator;
