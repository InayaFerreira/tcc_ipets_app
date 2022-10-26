import { Pressable, ScrollView } from 'react-native';
import React from 'react';

import { ClinicaService } from '@services/api/Clinica';

import Menu from '@images/menu.svg';
import Logo from '@images/logo.svg';

import { FONT_SIZE_H2, FONT_SIZE_H3 } from '@styles/typograph';

import ClinicaListItem from '@molecules/ClinicaListItem';
import Button from '@molecules/Button';
import Spacer from '@atoms/Spacer';
import CustomText from '@atoms/CustomText';
import ContainerWhite from '@atoms/ContainerWhite';
import Container from '@atoms/Container';
import { ContainerTitulo } from './styles';

const HomeScreen: React.FC = () => {
  return (
    <Container paddingHorizontal={0}>
      <Spacer top={16} />

      <Pressable style={{ position: 'absolute', top: 16, left: 16 }}>
        <Menu />
      </Pressable>

      <Logo style={{ alignSelf: 'center' }} width={227} height={116} />

      <Spacer top={16} />

      <ContainerWhite>
        <ContainerTitulo>
          <CustomText size={FONT_SIZE_H3} center bold>
            Encontrou um animal de rua que precisa de cuidados?
          </CustomText>
        </ContainerTitulo>

        <Spacer top={16} />

        <Button widthPercentage={50}>S.O.S</Button>

        <Spacer top={8} />

        <Button widthPercentage={50}>Abrigos Próximos</Button>

        <Spacer top={12} />

        <CustomText size={FONT_SIZE_H2} bold>
          Clínicas Novas:
        </CustomText>

        <Spacer top={16} />

        <ScrollView horizontal>
          {ClinicaService.Listagem().map(clinica => (
            <ClinicaListItem key={clinica.id} clinica={clinica} />
          ))}
        </ScrollView>

        <Spacer top={16} />

        <CustomText size={FONT_SIZE_H2} bold>
          Clínicas mais bem avaliadas:
        </CustomText>

        <Spacer top={16} />

        <ScrollView horizontal>
          {ClinicaService.Listagem().map(clinica => (
            <ClinicaListItem key={clinica.id} clinica={clinica} />
          ))}
        </ScrollView>

        <Spacer top={16} />

        <CustomText size={FONT_SIZE_H2} bold>
          Clínicas mais próximas:
        </CustomText>

        <Spacer top={16} />

        <ScrollView horizontal>
          {ClinicaService.Listagem().map(clinica => (
            <ClinicaListItem key={clinica.id} clinica={clinica} />
          ))}
        </ScrollView>
      </ContainerWhite>
    </Container>
  );
};

export default HomeScreen;
