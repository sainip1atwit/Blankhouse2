import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Gallery = () => {
  return (
    <SafeAreaView style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <View>
            <Text>Gallery</Text>
        </View>
    </SafeAreaView>
  );
}

export default Gallery