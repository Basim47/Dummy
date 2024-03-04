import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

const AppInput = ({value, onChange, placeholder}) => {
  return (
    <TextInput
      style={styles.timeSetter}
      placeholder={placeholder}
      placeholderTextColor={'red'}
      value={value}
      keyboardType="numeric"
      onChangeText={onChange}
    />
  );
};

export default AppInput;

const styles = StyleSheet.create({
  timeSetter: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    width: 70,
    alignItems: 'center',
    textAlign: 'center',
  },
});
