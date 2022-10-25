import { ActivityIndicator } from 'react-native';
import React from 'react';

interface ILoaderProps {
  color?: string;
  size?: 'large' | 'small';
  children?: React.ReactNode;
}

const Loader: React.FC<ILoaderProps> = ({
  color = '#000000',
  size = 'large',
}) => {
  return <ActivityIndicator color={color} size={size} />;
};

export default Loader;
