import React, {useState} from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  TextInput,
} from 'react-native';
import Axios from 'axios';
import {BASE_URL} from '../backendPPL/config/config';
import AsyncStorage from '@react-native-community/async-storage';

// Import Image Picker
import ImagePicker, {launchImageLibrary} from 'react-native-image-picker';
// import showImagePicker from 'react-native-image-picker';
import Drop from './search';

const UploadPost = () => {
  const handleSubmit = () => {
    let obj = {
      title: title,
      category: category,
      // email: email,
      image: {uri: uri, name: name, type: type},
    };
    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', obj.image);
    // console.log("Image>>>>>>>>>",image);
    formData.append('category', category);

    console.log(obj, '><><><><>><');
    Axios.post(BASE_URL + '/post/create', formData)
      .then((result) => {
        alert('Upload Complete');
      })
      .catch((result) => {
        alert('Error>>>', result);
        console.log(BASE_URL);
      });
  };

  const [title, setTitle] = useState('');
  const [category, setcategory] = useState({});
  const [image, setImage] = useState({});
  const [uri, setUri] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [filePath, setFilePath] = useState('');

  const chooseFile = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: '../images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = {
        //   uri: 'data:image/jpeg;base64,' + response.data
        // };
        setFilePath(source);
      }
    });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Text style={styles.titleText}>
        Example of Image Picker in React Native
      </Text> */}
      <View style={styles.container}>
       

        {/* <Text style={styles.textStyle}>{filePath.uri}</Text> */}

        {/*         
          <Button
            title="Choose File"
            onPress={chooseFile} /> */}
        <Button
          title="Select image"
          onPress={() => {
            launchImageLibrary(
              {
                mediaType: 'photo',
                includeBase64: false,
                // maxHeight: 200,
                // maxWidth: 200,
              },
              (response) => {
                console.log('RESPONSE>>>>>', response);
                // console.log('File Name', response.fileName);
                // setResponse(response);
                setUri(response.uri);

                setName(response.fileName);
                console.log('uri>>>>>>>>>>>>>', response.name);

                setType(response.type);
              },
            );
          }}
        />
        <Text></Text>

        {uri === '' ? null : (
          <Image
            source={{uri: uri}}
            style={{height: 100, width: 100, backgroundColor: 'pink'}}
          />
          // <Text style={{margin: 20}}>File Name : {uri}</Text>
        )}
        <Text></Text>
        <Text style={styles.label}>Caption</Text>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.input}
            name="title"
            color="black"
            placeholder="Enter Caption"
            onChangeText={(Text) => {
              setTitle(Text);
            }}
          />
        </View>
        <Text style={styles.label}>Category</Text>

        <View style={styles.rowContainer}>
          <Drop />
          {/* <TextInput
            style={styles.input}
            name="category"
            color="black"
            placeholder="Enter Category"
            onChangeText={(Text) => {
              setcategory(Text);
            }}
          /> */}
        </View>

        {/* <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={chooseFile}>
          <Text style={styles.textStyle}>Choose Image</Text>
        </TouchableOpacity> */}
      </View>
      <Button title="Upload" color="orange" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default UploadPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});
