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
    // name:post.cast.name,
    //   img: post.cast.img,
    //     description: post.cast.description,
    //       born: post.cast.born,
    //         shows: post.cast.shows,
    //           awards: post.cast.awards,
    //             video: post.cast.video,
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
                height: 200,
                width: 375,
                borderRadius: 10,
              }}
              // source={joaquin}
              borderRadius={10}
              loadingStyle={{size: 'large', color: 'blue'}}
              source={{
                uri: this.props.navigation.getParam('img'),
              }}
            />
            <View>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  marginTop: 5,
                  fontSize: 16,
                  marginLeft: 5,
                }}>
                Name :
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  marginTop: 5,
                  fontSize: 13,
                  marginRight: 22,
                  marginLeft: 17,
                  marginBottom: 7,
                }}>
                {this.props.navigation.getParam('name')}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  marginTop: 5,
                  fontSize: 16,
                  marginLeft: 5,
                }}>
                Description :
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  marginTop: 5,
                  fontSize: 13,
                  marginRight: 22,
                  marginLeft: 17,
                  marginBottom: 7,
                }}>
                {this.props.navigation.getParam('description')}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  marginTop: 5,
                  fontSize: 16,
                  marginLeft: 5,
                }}>
                Born :
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  marginTop: 5,
                  fontSize: 13,
                  marginRight: 22,
                  marginLeft: 17,
                  marginBottom: 7,
                }}>
                {this.props.navigation.getParam('born')}
              </Text>

              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  marginTop: 5,
                  fontSize: 16,
                  marginLeft: 5,
                }}>
                TV shows :
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  marginTop: 5,
                  fontSize: 13,
                  marginRight: 22,
                  marginLeft: 17,
                  marginBottom: 7,
                }}>
                {this.props.navigation.getParam('shows')}
              </Text>

              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  marginTop: 5,
                  fontSize: 16,
                  marginLeft: 5,
                }}>
                Awards :
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  color: 'white',
                  marginTop: 5,
                  fontSize: 13,
                  marginRight: 22,
                  marginLeft: 17,
                  marginBottom: 7,
                }}>
                {this.props.navigation.getParam('awards')}
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-SemiBold',
                  color: 'white',
                  marginTop: 5,
                  fontSize: 15,
                  marginRight: 22,
                  marginLeft: 17,
                  marginBottom: 7,
                }}>
                If you are interested about this charchter you should watch this
                Press the Button{' '}
              </Text>
              <View
                style={{
                  marginTop: 40,
                  marginLeft: 15,
                  marginRight: 15,
                  marginBottom: 20,
                }}>
                <Button
                  title="Press Me"
                  onPress={() => {
                    YouTubeStandaloneAndroid.playVideo({
                      apiKey: 'AIzaSyCiQQ-uXfl1vDn5fKJdPiTzta1GXxEtxAk', // Your YouTube Developer API Key
                      videoId: `${this.props.navigation.getParam('video')}`, // YouTube video ID
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
