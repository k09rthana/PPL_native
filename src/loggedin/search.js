import React, {Component} from 'react';
import SearchableDropdown from 'react-native-searchable-dropdown';

var items = [
  {
    id: 1,
    name: 'Cat',
  },
  {
    id: 2,
    name: 'Dog',
  },
  {
    id: 3,
    name: 'Bird',
  },


];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }
  render() {
    handleChange = (e) => {
      this.setState({search: e.target.value});
    };
    return (
      <SearchableDropdown
        // onTextChange={(text) => alert(text)}
        onItemSelect={(item) => alert(JSON.stringify(item))}
        containerStyle={{padding: 5}}
        textInputStyle={{
          padding: 12,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 5,
        }}
        itemStyle={{
          padding: 10,
          marginTop: 2,
          backgroundColor: '#ddd',
          borderColor: '#bbb',
          borderWidth: 1,
          borderRadius: 5,
        }}
        itemTextStyle={{color: '#000'}}
        itemsContainerStyle={{maxHeight: 250}}
        items={items}
        defaultIndex={0}
        placeholder="Select Category"
        resetValue={false}
        underlineColorAndroid="transparent"
        // onTextChange={handleChange}
      />
    );
  }
}
