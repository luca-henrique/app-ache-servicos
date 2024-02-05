import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen, SearchScreen, ConfigUserScreen} from '../screens/';
import {getBottomSpaceHeight, scale} from '../utils';
import {IconRouteComponent} from '../components/atoms/IconRouteComponent/IconRouteComponent';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        title: '',
        headerShown: false,
        tabBarStyle: {
          height: scale(60) + getBottomSpaceHeight(),
        },
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused}) => (
          <IconRouteComponent routeName={route.name} focused={focused} />
        ),
      })}>
      <Tab.Screen name="DashboardHome" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="ChatScreen" component={SearchScreen} />
      <Tab.Screen name="ConfigUserScreen" component={ConfigUserScreen} />
    </Tab.Navigator>
  );
};
