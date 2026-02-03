import React from 'react';
import './watch.css';
import LazyVideo from "../LazyVideo/LazyVideo";

const Watch = () =>{
    return(
        <div className="watch">
            <p className="title">THROUGH ASHIF LENS</p>
            <h1 className="idName">Storiesbyashif</h1>
            <video src="/video/Watch_video.mp4" className="watchVideo" loop autoPlay muted></video>
            <h1 className="storiesTxt">èì‹Ì˜ è¬îèœ</h1>
            <p className="dates">FILMED 22 OCTOBER 2025</p>
            <p className="storiesDes">Nestled in the serene landscapes of Kadambur Hills, Sathyamangalam, life here is a beautiful blend of nature, simplicity, and resilience.
            During the monsoon season, these hills transform — streams overflow, roads become challenging, and the rains bring both beauty and struggle.</p>
            <div className="Watchvideo-container1">
            <div className="Watchvideo-card1">
                <LazyVideo src="/video/Stories14.mp4" poster="/img/Str14-TN.png"/>
            </div>
            <div className="Watchvideo-card1">
                <LazyVideo src="/video/Stories12.mp4" poster="/img/Str12-TN.png"/>
            </div>
        </div>
        <div className="Watchvideo-container">
            <div className="Watchvideo-card">
                <LazyVideo src="/video/Stories1.mp4" poster="/img/Str1-TN.png"/>
            </div>
            <div className="Watchvideo-card">
                <LazyVideo src="/video/Stories6.mp4" poster="/img/Str6-TN.png"/>
            </div>
            <div className="Watchvideo-card">
                <LazyVideo src="/video/Stories5.mp4" poster="/img/Str5-TN.png"/>
            </div>

            <div className="Watchvideo-card">
                <LazyVideo src="/video/Stories7.mp4" poster="/img/Str7-TN.png"/>
            </div>
        </div>
        <div className="Watchvideo-container">
            <div className="Watchvideo-card">
                <LazyVideo src="/video/Stories3.mp4" poster="/img/Str3-TN.png"/>
            </div>
            <div className="Watchvideo-card">
                <LazyVideo src="/video/Stories2.mp4" poster="/img/Str2-TN.png"/>
            </div>
            <div className="Watchvideo-card">
                <LazyVideo src="/video/Stories4.mp4" poster="/img/Str4-TN.png"/>
            </div>

            <div className="Watchvideo-card">
                <LazyVideo src="/video/Stories8.mp4" poster="/img/Str8-TN.png"/>
            </div>
        </div>
        </div>
    )
}

export default Watch