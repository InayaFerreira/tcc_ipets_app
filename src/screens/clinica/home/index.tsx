import { Pressable, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

import { IPet } from '@services/api/Pet';
import { IConsulta } from '@services/api/Consulta';
import { ClinicaService } from '@services/api/Clinica';
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

const ClinicaHomeScreen: React.FC = () => {
  const { userInfo, signOut } = useAuth();
  const popup = usePopup();

  const [pets, setPets] = useState<IPet[]>([]);
  const [consultas, setConsultas] = useState<IConsulta[]>([]);

  const handlePetPress = (pet: IPet) => {
    popup.show({
      title: pet.nome,
      content: `Raça: ${pet.raca}\n\nIdade: ${pet.idade} anos\n\nPorte: ${pet.porte}`,
      buttons: [
        {
          text: 'OK',
          handler: popup.hide,
        },
      ],
    });
  };

  const handleConsultaPress = (pet: IPet, dataConsulta?: string) => {
    popup.show({
      title: 'Informações da consulta',
      content: `Nome do pet: ${pet.nome}\n\nData: ${new Date(
        dataConsulta!,
      ).toLocaleString('pt-BR')}`,
      buttons: [
        {
          text: 'Converse com o cliente',
          handler: () => {
            popup.show({
              title: 'Aviso',
              content: 'Este recurso encontra-se em desenvolvimento.',
              buttons: [
                {
                  text: 'OK',
                  handler: popup.hide,
                },
              ],
            });
          },
        },
        {
          text: 'OK',
          handler: popup.hide,
        },
      ],
      orientationButtons: 'column',
    });
  };

  const openDatePicker = () => {
    popup.show({
      content: <CustomCalendar onDayPress={popup.hide} />,
    });
  };

  useEffect(() => {
    ClinicaService.ListagemPet(userInfo.clinicaId).then(({ data }) => {
      setPets(data);
    });

    ClinicaService.ListagemConsulta(userInfo.clinicaId).then(({ data }) => {
      setConsultas(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container paddingHorizontal={0}>
      <Spacer top={84} />

      <ContainerWhite>
        <ContainerImagem source={require('@images/clinica.png')} />

        <Spacer top={78} />

        <ContainerTitulo>
          <CustomText size={FONT_SIZE_H2} bold center>
            {userInfo.nome}
          </CustomText>

          <Spacer top={12} />

          <CustomText bold center>
            {userInfo.endereco}
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
          {pets.map((pet, idx) => (
            <PetListItem
              key={idx}
              pet={pet}
              selecionado={false}
              onPress={handlePetPress}
            />
          ))}
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
          {consultas.map((consulta, idx) => {
            const pet = pets.find(p => p.petId === consulta.idPet);
            return (
              <PetListItem
                key={idx}
                pet={pet!}
                selecionado={false}
                dataConsulta={consulta.data}
                onPress={handleConsultaPress}
              />
            );
          })}
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
