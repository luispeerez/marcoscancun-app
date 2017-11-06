import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  Button, 
  DatePickerAndroid, 
  Platform,
  StatusBar
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import ProductsList from './containers/ProductsList';
import MoviesListExample from './containers/MoviesListExample';
import ContactForm from './containers/ContactForm';
import Home from './containers/Home';
import Splash from './containers/Splash';
import {StackNavigator} from 'react-navigation';

const navConfig = {
  initialRouteName: 'Splash',
  headerMode: 'screen',
  cardStyle:{
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
};

const App = StackNavigator({
  Home:{ screen: Home },
  Splash: {screen: Splash}
}, navConfig);

export default App;

/*
export default class App extends React.Component {
  
}
*/
