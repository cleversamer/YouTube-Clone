import React from "react";
import SidebarRow from "./SidebarRow";

const SidebarRowGroup = ({ rows }) => {
  const style = {
    padding: "10px 0",
    borderTop: "1px solid #eee",
  };

  return (
    <div className="sidebar-row-group" style={style}>
      {rows.map((row) => (
        <SidebarRow key={row.title} {...row} />
      ))}
    </div>
  );
};

export default SidebarRowGroup;
