import React from "react";
import "./RightSide.css";
import Updates from "../Updates/Updates";
import ErrorsTrendChart from "../ErrorsTrendChart/ErrorsTrendChart";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Errors in the Last 7 Days</h3>
        <ErrorsTrendChart />
      </div>
    </div>
  );
};

export default RightSide;
