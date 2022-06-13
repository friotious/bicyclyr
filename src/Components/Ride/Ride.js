import React from "react";
import "./Ride.css";

const Ride = ({ ride }) => {
  return (
    <div className="Ride">
      <h3>date: {ride.date}</h3>
      <h4>points: {ride.points}</h4>
      <p>{`${ride.rideWeather.weatherText.toLowerCase()} and ${ride.rideWeather.phrase.toLowerCase()}`}</p>
      <img
        className="weather-img"
        src={require(`../../assets/weather-icons/${ride.rideWeather.weatherIcon}.png`)}
        alt={`${ride.rideWeather.weatherText}`}
      />
      <p>Temp: {ride.rideWeather.temp}</p>
    </div>
  );
};

export default Ride;

