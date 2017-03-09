/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, {Component} from 'react';
 import {AppRegistry, StyleSheet, Text, View, Button, Navigator} from 'react-native';
 import News from './src/components/news/index'
 import People from './src/components/people/index'

export default class reduxTest extends Component {
  render() {
      return (
          <Navigator initialRoute={{
              page: 'news'
          }} renderScene={(route, navigator) => {
              switch(route.page){
                case 'news':
                  return <News navigator={navigator}  />
                case 'people':
                  return <People navigator={navigator} />
                default:
                  return <News />
              }
          }} />

      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

AppRegistry.registerComponent('reduxTest', () => reduxTest);
