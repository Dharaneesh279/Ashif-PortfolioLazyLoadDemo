import React from 'react';
import './commercial.css';
import LazyVideo from "../LazyVideo/LazyVideo";

const Commercial = () =>{
    return(
        <div className="commercial">
            <h1 className="commercial-txt">Commercials Works</h1>
            <p className="commercialDes">Edited promotional videos for clothing line,<br/> highlighting product features,<br/>lifestyle visuals, and brand aesthetics.</p>
            <div className="Commercialvideo-container">
            <div className="Commercialvideo-card">
                <LazyVideo src="/video/Main5.mp4"poster="/img/Main5-TN.png"/>
            </div>

            <div className="Commercialvideo-card">
                <LazyVideo src="/video/Main14.mp4" poster="/img/Main14-TN.png"/>
            </div>

            <div className="Commercialvideo-card">
                <LazyVideo src="/video/Main10.mp4" poster="/img/Main10-TN.png"/>
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