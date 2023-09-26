import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput} from 'react-native'

function LoginScreen() {
    const [email, onChnageEmai] = useState('');
    const [password, onChangePassword] = useState('');
  return (
    <ScrollView keyboardDismissMode='on-drag'>
    <View>
      <Text style={loginStyles.headerText}>Welcome To Little Lemon</Text>
      <Text style={loginStyles.regularText}>Login to continue</Text>
    </View>
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
    </ScrollView>
  )
}

export default LoginScreen;

const loginStyles = StyleSheet.create({
    headerText:{
        padding: 40,
        fontSize: 34,
        color: 'white',
        textAlign: 'center'
    },
    regularText:{
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
    }
}) 