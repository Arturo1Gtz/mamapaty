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
        <Link className='option' to='signIn'>SIGN IN</Link>
    </div>
    
    </div>
); 

export default Header;