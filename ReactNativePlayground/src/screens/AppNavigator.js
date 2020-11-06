import React from 'react';
import 'react-native-gesture-handler';
import { baseStyles } from '../styles';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home/HomeScreen';

const AppStack = createStackNavigator();

const AppNavigator = () => {
  return (
      <AppStack.Navigator>
        <AppStack.Screen
                name="Home"
                style={baseStyles.screen}
                component={HomeScreen}
                options={{ title: 'Home' }}/>
      </AppStack.Navigator>
  );
};

export default AppNavigator;
