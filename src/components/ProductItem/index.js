import React,{useContext} from 'react';
import AppContext from '../../Context/AppContext'
import '../../styles/ProductItem.scss'
import { 
    Card,
} from '@mui/material';

const ProductItem = ({product}) => {
    const {addToCart} = useContext(AppContext);

    const handleCart = item => {
        addToCart(item)
    }

    return (
        <div className="ProductItem">
            <Card>
                <img src={product.foto} alt={product.nombre} />
            </Card>
            <div className="product-info">
                <div>
                    <p>${product.precio}</p>
                    <p>{product.nombre}</p>
                </div>
                <figure onClick={() => handleCart(product)}>
                    {/*<img src={bt_add_to_cart} alt="" />*/}
                </figure>
            </div>
        </div>
    );
};

export default ProductItem;