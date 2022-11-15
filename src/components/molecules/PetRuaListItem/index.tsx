import React from 'react';

import { getOpacityByPress } from '@utils/styles';

import Spacer from '@atoms/Spacer';
import CustomText from '@atoms/CustomText';
import {
  Container,
  ContainerAvaliacoes,
  ContainerDados,
  ContainerImagem,
} from './styles';

interface IPetRuaListItemProps {
  pet: any;

  children?: React.ReactNode;
}

const PetRuaListItem: React.FC<IPetRuaListItemProps> = ({ pet }) => {
  return (
    <Container style={getOpacityByPress}>
      <ContainerImagem source={require('@images/pet.png')} />

      <ContainerDados>
        <CustomText size={13} bold numberOfLines={1}>
          {pet.nome}
        </CustomText>

        <Spacer top={12} />

        <ContainerAvaliacoes>
          <CustomText size={10} bold>
            {pet.endereco}
            {'\n'}
            {pet.status}
          </CustomText>

          <CustomText size={10} bold>
            {pet.atualizacao}
          </CustomText>
        </ContainerAvaliacoes>
      </ContainerDados>
    </Container>
  );
};

export default PetRuaListItem;
