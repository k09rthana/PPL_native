import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Styles from '../components/styles';
import UploadPost from './UploadPost';
import Login from '../components/login';

const Timeline = ({navigation}) => {
  // const handleLogOut = () => {
  //   AsyncStorage.setItem('email', '0');
  // };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        {/* <Button title="LOGOUT" onPress={handleLogOut} /> */}
        <Button
          title="Upload Post"
          onPress={() => navigation.navigate('UploadPost')}
          style={{margin: 10}}
        />
        <View></View>
        <View style={{flex: 1, padding: 30}}>
          <Text>Image Caption</Text>
          {/* <Text>Image Category</Text> */}
          <Image source={require('../images/pic_small.png')} />

          <Image />
          {/* <Text>Profile Name</Text> */}
          <Image
            style={Styles.stretch}
            source={require('../images/lft_img1.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Timeline;
