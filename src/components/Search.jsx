import React from "react";
import { useParams } from "react-router-dom";
import { TuneOutlined } from "@mui/icons-material";
import "../css/search.css";

const Search = () => {
  const { searchTerm } = useParams();

  return (
    <div className="search">
      <div className="search__filter">
        <TuneOutlined />
      </div>
    </div>
  );
};

export default Search;
