import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Logo from '@images/logo.svg';

import { COLORS } from '@styles/colors';

import VeterinarioForm from '@organisms/VeterinarioForm';
import ClinicaForm from '@organisms/ClinicaForm';
import ClienteForm from '@organisms/ClienteForm';
import Spacer from '@atoms/Spacer';
import Container from '@atoms/Container';

const Tab = createMaterialTopTabNavigator();

const CadastroScreen: React.FC = () => {
  return (
    <Container paddingHorizontal={0}>
      <Spacer top={12} />

      <Logo style={{ alignSelf: 'center' }} />

      <Spacer top={32} />

      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            textTransform: 'none',
          },
          tabBarIndicatorStyle: {
            height: 1,
            backgroundColor: '#ffffff',
          },
          tabBarStyle: {
            backgroundColor: COLORS.primary,
          },
          tabBarActiveTintColor: '#ffffff',
        }}>
        <Tab.Screen
          name="ClienteForm"
          component={ClienteForm}
          options={{ title: 'Cliente' }}
        />
        <Tab.Screen
          name="VeterinarioForm"
          component={VeterinarioForm}
          options={{ title: 'Veterinário' }}
        />
        <Tab.Screen
          name="ClinicaForm"
          component={ClinicaForm}
          options={{ title: 'Clínica' }}
        />
      </Tab.Navigator>
    </Container>
  );
};

export default CadastroScreen;
