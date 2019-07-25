import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import AppNavigator from './config/Routes/Routes'

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({});
