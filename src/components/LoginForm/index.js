import React,{useState} from 'react'
import { 
    Button, 
    Grid,
    TextField
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import {Logos} from '../../assets/index' 

const LoginForm = ({onSubmit}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const navigation = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(username,password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container direction="column" justifyContent="flex-end" alignItems="center" >
                <img src={Logos.principalLogo} alt='logo'/>
                <TextField 
                    id="standard-basic" 
                    label="Correo" 
                    variant="standard"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    sx={{width: '350px', marginBottom: 2}}
                />
                <TextField 
                    id="standard-basic" 
                    label="Contraseña" 
                    variant="standard"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    sx={{width: '350px'}}
                />
                <Button type="submit" variant="contained" sx={{color: 'white', borderRadius:'8px', height: '50px',marginTop: 4, width: '250px'}}>Iniciar Sesion</Button>
                <Button variant="outlined" sx={{borderRadius:'8px', height: '50px', marginTop: 4, width: '250px'}} onClick={() => {navigation('/signup')}}>Registrarse</Button>
            </Grid>
        </form>
    );
}
 
export default LoginForm;