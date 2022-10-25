import styled from 'styled-components/native';

import { IContainerProps } from '.';

export const ContainerView = styled.View<IContainerProps>`
  flex: 1;
  align-items: ${({ center }) => (center ? 'center' : 'undefined')};
  justify-content: center;
  padding: ${({ paddingVertical }) => paddingVertical}px
    ${({ paddingHorizontal }) => paddingHorizontal}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
