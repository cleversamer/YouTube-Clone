import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TuneOutlined } from "@mui/icons-material";
import db from "../firebase";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import "../css/search.css";

const Search = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) => {
      setVideos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

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
