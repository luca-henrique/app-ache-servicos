import React from 'react';
import * as S from './style';

import {Typography} from '../../atoms/Typography/Typography';
import {IconButton} from '../../atoms/IconButton/IconButton';
import {Separator} from '../../atoms/Separator/Separator';

export const HeaderSelectUserType = () => {
  return (
    <S.Container>
      <IconButton icon="arrow-left" />
      <Typography typography="h5">SELECIONAR</Typography>
      <Separator />
    </S.Container>
  );
};
