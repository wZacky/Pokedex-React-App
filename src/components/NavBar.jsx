import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/pokemon.svg'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link to='/' >
        <img src={logo} alt="imagen" />
      </Link>
    </nav>
  )
}

export default NavBar