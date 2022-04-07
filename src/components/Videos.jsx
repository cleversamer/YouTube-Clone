import React, { useState, useEffect } from "react";
import db from "../firebase";
import VideoCard from "./VideoCard";
import "../css/videos.css";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) => {
      setVideos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

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
