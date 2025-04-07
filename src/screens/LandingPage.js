import { View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const LandingPage = ({navigation}) => {
  return (
    <SafeAreaView style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <TouchableOpacity 
        style={styles.toc}
        onPress={()=> navigation.navigate('Community')}>
            <Text style={styles.text} >Community Events</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.toc}
        onPress={() => navigation.navigate('Society')}>
            <Text style={styles.text}>The Society</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.toc}
        onPress={() => navigation.navigate('Studios')}>
            <Text style={styles.text}>Studios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toc}
        onPress={() => navigation.navigate('Gallery')}>
            <Text style={styles.text}>The Gallery</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    toc: {
        backgroundColor: 'gray',
        marginTop: 25,
        borderRadius: 20,
        alignContent: 'center'
    },
    text: {
        fontSize: 20, 
        padding: 15,
        alignSelf: 'center'
    },
});

export default LandingPage