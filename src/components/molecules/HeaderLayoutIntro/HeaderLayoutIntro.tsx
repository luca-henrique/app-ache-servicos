import React from 'react';
import {Button} from '../../atoms/Button/Button';
import {HeaderLayout} from './style';

interface IHeaderLayoutIntro {
  handleSkip?: () => void;
  handleBack?: () => void;
  backText?: string;
  nextText?: string;
}

export const HeaderLayoutIntro = ({
  handleSkip = () => {},
  handleBack = () => {},
  backText,
  nextText,
}: IHeaderLayoutIntro) => {
  const isExistTexts = !!backText && !!nextText;
  return (
    <HeaderLayout justifyContent={isExistTexts}>
      {backText ? (
        <Button variant="secondaryOpacity" onPress={() => handleBack()}>
          {backText}
        </Button>
      ) : null}
      {nextText ? <Button onPress={() => handleSkip()}>Pular</Button> : null}
    </HeaderLayout>
  );
};
