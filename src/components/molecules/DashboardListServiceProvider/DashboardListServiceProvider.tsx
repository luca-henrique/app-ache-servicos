import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {View, ScrollView, TouchableOpacity, Text} from 'react-native';

export const DashboardListServiceProvider = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        height: '100',
      }}>
      {Array.from(Array(10).keys()).map(() => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailServiceProviderScreen')}
            style={{
              padding: 12,
              borderWidth: 1.5,
              borderRadius: 10,
              borderColor: '#F0EEED',
              flexDirection: 'row',
              backgroundColor: '#FAFAFA',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <View
              style={{
                width: 56,
                height: 56,
                backgroundColor: '#ffff',
                borderRadius: 100,
              }}
            />
            <View style={{justifyContent: 'center', marginLeft: 12}}>
              <Text style={{color: '#1A1918', fontSize: 14, fontWeight: 400}}>
                Lucas Andrade
              </Text>
              <View style={{height: 4}} />
              <Text style={{color: '#807875', fontSize: 12, fontWeight: 400}}>
                Técnico em informática
              </Text>
              <View style={{height: 8}} />
              <View
                style={{
                  backgroundColor: '#E4F1EE',
                  padding: 10,
                  borderRadius: 100,
                }}>
                <Text style={{color: '#20A483'}}>
                  + de 15 clientes atendidos
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
