// src/navigation/RootNavigator.tsx
import React, { useState } from 'react';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
// import { useAuth } from '../store/hooks/useAuth'; // 전역 상태 또는 비동기 저장소에서 인증 상태를 가져오는 예시
// 스토어의 커스텀 훅을 사용하려면 Redux 스토어가 설정되어 있고 필요한 경우 컨텍스트 프로바이더가 사용 가능하거나,
// 훅이 스토어에 올바르게 연결되어 있는지(예: react-redux의 useSelector 사용) 확인해야 합니다.

/**
 * @file RootNavigator.tsx
 * @brief 인증 상태에 따라 표시할 네비게이터를 결정합니다.
 *
 * @description
 * 이 컴포넌트는 네비게이션 트리의 메인 스위치 역할을 합니다.
 * 인증되지 않은 사용자에게는 AuthNavigator를, 인증된 사용자에게는 AppNavigator를 렌더링합니다.
 * 또한 선택된 네비게이터를 NavigationContainer로 감싸는데, 이는 React Navigation이 작동하는 데 필수적입니다.
 * 인증 상태는 현재 시뮬레이션되지만, 전역 상태(예: Redux, Zustand) 또는 컨텍스트의 실제 로직으로 대체되어야 합니다.
 */
const RootNavigator: React.FC = () => {
  // 인증 상태 시뮬레이션 - 나중에 스토어/컨텍스트의 실제 인증 로직으로 대체
  // true로 기본 설정하면 AppNavigator 및 해당 화면을 직접 테스트할 수 있습니다.
  // AuthNavigator를 테스트하려면 false로 설정합니다.
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  // 전역 상태 또는 비동기 저장소를 사용한 인증 통합 방법 예시:
  // const { user, isLoadingAuth } = useAuth(); // useAuth()가 사용자 및 로딩 상태를 제공한다고 가정
  // useEffect(() => {
  //   // 이 효과는 인증 훅/스토어에서 `user` 또는 `isLoadingAuth`가 변경될 때 실행됩니다.
  //   if (!isLoadingAuth) {
  //     setIsAuthenticated(!!user); // 사용자 객체 존재 여부에 따라 업데이트
  //   }
  // }, [user, isLoadingAuth]);

  // if (isLoadingAuth) {
  //   // 인증 확인 중 로딩 스피너 또는 스플래시 화면을 선택적으로 반환
  //   return <View><Text>인증 정보를 불러오는 중...</Text></View>;
  // }

  const handleLogin = () => {
    console.log("RootNavigator: User logged in"); // 로그인 상태 변경 로깅
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    console.log("RootNavigator: User logged out"); // 로그아웃 상태 변경 로깅
    setIsAuthenticated(false);
  };

  // NavigationContainer는 최상위 레벨에 한 번만 사용되어야 합니다.
  // 일반적으로 앱의 진입점(App.tsx 또는 이와 유사한 파일)에 위치합니다.
  // 이 RootNavigator가 NavigationContainer 내부에 렌더링된다고 가정합니다.
  return isAuthenticated ? <AppNavigator onLogout={handleLogout} /> : <AuthNavigator onLogin={handleLogin} />;
};

export default RootNavigator;
