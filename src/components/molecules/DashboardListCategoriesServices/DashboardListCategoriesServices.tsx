import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

export const DashboardListCategoriesServices = () => {
  return (
    <View
      style={{
        borderTopWidth: 1.5,
        borderTopColor: '#F0EEED',
        paddingLeft: 16,
      }}>
      <View style={{height: 24}} />
      <Text
        style={{
          color: '#807875',
          fontSize: 13,
          fontWeight: 500,
        }}>
        CATEGORIAS
      </Text>
      <View style={{height: 16}} />

      <ScrollView horizontal={true}>
        <TouchableOpacity
          style={{
            width: 150,
            padding: 12,
            borderWidth: 1.5,
            borderColor: '#F0EEED',
            borderRadius: 15,
            marginRight: 16,
          }}>
          <View
            style={{
              padding: 8,
              backgroundColor: 'rgba(224,168,38,0.2)',
              width: 34,
              height: 34,
              borderRadius: 10,
            }}>
            <Text>U</Text>
          </View>
          <View style={{height: 32}} />
          <Text>Assistência técnica</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 150,
            padding: 12,
            borderWidth: 1.5,
            borderColor: '#F0EEED',
            borderRadius: 15,
            marginRight: 16,
          }}>
          <View
            style={{
              padding: 8,
              backgroundColor: 'rgba(224,168,38,0.2)',
              width: 34,
              height: 34,
              borderRadius: 10,
            }}>
            <Text>U</Text>
          </View>
          <View style={{height: 32}} />
          <Text>Design etecnologia</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 150,
            padding: 12,
            borderWidth: 1.5,
            borderColor: '#F0EEED',
            borderRadius: 15,
          }}>
          <View
            style={{
              padding: 8,
              backgroundColor: 'rgba(224,168,38,0.2)',
              width: 34,
              height: 34,
              borderRadius: 10,
              marginRight: 16,
            }}>
            <Text>U</Text>
          </View>
          <View style={{height: 32}} />
          <Text>Reformas e reparos</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
