import React from 'react';
import './page-five.style.css'

export const PageFive = (props) =>{
    return <div className="Page big5">
                <h2  className="animate__animated animate__fadeIn">
                Tú eres mi mayor tesoro, mi guía y mi  todo. 
                Gracias por ser mi <span className="especial five" onClick={props.cambioFondo}>madre.</span> 
                </h2>
            </div>
};