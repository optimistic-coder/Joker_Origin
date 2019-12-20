import React, {Component} from 'react';
import {View, Text, Image, Stylesheet, TouchableOpacity} from 'react-native';
import ImageLoad from 'react-native-image-placeholder';
import '../../android/app/src/main/assets/fonts/Poppins-Medium.ttf';
import RNFetchBlob from 'react-native-fetch-blob';
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
    title: 'wallpapaer',
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
      <View style={{backgroundColor: '#121212'}}>
        <ImageLoad
          style={{
            height: 490,
            width: 380,
            marginLeft: 10,
            marginTop: 90,
            borderWidth: 0.5,
            borderRadius: 20,
            borderColor: 'white',
          }}
          borderRadius={20}
          borderWidth={0.5}
          loadingStyle={{size: 'large', color: 'blue'}}
          source={{
            uri: image,
          }}
        />
        {granted === PermissionsAndroid.RESULTS.GRANTED ? (
          <TouchableOpacity
            onPress={() => download()}
            style={{
              backgroundColor: '#00b300',
              alignItems: 'center',
              marginLeft: 10,
              width: 380,
              marginTop: 35,
              borderRadius: 19,
              marginBottom: 300,
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
        ) : (
          <TouchableOpacity
            onPress={() => requestStoragePermission()}
            style={{
              backgroundColor: '#00b300',
              alignItems: 'center',
              marginLeft: 10,
              width: 320,
              marginTop: 35,
              borderRadius: 19,
              marginBottom: 300,
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
        )}
      </View>
    );
  }
}
