import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {updateStepThree} from '../../ducks/reducer'


class WizardThree extends Component{
    addHouse = () => {
        let {name, address, city, state, zipcode } = this.state
        axios.post('/api/houses', {name, address, city, state, zipcode}).then(response => {

        })
    }
    render(){
        return(
            <div>
                
                <div>Mortgage:
                    <input onChange={(e) => this.props.updateStepThree(e.target.value)}/>
                </div>
                <div>Rent: 
                    <input onChange={(e) => this.props.updateStepThree(e.target.value)}/>
                </div>
                <button onClick={this.addHouse}>Add House to DB</button>

            </div>
        )
    }
}

function mapStateToProps(state){
    const {name, address, city, province, zipcode, img, mortgage, rent} = state
    return(
mortgage,
rent

    )

}

export default connect(mapStateToProps,{updateStepThree})(WizardThree);