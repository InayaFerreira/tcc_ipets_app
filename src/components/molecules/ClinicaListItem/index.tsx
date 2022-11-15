import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { IClinica } from '@services/api/Clinica';

import { getOpacityByPress } from '@utils/styles';

import { ClienteStackNavigationProp } from '@routes/cliente.stack';

import AvaliacaoEstrelas from '@molecules/AvaliacaoEstrelas';
import Spacer from '@atoms/Spacer';
import CustomText from '@atoms/CustomText';
import {
  Container,
  ContainerAvaliacoes,
  ContainerDados,
  ContainerImagem,
} from './styles';

interface IClinicaListItemProps {
  clinica: IClinica;
  children?: React.ReactNode;
}

const ClinicaListItem: React.FC<IClinicaListItemProps> = ({ clinica }) => {
  const { navigate } = useNavigation<ClienteStackNavigationProp>();

  return (
    <Container
      style={getOpacityByPress}
      onPress={() => navigate('Clinica', { clinica })}>
      <ContainerImagem source={require('@images/clinica.png')} />

      <ContainerDados>
        <CustomText size={13} bold numberOfLines={1}>
          {clinica.nome}
        </CustomText>

        <CustomText size={10} numberOfLines={2}>
          {clinica.servicos}
        </CustomText>

        <Spacer top={12} />

        <ContainerAvaliacoes>
          <AvaliacaoEstrelas avaliacao={clinica.pontuacao} />

          <CustomText size={10} bold>
            {clinica.numeroAvaliacoes} avaliações
          </CustomText>
        </ContainerAvaliacoes>
      </ContainerDados>
    </Container>
  );
};

export default ClinicaListItem;
