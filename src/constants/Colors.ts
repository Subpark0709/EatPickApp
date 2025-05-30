// src/constants/Colors.ts

const tintColorLight = '#FF6347'; // Tomato red - 좀 더 식욕을 돋구는 색상으로 변경 고려 (예: 밝은 주황색)
const tintColorDark = '#FF7F50';  // Coral - 어두운 테마에 어울리는 따뜻한 색상 (예: 주황색 계열)

export const Colors = {
  light: {
    text: '#212121', // 거의 검은색 (가독성을 위해 순수 검은색보다 약간 부드럽게)
    background: '#FFFAF0', // FloralWhite - 따뜻하고 부드러운 배경색
    tint: tintColorLight,
    tabIconDefault: '#BDBDBD', // 중간 회색 (선택되지 않은 탭 아이콘)
    tabIconSelected: tintColorLight,
    primary: '#FF8A65', // 밝은 주황색 (주요 상호작용 요소)
    accent: '#66BB6A', // 중간 녹색 (보조 액션, 신선함 강조)
    cardBackground: '#FFFFFF', // 흰색 (카드 배경)
    borderColor: '#E0E0E0', // 밝은 회색 (테두리)
    placeholderText: '#9E9E9E', // 회색 (입력 필드 플레이스홀더)
    danger: '#E53935', // 빨간색 (오류, 삭제 등)
  },
  dark: {
    text: '#F5F5F5', // 밝은 회색 (어두운 배경에서의 가독성)
    background: '#212121', // 매우 어두운 회색/거의 검은색 (앱 배경)
    tint: tintColorDark,
    tabIconDefault: '#757575', // 어두운 회색 (선택되지 않은 탭 아이콘)
    tabIconSelected: tintColorDark,
    primary: '#FF7043', // 주황색 (어두운 테마의 주요 상호작용 요소)
    accent: '#81C784', // 밝은 녹색 (어두운 테마의 보조 액션)
    cardBackground: '#333333', // 어두운 회색 (카드 배경)
    borderColor: '#424242', // 약간 더 밝은 어두운 회색 (테두리)
    placeholderText: '#BDBDBD', // 중간 회색 (입력 필드 플레이스홀더)
    danger: '#F44336', // 밝은 빨간색 (오류, 삭제 등)
  },
};

// JSDoc 주석 추가 및 한국어 번역
/**
 * @constant Colors
 * @description 앱 전체에서 사용될 색상 팔레트를 정의합니다. 라이트 모드와 다크 모드를 모두 지원합니다.
 *
 * @property light - 라이트 모드 색상 구성표.
 * @property light.text - 기본 텍스트 색상.
 * @property light.background - 기본 배경색.
 * @property light.tint - 주요 강조 색상 (예: 활성 탭 아이콘, 버튼).
 * @property light.tabIconDefault - 비활성 탭 아이콘 색상.
 * @property light.tabIconSelected - 활성 탭 아이콘 색상.
 * @property light.primary - 주요 상호작용 요소(버튼 등)에 사용되는 기본 색상.
 * @property light.accent - 보조적인 강조 또는 액션에 사용되는 색상.
 * @property light.cardBackground - 카드형 UI 요소의 배경색.
 * @property light.borderColor - UI 요소의 테두리 색상.
 * @property light.placeholderText - 입력 필드의 플레이스홀더 텍스트 색상.
 * @property light.danger - 오류 또는 위험 상태를 나타내는 색상.
 *
 * @property dark - 다크 모드 색상 구성표.
 * @property dark.text - 기본 텍스트 색상.
 * @property dark.background - 기본 배경색.
 * @property dark.tint - 주요 강조 색상.
 * @property dark.tabIconDefault - 비활성 탭 아이콘 색상.
 * @property dark.tabIconSelected - 활성 탭 아이콘 색상.
 * @property dark.primary - 주요 상호작용 요소에 사용되는 기본 색상.
 * @property dark.accent - 보조적인 강조 또는 액션에 사용되는 색상.
 * @property dark.cardBackground - 카드형 UI 요소의 배경색.
 * @property dark.borderColor - UI 요소의 테두리 색상.
 * @property dark.placeholderText - 입력 필드의 플레이스홀더 텍스트 색상.
 * @property dark.danger - 오류 또는 위험 상태를 나타내는 색상.
 */
