/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import {Todo} from "./src/app/Todo";

export default class HavenTest extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Todo/>
    )
  }
}

AppRegistry.registerComponent('HavenTest', () => HavenTest);
