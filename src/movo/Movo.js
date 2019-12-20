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
          <ScrollView>
            {this.state.data.map(post => {
              return (
                <View key={post._id} style={{backgroundColor: '#121212'}}>
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
                        uri: `${post.movie.img}`,
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
                        {post.movie.name}
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
                        {post.movie.imdb}
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
                        {post.movie.box_office}
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
                        {post.movie.date}
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
                        {post.movie.director}
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
                        {post.movie.budget}
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
                        {post.movie.music_director}
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
                            videoId: `${post.movie.video}`, // YouTube video ID
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
              );
            })}
          </ScrollView>
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
