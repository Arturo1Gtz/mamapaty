import React from 'react';
import './front-page.style.css'

export const FrontPage = (props) =>{
    return(
         <div className="Page front  animate__animated animate__fadeIn"> 
            <h3>Querida</h3>
            <h1 onClick={props.cambioFondo}>MADRE</h1>
        </div>
    )
};