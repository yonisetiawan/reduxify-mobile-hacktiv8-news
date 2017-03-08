import {Header} from './Header'
import PeopleForm from './PeopleForm'
import PeopleList from './PeopleList'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';


class App extends Component {
  render(){
    return(
      <View style={styles.container}>
      <Header />
      <PeopleForm />
      <PeopleList />
      <Button
      onPress={() => {
        this.props.navigator.pop()
      }}
      title="go to News" color="green"/>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default App
