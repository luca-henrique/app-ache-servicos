import React from 'react';
import {IconButton} from '../../atoms/IconButton/IconButton';
import {Button} from '../../atoms/Button/Button';

import * as S from './style';

export const ActionsProfessionals = () => {
  return (
    <S.Container>
      <Button variant="secondaryIcon" iconName="location-icon">
        Campina Grande
      </Button>
      <IconButton icon="filter-icon" width={20} height={20} />
    </S.Container>
  );
};
