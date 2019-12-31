import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import wallpaper from './img/wallpaper.jpg';
import charchters from './img/char.jpg';
import quotes from './img/quotes.jpg';
import blogs from './img/blogs.jpg';
import movie from './img/movie.jpg';
import '../android/app/src/main/assets/fonts/Poppins-Bold.ttf';
import '../android/app/src/main/assets/fonts/Poppins-Regular.ttf';
import '../android/app/src/main/assets/fonts/Poppins-Light.ttf';
import '../android/app/src/main/assets/fonts/Poppins-Medium.ttf';

class Home extends Component {
  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: '#121212',
    },
    headerTintColor: 'white',
  };
  render() {
    return (
      <ScrollView>
        <StatusBar backgroundColor="#121212" />
        <View style={{backgroundColor: '#121212'}}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'Poppins-Bold',
              fontSize: 20,
              color: 'white',
              marginTop: 5,
            }}>
            Joker Origin
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 30,
            }}>
            <View style={styles.box}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('wallpapers')}>
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
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('mainc')}>
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
              </TouchableOpacity>
            </View>
          </View>
          {/**Row/////////////////// */}

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 40,
            }}>
            <View style={styles.box}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('quotes')}>
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
              </TouchableOpacity>
            </View>

            <View style={styles.box}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('blogs')}>
                <ImageBackground
                  style={{width: 150, height: 200}}
                  source={blogs}>
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
              </TouchableOpacity>
            </View>
          </View>
          {/** ////// */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 40,
              marginBottom: 20,
            }}>
            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Movo')}>
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
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  box: {
    padding: 15,
  },
});
export default Home;
