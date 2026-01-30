import React from 'react'
import Cursor from "../components/cursor/cursor";
import NavbarGallery from "../components/NavbarGallery/NavbarGallery";
import Works from '../components/works/works';
import Footer from "../components/footer/footer";

const Gallery = () => {
  return (
    <div>
      <Cursor />
      <NavbarGallery/>
      <Works/>
    </div>
  )
}

export default Gallery
