import React from "react";
import './Nav.css'
import { NavLink, Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav'>
            <NavLink style={{ textDecoration: 'none' }} className='book-ride' to='/book-ride'>
                <div className='book-ride-text' test-cy="book-ride-nav">book ride</div>
            </NavLink>

            <NavLink style={{ textDecoration: 'none' }} className='home' to='/'>
            <div className='header-home' test-cy="bicyclyr-nav">Bicyclyr</div>
            </NavLink>

            <NavLink style={{ textDecoration: 'none' }} className='all-rides' to='/all-rides'>
            <div className='all-rides-text' test-cy="all-rides-nav">all rides</div>
            </NavLink>
        </div>
    )
}
export default Nav