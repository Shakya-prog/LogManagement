import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name")?.trim();

    if (!name) {
      alert("Please enter your username");
      return;
    }

    onLogin(name);

    navigate("/dashboard");
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
};

export default Login;
