import React from 'react';

import {TouchableOpacityProps} from 'react-native';
import {IconComponent} from '../../atoms/Icon/Icon';

import {Container, IconContainer} from './style';
import {Separator} from '../../atoms/Separator/Separator';
import {Typography} from '../../atoms/Typography/Typography';

interface IUserTypeContainer extends TouchableOpacityProps {
  icon?: string;
  title?: string;
  description?: string;
  selected?: boolean;
}

export const UserTypeContainer = ({
  icon = 'user-icon',
  title = '',
  description = '',
  onPress,
  selected,
}: IUserTypeContainer) => {
  return (
    <Container onPress={onPress} selected={selected}>
      <IconContainer selected={selected}>
        <IconComponent
          icon={icon}
          width={24}
          height={24}
          stroke={selected ? '#FF774A' : '#807875'}
        />
      </IconContainer>
      <Separator size={16} />
      <Typography typography="h4">{title}</Typography>
      <Separator size={6} />
      <Typography typography="h5" colorVariant="_01">
        {description}
      </Typography>
    </Container>
  );
};
