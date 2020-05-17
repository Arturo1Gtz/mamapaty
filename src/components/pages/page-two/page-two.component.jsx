import React from 'react';
import './page-two.style.css';

export const PageTwo = (props) =>{
    return <div className="Page big2">
                <h2 className="animate__animated animate__fadeIn">
                Cada momento contigo es un regalo para mí cada momento de risa e incluso de tristeza ha sido igualmente de <span className="especial two" onClick={()=>props.history.push('/3')}>maravilloso</span> y no cambiaría  ninguno por nada del mundo. 
                </h2>
            </div>
};