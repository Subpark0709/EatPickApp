import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link'; // 'link' 타입을 위한 색상 처리가 필요합니다.
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  // 'link' 타입일 경우 기본 색상 이름을 'primary'로, 그 외에는 'text'로 설정합니다.
  // 이렇게 하면 lightColor/darkColor prop이 제공되지 않았을 때 'link'는 primary 색상을, 나머지는 text 색상을 기본으로 사용합니다.
  const defaultColorName = type === 'link' ? 'primary' : 'text';
  const color = useThemeColor({ light: lightColor, dark: darkColor }, defaultColorName);

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    // color는 컴포넌트 로직 내 useThemeColor를 통해 동적으로 설정됩니다.
    // 기본적으로 'primary' 색상을 사용하게 됩니다.
  },
});
