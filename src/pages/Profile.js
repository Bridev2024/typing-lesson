// src/pages/Profile.js
import React from 'react';
import './Profile.css';

const Profile = () => {
  const mockStats = {
    name: "John Doe",
    highestWpm: 80,
    averageWpm: 60,
    accuracy: 95,
    lessonsCompleted: 10,
  };

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      <div className="profile-card">
        <h2>{mockStats.name}</h2>
        <p><strong>Highest WPM:</strong> {mockStats.highestWpm}</p>
        <p><strong>Average WPM:</strong> {mockStats.averageWpm}</p>
        <p><strong>Accuracy:</strong> {mockStats.accuracy}%</p>
        <p><strong>Lessons Completed:</strong> {mockStats.lessonsCompleted}</p>
      </div>
    </div>
  );
};

export default Profile;
