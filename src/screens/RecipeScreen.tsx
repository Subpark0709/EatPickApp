import React from 'react';
import { Text, View, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

// Minimal mock data for testing
const mockRecipes = [
  { id: 'r1', name: '테스트 레시피 1' },
  { id: 'r2', name: '테스트 레시피 2' },
];

export default function RecipeScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const currentColors = Colors[colorScheme];

  console.log('RecipeScreen mockRecipes:', mockRecipes); // Test console log

  return (
    <View style={[styles.container, { backgroundColor: currentColors.background }]}>
      <Text style={[styles.text, { color: currentColors.text }]}>레시피 화면 (테스트 수정)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
  },
});