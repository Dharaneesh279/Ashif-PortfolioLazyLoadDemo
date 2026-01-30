import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/#services">Services</Link>
        <Link to="/#contact">Contact</Link>
      </nav>

      <Link to="/" className="logo">CUTSBYASHIF</Link>
    </header>
  );
};

export default Navbar
