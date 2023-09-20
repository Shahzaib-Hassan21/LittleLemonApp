import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

function WelcomeScreen() {
  return (
      <ScrollView
      indicatorStyle= {'white'}
      style={welcomeStyle.conatiner}>
      <Text style={welcomeStyle.headerText}>
        Welcome to Little Lemon</Text>
      <Text style={welcomeStyle.innerText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      </ScrollView>
  )
}

export default WelcomeScreen

const welcomeStyle = StyleSheet.create({
  conatiner: {
      flex: 1
  },
  headerText: {
    padding:40,
    fontSize: 30, 
    textAlign: 'center', 
    color: '#EDEFEE'
  },
  innerText:{
    fontSize: 24, 
    padding: 20, 
    marginVertical: 8, 
    color: '#EDEFEE', 
    textAlign: 'center'
  }
})