import React, { Component } from "react";
import "./BookRide.css";
import PropTypes from "prop-types";

class BookRide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ride: {
        date: new Date().toLocaleDateString(),
        miles: "",
        diffMult: 1,
        points: "",
        rideWeather: this.props.weather,
      },
    };
  }

  getDiffMult = () => {
    let num = 1;
  const { temp, windChill, hasPrecip } = this.props.weather;
  if (this.state.ride.diffMult === 0) {
      if (hasPrecip) {num += 0.2;}
      if (temp < 45 && temp > 32) {num += 0.1;}
      if (temp <= 32) {num += 0.3;}
      if (temp < 85) {num += 0.1;}
      if (windChill < 45) {num += 0.1;}
      if (temp > 45 && temp < 84 && !hasPrecip) {num -= 0.2;}
      console.log(num.toFixed(1), 'num')
      this.setState({ ride: {
          ...this.state.ride,
          diffMult: num.toFixed(1)
      }})
  } else {
      return 
  }
}

  componentDidMount = () => {
    this.getDiffMult();
  };

  saveRide = (e) => {
    e.preventDefault();
    const { addRide } = this.props;
    const newRide = {
      id: Date.now(),
      ...this.state.ride,
    };
    addRide(newRide);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({
      ride: {
        ...this.state.ride,
        date: "",
        miles: "",
      },
    });
  };

  handleMilesChange = (e) => {
    this.setState({
      ride: {
        ...this.state.ride,
        miles: e.target.value,
        points: e.target.value * this.state.ride.diffMult,
      },
    });
  };

  handleDateChange = (e) => {
    this.setState({
      ride: {
        ...this.state.ride,
        date: e.target.value,
      },
    });
  };

  render() {
    const {
      ride: { date, miles, diffMult, points, rideWeather },
    } = this.state;
    return (
      <div className="BookRide">
        <div className="top-book-ride">
          <div className="form-box" test-cy="form-box">
            <h3>Book your Ride</h3>
            <p>Todays Temp: {rideWeather.temp} F</p>
            <p>Todays Multiple: {diffMult}</p>
            <p test-cy="points">points you will make: {points}</p>

            <form className="form">
              <input
                test-cy="input-miles"
                id="test"
                type="text"
                placeholder="Miles you will ride"
                name="miles"
                value={miles}
                onChange={(e) => this.handleMilesChange(e)}
              />
              <input
                type="text"
                placeholder={new Date().toLocaleDateString()}
                
                name="date"
                value={date}
                onChange={(e) => this.handleDateChange(e)}
              />
            </form>
            <button
              className="save-ride-button"
              onClick={(event) => this.saveRide(event)}
              test-cy="save-ride-button"
            >
              save ride
            </button>
          </div>
        </div>
        <div className="bottom-book-ride"></div>
      </div>
    );
  }
}

// BookRide.propTypes = {
//   weatherText: PropTypes.string.isRequired,
//   weatherIcon: PropTypes.node.isRequired,
//   hasPrecip: PropTypes.bool.isRequired,
//   temp: PropTypes.number.isRequired,
//   phrase: PropTypes.string.isRequired,
//   windChill: PropTypes.number.isRequired,
// };
export default BookRide;

