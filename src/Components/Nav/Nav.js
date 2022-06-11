import React from "react";
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav'>
            <NavLink to='/book-ride'>book a ride</NavLink>       
            <div className='header-home'> Bicyclyr </div>
            <NavLink to='/all-rides'>all rides</NavLink>
        </div>
    )
}
export default Nav