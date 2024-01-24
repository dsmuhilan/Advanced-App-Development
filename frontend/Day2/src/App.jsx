// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResetPasswordPage from './ResetPasswordPage';

import RegisterPage from './RegisterPage';
import LoginPage from './loginpage';
import HomePage from './HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
