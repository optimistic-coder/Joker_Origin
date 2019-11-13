import LinearGradient from 'react-native-linear-gradient';
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
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
          <View>
            <ImageBackground
              style={{
                width: 330,
                height: 450,
                marginLeft: 40,
                marginTop: 50,
                marginBottom: 20,
              }}
              source={whats}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('quote')}
                style={{backgroundColor: 'green', marginTop: 410}}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 20,
                    padding: 7,
                  }}>
                  View
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          {/**other component */}
          <View>
            <ImageBackground
              style={{
                width: 330,
                height: 450,
                marginLeft: 40,
                marginTop: 50,
                marginBottom: 20,
              }}
              source={movie}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('quote')}
                style={{backgroundColor: 'green', marginTop: 410}}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 20,
                    padding: 7,
                  }}>
                  View
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    );
  }
}
