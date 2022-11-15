import { Image, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { getOpacityByPress } from '@utils/styles';

interface IVoltarButtonProps {
  children?: React.ReactNode;
}

const VoltarButton: React.FC<IVoltarButtonProps> = () => {
  const { goBack } = useNavigation();

  return (
    <Pressable style={getOpacityByPress} onPress={goBack}>
      <Image
        style={{ width: 46, height: 46 }}
        source={require('@images/voltar.png')}
      />
    </Pressable>
  );
};

export default VoltarButton;
