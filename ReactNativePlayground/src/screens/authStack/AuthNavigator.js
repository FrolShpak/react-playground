import React from 'react';
import 'react-native-gesture-handler';
import { baseStyles } from '../../styles';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './signIn/SignInScreen';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        style={baseStyles.screen}
        component={SignInScreen}
        options={{ title: 'Sign In' }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
