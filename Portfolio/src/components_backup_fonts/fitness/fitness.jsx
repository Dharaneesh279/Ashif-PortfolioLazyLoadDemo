import React from 'react';
import './fitness.css';

const Fitness = () =>{
    return(
        <div className="fitness">
            <h1 className="fitness-txt">Fitness Cult</h1>
            <p className="fitnessDes">Lights, transitions, and a whole lot of vision</p>
        <div className="Fitnessvideo-container">
            <div className="Fitnessvideo-card">
                <video  src="/video/Main7.mp4" loop autoPlay controls muted ></video>
                <h1 className="creatorName">DLOKI</h1>
                <h1 className="creatorDes">When strength meets storytelling.</h1>
            </div>

            <div className="Fitnessvideo-card">
                <video  src="/video/Main13.mp4" loop autoPlay controls muted ></video>
                <h1 className="creatorName">GAYATHRI LIFTS</h1>
                <h1 className="creatorDes">Lights, transitions, and a whole lot of vision</h1>
            </div>

            <div className="Fitnessvideo-card">
                <video  src="/video/Main2.mp4" loop autoPlay controls muted ></video>
                <h1 className="creatorName">KISTHENICS</h1>
                <h1 className="creatorDes">Ended with a video that pumps adrenaline</h1>
            </div>
        </div>
        </div>
    )
}

export default Fitness