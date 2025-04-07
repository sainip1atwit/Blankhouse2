import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React from 'react'

import InputField from '../../components/InputField';

const Login = () => {
  return (
    <SafeAreaView style={{
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center'
    }}>
        <Text style={{fontSize: 30, fontWeight: 'bold', marginTop: 50}}>Welcome Back</Text>
        <Text style={{fontSize: 15, fontWeight: 'thin' , margin: 20, color: 'gray'}}>Log in to your Blankhouse account</Text>
        <TextInput 
        style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width: 'full'}}/>
    </SafeAreaView>
  );
}

export default Login