import React from 'react';

import {
  DashboardListCategoriesServices,
  DashboardListServiceProvider,
} from '../../molecules';

import {Separator} from '../../atoms/Separator/Separator';
import {ActionsProfessionals} from '../../molecules/ActionsProfessionals/ActionsProfessionals';
import {Typography} from '../../atoms/Typography/Typography';

import * as S from './style';

export const ProfessionalsContent = () => {
  return (
    <S.Container>
      <DashboardListCategoriesServices />
      <S.ContainerProfessionalsContent>
        <Typography typography="h5" colorVariant="_01">
          PROFISSIONAIS
        </Typography>
        <Separator size={8} />
        <ActionsProfessionals />
        <Separator size={14} />
        <DashboardListServiceProvider />
      </S.ContainerProfessionalsContent>
    </S.Container>
  );
};
