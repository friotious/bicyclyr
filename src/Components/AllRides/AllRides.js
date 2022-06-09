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
            <div className='all-rides'>{displayAllRides}</div>

        </div>
    )
}


export default AllRides

