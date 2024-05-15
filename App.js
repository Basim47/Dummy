import React, {useRef, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/Routes/HomeScreen';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
const SCREEN_WIDTH = Dimensions.get('window').width;

const Screens = [
  {
    id: 1,
    img: require('./src/imgs/img1.png'),
  },
  {
    id: 2,
    img: require('./src/imgs/img2.png'),
  },
  {
    id: 3,
    img: require('./src/imgs/img3.png'),
  },
  {
    id: 4,
    img: require('./src/imgs/img4.png'),
  },
  {
    id: 5,
    img: require('./src/imgs/img5.png'),
  },
];
const App = () => {
  const [indexSelected, setIndex] = useState(0);
  const carouselRef = useRef();
  const listRef = useRef(null);

  const Screen = ({item}) => {
    return (
      <View style={styles.scrollPage}>
        <View style={[styles.screen]}>
          <Image source={item.img} resizeMode="center" style={styles.img} />
        </View>
      </View>
    );
  };

  const onSelect = indexSelected => {
    setIndex(indexSelected);
    listRef?.current?.scrollToOffset({
      offset: indexSelected * SCREEN_WIDTH,
      animated: true,
    });
  };

  const onTouchThumbnail = touched => {
    if (touched === indexSelected) return;

    carouselRef?.current?.snapToItem(touched);
  };
  return (
    // <NavigationContainer>
    //   <HomeScreen />
    // </NavigationContainer>
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        layout="default"
        data={Screens}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={SCREEN_WIDTH}
        onSnapToItem={index => onSelect(index)}
        renderItem={({item, index}) => <Screen key={index} item={item} />}
      />
      <View style={styles.NavView}>
        <TouchableOpacity activeOpacity={0.6} style={styles.btn}>
          <Text style={styles.btnText}>Select</Text>
        </TouchableOpacity>
        <View style={styles.btnImgView}>
          <FlatList
            ref={listRef}
            data={Screens}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={[
                  styles.Imgbtn,
                  {height: index === indexSelected ? 135 : 115},
                  {width: index === indexSelected ? 65 : 50},
                ]}
                key={item.id}
                onPress={() => onTouchThumbnail(index)}
                activeOpacity={0.6}>
                <Image
                  source={item.img}
                  resizeMode="contain"
                  style={styles.img}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    width: SCREEN_WIDTH,
    height: '70%',
    flexDirection: 'row',
  },
  scrollPage: {
    width: SCREEN_WIDTH,
    padding: 15,
  },
  screen: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  NavView: {
    width: SCREEN_WIDTH,
    height: '30%',
  },
  btn: {
    width: 170,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'black',
    marginVertical: 4,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  btnImgView: {
    width: SCREEN_WIDTH,
    height: '70%',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  Imgbtn: {
    width: 50,
    height: 110,
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
