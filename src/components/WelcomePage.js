import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage({ setName }) {
  return (
    <div>
      <h1>Welcome to College Registration</h1>
      <Link to="/student/register" onClick={() => setName('')}>
        Register as Student
      </Link>
      <br />
      <Link to="/college/register" onClick={() => setName('')}>
        Register as College
      </Link>
    </div>
  );
}

export default WelcomePage;
