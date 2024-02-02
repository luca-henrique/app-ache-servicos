import React, {useState} from 'react';
import {getBottomSpaceHeight} from '../../utils';
import {Typography} from '../../components/atoms/Typography/Typography';
import {useNavigate} from '../../hook/useNavigation';

import {HeaderSelectUserType} from '../../components/organisms/HeaderSelectUserType/HeaderSelectUserType';
import {Separator} from '../../components/atoms/Separator/Separator';
import {UserTypeContainer} from '../../components/molecules/UserTypeContainer/UserTypeContainer';
import {Button} from '../../components/atoms/Button/Button';

import * as S from './style';

export const SelectUserTypeScreen = () => {
  const [indexSelectedUserType, setIndexSelectedUserType] = useState(3);

  let disabledButton = indexSelectedUserType === 3;

  const handleSelectUserType = (userType: number) => {
    if (userType === indexSelectedUserType) {
      setIndexSelectedUserType(3);
    } else {
      setIndexSelectedUserType(userType);
    }
  };

  const {handleNavigation} = useNavigate();

  return (
    <S.Container>
      <HeaderSelectUserType />

      <S.Main>
        <Separator size={16} />

        <Typography typography="h4" colorVariant="_01">
          Selecione como você quer usar o AcheServiços
        </Typography>

        <Separator size={8} />

        <UserTypeContainer
          icon="user-icon"
          title="Encontrar profissionais"
          description="Para realizar um serviços"
          onPress={() => handleSelectUserType(0)}
          selected={indexSelectedUserType === 0}
        />

        <Separator size={8} />

        <UserTypeContainer
          icon="service-icon"
          title="Oferecer serviços"
          description="Para que clientes me encontrem"
          onPress={() => handleSelectUserType(1)}
          selected={indexSelectedUserType === 1}
        />

        <S.Footer>
          <Button
            variant="primary"
            disabled={disabledButton}
            onPress={() => handleNavigation('Dashboard')}>
            Começar
          </Button>
        </S.Footer>
        <Separator size={getBottomSpaceHeight()} />
      </S.Main>
    </S.Container>
  );
};
