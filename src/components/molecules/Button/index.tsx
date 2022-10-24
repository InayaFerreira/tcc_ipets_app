import { PressableProps } from 'react-native';
import React from 'react';

import { getOpacityByPress } from '@utils/styles';
import { FONT_SIZE_H3 } from '@styles/typograph';
import { COLORS } from '@styles/colors';

import Loader from '@atoms/Loader';
import CustomText from '@atoms/CustomText';
import { Container, ContainerIcon, ContainerLoader } from './styles';

export interface IButtonProps extends PressableProps {
  color?: string;
  loading?: boolean;
  widthPercentage?: number;
  icon?: React.ReactNode;
  children?: React.ReactNode | string;
}

const Button: React.FC<IButtonProps> = ({
  color = COLORS.primaryLight,
  loading = false,
  widthPercentage = 100,
  icon,
  children,
  ...rest
}) => {
  return (
    <Container
      style={getOpacityByPress}
      color={color}
      loading={loading}
      widthPercentage={widthPercentage}
      {...rest}>
      {!loading && icon && <ContainerIcon>{icon}</ContainerIcon>}

      {loading ? (
        <ContainerLoader>
          <Loader size="small" />
        </ContainerLoader>
      ) : typeof children === 'string' ? (
        <CustomText size={FONT_SIZE_H3} color="#ffffff" center bold>
          {children}
        </CustomText>
      ) : (
        children
      )}
    </Container>
  );
};

export default Button;
