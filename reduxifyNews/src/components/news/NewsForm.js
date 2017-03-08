import React from 'react'
import{
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Text
} from 'react-native'

import {searchNews} from '../../actions'
import {connect} from 'react-redux'
import {fetchNews} from '../../actions'

class NewsForm extends React.Component {

  handleChange(event){
    this.props.fetchNews(event.nativeEvent.text)
  }

  render(){
    return(
      <View style={styles.header}>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChange={this.handleChange.bind(this)} />
      </View>
    )
  }

}

const dispatchToProp = (dispatch) =>{
  return {
    searchNews: (search) => dispatch(searchNews(search)),
    fetchNews: (x) => dispatch(fetchNews(x)),
  }
}


const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  header: {
    height: deviceHeight *0.1,
    width: deviceWidth,

    backgroundColor: '#F5F5F5',
  }
})

export default connect (null,dispatchToProp)(NewsForm)
