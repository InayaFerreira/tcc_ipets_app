import { Pressable, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { IPet, IPetRua, PetService } from '@services/api/Pet';
import { ConsultaService, IConsulta } from '@services/api/Consulta';
import { ClinicaService, IClinica } from '@services/api/Clinica';

import { FONT_SIZE_H2 } from '@styles/typograph';

import { ClienteStackParams } from '@routes/cliente.stack';

import PetRuaListItem from '@molecules/PetRuaListItem';
import { usePopup } from '@context/popup';
import { useAuth } from '@context/auth';
import PetListItem from '@molecules/PetListItem';
import ConsultaListItem from '@molecules/ConsultaListItem';
import Button from '@molecules/Button';
import VoltarButton from '@atoms/Voltar';
import Spacer from '@atoms/Spacer';
import CustomText from '@atoms/CustomText';
import ContainerWhite from '@atoms/ContainerWhite';
import Container from '@atoms/Container';
import { ContainerImagem, ContainerTitulo } from './styles';

type Props = NativeStackScreenProps<ClienteStackParams, 'PerfilCliente'>;

const PerfilClienteScreen: React.FC<Props> = ({ navigation }) => {
  const { userInfo, signOut } = useAuth();
  const popup = usePopup();

  const [pets, setPets] = useState<IPet[]>([]);
  const [consultas, setConsultas] = useState<IConsulta[]>([]);
  const [clinicas, setClinicas] = useState<IClinica[]>([]);
  const [petsRua, setPetsRua] = useState<IPetRua[]>([]);

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

  const handleConsultaPress = (
    clinica: string,
    nomePet: string,
    data: string,
  ) => {
    popup.show({
      title: 'Informações da consulta',
      content: `Clínica: ${clinica}\n\nNome do Pet: ${nomePet}\n\nData: ${data}`,
      buttons: [
        {
          text: 'OK',
          handler: popup.hide,
        },
      ],
    });
  };

  const handleAnimalRuaPress = (pet: IPetRua) => {
    popup.show({
      title: 'Ficha do animal de rua',
      content: `Nome Provisório: ${pet.nome}\n\nPorte: ${pet.porte}\n\nEncontrado em: ${pet.localEncontrado}\n\nStatus: Em aguardo`,
      buttons: [
        {
          text: 'OK',
          handler: popup.hide,
        },
      ],
    });
  };

  useEffect(() => {
    PetService.ListagemPet(userInfo.usuarioId).then(({ data }) => {
      setPets(data);
    });

    ConsultaService.ListagemConsulta(userInfo.usuarioId).then(({ data }) => {
      setConsultas(data);
    });

    ClinicaService.Listagem().then(({ data }) => {
      setClinicas(data);
    });

    PetService.ListagemPetRua().then(({ data }) => {
      setPetsRua(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container paddingHorizontal={0}>
      <Spacer top={16} />

      <Pressable
        style={{ position: 'absolute', top: 16, left: 16 }}
        onPress={() => navigation.goBack()}>
        <VoltarButton />
      </Pressable>

      <Spacer top={68} />

      <ContainerWhite>
        <ContainerImagem source={require('@images/user.png')} />

        <Spacer top={78} />

        <ContainerTitulo>
          <CustomText size={FONT_SIZE_H2} bold center>
            {userInfo?.nome}
          </CustomText>

          <Spacer top={12} />

          <CustomText bold center>
            {userInfo?.endereco}
          </CustomText>
        </ContainerTitulo>

        <Spacer top={36} />

        <Button widthPercentage={50} onPress={signOut}>
          Logout
        </Button>

        <Spacer top={24} />

        <CustomText size={FONT_SIZE_H2} bold>
          Pets Cadastrados
        </CustomText>

        <Spacer top={16} />

        <ScrollView horizontal>
          {pets.map(pet => (
            <PetListItem
              key={pet.petId}
              pet={pet}
              selecionado={false}
              onPress={handlePetPress}
            />
          ))}
        </ScrollView>

        <Spacer top={24} />

        <CustomText size={FONT_SIZE_H2} bold>
          Consultas Marcadas
        </CustomText>

        <Spacer top={16} />

        <ScrollView horizontal>
          {consultas.map(consulta => {
            const pet = pets.find(p => p.petId === consulta.idPet);
            const clinica = clinicas.find(
              c => c.clinicaId === consulta.idClinica,
            );

            return (
              <ConsultaListItem
                key={pet?.petId}
                consulta={{
                  titulo: `${pet?.nome} vai para ${clinica?.nome}`,
                  data: consulta.data,
                }}
                onPress={() =>
                  handleConsultaPress(
                    clinica?.nome || '',
                    pet?.nome || '',
                    new Date(consulta.data).toLocaleDateString('pt-BR'),
                  )
                }
              />
            );
          })}
        </ScrollView>

        <Spacer top={24} />

        <CustomText size={FONT_SIZE_H2} bold>
          Animais de Rua
        </CustomText>

        <Spacer top={16} />

        <ScrollView horizontal>
          {petsRua.map((petRua, idx) => (
            <PetRuaListItem
              key={idx}
              pet={petRua}
              onPress={handleAnimalRuaPress}
            />
          ))}
        </ScrollView>
      </ContainerWhite>
    </Container>
  );
};

export default PerfilClienteScreen;
