import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native'

const datanews = [
  {name: 'DiL'},
  {name: 'BosL'},
  {name: 'KoL'},
]

export default class People extends Component {
    constructor(){
      super()
      this.state = {
        news: datanews,
      }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    People Page
                </Text>
                <Button onPress={() => this.props.navigator.push({page: 'news'})}
                  title="Go To News Page"
                />
              <Button onPress={() => this.props.navigator.pop()}
                  title="Back"
                />
              <Text style={styles.daftarMedia}>
                Daftar Penulis
              </Text>
              {this.state.news.map((showDataNews, index)=>{
                return (
                  <Text key={index}>
                      {showDataNews.name}
                  </Text>
                )
                })
              }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height: '100%',
        width:'100%'
    },
    inputSearch: {
      marginBottom: 20,
      height: 40,
      width: 150,
      borderColor: 'orange',
      borderWidth: 1
    },
    daftarMedia: {
      marginBottom: 10,
    }
});
