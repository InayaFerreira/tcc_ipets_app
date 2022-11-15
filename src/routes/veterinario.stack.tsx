import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import HomeScreen from '@screens/home';

import { TabParamList } from './tabs.routes';

export type VeterinarioStackParams = {
  Home: undefined;
};

export type VeterinarioStackNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'VeterinarioStack'>,
  NativeStackNavigationProp<VeterinarioStackParams>
>;

const Stack = createNativeStackNavigator<VeterinarioStackParams>();

const VeterinarioStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default VeterinarioStack;
