import React from 'react';
import {FlatList} from 'react-native';
import {CategoryItem} from '../CategoryItem/CategoryItem';
import {Separator} from '../../atoms/Separator/Separator';
import {Typography} from '../../atoms/Typography/Typography';

import * as S from './style';

interface ICategoryItem {
  id?: string;
  icon: string;
  name?: string;
}

const data: ICategoryItem[] = [
  {id: '1', icon: 'technical-assistance-icon', name: 'Assistência técnica'},
  {id: '2', icon: 'design-icon', name: 'Design e tecnologia'},
  {id: '3', icon: 'service-icon', name: 'Reformas e reparos'},
];

export const DashboardListCategoriesServices = () => {
  const filterByCategory = (item: ICategoryItem) => {
    console.log(item);
  };

  return (
    <S.Container>
      <Separator size={16} />
      <Typography typography="h5" colorVariant="_01">
        CATEGORIAS
      </Typography>
      <Separator size={8} />
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => (
          <CategoryItem
            key={item.id}
            {...item}
            onPress={() => filterByCategory(item)}
          />
        )}
      />
    </S.Container>
  );
};
