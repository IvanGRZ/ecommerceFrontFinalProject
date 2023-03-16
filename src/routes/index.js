import React from 'react';
import {
    Routes, 
    Route, 
    Outlet,
    Navigate
} from 'react-router-dom'
import Home from '../pages/Home/index';
import Login from '../pages/Login/index'
import SignUp from '../pages/SignUp/index'


const Routers = () => {

    const PrivateRoute = () => {
        const auth  = true;

        return (
            auth ? <Outlet /> : <Navigate to='/login' />
        )
    }

    return(
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route path='/' element={<Home/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>} />
        </Routes>
    );
}


export default Routers;