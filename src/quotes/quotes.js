import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import ImageLoad from 'react-native-image-placeholder';
import Loading from '../Loading';
export default class quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }
  componentDidMount() {
    fetch('https://joker-origin.herokuapp.com/module/JokerQuotes/quotes')
      .then(res => res.json())
      .then(post => this.setState({data: post, loading: false}))
      .catch(err => console.log(err));
  }
  static navigationOptions = {
    title: 'Quotes',
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
                var url = post.img.data;
                return (
                  <View key={post._id}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('wallpaper', {
                          data: post.img.data,
                        })
                      }>
                      <ImageLoad
                        style={{
                          width: 380,
                          height: 450,
                          marginLeft: 10,
                          marginTop: 50,
                          marginBottom: 20,
                          borderRadius: 15,
                          borderWidth: 0.2,
                          borderColor: 'white',
                        }}
                        borderWidth={0.2}
                        borderRadius={15}
                        loadingStyle={{size: 'large', color: 'blue'}}
                        source={{
                          uri: url,
                        }}
                      />
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
