import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import {StackNavigator,} from 'react-navigation';
import * as firebase from "firebase";
import splash from './splash';
import login from './login';
firebase.initializeApp({
  apiKey: "AIzaSyA9E6KQVyGsN54MuK0pFioanoXaSWjcr_Q",
  authDomain: "scroing.firebaseapp.com",
  databaseURL: "https://scroing.firebaseio.com",
  storageBucket: "scroing.appspot.com"
});
export default class App extends React.Component {
  render() {
    const BasicApp = StackNavigator({
    splash: {screen: splash},
    login: {screen: login},
    },{
      navigationOptions:{
      header:false,
    }
});
    return (
     <BasicApp/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6F6866',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
