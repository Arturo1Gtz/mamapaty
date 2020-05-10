import React from 'react';
import './page-three.style.css'

export const PageThree = (props) =>{
    return <div className="Page big3">
                <h2  className="animate__animated animate__fadeIn">
                Por eso quiero corresponderte para que tu <span className="especial three" onClick={props.cambioFondo}>corazón</span> también reciba todo el amor con el que tú nos has recibido desde el primer momento en que nos sentiste.
                </h2>
            </div>
};