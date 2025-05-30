// src/components/atoms/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, useColorScheme } from 'react-native'; // useColorScheme 추가
import { Colors } from '@/constants/Colors'; // Colors 임포트

/**
 * @file Button.tsx
 * @brief 재사용 가능한 원자적 버튼 컴포넌트입니다.
 *
 * @description
 * 이 컴포넌트는 기본적인, 누를 수 있는 버튼 요소를 제공합니다. 다양한 외형과 액션에 대해
 * props를 통해 높은 재사용성과 사용자 정의 가능성을 갖도록 설계되었습니다.
 * 버튼 렌더링 및 누르기 이벤트 처리에만 집중함으로써 단일 책임 원칙을 따릅니다.
 * 소스 코드를 수정하지 않고도 props를 통해 동작을 확장할 수 있으므로 개방/폐쇄 원칙을 따릅니다.
 * 이는 아토믹 디자인의 기본적인 "원자"입니다.
 *
 * @example
 * <Button title="제출" onPress={() => console.log('눌림')} />
 * <Button title="취소" onPress={handleCancel} style={{backgroundColor: 'red'}} />
 */

interface ButtonProps {
  /** 버튼에 표시될 텍스트입니다. */
  title: string;
  /** 버튼을 눌렀을 때 호출될 함수입니다. */
  onPress: () => void;
  /** 버튼 컨테이너(TouchableOpacity)에 대한 선택적 사용자 정의 스타일입니다. */
  style?: ViewStyle;
  /** 버튼 텍스트에 대한 선택적 사용자 정의 스타일입니다. */
  textStyle?: TextStyle;
  /** 버튼을 비활성화하는 선택적 플래그입니다. */
  disabled?: boolean;
  // 나중에 필요하다면 'variant'(예: 'outline', 'solid')와 같은 다른 일반적인 버튼 props를 추가하세요.
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle, disabled }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const currentColors = Colors[colorScheme];

  // 기본 버튼 스타일과 비활성화 시 스타일을 테마에 맞게 조정합니다.
  const themedButtonStyle = {
    backgroundColor: disabled ? currentColors.borderColor : currentColors.primary, // 비활성화 시 배경색 변경
  };

  const themedTextStyle = {
    color: disabled ? currentColors.placeholderText : currentColors.cardBackground, // 비활성화 시 텍스트 색상 변경, 기본은 카드 배경색(밝은 색상 가정)
  };

  return (
    <TouchableOpacity
      style={[styles.button, themedButtonStyle, style, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={disabled ? 1 : 0.7} // 비활성화 시에는 불투명도 유지
    >
      <Text style={[styles.text, themedTextStyle, textStyle, disabled && styles.disabledText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // backgroundColor는 컴포넌트 내에서 동적으로 설정됩니다.
    paddingVertical: 12,
    paddingHorizontal: 25, // 패딩 약간 증가
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2, // 안드로이드 기본 그림자
    shadowColor: '#000000', // iOS 기본 그림자 (더 명확하게)
    shadowOffset: { width: 0, height: 2 }, // 그림자 약간 아래로
    shadowOpacity: 0.15, // 그림자 투명도 조절
    shadowRadius: 2.62, // 그림자 반경 조절
  },
  text: {
    // color는 컴포넌트 내에서 동적으로 설정됩니다.
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    // backgroundColor는 themedButtonStyle에서 처리됩니다.
    elevation: 0, // 비활성화 시 그림자 제거
    shadowOpacity: 0, // 비활성화 시 그림자 제거 (iOS)
  },
  disabledText: {
    // color는 themedTextStyle에서 처리됩니다.
    // 추가적인 비활성화 텍스트 스타일이 필요하면 여기에 정의 (예: opacity)
  }
});

export default Button;
