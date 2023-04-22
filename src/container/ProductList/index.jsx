import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import ProductItem from '../../components/ProductItem/index';

import { getProducts } from '../../services/api/index';
import '../../styles/ProductList.scss'

const ProductList = () => {
	
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProducts() {
		  const product = await getProducts();
		  setProducts(product);
		}
		fetchProducts();
	}, []);

	return (
		<Grid container spacing={1} sx={{marginTop: 15}}>
			{products.map((product) => (
				<ProductItem product={product} key={product.id} />
			))}
		</Grid>
	);
}

export default ProductList;