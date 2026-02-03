import React from "react";
import LazyVideo from "../LazyVideo/LazyVideo";
import "./works.css";

const videos = [
  ...[
    11,22,10,6,23,27,17,18,19,3,7,13,2,5,14,4,
    1,16,12,8,9,24,25,26,15
  ].map(n => ({
    src: `/video/Main${n}.mp4`,
    poster: `/img/Main${n}-TN.png`
  })),

  ...[1,2,3,4,5,6].map(n => ({
    src: `/video/Onam${n}.mp4`,
    poster: `/img/Onam${n}-TN.png`
  })),

  ...[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(n => ({
    src: `/video/Stories${n}.mp4`,
    poster: `/img/Str${n}-TN.png`
  }))
];

const Works = () => {
  return (
    <div className="works">
      <div className="video-container">
        {videos.map(({ src, poster }) => (
          <div className="Wcard" key={src}>
            <LazyVideo
              src={src}
              poster={poster}
              controls
              muted
              loop
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
