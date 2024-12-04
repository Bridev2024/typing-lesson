import React, { useState } from 'react';
import './Lessons.css';

const Lessons = () => {
  const lessons = [
    {
      id: 1,
      title: "Beginner Lesson: Home Row Keys",
      text: "asdf jkl; asdf jkl; asdf jkl;",
    },
    {
      id: 2,
      title: "Intermediate Lesson: Common Words",
      text: "the quick brown fox jumps over the lazy dog",
    },
    {
      id: 3,
      title: "Advanced Lesson: Speed Practice",
      text: "Typing is an essential skill for developers and writers.",
    },
  ];

  // State for selected lesson
  const [selectedLesson, setSelectedLesson] = useState(null);

  // Function to handle lesson selection
  const handleSelectLesson = (lesson) => {
    setSelectedLesson(lesson);
  };

  // Function to go back to the lessons list
  const handleBack = () => {
    setSelectedLesson(null);
  };

  return (
    <div className="lessons-container">
      <h1>Typing Lessons</h1>
      {!selectedLesson ? (
        <div className="lessons-list">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="lesson-card"
              onClick={() => handleSelectLesson(lesson)}
            >
              <h2>{lesson.title}</h2>
            </div>
          ))}
        </div>
      ) : (
        <div className="lesson-practice">
          <h2>{selectedLesson.title}</h2>
          <p className="lesson-text">{selectedLesson.text}</p>
          <input
            type="text"
            placeholder="Start typing here..."
            className="lesson-input"
          />
          <button className="back-button" onClick={handleBack}>
            Back to Lessons
          </button>
        </div>
      )}
    </div>
  );
};

export default Lessons;
