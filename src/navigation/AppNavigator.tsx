// src/navigation/AppNavigator.tsx

/**
 * @file AppNavigator.tsx
 * @brief Main application navigator for authenticated users.
 * 
 * @description
 * This navigator handles the primary screens of the app once a user is authenticated.
 * It will likely use a BottomTabNavigator for the main sections (e.g., Home/IngredientInput, Search, Community, Profile)
 * and each tab might be a StackNavigator for deeper navigation within that section (e.g., RecipeList -> RecipeDetail).
 * It adheres to the Single Responsibility Principle by managing the authenticated user's
 * navigation flow. It is typically shown after a successful login/signup flow managed by AuthNavigator.
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CameraScreen from '../screens/CameraScreen';
import CommunityFeedScreen from '../screens/CommunityFeedScreen';
import IngredientInputScreen from '../screens/IngredientInputScreen';
import MainScreen from '../screens/MainScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import RecipeListScreen from '../screens/RecipeListScreen';
import RecipeScreen from '../screens/RecipeScreen';
import SearchScreen from '../screens/SearchScreen';
import SearchWithElasticsearchScreen from '../screens/SearchWithElasticsearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
import UserProfileScreen from '../screens/UserProfileScreen';

// 탭 네비게이션 타입 정의
export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Community: undefined;
  Profile: undefined;
};

// 홈 스택 타입 정의
export type HomeStackParamList = {
  Main: undefined;
  Recipe: undefined;
  RecipeDetail: { recipeId: string };
  RecipeList: { recommendedRecipes: any[] };
  IngredientInput: undefined;
  Camera: undefined;
};

// 검색 스택 타입 정의
export type SearchStackParamList = {
  Search: undefined;
  SearchWithElasticsearch: undefined;
  RecipeDetail: { recipeId: string };
  RecipeList: { recommendedRecipes: any[] };
};

// 커뮤니티 스택 타입 정의
export type CommunityStackParamList = {
  Community: undefined;
  RecipeDetail: { recipeId: string };
  RecipeList: { recommendedRecipes: any[] };
};

// 프로필 스택 타입 정의
export type ProfileStackParamList = {
  Profile: undefined;
  UserProfile: { userId: string };
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const SearchStack = createNativeStackNavigator<SearchStackParamList>();
const CommunityStack = createNativeStackNavigator<CommunityStackParamList>();
const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

// 홈 탭 스택 네비게이터
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Main" component={MainScreen} />
      <HomeStack.Screen name="Recipe" component={RecipeScreen} />
      <HomeStack.Screen 
        name="RecipeDetail" 
        component={RecipeDetailScreen}
        initialParams={{ recipeId: '' }}
      />
      <HomeStack.Screen 
        name="RecipeList" 
        component={RecipeListScreen}
        initialParams={{ recommendedRecipes: [] }}
      />
      <HomeStack.Screen name="IngredientInput" component={IngredientInputScreen} />
      <HomeStack.Screen name="Camera" component={CameraScreen} />
    </HomeStack.Navigator>
  );
};

// 검색 탭 스택 네비게이터
const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="SearchWithElasticsearch" component={SearchWithElasticsearchScreen} />
      <SearchStack.Screen 
        name="RecipeDetail" 
        component={RecipeDetailScreen}
        initialParams={{ recipeId: '' }}
      />
      <SearchStack.Screen 
        name="RecipeList" 
        component={RecipeListScreen}
        initialParams={{ recommendedRecipes: [] }}
      />
    </SearchStack.Navigator>
  );
};

// 커뮤니티 탭 스택 네비게이터
const CommunityStackNavigator = () => {
  return (
    <CommunityStack.Navigator screenOptions={{ headerShown: false }}>
      <CommunityStack.Screen name="Community" component={CommunityFeedScreen} />
      <CommunityStack.Screen 
        name="RecipeDetail" 
        component={RecipeDetailScreen}
        initialParams={{ recipeId: '' }}
      />
      <CommunityStack.Screen 
        name="RecipeList" 
        component={RecipeListScreen}
        initialParams={{ recommendedRecipes: [] }}
      />
    </CommunityStack.Navigator>
  );
};

// 프로필 탭 스택 네비게이터
const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen 
        name="UserProfile" 
        component={() => <UserProfileScreen userId="current" />}
      />
      <ProfileStack.Screen name="Settings" component={SettingsScreen} />
    </ProfileStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Community') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStackNavigator}
        options={{
          title: '홈',
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchStackNavigator}
        options={{
          title: '검색',
        }}
      />
      <Tab.Screen 
        name="Community" 
        component={CommunityStackNavigator}
        options={{
          title: '커뮤니티',
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileStackNavigator}
        options={{
          title: '프로필',
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator: React.FC = () => {
  return <TabNavigator />;
};

export default AppNavigator;
