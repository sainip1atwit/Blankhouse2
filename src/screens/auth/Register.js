import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Register = ({navigation}) => {
  return (
    <SafeAreaView>
      <View 
      style={{
        alignItems: 'center'
      }}>
      <Text style={{fontSize: 30, fontWeight: 'bold', marginTop: 50}}>Welcome to Blankhouse</Text>
      <Text style={{fontSize: 15, fontWeight: 'thin' , margin: 20, color: 'gray'}}>Create Your Account</Text>
      </View>
      <View>
        <TextInput 
        style={{margin: 20,
          width: 'full',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
         }} 
        placeholder='First Name'/>
        <TextInput 
        style={{margin: 20,
          width: 'full',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
         }} 
        placeholder='Last Name'/>
        <TextInput 
        style={{margin: 20,
          width: 'full',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
         }} 
        placeholder='Username'/>
        <TextInput 
        style={{margin: 20,
          width: 'full',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
         }} 
        placeholder='Password'/>
      </View>
      <TouchableOpacity 
              style={styles.toc}
              onPress={() => navigation.navigate('RegisterContinue')}>
                  <Text style={styles.text}>Continue</Text>
              </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    toc: {
        backgroundColor: 'gray',
        margin: 40,
        borderRadius: 20,
        alignContent: 'center'
    },
    text: {
        fontSize: 20, 
        padding: 15,
        alignSelf: 'center'
    },
});

export default Register