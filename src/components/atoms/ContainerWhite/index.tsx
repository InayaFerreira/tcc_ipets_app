import React from 'react';

import { Container } from './styles';

interface IContainerWhiteProps {
  children?: React.ReactNode;
}

const ContainerWhite: React.FC<IContainerWhiteProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContainerWhite;
