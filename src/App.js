import React from 'react';
import {FrontPage} from './components/front-page/front-page.component'
import {PageOne} from './components/page-one/page-one.component'
import {PageTwo} from './components/page-two/page-two.component'
import {PageThree} from './components/page-three/page-three.component'
import {PageFour} from './components/page-four/page-four.component'
import {PageFive} from './components/page-five/page-five.component'

import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      parrafo: 0
    }
  }
  
  cambioFondo = () =>{
    this.setState({parrafo: this.state.parrafo + 1},()=>console.log(this.state))
  }
  cambioFront =() =>{
    this.setState({parrafo: 0})
  }

  renderSwitch(param){
    switch(param){
      case 0:
        return <FrontPage cambioFondo={this.cambioFondo} />;
     
      case 1:
        return <PageOne cambioFondo={this.cambioFondo}/>;
      case 2:
        return <PageTwo cambioFondo={this.cambioFondo}/>;
      case 3:
        return <PageThree cambioFondo={this.cambioFondo}/>;
      case 4:
        return <PageFour cambioFondo={this.cambioFondo}/>;
      case 5:
        return <PageFive cambioFondo={this.cambioFront}/>;

    }
  }

  render(){
    return(
      <div className="App" >
      { this.renderSwitch(this.state.parrafo)}   
      </div>
    )
  }

}


export default App;
