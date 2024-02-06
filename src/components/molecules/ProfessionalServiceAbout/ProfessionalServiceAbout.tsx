import React from 'react';

import * as S from './style';
import {TabInformation} from '../TabInformation/TabInformation';

export const ProfessionalServiceAbout = () => {
  return (
    <S.Container>
      <TabInformation title="Atendimento" description="Loja física e online" />
      <TabInformation title="Horário" description="09:00 às 17:00" leftBorder />
    </S.Container>
  );
};
