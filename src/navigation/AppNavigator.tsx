// src/navigation/AppNavigator.tsx

/**
 * @file AppNavigator.tsx
 * @brief 인증된 사용자를 위한 메인 애플리케이션 네비게이터입니다.
 *
 * @description
 * 이 네비게이터는 사용자가 인증된 후 앱의 주요 화면들을 관리합니다.
 * 주로 메인 섹션(예: 홈/재료 입력, 검색, 커뮤니티, 프로필)을 위해 BottomTabNavigator를 사용하며,
 * 각 탭은 해당 섹션 내의 더 깊은 탐색(예: 레시피 목록 -> 레시피 상세)을 위해 StackNavigator가 될 수 있습니다.
 * 인증된 사용자의 네비게이션 흐름을 관리함으로써 단일 책임 원칙을 준수합니다.
 * 일반적으로 AuthNavigator에 의해 관리되는 성공적인 로그인/가입 흐름 후에 표시됩니다.
 */

import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native'; // useColorScheme 훅 추가
import { Colors } from '../constants/Colors'; // Colors 임포트
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
// 각 스택 네비게이터는 화면 전환을 담당하며, headerShown: false 옵션으로 기본 헤더를 숨깁니다.
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
  const colorScheme = useColorScheme() ?? 'light'; // 현재 색상 테마 가져오기 (기본값 'light')
  const currentColors = Colors[colorScheme]; // 현재 테마에 맞는 색상 세트 선택

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // 각 탭의 아이콘 설정
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Community') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // 아이콘 이름이 undefined일 경우 기본 아이콘 또는 오류 처리 필요
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: currentColors.tabIconSelected, // 선택된 탭 아이콘 색상 변경
        tabBarInactiveTintColor: currentColors.tabIconDefault, // 비선택 탭 아이콘 색상 변경
        tabBarStyle: { // 탭 바 배경색 적용
          backgroundColor: currentColors.background,
          borderTopColor: currentColors.borderColor, // 탭 바 상단 테두리 색상
        },
        headerShown: false, // 각 탭의 스크린 헤더는 스택 네비게이터에서 관리하므로 여기서 숨김
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          title: '홈', // 탭 제목
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          title: '검색', // 탭 제목
        }}
      />
      <Tab.Screen
        name="Community"
        component={CommunityStackNavigator}
        options={{
          title: '커뮤니티', // 탭 제목
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          title: '프로필', // 탭 제목
        }}
      />
    </Tab.Navigator>
  );
};

/**
 * @component AppNavigator
 * @description 앱의 메인 네비게이션 컴포넌트입니다. TabNavigator를 렌더링합니다.
 * @returns {React.FC} AppNavigator 컴포넌트
 */
const AppNavigator: React.FC = () => {
  // AppNavigator는 TabNavigator를 반환하여 앱의 주요 섹션 간의 탐색을 제공합니다.
  return <TabNavigator />;
};

export default AppNavigator;
