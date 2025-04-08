import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}> Blankhouse </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.createAccount}>Create an account</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffef9', // off-white background
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    fontSize: 35,
    fontFamily: 'Bodoni 72', // or use a custom cursive font
    fontStyle: 'italic',
    color: '#111',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 25,
  },
  createAccount: {
    fontSize: 14,
    color: '#444',
    marginBottom: 11,
  },
  loginButton: {
    backgroundColor: '#6c6c75', // muted gray
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 20,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Login;
