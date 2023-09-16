import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export const SearchScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FAF9F8'}}>
      <View style={{height: 78}} />
      <SearchHeader />
      <View style={{height: 16}} />
      <View
        style={{
          backgroundColor: '#fff',
          height: '100%',
          borderTopWidth: 1.5,
          borderTopColor: '#F0EEED',
          paddingHorizontal: 16,
        }}>
        <View style={{height: 16}} />
        <Text>MAIS BUSCADOS</Text>
        <View style={{height: 12}} />
        <View
          style={{
            borderWidth: 1.5,
            borderColor: '#F0EEED',
            padding: 16,
            borderRadius: 16,
          }}>
          <View
            style={{
              width: 32,
              height: 32,
              backgroundColor: '#FEF8EA',
              borderRadius: 10,
            }}
          />
          <View style={{height: 16}} />
          <Text style={{color: '#1A1918'}}>Assistência técnica</Text>
          <View style={{height: 4}} />
          <Text numberOfLines={1} style={{color: '#807875'}}>
            TV’s, eletrônicos, eletrodomésticos, celulares...
          </Text>
        </View>

        <View style={{height: 16}} />
        <Text>TODOS</Text>
        <View style={{height: 12}} />
        <View
          style={{
            borderWidth: 1.5,
            borderColor: '#F0EEED',
            padding: 16,
            borderRadius: 16,
          }}>
          <View
            style={{
              width: 32,
              height: 32,
              backgroundColor: '#FEF8EA',
              borderRadius: 10,
            }}
          />
          <View style={{height: 16}} />
          <Text style={{color: '#1A1918'}}>Assistência técnica</Text>
          <View style={{height: 4}} />
          <Text numberOfLines={1} style={{color: '#807875'}}>
            TV’s, eletrônicos, eletrodomésticos, celulares...
          </Text>
        </View>
      </View>
    </View>
  );
};

export const SearchHeader = () => {
  return (
    <View style={{paddingHorizontal: 16}}>
      <Text>ENCONTRE UM PROFISSIONAL</Text>
      <View style={{height: 16}} />
      <View
        style={{
          height: 50,
          width: '100%',
          borderWidth: 1.5,
          borderColor: '#F0EEED',
          backgroundColor: '#fff',
          borderRadius: 20,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        <Text style={{marginRight: 16}}>Icon</Text>
        <TextInput style={{width: '76%'}} placeholder="Buscar" />
        <View
          style={{
            borderLeftWidth: 1.5,
            height: '100%',
            borderLeftColor: '#F0EEED',
            justifyContent: 'center',
            width: '16%',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Text>Icon</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
