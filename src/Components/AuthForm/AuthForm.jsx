import React from "react";
import { Link } from "react-router-dom";
import './AuthForm.css';

const AuthForm = ({ type, onSubmit }) => {
  const isLogin = type === "login";

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={onSubmit}>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        {!isLogin && (
          <input
            type="text"
            name="firstName"
            placeholder="Full Name"
            required
          />
        )}

        {isLogin ? (
          <input
            type="text"
            name="name"
            placeholder="Username"
            required
          />
        ) : (
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>

        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <Link to={isLogin ? "/signup" : "/login"}>
            {isLogin ? " Sign up" : " Log in"}
          </Link>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
