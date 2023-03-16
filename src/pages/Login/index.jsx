import React from 'react'
import { 
    Button, 
    Grid,
    TextField
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import {Logos} from '../../assets/index' 

const Login = () => {

    const navigation = useNavigate();

    return (
        <Grid container direction="column" justifyContent="flex-end" alignItems="center" >
            <img src={Logos.principalLogo} alt='logo'/>
            <TextField id="standard-basic" label="Correo" variant="standard"  sx={{width: '350px', marginBottom: 2}}/>
            <TextField id="standard-basic" label="Contraseña" variant="standard"  sx={{width: '350px'}}/>
            <Button variant="contained" sx={{color: 'white', borderRadius:'8px', height: '50px',marginTop: 4, width: '250px'}}>Iniciar Sesion</Button>
            <Button variant="outlined" sx={{borderRadius:'8px', height: '50px', marginTop: 4, width: '250px'}} onClick={() => {navigation('/signup')}}>Registrarse</Button>
        </Grid>
    );
}
 
export default Login;
