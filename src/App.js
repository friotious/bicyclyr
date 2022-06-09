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
      userRides: []
    }
  }

  render() {
    return (
      <main>
        <BrowserRouter>
        <Nav />
        <Switch>

        <Route
          exact path='/book-ride'
          render={() => <BookRide />}
        />
        
        <Route
          exact path='/all-rides'
          render={() =>   <AllRides />}
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
