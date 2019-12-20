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
      <View>
        {this.state.loading ? (
          <View>
            <Loading />
          </View>
        ) : (
          <ScrollView>
            <View style={{backgroundColor: '#121212'}}>
              {this.state.data.map(post => {
                return (
                  <View key={post._id}>
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
                              marginTop: 25,
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
        )}
      </View>
    );
  }
}
export default blogs;
