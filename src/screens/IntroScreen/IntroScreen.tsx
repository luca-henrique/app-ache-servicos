import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export const IntroScreen = () => {
  return (
    <Swiper showsButtons={true} loop={false}>
      <View>
        <Text>Hello Swiper</Text>
      </View>
      <View>
        <Text>Beautiful</Text>
      </View>
      <View>
        <Text>And simple</Text>
      </View>
    </Swiper>
  );
};
