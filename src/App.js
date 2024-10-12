import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import StudentRegistration from './components/StudentRegistration';
import CollegeRegistration from './components/CollegeRegistration';

function App() {
  const [name, setName] = useState('');

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<WelcomePage setName={setName} />} />
          <Route path="/student/register" element={<StudentRegistration setName={setName} />} />
          <Route path="/college/register" element={<CollegeRegistration setName={setName} />} />
        </Routes>
        {name && <h1>Welcome, {name}!</h1>}
      </div>
    </Router>
  );
}

export default App;
