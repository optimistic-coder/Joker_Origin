import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import wallpaper from './img/wallpaper.jpg';
import charchters from './img/char.jpg';
import quotes from './img/quotes.jpg';

import whats from './img/whats.jpg';
import movie from './img/movie.jpg';
import '../android/app/src/main/assets/fonts/Poppins-Bold.ttf';
import '../android/app/src/main/assets/fonts/Poppins-Regular.ttf';
import '../android/app/src/main/assets/fonts/Poppins-Light.ttf';
import '../android/app/src/main/assets/fonts/Poppins-Medium.ttf';

class Home extends Component {
  static navigationOptions = {header: null};
  render() {
    return (
      <ScrollView>
        <View style={{backgroundColor: '#121212'}}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Poppins-Bold',
              fontSize: 20,
              color: 'white',
              marginTop: 25,
            }}>
            Joker Origin
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('wallpapers')}>
              <View style={{marginLeft: 35, marginTop: 50}}>
                <ImageBackground
                  style={{width: 150, height: 200}}
                  source={wallpaper}>
                  <LinearGradient
                    colors={['transparent', '#040302']}
                    style={{marginTop: 147, alignItems: 'center', padding: 15}}>
                    <Text
                      style={{color: 'white', fontFamily: 'Poppins-Medium'}}>
                      Wallpaper
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('mainc')}>
              <View style={{marginLeft: 35, marginTop: 50}}>
                <ImageBackground
                  style={{width: 150, height: 200}}
                  source={charchters}>
                  <LinearGradient
                    colors={['transparent', '#040302']}
                    style={{marginTop: 147, alignItems: 'center', padding: 15}}>
                    <Text
                      style={{color: 'white', fontFamily: 'Poppins-Medium'}}>
                      Jokers Casts
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
          {/**Row/////////////////// */}

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('quotes')}>
              <View style={{marginLeft: 35, marginTop: 50}}>
                <ImageBackground
                  style={{width: 150, height: 200}}
                  source={quotes}>
                  <LinearGradient
                    colors={['transparent', '#000000']}
                    style={{marginTop: 147, alignItems: 'center', padding: 15}}>
                    <Text
                      style={{color: 'white', fontFamily: 'Poppins-Medium'}}>
                      Jokers Quotes
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('blogs')}>
              <View style={{marginLeft: 35, marginTop: 50}}>
                <ImageBackground
                  style={{width: 150, height: 200}}
                  source={whats}>
                  <LinearGradient
                    colors={['transparent', '#000000']}
                    style={{marginTop: 159, alignItems: 'center', padding: 10}}>
                    <Text
                      style={{
                        fontSize: 13,
                        color: 'white',
                        fontFamily: 'Poppins-Medium',
                      }}>
                      Joker Blogs
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
          {/** ////// */}

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Movo')}>
              <View style={{marginTop: 50, marginBottom: 50}}>
                <ImageBackground
                  style={{width: 150, height: 200}}
                  source={movie}>
                  <LinearGradient
                    colors={['transparent', '#000000']}
                    style={{marginTop: 147, alignItems: 'center', padding: 15}}>
                    <Text
                      style={{color: 'white', fontFamily: 'Poppins-Medium'}}>
                      Movies
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({});
export default Home;
