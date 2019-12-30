import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper-animated';
import Loadiing from '../Loading';

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
        <View
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
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

          <View style={{width: 300}}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('wallpaper', {
                  data: this.state.data[index].img.data,
                })
              }
              style={{
                backgroundColor: '#00b300',
                alignItems: 'center',
                width: 300,
                borderRadius: 15,
                marginTop: 10,
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
          <Loadiing />
        </View>
      );
    }

    return (
      <View
        style={{
          backgroundColor: '#121212',
          flex: 1,
        }}>
        <Swiper
          style={{backgroundColor: '#121212'}}
          paginationLeft={''}
          paginationRight={''}
          smoothTransition={true}
          loop
          dragDownToBack
          dragY
          showPagination={false}>
          {pages}
        </Swiper>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  slide1: {
    height: 500,
    width: 300,
  },
  slide2: {
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
