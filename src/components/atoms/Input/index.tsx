import { TextInputMaskProps } from 'react-native-text-input-mask';
import React from 'react';

import { COLORS } from '@styles/colors';

import CustomText from '@atoms/CustomText';
import {
  Container,
  ContainerErrorMessage,
  ContainerIcon,
  ContainerInput,
  ContainerLabel,
} from './styles';

export interface IInputProps extends TextInputMaskProps {
  label?: string;
  errorMessage?: string;
  icon?: React.ReactNode;
}

const Input: React.FC<IInputProps> = ({
  label,
  errorMessage,
  icon,
  ...restProps
}) => {
  return (
    <ContainerInput>
      {label && (
        <ContainerLabel>
          <CustomText color="#ffffff" bold>
            {label}
          </CustomText>
        </ContainerLabel>
      )}

      {icon && (
        <ContainerIcon errorMessage={errorMessage}>{icon}</ContainerIcon>
      )}

      <Container icon={icon} placeholderTextColor="#c1c1c1" {...restProps} />

      {errorMessage && (
        <ContainerErrorMessage>
          <CustomText color={COLORS.danger}>{errorMessage}</CustomText>
        </ContainerErrorMessage>
      )}
    </ContainerInput>
  );
};

export default Input;
