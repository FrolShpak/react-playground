import React from 'react';
import 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PropTypes from 'prop-types';
import AuthNavigator from './authStack/AuthNavigator';
import AppNavigator from './appStack/AppNavigator';

const RootStack = createStackNavigator();
const RootNavigator = props => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {props.isSignedIn ? (
          <RootStack.Screen
            name="App"
            component={AppNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <RootStack.Screen
            name="Auth"
            component={AuthNavigator}
            options={{ headerShown: false }}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

RootNavigator.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(RootNavigator);
