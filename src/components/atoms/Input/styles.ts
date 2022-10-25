import styled from 'styled-components/native';
import TextInputMask from 'react-native-text-input-mask';

import { SPACE_XS } from '@styles/spacing';

import { IInputProps } from '.';

export const ContainerInput = styled.View`
  width: 100%;
`;

export const ContainerLabel = styled.View`
  margin-top: 12px;
  margin-bottom: ${SPACE_XS}px;
`;

export const Container = styled(TextInputMask)<IInputProps>`
  padding: 4px ${props => (props.icon !== undefined ? 42 : 16)}px;
  background-color: #ffffff;
  border: 1px solid transparent;
  border-radius: 40px;
`;

export const ContainerErrorMessage = styled.View`
  margin-top: ${SPACE_XS}px;
`;

export const ContainerIcon = styled.View`
  position: absolute;
  z-index: 9999;
  bottom: 6px;
  left: 12px;
`;
