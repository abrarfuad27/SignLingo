import React, { useState, Component } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";


const questions = [];

export default function Quiz1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    setUserAnswer(selectedOption);

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    // Move to the next question if the user answered correctly
    if (userAnswer === questions[currentQuestion].correctAnswer) {
      setCurrentQuestion(currentQuestion + 1);
      setUserAnswer(null);
    }
  };

  const renderQuestion = () => {
    const currentQ = questions[currentQuestion];

    if (currentQ.type === "textToImage") {
      return (
        <div>
          <p>{currentQ.text}</p>
          <ul>
            {currentQ.options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => handleAnswer(option)}
                  disabled={userAnswer !== null}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (currentQ.type === "imageToText") {
      return (
        <div>
          <p>{currentQ.text}</p>
          <img src={currentQ.imageUrl} alt="Sign Language" />
          <ul>
            {currentQ.options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => handleAnswer(option)}
                  disabled={userAnswer !== null}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <Navbar />
      <div className="quiz1page-container">
        <h1>Quiz 1 (Numerals)</h1>
        {currentQuestion < questions.length ? (
          <div>
            {renderQuestion()}
            <button onClick={handleNextQuestion} disabled={userAnswer === null}>
              Next Question
            </button>
          </div>
        ) : (
          <div>
            <p>Quiz Completed!</p>
            <p>
              Your Score: {score}/{questions.length}
            </p>
            <Link to="/quiz" className="quiz1finish-button">
              Back to Quiz Page
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
