import React from "react";
import './Nav.css'
import { NavLink, Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav'>
            <NavLink style={{ textDecoration: 'none' }} className='book-ride' to='/book-ride'>
                <div className='book-ride-text'>book ride</div>
            </NavLink>       
            <div className='header-home'> Bicyclyr </div>
            <NavLink style={{ textDecoration: 'none' }} className='all-rides' to='/all-rides'>
            <div className='book-ride-text'>all rides</div>
            </NavLink>
        </div>
    )
}
export default Nav