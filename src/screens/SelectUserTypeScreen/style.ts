import styled from 'styled-components/native';
import {scale} from '../../utils';

export const Container = styled.View`
  flex: 1;
`;

export const Main = styled.View`
  background-color: #faf9f8;
  padding-horizontal: ${scale(16)}px;
  border-top-width: ${scale(1.5)}px;
  border-color: #f0eeed;
  height: 100%;
`;

export const Footer = styled.View`
  height: 40%;
  justify-content: flex-end;
`;
