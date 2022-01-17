import Email from './ForgotPasswordEmailComponent'
import Code from './ForgotPasswordCodeComponent'
import PasswordRepeat from './ForgotPassswordRepeat';
import React from "react";
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

function ForgotPassword(){
    return ( 
        <>
        <PasswordRepeat />
        <BrowserRouter>
            <Route path='/password' render={()=> <Redirect to={'/password/email'}/>}></Route>
            <Route path='/password/email' component={Email}> </Route>
            <Route path='/password/code' component={Code}> </Route>
            
        </BrowserRouter>
        </>
    )
}

export default ForgotPassword;

