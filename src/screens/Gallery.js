import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NUM_COLUMNS = 3;
const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_MARGIN = 6;
const TOTAL_MARGIN = ITEM_MARGIN * (NUM_COLUMNS + 1);
const ITEM_SIZE = (SCREEN_WIDTH - TOTAL_MARGIN) / NUM_COLUMNS;

const Gallery = ({ navigation }) => {
  const placeholderData = Array.from({ length: 15 }, (_, i) => ({ id: i.toString() }));

  const renderItem = () => (
    <View style={styles.imageBox} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('LandingPage')} style={styles.menuIcon}>
          <Ionicons name="menu-outline" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>The Gallery</Text>
        <View style={{ width: 26 }} />
      </View>

      <FlatList
        data={placeholderData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={NUM_COLUMNS}
        contentContainerStyle={styles.gridContainer}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffef9',
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 20,
    height: 40,
  },
  menuIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: 'Bodoni 72',
    fontStyle: 'italic',
    color: 'black',
    textAlign: 'center',
  },
  gridContainer: {
    paddingHorizontal: ITEM_MARGIN,
    paddingTop: 20,
  },
  imageBox: {
    width: ITEM_SIZE,
    height: ITEM_SIZE,
    marginBottom: ITEM_MARGIN,
    backgroundColor: '#d9d9d9',
    borderRadius: 4,
  },
});

export default Gallery;
