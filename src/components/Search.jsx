import React from "react";
import { useSearchParams } from "react-router-dom";
import "../css/search.css";

const Search = () => {
  const params = useSearchParams();
  console.log(params);

  return (
    <div>
      <h2>Search</h2>
    </div>
  );
};

export default Search;
