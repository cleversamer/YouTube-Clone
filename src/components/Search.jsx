import React from "react";
import { useParams } from "react-router-dom";
import { TuneOutlined } from "@mui/icons-material";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import "../css/search.css";

const Search = () => {
  const { searchTerm } = useParams();

  return (
    <div className="search">
      <div className="search__filter">
        <TuneOutlined />
        <h2>Filter</h2>
      </div>

      <hr />

      <ChannelRow
        channel="Samer A."
        verified
        subscriptions={185}
        videosNumber={18}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      />

      <hr />

      <VideoRow
        verified
        title="Java for the Haters in 100 Seconds"
        views="537K"
        channel="Fireship"
        timestamp="17 hours ago"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam voluptatibus eum eos ipsa, repellat culpa, molestiae illum optio voluptates illo enim numquam alias unde, sint asperiores tenetur facere beatae sit."
        posterUrl="https://i.ytimg.com/vi/m4-HM_sCvtQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQxtCvGWd0nYzijJ9mws8P3g3DCw"
        avatarUrl="https://yt3.ggpht.com/ytc/AKedOLR5CDv14gL4DQ7I4gxIlBMY6u-CNsq2qfeev48R2g=s88-c-k-c0x00ffffff-no-rj"
      />
    </div>
  );
};

export default Search;
