import React, { useEffect, useRef } from "react";
import "./onam.css";

const videos = [
  "Onam1.mp4",
  "Onam2.mp4",
  "Onam3.mp4",
  "Onam4.mp4",
  "Onam5.mp4",
];
const videosReverse = [
  "Onam5.mp4",
  "Onam4.mp4",
  "Onam3.mp4",
  "Onam2.mp4",
  "Onam1.mp4",
];

const DUPLICATED_VIDEOS = [...videos, ...videos];

const Onam = () => {
  const forwardRef = useRef(null);
  const reverseRef = useRef(null);

  useEffect(() => {
    const allVideos = document.querySelectorAll("video");

    allVideos.forEach((video) => {
      video.muted = true;
      video.playsInline = true;

      const playWhenReady = () => {
        const p = video.play();
        if (p !== undefined) {
          p.catch(() => {});
        }
      };

      video.addEventListener("loadeddata", playWhenReady);
      playWhenReady();

      return () => {
        video.removeEventListener("loadeddata", playWhenReady);
      };
    });
  }, []);

  return (
    <div className="onam">
      <p className="onamTxt">
        Onam <br /> series.
      </p>

      <p className="onamDes">
        This Onam series was edited to preserve the essence of nostalgia —
        the warmth of tradition, the softness of light, and the beauty of
        Kerala’s festive culture.
      </p>

      {/* FORWARD LOOP */}
      <div className="onam-slider">
        <div className="onam-track forward" ref={forwardRef}>
          {DUPLICATED_VIDEOS.map((video, i) => (
            <div className="card" key={`f-${i}`}>
              <video
                src={`/video/${video}`}
                autoPlay
                loop
                muted
                playsInline
                preload="none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* REVERSE LOOP */}
      <div className="onam-slider">
        <div className="onam-track reverse" ref={reverseRef}>
          {DUPLICATED_VIDEOS.map((video, i) => (
            <div className="cardReverse" key={`r-${i}`}>
              <video
                src={`/video/${videosReverse[i % videosReverse.length]}`}
                autoPlay
                loop
                muted
                playsInline
                preload="none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Onam;
