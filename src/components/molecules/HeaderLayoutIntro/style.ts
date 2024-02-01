import styled from 'styled-components/native';
import {getStatusBarHeight, scale} from '../../../utils';

interface IHeaderLayout {
  justifyContent?: boolean;
}

export const HeaderLayout = styled.View<IHeaderLayout>`
  position: absolute;
  top: ${getStatusBarHeight()}px;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${props =>
    !props.justifyContent ? 'flex-end' : 'space-between'};
  padding-horizontal: ${scale(16)}px;
`;
