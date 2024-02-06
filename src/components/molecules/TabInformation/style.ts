import styled from 'styled-components/native';
import {scale} from '../../../utils';

interface IContainer {
  leftBorder?: boolean;
}

export const Container = styled.View<IContainer>`
  padding: ${scale(12)}px;
  border-left-color: ${props => (props.leftBorder ? '#F0EEED' : '')};
  border-left-width: ${props => (props.leftBorder ? 1 : 0)}px;
  width: 50%;
`;
