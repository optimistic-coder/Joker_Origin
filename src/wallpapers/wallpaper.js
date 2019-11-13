import React, {Component} from 'react';
import {View, Text, Image, Stylesheet, TouchableOpacity} from 'react-native';
import char from '../img/char.jpg';
import '../../android/app/src/main/assets/fonts/Poppins-Medium.ttf';
export default class wallpaper extends Component {
  static navigationOptions = {
    title: 'wallpapaer',
    headerStyle: {
      backgroundColor: '#121212',
    },
    headerTintColor: 'white',
  };
  render() {
    return (
      <View style={{backgroundColor: '#121212'}}>
        <Image
          style={{
            height: 490,
            width: 300,
            marginLeft: 50,
            marginTop: 90,
            borderWidth: 0.5,
            borderRadius: 20,
            borderColor: 'white',
          }}
          source={char}
        />
        <TouchableOpacity
          onPress={() => alert('Boom')}
          style={{
            backgroundColor: '#00b300',
            alignItems: 'center',
            marginLeft: 50,
            marginRight: 60,
            marginTop: 35,
            borderRadius: 19,
            marginBottom: 300,
          }}>
          <Text
            style={{color: 'white', padding: 10, fontFamily: 'Poppins-Medium'}}>
            Download
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
