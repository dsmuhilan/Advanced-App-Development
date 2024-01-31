import React from "react";
import "../assets/css/home.css";
import Navbar from "../components/NavBar";

function Home() {
    return (
        <div className="home">
            <Navbar />
            <br />
            <h1><marquee>WELCOME TO LEARNIFY </marquee></h1>
            <div className="le">
            <h1></h1>
            </div>
            
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2024 Learnify. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
