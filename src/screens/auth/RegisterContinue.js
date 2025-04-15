import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import * as ImagePicker from 'expo-image-picker';


const RegisterContinue = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [bio, setBio] = useState('');
  const [instagram, setInstagram] = useState('');

  const { 
    handleRegister, 
    newUsername, 
    newPassword, 
    newName, 
    setNewBio,
    setNewInstagram,
    setNewProfilePic
  } = useContext(AuthContext);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setNewProfilePic(result.assets[0]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.inner}
        >
          <View style={styles.header}>
            <Text style={styles.title}>Personalize Your Account</Text>
            <Text style={styles.subtitle}>
              Upload a profile picture and add a bio
            </Text>
          </View>

          <TouchableOpacity style={styles.imageContainer} onPress={pickImage}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={styles.profileImage}
              />
            ) : (
              <Text style={styles.plus}>+</Text>
            )}
          </TouchableOpacity>

          <View style={styles.form}>
            <Text style={styles.label}>Bio</Text>
            <TextInput
              style={styles.input}
              value={bio}
              onChangeText={setBio}
              placeholder="Add a short description"
            />

            <Text style={styles.label}>Instagram</Text>
            <TextInput
              style={styles.input}
              value={instagram}
              onChangeText={setInstagram}
              placeholder="@yourhandle"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.completeButton}
              onPress={async () => {
                setNewBio(bio);
                setNewInstagram(instagram);
                handleRegister(newName, newUsername, newPassword, bio, instagram);
                navigation.navigate('SuccessfulRegister');
              }}>
              <Text style={styles.completeText}>Complete</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffef9',
  },
  inner: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Bodoni 72',
    fontStyle: 'italic',
    color: '#1a1a1a',
  },
  subtitle: {
    fontSize: 13,
    color: '#666',
    marginTop: 6,
  },
  imageContainer: {
    width: 160,
    height: 160,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  plus: {
    fontSize: 30,
    color: '#4d4d4d',
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 8,
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 6,
    color: '#1a1a1a',
  },
  input: {
    height: 42,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    fontSize: 14,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  backButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  completeButton: {
    backgroundColor: '#1a1a2e',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  backText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  completeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
});

export default RegisterContinue;
