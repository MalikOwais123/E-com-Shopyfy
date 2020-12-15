import React from 'react'
import SigninForm from '../../Components/SigninForm/SigninForm'
import Signout from '../../Components/Signout/Signout'
import SignupForm from '../../Components/SignupForm/SignupForm'
import GoogleSigninBtn from './../../Components/GoogleSigninBtn/GoogleSigninBtn';

const Authentication = () => {
    return (
        <div>
            <h1>Authentication Page</h1>
            <SignupForm/>
            <SigninForm/>
            <Signout/>
            <GoogleSigninBtn/>
        </div>
    )
}
export default Authentication
