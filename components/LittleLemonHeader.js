import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function LittleLemonHeader() {
  return (
    <View style={headerStyle.container}>
      <Text style={headerStyle.welcomeText}>Little Lemon</Text>
    </View>
  )
}

export default LittleLemonHeader

const headerStyle = StyleSheet.create({
  container:{
    backgroundColor: '#EE9972'
    // backgroundColor: '#F4CE14'
  },
  welcomeText:{
    padding: 40,
    fontSize: 30, 
    color: 'black', 
    textAlign: 'center'
  }
})
