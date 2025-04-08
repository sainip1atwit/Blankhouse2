import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Studios = ({ navigation }) => {
  const [joinedWaitlist, setJoinedWaitlist] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('LandingPage')} style={styles.menuIcon}>
          <Ionicons name="menu-outline" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Blankhouse Studios</Text>
        <View style={{ width: 26 }} />
      </View>

      {!joinedWaitlist ? (
        <>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1618354691373-bba7d0f8788d?auto=format&fit=crop&w=800&q=80' }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.caption}>Spring / Summer 2025</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => setJoinedWaitlist(true)}>
            <Text style={styles.buttonText}>Waitlist</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.confirmationContainer}>
          <Text style={styles.confirmationText}>You are now on the waitlist</Text>
          <Text style={styles.noteItalic}>You will now be notified on releases.</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 20,
    height: 40,
  },
  menuIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: 'Bodoni 72',
    fontStyle: 'italic',
    color: 'black',
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 120,
  },
  image: {
    width: 320,
    height: 400,
    borderRadius: 6,
    backgroundColor: '#ddd',
  },
  caption: {
    marginTop: 8,
    fontSize: 12,
    fontFamily: 'Bodoni 72',
    fontStyle: 'italic',
    color: '#333',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10.2,
    paddingHorizontal: 128,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Bodoni 72',
  },
  confirmationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  confirmationText: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Bodoni 72',
    textAlign: 'center',
    marginBottom: 10,
  },
  noteItalic: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Bodoni 72',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default Studios;
