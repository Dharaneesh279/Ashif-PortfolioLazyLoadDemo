import React from 'react';
import './carousel.css';

const Carousel = () => {
  return(

    <div className="carousel">
      <div className="bg">
        <img src="./img/Ashif-img1.jpg" alt="Ashif N" />
      </div>
      <div className="about">
        <p className="name">ASHIF N</p>
      <p className="role">VIDEOEDITOR</p>
      <p className="aboutDes">A passoniate Video Editor & Visual Wizard<br/> who turns boring clips into scroll-stopping<br/> magic.I’m a self-starting video editor and<br/> content creator based in Freeelancing, with<br/>over 3 years of experience.I love mixing<br/> elegance with chaos, professionalism with fun,<br/> and the everyday with the extraordinary.<br/> Big.Let’s create something amazing together.</p>
      <div className="logoS">
          <img src="./img/premiere-pro.png" alt="" className="pr" />
          <img src="./img/DaVinci_Resolve_Studio.png" alt="" className="dv" />
      </div>
      </div>
       <p className="concept">Concept<br/>reels</p>
      <p className="description">maintained a smooth and emotional flow throughout the<br/>video aligned each cut with the rhythm and lyrical emotion.</p>
    </div>
  )
}

export default Carousel