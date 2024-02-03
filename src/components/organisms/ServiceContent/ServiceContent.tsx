import React from 'react';
import {View, Dimensions} from 'react-native';
import {IconComponent} from '../../atoms/Icon/Icon';
import {Button} from '../../atoms/Button/Button';
import {Typography} from '../../atoms/Typography/Typography';
import {Separator} from '../../atoms/Separator/Separator';

const {width} = Dimensions.get('screen');

export const ServiceContent = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}>
      <IconComponent
        icon="service-content-icon"
        height={245}
        width={width}
        stroke="#E0A826"
      />
      <View
        style={{
          backgroundColor: '#FEF8EA',
          padding: 10,
          borderRadius: 8,
          justifyContent: 'center',
        }}>
        <IconComponent
          icon="technical-assistance-icon"
          height={24}
          width={24}
          stroke="#E0A826"
        />
      </View>
      <Typography typography="h2" textAlign="center">
        Para profissionais
      </Typography>
      <Separator size={8} />
      <Typography typography="h3" textAlign="center" colorVariant="_01">
        Quer começar a oferecer seus serviços através de um perfil aqui no
        AcheServiços?
      </Typography>
      <View style={{width: '100%'}}>
        <Button variant="primary">Quero começar</Button>
      </View>
    </View>
  );
};
