import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { HomeStackParams } from '@routes/home.stack';

type Props = NativeStackScreenProps<HomeStackParams, 'Clinica'>;

const ClinicaScreen: React.FC<Props> = ({ route }) => {
  const { clinica } = route.params;

  return <></>;
};

export default ClinicaScreen;
