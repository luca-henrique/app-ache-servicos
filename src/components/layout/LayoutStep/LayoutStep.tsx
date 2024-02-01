import React, {ReactNode} from 'react';
import {ImageSourcePropType} from 'react-native';

import {Container, BackgroundImageContainer} from './style';

interface ILayoutStep {
  source: ImageSourcePropType;
  children?: ReactNode;
}

export const LayoutStep = ({source, children}: ILayoutStep) => {
  return (
    <Container>
      <BackgroundImageContainer source={source} />
      {children}
    </Container>
  );
};
