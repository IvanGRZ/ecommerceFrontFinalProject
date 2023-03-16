import React from 'react'
import { 
    Button, 
    Grid, 
    Paper,
    Box,
    TextField,
} from '@mui/material';
import {Logos} from '../../assets/index' 

const SignUp = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({ email: data.get('email'), password: data.get('password')})
    }

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid item xs={false} sm={4} md={7} sx={{ backgroundImage: 'url(https://www.rompecabeza.cl/wp-content/uploads/2020/06/d2c76b50-portada.png)', backgroundRepeat: 'no-repeat', 
                backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center'}}/>
            
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 10}}>
                    <img src={Logos.principalLogo} alt='logo'/>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField margin="normal" required fullWidth id="name" label="Nombre" variant="standard" autoFocus/>
                        <TextField margin="normal" required fullWidth id="age" label="Edad" variant="standard"/>
                        <TextField margin="normal" required fullWidth id="address" label="Direccion" variant="standard" autoFocus/>
                        <TextField margin="normal" required fullWidth id="phone" label="Cel." variant="standard"/>         
                        <TextField margin="normal" required fullWidth id="mail" label="Correo" variant="standard" autoFocus/>
                        <TextField margin="normal" required fullWidth id="password" label="Contraseña" variant="standard" type='password'/>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, color: 'white' }}>Registrarse</Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
 
export default SignUp;
