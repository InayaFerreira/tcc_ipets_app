import { Pressable, ScrollView } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Voltar from '@images/voltar.svg';

import { HomeStackParams } from '@routes/home.stack';

import PetListItem from '@molecules/PetListItem';
import Spacer from '@atoms/Spacer';
import CustomText from '@atoms/CustomText';
import ContainerWhite from '@atoms/ContainerWhite';
import Container from '@atoms/Container';

type Props = NativeStackScreenProps<HomeStackParams, 'AgendaConsulta'>;

const AgendaConsultaScreen: React.FC<Props> = ({ navigation, route }) => {
  const { clinica } = route.params;

  return (
    <Container paddingHorizontal={0}>
      <Spacer top={16} />

      <Pressable
        style={{ position: 'absolute', top: 16, left: 16 }}
        onPress={() => navigation.goBack()}>
        <Voltar />
      </Pressable>

      <Spacer top={68} />

      <CustomText color="#ffffff" size={32} bold center>
        Agendar Consulta
      </CustomText>

      <Spacer top={16} />

      <ContainerWhite>
        <CustomText>Selecione o Pet:</CustomText>

        <ScrollView horizontal>
          {ClinicaService.Listagem().map(clinica => (
            <PetListItem key={clinica.id} clinica={clinica} />
          ))}
        </ScrollView>
      </ContainerWhite>
    </Container>
  );
};

export default AgendaConsultaScreen;
