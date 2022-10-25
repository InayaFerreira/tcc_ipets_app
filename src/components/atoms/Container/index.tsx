import React from 'react';

import { ContainerScrollView, ContainerView } from './styles';

export interface IContainerProps {
  isScrollView?: boolean;
  paddingVertical?: number;
  paddingHorizontal?: number;
  backgroundColor?: string;
  children?: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({
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

export default Container;
