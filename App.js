import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Timer from './screens/timer/timer.js';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}
