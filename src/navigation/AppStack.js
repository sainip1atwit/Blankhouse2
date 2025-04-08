import { View, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from '../screens/LandingPage';
import Community from '../screens/Community';
import Society from '../screens/Society';
import Studios from '../screens/Studios';
import Gallery from '../screens/Gallery';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={LandingPage} name='LandingPage' options={{headerShown: false}} />
      <Stack.Screen component={Community} name='Community' options={{headerShown: false}} />
      <Stack.Screen component={Society} name='Society' options={{headerShown: false}} />
      <Stack.Screen component={Studios} name='Studios' options={{headerShown: false}} />
      <Stack.Screen component={Gallery} name='Gallery' options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default AppStack