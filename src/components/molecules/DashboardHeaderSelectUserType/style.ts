import styled from 'styled-components/native';
import {getStatusBarHeight, scale} from '../../../utils';

export const Container = styled.View`
  padding-top: ${getStatusBarHeight()}px;
  padding-horizontal: ${scale(16)}px;
  padding-bottom: ${scale(16)}px;
`;

export const TabContainer = styled.View`
  flex-direction: row;
  margin-top: ${scale(8)}px;
  border-radius: ${scale(20)}px;
  border-width: ${scale(1.5)}px;
  padding: ${scale(8)}px;
  background-color: #fff;
  border-color: #f0eeed;
`;
