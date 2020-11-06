import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';
import configureStore from './src/redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';

const store = configureStore();

const ReduxApp = () => (
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
