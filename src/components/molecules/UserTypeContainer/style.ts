import styled from 'styled-components/native';
import {scale} from '../../../utils';

interface ITouchableOpacity {
  selected?: boolean;
}

export const Container = styled.TouchableOpacity<ITouchableOpacity>`
  padding: ${scale(16)}px;
  border-width: ${scale(1.5)}px;
  border-radius: ${scale(16)}px;
  border-color: ${props =>
    props.selected ? 'rgba(255, 119, 74, 0.20)' : '#F0EEED'};
  background-color: ${props =>
    props.selected ? 'rgba(255, 119, 74, 0.10)' : '#FFF'};
`;

export const IconContainer = styled.View<ITouchableOpacity>`
  padding: ${scale(10)}px;
  border-width: ${scale(1.5)}px;
  border-radius: ${scale(10)}px;
  border-color: #f0eeed;
  width: ${scale(46)}px;
  background-color: ${props => (props.selected ? '#FFF' : '#FFF')};
  justify-content: center;
  align-items: center;
`;
