import React, { useState, Component } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const questions = [ 
  {
    id: 1,
    type: "textToImage",
    text: "What is the asl sign for 1",
    options: [
      { image: "/assets/alphabet_image/5.jpg", correct: false },
      { image: "/assets/alphabet_image/1.jpg", correct: true },
      { image: "/assets/alphabet_image/8.jpg", correct: false },
      { image: "/assets/alphabet_image/2.jpg", correct: false },
    ],
  },
  {
    id: 2,
    type: "textToImage",
    text: "What is the asl sign for 2",
    options: [
      { image: "/assets/alphabet_image/3.jpg", correct: false },
      { image: "/assets/alphabet_image/4.jpg", correct: false },
      { image: "/assets/alphabet_image/9.jpg", correct: false },
      { image: "/assets/alphabet_image/2.jpg", correct: true },
    ],
  },

  {
    id: 3,
    type: "textToImage",
    text: "What is the asl sign for 3",
    options: [
      { image: "/assets/alphabet_image/3.jpg", correct: true },
      { image: "/assets/alphabet_image/4.jpg", correct: false },
      { image: "/assets/alphabet_image/9.jpg", correct: false },
      { image: "/assets/alphabet_image/2.jpg", correct: false },
    ],
  },
  {
    id: 4,
    type: "textToImage",
    text: "What is the asl sign for 4",
    options: [
      { image: "/assets/alphabet_image/7.jpg", correct: false },
      { image: "/assets/alphabet_image/10.jpg", correct: false },
      { image: "/assets/alphabet_image/4.jpg", correct: true },
      { image: "/assets/alphabet_image/3.jpg", correct: false },
    ],
  },
  {
    id: 5,
    type: "textToImage",
    text: "What is the asl sign for 5",
    options: [
      { image: "/assets/alphabet_image/5.jpg", correct: true },
      { image: "/assets/alphabet_image/2.jpg", correct: false },
      { image: "/assets/alphabet_image/7.jpg", correct: false },
      { image: "/assets/alphabet_image/6.jpg", correct: false },
    ],
  },
  {
    id: 6,
    type: "textToImage",
    text: "What is the asl sign for 6",
    options: [
      { image: "/assets/alphabet_image/10.jpg", correct: false },
      { image: "/assets/alphabet_image/8.jpg", correct: false },
      { image: "/assets/alphabet_image/7.jpg", correct: false },
      { image: "/assets/alphabet_image/6.jpg", correct: true },
    ],
  },

  {
    id: 7,
    type: "textToImage",
    text: "What is the asl sign for 7",
    options: [
      { image: "/assets/alphabet_image/6.jpg", correct: false },
      { image: "/assets/alphabet_image/2.jpg", correct: false },
      { image: "/assets/alphabet_image/7.jpg", correct: true },
      { image: "/assets/alphabet_image/8.jpg", correct: false },
    ],
  },

  {
    id: 8,
    type: "textToImage",
    text: "What is the asl sign for 8",
    options: [
      { image: "/assets/alphabet_image/6.jpg", correct: false },
      { image: "/assets/alphabet_image/8.jpg", correct: true },
      { image: "/assets/alphabet_image/9.jpg", correct: true },
      { image: "/assets/alphabet_image/3.jpg", correct: true },
    ],
  },
  {
    id: 9,
    type: "textToImage",
    text: "What is the asl sign for 9",
    options: [
      { image: "/assets/alphabet_image/9.jpg", correct: true },
      { image: "/assets/alphabet_image/7.jpg", correct: false },
      { image: "/assets/alphabet_image/3.jpg", correct: false },
      { image: "/assets/alphabet_image/6.jpg", correct: false },
    ],
  },
  {
    id: 10,
    type: "textToImage",
    text: "What is the asl sign for 10",
    options: [
      { image: "/assets/alphabet_image/8.jpg", correct: false },
      { image: "/assets/alphabet_image/1.jpg", correct: false },
      { image: "/assets/alphabet_image/10.jpg", correct: true },
      { image: "/assets/alphabet_image/4.jpg", correct: false },
    ],
  },
  {
    id: 11,
    type: "imageToText",
    text: "What is the asl sign shown in this picture",
    imageURL: "/assets/alphabet_image/1.jpg",
    options: [
      { image: "3", correct: false },
      { image: "10", correct: false },
      { image: "1", correct: true },
      { image: "5", correct: false },
    ],
  },
  {
    id: 12,
    type: "imageToText",
    text: "What is the asl sign shown in this picture",
    imageURL: "/assets/alphabet_image/2.jpg",
    options: [
      { image: "4", correct: false },
      { image: "2", correct: true },
      { image: "9", correct: false },
      { image: "6", correct: false },
    ],
  },
  {
    id: 13,
    type: "imageToText",
    text: "What is the asl sign shown in this picture",
    imageURL: "/assets/alphabet_image/3.jpg",
    options: [
      { image: "3", correct: true },
      { image: "4", correct: false },
      { image: "2", correct: false },
      { image: "7", correct: false },
    ],
  },
  {
    id: 14,
    type: "imageToText",
    text: "What is the asl sign shown in this picture",
    imageURL: "/assets/alphabet_image/4.jpg",
    options: [
      { image: "9", correct: false },
      { image: "5", correct: false },
      { image: "1", correct: false },
      { image: "4", correct: true },
    ],
  },
  {
    id: 15,
    type: "imageToText",
    text: "What is the asl sign shown in this picture",
    imageURL: "/assets/alphabet_image/5.jpg",
    options: [
      { image: "10", correct: false },
      { image: "5", correct: true },
      { image: "8", correct: false },
      { image: "6", correct: false },
    ],
  },
  {
    id: 16,
    type: "imageToText",
    text: "What is the asl sign shown in this picture",
    imageURL: "/assets/alphabet_image/6.jpg",
    options: [
      { image: "6", correct: true },
      { image: "8", correct: false },
      { image: "3", correct: false },
      { image: "9", correct: false },
    ],
  },
  {
    id: 17,
    type: "imageToText",
    text: "What is the asl sign shown in this picture",
    imageURL: "/assets/alphabet_image/7.jpg",
    options: [
      { image: "6", correct: false },
      { image: "8", correct: false },
      { image: "7", correct: true },
      { image: "2", correct: false },
    ],
  },
  {
    id: 18,
    type: "imageToText",
    text: "What is the asl sign shown in this picture",
    imageURL: "/assets/alphabet_image/8.jpg",
    options: [
      { image: "8", correct: true },
      { image: "10", correct: false },
      { image: "1", correct: true },
      { image: "5", correct: false },
    ],
  },
  {
    id: 19,
    type: "imageToText",
    text: "What is the asl sign shown in this picture",
    imageURL: "/assets/alphabet_image/9.jpg",
    options: [
      { image: "8", correct: false },
      { image: "9", correct: true },
      { image: "2", correct: false },
      { image: "7", correct: false },
    ],
  },
  {
    id: 20,
    type: "imageToText",
    text: "What is the asl sign shown in this picture",
    imageURL: "/assets/alphabet_image/10.jpg",
    options: [
      { image: "3", correct: false },
      { image: "6", correct: false },
      { image: "10", correct: true },
      { image: "9", correct: false },
    ],
  },
];

export default function Quiz1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    setUserAnswer(answer);

    if (answer) {
      setScore(score + 1);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    // Move to the next question if the user answered correctly
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer(null);
  };

  const renderQuestion = () => {
    const currentQ = questions[currentQuestion];

    if (currentQ.type === "textToImage") {
      return (
        <div   className="question">
          <p>{currentQ.text}</p>
          <ul className="imageoptiongrid">
            {currentQ.options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => handleAnswer(option.correct)}
                  disabled={userAnswer !== null}
                >
                  <img className="image-options" src={option.image} alt="option" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (currentQ.type === "imageToText") {
      return (
        <div  className="question" >
          <p>{currentQ.text}</p>
          <img className="image-question" src={currentQ.imageURL} alt="Sign Language Image" />
          <ul className="textoptiongrid">
            {currentQ.options.map((option, index) => (
              <li  key={index}>
                <button className="text-option"
                  onClick={() => handleAnswer(option.correct)}
                  disabled={userAnswer !== null}
                >
                  {option.image}
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
          <div className="nextquestionbutton">
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