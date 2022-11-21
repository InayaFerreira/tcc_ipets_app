import { SafeAreaView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { COLORS } from '@styles/colors';

import TabRoutes from '@routes/tabs.routes';

import { useAuth } from '@context/auth';

import AuthStack from './auth.stack';

const AppRoutes: React.FC = () => {
  const { authState } = useAuth();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <NavigationContainer>
        {authState !== 'desautenticado' ? <TabRoutes /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppRoutes;
