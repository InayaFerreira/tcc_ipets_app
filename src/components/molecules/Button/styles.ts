import styled from 'styled-components/native';
import { Pressable } from 'react-native';

import { SPACE_SM } from '@styles/spacing';

import { IButtonProps } from '.';

export const Container = styled(Pressable)<IButtonProps>`
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: ${props => props.widthPercentage}%;
  padding: 6px 12px;
  background-color: ${props => props.color};
  border: 1px solid transparent;
  border-radius: 40px;
`;

export const ContainerIcon = styled.View`
  align-items: center;
  justify-content: center;
  margin-right: ${SPACE_SM}px;
  width: 14px;
  height: 14px;
`;

export const ContainerLoader = styled.View`
  margin: 1.6px;
`;
