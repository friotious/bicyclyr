import React from 'react'
import './AllRides.css'
import Ride from '../Ride/Ride'


function AllRides({ allRides }) {

    const displayAllRides = allRides.map(ride => {
        return (
            <Ride key={ride.date} ride={ride} />
        )
    })
    
    return (
        <div className='AllRides'>
             {!allRides[0] && <h2> You need to ride more...</h2> }
            <div className='top-all-rides'>
                {displayAllRides}
            </div>
            <div className='bottom-all-rides'>
                
            </div>
        </div>
    )
}

export default AllRides



