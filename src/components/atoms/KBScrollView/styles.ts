import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { IContainerProps } from '@atoms/Container';

export const Container = styled(KeyboardAwareScrollView).attrs<IContainerProps>(
  props => {
    return {
      contentContainerStyle: {
        paddingVertical: props.paddingVertical,
        paddingHorizontal: props.paddingHorizontal,
        backgroundColor: props.backgroundColor,
      },
    };
  },
)<IContainerProps>`
  flex: 1;
  padding: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
