import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';

const Login = ({navigation}) => {
  
  const { login } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <View 
      style={{
        alignItems: 'center'
      }}>
      <Text style={{fontSize: 30, fontWeight: 'bold', marginTop: 50}}>Welcome Back</Text>
      <Text style={{fontSize: 15, fontWeight: 'thin' , margin: 20, color: 'gray'}}>Log in to your Blankhouse account</Text>
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
              onPress={() => {login()}}>
                  <Text style={styles.text}>Login</Text>
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

export default Login