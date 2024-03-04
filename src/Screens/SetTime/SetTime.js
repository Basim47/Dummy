import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {observer} from 'mobx-react';
import Btn from '../../components/Btn';
import ClockView from '../../components/ClockView';
import {useNavigation} from '@react-navigation/native';
import store from '../../mobX/store';

const SetTime = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <Text style={styles.time}>Time Clock</Text>
      <View style={styles.timerView}>
        <ClockView
          hours={store.hoursPassed}
          mints={store.mintsPassed}
          secs={store.secsPassed}
        />
      </View>
      <View style={styles.btnView}>
        <Btn onPress={() => store.start()} text={'Start Timer'} />
        <Btn onPress={() => store.reset()} text={'Reset'} />
        <Btn onPress={() => store.pause()} text={'Pause'} />
        <Btn onPress={() => navigation.goBack()} text={'Go Back'} />
      </View>
    </View>
  );
};
export default observer(SetTime);
