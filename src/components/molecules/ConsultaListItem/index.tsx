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

interface IConsultaListItemProps {
  consulta: {
    titulo: string;
    data: string;
  };
  onPress?: () => void;
  children?: React.ReactNode;
}

const ConsultaListItem: React.FC<IConsultaListItemProps> = ({
  consulta,
  onPress,
}) => {
  return (
    <Container style={getOpacityByPress} onPress={onPress}>
      <ContainerImagem source={require('@images/consulta.png')} />

      <ContainerDados>
        <CustomText size={13} bold>
          {consulta.titulo}
        </CustomText>

        <Spacer top={12} />

        <ContainerAvaliacoes>
          <CustomText size={10} bold>
            {new Date(consulta.data).toLocaleDateString('pt-BR')}
          </CustomText>
        </ContainerAvaliacoes>
      </ContainerDados>
    </Container>
  );
};

export default ConsultaListItem;
