import styled from 'styled-components/native';
import { Text } from 'react-native';

import { FONT_WEIGHT_BOLD, FONT_WEIGHT_REGULAR } from '@styles/typograph';
import {
  FONT_SIZE_H1,
  FONT_SIZE_H2,
  FONT_SIZE_H3,
  FONT_SIZE_PARAGRAPH,
} from '@styles/typograph';
import { lineHeightMultiplier } from '@styles/mixins';
import { COLORS } from '@styles/colors';

import { ICustomTextProps } from '.';

const handleTextSize = (props: ICustomTextProps) => {
  if (props.h1) {
    return FONT_SIZE_H1;
  } else if (props.h2) {
    return FONT_SIZE_H2;
  } else if (props.h3) {
    return FONT_SIZE_H3;
  } else if (props.size) {
    return props.size;
  } else {
    return FONT_SIZE_PARAGRAPH;
  }
};

const handleTextAlign = (props: ICustomTextProps) => {
  if (props.right) {
    return 'right';
  } else if (props.center) {
    return 'center';
  } else {
    return 'left';
  }
};

const handleTextColor = (
  color: (string & {}) | keyof typeof COLORS | undefined,
) => {
  let definedColor = color || '#000000';

  for (let i in COLORS) {
    if (i === color) {
      definedColor = COLORS[i];
    }
  }

  return definedColor;
};

export const StyledText = styled(Text)<ICustomTextProps>`
  opacity: ${props => props.opacity || 1};
  font-family: ${props => props.family};
  font-weight: ${props =>
    props.bold ? FONT_WEIGHT_BOLD : FONT_WEIGHT_REGULAR};
  font-size: ${props => handleTextSize(props)}px;
  text-align: ${props => handleTextAlign(props)};
  letter-spacing: ${props => props.letterSpacing || 0}px;
  color: ${props => handleTextColor(props.color)};
`;
