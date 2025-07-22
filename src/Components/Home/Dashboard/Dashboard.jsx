import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainDash from "../MainDash/Maindash";
import RightSide from "../RightSide/RightSide";
import "./Dashboard.css";
import TopNavBar from "../TopNavBar/TopNavBar";

const Dashboard = ({ userEmail, onLogout }) => {
  return (
    <div className="Dashboard">
      
      <div className="AppGlass">
        <Sidebar />
        <MainDash userEmail={userEmail} onLogout={onLogout} />
        <RightSide userEmail={userEmail} onLogout={onLogout} />
      </div>
    </div>
  );
};

export default Dashboard;
