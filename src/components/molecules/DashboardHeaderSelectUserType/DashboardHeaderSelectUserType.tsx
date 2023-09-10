import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import {useState} from 'react';

export const DashboardHeaderSelectUserType = () => {
  const [userType, setUseType] = useState(0);

  return (
    <View>
      <Text>O QUE VOCÊ PRECISA?</Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 16,
          borderRadius: 20,
          borderWidth: 1.5,
          padding: 8,
          backgroundColor: '#fff',
          borderColor: '#F0EEED',
        }}>
        <TouchableOpacity
          style={{
            width: '50%',
            padding: 12,
            backgroundColor: userType === 0 ? 'rgba(255,119,74, 0.2)' : '#fff',
            borderRadius: 15,
          }}
          onPress={() => setUseType(0)}>
          <Text style={{color: userType === 0 ? '#FF774A' : '#807875'}}>
            Encontrar
          </Text>
          <View style={{height: 6}} />
          <Text style={{color: '#1A1918'}}>Profissionais</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setUseType(1)}
          style={{
            width: '50%',
            padding: 12,
            backgroundColor: userType === 1 ? 'rgba(255,119,74, 0.2)' : '#fff',
            borderRadius: 15,
          }}>
          <Text style={{color: userType === 1 ? '#FF774A' : '#807875'}}>
            Oferecer
          </Text>
          <View style={{height: 6}} />
          <Text color={{color: '#473F3C'}}>Serviços</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
