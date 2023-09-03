import React from 'react';

import Swiper from 'react-native-swiper';

import {IntroStep01, IntroStep02, DotSwiper} from '../../components';
import {useNavigation} from '@react-navigation/core';

export const IntroScreen = () => {
  const navigation = useNavigation();

  const handleSkipIntro = () => {
    navigation.navigate('SelectUserTypeScreen');
  };

  return (
    <Swiper
      showsButtons={false}
      loop={false}
      dot={<DotSwiper />}
      activeDot={<DotSwiper isActive />}>
      <IntroStep01 handleSkipIntro={handleSkipIntro} />
      <IntroStep02 handleSkipIntro={handleSkipIntro} />
    </Swiper>
  );
};
