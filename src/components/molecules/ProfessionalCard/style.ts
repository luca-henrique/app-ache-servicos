import styled from 'styled-components/native';
import {scale} from '../../../utils';

export const Card = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: ${scale(12)}px;
  border-width: ${scale(1.5)}px;
  border-radius: ${scale(10)}px;
  margin-bottom: ${scale(10)}px;
  border-color: #f0eeed;
  background-color: #fafafa;
`;

export const ImageUser = styled.Image`
  width: ${scale(56)}px;
  height: ${scale(56)}px;
  border-radius: ${scale(100)}px;
`;

export const Brand = styled.View`
  border-radius: ${scale(100)}px;
  padding: ${scale(4)}px ${scale(8)}px;
  background-color: #e4f1ee;
`;

export const InformationContainer = styled.View`
  justify-content: center;
  margin-left: ${scale(12)}px;
`;
