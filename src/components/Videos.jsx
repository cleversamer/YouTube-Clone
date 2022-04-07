import React from "react";
import VideoCard from "./VideoCard";
import { videos } from "../data";
import "../css/videos.css";

const Videos = () => {
  return (
    <div className="videos">
      <h2 className="videos__heading">Recommended</h2>

      <div className="videos__video-cards">
        {videos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default Videos;
