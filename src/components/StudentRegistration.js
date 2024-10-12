import React, { useState } from 'react';
import axios from 'axios';

function StudentRegistration({ setName }) {
  const [name, setStudentName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update the URL to your deployed backend
      const response = await axios.post('https://mern-college-backend.onrender.com/api/students/register', {
        name,
        email,
        password,
      });
      setName(response.data.message); // Update the name state with the response message
      setStudentName(''); // Clear the input fields
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error registering student:', error);
    }
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setStudentName(e.target.value)} 
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

export default StudentRegistration;
