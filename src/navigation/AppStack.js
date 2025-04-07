import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Opening from '../screens/Opening'
import LandingPage from '../screens/LandingPage';
import Community from '../screens/Community';
import Society from '../screens/Society';
import Studios from '../screens/Studios';
import Gallery from '../screens/Gallery';
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen component={Opening} name='Opening' options={{headerShown: false}} />
            <Stack.Screen component={LandingPage} name='LandingPage' options={{headerShown: false}} />
            <Stack.Screen component={Community} name='Community' options={{headerShown: false}} />
            <Stack.Screen component={Society} name='Society' options={{headerShown: false}} />
            <Stack.Screen component={Studios} name='Studios' options={{headerShown: false}} />
            <Stack.Screen component={Gallery} name='Gallery' options={{headerShown: false}} />
            <Stack.Screen component={Login} name='Login' options={{headerShown: false}} />
            <Stack.Screen component={Register} name='Register' options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default AppStack