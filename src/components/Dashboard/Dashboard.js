import React, {Component} from 'react';
import axios from 'axios';
import House from '../House/House';
import {Link} from 'react-router-dom';

export default class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            houses:[]
        }
        this.deleteHouse=this.deleteHouse.bind(this)
    }
    componentDidMount(){
    axios.get('/api/houses').then( res => {
        console.log('looking for houses with axios')
        this.setState({
            houses: res.data
        })
    }).catch(err => {
        console.log('not getting houses back from api', err)
    })
    }

    deleteHouse(id){
    // console.log('deleteHouse function called')
    axios.delete(`/api/houses/${id}`).then( res => {
        console.log('deleting the house with axios', res.data)
        this.setState({
            houses: res.data
        })
    }).catch(err => {
        console.log('something went wrong when deleting the house', err)
    })
    }

    render(){
        return(
            <div>
                Dashboard
                <Link to='/wizard'><button>Add New House</button></Link>
                
                {this.state.houses.map( house => {
                return(
                    <House
                    // key=
                    id={house.id}
                    name={house.name} 
                    address={house.address} 
                    city={house.city} 
                    state={house.state} 
                    zipcode={house.zipcode}
                    deleteHouse={this.deleteHouse}
                    />
                )
                })}
            </div>
        )
    }
}