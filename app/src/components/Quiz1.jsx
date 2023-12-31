import React, { useState, Component, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import { userContext } from "../UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import Confetti from "react-confetti";

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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
    type: "textToImage",
    text: "What is the asl sign for 8",
    options: [
      { image: "/assets/alphabet_image/6.jpg", correct: false },
      { image: "/assets/alphabet_image/8.jpg", correct: true },
      { image: "/assets/alphabet_image/9.jpg", correct: false },
      { image: "/assets/alphabet_image/3.jpg", correct: false },
    ],
  },
  {
    id: 16,
    type: "imageToText",
    text: "What is the asl sign shown in this picture",
    imageURL: "/assets/alphabet_image/8.jpg",
    options: [
      { image: "8", correct: true },
      { image: "10", correct: false },
      { image: "1", correct: false },
      { image: "5", correct: false },
    ],
  },
  {
    id: 17,
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
    id: 18,
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
    id: 19,
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

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const randomlySelectedQuestions = questions.reduce((acc, element, id) => {
  // Process every other element
  if (id % 2 === 0) {
    // Use Math.random() to generate a random number between 0 and 1
    const randomNumber = Math.random();

    // If the random number is less than 0.5, add the first element to the new array; otherwise, add the second element
    if (randomNumber < 0.5) {
      acc.push(element);
    } else {
      acc.push(questions[id + 1]);
    }
  }

  return acc;
}, []);

shuffleArray(randomlySelectedQuestions);
// Take the first 10 elements
const finalArray = randomlySelectedQuestions.slice(0, 5);

export default function Quiz1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [correctOption, setCorrectOption] = useState(null);
  const { userInfo, setUserInfo } = useContext(userContext);

  useEffect(() => {
    if (userInfo.username && currentQuestion === finalArray.length) {
      const updateRecords = async () => {
        try {
          const userData = {
            username: userInfo.username,
            percentage: (score / finalArray.length) * 100,
          };
          const response = await axios.post(
            "http://127.0.0.1:5000/api/update",
            userData
          );
          console.log(response.data.message);
        } catch (err) {
          console.log(`Error->${err}`);
        }
      };
      updateRecords();
    }
  }, [currentQuestion]);

  const handleAnswer = (answer) => {
    const sound = new Audio(
      answer
        ? "/assets/sounds/correct_answer.mp3"
        : "/assets/sounds/wrong_answer.mp3"
    );
    sound.play();
    setUserAnswer(answer);

    if (answer) {
      setScore(score + 1);
    }
    setCorrectOption(answer.correct);
  };

  const handleNextQuestion = () => {
    console.log(userInfo.username);
    // Move to the next question if the user answered correctly
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer(null);
    setCorrectOption(null);
  };

  const speechSynthesis = (speech_question) => {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(speech_question);
    synth.speak(utterThis);
  }; // deprecated for now

  const renderQuestion = () => {
    const currentQ = finalArray[currentQuestion];

    if (currentQ.type === "textToImage") {
      return (
        <div className="question">
          <p>{currentQ.text}</p>
          <ul className="imageoptiongrid">
            {currentQ.options.map((option, index) => (
              <li key={index}>
                <button
                  className={`
                ${userAnswer !== null && option.correct && "correct-option"}
                ${userAnswer !== null && !option.correct && "incorrect-option"}
              `}
                  onClick={() => handleAnswer(option.correct)}
                  disabled={userAnswer !== null}
                >
                  <img
                    className="image-options"
                    src={option.image}
                    alt="option"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (currentQ.type === "imageToText") {
      return (
        <div className="question">
          <p>{currentQ.text}</p>
          <img
            className="image-question"
            src={currentQ.imageURL}
            alt="Sign Language Image"
          />
          <ul className="textoptiongrid">
            {currentQ.options.map((option, index) => (
              <li key={index}>
                <button
                  className={`text-option
                  ${userAnswer !== null && option.correct && "correct-option"}
                  ${
                    userAnswer !== null && !option.correct && "incorrect-option"
                  }
                `}
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
        {currentQuestion < finalArray.length ? (
          <div className="nextquestionbutton">
            {renderQuestion()}
            <button
              className="nextques"
              onClick={handleNextQuestion}
              disabled={userAnswer === null}
            >
              Next Question
            </button>
          </div>
        ) : (
          <div>
            {score >= 4 ? <Confetti /> : <></>}
            <p>Quiz Completed!</p>
            <p>
              Your Score: {score}/{finalArray.length}
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
