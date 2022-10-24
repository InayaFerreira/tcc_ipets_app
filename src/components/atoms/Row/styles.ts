import styled from 'styled-components/native';

import { IRowProps } from '.';

export const Container = styled.View<IRowProps>`
  flex-direction: row;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'space-between'};
`;
