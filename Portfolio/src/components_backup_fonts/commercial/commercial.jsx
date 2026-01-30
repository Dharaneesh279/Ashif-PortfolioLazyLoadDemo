import React from 'react';
import './commercial.css';

const Commercial = () =>{
    return(
        <div className="commercial">
            <h1 className="commercial-txt">Commercials Works</h1>
            <p className="commercialDes">Edited promotional videos for clothing line,<br/> highlighting product features,<br/>lifestyle visuals, and brand aesthetics.</p>
            <div className="Commercialvideo-container">
            <div className="Commercialvideo-card">
                <video  src="/video/Main5.mp4" loop autoPlay controls muted ></video>
            </div>

            <div className="Commercialvideo-card">
                <video  src="/video/Main14.mp4" loop autoPlay controls muted ></video>
            </div>

            <div className="Commercialvideo-card">
                <video  src="/video/Main10.mp4" loop autoPlay controls muted ></video>
            </div>
        </div>
        <h1 className="studio">Dremers note studio<br/>We luv erode</h1>
        <div className="logoS">
          <img src="./img/fve.png" alt="" className="dn" />
          <img src="./img/We Luv Erode Logo.png" alt="" className="er" />
       </div>
       <video src="/video/StudioVideo.mp4" className="studioVideo" loop autoPlay controls muted></video>
        </div>
    )
}

export default Commercial