import styled from 'styled-components/native';
import { ScrollView, View } from 'react-native';

import { IContainerProps } from '.';

export const ContainerView = styled(View)<IContainerProps>`
  flex: 1;
  padding: ${({ paddingVertical }) => paddingVertical}px
    ${({ paddingHorizontal }) => paddingHorizontal}px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const ContainerScrollView = styled(ScrollView).attrs<IContainerProps>(
  ({ paddingVertical, paddingHorizontal }) => ({
    contentContainerStyle: {
      flexGrow: 1,
      paddingVertical,
      paddingHorizontal,
    },
  }),
)<IContainerProps>`
  flex: 1;
  padding: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
