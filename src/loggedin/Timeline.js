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
import Post from './Post';
const Timeline = ({navigation}) => {
  // const handleLogOut = () => {
  //   AsyncStorage.setItem('email', '0');
  // };
  let img;
  const [title, setTitle] = React.useState('');
  const [image, setimage] = React.useState('');
  const [data, setData] = React.useState('');

  const handleGetPost = () => {
    Axios.get(BASE_URL + '/post/getPost')
      .then((result) => {
        console.log('result>>>>>>', result.data);
        // setTitle(result.data.title);
        // setimage('http://192.168.100.180:8082/post/' + result.data.image);
        setData(result.data);
        console.log('data::::..:::::', data);

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
        <Button title="POST" onPress={handleGetPost} />
        <View>
          {/* <Post/> */}
          {/* {data.map((item) => {
          return (
            <>
              <table style={{ width: "100%", textAlign: "left" }}>
                <tr >
                  <td style={{ width: "10%" }}> {item.title}</td>
                  
                </tr>
              </table>
            </>
          );
        })} */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Timeline;
