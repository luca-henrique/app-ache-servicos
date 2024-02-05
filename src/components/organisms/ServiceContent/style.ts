import styled from 'styled-components/native';
import {scale} from '../../../utils';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  padding-horizontal: ${scale(16)}px;
`;

export const IconContainer = styled.View`
  background-color: #fef8ea;
  padding: ${scale(10)}px;
  border-radius: ${scale(12)}px;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  width: 100%;
`;
