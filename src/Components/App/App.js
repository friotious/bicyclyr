import React, { Component } from "react";
import "./App.css";
import { Route, Switch, NavLink } from "react-router-dom";
import BookRide from "../BookRide/BookRide";
import AllRides from "../AllRides/AllRides";
import Nav from "../Nav/Nav";
import userData from "../../assets/userData";
import weather from "../../assets/data-test";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cityName: "Seattle",
      weather: weather[0],
      allRides: userData
    };
  }

  ////  <<<------TEST DATA UNTIL API TURNS ON ------>>>   /////

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


////  <<<----------- ORIGINAL API CALL - 50 GETS PER DAY ------>>> //////
//
// getWeather = async () => {
//   try {
//       const apiKey = '1sASGwIeUkRo5cXX5Lr4uJLFtMWdTGZB'
//       const cityKeyUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search'
//       const cityKeyQuery = `?apikey=${apiKey}&q=${this.state.cityName}&details=true`
//       const weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/'
//       const keyResponse = await fetch(cityKeyUrl + cityKeyQuery)
//       const data = await keyResponse.json()
//       const key = data[0].Key
//       const weatherResponse = await fetch(weatherUrl + `${key}?apikey=${apiKey}&details=true`)
//       const weather = await weatherResponse.json()
//       this.setState({
//             weather: {
//               weatherText: weather[0].WeatherText,
//               weatherIcon: weather[0].WeatherIcon,
//               hasPrecip: weather[0].HasPrecipitation,
//               temp: weather[0].Temperature.Imperial.Value,
//               phrase: weather[0].RealFeelTemperature.Imperial.Phrase,
//               windChill: weather[0].WindChillTemperature.Imperial.Value,
//             },
//           });
//   } catch(err) {
//     console.log(err)
//   }
// }

//// <<< ------ TOGGLE getWeather ON and getTestWeather OFF when API is available ----- >>>>>  ////
  componentDidMount = () => {
    // this.getWeather()
    this.getTestWeather()
  };
  
  addRide = (newRide) => {
    this.setState({ allRides: [...this.state.allRides, newRide] });
  }
  
  render() {
    const { weather, allRides } = this.state
    return (
      <main className="App">
        <Nav />

        <Switch>
          <Route
            exact
            path="/book-ride"
            render={() => (
              <BookRide addRide={this.addRide} weather={weather} />
            )}
          />
          <Route
            exact
            path="/all-rides"
            render={() => <AllRides allRides={allRides} />}
          />
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div className="homepage-main" test-cy='homepage-main'>
                  <span className="homepage-main-top links">
                    <NavLink
                      style={{ textDecoration: "none" }}
                      to="/book-ride"
                      id="book-ride"
                      test-cy='book-ride-main'
                    >
                      <strong>Book Ride</strong>
                    </NavLink>
                  </span>

                  <span className="homepage-main-top links">
                    <NavLink
                      style={{ textDecoration: "none" }}
                      to="/all-rides"
                      id="all-rides"
                      test-cy='all-rides-main'
                    >
                      <strong>All Rides</strong>
                    </NavLink>
                  </span>

                  <span className="homepage-main-bottom"></span>
                  <span className="homepage-main-bottom"></span>
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


