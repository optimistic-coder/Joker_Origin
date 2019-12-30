import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet, Button} from 'react-native';

import '../../android/app/src/main/assets/fonts/Poppins-Medium.ttf';
import '../../android/app/src/main/assets/fonts/Poppins-SemiBold.ttf';
import Icon from 'react-native-vector-icons/FontAwesome';
import {YouTubeStandaloneAndroid} from 'react-native-youtube';
import Loading from '../Loading';
import ImageLoad from 'react-native-image-placeholder';
class Movo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }
  componentDidMount() {
    fetch('https://joker-origin.herokuapp.com/module/CastM/movies')
      .then(res => res.json())
      .then(post => this.setState({data: post, loading: false}))
      .catch(err => console.log(err));
  }
  static navigationOptions = {
    title: 'Joker Movies',
    headerStyle: {
      backgroundColor: '#121212',
    },
    headerTintColor: 'white',
  };
  render() {
    return (
      <View>
        {this.state.loading ? (
          <View>
            <Loading />
          </View>
        ) : (
          <View style={{backgroundColor: '#121212'}}>
            <ScrollView>
              {this.state.data.map(post => {
                return (
                  <View
                    key={post._id}
                    style={{
                      flex: 1,

                      flexDirection: 'column',
                      alignItems: 'center',
                      marginTop: 50,
                    }}>
                    <View
                      style={{
                        width: 355,
                        backgroundColor: '#212121',
                        borderRadius: 10,
                      }}>
                      <View style={{height: 450, width: 325}}>
                        <ImageLoad
                          style={{
                            height: 450,
                            width: 355,
                          }}
                          borderRadius={10}
                          loadingStyle={{size: 'large', color: 'blue'}}
                          source={{
                            uri: `${post.movie.img}`,
                          }}
                        />
                      </View>
                      <View style={{flexDirection: 'row', marginTop: 25}}>
                        <View style={{marginLeft: 10}}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 17,
                              fontFamily: 'Poppins-Medium',
                            }}>
                            Movie name :{' '}
                          </Text>
                        </View>
                        <View style={{marginLeft: 8}}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 17,
                              fontFamily: 'Poppins-Medium',
                            }}>
                            {post.movie.name}
                          </Text>
                        </View>
                      </View>
                      <View style={{flexDirection: 'row', marginTop: 25}}>
                        <View style={{marginLeft: 10}}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 17,
                              fontFamily: 'Poppins-Medium',
                            }}>
                            IMDb :{' '}
                          </Text>
                        </View>
                        <View style={{marginLeft: 8}}>
                          <Icon
                            style={{marginLeft: 8, alignItems: 'center'}}
                            name="star"
                            size={20}
                            color="#f3ce13"
                          />
                        </View>
                        <View style={{marginLeft: 10}}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 17,
                              fontFamily: 'Poppins-Medium',
                            }}>
                            {post.movie.imdb}
                          </Text>
                        </View>
                      </View>
                      <View style={{flexDirection: 'row', marginTop: 25}}>
                        <View style={{marginLeft: 10}}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 17,
                              fontFamily: 'Poppins-Medium',
                            }}>
                            Box Office :{' '}
                          </Text>
                        </View>
                        <View style={{marginLeft: 8}}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 17,
                              fontFamily: 'Poppins-Medium',
                            }}>
                            {post.movie.box_office}
                          </Text>
                        </View>
                      </View>
                      <View style={{flexDirection: 'row', marginTop: 25}}>
                        <View style={{marginLeft: 10}}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 17,
                              fontFamily: 'Poppins-Medium',
                            }}>
                            Release date :{' '}
                          </Text>
                        </View>
                        <View style={{marginLeft: 8}}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 17,
                              fontFamily: 'Poppins-Medium',
                            }}>
                            {post.movie.date}
                          </Text>
                        </View>
                      </View>
                      <View style={{flexDirection: 'row', marginTop: 25}}>
                        <View style={{marginLeft: 10}}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 17,
                              fontFamily: 'Poppins-Medium',
                            }}>
                            Director:{' '}
                          </Text>
                        </View>
                        <View style={{marginLeft: 8}}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 17,
                              fontFamily: 'Poppins-Medium',
                            }}>
                            {post.movie.director}
                          </Text>
                        </View>
                      </View>
                      <View style={{flexDirection: 'row', marginTop: 25}}>
                        <View style={{marginLeft: 10}}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 17,
                              fontFamily: 'Poppins-Medium',
                            }}>
                            Budget :{' '}
                          </Text>
                        </View>
                        <View style={{marginLeft: 8}}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 17,
                              fontFamily: 'Poppins-Medium',
                            }}>
                            {post.movie.budget}
                          </Text>
                        </View>
                      </View>
                      <View style={{flexDirection: 'row', marginTop: 25}}>
                        <View style={{marginLeft: 10}}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 17,
                              fontFamily: 'Poppins-Medium',
                            }}>
                            Music director:{' '}
                          </Text>
                        </View>
                        <View style={{marginLeft: 8}}>
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 17,
                              fontFamily: 'Poppins-Medium',
                            }}>
                            {post.movie.music_director}
                          </Text>
                        </View>
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
                              videoId: `${post.movie.video}`, // YouTube video ID
                              autoplay: true, // Autoplay the video
                              startTime: 120, // Starting point of video (in seconds)
                            })
                              .then(() =>
                                console.log('Standalone Player Exited'),
                              )
                              .catch(errorMessage =>
                                console.error(errorMessage),
                              );
                          }}
                        />
                      </View>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  WebViewContainer: {
    marginTop: Platform.OS == 'ios' ? 20 : 0,
  },
});
export default Movo;
