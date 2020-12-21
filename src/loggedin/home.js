import 'react-native-gesture-handler';

import * as React from 'react';
import {Button, View, Text, TouchableOpacity, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Timeline from './Timeline';
import MyUploads from './MyUploads';
import UploadPost from './UploadPost';
import InfiniteScroll from './infiniteScroll';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          style={{
            width: 25,
            height: 25,
            marginLeft: 5,
          }}
          source={require('../images/drawerWhite.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Timeline">
      <Stack.Screen
        name="Timeline"
        component={Timeline}
        options={{
          title: 'Timeline', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'blue', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="MyUploads"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: 'blue', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="MyUploads"
        component={MyUploads}
        options={{
          title: 'MyUploads', //Set Header Title
        }}
      />
      <Stack.Screen
        name="UploadPost"
        component={UploadPost}
        options={{
          title: 'UploadPost', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function thirdScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="UploadPost">
      <Stack.Screen
        name="UploadPost"
        component={UploadPost}
        options={{
          title: 'UploadPost', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'blue', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function InfiniteScrollScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="InfiniteScroll">
      <Stack.Screen
        name="InfiniteScroll"
        component={InfiniteScroll}
        options={{
          title: 'InfiniteScroll', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: 'blue', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: 'orange',
          itemStyle: {marginVertical: 5},
        }}>
        <Drawer.Screen
          name="Timeline"
          options={{drawerLabel: 'Timeline'}}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="MyUploads"
          options={{drawerLabel: 'MyUploads'}}
          component={secondScreenStack}
        />
        <Drawer.Screen
          name="UploadPost"
          options={{drawerLabel: 'UploadPost'}}
          component={thirdScreenStack}
          style={{visible: 'false'}}
        />
          <Drawer.Screen
          name="InfiniteScroll"
          options={{drawerLabel: 'InfiniteScroll'}}
          component={InfiniteScrollScreenStack}
          style={{visible: 'false'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
