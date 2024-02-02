import React from 'react';

import {Icons} from '../../../assets/icons';
import {scale} from '../../../utils';

export interface IIcon {
  icon: string;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
}

export const IconComponent = ({
  icon,
  width = 14,
  height = 14,
  fill = '#fff',
  stroke = '#000',
}: IIcon) => {
  //@ts-ignore
  const Icon = Icons[icon];

  return (
    <Icon
      width={scale(width)}
      height={scale(height)}
      stroke={stroke}
      fill={fill}
    />
  );
};
