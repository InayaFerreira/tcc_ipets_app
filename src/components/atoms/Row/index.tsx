import { FlexStyle } from 'react-native';
import React from 'react';

import { Container } from './styles';

export interface IRowProps {
  alignItems?: FlexStyle['alignItems'];
  justifyContent?: FlexStyle['justifyContent'];
  children?: React.ReactNode;
}

const Row: React.FC<IRowProps> = ({ alignItems, justifyContent, children }) => {
  return (
    <Container alignItems={alignItems} justifyContent={justifyContent}>
      {children}
    </Container>
  );
};

export default Row;
