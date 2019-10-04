/**
 * @format
 */
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Dimensions,
} from 'react-native';

const {height, width} = Dimensions.get('window');
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }
  static navigationOptions = {
    header: null,
  };
  onSearch = value => {
    this.setState({
      search: value,
    });
  };

  render() {
    console.log(this.state.search);
    const {navigate} = this.props.navigation;
    return (
      <View style={{backgroundColor: '#00a2a3', height, width}}>
        <View style={styles.container}>
          <Text style={styles.header}>Wallpapers</Text>
        </View>
        <View style={{top: 100}}>
          <TextInput
            placeholder="Search Wallpapers"
            value={this.state.search}
            onChangeText={value => this.onSearch(value)}
            onSubmitEditing={this.onSubmit}
            style={styles.inputText}
          />
          <View style={styles.btn}>
            <Button
              title="Search Wallpapers"
              onPress={() =>
                this.state.search === '' ? (
                  <Text>Enter Search Query</Text>
                ) : (
                  navigate('SearchImages', {query: this.state.search})
                )
              }
            />
          </View>
          <View style={styles.btn2}>
            <Button
              style={{color: 'red'}}
              title="Random Wallpapers"
              onPress={() => navigate('RandomPics')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 40,
  },
  header: {
    fontSize: 30,
  },
  inputText: {
    backgroundColor: '#73e2cd',
    height: 50,
    paddingLeft: 30,
  },
  btn: {
    top: 20,
  },
  btn2: {
    top: 30,
  },
});
AppRegistry.registerComponent('Home', () => Home);
