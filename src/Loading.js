import React from 'react';
import {View, ProgressBarAndroid} from 'react-native';
const Loading = () => {
  return (
    <View style={{backgroundColor: '#121212', alignContent: 'center'}}>
      <ProgressBarAndroid style={{marginTop: 350, marginBottom: 350}} />
    </View>
  );
};
export default Loading;
