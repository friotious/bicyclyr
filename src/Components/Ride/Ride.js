import React from "react";
import "./Ride.css";

const Ride = (props) => {
  const { date, points, rideWeather: { weatherText, phrase, weatherIcon, temp } } = props.ride
  console.log(weatherText, 'wt')
  console.log(phrase, 'phrase')
  let wt = weatherText.toLowerCase()
  let ph = phrase.toLowerCase()
  return (
    <div className="Ride">
      <h3>date: {date}</h3>
      <h4>points: {points}</h4>
      <p>{`${wt} and ${ph}`}</p>
      <img
        className="weather-img"
        src={require(`../../assets/weather-icons/${weatherIcon}.png`)}
        alt={`${weatherText}`}
      />
      <p>Temp: {temp}</p>
    </div>
  );
};

export default Ride;

