import React from 'react';
import './Auth.css';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
let FacebookAuth = () => {
    const responseFacebook = (response) => {
        console.log(response);
    }
    return (
        <FacebookLogin
            appId="1088597931155576"
            autoLoad
            render={renderProps => (
                <button className="fb-auth fa" onClick={renderProps.onClick}>Auth with FB <FontAwesomeIcon icon={faFacebook}/></button>
            )}
        />
    );
}

export default FacebookAuth;
