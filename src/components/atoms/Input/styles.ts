import styled from 'styled-components/native';
import TextInputMask from 'react-native-text-input-mask';

import { SPACE_XS } from '@styles/spacing';

export const ContainerInput = styled.View`
  width: 100%;
`;

export const ContainerLabel = styled.View`
  margin-top: 12px;
  margin-bottom: ${SPACE_XS}px;
`;

export const Container = styled(TextInputMask)`
  padding: 4px 14px;
  background-color: #ffffff;
  border: 1px solid transparent;
  border-radius: 40px;
`;

export const ContainerErrorMessage = styled.View`
  margin-top: ${SPACE_XS}px;
`;
