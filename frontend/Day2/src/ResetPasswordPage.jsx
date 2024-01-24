import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ResetPasswordPage.css';

const ResetPasswordPage = () => {
  const { token } = useParams(); // Extract token from the URL

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleResetPassword = () => {
    // Implement your logic for resetting the password
    console.log('Resetting password with token:', token, 'old password:', oldPassword, 'new password:', newPassword);
    // Perform password reset logic, e.g., make an API call to the server
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <p>Enter your old and new passwords to reset your password.</p>
      <label>
        Old Password:
        <br />
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        New Password:
        <br />
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="button" onClick={handleResetPassword}>
        Reset Password
      </button>
    </div>
  );
};

export default ResetPasswordPage;
