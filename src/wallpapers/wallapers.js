import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import Swiper from 'react-native-swiper-animated';

import char from '../img/char.jpg';
import ImageLoad from 'react-native-image-placeholder';
export default class wallapers extends Component {
  static navigationOptions = {
    title: 'Wallpapers',
    headerStyle: {
      backgroundColor: '#121212',
    },
    headerTintColor: 'white',
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }
  componentDidMount() {
    fetch('https://joker-origin.herokuapp.com/module/img/wallpaper')
      .then(res => res.json())
      .then(post =>
        this.setState({
          data: post,
          loading: false,
        }),
      )
      .catch(err => console.log(err));
  }
  render() {
    var renderPage = index => {
      return (
        <View>
          <View key={index}>
            <View style={styles.slide1}>
              <ImageLoad
                style={styles.pic}
                borderRadius={15}
                borderWidth={0.5}
                loadingStyle={{size: 'large', color: 'blue'}}
                source={{
                  uri: `${this.state.data[index].img.data}`,
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('wallpaper', {
                  data: this.state.data[index].img.data,
                })
              }
              style={{
                backgroundColor: '#00b300',
                alignItems: 'center',
                marginLeft: 50,
                marginRight: 55,
                marginTop: 205,
                borderRadius: 15,
              }}>
              <Text
                style={{
                  color: 'white',
                  padding: 10,
                  fontFamily: 'Poppins-Medium',
                }}>
                View
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };
    var pages;
    if (this.state.loading == false) {
      const pagesCount = this.state.data.length;
      pages = [...new Array(pagesCount)].map((it, index) => {
        return renderPage(index);
      });
    } else {
      return (
        <View>
          <Text style={{color: 'black'}}>Loading</Text>
        </View>
      );
    }

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
        {pages}
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
    marginLeft: 55,
    marginTop: 350,
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
