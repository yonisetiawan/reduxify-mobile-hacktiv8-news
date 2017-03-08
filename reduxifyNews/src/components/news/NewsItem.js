import React from 'react'
import{
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Text
} from 'react-native'

export const NewsItem = (props) => (
  <View>
    <Text>{props.title}</Text>
  </View>

)

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  header: {
    height: deviceHeight *0.1,
    width: deviceWidth,

    backgroundColor: '#F5F5F5',
  }
})
