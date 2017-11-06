import React, {Component} from 'react';
import {
	Image, 
	View, 
	StyleSheet, 
	Text, 
	TouchableHighlight,
	FlatList
} from 'react-native';

export default class ProductsList extends Component{

	constructor(props){
		super(props);
		this.state = {
			date: new Date(),
			selectedProductIndex: -1
		};
		console.log('in constructor');
		this.selectProduct = this.selectProduct.bind(this);
		this.renderFlatListProduct = this.renderFlatListProduct.bind(this);

	}

	selectProduct(index){
		console.log('selecting product: ', index);
		this.setState( (previuosState) =>{
			return {
				selectedProductIndex: index,
				date: new Date()
			};
		});
	}

	renderFlatListProduct(product){
		var itemStyle = {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'black'
		};

		return (
			<Text key={product.id} style={itemStyle}>{product.name}</Text>
		);
	}

	componentDidUpdate(){
		console.log('get state', this.state);
	}

	render(){

		let products = [
			{uri: 'https://cdn.pixabay.com/photo/2017/06/07/09/19/chalkboard-2379763_960_720.jpg'},
			{uri: 'https://cdn.pixabay.com/photo/2015/04/10/08/27/picture-frame-715866_960_720.jpg'},
			{uri: 'https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'},
			{uri: 'https://cdn.pixabay.com/photo/2017/06/07/09/19/chalkboard-2379763_960_720.jpg'},
			{uri: 'https://cdn.pixabay.com/photo/2015/04/10/08/27/picture-frame-715866_960_720.jpg'},
			{uri: 'https://images.pexels.com/photos/6094/girl-things-bag-frame.jpg?w=940&h=650&auto=compress&cs=tinysrgb'},
			{uri: 'https://images.pexels.com/photos/383568/pexels-photo-383568.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}			
		];
		
		products = products.map((product, index) => {
			product.name = `Product ${index}`;
			product.id = index;
			return product;
		});

		return (
			<View style={styles.container}>

				{
					products.map( (product, index) => {

						var imageSize = {
							height: 110,
							marginBottom: 4,
							borderWidth: 0
						};
						var productStyle = Object.assign(imageSize,{});

						var isActive = (index === this.state.selectedProductIndex);
						
						if(isActive){
							productStyle = Object.assign(productStyle,{
								borderWidth: 2,
								borderColor: 'blue'
							});
						}else{
							productStyle = Object.assign(productStyle,{
								borderWidth:0
							});
						}


						return (
							<TouchableHighlight style={{width: 150}} key={index} onPress={ (e) => this.selectProduct(index) }>
								<View>
									<Image 
										key={index} 
										source={product} 
										style={productStyle} 
									/>
								</View>
							</TouchableHighlight>
						)
					})
				}

				<FlatList data={products} renderItem={this.renderFlatListProduct} />
				<Text>Esto es otro text</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection:'row',
    flexWrap: 'wrap'
  },
});