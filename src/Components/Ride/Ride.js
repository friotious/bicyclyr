import React from 'react'
import './Ride.css'
import image1 from '../../weather-icons/6.png'
    

const Ride = ({ ride }) => {
    return (
      <div className='Ride'>
        <h3>date: {ride.date}</h3>
        <h4>points: {ride.points}</h4>
        <p>{`${(ride.rideWeather.WeatherText).toLowerCase()} and ${(ride.rideWeather.RealFeelTemperature.Imperial.Phrase).toLowerCase()}`}</p>
        <img className='weather-img'src={ require(`../../weather-icons/${ride.rideWeather.WeatherIcon}.png`)} alt={`${ride.rideWeather.WeatherText}`} />
        <p>Temp: {ride.rideWeather.Temperature.Imperial.Value}</p>
      </div>
    )
  }

  export default Ride
  
  // ${ride.rideWeather.WeatherIcon}
 // Ride data weather 
 
// const rideData =  ride: {
//     miles: null,
//     diffMult: null,
//     points: null,
//     rideWeather: {

//     }
// }

// const whatINeed = {
//         rideWeather.WeatherText = 'cloudy or rainy or whatever...',
//         rideWeather.HasPrecipitation = 'boolean',
//         rideWeather.isDayTime = 'boolean',
//         rideWeather.Temperature.Imperial.Value = 25,
//         rideWeather.RealFeelTemperature.Imperial.Phrase = 'pleasant',
//         rideWeather.Wind.Speed.Imperial.Value = 3.6,
//         rideWeather.WindChillTemperature.Imperial.Value = 66,

// data to show,

//      The weather phrase of the day.....
//      `Today is ${ride.rideWeather.WeatherText} and ${ride.rideWeather.RealFeelTemperature.Imperial.Phrase}

//     Temp --->   `Temp: &{ride.rideWeather.Temperature.Imperial.Value} F

// }