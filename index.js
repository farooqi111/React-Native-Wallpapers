/**
 * @format
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './app/app';
import {name as appName} from './app.json';
export default class photos extends Component {
  render() {
    return (
      <View>
        <App></App>
      </View>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);
