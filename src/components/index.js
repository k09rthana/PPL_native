import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import SignUpfrom "./SignUp"
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../images/logo.png')} />

        {/* <Image style={styles.logo_bg} source={require('../images/arw2.png')} /> */}
      </View>
      <View style={styles.container}>
        <Text>Welcome from PPL!</Text>
        <Text>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </Text>

        <View>
          <Image source={require('../images/img_9.png')} />
        </View>
      </View>
    </View>
  );
};

const Index =() =>{
  return (
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={HomeScreen} />
    //   <Tab.Screen name="SignUp" component={SignUp} />
    // </Tab.Navigator>
    <HomeScreen/>
  );
}

export default Index;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'orange',
    height: 50,
    paddingLeft: 20,
  },
  input: {
    margin: 10,
    padding: 8,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo_bg: {
    //  width:130,
    //  height:30
    // position:"absolute"
  },
  logo: {
    backgroundColor: 'white',
    // width:90,
    // height: 60,
  },
  pets: {
    // height: 200,
  },
});
