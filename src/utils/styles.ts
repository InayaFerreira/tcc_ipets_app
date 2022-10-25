import React from 'react-native';

export function getOpacityByPress(props: {
  pressed: boolean;
}): React.StyleProp<React.ViewStyle> {
  const pressedOpacity = 0.8;
  return { opacity: props.pressed ? pressedOpacity : 1 };
}
