import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Stylesheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import ImageLoad from 'react-native-image-placeholder';
import '../../android/app/src/main/assets/fonts/Poppins-Medium.ttf';
import RNFetchBlob from 'rn-fetch-blob';
import {PermissionsAndroid} from 'react-native';

var granted;
async function requestStoragePermission() {
  try {
    granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Joker Origin App Storage Permission',
        message:
          'Joker Origin App needs access to Storage ' +
          'so you can take download images.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
  } catch (err) {
    console.warn(err);
  }
}
requestStoragePermission();

export default class wallpaper extends Component {
  static navigationOptions = {
    title: 'Download',
    headerStyle: {
      backgroundColor: '#121212',
    },
    headerTintColor: 'white',
  };

  render() {
    const image = this.props.navigation.getParam('data');
    var download = () => {
      var date = new Date();
      var url = `${image}`;
      var ext = extention(url);
      ext = '.' + ext[0];
      const {config, fs} = RNFetchBlob;
      let PictureDir = fs.dirs.PictureDir;
      let options = {
        fileCache: true,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path:
            PictureDir +
            '/image_' +
            Math.floor(date.getTime() + date.getSeconds() / 2) +
            ext,
          description: 'Image',
        },
      };
      config(options)
        .fetch('GET', url)
        .then(res => {
          Alert.alert('Success Downloaded');
        });
    };
    var extention = filename => {
      return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
    };

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#121212',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <StatusBar backgroundColor="#121212" />
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginTop: 50,
              height: 490,
              width: 380,
            }}>
            <ImageLoad
              style={{
                resize: 'cover',
                height: 490,
                width: 380,
                borderColor: 'white',
              }}
              borderRadius={20}
              borderWidth={0.5}
              loadingStyle={{size: 'large', color: 'blue'}}
              source={{
                uri: image,
              }}
            />
          </View>

          {granted === PermissionsAndroid.RESULTS.GRANTED ? (
            <View style={{marginTop: 20}}>
              <TouchableOpacity
                onPress={() => download()}
                style={{
                  height: 40,
                  width: 350,
                  backgroundColor: '#00b300',
                  alignItems: 'center',
                  borderRadius: 19,
                }}>
                <Text
                  style={{
                    color: 'white',
                    padding: 10,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Download
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{marginTop: 20}}>
              <TouchableOpacity
                onPress={() => requestStoragePermission()}
                style={{
                  height: 40,
                  width: 350,
                  backgroundColor: '#00b300',
                  alignItems: 'center',
                  borderRadius: 19,
                }}>
                <Text
                  style={{
                    color: 'white',
                    padding: 10,
                    fontFamily: 'Poppins-Medium',
                  }}>
                  Download
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  }
}
