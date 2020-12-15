import * as React from 'react';
import {Button, View, Text, SafeAreaView, TextInput,Image} from 'react-native';
import styles from '../components/styles';

const ThirdPage = ({route, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Image style={styles.logo} source={require('../images/logo.png')} /> */}
      <View style={{flex: 1, padding: 16}}>
        <Text style={styles.label}>Caption</Text>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.input}
            name="caption"
            color="black"
            placeholder="Enter Caption"
            onChangeText={(Text) => {
              setCaption(Text);
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
              setPassword(Text);
            }}
          />
        </View>
        <Text>Upload Image</Text>

        <Button
          title="Upload"
          color="orange"
          //  onPress={handleSubmit}
        />
        <Text></Text>
      </View>
    </SafeAreaView>
  );
};

export default ThirdPage;
