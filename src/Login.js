import React from 'react'
import './assets/styles/Login.css';
import {loginUrl} from './spotify';
import spotify from './assets/images/spotify-green.jpg';
function Login() {
    return (
        <div className='login'>
            <img 
                src={spotify} 
                alt=""
                />
            <a href={loginUrl}>Login with spotify</a>
        </div>
    )
}

export default Login
