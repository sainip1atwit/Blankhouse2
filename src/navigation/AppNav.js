import React, { useContext, useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { AuthContext } from '../context/AuthContext';

function AppNav() {
  const { isLoading, userToken } = useContext(AuthContext);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    // Only show nav once isLoading is false AND userToken is resolved (either valid or null)
    if (!isLoading) {
      setShowNav(true);
    }
  }, [isLoading]);

  if (!showNav) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppNav;
