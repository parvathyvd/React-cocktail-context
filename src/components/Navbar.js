import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-center">
        <Link to = '/'>
        <img src={logo} alt='cocktail' />
        </Link>
          <div className='nav-links'>
              <ul>
              <Link to = '/'>
                <li>Home</li>
                </Link>
                <Link to = '/about'>
                <li>About</li>
                </Link>
              </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
