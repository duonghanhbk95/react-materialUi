import React from 'react'
import { Link } from 'react-router-dom'
import SingleInLinks from './SingleInLinks'
import SingleOutLinks from './SingleOutLinks'
const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Mario</Link>
        <SingleInLinks/>
        <SingleOutLinks/>
      </div>
    </nav>
  )
}

export default Navbar