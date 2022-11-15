import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { IClinica } from '@services/api/Clinica';

import HomeScreen from '@screens/home';
import AgendaConsultaScreen from '@screens/clinica/agenda-consulta';
import ClinicaScreen from '@screens/clinica';

import { TabParamList } from './tabs.routes';

export type HomeStackParams = {
  Home: undefined;
  Clinica: {
    clinica: IClinica;
  };
  AgendaConsulta: {
    clinica: IClinica;
  };
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
      <Stack.Screen name="Clinica" component={ClinicaScreen} />
      <Stack.Screen name="AgendaConsulta" component={AgendaConsultaScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
