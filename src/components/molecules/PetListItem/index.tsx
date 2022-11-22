import React from 'react';

import { IPet } from '@services/api/Pet';

import { getOpacityByPress } from '@utils/styles';

import Spacer from '@atoms/Spacer';
import CustomText from '@atoms/CustomText';
import {
  Container,
  ContainerAvaliacoes,
  ContainerDados,
  ContainerImagem,
} from './styles';

interface IPetListItemProps {
  pet: IPet;
  selecionado: boolean;
  setAnimalSelecionado?: React.Dispatch<React.SetStateAction<IPet | undefined>>;
  dataConsulta?: string;
  onPress?: (pet: IPet, dataConsulta?: string) => void;
  children?: React.ReactNode;
}

const PetListItem: React.FC<IPetListItemProps> = ({
  pet,
  selecionado,
  setAnimalSelecionado,
  dataConsulta,
  onPress,
}) => {
  return (
    <Container
      style={getOpacityByPress}
      selecionado={selecionado}
      onPress={() => {
        onPress?.(pet, dataConsulta);
        setAnimalSelecionado?.(pet);
      }}>
      <ContainerImagem source={require('@images/pet.png')} />

      <ContainerDados>
        <CustomText size={13} bold numberOfLines={1}>
          {pet.nome}
        </CustomText>

        <Spacer top={12} />

        <ContainerAvaliacoes>
          <CustomText size={10} bold>
            {pet.raca}, {pet.idade} anos{'\n'}
            {pet.porte}
          </CustomText>

          <CustomText size={10} bold>
            {pet.ultimaConsulta}
          </CustomText>
        </ContainerAvaliacoes>
      </ContainerDados>
    </Container>
  );
};

export default PetListItem;
