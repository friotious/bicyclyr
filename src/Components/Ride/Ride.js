import React from "react";
import "./Ride.css";
import PropTypes from 'prop-types';

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

Ride.propTypes = {
  key: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  diffMult: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  rideWeather: {
      weatherText: PropTypes.string.isRequired,
      weatherIcon: PropTypes.node.isRequired,
      hasPrecip: PropTypes.bool.isRequired,
      temp: PropTypes.number.isRequired,
      phrase: PropTypes.string.isRequired,
      windChill: PropTypes.number.isRequired
  }
}