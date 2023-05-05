import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import { Outlet } from 'react-router-dom'
  
const Navbar = () => {
  
  return (
    <>
    {/* there is a nav tag in javascript that its ideal to use when creating our navbar */}   
      <nav className='navbar'>
        <div className='nav-center'>
          <Link to='/'>
            <img src={logo} alt='cocktail db logo' className='logo' />
          </Link>
          <ul className='nav-links'>
            <li>
              <Link to='/'>
                <h4>Home</h4>
              </Link>
              <Link to='about'>
                <h4>About</h4>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet/>
    </>
  )
    
}

export default Navbar
