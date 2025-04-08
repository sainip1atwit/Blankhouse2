import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';

import AppStack  from './AppStack';
import AuthStack from './AuthStack';
import { AuthContext } from '../context/AuthContext';
import { ActivityIndicator } from 'react-native';

function AppNav() {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size={'large'}/>
        </View>
    );
  }

  return (
    // check if userToken is valid
    //if not valid, reauthenticate 
    <NavigationContainer>
        {userToken !== null ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
  );
}

export default AppNav;