import React from 'react';
import './tamil.css';

const Tamil = () => {
  return (
    <div className="tamil">
            <h1 className="tamil-txt1">Visual poetic edits</h1>
            <h1 className="tamil-txt2">èM¬î è¬îèœ </h1>
        <div className="Tamilvideo-container">
            <div className="Tamilvideo-card">
                <video  src="/video/Main12.mp4" loop autoPlay controls muted ></video>
            </div>

            <div className="Tamilvideo-card">
                <video  src="/video/Main26.mp4" loop autoPlay controls muted ></video>
            </div>

            <div className="Tamilvideo-card">
                <video  src="/video/Main3.mp4" loop autoPlay controls muted ></video>
            </div>
        </div>
        <p className="tamilDes">Where visuals speak, poetry is born.<br/> Every frame is a line, every cut is a feeling.<br/>In my edits, unspoken stories bloom<br/> softly like a poem in motion</p>
        </div>
    );
}

export default Tamil