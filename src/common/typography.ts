import {scale} from '../utils';

import {StyleSheet} from 'react-native';

export const StyleTypography = StyleSheet.create({
  h1: {
    fontSize: scale(20),
    lineHeight: scale(40),
  },
  h2: {
    fontSize: scale(18),
    lineHeight: scale(28),
    fontWeight: '500',
  },
  h3: {
    fontSize: scale(16),
    lineHeight: scale(22),
    fontWeight: '400',
  },

  h4: {
    fontSize: scale(14),
    lineHeight: scale(21),
  },

  h5: {
    fontSize: scale(12),
    lineHeight: scale(19),
  },

  button: {
    fontSize: scale(14),
    lineHeight: scale(21),
    fontWeight: '500',
  },

  input: {
    fontSize: scale(14),
    lineHeight: scale(20),
    fontWeight: '500',
  },
});
