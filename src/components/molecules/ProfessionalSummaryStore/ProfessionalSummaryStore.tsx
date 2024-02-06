import React from 'react';

import {Typography} from '../../atoms/Typography/Typography';
import {Separator} from '../../atoms/Separator/Separator';

import {TextResumeProfessional} from '../TextResumeProfessional/TextResumeProfessional';
import {ProfessionalServiceAbout} from '../ProfessionalServiceAbout/ProfessionalServiceAbout';

import * as S from './style';

const textExample =
  'Tenho mais de 8 anos de experiência na área de informática, resolvendo  problemas de conexão, formatação de computadores e conserta,Tenho mais de 8 anos de experiência na área de informática, resolvendo problemas de conexão, formatação de putadores e conserta';

export const ProfessionalSummaryStore = () => {
  return (
    <S.Container>
      <Typography typography="h4" colorVariant="_01">
        RESUMO
      </Typography>
      <Separator size={8} />
      <TextResumeProfessional text={textExample} />

      <Separator size={8} />

      <ProfessionalServiceAbout />
    </S.Container>
  );
};
