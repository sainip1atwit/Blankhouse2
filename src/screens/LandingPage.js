import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const LandingPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Community')}>
          <Text style={styles.buttonText}>Community Events</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Society')}>
          <Text style={styles.buttonText}>The Society</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Studios')}>
          <Text style={styles.buttonText}>Studios</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Gallery')}>
          <Text style={styles.buttonText}>The Gallery</Text>
        </TouchableOpacity>
      </View>

      {/* Icon only, no navigation */}
      <TouchableOpacity>
        <View style={styles.footer}>
            <Ionicons name="person-circle-outline" size={30} color="black" />
            <Text style={styles.logo}>Blankhouse</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffef9',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu: {
    marginTop: 250,
    alignItems: 'center',
    gap: 20,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: 250,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    marginTop: 8,
    fontSize: 20,
    fontFamily: 'Bodoni 72',
    fontStyle: 'italic',
  },
});

export default LandingPage;
