import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import style from "../components/styles";

function Timeline({ navigation }) {
  return (
    <View style={styles.header}>
    <View>
      <Image style={styles.logo} source={require('../images/logo.png')} />
      {/* <Text>Home E- Coupons E- Brands Reuse Market</Text> */}
    </View>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('My Uploads')}
        title="Go to My Uploads"
      />
    </View>
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Timeline">
        <Drawer.Screen name="Timeline" component={HomeScreen} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Album" component={Album} />
        <Drawer.Screen name="Pets" component={Pets} />
        <Drawer.Screen name="My Uploads" component={My Uploads} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
