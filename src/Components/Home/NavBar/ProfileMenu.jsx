import React, { useState, useRef, useEffect } from "react";
import "./ProfileMenu.css";
import {
  UilAngleDown,
  UilUserCircle,
  UilSetting,
  UilSignOutAlt,
} from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";

const ProfileMenu = ({ user }) => {
  // user = { name: "Phoenix Shakya", photo: "https://..." }
  const [open, setOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  /* ── close dropdown on outside click ─────────────────────────────── */
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

  const firstName = user?.name?.split(" ")[0] || "User";
  const initial = firstName.charAt(0).toUpperCase();

  const handleLogout = () => {
    /* optional: clear auth or user state here */
    navigate("/login");
  };

  return (
    <div className="profile-container" ref={menuRef}>
      {/* avatar, name & chevron */}
      <div className="avatar-wrapper" onClick={() => setOpen(!open)}>
        {user?.photo ? (
          <img
            src={user.photo}
            alt="Profile"
            className="profile-photo"
            style={{ width: 32, height: 32, borderRadius: "50%" }}
          />
        ) : (
          <div className="initial-avatar">{initial}</div>
        )}
        <span className="user-name">Hi, {firstName}</span>
        <UilAngleDown
          className={`chevron ${open ? "rotate" : ""}`}
          size="20"
        />
      </div>

      {/* dropdown items */}
      {open && (
        <div className="dropdown-menu">
          <div className="menu-item">
            <UilUserCircle /> Profile
          </div>
          <div className="menu-item">
            <UilSetting /> Settings
          </div>
          <div
            className="menu-item logout"
            onClick={() => setShowConfirm(true)}
          >
            <UilSignOutAlt /> Logout
          </div>
        </div>
      )}

      {/* confirmation modal */}
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
  );
};

export default ProfileMenu;
