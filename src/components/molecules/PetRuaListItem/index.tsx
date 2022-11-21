import React from 'react';

import { IPetRua } from '@services/api/Pet';

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
  pet: IPetRua;
  onPress?: (pet: IPetRua) => void;
  children?: React.ReactNode;
}

const PetRuaListItem: React.FC<IPetRuaListItemProps> = ({ pet, onPress }) => {
  return (
    <Container style={getOpacityByPress} onPress={() => onPress?.(pet)}>
      <ContainerImagem source={require('@images/pet.png')} />

      <ContainerDados>
        <CustomText size={13} bold numberOfLines={1}>
          {pet.nome}
        </CustomText>

        <Spacer top={12} />

        <ContainerAvaliacoes>
          <CustomText size={10} bold>
            {pet.localEncontrado}
          </CustomText>
        </ContainerAvaliacoes>
      </ContainerDados>
    </Container>
  );
};

export default PetRuaListItem;
