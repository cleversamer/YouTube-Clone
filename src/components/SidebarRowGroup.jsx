import React from "react";
import SidebarRow from "./SidebarRow";

const SidebarRowGroup = ({ rows }) => {
  const style = {
    padding: "10px 0",
    borderTop: "1px solid #eee",
  };

  const getClasses = () => {
    const title = rows[0].title;
    const condition = title === "Home" || title === "Library";
    return `sidebar-row-group ${!condition && "wide-screens"}`;
  };

  return (
    <div className={getClasses()} style={style}>
      {rows.map((row) => (
        <SidebarRow key={row.title} {...row} />
      ))}
    </div>
  );
};

export default SidebarRowGroup;
