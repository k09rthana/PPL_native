import React, {useState} from 'react';
import {Button, View, Text, StyleSheet, TextInput, Image} from 'react-native';
import styles from './styles';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Axios from 'axios';
import {AsyncStorage} from 'react-native';
import {BASE_URL} from '../backendPPL/config/config';
import {apicaller} from '../utils/apicaller';

const Signup = ({navigation}) => {
  const handleSubmit = () => {
    let obj = {
      username: username,
      password: password,
      email: email,
      firstName: firstName,
      lastName: lastName,
    };
    console.log(obj, '><><><><>><');
    // Axios.post(BASE_URL + '/auth/sign_up', obj)
    //   .then((result) => {
    //     if (result == "Exists") {
    //       alert('User Exists');
    //     } else {
    //       alert('Registered Successfully');
    //     }
    //   })
    //   .catch((result) => {
    //     alert('Error>>>', result);
    //     console.log(BASE_URL);
    //   });
    apicaller("post", "/auth/sign_up", obj).then((res) => {
      console.log(res.data);
      alert('Registered Successfully');

    });
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  return (
    <View style={styles.header}>
      <View>
        <Image style={styles.logo} source={require('../images/logo.png')} />
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>CREATE AN ACCOUNT</Text>
        </View>
        <Text style={styles.label}>Username</Text>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.input}
            name="username"
            placeholder="Enter your Username"
            color="black"
            onChangeText={(Text) => {
              setUsername(Text);
            }}
          />
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.input}
            name="password"
            color="black"
            placeholder="Enter your Password"
            onChangeText={(Text) => {
              setPassword(Text);
            }}
          />
        </View>
        <Text style={styles.label}>Email</Text>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.input}
            name="email"
            color="black"
            placeholder="Enter your Email"
            onChangeText={(Text) => {
              setEmail(Text);
            }}
          />
        </View>
        <Text style={styles.label}>First Name</Text>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.input}
            name="firstName"
            color="black"
            placeholder="Enter your First Name"
            onChangeText={(Text) => {
              setFirstName(Text);
            }}
          />
        </View>
        <Text style={styles.label}>Last Name</Text>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.input}
            name="lastName"
            color="black"
            placeholder="Enter your Last Name"
            onChangeText={(Text) => {
              setLastName(Text);
            }}
          />
        </View>

        <Button
          buttonStyle={styles.submitButton}
          // color="orange"
          onPress={handleSubmit}
          title="Signup"
        />
        <Button
          buttonStyle={styles.submitButton}
          title="Log in to my Account"
          // color="orange"
          onPress={() => navigation.push('Login')}
        />
      </View>
    </View>
  );
};

export default Signup;

// const styles = StyleSheet.create({
//   header: {
//     flex: 1,
//     backgroundColor: 'orange',
//   },
//   heading: {
//     display: 'flex',
//     color: 'orange',
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: 'white',
//     margin: 2,
//     width: 300,
//   },
//   container: {
//     flex: 1,

//     backgroundColor: 'white',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5F5F5',
//   },

//   rowContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   logo: {
//     backgroundColor: 'white',
//     marginLeft: 30,

//   },
// });
