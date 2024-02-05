import styled from 'styled-components/native';
import {scale} from '../../../utils';

export const Container = styled.TouchableOpacity`
  width: ${scale(130)}px;
  padding: ${scale(12)}px;
  border-width: 2px;
  border-color: #f0eeed;
  border-radius: ${scale(15)}px;
  margin-right: ${scale(8)}px;
  border-style: solid;
`;

export const IconContainer = styled.View`
  background-color: rgba(224, 168, 38, 0.2);
  width: ${scale(40)}px;
  height: ${scale(40)}px;
  border-radius: ${scale(10)}px;
  justify-content: center;
  align-items: center;
`;
