import React, { Component } from 'react'
import './BookRide.css'

class BookRide extends Component {
    constructor({ addRide, weather }) {
        super()
        this.state = {
            weatherData: weather,
            diffMult: 1.2,
            ride: {
                date: '',
                miles: 0,
                diffMult: 0,
                points: 0,
                rideWeather: {}
                
            }
        }
    }

    // const whatINeed = {
    //     rideWeather.WeatherText = 'cloudy or rainy or whatever...',
    //     rideWeather.HasPrecipitation = 'boolean',
    //     rideWeather.isDayTime = 'boolean',
    //     rideWeather.Temperature.Imperial.Value = 25,
    //     rideWeather.RealFeelTemperature.Imperial.Phrase = 'pleasant',
    //     rideWeather.Wind.Speed.Imperial.Value = 3.6,
    //     rideWeather.WindChillTemperature.Imperial.Value = 66,

    componentDidMount = () => {
    

        // compute point multiple from weather data
        // display point multiple
    }

    render() {
        
        return (
            <div className='BookRide'>
                <div className='top-book-ride'>
                    <h3>Book your Ride</h3>
                    <p>Todays Temp:{this.state.weather}</p>
                    <p>Todays Multiple:{this.state.diffMult}</p>
                    <form className='form'>
                        <input
                        type='text'
                        placeholder='Miles'
                        name='miles'
                        value={this.state.ride.miles}
                        />
                        <input
                        type='text'
                        placeholder={new Date().toLocaleDateString()}
                        name='date'
                        value={this.state.ride.date}
                        />
                    </form>
                    
                   
                    <p>Points:{this.state.ride.points}</p>
                    <button onClick={() => this.addRide(this.state.ride)}>RIDE!!!</button>
                </div>
                <div className='bottom-book-ride'></div>
            </div>
        )

    }

    //Calculate pointsFromRide method 'onCHange' of form

    // Book ride button 'onCLick' should run add ride method from App
}

export default BookRide