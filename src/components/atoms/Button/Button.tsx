import React, {ReactNode} from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';
import {scale} from '../../../utils';
import {IconComponent} from '../Icon/Icon';

const buttonStyle = {
  primary: {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
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
      flexDirection: 'row',
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
  secondaryIcon: {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: scale(10),
      paddingVertical: scale(6),
      borderRadius: scale(30),
      backgroundColor: 'rgba(128, 120, 117, 0.15)',
      gap: scale(4),
    },
    text: {
      fontSize: scale(14),
      lineHeight: scale(16),
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
  iconName?: string;
}

export const Button = ({
  children,
  variant = 'secondary',
  disabled,
  iconName,
  ...props
}: IButton) => {
  //@ts-ignore
  const buttonCustom = buttonStyle[variant];

  const changeBackgroundColorDisabled = disabled && '#807875';

  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        ...buttonCustom.container,
        ...(disabled && {backgroundColor: changeBackgroundColorDisabled}),
      }}
      {...props}>
      {iconName ? <IconComponent icon={iconName} /> : null}
      <Text style={{...buttonCustom.text}}>{children}</Text>
    </TouchableOpacity>
  );
};
