import React, { Component } from 'react'
import './App.css';
import { Route, Switch, Link, NavLink, BrowserRouter } from 'react-router-dom'
import BookRide from '../BookRide/BookRide'
import AllRides from '../AllRides/AllRides'
import Nav from '../Nav/Nav'


class App extends Component {
  constructor() {
    super()
    this.state = {
      city: {
        name: 'Rapid City',
        key: null,
      },
      weather: {},
      allRides: []
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
    }catch(err) {
      console.log(err)
      
    }
  }

  componentDidMount = () => {
    this.getWeather()
};

  // //Method to add ride--|   addRide = (ride) => {
    //                                const newRides = this.state.allRides.filter(ride => {
      //                                    ride === ride (or whatever...)
 //                                       })
//                                    if this.state does not contain 'ride'
//                                    then, this.setState({ allRides: newRides})
  //                           } 

  render() {
    return (
      <>
        <Nav />
      <main className='App'>
        <BrowserRouter />
        <Switch>

        <Route
          exact path='/book-ride'
          render={() => <BookRide addRide={this.addRide} weather={this.state.weather}/>}
        />
        
        <Route
          exact path='/all-rides'
          render={() =>   <AllRides />}
        />

        <Route
          exact path='/'
          render={() => {
            return (
              <div className ='homepage-main'>
                <div id='empty-space-1' className='homepage-quarter'>empty space1</div>
                <NavLink to='/book-ride' className='homepage-link homepage-quarter' id='book-ride'>Book Ride</NavLink>
                <NavLink to='/all-rides' className='homepage-link homepage-quarter' id='all-rides'>All Rides</NavLink>
                <div id='empty-space-2' className='homepage-quarter'>empty space2</div>
              </div>
            )
          }}
        />

        </Switch>
          <BrowserRouter />
      </main>
      </>
    )
  }
}


export default App;


//<<<<--    API conditions call w/ key hardcoded ------>>>>>>

 // fetch("http://dataservice.accuweather.com/currentconditions/v1/336357?apikey=1sASGwIeUkRo5cXX5Lr4uJLFtMWdTGZB&details=true")
  // .then(response => {
  //   if(response.ok) {
  //     return response.json();
  //   } else {
  //     throw Error(response.status);
  //   }})
  //   .then(data => {
  //     this.setState({
  //             weather: data[0]
  //      })
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     this.setState({
  //           weather: {}
  //     })});
