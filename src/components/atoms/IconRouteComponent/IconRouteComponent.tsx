import React from 'react';
import {IconComponent} from '../Icon/Icon';
import {IconRouter} from '../../../common/icon-route';

import * as S from './style';

interface IIconRouterComponent {
  routeName: string;
  focused?: boolean;
}

export const IconRouteComponent = ({
  routeName,
  focused = false,
}: IIconRouterComponent) => {
  //@ts-ignore
  const iconName = IconRouter[routeName];

  return (
    <S.Container focused={focused}>
      <IconComponent
        icon={iconName}
        width={24}
        height={24}
        stroke={focused ? '#FF774A' : '#000'}
      />
    </S.Container>
  );
};
