import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  Image,
  View,
} from 'react-native';
import Axios from 'axios';
import {BASE_URL} from '../backendPPL/config/config';

const Flat = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [DATA, setDATA] = useState([]);
  const [img, setimg] = useState('');

  // const handleImage = (item) => {
  //   setimg('http://192.168.100.180:8082/post/' + item.image);
  // };

  const handleImg = (i) => {
    setimg('http://192.168.100.180:8082/post/' + i);
  };
  const Item = ({item, onPress, style}) => {
    handleImg(item.image);

    console.log(item.image, 'IMage item');
    return (
      <TouchableOpacity style={[styles.item, style]}>
        <Text style={styles.title}>{item.title}</Text>
        {/* {DATA.map((item) => {
        setimg('http://192.168.100.180:8082/post/' + item.image);
      })} */}
        {/* {img != '' ? <Image source={{uri: img}} /> : null} */}
        <Image
          source={{
            uri: img,
          }}></Image>
      </TouchableOpacity>    // const backgroundColor = item.id === selectedId ? 'yellow' : 'yellow';

    );
  };

  const handleSubmit = () => {
    Axios.get(BASE_URL + '/post/getPost')
      .then((result) => {
        // console.log('result>>>>>>', result.data);
        // setTitle(result.title);
        // console.log('title>>>>>', title);
        // setimage('http://192.168.100.180:8082/post/' + result.data.image);
        setDATA(result.data);

        // setimage('http://192.168.100.180:8082/post/' + result.data.image);
        // setimg('http://192.168.100.180:8082/post/' + result.data.image);
        // (img = 'http://192.168.100.180:8082/post/'), result.data.image;
       
      })
      .catch(() => {
        alert('Error>>>');
        console.log(BASE_URL);
      });
  };

  const renderItem = ({item}) => {
    // const backgroundColor = item.id === selectedId ? 'yellow' : 'yellow';

    return (
      <Item
        item={item}
        onPress={() => setimg('http://192.168.100.180:8082/post/' + item.image)}
        style={{height: 400, backgroundColor: 'lightblue'}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />

      <Button title="Press here" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    alignContent: 'center',
  },
});

export default Flat;
