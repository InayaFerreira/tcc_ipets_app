import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './home.stack';

export type TabParamList = {
  HomeStack: undefined;
};

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { display: 'none' },
      }}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
    </Tab.Navigator>
  );
};

export default TabRoutes;
