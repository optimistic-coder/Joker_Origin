import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import '../../android/app/src/main/assets/fonts/Poppins-Regular.ttf';
import '../../android/app/src/main/assets/fonts/Poppins-Bold.ttf';
import whats from '../img/whats.jpg';
import {YouTubeStandaloneAndroid} from 'react-native-youtube';
import Loading from '../Loading';
class blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }
  componentDidMount() {
    fetch('https://joker-origin.herokuapp.com/module/ComicsB/blogs')
      .then(res => res.json())
      .then(post => this.setState({data: post, loading: false}))
      .catch(err => console.log(err));
  }
  static navigationOptions = {
    title: 'joker blogs videos',
    headerStyle: {
      backgroundColor: '#121212',
    },
    headerTintColor: 'white',
  };
  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.loading ? (
          <View>
            <Loading />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              backgroundColor: '#121212',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <ScrollView>
              <View style={{backgroundColor: '#121212'}}>
                {this.state.data.map(post => {
                  return (
                    <View key={post._id} style={{marginTop: 30}}>
                      <TouchableOpacity
                        style={{marginBottom: 20}}
                        onPress={() => {
                          YouTubeStandaloneAndroid.playVideo({
                            apiKey: 'AIzaSyCiQQ-uXfl1vDn5fKJdPiTzta1GXxEtxAk', // Your YouTube Developer API Key
                            videoId: `${post.video}`, // YouTube video ID
                            autoplay: true, // Autoplay the video
                            startTime: 120, // Starting point of video (in seconds)
                          })
                            .then(() => console.log('Standalone Player Exited'))
                            .catch(errorMessage => console.error(errorMessage));
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            width: 350,
                            height: 140,
                            backgroundColor: '#212121',
                            borderRadius: 15,
                          }}>
                          <View style={{height: 140, width: 120}}>
                            <Image
                              style={{
                                height: 140,
                                width: 120,
                                borderRadius: 15,
                              }}
                              source={whats}
                            />
                          </View>
                          <View
                            style={{marginTop: 7, paddingLeft: 15, width: 200}}>
                            <Text
                              style={{
                                fontSize: 19,
                                fontFamily: 'Poppins-Bold',
                                color: 'white',
                              }}>
                              {post.name}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    );
  }
}
export default blogs;
