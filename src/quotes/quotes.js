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
            <Image
              style={{
                width: 330,
                height: 450,
                marginLeft: 40,
                marginTop: 50,
                marginBottom: 20,
                borderColor: 'white',
                borderWidth: 0.2,
                borderRadius: 15,
              }}
              source={whats}
            />
          </TouchableOpacity>

          {/**other component */}

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('quote')}>
            <Image
              style={{
                width: 330,
                height: 450,
                marginLeft: 40,
                marginTop: 50,
                marginBottom: 20,
                borderColor: 'white',
                borderWidth: 0.2,
                borderRadius: 15,
              }}
              source={movie}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
