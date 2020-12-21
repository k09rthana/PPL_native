// import React, {useState, useEffect} from 'react';
// import {Button, View, Text, StyleSheet, TextInput, Image} from 'react-native';
// import styles from './styles';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import Axios from 'axios';
// // import {AsyncStorage} from 'react-native';
// import {apicaller} from '../utils/apicaller';

// import {BASE_URL} from '../backendPPL/config/config';
// import Signup from './signup';



// const Login = ({navigation}) => {
//   const handleSubmit = () => {
//     let obj = {
//       email: email,
//       password: password,
//     };
//     apicaller("post", "/auth/login", obj).then((res) => {
//       console.log(res.data);
//       alert('Login Successful!');

//     });

    
//     // Axios.post(BASE_URL + '/auth/login', obj)
//       // .then((result) => {
//       //   if (result) {
//       //     // AsyncStorage.setItem('email', JSON.stringify(email));

//       //     // console.log('hi >>>', JSON.stringify(email));
//       //     AsyncStorage.setItem('email', email);

//       //     alert('Welcome');
//       //   } else {
//       //     alert('Invalid Username or Password');
//       //   }
//       // })
//       // .catch((e) => {
//       //   console.log('error>>>>>>>>>>>>>', e);
//       //   AsyncStorage.setItem('email', null);

//       // });
//   };

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // let e = AsyncStorage.getItem('email');
//   // console.log(e);

//   return (
//     <View style={styles.header}>
//       <Image style={styles.logo} source={require('../images/logo.png')} />
//       <View style={styles.container}>
//         <Text style={styles.heading}>LOGIN</Text>
//         <Text style={styles.label}>Email</Text>
//         <View style={styles.rowContainer}>
//           <TextInput
//             style={styles.input}
//             name="email"
//             color="black"
//             placeholder="Enter your Email"
//             onChangeText={(Text) => {
//               setEmail(Text);
//             }}
//           />
//         </View>
//         <Text style={styles.label}>Password</Text>

//         <View style={styles.rowContainer}>
//           <TextInput
//             style={styles.input}
//             name="password"
//             color="black"
//             secureTextEntry={true}
//             placeholder="Enter your Password"
//             onChangeText={(Text) => {
//               setPassword(Text);
//             }}
//           />
//         </View>

//         <Button title="Login" color="orange" onPress={handleSubmit} />
//         <Text></Text>
//         <Button
//           style={{color: 'orange'}}
//           title="Create an Account"
//           color="orange"
//           onPress={() => navigation.push('Signup')}
//         />
//         <Text></Text>
//       </View>
//     </View>
//   );
// };

// const Stack = createStackNavigator();

// function LoginNavigation() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Signup" component={Signup} />
//         <Stack.Screen name="Login" component={Login} />
//         {/* <Stack.Screen name="Home" component={Home} /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default LoginNavigation;

// // const styles = StyleSheet.create({
// //   header: {
// //     flex: 1,
// //     backgroundColor: 'orange',
// //   },
// //   heading: {
// //     color: 'orange',
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 20,
// //   },
// //   input: {
// //     backgroundColor: 'white',
// //     margin: 10,
// //     width: 300,
// //   },
// //   container: {
// //     backgroundColor: 'white',
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#F5F5F5',
// //   },

// //   rowContainer: {
// //     flex: 1,
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   logo: {
// //     backgroundColor: 'white',
// //   },
// // });
