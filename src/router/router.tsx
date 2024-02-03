import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  IntroScreen,
  SelectUserTypeScreen,
  DetailServiceProviderScreen,
} from '../screens';

import {BottomNavigation} from './bottom-navigation';

export type RootStackParamList = {
  Home: undefined;
  SelectUserTypeScreen: undefined;
  DetailServiceProviderScreen: undefined;
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RouterConfig() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Dashboard">
        <Stack.Screen name="Home" component={IntroScreen} />
        <Stack.Screen
          name="SelectUserTypeScreen"
          component={SelectUserTypeScreen}
        />

        <Stack.Screen name="Dashboard" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
