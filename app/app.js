import React, {Component} from 'react';

import {
  View,
  StyleSheet,
  Text,
  AppRegistry,
  ActivityIndicator,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import axios from 'axios';
const {height, width} = Dimensions.get('window');
export default class app extends Component {
  constructor() {
    super();
    this.state = {isloading: true, images: []};
  }
  loadWallpapers() {}
  componentDidMount() {
    axios
      .get(
        'https://api.unsplash.com/photos/random?count=30&client_id=896979fdb70f80865638d7a4648bf9ce309675335318933eab2bf990af42e295',
      )
      .then(
        function(response) {
          console.log(response.data);
          this.setState({images: response.data, isloading: false});
        }.bind(this),
      )
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        console.log('request completed');
      });
  }
  renderItem = ({item}) => {
    return (
      <View style={{height, width}}>
        <Image
          style={{flex: 1, height: null, width: null}}
          source={{uri: item.urls.regular}}
          resizeMode="cover"></Image>
      </View>
    );
  };
  render() {
    return this.state.isloading ? (
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="grey"></ActivityIndicator>
      </View>
    ) : (
      <View
        style={{
          flex: 1,
          backgroundColor: 'black',
        }}>
        <FlatList
          horizontal
          pagingEnabled
          data={this.state.images}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}></FlatList>
      </View>
    );
  }
}
/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
AppRegistry.registerComponent('app', () => app);
