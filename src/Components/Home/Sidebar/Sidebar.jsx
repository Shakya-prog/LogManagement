import React, { useState } from "react";
import "./Sidebar.css";
import { UilFileAlt } from '@iconscout/react-unicons';
import { SidebarData } from "../../../Data";


const Sidebar = () => {
    const [selected, setSelected] = useState(0)



  return (
    <div>
      <div className="Sidebar">
        <div className="logo">
          <UilFileAlt size="3rem" color="#00f5d4" />
          <span>
            L<span>o</span>g
          </span>
        </div>
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div className={selected===index?'menuItem active': 'menuItem'}
              key={index}
              onClick={()=>setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
