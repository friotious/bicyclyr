import React from "react";
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav'>
            <Link to='/book-ride'>book a ride</Link>       
            <div className='header-home'> Bicyclyr </div>
            <Link to='/all-rides'>all rides</Link>
        </div>
    )
}
export default Nav