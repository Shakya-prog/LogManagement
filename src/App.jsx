import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Dashboard from "./Components/Home/Dashboard/Dashboard";

function App() {
  const [user, setUser] = useState(null);

  // Set user on login
  const handleLogin = (username) => {
    setUser({ name: username });
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/Dashboard"
          element={
            user ? (
              <Dashboard user={user} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
