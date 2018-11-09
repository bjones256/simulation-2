import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateStepOne} from '../../ducks/reducer'

class WizardOne extends Component{
    render(){
        return(
            <div>
                <div>Name:
                    <input onChange={(e) => this.props.updateStepOne(e.target.value)}/>
                </div>
                <div>Address:
                    <input onChange={(e) => this.props.updateStepOne(e.target.value)}/>
                </div>
                <div>City:
                    <input onChange={(e) => this.props.updateStepOne(e.target.value)}/>
                </div>
                <div>State:
                    <input onChange={(e) => this.props.updateStepOne(e.target.value)}/>
                </div>
                <div>Zip:
                    <input onChange={(e) => this.props.updateStepOne(e.target.value)}/>
                </div>
                <button>Next</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {name,address,city,province,zipcode} = state
    return(
        name,
        address,
        city,
        province,
        zipcode
    )
}

export default connect(mapStateToProps,{updateStepOne})(WizardOne);