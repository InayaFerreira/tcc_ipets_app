import { TextInputMaskProps } from 'react-native-text-input-mask';
import React from 'react';

import { COLORS } from '@styles/colors';

import CustomText from '@atoms/CustomText';
import {
  Container,
  ContainerErrorMessage,
  ContainerInput,
  ContainerLabel,
} from './styles';

export interface IInputProps extends TextInputMaskProps {
  label?: string;
  errorMessage?: string;
}

const Input: React.FC<IInputProps> = ({
  label,
  errorMessage,
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
      <Container {...restProps} />

      {errorMessage && (
        <ContainerErrorMessage>
          <CustomText color={COLORS.danger}>{errorMessage}</CustomText>
        </ContainerErrorMessage>
      )}
    </ContainerInput>
  );
};

export default Input;
