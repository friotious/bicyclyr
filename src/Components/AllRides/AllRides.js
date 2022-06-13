import React from "react";
import "./AllRides.css";
import Ride from "../Ride/Ride";

function AllRides({ allRides }) {
  const displayAllRides = allRides.map((ride) => {
    return <Ride key={ride.id} ride={ride} />
  });

  const displayPoints = () => {
    console.log(allRides, 'allrides')
    console.log(allRides[0], 'allridesID')

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

export default AllRides;
