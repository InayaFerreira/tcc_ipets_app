import React from 'react';

import Loader from '@atoms/Loader';
import KBScrollView from '@atoms/KBScrollView';
import { ContainerView } from './styles';

export interface IContainerProps {
  isLoading?: boolean;
  isScroll?: boolean;
  center?: boolean;
  paddingVertical?: number;
  paddingHorizontal?: number;
  backgroundColor?: string;
  children?: React.ReactNode;
}

const defaultPadding = 20;

const Container: React.FC<IContainerProps> = ({
  isLoading,
  isScroll = true,
  center = true,
  paddingVertical = defaultPadding,
  paddingHorizontal = defaultPadding,
  backgroundColor = '#ffffff',
  children,
}) => {
  return !isScroll ? (
    <ContainerView
      isLoading={isLoading}
      center={center}
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
      backgroundColor={backgroundColor}>
      {isLoading ? <Loader /> : children}
    </ContainerView>
  ) : (
    <KBScrollView
      isLoading={isLoading}
      paddingVertical={paddingVertical}
      paddingHorizontal={paddingHorizontal}
      backgroundColor={backgroundColor}>
      {isLoading ? <Loader /> : children}
    </KBScrollView>
  );
};

export default Container;
