import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImageList from './ImageList';

type Navigator = {
  name: string;
  component: () => void;
};
const Stack = createNativeStackNavigator();
const HomeScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
        statusBarStyle: 'dark',
        statusBarColor: 'white',
        statusBarAnimation: 'fade',
      }}>
      <Stack.Screen name="Home" component={ImageList} />
    </Stack.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
