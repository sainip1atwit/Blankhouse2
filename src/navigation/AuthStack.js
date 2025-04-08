import React, { useContext } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Opening from '../screens/Opening'
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import RegisterContinue from '../screens/auth/RegisterContinue';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Opening} name='Opening' options={{headerShown: false}} />
      <Stack.Screen component={Login} name='Login' options={{headerShown: false}} />
      <Stack.Screen component={Register} name='Register' options={{headerShown: false}} />
      <Stack.Screen component={RegisterContinue} name='RegisterContinue' options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default AuthStack