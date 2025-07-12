import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const fullName = formData.get("firstName")?.trim();

    if (!fullName) {
      alert("Please enter your full name");
      return;
    }

    // Extract first name (first word)
    const firstName = fullName.split(" ")[0];

    // Save firstName as username (localStorage or global state)
    localStorage.setItem("username", firstName);

    // Redirect to login page
    navigate("/login");
  };

  return <AuthForm type="signup" onSubmit={handleSignup} />;
};

export default Signup;
