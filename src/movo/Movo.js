import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
// import '../../android/app/src/main/assets/fonts/.ttf';
import '../../android/app/src/main/assets/fonts/Poppins-Medium.ttf';
import '../../android/app/src/main/assets/fonts/Poppins-SemiBold.ttf';
import Icon from 'react-native-vector-icons/FontAwesome';
import {YouTubeStandaloneAndroid} from 'react-native-youtube';
import joaquin from '../img/wallpaper.jpg';
import ImageLoad from 'react-native-image-placeholder';
class Movo extends Component {
  static navigationOptions = {
    title: 'Joker ovies',
    headerStyle: {
      backgroundColor: '#121212',
    },
    headerTintColor: 'white',
  };
  render() {
    return (
      <ScrollView>
        <View style={{backgroundColor: '#121212'}}>
          <View
            style={{
              flexDirection: 'column',
              marginLeft: 14,
              marginTop: 50,
              marginRight: 22,
              backgroundColor: '#212121',
              borderRadius: 10,
            }}>
            <ImageLoad
              style={{
                height: 450,
                width: 375,
              }}
              borderRadius={10}
              loadingStyle={{size: 'large', color: 'blue'}}
              source={{
                uri:
                  'https://4.bp.blogspot.com/-lYq2CzKT12k/VVR_atacIWI/AAAAAAABiwk/ZDXJa9dhUh8/s0/Convict_Lake_Autumn_View_uhd.jpg',
              }}
            />
            <View style={{flexDirection: 'row', marginTop: 25}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontFamily: 'Poppins-Medium',
                  marginLeft: 10,
                }}>
                Movie name :{' '}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontFamily: 'Poppins-Medium',
                  marginLeft: 8,
                }}>
                Joker
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 25}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontFamily: 'Poppins-Medium',
                  marginLeft: 10,
                }}>
                IMDb :{' '}
              </Text>
              <Icon
                style={{marginLeft: 8, alignItems: 'center'}}
                name="star"
                size={20}
                color="#f3ce13"
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontFamily: 'Poppins-Medium',
                  marginLeft: 10,
                }}>
                8.7
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 25}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontFamily: 'Poppins-Medium',
                  marginLeft: 10,
                }}>
                Box Office :{' '}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontFamily: 'Poppins-Medium',
                  marginLeft: 8,
                }}>
                73.75 crores USD
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 25}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontFamily: 'Poppins-Medium',
                  marginLeft: 10,
                }}>
                Release date :{' '}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontFamily: 'Poppins-Medium',
                  marginLeft: 8,
                }}>
                2 October 2019
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 25}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontFamily: 'Poppins-Medium',
                  marginLeft: 10,
                }}>
                Director:{' '}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontFamily: 'Poppins-Medium',
                  marginLeft: 8,
                }}>
                Todd Phillips
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 25}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontFamily: 'Poppins-Medium',
                  marginLeft: 10,
                }}>
                Budget :{' '}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontFamily: 'Poppins-Medium',
                  marginLeft: 8,
                }}>
                $55–70 million
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 25}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontFamily: 'Poppins-Medium',
                  marginLeft: 10,
                }}>
                Music director:{' '}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 17,
                  fontFamily: 'Poppins-Medium',
                  marginLeft: 8,
                }}>
                Hildur Guðnadóttir
              </Text>
            </View>
            <View
              style={{
                marginTop: 40,
                marginLeft: 15,
                marginRight: 15,
                marginBottom: 27,
              }}>
              <Button
                title="Watch trailer"
                onPress={() => {
                  YouTubeStandaloneAndroid.playVideo({
                    apiKey: 'AIzaSyCiQQ-uXfl1vDn5fKJdPiTzta1GXxEtxAk', // Your YouTube Developer API Key
                    videoId: '_f-ltlNFUtw', // YouTube video ID
                    autoplay: true, // Autoplay the video
                    startTime: 120, // Starting point of video (in seconds)
                  })
                    .then(() => console.log('Standalone Player Exited'))
                    .catch(errorMessage => console.error(errorMessage));
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  WebViewContainer: {
    marginTop: Platform.OS == 'ios' ? 20 : 0,
  },
});
export default Movo;
