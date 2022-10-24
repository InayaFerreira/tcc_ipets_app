import React from 'react-native';

import { COLORS } from '@styles/colors';

export function getOpacityByPress(props: {
  pressed: boolean;
}): React.StyleProp<React.ViewStyle> {
  const pressedOpacity = 0.8;
  return { opacity: props.pressed ? pressedOpacity : 1 };
}

export function getColorByType(type?: TButton) {
  switch (type) {
    case 'primary':
      return COLORS.primary;
    case 'secondary':
      return COLORS.secondary;
    case 'danger':
      return COLORS.danger;
    case 'clear':
      return 'transparent';
    case 'outline':
      return 'transparent';
    default:
      return COLORS.primary;
  }
}

export function getPaddingButtonBySize(size?: TButtonSize): string {
  switch (size) {
    case 'small':
      return '4px 8px';
    case 'large':
      return '16px 32px';
    default:
      return '8px 16px';
  }
}
