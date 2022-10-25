import React from 'react';

import { IContainerProps } from '@atoms/Container';
import { Container } from './styles';

const KBScrollView: React.FC<IContainerProps> = ({
  isLoading,
  paddingVertical = 20,
  paddingHorizontal = 20,
  backgroundColor = '#ffffff',
  children,
}) => {
  return (
    <Container
      isLoading={isLoading}
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
      backgroundColor={backgroundColor}>
      {children}
    </Container>
  );
};

export default KBScrollView;
