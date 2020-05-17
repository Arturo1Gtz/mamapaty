import React from 'react';
import './page-four.style.css'

export const PageFour = (props) =>{
    return <div className="Page big4">
                <h2  className="animate__animated animate__fadeIn">
                Disfruto mucho estar a tu lado, cuando me regalas una  <span className="especial four" onClick={()=>props.history.push('/5')}>sonrisa</span> cuando más lo necesito.
                </h2>
            </div>
};