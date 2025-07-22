import React from "react";
import "./MainDash.css";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import TopNavBar from "../TopNavBar/TopNavBar";

const MainDash = ({ userEmail, onLogout }) => {
  return (
    <div className="MainDash">
       <TopNavBar userEmail={userEmail} onLogout={onLogout} />
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
