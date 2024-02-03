import styled from 'styled-components/native';
import {scale} from '../../../utils';

export const Container = styled.TouchableOpacity`
  width: ${scale(140)}px;
  padding: ${scale(12)}px;
  border-width: ${scale(1.5)}px;
  border-color: #f0eeed;
  border-radius: ${scale(15)}px;
  margin-right: ${scale(8)}px;
`;

export const IconContainer = styled.View`
  background-color: rgba(224, 168, 38, 0.2);
  width: ${scale(40)}px;
  height: ${scale(40)}px;
  border-radius: ${scale(10)}px;
  justify-content: center;
  align-items: center;
`;
