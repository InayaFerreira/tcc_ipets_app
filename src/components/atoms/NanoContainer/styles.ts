import styled from 'styled-components/native';
import { ScrollView, View } from 'react-native';

import { INanoContainerProps } from '.';

export const ContainerView = styled(View)<INanoContainerProps>`
  flex: 1;
  padding: ${({ paddingVertical }) => paddingVertical}px
    ${({ paddingHorizontal }) => paddingHorizontal}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const ContainerScrollView = styled(
  ScrollView,
).attrs<INanoContainerProps>(({ paddingVertical, paddingHorizontal }) => ({
  contentContainerStyle: {
    flexGrow: 1,
    paddingVertical,
    paddingHorizontal,
  },
}))<INanoContainerProps>`
  flex: 1;
  padding: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
