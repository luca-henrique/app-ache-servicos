import React from 'react';
import {Separator} from '../../atoms/Separator/Separator';
import {Typography} from '../../atoms/Typography/Typography';

import * as S from './style';

export const ProfessionalBasicInformations = () => {
  return (
    <S.Container>
      <S.ImageUser
        source={{
          uri: 'https://s3-alpha-sig.figma.com/img/89e3/f9a7/fbc0f5e3832a1cfb6dc2688a64541ed5?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cLguDdi3cE6LVJdAAlsBvbRVJiptffFMB7q~W6RYO9YanPAvIMo-i1wVz8JVTiNRGsxG4lC8r5t2Ah13NtA5IrigsJCd1NMwFdBcTFuQd09nfqVzePOW3ASpf3RUkBludwwHeJzGR9sjzC6sdsYcYcHKwwCQG9dQv1bW9RQSUlh7sZ-NG6aykD8cfP7R1lxIp1uGWkFDAvTYQM5-qGqRkY30GaKX6Mu4YPeJzHmeEX5IKErzcymdONWSsLBNcRcBcok9-ACMg~P-53~8C0DmxrByQXiZ03K4E3UBk8GBO-GlwaAo9bF--2OoP86lrbd8yVEV1Dvaawh3zOh5qaX5-A__',
        }}
      />
      <Separator size={8} />
      <Typography typography="h3">Lucas Andrade</Typography>
      <Separator size={4} />
      <Typography typography="h4" colorFamily="brand" colorVariant="_01">
        Técnico em informática
      </Typography>
      <Separator size={8} />
      <S.BrandInformationClientContainer>
        <Typography typography="h4" colorFamily="brand" colorVariant="_05">
          + de 15 clientes atendidos
        </Typography>
      </S.BrandInformationClientContainer>
    </S.Container>
  );
};
