import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import ClinicaHomeScreen from '@screens/clinica/home';

import { TabParamList } from './tabs.routes';

export type ClinicaStackParams = {
  Home: undefined;
};

export type ClinicaStackNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'ClinicaStack'>,
  NativeStackNavigationProp<ClinicaStackParams>
>;

const Stack = createNativeStackNavigator<ClinicaStackParams>();

const ClinicaStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={ClinicaHomeScreen} />
    </Stack.Navigator>
  );
};

export default ClinicaStack;
