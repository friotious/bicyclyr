import React, { Component } from 'react'
import './BookRide.css'

class BookRide extends Component {
    constructor({ addRide, weather }) {
        super()
        this.state = {
            weatherData: {},
            ride: {
                miles: null,
                pointsMultiple: null,
                points: null,
            }
        }
    }

    componentDidMount = () => {
        // compute point multiple from weather data
        // display point multiple
    }

    //Calculate pointsFromRide method 'onCHange' of form

    // Book ride button 'onCLick' should run add ride method from App
}

export default BookRide