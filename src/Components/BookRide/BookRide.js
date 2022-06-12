import React, { Component } from "react";
import "./BookRide.css";

class BookRide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ride: {
        date: new Date().toLocaleDateString(),
        miles: "",
        diffMult: 0,
        points: null,
        rideWeather: this.props.weather,
      },
    };
  }

  getDiffMult = () => {
    const { temp, windChill, hasPrecip } = this.props.weather;
    let num = 1;
    if (hasPrecip) {
      num += 0.2;
    }
    if (temp < 45 && temp < 32) {
      num += 0.1;
    }
    if (temp <= 32) {
      num += 0.3;
    }
    if (temp < 85) {
      num += 0.1;
    }
    if (windChill < 32) {
      num += 0.1;
    }
    if (temp > 45 && temp < 84 && !hasPrecip) {
      num -= 0.2;
    }
    return num;
  };

  getPoints = () => {
    const { diffMult, miles } = this.state.ride;
    return diffMult * miles;
  };

  // const whatINeed = {
  //     rideWeather.WeatherText = 'cloudy or rainy or whatever...',
  //     rideWeather.HasPrecipitation = 'boolean',

  //     rideWeather.Temperature.Imperial.Value = 25,
  //     rideWeather.RealFeelTemperature.Imperial.Phrase = 'pleasant',
  //     rideWeather.Wind.Speed.Imperial.Value = 3.6,
  //     rideWeather.WindChillTemperature.Imperial.Value = 66,

  // if rideWeather.HasPrecipitation + .2
  //      if

  componentDidMount = () => {
    // this.getDiffMult();
  };

  componentDidUpdate = () => {
    if (!this.state.ride.diffMult) {
      this.setState({
        ride: {
            ...this.state.ride,
            diffMult: this.getDiffMult(),
            points: this.getPoints()
        }})
    } else {
        return
    }
  };

  saveRide = (event) => {
    const { addRide } = this.props.addRide
    event.preventDefault();
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

  handleChange = (event) => {
    this.setState({
      ride: {
        ...this.state.ride,
        [event.target.name]: event.target.value,
      },
    });
    this.getDiffMult();
    this.getPoints();
  };

  render() {
    return (
      <div className="BookRide">
        <div className="top-book-ride">
          <div className="form-box">
            <h3>Book your Ride</h3>
            <p>Todays Temp: {this.state.ride.rideWeather.temp} F</p>
            <p>Todays Multiple: {this.state.ride.diffMult}</p>

            <form className="form">
              <input
                type="text"
                placeholder="Miles you will ride"
                name="miles"
                value={this.state.ride.miles}
                onChange={(event) => this.handleChange(event)}
              />

              <input
                type="text"
                placeholder={new Date().toLocaleDateString()}
                name="date"
                value={this.state.ride.date}
                onChange={(event) => this.handleChange(event)}
              />
            </form>
            <p>points you will make!: {this.state.ride.points}</p>
            <button onClick={() => this.saveRide(this.state.ride)}>
              RIDE!!!
            </button>
          </div>
        </div>
        <div className="bottom-book-ride"></div>
      </div>
    );
  }

  //Calculate pointsFromRide method 'onCHange' of form

  // Book ride button 'onCLick' should run add ride method from App
}

export default BookRide;
