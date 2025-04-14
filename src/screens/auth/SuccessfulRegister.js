import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SuccessfulRegister = ({ navigation }) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerText}>
        <Text style={styles.title}>Your account has been created!</Text>
        <Text style={styles.subtitle}>Click Login below to log into your account</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffef9',
  },
  headerWrapper: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  menuIcon: {
    marginTop: 10,
  },
  centerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Bodoni 72',
    fontStyle: 'italic',
    color: '#1a1a1a',
    textAlign: 'center',
    margin: 20,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Bodoni 72',
    fontStyle: 'italic',
    color: '#1a1a1a',
    textAlign: 'center',
    margin: 20,
  },
  button: {
    backgroundColor: '#808080',
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 30,
    marginHorizontal: 30,
    width: '85%',
    maxWidth: 320,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  message: {
    color: '1a1a1a',
    fontSize: 16,
    fontFamily: 'Bodoni 72',
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    fontSize: 20,
    fontFamily: 'Bodoni 72',
    fontStyle: 'italic',
    color: '1a1a1a',
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default SuccessfulRegister;
