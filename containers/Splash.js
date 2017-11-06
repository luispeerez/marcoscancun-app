import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';

export default class Splash extends Component{

	static navigationOptions = {
		title: 'Welcome'
	};

	render(){
		
		const {navigate} = this.props.navigation;

		let viewStyle = {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column'
		};

		return (
			<View style={viewStyle}>
				<Image 
					source={require('../assets/images/logo.jpg')} 
					style={{height: 200, width: 200}}
				/>
				<Text>Muebles Cancun</Text>
				<Button 
					title="Ver productos" 
					onPress={ () => {
						navigate('Home');
					}}
				/>
			</View>
		);
	}

}
