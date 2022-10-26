import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.Pressable`
  width: 140px;
  height: 182px;
  margin-right: 12px;
  border: 1px solid #e6e6e6;
  border-radius: 14px;
`;

export const ContainerImagem = styled(Image)`
  width: 140px;
  height: 88px;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
`;

export const ContainerDados = styled.View`
  flex: 1;
  padding: 6px;
`;

export const ContainerAvaliacoes = styled.View`
  position: absolute;
  padding: 6px;
  bottom: 0px;
`;
