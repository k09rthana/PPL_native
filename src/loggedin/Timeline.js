import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Styles from '../components/styles';
import UploadPost from './MyUploads';

const Timeline = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
      <Button
            title="Upload Post"
            onPress={() => navigation.navigate('UploadPost')}
            style={{margin:10}}
          />
        <View>
      
        </View>
        <View style={{flex: 1, padding: 30}}>
          
          <Text>Image Caption</Text>
          {/* <Text>Image Category</Text> */}

          <Image />
          {/* <Text>Profile Name</Text> */}
          <Image
            style={Styles.stretch}
            source={require('../images/lft_img1.png')}
          />
        </View>
        <View style={{flex: 1, padding: 30}}>
          <Text>Image Caption</Text>
          {/* <Text>Image Category</Text> */}

          <Image />
          {/* <Text>Profile Name</Text> */}
          <Image
            style={Styles.stretch}
            source={require('../images/feat_img3.png')}
          />
        </View>
        <View style={{flex: 1, padding: 30}}>
          <Text>Image Caption</Text>
          {/* <Text>Image Category</Text> */}

          <Image />
          {/* <Text>Profile Name</Text> */}
          <Image
            style={Styles.stretch}
            source={require('../images/stay-positive.jpeg')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Timeline;
