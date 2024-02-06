import styled from 'styled-components/native';
import {scale} from '../../../utils';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  border-color: #f0eeed;
  border-width: 1px;
  border-radius: ${scale(16)}px;
`;
