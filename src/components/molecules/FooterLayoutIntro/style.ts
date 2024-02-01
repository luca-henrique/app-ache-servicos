import styled from 'styled-components/native';
import {scale} from '../../../utils';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const FooterLayout = styled.View`
  border-top-left-radius: ${scale(25)}px;
  border-top-right-radius: ${scale(25)}px;
  position: absolute;
  bottom: 0;
  background-color: #fff;
  height: ${scale(260)}px;
  width: ${width}px;
  padding-horizontal: ${scale(16)}px;
  padding-vertical: ${scale(24)}px;
`;
