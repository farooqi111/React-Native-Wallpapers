import React, {Component} from 'react';
import {
  View,
  AppRegistry,
  ActivityIndicator,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import unsplash from './unsplash';
const {height, width} = Dimensions.get('window');
export default class SearchImages extends Component {
  constructor(props) {
    super(props);
    this.state = {isloading: true, images: null};
  }
  static navigationOptions = {
    title: 'Searched Wallpapers',
  };
  loadImages = () => {
    var query = this.props.navigation.state.params.query;

    unsplash
      .get('/search/photos', {
        params: {query: query, count: 5},
      })
      .then(
        function(response) {
          this.setState({images: response.data.results, isloading: false});
          // console.log(response.data);
        }.bind(this),
      )
      .catch(function(error) {
        console.log(error);
      });
  };
  componentDidMount() {
    this.loadImages();
  }
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      //    this.loadImages();
    }
  }
  renderItem = ({item}) => {
    console.log(item.urls.regular);

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
    // console.log(this.state.images);
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
AppRegistry.registerComponent('SearchImages', () => SearchImages);
