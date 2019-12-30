import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import ImageLoad from 'react-native-image-placeholder';
import '../../android/app/src/main/assets/fonts/Poppins-Medium.ttf';
import Loading from '../Loading';
class mainc extends Component {
  static navigationOptions = {
    title: 'Casts',
    headerStyle: {
      backgroundColor: '#121212',
    },
    headerTintColor: 'white',
  };
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }
  componentDidMount() {
    fetch('https://joker-origin.herokuapp.com/module/castM/cast')
      .then(res => res.json())
      .then(post => this.setState({data: post, loading: false}))
      .catch(err => console.log(err));
  }
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
                <View key={post._id}>
                  <ScrollView>
                    <View>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: '#121212',
                        }}>
                        {/**component start */}

                        <View>
                          <TouchableOpacity
                            onPress={() =>
                              this.props.navigation.navigate('subc', {
                                name: post.cast.name,
                                img: post.cast.img,
                                description: post.cast.description,
                                born: post.cast.born,
                                shows: post.cast.shows,
                                awards: post.cast.awards,
                                video: post.cast.video,
                              })
                            }>
                            <View
                              style={{
                                flex: 1,
                                flexDirection: 'column',
                                width: 320,
                                backgroundColor: '#212121',

                                marginTop: 50,

                                marginBottom: 25,
                                borderRadius: 10,
                              }}>
                              <View
                                style={{
                                  height: 200,
                                  width: 100,
                                }}>
                                <ImageLoad
                                  style={{
                                    height: 200,
                                    width: 320,
                                    borderRadius: 10,
                                  }}
                                  // source={joaquin}
                                  borderRadius={10}
                                  loadingStyle={{
                                    size: 'large',
                                    color: 'blue',
                                  }}
                                  source={{
                                    uri: post.cast.img,
                                  }}
                                />
                              </View>

                              <View>
                                <Text
                                  style={{
                                    fontFamily: 'Poppins-Medium',
                                    color: 'white',
                                    marginTop: 5,
                                    fontSize: 13,
                                    marginRight: 22,
                                    paddingLeft: 10,
                                    marginBottom: 7,
                                  }}>
                                  {post.cast.description}
                                </Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </ScrollView>
                </View>
              );
            })}
          </ScrollView>
        )}
      </View>
    );
  }
}
export default mainc;
