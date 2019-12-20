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
                  <View
                    style={{
                      backgroundColor: '#121212',
                    }}>
                    {/**component start */}

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
                          flexDirection: 'column',
                          marginLeft: 20,
                          marginTop: 50,
                          marginRight: 22,
                          backgroundColor: '#212121',
                          borderRadius: 10,
                          marginBottom: 10,
                        }}>
                        <ImageLoad
                          style={{
                            height: 200,
                            width: 370,
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
                            marginLeft: 5,
                            marginBottom: 7,
                          }}>
                          {post.cast.description}
                        </Text>
                      </View>
                    </TouchableOpacity>

                    {/**component end */}
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
export default mainc;
