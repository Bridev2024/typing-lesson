// src/components/Statistics.js
import React from 'react';
import './Statistics.css';

const Statistics = ({ wpm, accuracy }) => (
  <div className="statistics">
    <h2>Statistics</h2>
    <p>Words per Minute: {wpm}</p>
    <p>Accuracy: {accuracy}%</p>
  </div>
);

export default Statistics;
