import React from 'react';
import './Auth.css';
import GoogleLogin from "react-google-login"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
let GoogleAuth = () => {
    const responseGoogle = (response) => {
        console.log(response);
    };
    return (
        <>
            <GoogleLogin
            clientId="1072529627929-qhsot93vu7juebmm76p6empp9tce6jai.apps.googleusercontent.com"
            render={renderProps => (
                <button className="google-auth fa" onClick={renderProps.onClick} disabled={renderProps.disabled}>Auth with Google  <FontAwesomeIcon icon={faGoogle} /></button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
        </>
    );
}

export default GoogleAuth;
