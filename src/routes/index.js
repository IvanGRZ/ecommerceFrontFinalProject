import React from 'react';
import {
    Routes, 
    Route, 
    Navigate,
    Outlet
} from 'react-router-dom'
import { getToken } from "../utils/storage";
import Home from '../pages/Home/index';
import Login from '../pages/Login/index'
import SignUp from '../pages/SignUp/index'


const Routers = () => {

    const PrivateRoute = ({ component: Component, ...rest }) => {
        return (
          getToken() ? <Outlet {...rest}/> : <Navigate to="/login" />
        );
    }
    
    const PublicRoute = ({ component: Component, ...rest }) => {
        return ( 
            getToken() ? <Navigate to="/" /> : <Outlet {...rest}/> 
        );
    }
      

    return(
        <Routes>

            <Route element={<PrivateRoute />}>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>

            </Route>

            <Route element={<PublicRoute />}>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>} />
            </Route>
        </Routes>
    );
}


export default Routers;