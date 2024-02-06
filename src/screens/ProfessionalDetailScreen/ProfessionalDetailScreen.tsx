import React from 'react';

import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {DetailServices} from '../../components';
import {Image} from 'react-native';

import * as S from './style';
import {ProfessionalDetailHeader} from '../../components/molecules/ProfessionalDetailHeader/ProfessionalDetailHeader';
import {ProfessionalBasicInformations} from '../../components/molecules/ProfessionalBasicInformations/ProfessionalBasicInformations';
import {ProfessionalSummaryStore} from '../../components/molecules/ProfessionalSummaryStore/ProfessionalSummaryStore';

export const ProfessionalDetailScreen = () => {
  return (
    <S.Container>
      <ProfessionalDetailHeader />
      <ProfessionalBasicInformations />
      <ProfessionalSummaryStore />
      <DetailServices />
      <View style={{paddingHorizontal: 16, backgroundColor: '#fff'}}>
        <View style={{height: 24}} />
        <Text>REGIÃO DE ATENDIMENTO</Text>
        <View style={{height: 16}} />
        <View
          style={{
            borderWidth: 1.5,
            borderColor: '#F0EEED',
            borderRadius: 15,
            backgroundColor: '#FAF9F8',
          }}>
          <View
            style={{
              height: 200,
              backgroundColor: '#fff',
            }}
          />
          <View style={{padding: 12}}>
            <Text>Paraiba, Brasil</Text>
            <View style={{height: 6}} />
            <Text>Campina Grande</Text>
          </View>
        </View>
        <View style={{height: 24}} />
      </View>

      <View style={{paddingHorizontal: 16, backgroundColor: '#fff'}}>
        <View style={{height: 24}} />
        <Text>AVALIAÇÕES</Text>
        <View style={{height: 16}} />
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text>ICONS</Text>
          <Text>52 avaliações</Text>
        </View>
        <View style={{height: 16}} />
        <View
          style={{
            backgroundColor: '#FAF9F8',
            borderWidth: 1.5,
            borderColor: '#F0EEED',
            padding: 12,
            borderRadius: 16,
          }}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text>João Gomes</Text>
            <Text>16/04</Text>
          </View>
          <View style={{height: 12}} />
          <Text>
            Meu computador estava lento e cheio de problemas, e agora funciona
            perfeitamente. Ótimo atendimento, rápido e eficiente!
          </Text>
        </View>
        <View style={{height: 12}} />
        <View
          style={{
            backgroundColor: '#FAF9F8',
            borderWidth: 1.5,
            borderColor: '#F0EEED',
            padding: 12,
            borderRadius: 16,
          }}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text>João Gomes</Text>
            <Text>16/04</Text>
          </View>
          <View style={{height: 12}} />
          <Text>
            Meu computador estava lento e cheio de problemas, e agora funciona
            perfeitamente. Ótimo atendimento, rápido e eficiente!
          </Text>
        </View>
        <View style={{height: 12}} />
        <TouchableOpacity style={{width: '100%', alignItems: 'center'}}>
          <Text style={{color: '#329FFC'}}>ver mais</Text>
        </TouchableOpacity>
        <View style={{height: 24}} />
      </View>
    </S.Container>
  );
};
