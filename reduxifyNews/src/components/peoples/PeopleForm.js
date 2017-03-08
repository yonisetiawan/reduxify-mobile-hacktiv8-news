import React from 'react'
import{
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Text
} from 'react-native'

import {searchPeoples} from '../../actions'
import {connect} from 'react-redux'


class PeopleForm extends React.Component {

  handleChange(event){
    this.props.searchPeoples(event.nativeEvent.text)
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
    searchPeoples: (search) => dispatch(searchPeoples(search))
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

export default connect (null,dispatchToProp)(PeopleForm)
