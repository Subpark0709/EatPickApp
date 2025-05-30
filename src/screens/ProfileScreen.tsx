import React from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native'; // useColorScheme 추가
import { Colors } from '../constants/Colors'; // Colors 임포트

const ProfileScreen: React.FC = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const currentColors = Colors[colorScheme];

  return (
    <View style={[styles.container, { backgroundColor: currentColors.background }]}>
      <Text style={[styles.text, { color: currentColors.text }]}>프로필 화면</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor는 컴포넌트에서 동적으로 설정
  },
  text: {
    fontSize: 20,
    // color는 컴포넌트에서 동적으로 설정
  },
});

export default ProfileScreen;