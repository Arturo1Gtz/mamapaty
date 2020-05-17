import React from 'react';

import Contenido from './components/switchdes/switchdes.component';
import Header from './components/header/header.component';
import SignOverLay from './components/sign-overlay/sign-overlay.component';

import './App.css';
import SignOverlay from './components/sign-overlay/sign-overlay.component';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      signIn: false
    }
  }

  OvLay=()=>{
    this.setState(prevState=>(
      {signIn: !prevState.signIn}
    ));
    console.log(this.state)
  }

  render(){
    return(
      <div className="App" >
        
        <div className='pagina'>
          <Contenido className='contenta'></Contenido>
          <div className="header-bar">
          <Header signIn={this.OvLay}></Header>
          </div>
        </div>
        {
          this.state.signIn?
          <div  className='sign-overlay'>
            <SignOverlay OvLay={this.OvLay}/>
          </div>
          : null
        }
        
      </div>
  );
}
}

export default App;
