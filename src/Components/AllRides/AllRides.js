import React from 'react'
import './AllRides.css'
import Ride from '../Ride/Ride'


const AllRides = ({ allRides }) => {

    const displayAllRides = allRides.map(ride => {
        return (
            <Ride key={Date.now()} ride={ride} />
        )
    })
  
    return (
        <div className='AllRides'>
            <div>test</div>
            {!allRides[0] && <h2> You need to ride more...</h2> }
            {displayAllRides}
        </div>
    )
}

export default AllRides

