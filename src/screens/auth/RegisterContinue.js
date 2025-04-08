import { View, Text, SafeAreaView, TextInput, StyleSheet, TouchableOpacity, PermissionsAndroid, Platform, Image } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

const RegisterContinue = ({navigation}) => {

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

  return (
    <SafeAreaView>
      <View 
      style={{
        alignItems: 'center'
      }}>
      <Text style={{fontSize: 30, fontWeight: 'bold', marginTop: 50}}>Personalize Your Account</Text>
      <Text style={{fontSize: 15, fontWeight: 'thin' , margin: 20, color: 'gray'}}>Upload a profile picture and add a bio</Text>
      </View>
      {image && <Image source={{ uri: image }} style={{ width: 150, height: 150, borderRadius: 10, alignSelf: 'center' }} />}
      <View>
        <TouchableOpacity 
        style={styles.toc}
        onPress={pickImage}>
            <Text style={styles.text}>Add a Photo</Text>
        </TouchableOpacity>
        <TextInput 
        style={{margin: 20,
          width: 'full',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
         }} 
        placeholder='Instagram Handle'/>
        <TextInput 
        style={{margin: 20,
          width: 'full',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 5,
         }} 
        placeholder='Personal Bio'/>
      </View>
      <TouchableOpacity 
              style={styles.toc}
              onPress={() => navigation.navigate('Opening')}>
                  <Text style={styles.text}>Go Back and Login</Text>
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

export default RegisterContinue