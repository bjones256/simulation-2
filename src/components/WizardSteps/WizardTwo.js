import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateStepTwo} from '../../ducks/reducer'

class WizardTwo extends Component{
    render(){
        return(
            <div>
                
                <div>Img:
                    <input onChange={(e) => this.props.updateStepTwo(e.target.value)}/>
                </div>
                <button>Next</button>

            </div>
        )
    }
}

function mapStateToProps(state){
    const {img} = state
    return(
        img
    )

}

export default connect(mapStateToProps,{updateStepTwo})(WizardTwo);