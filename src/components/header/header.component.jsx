import React from 'react';
import './header.style.css';
import {ReactComponent as Logo} from '../../assets/heart.svg'

import {Link} from 'react-router-dom';


const Header = (props)=>(
    <div className='header'>
        <Link className='logo-container' to='/mamapaty'>
            <Logo className='logo'></Logo>
        </Link>
    <div className='options'>
        <h1 className='option' onClick={props.signIn}>SIGN IN</h1>
    </div>
    
    </div>
); 

export default Header;