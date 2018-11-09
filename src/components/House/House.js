import React from 'react';

export default function House(props){
    const {id, name, address, city, state, zipcode, deleteHouse} = props
        return(
            <div>
               <div className=''><h1>{name}</h1></div>
               <div className=''><h3>{address}</h3></div>
               <div className=''><h6>{city}</h6></div>
               <div className=''><h6>{state}</h6></div>
               <div className=''><h6>{zipcode}</h6></div>
            <button onClick={() => {deleteHouse(id)}}>Delete</button>
            </div>
        )
}