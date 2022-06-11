import React, { Component } from 'react'
import './App.css';
import { Route, Switch, Link, NavLink, BrowserRouter } from 'react-router-dom'
import BookRide from '../BookRide/BookRide'
import AllRides from '../AllRides/AllRides'
import Nav from '../Nav/Nav'
import userData from '../../userData'


class App extends Component {
  constructor() {
    super()
    this.state = {
      city: {
        name: 'Seattle',
        key: null,
      },
      weather: {},
      allRides: [],
      apiKey: '1sASGwIeUkRo5cXX5Lr4uJLFtMWdTGZB'
    }
  }

  getWeather = async () => {
    try {
        const apikey = '1sASGwIeUkRo5cXX5Lr4uJLFtMWdTGZB'
        const cityKeyUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search'
        const cityKeyQuery = `?apikey=${apikey}&q=${this.state.city.name}&details=true`
        const weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/'
        const keyResponse = await fetch(cityKeyUrl + cityKeyQuery)
        const data = await keyResponse.json()
        const key = data[0].Key  

        const weatherResponse = await fetch(weatherUrl + `${key}?apikey=${this.state.apiKey}&details=true`) 
        const weather = await weatherResponse.json()
        this.setState({ weather: weather[0]})

    } catch(err) {
      console.log(err)
      
    }
  }

  getUserData = async () => {
      this.setState({allRides: userData})
      // console.log(this.state.allRides[0].WeatherIcon, 'response')
  }
  

  componentDidMount = () => {
    this.getWeather()
    this.getUserData()
  };

  addRide(ride) {
    this.setState({ allRides: [...this.state.allRides, ride]})
    // Method to add ride--|   addRide = (ride) => {
    //                                  const newRides = this.state.allRides.filter(ride => {
    //                                        ride === ride (or whatever...)
    //                                      })
    //                                  if this.state does not contain 'ride'
    //                                  then, this.setState({ allRides: newRides})
    //                           } 
  }

  render() {
    return (
      <main className='App'>
        <Nav />
       
        <Switch>

        <Route
          exact path='/book-ride'
          render={() => <BookRide addRide={this.addRide} weather={this.state.weather}/>}
        />
        
        <Route
          exact path='/all-rides'
          render={() =>   <AllRides allRides={this.state.allRides}/>}
        />

        <Route
          exact path='/'
          render={() => {
            return (
              <div className ='homepage-main'>

                <span className='homepage-box links'>
                  <NavLink 
                      style={{ textDecoration: 'none' }}
                      to='/book-ride' 
                      id='book-ride'>
                        Book Ride
                  </NavLink>
                </span>

                <span className='homepage-box links'>
                  <NavLink 
                      style={{ textDecoration: 'none' }}
                      to='/all-rides' 
                      id='all-rides'>
                        All Rides
                  </NavLink>
                </span>

                <span className='homepage-box'></span>
                <span className='homepage-box'></span>

              </div>
            )
          }}
        />

        </Switch>
      
      </main>
    )
  }
}


export default App;

