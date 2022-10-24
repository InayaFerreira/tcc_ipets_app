import { ActivityIndicator } from 'react-native';
import React from 'react';

import { COLORS } from '@styles/colors';

interface ILoaderProps {
  color?: string;
  size?: 'large' | 'small';
  children?: React.ReactNode;
}

const Loader: React.FC<ILoaderProps> = ({
  color = COLORS.black,
  size = 'large',
}) => {
  return <ActivityIndicator color={color} size={size} />;
};

export default Loader;
