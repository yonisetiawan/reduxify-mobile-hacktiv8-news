import React from 'react'
import{
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
  Text
} from 'react-native'

import {NewsItem} from './NewsItem'
import {connect} from 'react-redux'
import {fetchNews} from '../../actions'

class NewsList extends React.Component {

  componentDidMount(){
    this.props.fetchNews('')
  }

  render(){
    return(
      <ScrollView>
      {
        this.props.news.map((item,index) => <NewsItem key={index} {...item}/>)
      }
      </ScrollView>
    )
  }
}



const stateToProp = (state) => {
  return {
    news: state.news
  }
}

const dispatchToProp = (dispatch) => {
  return{
    fetchNews : (x) => dispatch(fetchNews(x))
  }
}

export default connect(stateToProp,dispatchToProp)(NewsList)

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  header: {
    height: deviceHeight *0.1,
    width: deviceWidth,

    backgroundColor: '#F5F5F5',
  }
})
