import React from 'react';
import {View, Dimensions} from 'react-native';
import {IconComponent} from '../../atoms/Icon/Icon';
import {Button} from '../../atoms/Button/Button';
import {Typography} from '../../atoms/Typography/Typography';
import {Separator} from '../../atoms/Separator/Separator';

import * as S from './style';

const {width} = Dimensions.get('screen');

export const ServiceContent = () => {
  return (
    <S.Container>
      <IconComponent
        icon="service-content-icon"
        height={200}
        width={width}
        stroke="#E0A826"
      />
      <S.IconContainer>
        <IconComponent
          icon="technical-assistance-icon"
          height={24}
          width={24}
          stroke="#E0A826"
        />
      </S.IconContainer>

      <View>
        <Typography typography="h2" textAlign="center">
          Para profissionais
        </Typography>
        <Separator size={8} />
        <Typography typography="h3" textAlign="center" colorVariant="_01">
          Quer começar a oferecer seus serviços através de um perfil aqui no
          AcheServiços?
        </Typography>
      </View>
      <Separator size={12} />
      <S.ButtonContainer>
        <Button variant="primary">Quero começar</Button>
      </S.ButtonContainer>
    </S.Container>
  );
};
