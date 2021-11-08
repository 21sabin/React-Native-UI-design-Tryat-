import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from '../utilities/navigationRef';

//screen
import {OnboardingScreen} from '../screens/main';

//navigation
import AuthNavigator from './auth';
import DrawerNavigator from './drawer';

const Stack = createStackNavigator();

const AppRoute = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="auth" component={AuthNavigator} />
        <Stack.Screen name="onboarding_screen" component={OnboardingScreen} />
        <Stack.Screen name="main" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoute;
