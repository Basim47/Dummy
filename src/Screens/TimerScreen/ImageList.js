import {Text, View} from 'react-native';
import React from 'react';
import {observer} from 'mobx-react';
import {styles} from './styles';
import Btn from '../../components/Btn';
import AppInput from '../../components/AppInput';
import ClockView from '../../components/ClockView';
import {useNavigation} from '@react-navigation/native';
import store from '../../mobX/store';

const TimerClock = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <Text style={styles.time}>Set Time</Text>
      <View style={styles.timerView}>
        <ClockView
          hours={store.hoursPassed}
          mints={store.mintsPassed}
          secs={store.secsPassed}
        />
        <View style={styles.timeSet}>
          <AppInput
            placeholder={'HH'}
            value={store.hoursPassed}
            onChange={text => store.setHours(text)}
          />
          <Text style={styles.time}>:</Text>
          <AppInput
            placeholder={'MM'}
            value={store.mintsPassed}
            onChange={text => store.setMint(text)}
          />
        </View>
      </View>
      <View style={styles.btnView}>
        <Btn onPress={() => navigation.navigate('SetTime')} text={'SET !'} />
      </View>
    </View>
  );
};
export default observer(TimerClock);
