import {Text, View} from 'react-native';
import React from 'react';
import {createTimer} from '../../mobX/store';
import {observer} from 'mobx-react';
import {styles} from './styles';
import Btn from '../../components/Btn';
import AppInput from '../../components/AppInput';
import ClockView from '../../components/ClockView';

const myTimer = createTimer();

const TimerClock = observer(() => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.timerView}>
        <ClockView
          hours={myTimer.hoursPassed}
          mints={myTimer.mintsPassed}
          secs={myTimer.secsPassed}
        />
        <View style={styles.timeSet}>
          <AppInput
            placeholder={'HH'}
            value={myTimer.hoursPassed}
            onChange={text => myTimer.setHours(text)}
          />
          <Text style={styles.time}>:</Text>
          <AppInput
            placeholder={'MM'}
            value={myTimer.mintsPassed}
            onChange={text => myTimer.setMint(text)}
          />
        </View>
      </View>
      <View style={styles.btnView}>
        <Btn onPress={() => myTimer.start()} text={'Start Timer'} />
        <Btn onPress={() => myTimer.reset()} text={'Reset Timer'} />
      </View>
    </View>
  );
});

export default TimerClock;
