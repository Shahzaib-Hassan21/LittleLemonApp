import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function Footer() {
  return (
    <View style={footerStyle.container}>
      <Text style={footerStyle.footerText}> All rights reserved by Little Lemon, 2023 </Text>
    </View>
  )
}

export default Footer

const footerStyle = StyleSheet.create({
  container:{
    backgroundColor: '#EE9972', 
    marginBottom: 10,
  },
  footerText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    fontStyle: 'italic'
  }
})