import React from 'react'
import{
  View,
  StyleSheet,
  Dimensions,
  Text
} from 'react-native'

export const Header = () => (
  <View style={styles.header}>
   <View style={styles.headerContent}>
    <Text>
      Hacktiv News
    </Text>
    </View>
  </View>
)

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  header: {
    marginTop:20,
    height: deviceHeight*0.1 ,
    width: deviceWidth,
    backgroundColor: '#26A65B',
    alignItems:'center',
    justifyContent:'center'

  },
  headContent:{
    height: '50%'

  }
})
