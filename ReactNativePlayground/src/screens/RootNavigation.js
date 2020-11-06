import React from 'react';
import 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { baseStyles } from '../styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home/HomeScreen';
import SignInScreen from './login/SignInScreen';
import PropTypes from 'prop-types';

const Stack = createStackNavigator();

const RootNavigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {props.isSignedIn ? (
          <Stack.Screen
            name="Home"
            style={baseStyles.screen}
            component={HomeScreen}
            options={{ title: 'Home' }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            style={baseStyles.screen}
            component={SignInScreen}
            options={{ title: 'Login' }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

RootNavigation.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(RootNavigation);
