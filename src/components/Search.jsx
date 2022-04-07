import React from "react";
import { useParams } from "react-router-dom";
import { TuneOutlined } from "@mui/icons-material";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import { videos } from "../data";
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

      {videos.map((video) => (
        <VideoRow key={video.id} {...video} />
      ))}
    </div>
  );
};

export default Search;
