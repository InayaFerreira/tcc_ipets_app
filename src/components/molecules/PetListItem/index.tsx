import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { IClinica } from '@services/api/Clinica';

import { getOpacityByPress } from '@utils/styles';

import { HomeStackNavigationProp } from '@routes/home.stack';

import AvaliacaoEstrelas from '@molecules/AvaliacaoEstrelas';
import Spacer from '@atoms/Spacer';
import CustomText from '@atoms/CustomText';
import {
  Container,
  ContainerAvaliacoes,
  ContainerDados,
  ContainerImagem,
} from './styles';

interface IPetListItemProps {
  clinica: IClinica;
  children?: React.ReactNode;
}

const PetListItem: React.FC<IPetListItemProps> = ({ clinica }) => {
  const { navigate } = useNavigation<HomeStackNavigationProp>();

  return (
    <Container
      style={getOpacityByPress}
      onPress={() => navigate('Clinica', { clinica })}>
      <ContainerImagem source={{ uri: clinica.imagem }} />

      <ContainerDados>
        <CustomText size={13} bold numberOfLines={1}>
          {clinica.nome}
        </CustomText>

        <CustomText size={10} numberOfLines={2}>
          {clinica.servicos.join(', ')}.
        </CustomText>

        <Spacer top={12} />

        <ContainerAvaliacoes>
          <AvaliacaoEstrelas avaliacao={clinica.avaliacao} />

          <CustomText size={10} bold>
            {clinica.avaliacaoCount} avaliações
          </CustomText>
        </ContainerAvaliacoes>
      </ContainerDados>
    </Container>
  );
};

export default PetListItem;
