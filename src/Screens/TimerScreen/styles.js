import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding: '6%',
  },
  timerView: {
    width: '100%',
    height: '50%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btnView: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  timeSet: {
    width: '75%',
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 16,
    elevation: 7,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 40,
  },
  time: {
    fontSize: 34,
    color: '#000',
    fontWeight: 'bold',
  },
});
