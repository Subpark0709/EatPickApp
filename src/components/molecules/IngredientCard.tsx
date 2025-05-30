// src/components/molecules/IngredientCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, ViewStyle, ImageSourcePropType, useColorScheme, TouchableOpacity } from 'react-native'; // useColorScheme, TouchableOpacity 추가
import { Colors } from '@/constants/Colors'; // Colors 임포트
// import Button from '../atoms/Button'; // 버튼 원자가 필요한 경우 예시

/**
 * @file IngredientCard.tsx
 * @brief 단일 재료에 대한 정보를 표시하는 분자(molecule) 컴포넌트입니다.
 *
 * @description
 * 이 컴포넌트는 일반적으로 이름과 이미지를 포함하여 재료의 시각적 표현을 렌더링합니다.
 * 더 작은 원자적 요소(예: Text, Image)로 구성되므로 아토믹 디자인에서 "분자"에 해당합니다.
 * 하나의 재료 표시에만 집중함으로써 단일 책임 원칙을 준수합니다.
 *
 * @example
 * <IngredientCard ingredient={{ name: '토마토', image: require('./tomato.png') }} />
 */

interface Ingredient {
  name: string; // 재료 이름
  image?: ImageSourcePropType; // 재료 이미지 (선택 사항)
  quantity?: string; // 수량 (선택 사항)
  // 기타 관련 재료 속성 추가
}

interface IngredientCardProps {
  /** 표시할 재료 데이터입니다. */
  ingredient: Ingredient;
  /** 카드 컨테이너에 대한 선택적 사용자 정의 스타일입니다. */
  style?: ViewStyle;
  /** 카드를 눌렀을 때 실행될 선택적 액션입니다. */
  onPress?: () => void;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ ingredient, style, onPress }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const currentColors = Colors[colorScheme];

  return (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor: currentColors.cardBackground, shadowColor: currentColors.text }, // 그림자 색상은 텍스트 또는 특정 테마 색상 사용 고려
        style
      ]}
      onPress={onPress} // onPress를 TouchableOpacity로 이동
      activeOpacity={onPress ? 0.7 : 1} // onPress가 있을 때만 activeOpacity 적용
    >
      {ingredient.image && (
        <Image source={ingredient.image} style={[styles.image, { backgroundColor: currentColors.borderColor }]} />
      )}
      <View style={styles.infoContainer}>
        <Text style={[styles.name, { color: currentColors.text }]}>{ingredient.name}</Text>
        {ingredient.quantity && (
          <Text style={[styles.quantity, { color: currentColors.placeholderText }]}>{ingredient.quantity}</Text>
        )}
        {/* 여기에 다른 재료 세부 정보 추가 가능 */}
      </View>
      {/* 원자(atom) 포함 예시:
      {onPress && <Button title="보기" onPress={onPress} />}
      */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    // backgroundColor는 컴포넌트에서 동적으로 설정
    borderRadius: 10, // 모서리 약간 더 둥글게
    padding: 16, // 패딩 조정
    flexDirection: 'row', // 이미지와 텍스트를 나란히 정렬
    alignItems: 'center', // 항목들을 수직으로 중앙 정렬
    // shadowColor는 컴포넌트에서 동적으로 설정
    shadowOffset: { width: 0, height: 1 }, // 그림자 미세 조정
    shadowOpacity: 0.08, // 그림자 더 은은하게
    shadowRadius: 3, // 그림자 반경
    elevation: 2, // 안드로이드 그림자 레벨 조정
    marginBottom: 12, // 카드 사이 간격
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30, // 원형으로 만들기
    marginRight: 16, // 간격 조정
    // backgroundColor는 이미지가 없을 경우의 플레이스홀더 배경 (동적 설정)
  },
  infoContainer: {
    flex: 1, // 남은 공간 차지
  },
  name: {
    fontSize: 18,
    fontWeight: '600', // semibold
    // color는 컴포넌트에서 동적으로 설정
  },
  quantity: {
    fontSize: 15, // 약간 크게
    // color는 컴포넌트에서 동적으로 설정
    marginTop: 5, // 이름과의 간격
  }
});

export default IngredientCard;
