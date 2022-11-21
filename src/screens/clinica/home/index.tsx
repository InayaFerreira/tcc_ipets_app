import { Pressable, ScrollView } from 'react-native';
import React from 'react';

import { IPet } from '@services/api/Pet';
import { usePopup } from '@context/popup';
import { useAuth } from '@context/auth';

import CalendarIcon from '@icons/calendario.svg';

import { getOpacityByPress } from '@utils/styles';
import { FONT_SIZE_H2, FONT_SIZE_H3 } from '@styles/typograph';

import PetListItem from '@molecules/PetListItem';
import Button from '@molecules/Button';
import Spacer from '@atoms/Spacer';
import Row from '@atoms/Row';
import CustomText from '@atoms/CustomText';
import CustomCalendar from '@atoms/CustomCalendar';
import ContainerWhite from '@atoms/ContainerWhite';
import Container from '@atoms/Container';

import { ContainerImagem, ContainerTitulo } from '../styles';

interface IClinicaHomeScreenProps {
  children?: React.ReactNode;
}

const ClinicaHomeScreen: React.FC<IClinicaHomeScreenProps> = () => {
  const { signOut } = useAuth();
  const popup = usePopup();

  const openDatePicker = () => {
    popup.show({
      content: <CustomCalendar onDayPress={popup.hide} />,
    });
  };

  return (
    <Container paddingHorizontal={0}>
      <Spacer top={84} />

      <ContainerWhite>
        <ContainerImagem source={require('@images/clinica.png')} />

        <Spacer top={78} />

        <ContainerTitulo>
          <CustomText size={FONT_SIZE_H2} bold center>
            Clínica Futuro
          </CustomText>

          <Spacer top={12} />

          <CustomText bold center>
            Rua Edinaldo Pereira, 245 São Paulo -SP
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
          <PetListItem
            pet={
              {
                nome: 'Lua',
                raca: 'Vira-Lata',
                idade: 3,
                ultimaConsulta: '13/01/2022',
              } as IPet
            }
            selecionado={false}
          />

          <PetListItem
            pet={
              {
                nome: 'Sol',
                raca: 'Vira-Lata',
                idade: 3,
                ultimaConsulta: '10/11/2022',
              } as IPet
            }
            selecionado={false}
          />

          <PetListItem
            pet={
              {
                nome: 'Apyr',
                raca: 'Pastor Alemão',
                idade: 3,
                ultimaConsulta: '15/08/2022',
              } as IPet
            }
            selecionado={false}
          />
        </ScrollView>

        <Spacer top={16} />

        <Row justifyContent="flex-start">
          <CustomText size={FONT_SIZE_H2} bold>
            Consultas Marcadas
          </CustomText>

          <Spacer right={8} />

          <Pressable style={getOpacityByPress} onPress={openDatePicker}>
            <CalendarIcon />
          </Pressable>
        </Row>

        <Spacer top={16} />

        <ScrollView horizontal>
          <PetListItem
            pet={
              {
                nome: 'Lua',
                raca: 'Vira-Lata',
                idade: 3,
                ultimaConsulta: '13/01/2022',
              } as IPet
            }
            selecionado={false}
          />

          <PetListItem
            pet={
              {
                nome: 'Sol',
                raca: 'Vira-Lata',
                idade: 3,
                ultimaConsulta: '10/11/2022',
              } as IPet
            }
            selecionado={false}
          />

          <PetListItem
            pet={
              {
                nome: 'Apyr',
                raca: 'Pastor Alemão',
                idade: 3,
                ultimaConsulta: '15/08/2022',
              } as IPet
            }
            selecionado={false}
          />
        </ScrollView>

        <Spacer top={24} />

        <CustomText size={FONT_SIZE_H2} bold>
          Veterinários
        </CustomText>

        <CustomText size={FONT_SIZE_H3}>
          Funcionalidade em desenvolvimento
        </CustomText>

        <Spacer bottom={16} />
      </ContainerWhite>
    </Container>
  );
};

export default ClinicaHomeScreen;
