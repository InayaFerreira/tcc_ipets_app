import React from 'react';

import { ContainerScrollView, ContainerView } from './styles';

export interface INanoContainerProps {
  isScrollView?: boolean;
  paddingVertical?: number;
  paddingHorizontal?: number;
  backgroundColor?: string;
  children?: React.ReactNode;
}

const NanoContainer: React.FC<INanoContainerProps> = ({
  isScrollView = true,
  paddingVertical = 8,
  paddingHorizontal = 16,
  backgroundColor = '#ffffff',
  children,
}) => {
  return !isScrollView ? (
    <ContainerView
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
      backgroundColor={backgroundColor}>
      {children}
    </ContainerView>
  ) : (
    <ContainerScrollView
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
      backgroundColor={backgroundColor}>
      {children}
    </ContainerScrollView>
  );
};

export default NanoContainer;
