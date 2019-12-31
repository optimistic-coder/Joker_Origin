import React from 'react';
import {View, ProgressBarAndroid, StatusBar} from 'react-native';
const Loading = () => {
  return (
    <View style={{backgroundColor: '#121212', alignContent: 'center'}}>
      <StatusBar backgroundColor="#121212" />

      <ProgressBarAndroid style={{marginTop: 350, marginBottom: 350}} />
    </View>
  );
};
export default Loading;
