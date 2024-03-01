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
    width: '95%',
    height: 150,
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
    width: '18%',
    height: 50,
    backgroundColor: '#fff',
    elevation: 7,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
  },
});
