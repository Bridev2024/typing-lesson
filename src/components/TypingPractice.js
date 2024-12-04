// src/components/TypingPractice.js
import React, { useState, useEffect } from 'react';
import './TypingPractice.css';

const TypingPractice = () => {
  const [text, setText] = useState("Type this text to improve your speed and accuracy.");
  const [input, setInput] = useState("");
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  // Start the timer when the user starts typing
  useEffect(() => {
    let timer;
    if (timerRunning) {
      timer = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timerRunning]);

  // Calculate WPM and Accuracy
  useEffect(() => {
    const wordsTyped = input.trim().split(" ").filter(Boolean).length;
    const charsMatched = input.split("").filter((char, idx) => char === text[idx]).length;

    setWpm(((wordsTyped / timeElapsed) * 60 || 0).toFixed(1));
    setAccuracy(((charsMatched / input.length) * 100 || 100).toFixed(1));
  }, [input, timeElapsed, text]);

  const handleChange = (e) => {
    if (!timerRunning) setTimerRunning(true);
    setInput(e.target.value);

    // Stop timer if input matches the text
    if (e.target.value === text) setTimerRunning(false);
  };

  const resetTest = () => {
    setInput("");
    setTimeElapsed(0);
    setTimerRunning(false);
    setWpm(0);
    setAccuracy(100);
  };

  return (
    <div className="typing-practice">
      <h2>Typing Practice</h2>
      <p className="prompt-text">{text}</p>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Start typing here..."
      />
      <div className="statistics">
        <h3>Live Statistics</h3>
        <p>Words per Minute (WPM): {wpm}</p>
        <p>Accuracy: {accuracy}%</p>
        <p>Time Elapsed: {timeElapsed} seconds</p>
      </div>
      <button onClick={resetTest} className="reset-button">
        Reset
      </button>
    </div>
  );
};

export default TypingPractice;
