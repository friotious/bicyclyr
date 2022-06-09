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
                <Link to='/book-ride' className='homepage-link homepage-quarter' id='book-ride'>Book Ride</Link>
                <Link to='/all-rides' className='homepage-link homepage-quarter' id='all-rides'>All Rides</Link>
                <div id='empty-space-2' className='homepage-quarter'>empty space2</div>
              </div>
            )
          }}
        />

        </Switch>
      
      </main>
      </>
    )
  }
}


export default App;
