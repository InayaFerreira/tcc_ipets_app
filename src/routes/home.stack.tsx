import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { IClinica } from '@services/api/Clinica';

import HomeScreen from '@screens/home';

import { TabParamList } from './tabs.routes';

export type HomeStackParams = {
  Home: undefined;
  Clinica: { clinica: IClinica };
};

export type HomeStackNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'HomeStack'>,
  NativeStackNavigationProp<HomeStackParams>
>;

const Stack = createNativeStackNavigator<HomeStackParams>();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Clinica" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
