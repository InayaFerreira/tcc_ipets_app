import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { SPACE_MD, spacing } from '@styles/spacing';

interface IOrientationButtons {
  orientation?: string;
}

export const ContainerPopup = styled.Pressable`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 16px;
`;

export const Container = styled.Pressable`
  width: ${Dimensions.get('screen').width <= 768 ? 300 : 576}px;
  padding: ${spacing(SPACE_MD)};
  background-color: #fff;
  border-radius: 10px;
`;

export const ContainerBotoes = styled.View<IOrientationButtons>`
  flex-direction: ${props =>
    props.orientation === 'column' ? 'column' : 'row'};
  justify-content: space-around;
  padding-top: 16px;
  border-top-width: 1px;
  border-color: #eee;
`;

export const ButtonClose = styled.TouchableOpacity`
  align-self: flex-end;
  margin: 33px 30px 0 0;
`;
