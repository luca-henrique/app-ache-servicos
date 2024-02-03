import React from 'react';
import * as S from './style';
import {Separator} from '../../atoms/Separator/Separator';
import {Typography} from '../../atoms/Typography/Typography';
import {IProfessional} from '../DashboardListServiceProvider/DashboardListServiceProvider';
import {TouchableOpacityProps} from 'react-native';

interface IProfessionalCard extends IProfessional, TouchableOpacityProps {}

export const ProfessionalCard = ({
  name,
  photo,
  customersCount,
  profession,
  ...props
}: IProfessionalCard) => {
  return (
    <S.Card {...props}>
      <S.ImageUser
        source={{
          uri: photo,
        }}
      />
      <S.InformationContainer>
        <Typography typography="h4">{name}</Typography>
        <Typography typography="h5" colorVariant="_01">
          {profession}
        </Typography>
        <Separator size={4} />
        <S.Brand>
          <Typography typography="h5" colorVariant="_05" colorFamily="brand">
            + de {customersCount} clientes atendidos
          </Typography>
        </S.Brand>
      </S.InformationContainer>
    </S.Card>
  );
};
