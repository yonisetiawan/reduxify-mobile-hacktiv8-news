import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

import News from './components/news'
import Peoples from './components/peoples'



export default class Router extends Component {
  renderNewScene (route, navigator) {

    switch(route.name){
      case 'news' : return (<News route={route} navigator={navigator} />)
      case 'people' : return (<Peoples route={route} navigator={navigator} />)
    }

  }
  render() {
    const that = this
    return (

      <Navigator
        initialRoute ={{name:'news'}}
        renderScene={that.renderNewScene}
       />

    )
  }
}
