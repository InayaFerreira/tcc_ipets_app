import { ScrollView } from 'react-native';
import React from 'react';

import { useAuth } from '@context/auth';

import CalendarIcon from '@icons/calendario.svg';
import AddIcon from '@icons/add.svg';

import { FONT_SIZE_H2 } from '@styles/typograph';

import Button from '@molecules/Button';
import Spacer from '@atoms/Spacer';
import Row from '@atoms/Row';
import CustomText from '@atoms/CustomText';
import ContainerWhite from '@atoms/ContainerWhite';
import Container from '@atoms/Container';

import { ContainerImagem, ContainerTitulo } from '../styles';

interface IClinicaHomeScreenProps {
  children?: React.ReactNode;
}

const ClinicaHomeScreen: React.FC<IClinicaHomeScreenProps> = () => {
  const { signOut } = useAuth();

  return (
    <Container paddingHorizontal={0}>
      <Spacer top={84} />

      <ContainerWhite>
        <ContainerImagem source={require('@images/clinica.png')} />

        <Spacer top={78} />

        <ContainerTitulo>
          <CustomText size={FONT_SIZE_H2} bold center>
            clinica.nome
          </CustomText>

          <Spacer top={12} />

          <CustomText bold center>
            clinica.endereco
          </CustomText>
        </ContainerTitulo>

        <Spacer top={24} />

        <Button widthPercentage={50} onPress={signOut}>
          Logout
        </Button>

        <Spacer top={24} />

        <CustomText size={FONT_SIZE_H2} bold>
          Pets Cadastrados
        </CustomText>

        <Spacer top={16} />

        <ScrollView horizontal>
          <></>
        </ScrollView>

        <Spacer top={16} />

        <Row justifyContent="flex-start">
          <CustomText size={FONT_SIZE_H2} bold>
            Consultas Marcadas
          </CustomText>

          <Spacer right={8} />

          <CalendarIcon />
        </Row>

        <Spacer top={16} />

        <ScrollView horizontal>
          <></>
        </ScrollView>

        <Spacer bottom={16} />
      </ContainerWhite>
    </Container>
  );
};

export default ClinicaHomeScreen;
