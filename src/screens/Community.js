import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Community = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('LandingPage')} style={styles.menuIcon}>
          <Ionicons name="menu-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Blankhouse</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Image 
            source={{ uri: 'https://www.instagram.com/p/DH2AeKov_oO/media/?size=l' }} 
            style={styles.image} 
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Details</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image 
            source={{ uri: 'https://www.instagram.com/p/DHUjGBpv11D/media/?size=l' }} 
            style={styles.image} 
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Details</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffef9',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  menuIcon: {
    position: 'absolute',
    left: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Bodoni 72',
    fontStyle: 'italic',
  },
  content: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  card: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 400, // 4:5 ratio
    borderRadius: 8,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#7a7a7a',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Community;
