// src/expo_app_specific/_layout.tsx
import React from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated'; // Import for side effects
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useColorScheme } from 'src/hooks/useColorScheme'; // Updated path
import RootNavigator from 'src/navigation/RootNavigator'; // Updated path

/**
 * @file _layout.tsx (in src/expo_app_specific)
 * @brief Root layout file for Expo Router.
 * 
 * @description
 * This file serves as the entry point for the Expo Router.
 * It renders the RootNavigator, which handles the app's navigation logic
 * (switching between Auth and App navigators).
 * GestureHandlerRootView is added for compatibility with react-navigation.
 * It also keeps existing ThemeProvider and font loading logic.
 */
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('src/assets/fonts/SpaceMono-Regular.ttf'), // Updated path
  });

  if (!loaded) {
    // Font loading logic
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator />
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
