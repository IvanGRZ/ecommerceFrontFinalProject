import React, {useEffect, useState} from 'react';
import ProductItem from '../../components/ProductItem/index';
import axios from 'axios';
import '../../styles/ProductList.scss'

const API = 'http://localhost:3006/api/products'

const ProductList = () => {

	const [products, setProducts] = useState([]);

	useEffect(() => {
		handleCallApi()
	},[])

	const handleCallApi = async() =>{
		const products = await axios(API)
		setProducts(products.data)
	}

	if (products.result != undefined) {
		products.result.forEach(element => {
			console.log(element)
		});
	}

	return (
		<section className="main-container"> 
			<div className="ProductList">
				{
					products.result != undefined ? 
					
					products.result.map((item,index) => (
						<ProductItem product={item} key={item.id}/>
					)) 
					
					: 
					
					null
				
				}
			</div>
		</section>
	);
}

export default ProductList;