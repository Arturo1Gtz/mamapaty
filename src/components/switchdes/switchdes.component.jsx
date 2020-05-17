import React from 'react';

import {FrontPage} from '../pages/front-page/front-page.component'
import {PageOne} from '../pages/page-one/page-one.component'
import {PageTwo} from '../pages/page-two/page-two.component'
import {PageThree} from '../pages/page-three/page-three.component'
import {PageFour} from '../pages/page-four/page-four.component'
import {PageFive} from '../pages/page-five/page-five.component'
import {Switch, Route} from 'react-router-dom';

const Contenido =()=>{
    return(
    <div className='content'>
            <Route exact path='/mamapaty' component={FrontPage}/>
            <Route exact path='/1' component={PageOne}/>
            <Route exact path='/2' component={PageTwo}/>
            <Route exact path='/3' component={PageThree}/>
            <Route exact path='/4' component={PageFour}/>
            <Route exact path='/5' component={PageFive}/>
      
     </div>
     )
};
export default Contenido;