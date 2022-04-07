import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  Search,
  VideoCall,
  Apps,
  Notifications,
} from "@mui/icons-material";
import RandomAvatar from "./RandomAvatar";
import "../css/header.css";

const Header = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (input) {
      navigate(`/search/${input}`);
      setInput("");
    }
  };

  return (
    <header className="header">
      <div className="header__left">
        <Menu className="clickable" />

        <a href="/">
          <img
            className="header__logo clickable"
            src="/img/logo.png"
            alt="YouTube logo"
          />
        </a>
      </div>

      <form onSubmit={handleSearch} className="header__input-container">
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
          className="header__search-input"
        />

        <Link to={`/search/${input}`}>
          <Search className="header__search-icon clickable" />
        </Link>
      </form>

      <div className="header__icons">
        <VideoCall className="header__icon clickable" />
        <Apps className="header__icon clickable" />
        <Notifications className="header__icon clickable" />
        <RandomAvatar
          className="clickable"
          alt="Samer A."
          src="https://avatars.githubusercontent.com/u/73291969?v=4"
        />
      </div>

      <div className="header__avatar clickable">
        <RandomAvatar
          alt="Samer A."
          src="https://avatars.githubusercontent.com/u/73291969?v=4"
        />
      </div>
    </header>
  );
};

export default Header;
