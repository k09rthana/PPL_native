import * as React from 'react';
import {Button, View, Text, SafeAreaView, TextInput, Image} from 'react-native';
import styles from '../components/styles';

const MyUploads = ({props, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Image style={styles.logo} source={require('../images/logo.png')} /> */}
      <View style={{flex: 1, padding: 16}}>
        <Text></Text>
  {/* <Text>{title}</Text> */}
  <Image source={require('../images/pic_small.png')}/>
  {/* <Text>{firstName}</Text>
  <Text>{date}</Text>
  <Image source={uri :image.uri}/> */}
      </View>
    </SafeAreaView>
  );
};

export default MyUploads;
