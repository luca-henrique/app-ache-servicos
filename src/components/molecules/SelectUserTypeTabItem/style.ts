import styled from 'styled-components/native';
import {scale} from '../../../utils';

interface IContainer {
  selected?: boolean;
}

export const Container = styled.TouchableOpacity<IContainer>`
  width: 50%;
  padding: ${scale(12)}px;
  background-color: ${props =>
    props.selected ? 'rgba(255,119,74, 0.2)' : '#fff'};
  border-radius: ${scale(16)}px;
`;
