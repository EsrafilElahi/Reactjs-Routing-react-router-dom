import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav () {

    const navStyle={
        color: "white",
        fontSize: "15px",
        textDecoration: "none"
    }

  return (
    <div>
      <nav>
        <ul className='nav-link'>
          <NavLink to='/contact' style={navStyle}>
            <li>Contact Us</li>
          </NavLink>
          <NavLink to='/about' style={navStyle}>
            <li>About Us</li>
          </NavLink>
          <NavLink to='/shop' style={navStyle}>
            <li>Shop</li>
          </NavLink>
          <NavLink to='/' style={navStyle}>
            <li>Home</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
