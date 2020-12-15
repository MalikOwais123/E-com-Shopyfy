import React from 'react'
import { connect } from 'react-redux';
import { googleSignin } from './../../Redux/auth/authAction';

const GoogleSigninBtn = ({googleSignin}) => {
    return (
        <div>
            <h1>Google Sign In</h1>
            <button onClick={googleSignin}>Signin with Google</button>

        </div>
    )
}

var actions = {
    googleSignin
}

export default connect(null,actions)(GoogleSigninBtn)