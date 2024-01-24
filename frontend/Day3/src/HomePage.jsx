// HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; 
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="homepage">
        <Navbar />
      <header>
        <center>
        <h1>Welcome to the BEC Portal</h1>
        </center>
      </header>
      <main>
    
      </main>
      <footer>
        <p>&copy; 2024 BEC Portal</p>
      </footer>
    </div>
  );
};

export default HomePage;
