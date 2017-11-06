import React, {Component} from 'react';
import {
	SectionList,
	Text,
	StyleSheet,
	View,
	ActivityIndicator,
	ListView
} from	'react-native';
import _ from 'underscore';


export default class MoviesListExample extends Component{
	constructor(props){
		super(props);
		this.state = {
			isLoading: true
		};
	}

	componentDidMount(){
		getMoviesFromApi()
			.then((movies) => {
				let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
				this.setState({
					isLoading: false,
					dataSource: ds.cloneWithRows(movies)
				})
			})
			.catch( (err) => {
				console.log(err);
			})
	}

	render(){

		var data = [
	    {title: 'D', data: ['Devin']},
	    {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
    ];

		return (
			<View>

	      { this.state.isLoading && 

	      	<ActivityIndicator/>
	      }	

	      {
	      	!this.state.isLoading && 
	      	<ListView 
	      		dataSource={this.state.dataSource}
	      		renderRow={ (rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text> }
	      	/>
	      }

	      <SectionList
	        sections={data}
	        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
	        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
	      />

	    </View>
		);

	}
};

async function fakeTimeout(){
	return new Promise( (resolve, reject) => {
		setTimeout( () => {
			console.log('timeout resolve');
			//return Promise.resolve(true);
			resolve(12);
		}, 4000)

	})
}

async function getMoviesFromApi(){
	try{
		let timeoutResponse = await fakeTimeout();
		console.log('timeoutResponse', timeoutResponse);
		console.log('starting fetch');
		let response = await fetch('https://facebook.github.io/react-native/movies.json');
		let responseJson = await response.json();
		return responseJson.movies;
	}
	catch(error){
		console.error(error);
	}
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})