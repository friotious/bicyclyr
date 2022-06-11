import React from 'react'
import './Ride.css'

// ride: {
//     miles: null,
//     diffMult: null,
//     points: null,
//     rideWeather: {}
    
// }
const Ride = ({ key, ride }) => {
    return (
      <div className='Ride'>
        <h3>date:{key}</h3>
        <p>points:{ride.points}</p>
        <button>delete</button>
      </div>
    )
  }

  export default Ride
  