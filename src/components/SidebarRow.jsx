import React from "react";
import "../css/sidebar-row.css";

const SidebarRow = ({ Icon, title, selected, heading }) => {
  const getClasses = () => {
    return "sidebar-row" + (selected ? " sidebar-row--selected" : "");
  };

  if (heading) {
    return (
      <div className="sidebar-row--heading">
        <h2>{title}</h2>
      </div>
    );
  }

  return (
    <div className={getClasses()}>
      <Icon className="sidebar-row__icon" />
      <h3 className="sidebar-row__title">{title}</h3>
    </div>
  );
};

export default SidebarRow;
