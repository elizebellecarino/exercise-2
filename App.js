import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import NameScreen from "./screens/NameScreen"
import HomeScreen from "./screens/HomeScreen"
import EmailScreen from "./screens/EmailScreen"
 
export default class App extends Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: HomeScreen,
  Name: NameScreen,
  Email: EmailScreen
  
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
