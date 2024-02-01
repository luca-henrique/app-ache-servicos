import React, {ReactNode} from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import {scale} from '../../../utils';

const buttonStyle = {
  primary: {
    container: {
      flexDirections: 'row',
      alignItems: 'center',
      backgroundColor: '#FF774A',
      paddingVertical: scale(10),
      borderRadius: scale(10),
    },
    text: {
      fontSize: scale(14),
      lineHeight: scale(28),
      fontWeight: '500',
      color: '#fff',
    },
  },
  secondary: {
    container: {
      flexDirections: 'row',
      alignItems: 'center',
      backgroundColor: '#FFF',
      paddingHorizontal: scale(12),
      paddingVertical: scale(4),
      borderRadius: scale(10),
    },
    text: {
      fontSize: scale(14),
      lineHeight: scale(28),
      color: '#473F3C',
    },
  },
  secondaryOpacity: {
    container: {
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
      paddingHorizontal: scale(12),
      paddingVertical: scale(4),
      borderRadius: scale(10),
    },
    text: {
      fontSize: scale(14),
      lineHeight: scale(28),
      color: '#473F3C',
    },
  },
};

interface IButton extends TouchableOpacityProps {
  children: ReactNode;
  variant?: string;
}

export const Button = ({children, onPress, variant = 'secondary'}: IButton) => {
  //@ts-ignore
  const buttonCustom = buttonStyle[variant];

  return (
    <TouchableOpacity style={{...buttonCustom.container}} onPress={onPress}>
      <Text style={{...buttonCustom.text}}>{children}</Text>
    </TouchableOpacity>
  );
};
