import React from 'react';
import './page-one.style.css';

export const PageOne = (props) =>{
    return <div className="Page big1">
                <h2 className="animate__animated animate__fadeIn">
                Quisiera poder darte todo los <span className="especial" onClick={props.cambioFondo}>regalos</span> del mundo pero eres tú lo que me lo da día a  día. 
                </h2>
            </div>
};