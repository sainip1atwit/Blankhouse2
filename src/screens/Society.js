import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Society = ({ navigation }) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('LandingPage')} style={styles.menuIcon}>
          <Ionicons name="menu-outline" size={26} color="white" />
        </TouchableOpacity>
      </View>

      {!submitted ? (
        <>
          <View style={styles.centerText}>
            <Text style={styles.title}>Blankhouse Society</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => setSubmitted(true)}>
            <Text style={styles.buttonText}>Apply</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View style={styles.messageContainer}>
            <Text style={styles.message}>
              We appreciate your interest in joining{"\n"}
              The Blankhouse Society.
            </Text>
            <Text style={styles.message}>{"\n"}Please wait as we review your profile.</Text>
          </View>
          <Text style={styles.footer}>Blankhouse</Text>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A13914',
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
    fontSize: 26,
    color: 'white',
    fontFamily: 'Bodoni 72',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 8.5, // 15% less than original 10
    paddingHorizontal: 34, // 15% less than original 40
    alignSelf: 'center',
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 14,
    color: '#A13914',
    textAlign: 'center',
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  message: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Bodoni 72',
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    fontSize: 20,
    fontFamily: 'Bodoni 72',
    fontStyle: 'italic',
    color: 'white',
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default Society;
