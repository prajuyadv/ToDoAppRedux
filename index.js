/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import configureStore from './src/store';
// eslint-disable-next-line no-unused-vars
const store = configureStore;
const Todolist = () => <App />;
AppRegistry.registerComponent(appName, () => Todolist);
