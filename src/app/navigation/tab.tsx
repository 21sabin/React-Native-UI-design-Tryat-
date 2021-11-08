import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Store, Article, Journal } from '../screens/main';
import { IconM } from '../common/';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          size = 20;
          let iconName: string = '';
          if (route.name == 'home') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name == 'store') {
            iconName = focused ? 'storefront-outline' : 'storefront-outline';
          } else if (route.name == 'article') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name == 'journal') {
            iconName = focused ? 'notebook-outline' : 'notebook-outline';
          }
          return <IconM name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          height: 55,
          paddingTop: 4,
        },
        labelStyle: {
          fontSize: 14,
          textTransform: 'uppercase',
        },
      }}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="store" component={Store} />
      <Tab.Screen name="article" component={Article} />
      <Tab.Screen name="journal" component={Journal} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
