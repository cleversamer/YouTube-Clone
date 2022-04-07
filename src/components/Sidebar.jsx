import React from "react";
import { rowGroups } from "../data";
import SidebarRowGroup from "./SidebarRowGroup";
import "../css/sidebar.css";

const Sidebar = () => {
  const generateId = (title) => {
    return title + Math.floor(Math.random() * 10000);
  };

  return (
    <aside className="sidebar clickable">
      {rowGroups.map((group) => (
        <SidebarRowGroup key={generateId(group[0].title)} rows={group} />
      ))}
    </aside>
  );
};

export default Sidebar;
