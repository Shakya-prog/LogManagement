import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Dashboard from "./Components/Home/Dashboard/Dashboard";

function App() {
  const [userEmail, setUserEmail] = useState(null);

  // Load email from localStorage if exists
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  const handleLogin = (email) => {
    setUserEmail(email);
    localStorage.setItem("userEmail", email);
  };

  const handleLogout = () => {
    setUserEmail(null);
    localStorage.removeItem("userEmail");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            userEmail ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            userEmail ? (
              <Dashboard userEmail={userEmail} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/"
          element={<Navigate to={userEmail ? "/dashboard" : "/login"} replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
