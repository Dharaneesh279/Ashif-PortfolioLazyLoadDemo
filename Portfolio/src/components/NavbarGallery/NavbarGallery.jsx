import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarGallery.css'

const NavbarGallery = () => {
  return (
    <header className="headerGallery">
      <nav className="navbarGallery">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
      </nav>
      <Link to="/" className="logoGallery">CUTSBYASHIF</Link>
    </header>
  )
}

export default NavbarGallery