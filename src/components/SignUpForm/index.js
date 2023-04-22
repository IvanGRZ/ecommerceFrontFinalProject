/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { 
    Button, 
    Grid, 
    Paper,
    Box,
    TextField,
} from '@mui/material';
import {Logos} from '../../assets/index' 

const SignUpForm = ({onSubmit}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState("");
    const [picture, setPicture] = useState("picture");
    const [name, setName] = useState("");
    const [phone, sePhone] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(username, password, address, age, picture,name,phone);
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
                    <form onSubmit={handleSubmit}> 
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <TextField margin="normal" required fullWidth id="name" label="Nombre" variant="standard" autoFocus value={name} onChange={(event) => setName(event.target.value)}/>
                            <TextField margin="normal" required fullWidth id="age" label="Edad" variant="standard" value={age} onChange={(event) => setAge(event.target.value)}/>
                            <TextField margin="normal" required fullWidth id="address" label="Direccion" variant="standard" autoFocus  value={address} onChange={(event) => setAddress(event.target.value)}/>
                            <TextField margin="normal" required fullWidth id="phone" label="Cel." variant="standard" value={phone} onChange={(event) => sePhone(event.target.value)}/>         
                            <TextField margin="normal" required fullWidth id="mail" label="Correo" variant="standard" autoFocus value={username} onChange={(event) => setUsername(event.target.value)}/>
                            <TextField margin="normal" required fullWidth id="password" label="Contraseña" variant="standard" type='password' value={password} onChange={(event) => setPassword(event.target.value)}/>
                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, color: 'white' }}>Registrarse</Button>
                        </Box>
                    </form>
                </Box>
            </Grid>


        </Grid>
    );
}
 
export default SignUpForm;
