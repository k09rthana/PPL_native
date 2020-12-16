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

// Import Image Picker
import ImagePicker, {launchImageLibrary} from 'react-native-image-picker';
// import showImagePicker from 'react-native-image-picker';

const App = () => {
  const handleSubmit = () => {
    let obj = {
      title: title,
      category: category,
      image: image,
    };
    console.log(obj, '><><><><>><');
    Axios.post(BASE_URL + '/post/create', obj)
      .then((result) => {
        alert('Upload Complete');
      })
      .catch((result) => {
        alert.log('Error>>>', result);
        console.log(BASE_URL);
      });
  };

  const [title, setTitle] = useState('');
  const [category, setcategory] = useState({});
  const [image, setImage] = useState('');
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
        path: 'images',
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
          <TextInput
            style={styles.input}
            name="category"
            color="black"
            placeholder="Enter Category"
            onChangeText={(Text) => {
              setcategory(Text);
            }}
          />
        </View>
        <Text>Upload Image</Text>

        <Text style={styles.textStyle}>{filePath.uri}</Text>

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
                setImage(response.fileName);
              },
            );
          }}
        />
        {console.log('filename>>>>>>>>>>>>', image)}
        <Text></Text>

        {image === '' ? null : (
          // <Image
          //   source={{uri: image}}
          //   style={{height: 20, width: 100, backgroundColor: 'pink'}}
          // />
          <Text style={{margin: 20}}>File Name : {image}</Text>
        )}
        <Text></Text>
        <Button title="Upload"  color="orange" onPress={handleSubmit} />

        {/* <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={chooseFile}>
          <Text style={styles.textStyle}>Choose Image</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default App;

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
