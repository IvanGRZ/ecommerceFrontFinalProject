import React from 'react'
import '../../styles/Header.scss'
import {Logos} from '../../assets/index'
import { 
    Grid,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {

    return ( 
        <Grid container direction="row" justifyContent="flex-start" alignItems="center" className="nav">
            <Grid item xs={1} sm={1} md={1} lg={2} xl={1}>
                <img src={Logos.principalLogo} alt="logo" className="nav-logo" />
            </Grid>    

            <Grid item xs={10} sm={10} md={10} lg={8.8} xl={10} className="navbar-left">
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                </ul>
            </Grid>
            
            <Grid item xs={1} sm={1} md={1} lg={1.2} xl={1} className="navbar-right">
                <ul>
                    <li className="navbar-email">
                        <AccountCircleIcon sx={{fontSize: 40}}/>
                    </li>
                    <li className="navbar-shopping-cart">
                        <ShoppingCartIcon sx={{fontSize: 40}}/>
                    </li>
                </ul>
            </Grid>
        </Grid>
     );
}
 
export default Header;