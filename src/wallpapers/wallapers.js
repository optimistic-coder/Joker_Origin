import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper-animated';

import char from '../img/char.jpg';
import comic from '../img/comic.jpg';

export default class wallapers extends Component {
  static navigationOptions = {
    title: 'Wallpapers',
    headerStyle: {
      backgroundColor: '#121212',
    },
    headerTintColor: 'white',
  };
  render() {
    return (
      <Swiper
        style={{backgroundColor: '#121212'}}
        paginationLeft={''}
        paginationRight={''}
        smoothTransition
        loop
        dragDownToBack
        dragY
        showPagination={false}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('wallpaper')}
          style={styles.slide1}>
          <Image style={styles.pic} source={comic} />
        </TouchableOpacity>

        <View style={styles.slide2}>
          <Image style={styles.pic} source={char} />
        </View>
      </Swiper>
    );
  }
}
const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 420,
    width: 300,
    marginLeft: 50,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    height: 420,
    width: 300,
  },
  pic: {
    height: 500,
    width: 300,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: 'white',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
