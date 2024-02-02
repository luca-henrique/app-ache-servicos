import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {IIcon, IconComponent} from '../Icon/Icon';

interface IIconButton extends IIcon, TouchableOpacityProps {}

export const IconButton = ({...props}: IIconButton) => {
  return (
    <TouchableOpacity>
      <IconComponent {...props} />
    </TouchableOpacity>
  );
};
