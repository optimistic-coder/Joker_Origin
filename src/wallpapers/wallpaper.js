import React, {Component} from 'react';
import {View, Text, Image, Stylesheet, TouchableOpacity} from 'react-native';
import ImageLoad from 'react-native-image-placeholder';
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
        <ImageLoad
          style={{
            height: 490,
            width: 300,
            marginLeft: 50,
            marginTop: 90,
            borderWidth: 0.5,
            borderRadius: 20,
            borderColor: 'white',
          }}
          borderRadius={20}
          borderWidth={0.5}
          loadingStyle={{size: 'large', color: 'blue'}}
          source={{
            uri:
              'https://4.bp.blogspot.com/-lYq2CzKT12k/VVR_atacIWI/AAAAAAABiwk/ZDXJa9dhUh8/s0/Convict_Lake_Autumn_View_uhd.jpg',
          }}
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
