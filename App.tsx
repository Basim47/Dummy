import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen';

const App = () => {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
    // </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
