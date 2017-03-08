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
  Navigator,
  View
} from 'react-native';

import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import Router from './src/router'
import reducers from './src/reducer/index'
import thunk from 'redux-thunk'
const createStoreMiddleware = applyMiddleware(thunk)(createStore)


export default class reduxifyNews extends Component {

  render() {

    return (
      <Provider store={createStoreMiddleware(reducers)}>
        <Router />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reduxifyNews', () => reduxifyNews);
