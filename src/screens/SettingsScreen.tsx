import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors'; // Colors 임포트
// import { Ionicons } from '@expo/vector-icons'; // 아이콘 사용 시

interface SettingsScreenProps {
  onLogout?: () => void;
}

export default function SettingsScreen({ onLogout }: SettingsScreenProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const currentColors = Colors[colorScheme];

  // 실제 뒤로가기 기능은 네비게이션 스택에 따라 구현 필요
  const handleBackPress = () => console.log("Back pressed");

  return (
    <View style={[styles.container, { backgroundColor: currentColors.background }]}>
      {/* 헤더 */}
      <View style={[styles.header, { backgroundColor: currentColors.background, borderBottomColor: currentColors.borderColor }]}>
        <TouchableOpacity style={styles.headerIcon} onPress={handleBackPress}>
          {/* <Ionicons name="arrow-back" size={24} color={currentColors.text} /> */}
          <Text style={[styles.arrowIcon, { color: currentColors.text }]}>←</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: currentColors.text }]}>설정</Text>
        <View style={{ width: 48 }} />{/* 오른쪽 정렬을 위한 더미 뷰 */}
      </View>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <SettingItem label="알림" colors={currentColors} />
        <SettingItem label="계정 관리" colors={currentColors} />
        <SettingItem label="비밀번호 변경" colors={currentColors} />
        <SettingItem label="로그아웃" colors={currentColors} onPress={onLogout} />
        <SettingItem label="계정 삭제" colors={currentColors} isDestructive={true} />
        <SettingItem label="앱 정보" colors={currentColors} />
        <SettingItem label="버전" rightText="1.0.0" colors={currentColors} />
        <SettingItem label="개발자 정보" colors={currentColors} />
        <SettingItem label="서비스 이용 약관" colors={currentColors} />
        <SettingItem label="개인정보 처리방침" colors={currentColors} />
      </ScrollView>
    </View>
  );
}

// 설정 항목 컴포넌트
interface SettingItemProps {
  label: string;
  rightText?: string;
  colors: typeof Colors.light | typeof Colors.dark; // 테마 색상 prop 추가
  isDestructive?: boolean; // 파괴적 액션 여부 (예: 계정 삭제)
  onPress?: () => void; // 항목 클릭 시 실행할 함수
}

function SettingItem({ label, rightText, colors, isDestructive, onPress }: SettingItemProps) {
  const labelColor = isDestructive ? colors.danger : colors.text;
  return (
    <TouchableOpacity style={[styles.settingItem, { borderBottomColor: colors.borderColor }]} onPress={onPress}>
      <Text style={[styles.settingLabel, { color: labelColor }]}>{label}</Text>
      {rightText ? (
        <Text style={[styles.settingRightText, { color: colors.placeholderText }]}>{rightText}</Text>
      ) : (
        <Text style={[styles.settingArrow, { color: colors.placeholderText }]}>›</Text>
      )}
    </TouchableOpacity>
  );
}

// TabBarItem 컴포넌트는 이 화면에서 직접 사용되지 않지만, 요청에 따라 스타일과 번역을 적용합니다.
// 실제 사용 시에는 아이콘 라이브러리(예: Ionicons)를 사용하는 것이 좋습니다.
interface TabBarItemProps {
  icon: string; // 아이콘 문자열 (예: '🏠') 또는 아이콘 컴포넌트
  label: string; // 탭 레이블
  active?: boolean; // 활성 상태 여부
  colors: typeof Colors.light | typeof Colors.dark; // 테마 색상
}

function TabBarItem({ icon, label, active, colors }: TabBarItemProps) {
  return (
    <TouchableOpacity style={styles.tabBarItem}>
      <Text style={[styles.tabBarIcon, { color: active ? colors.tabIconSelected : colors.tabIconDefault }]}>{icon}</Text>
      <Text style={[styles.tabBarLabel, { color: active ? colors.tabIconSelected : colors.tabIconDefault }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor는 컴포넌트에서 동적으로 설정
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 24, // 실제 사용 시 SafeAreaView 고려
    paddingBottom: 12, // 패딩 조정
    justifyContent: 'space-between',
    borderBottomWidth: 1, // 헤더 구분선
  },
  headerIcon: {
    width: 48,
    height: 48,
    alignItems: 'flex-start', // 아이콘 왼쪽 정렬
    justifyContent: 'center',
  },
  arrowIcon: {
    fontSize: 24,
    // color는 컴포넌트에서 동적으로 설정
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600', // semibold
    // color는 컴포넌트에서 동적으로 설정
    // paddingRight: 48, // 더미 뷰로 대체
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor는 컴포넌트에서 동적으로 설정 (또는 부모 배경 사용)
    paddingHorizontal: 20, // 패딩 증가
    minHeight: 60, // 높이 증가
    borderBottomWidth: 1,
    // borderBottomColor는 컴포넌트에서 동적으로 설정
    justifyContent: 'space-between',
  },
  settingLabel: {
    fontSize: 17, // 폰트 크기 약간 증가
    flex: 1,
  },
  settingArrow: {
    fontSize: 20,
    marginLeft: 8,
  },
  settingRightText: {
    fontSize: 17, // 폰트 크기 통일
    marginLeft: 8,
  },
  // TabBar 스타일 정의 (이 화면에서는 사용되지 않음)
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    // borderTopColor, backgroundColor는 동적으로 설정
    paddingBottom: 12, // 실제 사용 시 SafeAreaView 하단 패딩 고려
    paddingTop: 8, // 패딩 조정
    paddingHorizontal: 8,
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2, // 아이콘과 레이블 사이 간격
  },
  tabBarIcon: {
    fontSize: 24,
    marginBottom: 2,
    // color는 컴포넌트에서 동적으로 설정
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '500',
    // color는 컴포넌트에서 동적으로 설정
  },
  // tabBarIconActive, tabBarLabelActive는 TabBarItem 컴포넌트 내에서 active prop과 colors prop으로 처리
});