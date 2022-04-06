import React from "react";
import {
  Menu,
  Search,
  VideoCall,
  Apps,
  Notifications,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "../css/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <Menu className="clickable" />

        <a href="/">
          <img
            className="header__logo clickable"
            src="img/logo.png"
            alt="YouTube logo"
          />
        </a>
      </div>

      <div className="header__input-container">
        <input
          type="text"
          placeholder="Search"
          className="header__search-input"
        />
        <Search className="header__search-icon clickable" />
      </div>

      <div className="header__icons">
        <VideoCall className="header__icon clickable" />
        <Apps className="header__icon clickable" />
        <Notifications className="header__icon clickable" />
        <Avatar
          className="clickable"
          alt="Samer A."
          src="https://avatars.githubusercontent.com/u/73291969?v=4"
        />
      </div>

      <div className="header__avatar clickable">
        <Avatar
          alt="Samer A."
          src="https://avatars.githubusercontent.com/u/73291969?v=4"
        />
      </div>
    </header>
  );
};

export default Header;
