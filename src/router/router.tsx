import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IntroScreen, SelectUserTypeScreen} from '../screens';

const Stack = createNativeStackNavigator();

export default function RouterConfig() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={IntroScreen} />
        <Stack.Screen
          name="SelectUserTypeScreen"
          component={SelectUserTypeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
