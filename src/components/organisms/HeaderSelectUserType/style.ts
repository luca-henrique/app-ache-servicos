import styled from 'styled-components/native';
import {getStatusBarHeight, scale} from '../../../utils';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: ${scale(16)}px;
  background-color: #fff;
  padding-top: ${getStatusBarHeight()}px;
  padding-bottom: ${scale(16)}px;
`;
