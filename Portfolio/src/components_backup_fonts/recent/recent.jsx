import React from 'react';
import './recent.css';

const RecentWorks = () => {
    return(
    <div className='recent-works'>
        <h2 className="k25Title">2025 — A Year in Frames</h2>
        <p className="k25Des">Edited, framed, and visualized by Ashif.</p>
        <video src="/video/2025-Wrapped-Video.mp4" className="k25Video" loop autoPlay muted ></video>
        <div className="Recentvideo-container1">
        <div className="Recentvideo-card">
            <video  src="/video/Main8.mp4" loop autoPlay controls muted ></video>
            <h1 className="videoName">Monisha Blessy</h1>
            <p className="videoDes">When visuals meet the interlude, magic happens.</p>
        </div>
        <div className="Recentvideo-card">
            <video  src="/video/Main9.mp4" loop autoPlay controls muted ></video>
            <h1 className="videoName">Gabrella Charlton</h1>
            <p className="videoDes">soft touch with background score.</p>
        </div>
        <div className="Recentvideo-card">
            <video  src="/video/Main11.mp4" loop autoPlay controls muted ></video>
            <h1 className="videoName">Gurupharan</h1>
            <p className="videoDes">monochrome frame timeless emotion</p>
        </div>
        </div>
        <div className="Recentvideo-container2">
        <div className="Recentvideo-card">
            <video  src="/video/Main24.mp4" loop autoPlay controls muted ></video>
            <h1 className="videoName">Vinusha Devi</h1>
            <p className="videoDes"> the tone of glow and orange</p>
        </div>
        <div className="Recentvideo-card">
            <video  src="/video/Main18.mp4" loop autoPlay controls muted ></video>
            <h1 className="videoName">VJ Annamalai</h1>
            <p className="videoDes">The Role of Silence”from Skyfall.</p>
        </div>
        <div className="Recentvideo-card">
            <video  src="/video/Main27.mp4" loop autoPlay controls muted ></video>
            <h1 className="videoName">Dharani Hephzibah</h1>
            <p className="videoDes">A saree tells the story the heart sings.”</p>
        </div>
        </div>
    </div>
    )
}

export default RecentWorks;