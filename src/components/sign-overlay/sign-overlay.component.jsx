import React from 'react';
import SignIn from '../sign-in/sign-in.component';
import './sign-overlay.style.css';

const SignOverlay = (props) =>(
    <div className='sign-overlay'>
        <h2 className='close-button' onClick={props.OvLay}>X</h2>
        <div className='formularios'></div>
            <SignIn></SignIn>
    </div>
)
export default SignOverlay;