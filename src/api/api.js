import axios from 'axios';

// Determine if we are in a development or production environment
const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://mern-college-backend.onrender.com/' // Replace with your Render deployment URL
    : 'http://localhost:5000/api'; // Your local backend URL

const api = axios.create({
  baseURL,
});

export default api;
