import React, { useContext } from 'react';
import { 
    Box,
    Card, 
    Typography, 
    CardActions, 
    IconButton, 
    Grid
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AppContext from '../../Context/AppContext';


const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleCart = item => {
    addToCart(item);
  };

  return (
    <Box sx={{margin: 2,  marginLeft: 5.5,}}>
        <Card sx={{ width: 255, height: 220, borderRadius: 5}}>
            <img src={product.images[0]} alt={product.title}/>
        </Card>
        <Typography variant="h6"> ${product.price}</Typography>

        <Grid container>
            <Grid item md={8}>
                <Typography variant="body1" component="p">{product.title}</Typography>
            </Grid>

            <Grid item md={4} sx={{marginBottom: -5}}>
                    <IconButton aria-label="add to cart" onClick={() => handleCart(product)} sx={{backgroundColor: '#ACD9B2', borderRadius: 10, width: 40}}>
                        <AddShoppingCartIcon/>
                    </IconButton>
            </Grid>
        </Grid>
    </Box>

  );
};

export default ProductItem;