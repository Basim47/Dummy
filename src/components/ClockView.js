import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ClockView = ({hours, mints, secs}) => {
  return (
    <View style={styles.container}>
      <View style={styles.digitView}>
        <Text style={styles.time}>{hours}</Text>
      </View>
      <Text style={styles.time}>:</Text>
      <View style={styles.digitView}>
        <Text style={styles.time}>{mints}</Text>
      </View>
      <Text style={styles.time}>:</Text>
      <View style={styles.digitView}>
        <Text style={styles.time}>{secs}</Text>
      </View>
    </View>
  );
};

export default ClockView;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 190,
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 7,
    borderWidth: 2,
    borderColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  digitView: {
    width: '22%',
    height: 90,
    backgroundColor: '#fff',
    elevation: 7,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    fontSize: 32,
    color: '#000',
    fontWeight: 'bold',
  },
});
