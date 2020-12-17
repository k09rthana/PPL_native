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
import Axios from 'axios';
import {BASE_URL} from '../backendPPL/config/config';

const Timeline = ({navigation}) => {
  // const handleLogOut = () => {
  //   AsyncStorage.setItem('email', '0');
  // };
  let img;
  const [title, setTitle] = React.useState('');
  const [image, setimage] = React.useState('');
  const handleGetPost = () => {
    Axios.get(BASE_URL + '/post/getPost')
      .then((result) => {
        console.log('result>>>>>>', result.data);
        setTitle(result.data.title);
        setimage('http://192.168.100.180:8082/post/' + result.data.image);
        // (img = 'http://192.168.100.180:8082/post/'), result.data.image;
        console.log('img:::::::', img);
        console.log('Got Posts');
      })
      .catch(() => {
        alert('Error>>>', result);
        console.log(BASE_URL);
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        {/* <Button title="LOGOUT" onPress={handleLogOut} /> */}
        {/* <Button
          title="Upload Post"
          onPress={() => navigation.navigate('UploadPost')}
          style={{margin: 10}}
        /> */}
        <View></View>
        <View style={{flex: 1, padding: 30}}>
          <Text>{title}</Text>
          {/* <Text>Image Category</Text> */}
          <Image source={require('../images/pic_small.png')} />

          {image != '' ? (
            <Image
              style={Styles.stretch}
              // source={require('../images/lft_img1.png')}
              source={{uri: image}}
            />
          ) : null}
          <Button title="Get Posts" onPress={handleGetPost} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Timeline;
