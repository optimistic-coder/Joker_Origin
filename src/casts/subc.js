import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import '../../android/app/src/main/assets/fonts/Poppins-Medium.ttf';
import '../../android/app/src/main/assets/fonts/Poppins-SemiBold.ttf';
import {YouTubeStandaloneAndroid} from 'react-native-youtube';
import ImageLoad from 'react-native-image-placeholder';
class subc extends Component {
  static navigationOptions = {
    title: 'Cast',
    headerStyle: {
      backgroundColor: '#121212',
    },
    headerTintColor: 'white',
  };
  render() {
    // video: post.cast.video,
    return (
      <ScrollView>
        <StatusBar backgroundColor="#121212" />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: '#121212',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              marginTop: 50,

              width: 340,
              backgroundColor: '#212121',
              borderRadius: 10,
            }}>
            <View>
              <ImageLoad
                style={{
                  height: 200,
                  width: 340,
                  borderRadius: 10,
                }}
                // source={joaquin}
                borderRadius={10}
                loadingStyle={{size: 'large', color: 'blue'}}
                source={{
                  uri: this.props.navigation.getParam('img'),
                }}
              />
            </View>

            <View style={{marginLeft: 15, marginTop: 5}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  fontSize: 16,
                }}>
                Name
              </Text>
            </View>
            <View
              style={{
                marginLeft: 27,
                marginBottom: 7,
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',

                  fontSize: 13,
                }}>
                {this.props.navigation.getParam('name')}
              </Text>
            </View>
            <View style={{marginLeft: 15, marginTop: 5}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',

                  fontSize: 16,
                }}>
                Description
              </Text>
            </View>
            <View
              style={{
                marginLeft: 27,
                marginBottom: 7,
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',

                  fontSize: 13,
                }}>
                {this.props.navigation.getParam('description')}
              </Text>
            </View>
            <View style={{marginLeft: 15, marginTop: 5}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',

                  fontSize: 16,
                }}>
                Born
              </Text>
            </View>
            <View
              style={{
                marginLeft: 27,
                marginBottom: 7,
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',

                  fontSize: 13,
                }}>
                {this.props.navigation.getParam('born')}
              </Text>
            </View>

            <View style={{marginTop: 5, marginLeft: 15}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  fontSize: 16,
                }}>
                TV shows
              </Text>
            </View>
            <View
              style={{
                marginLeft: 27,
                marginBottom: 7,
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',

                  fontSize: 13,
                }}>
                {this.props.navigation.getParam('shows')}
              </Text>
            </View>

            <View style={{marginLeft: 15, marginTop: 5}}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',

                  fontSize: 16,
                }}>
                Awards
              </Text>
            </View>
            <View
              style={{
                marginLeft: 27,
                marginBottom: 7,
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',

                  fontSize: 13,
                }}>
                {this.props.navigation.getParam('awards')}
              </Text>
            </View>
            <View
              style={{
                marginLeft: 27,
                marginBottom: 7,
                marginTop: 5,
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  color: 'white',

                  fontSize: 15,
                  marginRight: 22,
                }}>
                If you are interested about this charchter you should watch this
                Press the Button{' '}
              </Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#00b300',
                  borderRadius: 15,
                  width: 310,

                  alignItems: 'center',
                }}
                onPress={() => {
                  YouTubeStandaloneAndroid.playVideo({
                    apiKey: 'AIzaSyCiQQ-uXfl1vDn5fKJdPiTzta1GXxEtxAk', // Your YouTube Developer API Key
                    videoId: `${this.props.navigation.getParam('video')}`, // YouTube video ID
                    autoplay: true, // Autoplay the video
                    startTime: 0, // Starting point of video (in seconds)
                  })
                    .then(() => console.log('Standalone Player Exited'))
                    .catch(errorMessage => console.error(errorMessage));
                }}>
                <Text
                  style={{
                    color: 'white',
                    padding: 10,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Watch
                </Text>
              </TouchableOpacity>
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
export default subc;
