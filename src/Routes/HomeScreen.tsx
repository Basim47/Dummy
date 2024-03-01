import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TimerClock from '../Screens/TimerScreen/ImageList';

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
      <Stack.Screen name="Home" component={TimerClock} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
