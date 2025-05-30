// src/expo_app_specific/index.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { Redirect } from 'expo-router'; // Keep for potential future use if direct redirect is needed

/**
 * @file index.tsx (in src/expo_app_specific)
 * @brief Default screen for the root route ('/') within this Expo Router group.
 * 
 * @description
 * This screen is the entry point for the '/' path within the 'src/expo_app_specific' directory group.
 * With RootNavigator now rendered in `src/expo_app_specific/_layout.tsx`, this specific screen
 * might not be directly visible if RootNavigator immediately navigates to a different initial screen
 * defined within AuthNavigator or AppNavigator (e.g., AppNavigator might have an initialRouteName).
 * 
 * This component can be used as a very brief loading/splash indicator or for a redirect if needed.
 * For now, it simply displays a "Loading Application..." message. The actual UI will be
 * determined by the initial route of the navigator chosen by RootNavigator.
 */
export default function AppRootIndexScreen() {
  // The RootNavigator in _layout.tsx handles the main navigation view.
  // This component is the default for the '/' path of this directory group.
  // If AppNavigator's initialRouteName is, for example, 'Main' or 'IngredientInput',
  // and those screens are defined within AppNavigator, they will be displayed.
  // A <Redirect href="/some-route" /> could be used here if an explicit client-side
  // redirect from '/' to a specific named route defined in your navigators is desired,
  // but often the navigator's own `initialRouteName` handles this.

  return (
    <View style={styles.container}>
      <Text>Loading Application...</Text>
      {/* This screen will likely be quickly replaced by the initial screen
          of AuthNavigator or AppNavigator, depending on auth state. */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Optional: set a background color
  },
  text: {
    fontSize: 18,
    color: '#333',
  }
});
