// import * as React from 'react';
import React, {useEffect} from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Styles from '../loggedOut/styles';
import UploadPost from './UploadPost';

import Axios from 'axios';
import {BASE_URL} from '../backendPPL/config/config';
import Post from './Post';
import {apicaller} from '../utils/apicaller';

// import InfiniteScroll from './infiniteScroll';
const Timeline = ({navigation}) => {
  useEffect(() => {
    // apicaller('get', '/post/getPost')
    //   .then((res) => {
    //     console.log(res.data);
    //     setimageCollection(result.data);
    //   })
    //   .catch(() => {
    //     alert('Error>>>');
    //     console.log(BASE_URL);
    //   });

    Axios.get(BASE_URL + '/post/getPost')
      .then((result) => {
        console.log('result>>>>>>', result.data);
        // setTitle(result.title);
        // console.log('title>>>>>', title);
        // setimage('http://192.168.100.180:8082/post/' + result.data.image);
        setimageCollection(result.data);
        console.log('data::::..:::::', imageCollection);

        // (img = 'http://192.168.100.180:8082/post/'), result.data.image;
        // console.log('img:::::::', img);
        // console.log('Got Posts');
      })
      .catch(() => {
        alert('Error>>>', result);
        console.log(BASE_URL);
      });
  }, []);
  // const handleLogOut = () => {
  //   AsyncStorage.setItem('email', '0');
  // };
  let img;
  const [title, setTitle] = React.useState('');
  const [imageCollection, setimageCollection] = React.useState([]);
  // const [img, setImg] = React.useState('');

  const handleGetPost = () => {};

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        {/* <Button title="POST" onPress={handleGetPost} /> */}

        <View>
          {/* <Post/> */}
          {imageCollection.map((item) => {
            return <Post title={item.title} image={item.image} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Timeline;
