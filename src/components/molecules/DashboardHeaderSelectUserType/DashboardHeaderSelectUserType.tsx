import React from 'react';

import {SelectUserTypeTabItem} from '../SelectUserTypeTabItem/SelectUserTypeTabItem';
import {Typography} from '../../atoms/Typography/Typography';

import * as S from './style';

interface IDashboardHeaderSelectUserType {
  handleSelectUserType: (userSelected: number) => void;
  userType: number;
}

export const DashboardHeaderSelectUserType = ({
  handleSelectUserType,
  userType,
}: IDashboardHeaderSelectUserType) => {
  return (
    <S.Container>
      <Typography typography="h4">O QUE VOCÊ PRECISA?</Typography>
      <S.TabContainer>
        <SelectUserTypeTabItem
          title="Encontrar"
          description="Profissionais"
          selected={userType === 0}
          onPress={() => handleSelectUserType(0)}
        />
        <SelectUserTypeTabItem
          title="Oferecer"
          description="Serviços"
          selected={userType === 1}
          onPress={() => handleSelectUserType(1)}
        />
      </S.TabContainer>
    </S.Container>
  );
};
