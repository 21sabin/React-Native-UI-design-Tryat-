import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as auth_screen from '../screens/auth';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="welcome"
        component={auth_screen.Welcome}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="signin"
        component={auth_screen.SignIn}
        options={{headerTitle: '', headerShown: false}}
      />
      <AuthStack.Screen
        name="signup"
        component={auth_screen.SignUp}
        options={{title: '', headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
