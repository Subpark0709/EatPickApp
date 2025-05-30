// src/navigation/AppNavigator.tsx

/**
 * @file AppNavigator.tsx
 * @brief 인증된 사용자를 위한 메인 애플리케이션 네비게이터입니다. Drawer Navigator를 사용합니다.
 *
 * @description
 * 이 네비게이터는 사용자가 인증된 후 앱의 주요 화면들을 관리합니다.
 * Drawer Navigator를 최상위로 사용하며, 내부에 BottomTabNavigator (AppTabs)와 다른 Drawer 항목(예: 설정)을 포함합니다.
 */

import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer'; // Drawer Navigator 임포트
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useColorScheme } from 'react-native';

import { Colors } from '../constants/Colors';
import CameraScreen from '../screens/CameraScreen';
import CommunityFeedScreen from '../screens/CommunityFeedScreen';
import IngredientInputScreen from '../screens/IngredientInputScreen';
import MainScreen from '../screens/MainScreen';
// ProfileScreen은 SettingsScreen으로 대체될 수 있으므로 주석 처리 또는 삭제 고려
// import ProfileScreen from '../screens/ProfileScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import RecipeListScreen from '../screens/RecipeListScreen';
import RecipeScreen from '../screens/RecipeScreen';
import SearchScreen from '../screens/SearchScreen';
import SearchWithElasticsearchScreen from '../screens/SearchWithElasticsearchScreen';
import SettingsScreen from '../screens/SettingsScreen';
// UserProfileScreen은 현재 직접 사용되지 않음. 필요시 Profile 또는 Settings 내에서 접근.
// import UserProfileScreen from '../screens/UserProfileScreen';


// --- 타입 정의 ---

// Drawer 네비게이션 타입
export type DrawerParamList = {
  AppTabs: undefined; // TabNavigator를 포함하는 스크린
  SettingsDrawer: undefined; // Drawer에서 직접 접근하는 설정 스크린
  // 여기에 다른 Drawer 스크린 추가 가능 (예: MySavedRecipes: undefined;)
};

// Tab 네비게이션 타입 (Profile -> SettingsTab 변경)
export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Community: undefined;
  SettingsTab: undefined; // Profile에서 이름 변경
};

// Home 스택 타입 정의 (변경 없음)
export type HomeStackParamList = {
  Main: undefined;
  Recipe: undefined;
  RecipeDetail: { recipeId: string };
  RecipeList: { recommendedRecipes: any[] }; // 실제 타입으로 변경 권장
  IngredientInput: undefined;
  Camera: undefined;
};

// Search 스택 타입 정의 (변경 없음)
export type SearchStackParamList = {
  Search: undefined;
  SearchWithElasticsearch: undefined;
  RecipeDetail: { recipeId: string };
  RecipeList: { recommendedRecipes: any[] }; // 실제 타입으로 변경 권장
};

// Community 스택 타입 정의 (변경 없음)
export type CommunityStackParamList = {
  Community: undefined;
  RecipeDetail: { recipeId: string };
  RecipeList: { recommendedRecipes: any[] }; // 실제 타입으로 변경 권장
};

// Settings 스택 타입 정의 (ProfileStackParamList에서 변경)
export type SettingsStackParamList = {
  Settings: undefined;
  // UserProfile: { userId: string }; // 필요하다면 여기에 UserProfile 추가
};

// --- 네비게이터 인스턴스 ---
const Drawer = createDrawerNavigator<DrawerParamList>();
const Tab = createBottomTabNavigator<TabParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const SearchStack = createNativeStackNavigator<SearchStackParamList>();
const CommunityStack = createNativeStackNavigator<CommunityStackParamList>();
const SettingsStack = createNativeStackNavigator<SettingsStackParamList>(); // ProfileStack에서 이름 변경

// --- 스택 네비게이터 컴포넌트 ---

// onLogout을 받을 수 있도록 Props 정의
type SettingsScreenWithLogoutProps = {
  onLogout: () => void;
};

// Home 스택 네비게이터 (변경 없음)
const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Main" component={MainScreen} />
      <HomeStack.Screen name="Recipe" component={RecipeScreen} />
      <HomeStack.Screen name="RecipeDetail" component={RecipeDetailScreen} initialParams={{ recipeId: '' }} />
      <HomeStack.Screen name="RecipeList" component={RecipeListScreen} initialParams={{ recommendedRecipes: [] }} />
      <HomeStack.Screen name="IngredientInput" component={IngredientInputScreen} />
      <HomeStack.Screen name="Camera" component={CameraScreen} />
    </HomeStack.Navigator>
  );
};

// Search 스택 네비게이터 (변경 없음)
const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator screenOptions={{ headerShown: false }}>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="SearchWithElasticsearch" component={SearchWithElasticsearchScreen} />
      <SearchStack.Screen name="RecipeDetail" component={RecipeDetailScreen} initialParams={{ recipeId: '' }}/>
      <SearchStack.Screen name="RecipeList" component={RecipeListScreen} initialParams={{ recommendedRecipes: [] }} />
    </SearchStack.Navigator>
  );
};

// Community 스택 네비게이터 (변경 없음)
const CommunityStackNavigator = () => {
  return (
    <CommunityStack.Navigator screenOptions={{ headerShown: false }}>
      <CommunityStack.Screen name="Community" component={CommunityFeedScreen} />
      <CommunityStack.Screen name="RecipeDetail" component={RecipeDetailScreen} initialParams={{ recipeId: '' }} />
      <CommunityStack.Screen name="RecipeList" component={RecipeListScreen} initialParams={{ recommendedRecipes: [] }} />
    </CommunityStack.Navigator>
  );
};

// Settings 스택 네비게이터 (ProfileStackNavigator에서 변경)
// onLogout prop을 SettingsScreen으로 전달
const SettingsStackNavigator: React.FC<SettingsScreenWithLogoutProps> = ({ onLogout }) => {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="Settings">
        {props => <SettingsScreen {...props} onLogout={onLogout} />}
      </SettingsStack.Screen>
    </SettingsStack.Navigator>
  );
};


// --- TabNavigator 컴포넌트 ---
// onLogout prop을 SettingsStackNavigator로 전달
const TabNavigatorComponent: React.FC<SettingsScreenWithLogoutProps> = ({ onLogout }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const currentColors = Colors[colorScheme];

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Community') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'SettingsTab') { // Profile -> SettingsTab
            iconName = focused ? 'settings' : 'settings-outline'; // 아이콘 변경
          } else {
            iconName = 'alert-circle-outline'; // 기본값 또는 오류 아이콘
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: currentColors.tabIconSelected,
        tabBarInactiveTintColor: currentColors.tabIconDefault,
        tabBarStyle: {
          backgroundColor: currentColors.background,
          borderTopColor: currentColors.borderColor,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{ title: '홈' }} />
      <Tab.Screen name="Search" component={SearchStackNavigator} options={{ title: '검색' }} />
      <Tab.Screen name="Community" component={CommunityStackNavigator} options={{ title: '커뮤니티' }} />
      <Tab.Screen name="SettingsTab" options={{ title: '설정' }}>
        {/* SettingsStackNavigator에 onLogout prop 전달 */}
        {props => <SettingsStackNavigator {...props} onLogout={onLogout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

// --- DrawerNavigator 컴포넌트 ---
const DrawerNavigatorComponent: React.FC<SettingsScreenWithLogoutProps> = ({ onLogout }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const currentColors = Colors[colorScheme];

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false, // 각 화면에서 자체 헤더 관리 또는 Tab/Stack에서 관리
        drawerActiveTintColor: currentColors.tint,
        drawerInactiveTintColor: currentColors.placeholderText, // 또는 currentColors.text
        drawerLabelStyle: { marginLeft: -20, fontSize: 16 },
        // drawerStyle: { backgroundColor: currentColors.background } // Drawer 배경색
      }}
    >
      <Drawer.Screen
        name="AppTabs"
        options={{ title: '메인 메뉴' }} // Drawer에 표시될 이름
      >
        {/* TabNavigatorComponent에 onLogout prop 전달 */}
        {props => <TabNavigatorComponent {...props} onLogout={onLogout} />}
      </Drawer.Screen>
      <Drawer.Screen
        name="SettingsDrawer"
        options={{ title: '설정 (Drawer)' }} // Drawer에 표시될 이름
      >
        {/* SettingsScreen에 onLogout prop 직접 전달 */}
        {props => <SettingsScreen {...props} onLogout={onLogout} />}
      </Drawer.Screen>
      {/* 필요에 따라 여기에 더 많은 Drawer 스크린 추가 */}
    </Drawer.Navigator>
  );
};


// --- AppNavigator (최상위 인증 후 네비게이터) ---
type AppNavigatorProps = {
  onLogout: () => void;
};

const AppNavigator: React.FC<AppNavigatorProps> = ({ onLogout }) => {
  return <DrawerNavigatorComponent onLogout={onLogout} />;
};

export default AppNavigator;
