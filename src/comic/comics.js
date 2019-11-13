import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import '../../android/app/src/main/assets/fonts/Poppins-Regular.ttf';
import '../../android/app/src/main/assets/fonts/Poppins-Bold.ttf';
import whats from '../img/whats.jpg';
import {YouTubeStandaloneAndroid} from 'react-native-youtube';

import Icon from 'react-native-vector-icons/FontAwesome';
class comics extends Component {
  static navigationOptions = {
    title: 'Comics book videos',
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
            onPress={() => {
              YouTubeStandaloneAndroid.playVideo({
                apiKey: 'AIzaSyCiQQ-uXfl1vDn5fKJdPiTzta1GXxEtxAk', // Your YouTube Developer API Key
                videoId: '_f-ltlNFUtw', // YouTube video ID
                autoplay: true, // Autoplay the video
                startTime: 120, // Starting point of video (in seconds)
              })
                .then(() => console.log('Standalone Player Exited'))
                .catch(errorMessage => console.error(errorMessage));
            }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#212121',
                marginLeft: 20,
                marginTop: 40,
                borderRadius: 15,
                marginRight: 20,
              }}>
              <Image
                style={{
                  marginLeft: 15,
                  height: 100,
                  width: 100,
                  marginTop: 15,
                  borderRadius: 15,
                }}
                source={whats}
              />
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'column',
                  width: 200,
                }}>
                <Text
                  style={{
                    fontSize: 19,
                    fontFamily: 'Poppins-Bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  The killing joke
                </Text>

                <Text
                  style={{
                    fontFamily: 'Poppins-medium',
                    color: 'white',
                    marginTop: 5,
                    marginBottom: 15,
                  }}>
                  The Killing Joke is a 2016 American adult animated superhero
                  film produced by Warner Bros.
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/**2nd field */}
          <TouchableOpacity
            onPress={() => {
              YouTubeStandaloneAndroid.playVideo({
                apiKey: 'AIzaSyCiQQ-uXfl1vDn5fKJdPiTzta1GXxEtxAk', // Your YouTube Developer API Key
                videoId: '_f-ltlNFUtw', // YouTube video ID
                autoplay: true, // Autoplay the video
                startTime: 120, // Starting point of video (in seconds)
              })
                .then(() => console.log('Standalone Player Exited'))
                .catch(errorMessage => console.error(errorMessage));
            }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#212121',
                marginLeft: 20,
                marginTop: 40,
                borderRadius: 15,
                marginRight: 20,
              }}>
              <Image
                style={{
                  marginLeft: 15,
                  height: 100,
                  width: 100,
                  marginTop: 15,
                  borderRadius: 15,
                }}
                source={whats}
              />
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'column',
                  width: 200,
                }}>
                <Text
                  style={{
                    fontSize: 19,
                    fontFamily: 'Poppins-Bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  The killing joke
                </Text>

                <Text
                  style={{
                    fontFamily: 'Poppins-medium',
                    color: 'white',
                    marginTop: 5,
                    marginBottom: 15,
                  }}>
                  The Killing Joke is a 2016 American adult animated superhero
                  film produced by Warner Bros.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/**3rd field */}
          <TouchableOpacity
            onPress={() => {
              YouTubeStandaloneAndroid.playVideo({
                apiKey: 'AIzaSyCiQQ-uXfl1vDn5fKJdPiTzta1GXxEtxAk', // Your YouTube Developer API Key
                videoId: '_f-ltlNFUtw', // YouTube video ID
                autoplay: true, // Autoplay the video
                startTime: 120, // Starting point of video (in seconds)
              })
                .then(() => console.log('Standalone Player Exited'))
                .catch(errorMessage => console.error(errorMessage));
            }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#212121',
                marginLeft: 20,
                marginTop: 40,
                borderRadius: 15,
                marginRight: 20,
              }}>
              <Image
                style={{
                  marginLeft: 15,
                  height: 100,
                  width: 100,
                  marginTop: 15,
                  borderRadius: 15,
                }}
                source={whats}
              />
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'column',
                  width: 200,
                }}>
                <Text
                  style={{
                    fontSize: 19,
                    fontFamily: 'Poppins-Bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  The killing joke
                </Text>

                <Text
                  style={{
                    fontFamily: 'Poppins-medium',
                    color: 'white',
                    marginTop: 5,
                    marginBottom: 15,
                  }}>
                  The Killing Joke is a 2016 American adult animated superhero
                  film produced by Warner Bros.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/**4ht field */}
          <TouchableOpacity
            onPress={() => {
              YouTubeStandaloneAndroid.playVideo({
                apiKey: 'AIzaSyCiQQ-uXfl1vDn5fKJdPiTzta1GXxEtxAk', // Your YouTube Developer API Key
                videoId: '_f-ltlNFUtw', // YouTube video ID
                autoplay: true, // Autoplay the video
                startTime: 120, // Starting point of video (in seconds)
              })
                .then(() => console.log('Standalone Player Exited'))
                .catch(errorMessage => console.error(errorMessage));
            }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#212121',
                marginLeft: 20,
                marginTop: 40,
                borderRadius: 15,
                marginRight: 20,
              }}>
              <Image
                style={{
                  marginLeft: 15,
                  height: 100,
                  width: 100,
                  marginTop: 15,
                  borderRadius: 15,
                }}
                source={whats}
              />
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'column',
                  width: 200,
                }}>
                <Text
                  style={{
                    fontSize: 19,
                    fontFamily: 'Poppins-Bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  The killing joke
                </Text>

                <Text
                  style={{
                    fontFamily: 'Poppins-medium',
                    color: 'white',
                    marginTop: 5,
                    marginBottom: 15,
                  }}>
                  The Killing Joke is a 2016 American adult animated superhero
                  film produced by Warner Bros.
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/**5th */}

          <TouchableOpacity
            onPress={() => {
              YouTubeStandaloneAndroid.playVideo({
                apiKey: 'AIzaSyCiQQ-uXfl1vDn5fKJdPiTzta1GXxEtxAk', // Your YouTube Developer API Key
                videoId: '_f-ltlNFUtw', // YouTube video ID
                autoplay: true, // Autoplay the video
                startTime: 120, // Starting point of video (in seconds)
              })
                .then(() => console.log('Standalone Player Exited'))
                .catch(errorMessage => console.error(errorMessage));
            }}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#212121',
                marginLeft: 20,
                marginTop: 40,
                borderRadius: 15,
                marginRight: 20,
              }}>
              <Image
                style={{
                  marginLeft: 15,
                  height: 100,
                  width: 100,
                  marginTop: 15,
                  borderRadius: 15,
                }}
                source={whats}
              />
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'column',
                  width: 200,
                }}>
                <Text
                  style={{
                    fontSize: 19,
                    fontFamily: 'Poppins-Bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  The killing joke
                </Text>

                <Text
                  style={{
                    fontFamily: 'Poppins-medium',
                    color: 'white',
                    marginTop: 5,
                    marginBottom: 15,
                  }}>
                  The Killing Joke is a 2016 American adult animated superhero
                  film produced by Warner Bros.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
export default comics;
