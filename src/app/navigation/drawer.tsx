import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './tab';
import {commonStyle as cs} from '../../assets/styles';
import {DrawerScreen} from '../screens/main';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerScreen {...props} />}
      drawerStyle={cs.drawerStyle}>
      <Drawer.Screen name="tab" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
