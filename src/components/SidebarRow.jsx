import React from "react";
import "../css/sidebar-row.css";

const SidebarRow = ({
  Icon,
  title,
  selected,
  heading,
  textTransform = "uppercase",
}) => {
  const getClasses = () => {
    return "sidebar-row" + (selected ? " sidebar-row--selected" : "");
  };

  if (heading) {
    return (
      <div style={{ textTransform }} className="sidebar-row--heading">
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
