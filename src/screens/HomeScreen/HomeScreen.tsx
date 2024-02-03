import React, {useState} from 'react';

import {DashboardHeaderSelectUserType} from '../../components';
import {ProfessionalsContent} from '../../components/organisms/ProfessionalsContent/ProfessionalsContent';
import {ServiceContent} from '../../components/organisms/ServiceContent/ServiceContent';

import * as S from './style';

const TabSelected = {
  0: ProfessionalsContent,
  1: ServiceContent,
};

export const HomeScreen = () => {
  const [userType, setUserType] = useState(0);

  const handleSelectUserType = (userSelected: number) => {
    setUserType(userSelected);
  };

  //@ts-ignore
  const SelectedContent = TabSelected[userType];

  return (
    <S.Container>
      <DashboardHeaderSelectUserType
        handleSelectUserType={handleSelectUserType}
        userType={userType}
      />

      <SelectedContent />
    </S.Container>
  );
};
