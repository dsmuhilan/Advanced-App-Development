// LoginPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your authentication logic here
    console.log('Logging in with:', username, password);
  };

  const handleRegister = () => {
    // Implement logic for navigating to the registration page
    console.log('Register clicked');
  };

  return (
    <div className='container'>
      <center>
        <h2>Login</h2>
      </center>
      <form>
        <label>
          Username:
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <center>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </center>
      </form>
      <div className="additional-options">
        <div className="button-box">
          <Link to="/reset-password">
            <button>
              Reset Password
            </button>
          </Link>
        </div>
        <div className="button-box">
          <Link to="/register">
            <button>
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
