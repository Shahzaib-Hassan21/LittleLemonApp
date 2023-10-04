import React, { useState } from 'react'
import { View } from 'react-native'
import { Text, ScrollView, StyleSheet, TextInput, KeyboardAvoidingView, Platform, Image } from 'react-native'

function WelcomeScreen() {

  const [firstName, onChangeFirstName] = useState('')
  return (
    <KeyboardAvoidingView style={welcomeStyle.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        keyboardDismissMode='on-drag'
        indicatorStyle={'white'}>
          <View style={welcomeStyle.headerWrapper}>
        <Image
          style={welcomeStyle.headerImage}
          source={require('./img/Logo.png')}
          resizeMode='cover'
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
        <Text style={welcomeStyle.headerText}>
          Little Lemon</Text>
          </View>
        <Text style={welcomeStyle.regularText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would love
          to hear more about your experience with us!
        </Text>
        {/* <TextInput
      style={welcomeStyle.inputBox}
      value= {firstName}
      onChangeText={onChangeFirstName}
      placeholder='firstName'
      maxLength={50}
      /> */}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default WelcomeScreen

const welcomeStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper:{
    flexDirection: 'row',
    justifyContent:'center',
    margin: 10
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center'
  },
  regularText: {
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
  },
  headerImage: {
    height: 100,
    width: 100,
    borderRadius: 20,
  }
})