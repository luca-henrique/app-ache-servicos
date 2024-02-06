import styled from 'styled-components/native';
import {scale} from '../../../utils';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #faf9f8;
  padding-vertical: ${scale(24)}px;
  border-bottom-width: 2px;
  border-color: #f0eeed;
`;

export const ImageUser = styled.Image`
  width: ${scale(65)}px;
  height: ${scale(65)}px;
  border-radius: ${scale(100)}px;
  border-width: 2px;
  border-color: #fff;
`;

export const BrandInformationClientContainer = styled.View`
  border-radius: 100px;
  padding: 4px 10px;
  background-color: #e4f1ee;
`;
