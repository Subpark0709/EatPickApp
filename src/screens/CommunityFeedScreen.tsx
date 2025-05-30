// src/screens/CommunityFeedScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

/**
 * @file CommunityFeedScreen.tsx
 * @brief This screen is responsible for displaying a feed of user-shared recipes and interactions.
 * 
 * @description
 * This screen shows a dynamic feed of recipes shared by other users. It allows users
 * to view, like, comment on, and possibly share these recipes.
 * It adheres to the Single Responsibility Principle by focusing on community feed display and interactions.
 * 
 * @notes
 * - Requires real-time capabilities (e.g., using WebSockets or Firestore real-time updates) to keep the feed current.
 * - User interaction handling (likes, comments) will involve API calls to a backend service.
 * - Content moderation and reporting features might be necessary for a community platform.
 * - Infinite scrolling or pagination should be implemented for a smooth user experience.
 * 
 * @example
 * <CommunityFeedScreen /> 
 * 
 */

interface FeedItem {
  id: string;
  userName: string;
  recipeName: string;
  recipeImageUrl?: string;
  likes: number;
  commentsCount: number;
  // Add other relevant feed item properties
}

interface CommunityFeedScreenProps {
  // Define props here, e.g., onSelectRecipe: (recipeId: string) => void;
}

const CommunityFeedScreen: React.FC<CommunityFeedScreenProps> = (props) => {
  // Dummy data for now
  const feedItems: FeedItem[] = [
    { id: '1', userName: 'UserA', recipeName: 'Awesome Pasta', likes: 15, commentsCount: 4 },
    { id: '2', userName: 'UserB', recipeName: 'Spicy Curry', likes: 22, commentsCount: 8 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Feed</Text>
      <FlatList
        data={feedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.feedItem}>
            <Text style={styles.recipeName}>{item.recipeName} by {item.userName}</Text>
            <Text>Likes: {item.likes} Comments: {item.commentsCount}</Text>
            {/* Future UI elements for like/comment buttons, images etc. */}
          </View>
        )}
      />
    </View>
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
  feedItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 8,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default CommunityFeedScreen;
