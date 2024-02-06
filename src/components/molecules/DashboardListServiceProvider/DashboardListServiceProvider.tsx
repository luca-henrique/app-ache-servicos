import React from 'react';

import {FlatList} from 'react-native';
import {ProfessionalCard} from '../ProfessionalCard/ProfessionalCard';
import {useNavigate} from '../../../hook/useNavigation';
import {MOCK_PROFESSION} from '../../../mock/professional.mock';

export interface IProfessional {
  uuid: string;
  photo: string;
  name: string;
  profession: string;
  customersCount: number;
}

export const DashboardListServiceProvider = () => {
  const {handleNavigation} = useNavigate();

  const detailProfessionalById = (uuid: string) => {
    handleNavigation('ProfessionalDetailScreen');
  };

  return (
    <FlatList
      data={MOCK_PROFESSION}
      renderItem={({item}) => (
        <ProfessionalCard
          key={item.uuid}
          onPress={() => detailProfessionalById(item.uuid)}
          {...item}
        />
      )}
    />
  );
};
