import React from 'react';

import {Separator} from '../../atoms/Separator/Separator';
import {Typography} from '../../atoms/Typography/Typography';

interface ITabInformation {
  leftBorder?: boolean;
  title: string;
  description: string;
}

import * as S from './style';

export const TabInformation = ({
  title,
  description,
  leftBorder,
}: ITabInformation) => {
  return (
    <S.Container leftBorder={leftBorder}>
      <Typography typography="h4" colorVariant="_01">
        {title}
      </Typography>
      <Separator size={4} />
      <Typography typography="h4">{description}</Typography>
    </S.Container>
  );
};
