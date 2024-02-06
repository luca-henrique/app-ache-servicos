import styled from 'styled-components/native';
import {getStatusBarHeight, scale} from '../../../utils';

export const Container = styled.View`
  background-color: #fff;
  padding-top: ${getStatusBarHeight()}px;
`;

export const ActionsDetailContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${scale(16)}px;
  border-bottom-width: 2px;
  border-color: #f0eeed;
  align-items: center;
`;
