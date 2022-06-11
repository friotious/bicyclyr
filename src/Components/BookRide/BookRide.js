import React, { Component } from 'react'
import './BookRide.css'

class BookRide extends Component {
    constructor({ addRide, weather }) {
        super()
        this.state = {
            weatherData: weather,
            diffMult: 1.2,
            ride: {
                miles: null,
                diffMult: null,
                points: null,
            }
        }
    }

    componentDidMount = () => {
        // compute point multiple from weather data
        // display point multiple
    }

    render() {
        
        return (
            <div className='BookRide'>

                <form className='form'>
                    <h3>Book your Ride</h3>
                    <p>Todays Temp:{this.state.weather}</p>
                    <p>Todays Multiple:{this.state.diffMult}</p>

                    <input
                    type='text'
                    placeholder='Miles'
                    name='title'
                    value={this.state.ride.miles}
                    />
                    <p>Total:{this.state.ride.points}</p>

                

                </form>
    
                    <button onClick={() => this.addRide(this.state.ride)}>SUBMIT</button>
            </div>
        )

    }

    //Calculate pointsFromRide method 'onCHange' of form

    // Book ride button 'onCLick' should run add ride method from App
}

export default BookRide