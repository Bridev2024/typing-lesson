import React from 'react';
import { useNavigate } from 'react-router-dom';  // useNavigate instead of useHistory

const Home = () => {
  const navigate = useNavigate();  // useNavigate hook

  const goToLessons = () => {
    navigate('/lessons');  // Navigate to /lessons page
  };

  return (
    <div className="home-container">
      <h1>Welcome to Typing Master</h1>
      <p>Improve your typing speed and accuracy with our interactive lessons.</p>
      <button className="start-button" onClick={goToLessons}>
        Start Typing Lessons
      </button>
    </div>
  );
};

export default Home;
