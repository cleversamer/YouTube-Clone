import React from "react";
import { CheckCircle } from "@mui/icons-material";
import RandomAvatar from "./RandomAvatar";
import "../css/channel-row.css";

const ChannelRow = ({
  channel,
  verified,
  subscriptions,
  videosNumber,
  description,
}) => {
  const truncate = (str = "") => {
    const condition = str.length >= 150;
    return condition ? str.substring(0, 150) + "..." : str;
  };

  return (
    <div className="channel-row">
      <RandomAvatar className="channel-row__avatar clickable" />

      <div className="channel-row__text">
        <h4 className="channel-row__heading clickable">
          {channel}{" "}
          {verified && <CheckCircle className="channel-row__verified" />}
        </h4>

        <p className="channel-row__subscribers">
          <span>{subscriptions} subscribers</span> {videosNumber} videos
        </p>

        <p className="channel-row__description">{truncate(description)}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
