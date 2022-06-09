import React, { Component } from 'react'
import './App.css';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom'
import BookRide from './BookRide/BookRide'
import AllRides from './AllRides/AllRides'


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

  // //Method to add ride--|   addRide = (ride) => {
    //                                const newRides = this.state.allRides.filter(ride => {
      //                                    ride === ride (or whatever...)
 //                                       })
//                                    if this.state does not contain 'ride'
//                                    then, this.setState({ allRides: newRides})
  //                           } 

  render() {
    return (
      <main>
        <BrowserRouter>
        <Nav />
        <Switch>

        <Route
          exact path='/book-ride'
          render={() => <BookRide addRide={this.addRide} weather={this.state.weather}/>}
        />
        
        <Route
          exact path='/all-rides'
          render={() =>   <AllRides allRides={allRides}/>}
        />

        <Route
          exact path='/'
          render={() => {
            return (
              <div className ='home-page'>
                <div></div>
                <Link to='/book-ride' className='homepage-link' id='book-ride'>Book Ride</Link>
                <div></div>
                <Link to='/all-rides' className='homepage-link' id='all-rides'>All Rides</Link>
              </div>
            )
          }}
        />


        </Switch>
        </BrowserRouter>
      </main>
    )
  }
}


export default App;
