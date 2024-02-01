import {scale} from '../utils';

import EStyleSheet from 'react-native-extended-stylesheet';

export const ButtonStyle = EStyleSheet.create({
  contained: {
    containerStyle: {
      width: '100%',
    },

    titleStyle: {
      fontSize: scale(14),
      marginLeft: scale(14),
    },

    buttonStyle: {
      height: scale(52),
      borderRadius: scale(6),
    },
  },
});
