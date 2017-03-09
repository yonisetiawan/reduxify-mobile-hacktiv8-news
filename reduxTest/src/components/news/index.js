import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native'

const datanews = [
  {name: 'detik.com'},
  {name: 'bola.net'},
  {name: 'kompas.com'},
  {name: 'kumpulberbagi.com'},
  {name: 'Bola.com'},
]

export default class News extends Component {
    constructor(){
      super()
      this.state = {
        news: [],
        keyword: '',
      }
    }
    onHandleChange(event){
      this.setState({
        keyword: event.nativeEvent.text
      })
    }
    componentDidMount(){
      fetch('https://hn.algolia.com/api/v1/search')
      .then((response)=>{
        return response.json()
      })
      .then((data)=>{
        this.setState({
          news: data.hits
        })
      })
      .catch(err => {})
    }
    render() {
      console.log(this.state.news);
        return (
            <View style={styles.container}>
                <Text>
                    News Page
                </Text>
                <Button onPress={() => this.props.navigator.push({page: 'people'})}
                  title="Go to People Page"
                />
              <View>
                  <TextInput style={styles.inputSearch} onChange={this.onHandleChange.bind(this)}></TextInput>
              </View>
              <Text style={styles.daftarMedia}>
                Daftar Media
              </Text>
              <View>
                {this.state.news.length < 1 ? <Text>Loading...</Text> : <Text></Text>}
                {this.state.news
                  .filter((dataFilter)=>{
                    return dataFilter.title !== null && dataFilter.title !== ''})
                  .filter((dataFilter)=>{
                    return dataFilter.title.toLowerCase().match(this.state.keyword.toLowerCase())})
                  .map((showDataNews, index)=>{
                    return (
                      <Text key={index}>
                          {showDataNews.title}
                      </Text>
                    )
                  })
                }
              </View>
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
