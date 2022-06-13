import React from "react";
import "./Ride.css";

const Ride = ({ ride }) => {
  const { date, points, miles, rideWeather: { weatherText, phrase, weatherIcon, temp}  } = ride
  return (
    <div className="Ride">
      <h3>date: {date}</h3>
      <p>points: {points}</p>
      <p>miles: { miles}</p>
      <p>{`${weatherText.toLowerCase()} and ${phrase.toLowerCase()}`}</p>
      <img
        className="weather-img"
        src={require(`../../weather-icons/${weatherIcon}.png`)}
        alt={`$rideWeather.weatherText}`}
      />
      <p>Temp: {temp}</p>
    </div>
  );
};

export default Ride;

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
