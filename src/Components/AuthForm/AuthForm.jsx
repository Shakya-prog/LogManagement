import React, { useState } from "react";
import './AuthForm.css';

const AuthForm = ({ type, onSubmit, loading }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setModalVisible(true);
    setResetEmail("");
    setResetLoading(false);
    setResetSuccess(false);
  };

  const closeModal = () => {
    setModalVisible(false);
    setResetEmail("");
    setResetLoading(false);
    setResetSuccess(false);
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    if (!resetEmail.trim()) {
      alert("Please enter your email");
      return;
    }

    setResetLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      setResetLoading(false);
      setResetSuccess(true);
    }, 1500);
  };

  return (
    <div className="auth-container fade-in">
      <form className="auth-form" onSubmit={onSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          disabled={loading}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          disabled={loading}
        />

        <div className="auth-actions">
          <div className="button-wrapper">
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
          <div className="forgot-password">
            <a href="#" onClick={openModal}>Forgot password?</a>
          </div>
        </div>
      </form>

      {/* Modal */}
      {modalVisible && (
        <div className={`modal show`}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>

            {!resetSuccess ? (
              <>
                <h3>Reset Password</h3>
                <p>Enter your email and we'll send you a reset link.</p>
                <form onSubmit={handleResetSubmit}>
                  <input
                    type="email"
                    placeholder="Email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    disabled={resetLoading}
                    required
                  />
                  <button
                    type="submit"
                    className="modal-reset-btn"
                    disabled={resetLoading}
                  >
                    {resetLoading ? "Sending..." : "Send Reset Link"}
                  </button>
                </form>
              </>
            ) : (
              <div>
                <h3>Success!</h3>
                <p>
                  If an account with <strong>{resetEmail}</strong> exists, a reset link has been sent. Please check your email.
                </p>
                <button className="modal-reset-btn" onClick={closeModal}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
