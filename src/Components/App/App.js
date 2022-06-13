import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Link, NavLink } from "react-router-dom";
import BookRide from "../BookRide/BookRide";
import AllRides from "../AllRides/AllRides";
import Nav from "../Nav/Nav";
 import userData from "../../assets/userData";
// import weather from "../../assets/data-test";

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: {
        name: "Seattle",
        key: null,
      },
      weather: {},
      allRides: userData
    };
  }

getWeather = async () => {
  try {
      const cityKeyUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search'
      const cityKeyQuery = `?apikey=1sASGwIeUkRo5cXX5Lr4uJLFtMWdTGZB&q=${this.state.city.name}&details=true`
      const weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/'
      const keyResponse = await fetch(cityKeyUrl + cityKeyQuery)
      const data = await keyResponse.json()
      const key = data[0].Key
      const weatherResponse = await fetch(weatherUrl + `${351409}?apikey=1sASGwIeUkRo5cXX5Lr4uJLFtMWdTGZB&details=true`)
      const weather = await weatherResponse.json()
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
  } catch(err) {
    console.log(err)
  }
}

  componentDidMount = () => {
    this.getWeather()
    // this.getTestWeather()
  };
  
  // getTestWeather = () => {
  //   this.setState({
  //     weather: {
  //       weatherText: weather[0].WeatherText,
  //       weatherIcon: weather[0].WeatherIcon,
  //       hasPrecip: weather[0].HasPrecipitation,
  //       temp: weather[0].Temperature.Imperial.Value,
  //       phrase: weather[0].RealFeelTemperature.Imperial.Phrase,
  //       windChill: weather[0].WindChillTemperature.Imperial.Value,
  //     },
  //   });
  // }
  
  addRide = (newRide) => {
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
                <div className="homepage-main" test-cy='homepage-main'>
                  <span className="homepage-box links">
                    <NavLink
                      style={{ textDecoration: "none" }}
                      to="/book-ride"
                      id="book-ride"
                      test-cy='book-ride-main'
                    >
                      <strong>Book Ride</strong>
                    </NavLink>
                  </span>

                  <span className="homepage-box links">
                    <NavLink
                      style={{ textDecoration: "none" }}
                      to="/all-rides"
                      id="all-rides"
                      test-cy='all-rides-main'
                    >
                      <strong>All Rides</strong>
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


