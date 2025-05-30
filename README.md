# 잇픽(EatPick)
## 음식 재료 기반 레시피 추천 앱 개발 프롬프트 템플릿 (React Native)

## Project Structure

애플리케이션 소스 코드는 주로 src/디렉토리 내에 있습니다. 이 디렉토리에는 모든 핵심 구성 요소, 화면, 서비스, 상태 관리, 탐색 및 유틸리티 기능이 포함되어 있습니다. 디렉토리의 구조는 src/필요에 따라 기능 중심 또는 도메인 중심 접근 방식을 따르며, 구성 요소에 대한 원자적 디자인에서 영감을 받은 기본 구성을 따릅니다.

주요 하위 디렉토리는 src/다음과 같습니다.

assets/: 이미지와 글꼴과 같은 정적 자산.
components/: 재사용 가능한 UI 구성 요소(원자, 분자, 유기체).
constants/: 애플리케이션 전체 상수(예: 색상, API 키).
expo_app_specific/: Expo Router 특정 파일(이전에는 app/디렉토리).
hooks/: 사용자 정의 React 후크.
navigation/: 네비게이터(예: AppNavigator, AuthNavigator).
screens/: 최상위 화면 구성 요소.
services/: 외부 API나 백엔드 서비스와 상호작용하기 위한 모듈입니다.
store/: 글로벌 상태 관리 설정(예: Redux 슬라이스 및 스토어).
utils/: 유틸리티 함수.
이러한 조직은 애플리케이션이 성장함에 따라 확장 가능하고 유지 관리 가능한 코드베이스를 유지하는 데 도움이 됩니다.
