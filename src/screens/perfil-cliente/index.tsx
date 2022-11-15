import { Pressable, ScrollView } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { IPet } from '@services/api/PetService';
import { useAuth } from '@context/auth';

import Voltar from '@images/voltar.svg';

import { FONT_SIZE_H2 } from '@styles/typograph';

import { ClienteStackParams } from '@routes/cliente.stack';

import PetRuaListItem from '@molecules/PetRuaListItem';
import PetListItem from '@molecules/PetListItem';
import ConsultaListItem from '@molecules/ConsultaListItem';
import Button from '@molecules/Button';
import Spacer from '@atoms/Spacer';
import CustomText from '@atoms/CustomText';
import ContainerWhite from '@atoms/ContainerWhite';
import Container from '@atoms/Container';
import { ContainerImagem, ContainerTitulo } from './styles';

type Props = NativeStackScreenProps<ClienteStackParams, 'PerfilCliente'>;

const PerfilClienteScreen: React.FC<Props> = ({ navigation }) => {
  const { signOut } = useAuth();

  return (
    <Container paddingHorizontal={0}>
      <Spacer top={16} />

      <Pressable
        style={{ position: 'absolute', top: 16, left: 16 }}
        onPress={() => navigation.goBack()}>
        <Voltar />
      </Pressable>

      <Spacer top={68} />

      <ContainerWhite>
        <ContainerImagem source={require('@images/user.png')} />

        <Spacer top={78} />

        <ContainerTitulo>
          <CustomText size={FONT_SIZE_H2} bold center>
            Jorge Nunes
          </CustomText>

          <Spacer top={12} />

          <CustomText bold center>
            Rua Edinaldo Pereira, 245 São Paulo -SP
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
          Consultas Marcadas
        </CustomText>

        <Spacer top={16} />

        <ScrollView horizontal>
          <ConsultaListItem
            consulta={{
              titulo: 'Lua vai para Clínica Futuro',
              tipo: 'Castração',
              data: '25/12/22 - 16:30',
            }}
          />

          <ConsultaListItem
            consulta={{
              titulo: 'Sol vai para Clínica Osmond',
              tipo: 'Dermatologia',
              data: '15/10/22 - 15:30',
            }}
          />

          <ConsultaListItem
            consulta={{
              titulo: 'Apyr vai para Clínica ENA',
              tipo: 'Hemodialise',
              data: '25/12/22 - 16:30',
            }}
          />
        </ScrollView>

        <Spacer top={24} />

        <CustomText size={FONT_SIZE_H2} bold>
          Animais de Rua
        </CustomText>

        <Spacer top={16} />

        <ScrollView horizontal>
          <PetRuaListItem
            pet={{
              nome: 'Adelson',
              endereco: 'Rua Almirante Barroso, 286, SP',
              status: 'Em Aguardo',
              atualizacao: 'Atualizado hoje',
            }}
          />

          <PetRuaListItem
            pet={{
              nome: 'Cleiton',
              endereco: 'Rua José Bonifácio, 21, SP',
              status: 'Em tratamento',
              atualizacao: 'Atualizado ontem',
            }}
          />

          <PetRuaListItem
            pet={{
              nome: 'Johnas',
              endereco: 'Rua Jade, 3, SP',
              status: 'Abrigado',
              atualizacao: 'Atualizado a 2 dias',
            }}
          />
        </ScrollView>
      </ContainerWhite>
    </Container>
  );
};

export default PerfilClienteScreen;
