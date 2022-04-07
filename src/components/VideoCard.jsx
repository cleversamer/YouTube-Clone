import React from "react";
import { Avatar } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import "../css/video-card.css";

const VideoCard = ({
  title,
  views,
  channel,
  timestamp,
  posterUrl,
  avatarUrl,
  verified,
  link,
}) => {
  return (
    <div className="video-card">
      <a href={link} target="__blank">
        <img
          className="video-card__poster"
          src={posterUrl}
          alt="Video poster"
        />
      </a>

      <div className="video-card__info">
        <Avatar className="video-card__avatar" src={avatarUrl} />

        <div className="video-card__text-info">
          <h4 className="video-card__title">{title}</h4>

          <div className="video-card__views-container">
            <p className="video-card__channel">
              {channel}{" "}
              {verified && <CheckCircle className="video-card__verified" />}
            </p>

            <p className="video-card__views">
              <span>{views}</span> {timestamp}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
