import React, { useState, useRef, useEffect } from "react";
import "./TopNavBar.css";
import {
  UilAngleDown,
  UilUserCircle,
  UilSetting,
  UilSignOutAlt,
  UilFileAlt,
} from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";

const TopNavBar = ({ userEmail, onLogout }) => {
  const [open, setOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const clickAway = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
        setShowConfirm(false);
      }
    };
    document.addEventListener("mousedown", clickAway);
    return () => document.removeEventListener("mousedown", clickAway);
  }, []);

  const initial = userEmail?.charAt(0).toUpperCase() || "?";

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    onLogout && onLogout();
    navigate("/login");
  };

  return (
    <nav className="top-nav" ref={menuRef}>
      <div className="left-section">
        <div className="logo">
          <UilFileAlt size="3rem" color="#00f5d4" />
          <span>
            L<span>o</span>g
          </span>
        </div>
      </div>

      <div className="right-section">
        <div className="avatar-wrapper" onClick={() => setOpen(!open)}>
          <div className="initial-avatar">{initial}</div>
          <UilAngleDown className={`chevron ${open ? "rotate" : ""}`} size="20" />
        </div>

        {open && (
          <div className="dropdown-menu">
            <div className="menu-item">
              <UilUserCircle /> Profile
            </div>
            <div className="menu-item">
              <UilSetting /> Settings
            </div>
            <div className="menu-item logout" onClick={() => setShowConfirm(true)}>
              <UilSignOutAlt /> Logout
            </div>
          </div>
        )}

        {showConfirm && (
          <div className="confirm-modal">
            <div className="confirm-box">
              <p>Are you sure you want to logout?</p>
              <div className="confirm-buttons">
                <button onClick={handleLogout}>Yes</button>
                <button onClick={() => setShowConfirm(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNavBar;
