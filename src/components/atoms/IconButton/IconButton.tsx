import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IIcon, IconComponent} from '../Icon/Icon';

interface IIconButton extends IIcon {}

export const IconButton = ({...props}: IIconButton) => {
  return (
    <TouchableOpacity>
      <IconComponent {...props} />
    </TouchableOpacity>
  );
};
