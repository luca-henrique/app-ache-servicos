import React from 'react';

import {Image, View, Text, TouchableOpacity} from 'react-native';
import {IMAGES} from '../../../assets/images';

import {Dimensions} from 'react-native';
import {scale} from '../../../utils';

const {width, height} = Dimensions.get('screen');

export const IntroStep02 = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        position: 'relative',
      }}>
      <View>
        <Image
          source={IMAGES.introStep02}
          style={{width: width, height: scale(height / 1.2)}}
        />
      </View>

      <View
        style={{
          position: 'absolute',
          top: 80,
          left: 0,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: scale(16),
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.25)',
            paddingHorizontal: 12,
            paddingVertical: 4,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 14, lineHeight: 28, color: '#473F3C'}}>
            Voltar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFF',
            paddingHorizontal: 12,
            paddingVertical: 4,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 14, lineHeight: 28, color: '#473F3C'}}>
            Pular
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          borderTopLeftRadius: scale(25),
          borderTopRightRadius: scale(25),
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#fff',
          height: scale(240),
          width: width,
          paddingHorizontal: scale(16),
          paddingVertical: scale(24),
        }}>
        <View>
          <Text
            style={{
              color: '#1A1918',
              fontSize: scale(18),
              textAlign: 'center',
            }}>
            Mostre seus serviços, conquiste novos clientes e expanda sua
            presença local
          </Text>
          <View style={{height: scale(8)}} />
          <Text
            style={{
              color: '#807875',
              fontSize: scale(14),
              textAlign: 'center',
            }}>
            Fortaleça sua presença online permitindo que os clientes descubram o
            seu trabalho
          </Text>
        </View>
        <View style={{height: scale(20)}} />
        <TouchableOpacity
          style={{
            width: '100%',
            paddingVertical: 16,
            backgroundColor: '#FF774A',
            borderRadius: 16,
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff', fontWeight: 600}}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
