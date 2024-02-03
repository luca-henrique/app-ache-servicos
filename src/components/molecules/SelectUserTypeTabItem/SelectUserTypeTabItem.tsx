import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {Separator} from '../../atoms/Separator/Separator';

import * as S from './style';

interface ISelectUserTypeTabItem extends TouchableOpacityProps {
  selected?: boolean;
  title?: string;
  description?: string;
}

export const SelectUserTypeTabItem = ({
  selected,
  title,
  description,
  ...props
}: ISelectUserTypeTabItem) => {
  return (
    <S.Container selected={selected} {...props}>
      <Text style={{color: selected ? '#FF774A' : '#807875'}}>{title}</Text>
      <Separator size={6} />
      <Text style={{color: '#1A1918'}}>{description}</Text>
    </S.Container>
  );
};
