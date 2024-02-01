import React, {ReactNode} from 'react';
import {Text, TextProps} from 'react-native';
import {COLORS, StyleTypography} from '../../../common';

interface ITypography extends TextProps {
  typography: string;
  children: ReactNode;
  textAlign?: string;
  colorFamily?: string;
  colorVariant?: string;
}

export const Typography = ({
  typography = 'h1',
  textAlign = 'auto',
  colorFamily = 'gray',
  colorVariant = '_04',
  numberOfLines,
  children,
}: ITypography) => {
  //@ts-ignore
  const styleText = StyleTypography[typography];
  const color = COLORS[colorFamily][colorVariant];

  return (
    <Text
      style={{...styleText, textAlign, color}}
      numberOfLines={numberOfLines}>
      {children}
    </Text>
  );
};
