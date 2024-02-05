import styled from 'styled-components/native';
import {scale} from '../../../utils';

interface IContainer {
  focused?: boolean;
}

export const Container = styled.View<IContainer>`
  margin-top: ${scale(10)}px;
  border-radius: ${scale(20)}px;
  padding-vertical: ${scale(10)}px;
  padding-horizontal: ${scale(20)}px;
  background-color: ${props => (props.focused ? '#FDF2EF' : '#ffff')};
`;
