import React, {Component} from 'react';
import {Image, View, StyleSheet, Text, TextInput} from 'react-native';


export default class ContactForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
			message: ''
		};
	}

	render(){
		return (
			<View style={{ alignSelf:'stretch'}}>
				<Text>Email:</Text>
				<TextInput
					style={{alignSelf:'stretch'}}
					placeholder="ejemplo@gmail.com"
					onChangeText={ (email) => this.setState({email:email}) }
					keyboardType="email-address"
				/>
				<Text style={{marginTop:6}}>Mensaje:</Text>
				<TextInput
					style={{alignSelf:'stretch'}}
					placeholder="Me interesa el articulo..."
					onChangeText={ (message) => this.setState({message:message}) }
				/>

			</View>
		);
	}

}