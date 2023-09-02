import React from 'react';

import Swiper from 'react-native-swiper';

import {IntroStep01, IntroStep02, DotSwiper} from '../../components';

export const IntroScreen = () => {
  return (
    <Swiper
      showsButtons={false}
      loop={false}
      dot={<DotSwiper />}
      activeDot={<DotSwiper isActive />}>
      <IntroStep01 />
      <IntroStep02 />
    </Swiper>
  );
};
