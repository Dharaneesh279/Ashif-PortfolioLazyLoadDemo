import React from 'react';
import './onam.css';

const Onam = () =>{
    return(
        <div className="onam">
            <p className="onamTxt">Onam<br/>series.</p>
            <p className="onamDes">This Onam series was edited to preserve the essence of nostalgia — the warmth of tradition, the softness of light, and the beauty of Kerala’s festive culture.</p>
            <div className="onam-track">
                <video className="card" src="/video/Onam1.mp4" autoPlay loop muted  playsInline />
                <video className="card" src="/video/Onam2.mp4" autoPlay loop muted  playsInline />
                <video className="card" src="/video/Onam3.mp4" autoPlay loop muted  playsInline />
                <video className="card" src="/video/Onam4.mp4" autoPlay loop muted  playsInline />
                <video className="card" src="/video/Onam5.mp4" autoPlay loop muted  playsInline />
                <video className="card" src="/video/Onam1.mp4" autoPlay loop muted  playsInline />
                <video className="card" src="/video/Onam2.mp4" autoPlay loop muted  playsInline />
                <video className="card" src="/video/Onam3.mp4" autoPlay loop muted  playsInline />
                <video className="card" src="/video/Onam4.mp4" autoPlay loop muted  playsInline />
                <video className="card" src="/video/Onam5.mp4" autoPlay loop muted  playsInline />
            </div>
            <div className="onam-trackReverse">
                <video className="cardReverse" src="/video/Onam1.mp4" autoPlay loop muted playsInline />
                <video className="cardReverse" src="/video/Onam2.mp4" autoPlay loop muted playsInline />
                <video className="cardReverse" src="/video/Onam3.mp4" autoPlay loop muted playsInline />
                <video className="cardReverse" src="/video/Onam4.mp4" autoPlay loop muted playsInline />
                <video className="cardReverse" src="/video/Onam5.mp4" autoPlay loop muted  playsInline />
                <video className="cardReverse" src="/video/Onam1.mp4" autoPlay loop muted playsInline />
                <video className="cardReverse" src="/video/Onam2.mp4" autoPlay loop muted playsInline />
                <video className="cardReverse" src="/video/Onam3.mp4" autoPlay loop muted playsInline />
                <video className="cardReverse" src="/video/Onam4.mp4" autoPlay loop muted playsInline />
                <video className="cardReverse" src="/video/Onam5.mp4" autoPlay loop muted  playsInline />
            </div>
        </div>

    )
}


export default Onam;