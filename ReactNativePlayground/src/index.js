import * as React from 'react';
import { styles, baseStyles } from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import HomeScreen from '_screens/home';
import SingInScreen from '_screens/signin';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function App() {
    const isLoggedIn = false;
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {isLoggedIn ? (
            <Stack.Screen 
              name = "Home" 
              component = {HomeScreen} 
              options = {{title: "Home"}}/>
          ) : (
            <Stack.Screen 
              name = "SignIn"
              style = {baseStyles.screen}
              component = {SingInScreen} 
              options = {{title: "Sign In"}}/>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }