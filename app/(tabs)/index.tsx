// 파일 경로: EatPickApp/app/index.js

import React from 'react';
// screens 폴더에 있는 WelcomeScreen.js를 불러옵니다.
// 경로가 다르면 정확히 수정해주세요. (예: '../screens/WelcomeScreen')
import WelcomeScreen from '../../screens/WelcomeScreen';

export default function AppRoot() {
  // WelcomeScreen 컴포넌트를 반환하여 첫 화면으로 사용합니다.
  return <WelcomeScreen />;
}