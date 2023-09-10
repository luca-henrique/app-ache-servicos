import React from 'react';

import {View, Text, ScrollView} from 'react-native';
import {DetailServices} from '../../components';

export const DetailServiceProviderScreen = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#F0EEED'}}>
      <View style={{backgroundColor: '#FFF'}}>
        <View style={{height: 74}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingBottom: 16,
            borderBottomWidth: 1.5,
            borderColor: '#F0EEED',
          }}>
          <Text>Arrow</Text>
          <Text>PROFISSIONAL</Text>
          <Text>Favorito</Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#FAF9F8',
          paddingVertical: 24,
          borderBottomWidth: 1.5,
          borderColor: '#F0EEED',
        }}>
        <View
          style={{
            width: 65,
            height: 65,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: '#fff',
          }}
        />
        <View style={{height: 12}} />
        <Text style={{color: '#1A1918', fontSize: 16, fontWeight: 400}}>
          Lucas Andrade
        </Text>
        <View style={{height: 4}} />
        <Text style={{color: '#FF774A', fontSize: 14, fontWeight: 400}}>
          Técnico em informática
        </Text>
        <View style={{height: 8}} />
        <View
          style={{
            backgroundColor: '#E4F1EE',
            padding: 10,
            borderRadius: 100,
          }}>
          <Text style={{color: '#20A483'}}>+ de 15 clientes atendidos</Text>
        </View>
      </View>
      <View />
      <View style={{paddingHorizontal: 16, backgroundColor: '#fff'}}>
        <View style={{height: 24}} />
        <Text style={{color: '#807875', fontSize: 13, fontWeight: 500}}>
          RESUMO
        </Text>
        <View style={{height: 12}} />
        <Text style={{color: '#473F3C', fontSize: 14}}>
          Tenho mais de 8 anos de experiência na área de informática, resolvendo
          problemas de conexão, formatação de computadores e consert... ver mais
        </Text>

        <View style={{height: 12}} />

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            borderColor: '#F0EEED',
            borderWidth: 1,
            borderRadius: 15,
          }}>
          <View style={{padding: 12, width: 188}}>
            <Text style={{color: '#807875', fontSize: 13}}>Atendimento</Text>
            <View style={{height: 4}} />
            <Text style={{fontSize: 14, color: '#473F3C'}}>
              Loja física e online
            </Text>
          </View>
          <View
            style={{
              padding: 12,
              borderLeftColor: '#F0EEED',
              borderLeftWidth: 1,
            }}>
            <Text style={{color: '#807875', fontSize: 13}}>Horário</Text>
            <View style={{height: 4}} />
            <Text style={{fontSize: 14, color: '#473F3C'}}>09:00 às 17:00</Text>
          </View>
        </View>
      </View>
      <DetailServices />
    </ScrollView>
  );
};
