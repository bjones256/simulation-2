import React, {Component} from 'react';
import {Link,Switch,Route} from 'react-router-dom';
import WizardOne from '../WizardSteps/WizardOne';
import WizardTwo from '../WizardSteps/WizardTwo';
import WizardThree from '../WizardSteps/WizardThree';

export default class Wizard extends Component{
 render(){
     return(
         <div>
         <Switch>
            <Route path='/wizard/step1' component={WizardOne} />
            <Route path='/wizard/step2' component={WizardTwo} />
            <Route path='/wizard/step3' component={WizardThree} />
         </Switch>
        <Link to='/'><button>Cancel</button></Link>
        </div>
     )
 }
}