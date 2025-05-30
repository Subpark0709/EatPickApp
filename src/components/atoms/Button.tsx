// src/components/atoms/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

/**
 * @file Button.tsx
 * @brief A reusable atomic button component.
 * 
 * @description
 * This component provides a basic, pressable button element. It's designed to be
 * highly reusable and customizable via props for different appearances and actions.
 * It follows the Single Responsibility Principle by focusing solely on rendering a button
 * and handling its press event. It is Open/Closed as its behavior can be extended via props
 * without modifying its source code. This is a fundamental "atom" in Atomic Design.
 * 
 * @example
 * <Button title="Submit" onPress={() => console.log('Pressed')} />
 * <Button title="Cancel" onPress={handleCancel} style={{backgroundColor: 'red'}} />
 */

interface ButtonProps {
  /** The text displayed on the button. */
  title: string;
  /** Function to be called when the button is pressed. */
  onPress: () => void;
  /** Optional custom styles for the button container (TouchableOpacity). */
  style?: ViewStyle;
  /** Optional custom styles for the button text. */
  textStyle?: TextStyle;
  /** Optional flag to disable the button. */
  disabled?: boolean;
  // Add other common button props like 'variant' (e.g., 'outline', 'solid') if needed later.
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle, disabled }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, style, disabled && styles.disabledButton]} 
      onPress={onPress}
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0.7} // Keep opacity full when disabled
    >
      <Text style={[styles.text, textStyle, disabled && styles.disabledText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff', // Default blue color
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2, // Basic shadow for Android
    shadowColor: '#000', // Basic shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  text: {
    color: '#ffffff', // Default white text
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    backgroundColor: '#c0c0c0', // Grey color when disabled
    elevation: 0,
  },
  disabledText: {
    color: '#808080', // Darker grey text when disabled
  }
});

export default Button;
