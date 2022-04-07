import React from "react";
import { Avatar } from "@mui/material";
import "../css/video-card.css";

const VideoCard = ({
  title,
  views,
  channel,
  timestamp,
  posterUrl,
  avatarUrl,
}) => {
  return (
    <div className="video-card">
      <img className="video-card__poster" src={posterUrl} alt="Video poster" />

      <div className="video-card__info">
        <Avatar className="video-card__avatar" src={avatarUrl} />

        <div className="video-card__text-info">
          <h4 className="video-card__title">{title}</h4>

          <p className="video-card__channel">{channel}</p>

          <p className="video-card__views">
            {views} ● {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
