import React from 'react';
import './Auth.css';
import GoogleAuth from "./GoogleAuth";
import FacebookAuth from "./FacebookAuth";
import Vkauth from "./VKAuth";
 let Auth = () => {
    return (
        <>
            <div className="main-wrapper">
                <div className="button-wrapper">
                    <GoogleAuth/>
                    <FacebookAuth/>
                    <Vkauth/>
                </div>
            </div>
        </>
    );
};

export default Auth;
