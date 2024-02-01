import React from 'react';

import {Separator} from '../../atoms/Separator/Separator';
import {Typography} from '../../atoms/Typography/Typography';
import {Button} from '../../atoms/Button/Button';
import {FooterLayout} from './style';

interface IFooterLayoutIntro {
  title: string;
  description: string;
  handleNext?: () => void;
}

export const FooterLayoutIntro = ({
  title,
  description,
  handleNext,
}: IFooterLayoutIntro) => {
  return (
    <FooterLayout>
      <Typography typography="h2" textAlign="center">
        {title}
      </Typography>
      <Separator size={8} />
      <Typography
        typography="h3"
        textAlign="center"
        colorFamily="gray"
        colorVariant="_01">
        {description}
      </Typography>
      <Separator size={20} />
      <Button variant="primary" onPress={handleNext}>
        Próximo
      </Button>
    </FooterLayout>
  );
};
