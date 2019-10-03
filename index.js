/**
 * @format
 */

import {AppRegistry, View} from 'react-native';

import Home from './app/home';
import RandomPics from './app/randomPics';
import SearchImages from './app/searchImages';
import {name as appName} from './app.json';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  RandomPics: {screen: RandomPics},
  SearchImages: {screen: SearchImages},
});

export default photos = createAppContainer(MainNavigator);

AppRegistry.registerComponent(appName, () => photos);
