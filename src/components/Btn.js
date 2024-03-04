import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Btn = ({onPress, text}) => {
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.6} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    elevation: 8,
    marginVertical: 10,
  },
  btnText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginVertical: 14,
    marginHorizontal: 34,
  },
});
