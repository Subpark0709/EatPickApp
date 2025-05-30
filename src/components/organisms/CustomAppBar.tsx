// src/components/organisms/CustomAppBar.tsx
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack'; // For typing navigation if navigating to profile - Not used directly now
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
  Platform,
  StatusBar, // Import StatusBar
} from 'react-native';
import { Colors } from '../../constants/Colors'; // Ensure this path is correct

// Assuming a general AppStackParamList that might include UserProfile. Adjust as needed.
// For now, we'll use a generic navigation type for profile navigation.
// type NavigationType = StackNavigationProp<any>; // Adjust with actual param list

interface CustomAppBarProps {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  // If profile navigation needs specific stack, pass navigation prop or use a more specific hook
}

const CustomAppBar: React.FC<CustomAppBarProps> = ({ title, showBackButton, onBackPress }) => {
  const navigation = useNavigation(); // General navigation for drawer
  // const profileNav = useNavigation<NavigationType>(); // More specific if needed for profile screen

  const colorScheme = useColorScheme() ?? 'light';
  const currentColors = Colors[colorScheme];

  const handleLeftButtonPress = () => {
    if (showBackButton && onBackPress) {
      onBackPress();
    } else if (showBackButton) {
      if (navigation.canGoBack()) {
        navigation.goBack();
      }
    } else {
      // Ensure navigation object is of a type that includes DrawerActions
      // If using a more generic type from useNavigation(), dispatch might not be recognized
      // without casting or type narrowing.
      (navigation as any).dispatch(DrawerActions.openDrawer());
    }
  };

  const handleProfilePress = () => {
    // Placeholder: Navigate to UserProfileScreen or a ProfileStack
    // For now, let's assume UserProfileScreen is available in some stack accessible globally
    // or part of the drawer. If Profile tab was removed, UserProfileScreen needs a new home.
    // Let's assume it's part of a hypothetical 'ProfileModals' stack or similar.
    // For now, a console log.
    console.log('Navigate to User Profile Screen - (CustomAppBar)');
    // Example: (navigation as any).navigate('SettingsStack', { screen: 'UserProfile', params: { userId: 'current' } });
    // UserProfileScreen needs to be added to a navigator accessible from here.
    // A common pattern is to have a stack navigator for profile accessible from drawer/appbar.
    // Or, if UserProfileScreen is part of the SettingsStack:
    // navigation.navigate('SettingsStack', { screen: 'UserProfile', params: { userId: 'current' } });
    // For this to work, UserProfileScreen must be added to SettingsStackParamList and SettingsStackNavigator
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: currentColors.background,
          borderBottomColor: currentColors.borderColor
        }
      ]}
    >
      <TouchableOpacity onPress={handleLeftButtonPress} style={styles.button}>
        <Ionicons
          name={showBackButton ? 'arrow-back' : 'menu'}
          size={28}
          color={currentColors.text}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: currentColors.text }]} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <TouchableOpacity onPress={handleProfilePress} style={styles.button}>
        <Ionicons name="person-circle-outline" size={28} color={currentColors.text} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // Height calculation for iOS status bar and Android status bar
    // For Android, StatusBar.currentHeight could be used if available, otherwise a sensible default.
    // For iOS, a fixed larger paddingTop or height is common.
    height: (Platform.OS === 'ios' ? 44 : 56) + (StatusBar.currentHeight || 0), // Base height + status bar
    paddingTop: Platform.OS === 'ios' ? (StatusBar.currentHeight || 20) : (StatusBar.currentHeight || 10), // Adjust paddingTop for status bar
    paddingHorizontal: 10,
    borderBottomWidth: StyleSheet.hairlineWidth, // Thinner border
    // backgroundColor and borderBottomColor are set dynamically
  },
  button: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 40, // Ensure touchable area is large enough
  },
  titleContainer: {
    flex: 1, // Allow title to take available space
    alignItems: 'center', // Center title horizontally
    justifyContent: 'center',
    marginHorizontal: 8, // Space between buttons and title
  },
  title: {
    fontSize: 20,
    fontWeight: '600', // Changed from 'bold' to '600' (semibold)
    textAlign: 'center',
  },
});

export default CustomAppBar;
