import React from "react";
import { useParams } from "react-router-dom";
import { TuneOutlined } from "@mui/icons-material";
import ChannelRow from "./ChannelRow";
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
        // description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto omnis quo natus repudiandae nulla! Expedita consectetur deleniti culpa explicabo minima in pariatur. Reiciendis perferendis nemo pariatur laboriosam quidem dolore provident accusamus incidunt, praesentium numquam itaque porro expedita harum nobis veniam."
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
      />

      <hr />
    </div>
  );
};

export default Search;
