// src/components/molecules/IngredientCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, ViewStyle, ImageSourcePropType } from 'react-native';
// import Button from '../atoms/Button'; // Example if you need a button atom

/**
 * @file IngredientCard.tsx
 * @brief A molecule component to display information about a single ingredient.
 * 
 * @description
 * This component is responsible for rendering a visual representation of an ingredient,
 * typically including its name and an image. It is a "molecule" in Atomic Design as it's
 * composed of smaller atomic elements (like Text and Image).
 * It adheres to the Single Responsibility Principle by focusing on displaying one ingredient.
 * 
 * @example
 * <IngredientCard ingredient={{ name: 'Tomato', image: require('./tomato.png') }} />
 */

interface Ingredient {
  name: string;
  image?: ImageSourcePropType; // Optional image for the ingredient
  quantity?: string; // Optional quantity
  // Add other relevant ingredient properties
}

interface IngredientCardProps {
  /** The ingredient data to display. */
  ingredient: Ingredient;
  /** Optional custom styles for the card container. */
  style?: ViewStyle;
  /** Optional action when the card is pressed */
  onPress?: () => void;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ ingredient, style, onPress }) => {
  return (
    <View style={[styles.card, style]} onTouchEnd={onPress}>
      {ingredient.image && (
        <Image source={ingredient.image} style={styles.image} />
      )}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{ingredient.name}</Text>
        {ingredient.quantity && (
          <Text style={styles.quantity}>{ingredient.quantity}</Text>
        )}
        {/* Other ingredient details can be added here */}
      </View>
      {/* Example of including an atom:
      {onPress && <Button title="View" onPress={onPress} />} 
      */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    flexDirection: 'row', // Align image and text side-by-side
    alignItems: 'center', // Center items vertically
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 10, // Space between cards
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30, // Make it circular
    marginRight: 15,
    backgroundColor: '#f0f0f0', // Placeholder background if image is missing
  },
  infoContainer: {
    flex: 1, // Take remaining space
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  quantity: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  }
});

export default IngredientCard;
