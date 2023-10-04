import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native'

function LoginScreen() {
  const [email, onChnageEmai] = useState('');
  const [password, onChangePassword] = useState('');
  const [loggedIn, Onlogin] = useState(false);
  return (
    <ScrollView style={loginStyles.container} keyboardDismissMode='on-drag'>
      <Text style={loginStyles.headerText}>Welcome To Little Lemon</Text>
      {loggedIn && <Text style={loginStyles.headerText}>You are logged In! </Text>}

      {!loggedIn && (
        <>
          <Text style={loginStyles.regularText}>Login in continue</Text>
          <TextInput
            style={loginStyles.nameInput}
            value={email}
            onChangeText={onChnageEmai}
            keyboardType={'email-address'}
            placeholder='email'
          />
          <TextInput
            style={loginStyles.passInput}
            value={password}
            onChangeText={onChangePassword}
            placeholder='password'
            keyboardType={'default'}
            secureTextEntry={true}
          />
          <Pressable onPress={() => Onlogin(!loggedIn)} style={loginStyles.button}>
            <Text style={loginStyles.buttonText}>Login</Text>
          </Pressable>
        </>
      )}
    </ScrollView>
  )
}

export default LoginScreen;

const loginStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    padding: 40,
    fontSize: 34,
    color: 'white',
    textAlign: 'center'
  },
  regularText: {
    padding: 20,
    marginVertical: 8,
    textAlign: 'center',
    color: 'white',
    fontSize: 22
  },
  nameInput: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 12,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE'
  },
  passInput: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 12,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE'
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  }
}) 