import React from 'react';

import Contenido from './components/switchdes/switchdes.component';
import Header from './components/header/header.component';


import './App.css';

function App(){
  return(
    <div className="App" >
    
      <Contenido className='contenta'></Contenido>
      <div className="header-bar">
      <Header ></Header>

    </div>
    </div>
  )
}

export default App;
