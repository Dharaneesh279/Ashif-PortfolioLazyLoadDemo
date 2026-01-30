import React from "react";
import "./recent.css";
import LazyVideo from "../LazyVideo/LazyVideo";

const RecentWorks = () => {
  return (
    <div className="recent-works">
      <h2 className="k25Title">2025 — A Year in Frames</h2>
      <p className="k25Des">Edited, framed, and visualized by Ashif.</p>

      {/* HERO VIDEO (normal video, not lazy) */}
      <video className="hero-video"
        src="/video/2025-Wrapped-Video.mp4"
        loop
        autoPlay
        muted
        playsInline
        style={{
          width: "90%",
          height: "auto",
          display: "block",
          borderRadius: "15px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "30px",
        }}
      />

      {/* ROW 1 */}
      <div className="Recentvideo-container1">
        <div className="Recentvideo-card">
          <LazyVideo
            src="/video/Main8.mp4"
            poster="/img/Main8-TN.png"
          />
          <h1 className="videoName">Monisha Blessy</h1>
          <p className="videoDes">
            When visuals meet the interlude, magic happens.
          </p>
        </div>

        <div className="Recentvideo-card">
          <LazyVideo
            src="/video/Main9.mp4"
            poster="/img/Main9-TN.png"
          />
          <h1 className="videoName">Gabrella Charlton</h1>
          <p className="videoDes">Soft touch with background score.</p>
        </div>

        <div className="Recentvideo-card">
          <LazyVideo
            src="/video/Main11.mp4"
            poster="/img/Main11-TN.png"
          />
          <h1 className="videoName">Gurupharan</h1>
          <p className="videoDes">Monochrome frame, timeless emotion.</p>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="Recentvideo-container2">
        <div className="Recentvideo-card">
          <LazyVideo
            src="/video/Main24.mp4"
            poster="/img/Main24-TN.png"
          />
          <h1 className="videoName">Vinusha Devi</h1>
          <p className="videoDes">The tone of glow and orange.</p>
        </div>

        <div className="Recentvideo-card">
          <LazyVideo
            src="/video/Main18.mp4"
            poster="/img/Main18-TN.png"
          />
          <h1 className="videoName">VJ Annamalai</h1>
          <p className="videoDes">The Role of Silence — from Skyfall.</p>
        </div>

        <div className="Recentvideo-card">
          <LazyVideo
            src="/video/Main27.mp4"
            poster="/img/Main27-TN.png"
          />
          <h1 className="videoName">Dharani Hephzibah</h1>
          <p className="videoDes">
            A saree tells the story the heart sings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;
