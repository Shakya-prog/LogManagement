import React, { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "../../../Data";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
      
      <div className="menu">
        {SidebarData.map((item, index) => (
          <div
            className={selected === index ? "menuItem active" : "menuItem"}
            key={index}
            onClick={() => setSelected(index)}
          >
            <item.icon />
            <span>{item.heading}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
