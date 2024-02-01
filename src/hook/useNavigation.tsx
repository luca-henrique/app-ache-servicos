import {useNavigation} from '@react-navigation/core';
import {RootStackParamList} from '../router/router';
import {NavigationProp} from '@react-navigation/native';

type RouterParams = keyof RootStackParamList;

export const useNavigate = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  const handleNavigation = (navigateTo: RouterParams) => {
    navigation.navigate(navigateTo);
  };

  return {handleNavigation};
};
