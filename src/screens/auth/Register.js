import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { Ionicons } from '@expo/vector-icons';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { checkUsername, setNewUsername, setNewPassword, setNewName } = useContext(AuthContext);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.inner}
        >
          <View style={styles.header}>
            <Text style={styles.title}>Welcome to Blankhouse</Text>
            <Text style={styles.subtitle}>
              Create your account
            </Text>
          </View>
          
          <View style={styles.form}>
          <Text style={styles.label}>Name</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder=""
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="next"
              />
            </View>

            <Text id='usernameInput' style={styles.label}>Username</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder=""
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="next"
              />
            </View>

            <Text style={styles.label}>Password</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                placeholder=""
                autoCapitalize="none"
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                <Ionicons
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color="#666"
                />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={async () => {if (name && username && password) {
              setNewName(name);
              setNewUsername(username);
              setNewPassword(password);
              const validUsername = await checkUsername(username);
              if (validUsername) {
                navigation.navigate('RegisterContinue');
              } else {
                Alert.alert('Username already exists');
              }
            }}}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center',
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
  form: {
    width: '85%',
    maxWidth: 320,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 4,
    color: '#1a1a1a',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  input: {
    fontSize: 14,
    paddingVertical: 10,
    color: '#000',
    flex: 1,
  },
  eyeIcon: {
    paddingLeft: 10,
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
});

export default Register;
