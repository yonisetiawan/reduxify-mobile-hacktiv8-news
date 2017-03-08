import {Header} from './Header'
import NewsForm from './NewsForm'
import NewsList from './NewsList'

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
      <NewsForm />
      <NewsList/>
      <Button
      onPress={() => {
        this.props.navigator.push({
          name:'people'
        })
      }}
      title="go to people" color="green"/>
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
