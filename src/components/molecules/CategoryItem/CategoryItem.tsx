import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {IconComponent} from '../../atoms/Icon/Icon';
import {Separator} from '../../atoms/Separator/Separator';
import {Typography} from '../../atoms/Typography/Typography';

import * as S from './style';

interface ICategoryItem extends TouchableOpacityProps {
  id?: string;
  icon: string;
  name?: string;
}

export const CategoryItem = ({icon, name, ...props}: ICategoryItem) => {
  return (
    <S.Container {...props}>
      <S.IconContainer>
        <IconComponent
          icon={icon}
          height={24}
          width={24}
          stroke="#E0A826"
          fill="rgba(224,168,38,0.1)"
        />
      </S.IconContainer>
      <Separator size={16} />
      <Typography typography="h4">{name}</Typography>
    </S.Container>
  );
};
