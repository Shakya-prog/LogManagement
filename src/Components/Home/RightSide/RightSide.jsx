import React from 'react';
import './RightSide.css';
import Updates from '../Updates/Updates';
import ErrorsTrendChart from '../ErrorsTrendChart/ErrorsTrendChart';
import ProfileMenu from '../NavBar/ProfileMenu';

const RightSide = ({ user }) => {
  return (
    <div className="RightSide">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <ProfileMenu user={user} />
      </div>
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
