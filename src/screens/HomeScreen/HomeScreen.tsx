import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  DashboardHeaderSelectUserType,
  DashboardListCategoriesServices,
  DashboardListServiceProvider,
} from '../../components';

export const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}>
        <View style={{marginTop: 70}} />
        <DashboardHeaderSelectUserType />
      </View>

      <View style={{backgroundColor: '#fff'}}>
        <DashboardListCategoriesServices />

        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 20,
          }}>
          <Text style={{color: '#807875', fontSize: 13, fontWeight: 500}}>
            PROFISSIONAIS
          </Text>
          <View style={{marginTop: 12}} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                backgroundColor: 'rgba(128, 120, 117, 0.15)',
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderRadius: 100,
              }}>
              <Text style={{color: '#473F3C', fontSize: 14, fontWeight: 500}}>
                Campina Grande
              </Text>
            </View>
            <TouchableOpacity>
              <Text>filter</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 16}} />
          <DashboardListServiceProvider />
        </View>
      </View>
    </View>
  );
};
