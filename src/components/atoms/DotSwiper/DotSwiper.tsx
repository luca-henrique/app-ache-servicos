import React from 'react';
import {View} from 'react-native';

interface DotSwiperProps {
  isActive?: boolean;
}

export const DotSwiper = ({isActive = false}: DotSwiperProps) => {
  return (
    <View
      style={{
        backgroundColor: !isActive ? 'rgba(128, 120, 117, 0.25)' : '#807875',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
      }}
    />
  );
};
