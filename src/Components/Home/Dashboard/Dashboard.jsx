import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainDash from "../MainDash/Maindash";
import RightSide from "../RightSide/RightSide";
import './Dashboard.css';

export default function Dashboard({ user }) {
  return (
    <div className="Dashboard">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide user={user} />
      </div>
    </div>
  );
}
