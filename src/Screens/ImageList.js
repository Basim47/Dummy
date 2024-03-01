import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {createTimer} from '../mobX/store';
import {observer} from 'mobx-react';

const myTimer = createTimer();

const ImageList = observer(() => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.timerView}>
        <View style={styles.container}>
          <View style={styles.digitView}>
            <Text style={styles.time}>{myTimer.hoursPassed}</Text>
          </View>
          <Text style={styles.time}>:</Text>
          <View style={styles.digitView}>
            <Text style={styles.time}>{myTimer.mintsPassed}</Text>
          </View>
          <Text style={styles.time}>:</Text>
          <View style={styles.digitView}>
            <Text style={styles.time}>{myTimer.secsPassed}</Text>
          </View>
        </View>
        <View style={styles.timeSet}>
          <TextInput
            style={styles.timeSetter}
            placeholder="HH"
            placeholderTextColor={'red'}
            value={myTimer.hoursPassed}
            keyboardType="numeric"
            onChangeText={text => myTimer.setHours(text)}
          />
          <Text style={styles.time}>:</Text>
          <TextInput
            style={styles.timeSetter}
            placeholder="MM"
            keyboardType="numeric"
            placeholderTextColor={'red'}
            value={myTimer.mintsPassed}
            onChangeText={text => myTimer.setMint(text)}
          />
        </View>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.6}
          onPress={() => myTimer.start()}>
          <Text style={styles.btnText}>Start Timer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.6}
          onPress={() => myTimer.reset()}>
          <Text style={styles.btnText}>Reset Timer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export default ImageList;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: '6%',
  },
  timerView: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  btnView: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btn: {
    width: 140,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    elevation: 7,
  },
  btnText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  timeSet: {
    width: '75%',
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 16,
    elevation: 7,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
  },
  timeSetter: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    width: 70,
    alignItems: 'center',
    textAlign: 'center',
  },
});
