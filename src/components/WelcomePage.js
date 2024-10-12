import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Ensure to import your CSS file

function WelcomePage({ setName }) {
  return (
    <div>
      {/* Header Section */}
      <header>
        <div className="logo">
          <h1>Jambavantha</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#" id="About Us">About Us</a></li>
            <li><a href="#" id="FAQs">FAQs</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <h2>Welcome to Jambavantha</h2>
          <p>Your ultimate platform for students and colleges. Choose your path to get started!</p>
          <div className="options">
            <Link to="/student/register" className="option-btn" id="student-btn" onClick={() => setName('')}>
              I am a Student
            </Link>
            <Link to="/college/register" className="option-btn" id="college-btn" onClick={() => setName('')}>
              I represent a College
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Jambavantha. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default WelcomePage;
