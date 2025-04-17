import React from "react";
import "./Home.css";

const Home = () => {
  
  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MyWellness</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to <span>MyWellness</span></h1>
            <p>Track your stress, fitness, and study goals all in one place.</p>
            <button className="cta-btn">Explore Dashboard</button>
          </div>
          <div className="hero-image">
            <img src="https://source.unsplash.com/600x400/?health,fitness" alt="wellness" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose MyWellness?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Track Stress</h3>
            <p>Monitor your stress levels and get actionable insights to improve your mental health.</p>
          </div>
          <div className="feature-card">
            <h3>Stay Fit</h3>
            <p>Keep track of your fitness goals and maintain a healthy lifestyle.</p>
          </div>
          <div className="feature-card">
            <h3>Study Smarter</h3>
            <p>Analyze your study patterns and reduce stress for better productivity.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 MyWellness. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;