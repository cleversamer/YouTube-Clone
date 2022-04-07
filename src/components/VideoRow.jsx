import React from "react";
import "../css/video-row.css";

const VideoRow = ({
  posterUrl,
  channel,
  title,
  description,
  subscribers,
  views,
  timestamp,
  link,
}) => {
  const truncate = (str = "") => {
    const condition = str.length >= 50;
    return condition ? str.substring(0, 50) + "..." : str;
  };

  return (
    <div className="video-row">
      <a href={link} target="__blank">
        <img className="video-row__poster" src={posterUrl} alt="Video poster" />
      </a>

      <div className="video-row__text">
        <h3 className="video-row__heading">{title}</h3>

        <p className="video-row__views">
          <span>{channel}</span>
          <span>{subscribers} subscribers</span>
          <span>{views} views</span>
          {timestamp}
        </p>

        <p className="video-row__description">{truncate(description)}</p>
      </div>
    </div>
  );
};

export default VideoRow;
