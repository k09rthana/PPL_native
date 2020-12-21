// Example of Infinite Loading Listview in React Native using FlatList
// https://aboutreact.com/infinite-list-view/

// import React in our code
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {BASE_URL} from '../backendPPL/config/config';

// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(1);
  const [isListEnd, setIsListEnd] = useState(false);

  useEffect(() => getData(), []);

  const getData = () => {
    Axios.get(BASE_URL + '/post/getScrollPost')
      .then((result) => {
        console.log('result>>>>>>', result.data);
        // setTitle(result.title);
        // console.log('title>>>>>', title);
        // setimage('http://192.168.100.180:8082/post/' + result.data.image);
        setDataSource(result.data);
        console.log('data::::..:::::', imageCollection);

        // (img = 'http://192.168.100.180:8082/post/'), result.data.image;
        console.log('img:::::::', img);
        console.log('Got Posts');
      })
      .catch(() => {
        alert('Error>>>', result);
        console.log(BASE_URL);
      });
  };

  const renderFooter = () => {
    return (
      // Footer View with Loader
      <View style={styles.footer}>
        {loading ? (
          <ActivityIndicator color="black" style={{margin: 15}} />
        ) : null}
      </View>
    );
  };

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    // alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        ListFooterComponent={renderFooter}
        onEndReached={getData}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default App;
