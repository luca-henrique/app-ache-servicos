import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {scale} from '../../../utils';

const {width, height} = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
`;

export const BackgroundImageContainer = styled.Image`
  width: ${width}px;
  height: ${scale(height / 1.2)}px;
`;
