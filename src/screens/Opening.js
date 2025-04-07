import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'

const Opening = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Blankhouse</Text>
      
      <View style={styles.view}>
      <TouchableOpacity 
      onPress={() => navigation.navigate('LandingPage')}
      style={styles.toc}>
        <Text style={styles.text}>Landing Page</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.toc}
      onPress={() => navigation.navigate('Register')}>
        <Text style={styles.text}>Create an Account</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.toc}
      onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 20, 
    padding: 15,
    alignSelf: 'center'
  },
  view: {
    alignContent: 'center',
  },
  toc : {
    backgroundColor: 'gray',
    marginTop: 10,
    borderRadius: 20,
    alignContent: 'center'
  }
});

export default Opening