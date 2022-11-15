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
  consulta: any;
  children?: React.ReactNode;
}

const ConsultaListItem: React.FC<IConsultaListItemProps> = ({ consulta }) => {
  return (
    <Container style={getOpacityByPress}>
      <ContainerImagem source={require('@images/consulta.png')} />

      <ContainerDados>
        <CustomText size={13} bold>
          {consulta.titulo}
        </CustomText>

        <Spacer top={12} />

        <ContainerAvaliacoes>
          <CustomText size={10} bold>
            {consulta.tipo}
          </CustomText>

          <CustomText size={10} bold>
            {consulta.data}
          </CustomText>
        </ContainerAvaliacoes>
      </ContainerDados>
    </Container>
  );
};

export default ConsultaListItem;
