import React, { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput, KeyboardAvoidingView, Platform} from 'react-native'

function WelcomeScreen() {

  const [firstName, onChangeFirstName] = useState('')
  return (
    <KeyboardAvoidingView style={welcomeStyle.conatiner} behavior={Platform.OS === 'ios'? 'padding' : 'height'}>
    <ScrollView
      keyboardDismissMode='on-drag'
      indicatorStyle= {'white'}>
      <Text style={welcomeStyle.headerText}>
        Welcome to Little Lemon</Text>
      <Text style={welcomeStyle.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <TextInput
      style={welcomeStyle.inputBox}
      value= {firstName}
      onChangeText={onChangeFirstName}
      placeholder='firstName'
      maxLength={50}
      />
      </ScrollView>
      </KeyboardAvoidingView>
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
  regularText:{
    fontSize: 22, 
    padding: 20, 
    marginVertical: 8, 
    color: '#EDEFEE', 
    textAlign: 'center'
  },
  inputBox: {
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    margin: 12,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
    // color: 'black'
  }
})