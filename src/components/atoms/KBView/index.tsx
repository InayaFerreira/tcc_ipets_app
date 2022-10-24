import { Platform } from 'react-native';
import React from 'react';

import { Container } from './styles';

interface IKBViewProps {
  children?: React.ReactNode;
}

const KBView: React.FC<IKBViewProps> = ({ children }) => {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      {children}
    </Container>
  );
};

export default KBView;
