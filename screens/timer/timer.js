import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import moment from 'moment';

export default class Timer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button>Foo</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
});
