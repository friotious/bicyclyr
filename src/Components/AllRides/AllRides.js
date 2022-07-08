import React from "react";
import "./AllRides.css";
import Ride from "../Ride/Ride";
import PropTypes from 'prop-types';

function AllRides({ allRides }) {
  const displayAllRides = allRides.map((ride) => {
    return <Ride key={ride.id} ride={ride} />
  });

  const displayPoints = () => {
    const points = allRides.reduce((acc, ride) => {
      acc += ride.points;
      return acc;
    }, 0);
    return points;
  };

  return (
    <div className="AllRides">
      {!allRides[0] && <h2> You need to ride more...</h2>}
      <div className="top-all-rides">{displayAllRides}</div>
      <div className="bottom-all-rides">
        <div className="total-points">
          <div>Total Points to date: {`${displayPoints()}`}</div>
        </div>
      </div>
    </div>
  );
}

AllRides.propTypes = {
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
export default AllRides;


