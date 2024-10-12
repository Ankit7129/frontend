import React, { useState } from 'react';
import axios from 'axios';

function CollegeRegistration({ setName }) {
  const [name, setCollegeName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://mern-college-backend.onrender.com/api/colleges/register', {
        name,
        email,
        password,
      });
      setName(response.data.message);
      setCollegeName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error registering college:', error);
    }
  };

  return (
    <div>
      <h2>College Registration</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setCollegeName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default CollegeRegistration;
