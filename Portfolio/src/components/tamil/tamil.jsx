import React from 'react';
import './tamil.css';
import LazyVideo from "../LazyVideo/LazyVideo";

const Tamil = () => {
  return (
    <div className="tamil">
            <h1 className="tamil-txt1">Visual poetic edits</h1>
            <h1 className="tamil-txt2">èM¬î è¬îèœ </h1>
        <div className="Tamilvideo-container">
            <div className="Tamilvideo-card">
                <LazyVideo src="/video/Main12.mp4" poster="/img/Main12-TN.png"/>
            </div>

            <div className="Tamilvideo-card">
                <LazyVideo src="/video/Main26.mp4" poster="/img/Main26-TN.png"/>
            </div>

            <div className="Tamilvideo-card">
                <LazyVideo src="/video/Main3.mp4" poster="/img/Main3-TN.png"/>
            </div>
        </div>
        <p className="tamilDes">Where visuals speak, poetry is born.<br/> Every frame is a line, every cut is a feeling.<br/>In my edits, unspoken stories bloom<br/> softly like a poem in motion</p>
        </div>
    );
}

export default Tamil