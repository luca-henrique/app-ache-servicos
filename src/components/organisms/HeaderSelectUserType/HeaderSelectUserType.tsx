import React from 'react';
import * as S from './style';

import {Typography} from '../../atoms/Typography/Typography';
import {IconButton} from '../../atoms/IconButton/IconButton';
import {Separator} from '../../atoms/Separator/Separator';
import {useNavigate} from '../../../hook/useNavigation';

export const HeaderSelectUserType = () => {
  const {handleNavigationBack} = useNavigate();

  return (
    <S.Container>
      <IconButton icon="arrow-left" onPress={() => handleNavigationBack()} />
      <Typography typography="h5">SELECIONAR</Typography>
      <Separator />
    </S.Container>
  );
};
