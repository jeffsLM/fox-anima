/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const backgroundStyle = {
    backgroundColor: 'red',
  };

  const slideData = [
    <TouchableOpacity style={{ ...styles.slideStyle }} onFocus={() => console.log('SLIDE one')}>
      <Text style={{ ...styles.slideTextStyle }} >SLIDE ONE</Text>
    </TouchableOpacity>,
    <TouchableOpacity style={{ ...styles.slideStyle }} onFocus={() => console.log('SLIDE TWO')}>
      <Text style={{ ...styles.slideTextStyle }}>SLIDE TWO</Text>
    </TouchableOpacity>,
    <TouchableOpacity style={{ ...styles.slideStyle }} onFocus={() => console.log('SLIDE THREE')}>
      <Text style={{ ...styles.slideTextStyle }}>SLIDE THREE</Text>
    </TouchableOpacity>,
    <TouchableOpacity style={{ ...styles.slideStyle }}>
      <Text style={{ ...styles.slideTextStyle }}>SLIDE FOUR</Text>
    </TouchableOpacity>,
    <TouchableOpacity style={{ ...styles.slideStyle }}>
      <Text style={{ ...styles.slideTextStyle }}>SLIDE FIVE</Text>
    </TouchableOpacity>,
    <TouchableOpacity style={{ ...styles.slideStyle }}>
      <Text style={{ ...styles.slideTextStyle }}>SLIDE SIX</Text>
    </TouchableOpacity>,
  ];

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: Colors.white,
          }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            removeClippedSubviews={false}
            initialNumToRender={5}
            maxToRenderPerBatch={7}
            windowSize={3}
            data={slideData}
            renderItem={data => data.item}
            style={{
              flex: 1,
              backgroundColor: 'lightblue',
            }}
            contentContainerStyle={{
              backgroundColor: 'darkblue',
              marginVertical: 25,
              flexDirection: 'row-reverse',
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: Colors.white,
          }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            removeClippedSubviews={false}
            initialNumToRender={5}
            maxToRenderPerBatch={7}
            windowSize={3}
            data={slideData}
            renderItem={data => data.item}
            style={{
              flex: 1,
              backgroundColor: 'lightblue',
            }}
            contentContainerStyle={{
              backgroundColor: 'darkblue',
              marginVertical: 25,
              flexDirection: 'row-reverse',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  slideStyle: {
    backgroundColor: 'lightgreen',
    borderColor: 'red',
    borderWidth: 1,
    margin: 25,
    justifyContent: 'center',
    width: 200,
  },
  slideTextStyle: {
    color: 'black',
    textAlign: 'center',
    margin: 50,
    width: 100,
    backgroundColor: '#FE434C',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
    height: 40,
  },
});

export default App;
