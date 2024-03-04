import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TimerClock from '../Screens/TimerScreen/ImageList';
import SetTime from '../Screens/SetTime/SetTime';

const Stack = createNativeStackNavigator();
const HomeScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
        statusBarColor: 'white',
        statusBarStyle: 'dark',
      }}>
      <Stack.Screen name="Home" component={TimerClock} />
      <Stack.Screen name="SetTime" component={SetTime} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
