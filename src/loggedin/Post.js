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
import Styles from '../loggedOut/styles';
import UploadPost from './UploadPost';
// import Login from '../components/login';
import Axios from 'axios';
import {BASE_URL} from '../backendPPL/config/config';

const Post = (props) => {
  // const handleLogOut = () => {
  //   AsyncStorage.setItem('email', '0');
  // };
  //   let img;
  const [title, setTitle] = React.useState('');
  const [image, setimage] = React.useState(
    'http://192.168.100.180:8082/post/' + props.image,
  );
  const [likes, setLike] = React.useState(0);
  const handlelike = () => {
    if (likes == 0) {
      setLike(1);
    } else {
      setLike(0);
    }
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
        <View style={{flex: 1, padding: 30, backgroundColor: '#d3d3d3',marginTop:20}}>
          <Text style={Styles.caption}>{props.title}</Text>
          {/* <Text>Image Category</Text> */}
          <Image
            style={Styles.like}
            source={require('../images/pic_small.png')}
          />

          {image != '' ? (
            <Image
              style={Styles.stretch}
              // source={require('../images/lft_img1.png')}
              source={{uri: image}}
            />
          ) : null}

          {likes == 0 ? (
            <Button
              title="Like"
              style={Styles.buttonLike}
              onPress={handlelike}
            />
          ) : (
            <Button
              title="Unlike"
              style={Styles.buttonLike}
              onPress={handlelike}
            />
          )}
          {/* <Text style={Styles.numLikes}>{likes}</Text> */}
          {likes != 0 ? (
            <Image style={Styles.like} source={require('../images/like.png')} />
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Post;
