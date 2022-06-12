import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Link, NavLink } from "react-router-dom";
import BookRide from "../BookRide/BookRide";
import AllRides from "../AllRides/AllRides";
import Nav from "../Nav/Nav";
import userData from "../../userData";
import weather from "./data-test";

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: {
        name: "Seattle",
        key: null,
      },
      weather: weather,
      allRides: [],
      apiKey: "1sASGwIeUkRo5cXX5Lr4uJLFtMWdTGZB",
    };
  }

  // getWeather = async () => {
  //   try {
  //     const apikey = "1sASGwIeUkRo5cXX5Lr4uJLFtMWdTGZB";
  //     const cityKeyUrl =
  //       "http://dataservice.accuweather.com/locations/v1/cities/search";
  //     const cityKeyQuery = `?apikey=${apikey}&q=${this.state.city.name}&details=true`;
  //     const weatherUrl =
  //       "http://dataservice.accuweather.com/currentconditions/v1/";
  //     const keyResponse = await fetch(cityKeyUrl + cityKeyQuery);
  //     const data = await keyResponse.json();
  //     const key = data[0].Key;
  //     this.setState({ city: { key: key } });
  //     const weatherResponse = await fetch(
  //       weatherUrl + `${key}?apikey=${this.state.apiKey}&details=true`, { header: {
  //         mode: 'no-cors'
  //       }}
  //     );
  //     const weather = await weatherResponse.json();
  //     this.setState({
  //       weather: {
  //         weatherText: weather[0].WeatherText,
  //         weatherIcon: weather[0].WeatherIcon,
  //         hasPrecip: weather[0].HasPrecipitation,
  //         temp: weather[0].Temperature.Imperial.Value,
  //         phrase: weather[0].RealFeelTemperature.Imperial.Phrase,
  //         windChill: weather[0].WindChillTemperature.Imperial.Value,
  //       },
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  getTestWeather = () => {
    this.setState({
      weather: {
        weatherText: weather[0].WeatherText,
        weatherIcon: weather[0].WeatherIcon,
        hasPrecip: weather[0].HasPrecipitation,
        temp: weather[0].Temperature.Imperial.Value,
        phrase: weather[0].RealFeelTemperature.Imperial.Phrase,
        windChill: weather[0].WindChillTemperature.Imperial.Value,
      },
    });
  }


  componentDidMount = () => {
    // this.getTestWeather()
    this.getUserData();
    this.getTestWeather()
  };

  getUserData = async () => {
    this.setState({ allRides: userData });
  };

  addRide(newRide) {
    this.setState({ allRides: [...this.state.allRides, newRide] });
  }

  render() {
    return (
      <main className="App">
        <Nav />

        <Switch>
          <Route
            exact
            path="/book-ride"
            render={() => (
              <BookRide addRide={this.addRide} weather={this.state.weather} />
            )}
          />

          <Route
            exact
            path="/all-rides"
            render={() => <AllRides allRides={this.state.allRides} />}
          />

          <Route
            exact
            path="/"
            render={() => {
              return (
                <div className="homepage-main">
                  <span className="homepage-box links">
                    <NavLink
                      style={{ textDecoration: "none" }}
                      to="/book-ride"
                      id="book-ride"
                    >
                      Book Ride
                    </NavLink>
                  </span>

                  <span className="homepage-box links">
                    <NavLink
                      style={{ textDecoration: "none" }}
                      to="/all-rides"
                      id="all-rides"
                    >
                      All Rides
                    </NavLink>
                  </span>

                  <span className="homepage-box"></span>
                  <span className="homepage-box"></span>
                </div>
              );
            }}
          />
        </Switch>
      </main>
    );
  }
}

export default App;

// getWeather = async () => {
//   try {
//       const apikey = '1sASGwIeUkRo5cXX5Lr4uJLFtMWdTGZB'
//       const cityKeyUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search'
//       const cityKeyQuery = `?apikey=${apikey}&q=${this.state.city.name}&details=true`
//       const weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/'
//       const keyResponse = await fetch(cityKeyUrl + cityKeyQuery)
//       const data = await keyResponse.json()
//       const key = data[0].Key

//       const weatherResponse = await fetch(weatherUrl + `${key}?apikey=${this.state.apiKey}&details=true`)
//       const weather = await weatherResponse.json()
//       this.setState({ weather: weather[0]})

//   } catch(err) {
//     console.log(err)
//   }
// }
