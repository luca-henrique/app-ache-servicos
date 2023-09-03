import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {scale} from '../../utils';

export const SelectUserTypeScreen = () => {
  const [indexSelectedUserType, setIndexSelectedUserType] = useState(0);

  let disabledButton = indexSelectedUserType === 0;

  console.log(disabledButton);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 70,
          paddingHorizontal: 16,
        }}>
        <Text>Volta</Text>
        <Text>Selecionar</Text>
      </View>

      <View
        style={{
          backgroundColor: '#FAF9F8',
          paddingHorizontal: 16,
          marginTop: 16,
          borderTopWidth: 1.5,
          borderColor: '#F0EEED',
          height: '100%',
        }}>
        <Text style={{color: '#807875', marginTop: 24, marginBottom: 16}}>
          Selecione como você quer usar o AcheServiços
        </Text>

        <TouchableOpacity
          onPress={() => setIndexSelectedUserType(1)}
          style={{
            padding: 16,
            borderWidth: 1.5,
            borderRadius: 15,
            borderColor:
              indexSelectedUserType === 1
                ? 'rgba(255, 119, 74, 0.20)'
                : '#F0EEED',
            backgroundColor:
              indexSelectedUserType === 1 ? 'rgba(255, 119, 74, 0.10)' : '#FFF',
          }}>
          <View
            style={{
              padding: 10,
              borderWidth: 1.5,
              borderRadius: 10,
              borderColor: '#F0EEED',
              width: 38,
              backgroundColor: indexSelectedUserType === 1 && '#fff',
            }}>
            <Text>U</Text>
          </View>
          <View style={{height: 16}} />
          <Text style={{color: '#1A1918'}}>Encontrar profissionais</Text>
          <View style={{height: 6}} />
          <Text style={{color: '#807875'}}>Para realizar um serviços</Text>
        </TouchableOpacity>
        <View style={{height: 16}} />
        <TouchableOpacity
          onPress={() => setIndexSelectedUserType(2)}
          style={{
            padding: 16,
            borderWidth: 1.5,
            borderRadius: 15,
            borderColor:
              indexSelectedUserType === 2
                ? 'rgba(255, 119, 74, 0.20)'
                : '#F0EEED',
            backgroundColor:
              indexSelectedUserType === 2 ? 'rgba(255, 119, 74, 0.10)' : '#FFF',
          }}>
          <View
            style={{
              padding: 10,
              borderWidth: 1.5,
              borderRadius: 10,
              borderColor: '#F0EEED',
              width: 38,
              backgroundColor: indexSelectedUserType === 2 && '#fff',
            }}>
            <Text>U</Text>
          </View>
          <View style={{height: 16}} />
          <Text style={{color: '#1A1918'}}>Encontrar profissionais</Text>
          <View style={{height: 6}} />
          <Text style={{color: '#807875'}}>Para que clientes me encontrem</Text>
        </TouchableOpacity>
        <View
          style={{
            height: '40%',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            disabled={disabledButton}
            style={{
              width: '100%',
              paddingVertical: scale(16),
              backgroundColor: !disabledButton ? '#FF774A' : '#807875',
              borderRadius: scale(16),
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', fontWeight: 600}}>Começar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
