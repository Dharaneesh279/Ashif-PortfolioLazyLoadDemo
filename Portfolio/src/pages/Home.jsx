import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/carousel/carousel";
import Cursor from "../components/cursor/cursor";
import RecentWorks from "../components/recent/recent";
import Onam from "../components/onam-series/onam";
import Fitness from "../components/fitness/fitness";
import Commercial from "../components/commercial/commercial";
import Tamil from "../components/tamil/tamil";
import Watch from "../components/watch/watch";
import Footer from "../components/footer/footer";
import Servicez from '../components/servicez/servicez';

const Home = () => {
   const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <div>
      <Navbar />
      <Carousel />
      <Cursor />
      <RecentWorks />
      <Onam/>
      <div id="services">
        <Servicez />
      </div>
      <Fitness/>
      <Commercial/>
      <Tamil/>
      <Watch/>
      <div id="contact">
        <Footer />
      </div>
    </div>
  )
}

export default Home
