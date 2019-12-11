import LinearGradient from 'react-native-linear-gradient';
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';
import ImageLoad from 'react-native-image-placeholder';
import whats from '../img/whats.jpg';
import movie from '../img/movie.jpg';
export default class quotes extends Component {
  static navigationOptions = {
    title: 'Quotes',
    headerStyle: {
      backgroundColor: '#121212',
    },
    headerTintColor: 'white',
  };
  render() {
    return (
      <ScrollView>
        <View style={{backgroundColor: '#121212'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('quote')}>
            <ImageLoad
              style={{
                width: 330,
                height: 450,
                marginLeft: 40,
                marginTop: 50,
                marginBottom: 20,
                borderRadius: 15,
                borderWidth: 0.2,
                borderColor: 'white',
              }}
              borderWidth={0.2}
              borderRadius={15}
              loadingStyle={{size: 'large', color: 'blue'}}
              source={{
                uri:
                  'https://4.bp.blogspot.com/-lYq2CzKT12k/VVR_atacIWI/AAAAAAABiwk/ZDXJa9dhUh8/s0/Convict_Lake_Autumn_View_uhd.jpg',
              }}
            />
          </TouchableOpacity>

          {/**other component */}

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('quote')}>
            <ImageLoad
              style={{
                width: 330,
                height: 450,
                marginLeft: 40,
                marginTop: 50,
                marginBottom: 20,
                borderColor: 'white',
              }}
              borderColor={'white'}
              borderWidth={0.2}
              borderRadius={15}
              loadingStyle={{size: 'large', color: 'blue'}}
              source={{
                uri:
                  'https://4.bp.blogspot.com/-lYq2CzKT12k/VVR_atacIWI/AAAAAAABiwk/ZDXJa9dhUh8/s0/Convict_Lake_Autumn_View_uhd.jpg',
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
