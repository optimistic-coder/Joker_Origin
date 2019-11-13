import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import joaquin from '../img/joaquin.jpg';
import '../../android/app/src/main/assets/fonts/Poppins-Medium.ttf';
class mainc extends Component {
  static navigationOptions = {
    title: 'Casts',
    headerStyle: {
      backgroundColor: '#121212',
    },
    headerTintColor: 'white',
  };
  render() {
    return (
      <ScrollView>
        <View style={{backgroundColor: '#121212'}}>
          {/**component start */}

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('subc')}>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 20,
                marginTop: 50,
                marginRight: 22,
                backgroundColor: '#212121',
                borderRadius: 10,
              }}>
              <Image
                style={{
                  height: 200,
                  width: 370,
                  borderRadius: 10,
                }}
                source={joaquin}
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
                Joaquin Rafael Phoenix is an American actor, producer, and
                activist, who has received several accolades, including a Grammy
                Award, a Golden Globe Award, and nominations for three Academy
                Awards.
              </Text>
            </View>
          </TouchableOpacity>

          {/**component end */}

          {/**component start */}

          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 20,
                marginTop: 50,
                marginRight: 22,
                backgroundColor: '#212121',
                borderRadius: 10,
              }}>
              <Image
                style={{
                  height: 200,
                  width: 370,
                  borderRadius: 10,
                }}
                source={joaquin}
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
                Joaquin Rafael Phoenix is an American actor, producer, and
                activist, who has received several accolades, including a Grammy
                Award.
              </Text>
            </View>
          </TouchableOpacity>

          {/**component end */}

          {/**component start */}

          <TouchableOpacity>
            <View
              style={{
                flexDirection: 'column',
                marginLeft: 20,
                marginTop: 50,
                marginRight: 22,
                backgroundColor: '#212121',
                borderRadius: 10,
              }}>
              <Image
                style={{
                  height: 200,
                  width: 370,
                  borderRadius: 10,
                }}
                source={joaquin}
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
                Joaquin Rafael Phoenix is an American actor, producer, and
                activist, who has received several accolades, including a Grammy
                Award, a Golden Globe Award, and nominations for three Academy
                Awards.
              </Text>
            </View>
          </TouchableOpacity>

          {/**component end */}
        </View>
      </ScrollView>
    );
  }
}
export default mainc;
