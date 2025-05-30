// src/screens/UserProfileScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

/**
 * @file UserProfileScreen.tsx
 * @brief This screen is responsible for displaying and managing user profile information and preferences.
 * 
 * @description
 * This screen allows users to view and edit their profile details, set dietary preferences (e.g., allergies,
 * restrictions), and manage their saved or created recipes.
 * It adheres to the Single Responsibility Principle by focusing on user-specific data and settings.
 * 
 * @notes
 * - Requires integration with an authentication service to get the current user's data.
 * - User preferences (allergies, dietary restrictions) will be used to personalize recipe recommendations.
 * - Sections for "My Recipes" (created by the user) and "Saved Recipes" (bookmarked by the user).
 * - Ensure data privacy and security when handling user information.
 * 
 * @example
 * <UserProfileScreen userId="currentUser" /> 
 * 
 */

interface UserProfile {
  id: string;
  name: string;
  email: string;
  dietaryRestrictions: string[];
  allergies: string[];
  // Add other profile fields
}

interface UserProfileScreenProps {
  userId: string; // Or get from auth context
  // Define other props here
}

const UserProfileScreen: React.FC<UserProfileScreenProps> = (props) => {
  // Dummy data, in a real app, fetch based on userId or auth state
  const userProfile: UserProfile = {
    id: props.userId,
    name: "John Doe",
    email: "john.doe@example.com",
    dietaryRestrictions: ["Vegetarian"],
    allergies: ["Peanuts"]
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <Text>Name: {userProfile.name}</Text>
        <Text>Email: {userProfile.email}</Text>
        {/* Add edit functionality here */}
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dietary Preferences</Text>
        <Text>Restrictions: {userProfile.dietaryRestrictions.join(', ')}</Text>
        <Text>Allergies: {userProfile.allergies.join(', ')}</Text>
        {/* Add edit functionality here */}
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Recipes</Text>
        {/* List user's created recipes here */}
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Saved Recipes</Text>
        {/* List user's saved recipes here */}
      </View>
      
      {/* Future UI elements for logout, account deletion etc. */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'semibold',
    marginBottom: 8,
  },
});

export default UserProfileScreen;
