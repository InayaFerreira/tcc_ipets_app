import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { IClinica } from '@services/api/Clinica';

import SosScreen from '@screens/sos';
import PerfilClienteScreen from '@screens/perfil-cliente';
import HomeScreen from '@screens/home';
import AgendaConsultaScreen from '@screens/clinica/agenda-consulta';
import ClinicaScreen from '@screens/clinica';

import { TabParamList } from './tabs.routes';

export type ClienteStackParams = {
  Home: undefined;
  Clinica: {
    clinica: IClinica;
  };
  AgendaConsulta: {
    clinica: IClinica;
  };
  PerfilCliente: undefined;
  SOS: undefined;
};

export type ClienteStackNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'ClienteStack'>,
  NativeStackNavigationProp<ClienteStackParams>
>;

const Stack = createNativeStackNavigator<ClienteStackParams>();

const ClienteStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Clinica" component={ClinicaScreen} />
      <Stack.Screen name="AgendaConsulta" component={AgendaConsultaScreen} />
      <Stack.Screen name="PerfilCliente" component={PerfilClienteScreen} />
      <Stack.Screen name="SOS" component={SosScreen} />
    </Stack.Navigator>
  );
};

export default ClienteStack;
