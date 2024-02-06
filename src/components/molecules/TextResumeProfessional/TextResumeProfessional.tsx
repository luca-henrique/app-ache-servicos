import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {textShrink} from '../../../utils/formatText';
import {Typography} from '../../atoms/Typography/Typography';
import * as S from './style';

interface ITextResumeProfessional {
  text: string;
}

export const TextResumeProfessional = ({text}: ITextResumeProfessional) => {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <Typography typography="h4">
      {showFullText ? text + '.' : textShrink(text)}
      <TouchableOpacity onPress={() => setShowFullText(state => !state)}>
        <S.TextButton>{showFullText ? 'ver menos' : 'ver mais'}</S.TextButton>
      </TouchableOpacity>
    </Typography>
  );
};
