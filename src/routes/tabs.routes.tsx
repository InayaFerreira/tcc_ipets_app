import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useAuth } from '@context/auth';

import ClinicaStack from '@routes/clinica.stack';
import ClienteStack from '@routes/cliente.stack';

export type TabParamList = {
  ClienteStack: undefined;
  ClinicaStack: undefined;
};

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  const { authState } = useAuth();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none' },
      }}>
      {authState === 'cliente' && (
        <Tab.Screen name="ClienteStack" component={ClienteStack} />
      )}
      {authState === 'clinica' && (
        <Tab.Screen name="ClinicaStack" component={ClinicaStack} />
      )}
    </Tab.Navigator>
  );
};

export default TabRoutes;
