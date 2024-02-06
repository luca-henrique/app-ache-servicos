import React from 'react';

import {IconButton} from '../../atoms/IconButton/IconButton';
import {Typography} from '../../atoms/Typography/Typography';

import * as S from './style';
import {useNavigate} from '../../../hook/useNavigation';

export const ProfessionalDetailHeader = () => {
  const {handleNavigationBack} = useNavigate();

  const handleFavoriteProfessional = (professionalUuid: string) => {
    console.log(professionalUuid);
  };

  return (
    <S.Container>
      <S.ActionsDetailContainer>
        <IconButton
          icon="arrow-left"
          onPress={() => handleNavigationBack()}
          height={20}
          width={20}
        />
        <Typography typography="h4">PROFISSIONAL</Typography>
        <IconButton
          height={20}
          width={20}
          icon="star-icon"
          onPress={() => handleFavoriteProfessional('uuid')}
        />
      </S.ActionsDetailContainer>
    </S.Container>
  );
};
