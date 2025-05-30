import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';

export type AuthStackParamList = {
  Welcome: undefined;
};

type AuthNavigatorProps = {
  onLogin: () => void;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC<AuthNavigatorProps> = ({ onLogin }) => {
  return (
    <Stack.Navigator 
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name="Welcome" 
        component={(props: any) => <WelcomeScreen {...props} onLogin={onLogin} />}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator; 