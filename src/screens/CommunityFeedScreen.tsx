// src/screens/CommunityFeedScreen.tsx

import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import CustomAppBar from '../components/organisms/CustomAppBar'; // CustomAppBar 임포트
import { Colors } from '../constants/Colors'; // Colors 임포트

/**
 * @file CommunityFeedScreen.tsx
 * @brief 사용자 공유 레시피 및 상호 작용의 피드를 표시하는 화면입니다.
 *
 * @description
 * 이 화면은 다른 사용자가 공유한 레시피의 동적 피드를 보여줍니다. 사용자는
 * 이러한 레시피를 보고, 좋아요를 누르고, 댓글을 달고, 공유할 수 있습니다.
 * 커뮤니티 피드 표시 및 상호 작용에만 집중함으로써 단일 책임 원칙을 준수합니다.
 *
 * @notes
 * - 피드를 최신 상태로 유지하려면 실시간 기능(예: WebSockets 또는 Firestore 실시간 업데이트 사용)이 필요합니다.
 * - 사용자 상호 작용 처리(좋아요, 댓글)에는 백엔드 서비스에 대한 API 호출이 포함됩니다.
 * - 커뮤니티 플랫폼에는 콘텐츠 관리 및 신고 기능이 필요할 수 있습니다.
 * - 원활한 사용자 경험을 위해 무한 스크롤 또는 페이지네이션을 구현해야 합니다.
 *
 * @example
 * <CommunityFeedScreen />
 *
 */

interface FeedItem {
  id: string;
  userName: string; // 사용자 이름
  userAvatarUrl?: string; // 사용자 아바타 이미지 URL (선택 사항)
  recipeName: string; // 레시피 이름
  recipeImageUrl?: string; // 레시피 이미지 URL (선택 사항)
  likes: number; // 좋아요 수
  commentsCount: number; // 댓글 수
  // 기타 관련 피드 항목 속성 추가
}

interface CommunityFeedScreenProps {
  // 여기에 props 정의 (예: onSelectRecipe: (recipeId: string) => void;)
  onSelectUserProfile?: (userId: string) => void;
  onSelectRecipe?: (recipeId: string) => void;
}

const CommunityFeedScreen: React.FC<CommunityFeedScreenProps> = (props) => {
  const colorScheme = useColorScheme() ?? 'light';
  const currentColors = Colors[colorScheme];

  // 현재는 임시 데이터
  const feedItems: FeedItem[] = [
    { id: '1', userName: '사용자A', recipeName: '멋진 파스타', likes: 15, commentsCount: 4, recipeImageUrl: 'https://via.placeholder.com/400x300.png?text=Pasta', userAvatarUrl: 'https://via.placeholder.com/50.png?text=UserA' },
    { id: '2', userName: '사용자B', recipeName: '매콤한 커리', likes: 22, commentsCount: 8, recipeImageUrl: 'https://via.placeholder.com/400x300.png?text=Curry', userAvatarUrl: 'https://via.placeholder.com/50.png?text=UserB' },
    { id: '3', userName: '요리왕C', recipeName: '전통 비빔밥', likes: 50, commentsCount: 12, recipeImageUrl: 'https://via.placeholder.com/400x300.png?text=Bibimbap', userAvatarUrl: 'https://via.placeholder.com/50.png?text=UserC' },
  ];

  const renderFeedItem = ({ item }: { item: FeedItem }) => (
    <TouchableOpacity
      style={[styles.feedItem, { backgroundColor: currentColors.cardBackground, shadowColor: currentColors.text }]} // Added shadowColor based on theme
      onPress={() => props.onSelectRecipe?.(item.id)}
    >
      <View style={styles.feedItemHeader}>
        {item.userAvatarUrl && <Image source={{ uri: item.userAvatarUrl }} style={styles.avatar} />}
        <TouchableOpacity onPress={() => props.onSelectUserProfile?.(item.id)}>
          <Text style={[styles.userName, { color: currentColors.text }]}>{item.userName}</Text>
        </TouchableOpacity>
      </View>
      {item.recipeImageUrl && <Image source={{ uri: item.recipeImageUrl }} style={styles.recipeImage} />}
      <View style={styles.feedItemContent}>
        <Text style={[styles.recipeName, { color: currentColors.text }]}>{item.recipeName}</Text>
        <Text style={[styles.feedItemStats, { color: currentColors.placeholderText }]}>
          좋아요: {item.likes}  댓글: {item.commentsCount}
        </Text>
      </View>
      <View style={[styles.feedItemActions, { borderTopColor: currentColors.borderColor }]}> {/* Themed borderTopColor */}
        <TouchableOpacity style={styles.actionButton}>
          <Text style={[styles.actionText, {color: currentColors.primary}]}>👍 좋아요</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={[styles.actionText, {color: currentColors.primary}]}>💬 댓글 달기</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: currentColors.background }]}>
      <CustomAppBar title="커뮤니티" />
      {/* 기존 title Text는 CustomAppBar로 대체되었으므로 삭제
      <Text style={[styles.title, { color: currentColors.text }]}>커뮤니티 피드</Text>
      */}
      <FlatList
        data={feedItems}
        keyExtractor={(item) => item.id}
        renderItem={renderFeedItem}
        ItemSeparatorComponent={() => <View style={{ height: 12, backgroundColor: currentColors.background }} />}
        contentContainerStyle={styles.listContentContainer} // Changed from paddingBottom to this
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // title 스타일은 CustomAppBar로 대체되었으므로 삭제
  // title: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   marginBottom: 16,
  //   paddingHorizontal: 16,
  //   paddingTop: 16,
  // },
  listContentContainer: { // FlatList에 대한 패딩
    paddingHorizontal: 16, // 좌우 마진 대신 FlatList 내부 패딩으로 변경
    paddingTop: 16, // CustomAppBar와의 간격
    paddingBottom: 16, // 하단 여백
  },
  feedItem: {
    borderRadius: 12,
    // marginHorizontal: 16, // FlatList 패딩으로 대체
    overflow: 'hidden',
    elevation: 2,
    // shadowColor 는 컴포넌트에서 동적으로 설정
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  feedItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#E0E0E0',
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
  },
  recipeImage: {
    width: '100%',
    height: 250,
    backgroundColor: '#E0E0E0',
  },
  feedItemContent: {
    padding: 12,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  feedItemStats: {
    fontSize: 14,
  },
  feedItemActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderTopWidth: StyleSheet.hairlineWidth, // 더 얇은 선
    // borderTopColor는 컴포넌트에서 동적으로 설정
  },
  actionButton: {
    padding: 8,
  },
  actionText: {
    fontSize: 15,
    fontWeight: '600',
  }
});

export default CommunityFeedScreen;
