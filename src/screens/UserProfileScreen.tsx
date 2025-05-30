// src/screens/UserProfileScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, ScrollView, useColorScheme, TouchableOpacity } from 'react-native'; // useColorScheme, TouchableOpacity 추가
import { Colors } from '../constants/Colors'; // Colors 임포트

/**
 * @file UserProfileScreen.tsx
 * @brief 사용자 프로필 정보 및 환경 설정을 표시하고 관리하는 화면입니다.
 *
 * @description
 * 이 화면을 통해 사용자는 자신의 프로필 세부 정보를 보고 편집하며, 식단 환경 설정(예: 알레르기,
 * 제한 사항)을 지정하고, 저장하거나 생성한 레시피를 관리할 수 있습니다.
 * 사용자별 데이터 및 설정에만 집중함으로써 단일 책임 원칙을 준수합니다.
 *
 * @notes
 * - 현재 사용자 데이터를 가져오려면 인증 서비스와의 통합이 필요합니다.
 * - 사용자 환경 설정(알레르기, 식단 제한)은 레시피 추천을 개인화하는 데 사용됩니다.
 * - "내 레시피"(사용자가 생성) 및 "저장된 레시피"(사용자가 북마크) 섹션이 있습니다.
 * - 사용자 정보 처리 시 데이터 개인 정보 보호 및 보안을 확인해야 합니다.
 *
 * @example
 * <UserProfileScreen userId="currentUser" />
 *
 */

interface UserProfile {
  id: string;
  name: string; // 이름
  email: string; // 이메일
  dietaryRestrictions: string[]; // 식단 제한 사항
  allergies: string[]; // 알레르기 정보
  // 기타 프로필 필드 추가
}

interface UserProfileScreenProps {
  userId: string; // 또는 인증 컨텍스트에서 가져오기
  // 여기에 다른 props 정의
}

const UserProfileScreen: React.FC<UserProfileScreenProps> = (props) => {
  const colorScheme = useColorScheme() ?? 'light';
  const currentColors = Colors[colorScheme];

  // 임시 데이터, 실제 앱에서는 userId 또는 인증 상태를 기반으로 가져옵니다.
  const userProfile: UserProfile = {
    id: props.userId,
    name: "홍길동",
    email: "hong.gildong@example.com",
    dietaryRestrictions: ["채식주의자"],
    allergies: ["땅콩"]
  };

  // 편집 버튼 (예시)
  const EditButton = ({ onPress }: { onPress: () => void }) => (
    <TouchableOpacity onPress={onPress} style={styles.editButton}>
      <Text style={[styles.editButtonText, { color: currentColors.primary }]}>편집</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: currentColors.background }]}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 16 }}
    >
      <Text style={[styles.title, { color: currentColors.text }]}>사용자 프로필</Text>

      <View style={[styles.section, { backgroundColor: currentColors.cardBackground }]}>
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: currentColors.text }]}>개인 정보</Text>
          <EditButton onPress={() => console.log("Edit Personal Info")} />
        </View>
        <Text style={[styles.infoText, { color: currentColors.text }]}>이름: {userProfile.name}</Text>
        <Text style={[styles.infoText, { color: currentColors.text }]}>이메일: {userProfile.email}</Text>
        {/* 여기에 편집 기능 추가 */}
      </View>

      <View style={[styles.section, { backgroundColor: currentColors.cardBackground }]}>
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, { color: currentColors.text }]}>식단 설정</Text>
          <EditButton onPress={() => console.log("Edit Dietary Preferences")} />
        </View>
        <Text style={[styles.infoText, { color: currentColors.text }]}>제한사항: {userProfile.dietaryRestrictions.join(', ')}</Text>
        <Text style={[styles.infoText, { color: currentColors.text }]}>알레르기: {userProfile.allergies.join(', ')}</Text>
        {/* 여기에 편집 기능 추가 */}
      </View>

      <View style={[styles.section, { backgroundColor: currentColors.cardBackground }]}>
        <Text style={[styles.sectionTitle, { color: currentColors.text }]}>내 레시피</Text>
        {/* 여기에 사용자가 만든 레시피 목록 표시 */}
        <Text style={[styles.placeholderText, {color: currentColors.placeholderText}]}>아직 생성한 레시피가 없습니다.</Text>
      </View>

      <View style={[styles.section, { backgroundColor: currentColors.cardBackground }]}>
        <Text style={[styles.sectionTitle, { color: currentColors.text }]}>저장된 레시피</Text>
        {/* 여기에 사용자가 저장한 레시피 목록 표시 */}
        <Text style={[styles.placeholderText, {color: currentColors.placeholderText}]}>아직 저장한 레시피가 없습니다.</Text>
      </View>

      {/* 로그아웃, 계정 삭제 등을 위한 향후 UI 요소 */}
      <TouchableOpacity style={[styles.actionButton, {backgroundColor: currentColors.danger}]}>
        <Text style={[styles.actionButtonText, {color: currentColors.cardBackground}]}>로그아웃</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16, // ScrollView contentContainerStyle로 이동 또는 유지
  },
  title: {
    fontSize: 26, // 크기 증가
    fontWeight: 'bold',
    marginBottom: 20, // 간격 증가
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  section: {
    marginBottom: 16, // 섹션 간 간격
    borderRadius: 12, // 모서리 둥글게
    padding: 16, // 내부 패딩
    marginHorizontal: 16, // 좌우 마진 추가
    elevation: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12, // 제목과 내용 간 간격
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600', // semibold
  },
  infoText: { // 개인 정보, 식단 설정 등 텍스트 스타일
    fontSize: 16,
    marginBottom: 6,
    lineHeight: 22,
  },
  placeholderText: { // 레시피 목록 없을 때 표시될 텍스트
    fontSize: 15,
    marginTop: 8,
  },
  editButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  editButtonText: {
    fontSize: 15,
    fontWeight: '600',
  },
  actionButton: { // 로그아웃 등 액션 버튼
    marginHorizontal: 16,
    marginTop: 24,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default UserProfileScreen;
