import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get("email")?.trim();
    const password = formData.get("password")?.trim();

    if (!email || !password) {
      alert("Please enter both email and password");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      localStorage.setItem("userEmail", email);
      onLogin?.(email);
      navigate("/dashboard");
    }, 1000);
  };

  return <AuthForm type="login" onSubmit={handleLogin} loading={loading} />;
};

export default Login;
