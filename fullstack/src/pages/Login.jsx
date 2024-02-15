import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import '..//assets/css/login.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '', // Change username to email
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '', // Change username to email
    password: '',
    authentication: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
      authentication: '',
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'; // Change username to email
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(
        'http://localhost:8081/api/v1/auth/login',
        formData
        );
        const token = response.data.token;
        localStorage.setItem('token', token);
        console.log(response.data);
      const { email, password } = formData; // Change username to email
      console.log('Login successful:', response.data);
      sessionStorage.setItem('isLoggedIn', 'true');
      if (email === 'admin@gmail.com' && password === 'Admin@123') {
        navigate('/admin');
      // } else if (response.data.role === 'ADMIN') {
      //   navigate('/adminHome');
      } else {
        navigate('/Ucourse');
      }
      // Navigate to the profile page or any other page you want to redirect to
    } catch (error) {
      console.error('Error during login:', error);
      // Handle login error, show an error message, etc.
    }
  };

  return (
    <div className="signup-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label> {/* Change username to email */}
          <input
            type="email" // Change type to email
            id="email"
            name="email"
            value={formData.email} // Change username to email
            onChange={handleChange}
          />
          <span className="error-message">{errors.email}</span>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <span className="error-message">{errors.password}</span>
        </div>
        
        <button type="submit">Login</button>
        {errors.authentication && (
          <div className="error-message">{errors.authentication}</div>
        )}
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
