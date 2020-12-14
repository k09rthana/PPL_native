import React, {useState} from 'react';
import {Button, View, Text, StyleSheet, TextInput, Image} from 'react-native';
// import styles from './style';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Axios from 'axios';
import {AsyncStorage} from 'react-native';
// import {BASE_URL} from '../../../backendPPL/config/config';


const Login = ({navigation}) => {
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require('../images/logo.png')} />
      <View style={styles.container}>
        <Text style={styles.heading}>LOGIN</Text>
        <Text>Email</Text>

        <View style={styles.rowContainer}>
          <TextInput
            style={styles.input}
            name="email"
            color="black"
            placeholder="Enter your Email"
          />
        </View>
        <Text>Password</Text>

        <View style={styles.rowContainer}>
          <TextInput
            style={styles.input}
            name="password"
            color="black"
            placeholder="Enter your Password"
          />
        </View>

        <Button title="Login" color="orange" />
        <Text></Text>
        <Button
          style={{color: 'orange'}}
          title="Create an Account"
          color="orange"
          onPress={() => navigation.push('Signup')}
        />
        <Text></Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'orange',
  },
  heading: {
    color: 'orange',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    margin: 10,
    width: 300,

  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },

  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: 'white',
  },
});
