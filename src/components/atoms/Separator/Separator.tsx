import React from 'react';
import {View} from 'react-native';
import {scale} from '../../../utils';

interface ISeparator {
  size?: number;
}

export const Separator = ({size = 1}: ISeparator) => {
  return <View style={{height: scale(size)}} />;
};
