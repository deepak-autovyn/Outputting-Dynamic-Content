import React from 'react';
import User from './user/user.jsx'
import './App.css'; 

const App = () => {
  const userData = {
    firstName: "Maximilian",
    lastName: "Schwarzmüller",
    title: "INSTRUCTOR"
  };

  return (
    <div className="app-container">
      <h1 className="app-title">TIME TO PRACTICE</h1>
      <p className="app-subtitle">
        Welcome on board of this course! You got this 
      </p>
      <User userData={userData} />
    </div>
  );
};

export default App;
