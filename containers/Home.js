import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, DatePickerAndroid, Platform} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import ProductsList from './ProductsList';
import MoviesListExample from './MoviesListExample';
import ContactForm from './ContactForm';


export default class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.onDatePickerTrigger = this.onDatePickerTrigger.bind(this);
  }

  async onDatePickerTrigger(){
    let openedAction = await openDatePicker();
    console.log('openedAction result', openedAction);
  }

  render() {

    var buttonStyle = {
      backgroundColor: '#ff8000'
    };

    if(Platform.OS === 'android'){
      buttonStyle.backgroundColor = '#ff0000';
    }

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Button 
          onPress={this.onDatePickerTrigger} 
          title="Seleccionar fecha" 
          color={buttonStyle.backgroundColor} 

        />
        <MoviesListExample />
        <Text>Marcos Cancun</Text>
        <ProductsList/>
        <ContactForm />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10
  },
});

async function openDatePicker(){
  try{
    const {action, year, month, day} = await DatePickerAndroid.open({
      date: new Date(2020, 4, 25)
    });

    if(action !== DatePickerAndroid.dismissedAction){
      console.log('day', day);
      return day;
    }
  }
  catch({code, message}){
    console.log('Cannot open datepicker', message);
  }
}