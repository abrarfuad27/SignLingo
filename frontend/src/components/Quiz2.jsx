import React, { useState, Component, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import { userContext } from "../UserContext";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import axios from "axios";

const questions = [
  {
    id: 1,
    type: "texttoimage",
    question: "What is A in sign language?",
    answers: [
      { image: "/assets/alphabet_image/A.jpg", correct: true },
      { image: "/assets/alphabet_image/S.jpg", correct: false },
      { image: "/assets/alphabet_image/1.jpg", correct: false },
      { image: "/assets/alphabet_image/T.jpg", correct: false },
    ],
  },

  {
    id: 3,
    type: "texttoimage",
    question: "What is B in sign language?",
    answers: [
      { image: "/assets/alphabet_image/1.jpg", correct: false },
      { image: "/assets/alphabet_image/P.jpg", correct: false },
      { image: "/assets/alphabet_image/B.jpg", correct: true },
      { image: "/assets/alphabet_image/Q.jpg", correct: false },
    ],
  },

  {
    id: 5,
    type: "texttoimage",
    question: "What is C in sign language?",
    answers: [
      { image: "/assets/alphabet_image/M.jpg", correct: false },
      { image: "/assets/alphabet_image/S.jpg", correct: false },
      { image: "/assets/alphabet_image/1.jpg", correct: false },
      { image: "/assets/alphabet_image/C.jpg", correct: true },
    ],
  },

  {
    id: 7,
    type: "texttoimage",
    question: "What is D in sign language?",
    answers: [
      { image: "/assets/alphabet_image/B.jpg", correct: false },
      { image: "/assets/alphabet_image/D.jpg", correct: true },
      { image: "/assets/alphabet_image/Z.jpg", correct: false },
      { image: "/assets/alphabet_image/L.jpg", correct: false },
    ],
  },

  {
    id: 9,
    type: "texttoimage",
    question: "What is E in sign language?",
    answers: [
      { image: "/assets/alphabet_image/G.jpg", correct: false },
      { image: "/assets/alphabet_image/S.jpg", correct: false },
      { image: "/assets/alphabet_image/E.jpg", correct: true },
      { image: "/assets/alphabet_image/3.jpg", correct: false },
    ],
  },

  {
    id: 11,
    type: "texttoimage",
    question: "What is F in sign language?",
    answers: [
      { image: "/assets/alphabet_image/B.jpg", correct: false },
      { image: "/assets/alphabet_image/D.jpg", correct: false },
      { image: "/assets/alphabet_image/Z.jpg", correct: false },
      { image: "/assets/alphabet_image/F.jpg", correct: true },
    ],
  },

  {
    id: 13,
    type: "texttoimage",
    question: "What is G in sign language?",
    answers: [
      { image: "/assets/alphabet_image/G.jpg", correct: false },
      { image: "/assets/alphabet_image/K.jpg", correct: true },
      { image: "/assets/alphabet_image/Z.jpg", correct: false },
      { image: "/assets/alphabet_image/L.jpg", correct: false },
    ],
  },

  {
    id: 15,
    type: "texttoimage",
    question: "What is H in sign language?",
    answers: [
      { image: "/assets/alphabet_image/X.jpg", correct: false },
      { image: "/assets/alphabet_image/K.jpg", correct: false },
      { image: "/assets/alphabet_image/Z.jpg", correct: false },
      { image: "/assets/alphabet_image/H.jpg", correct: true },
    ],
  },

  {
    id: 17,
    type: "texttoimage",
    question: "What is I in sign language?",
    answers: [
      { image: "/assets/alphabet_image/Y.jpg", correct: false },
      { image: "/assets/alphabet_image/S.jpg", correct: false },
      { image: "/assets/alphabet_image/I.jpg", correct: true },
      { image: "/assets/alphabet_image/3.jpg", correct: false },
    ],
  },

  {
    id: 19,
    type: "texttoimage",
    question: "What is J in sign language?",
    answers: [
      { image: "/assets/alphabet_image/J.jpg", correct: true },
      { image: "/assets/alphabet_image/S.jpg", correct: false },
      { image: "/assets/alphabet_image/9.jpg", correct: false },
      { image: "/assets/alphabet_image/3.jpg", correct: false },
    ],
  },

  {
    id: 21,
    type: "texttoimage",
    question: "What is K in sign language?",
    answers: [
      { image: "/assets/alphabet_image/6.jpg", correct: false },
      { image: "/assets/alphabet_image/S.jpg", correct: false },
      { image: "/assets/alphabet_image/E.jpg", correct: false },
      { image: "/assets/alphabet_image/K.jpg", correct: true },
    ],
  },

  {
    id: 23,
    type: "texttoimage",
    question: "What is L in sign language?",
    answers: [
      { image: "/assets/alphabet_image/O.jpg", correct: false },
      { image: "/assets/alphabet_image/L.jpg", correct: true },
      { image: "/assets/alphabet_image/X.jpg", correct: false },
      { image: "/assets/alphabet_image/M.jpg", correct: false },
    ],
  },

  {
    id: 25,
    type: "texttoimage",
    question: "What is M in sign language?",
    answers: [
      { image: "/assets/alphabet_image/M.jpg", correct: false },
      { image: "/assets/alphabet_image/S.jpg", correct: false },
      { image: "/assets/alphabet_image/1.jpg", correct: false },
      { image: "/assets/alphabet_image/C.jpg", correct: true },
    ],
  },

  {
    id: 27,
    type: "texttoimage",
    question: "What is N in sign language?",
    answers: [
      { image: "/assets/alphabet_image/R.jpg", correct: false },
      { image: "/assets/alphabet_image/F.jpg", correct: false },
      { image: "/assets/alphabet_image/P.jpg", correct: false },
      { image: "/assets/alphabet_image/N.jpg", correct: true },
    ],
  },

  {
    id: 29,
    type: "texttoimage",
    question: "What is O in sign language?",
    answers: [
      { image: "/assets/alphabet_image/X.jpg", correct: false },
      { image: "/assets/alphabet_image/E.jpg", correct: false },
      { image: "/assets/alphabet_image/O.jpg", correct: true },
      { image: "/assets/alphabet_image/S.jpg", correct: false },
    ],
  },

  {
    id: 31,
    type: "texttoimage",
    question: "What is P in sign language?",
    answers: [
      { image: "/assets/alphabet_image/P.jpg", correct: true },
      { image: "/assets/alphabet_image/S.jpg", correct: false },
      { image: "/assets/alphabet_image/V.jpg", correct: false },
      { image: "/assets/alphabet_image/7.jpg", correct: false },
    ],
  },

  {
    id: 33,
    type: "texttoimage",
    question: "What is Q in sign language?",
    answers: [
      { image: "/assets/alphabet_image/P.jpg", correct: false },
      { image: "/assets/alphabet_image/N.jpg", correct: false },
      { image: "/assets/alphabet_image/Q.jpg", correct: true },
      { image: "/assets/alphabet_image/9.jpg", correct: false },
    ],
  },

  {
    id: 35,
    type: "texttoimage",
    question: "What is R in sign language?",
    answers: [
      { image: "/assets/alphabet_image/U.jpg", correct: false },
      { image: "/assets/alphabet_image/Q.jpg", correct: false },
      { image: "/assets/alphabet_image/T.jpg", correct: false },
      { image: "/assets/alphabet_image/R.jpg", correct: true },
    ],
  },

  {
    id: 37,
    type: "texttoimage",
    question: "What is S in sign language?",
    answers: [
      { image: "/assets/alphabet_image/Y.jpg", correct: false },
      { image: "/assets/alphabet_image/S.jpg", correct: true },
      { image: "/assets/alphabet_image/I.jpg", correct: false },
      { image: "/assets/alphabet_image/3.jpg", correct: false },
    ],
  },

  {
    id: 39,
    type: "texttoimage",
    question: "What is T in sign language?",
    answers: [
      { image: "/assets/alphabet_image/B.jpg", correct: false },
      { image: "/assets/alphabet_image/0.jpg", correct: false },
      { image: "/assets/alphabet_image/T.jpg", correct: true },
      { image: "/assets/alphabet_image/3.jpg", correct: false },
    ],
  },

  {
    id: 41,
    type: "texttoimage",
    question: "What is U in sign language?",
    answers: [
      { image: "/assets/alphabet_image/F.jpg", correct: false },
      { image: "/assets/alphabet_image/S.jpg", correct: false },
      { image: "/assets/alphabet_image/U.jpg", correct: true },
      { image: "/assets/alphabet_image/C.jpg", correct: false },
    ],
  },

  {
    id: 43,
    type: "texttoimage",
    question: "What is V in sign language?",
    answers: [
      { image: "/assets/alphabet_image/Z.jpg", correct: false },
      { image: "/assets/alphabet_image/V.jpg", correct: true },
      { image: "/assets/alphabet_image/P.jpg", correct: false },
      { image: "/assets/alphabet_image/3.jpg", correct: false },
    ],
  },

  {
    id: 45,
    type: "texttoimage",
    question: "What is W in sign language?",
    answers: [
      { image: "/assets/alphabet_image/W.jpg", correct: true },
      { image: "/assets/alphabet_image/1.jpg", correct: false },
      { image: "/assets/alphabet_image/2.jpg", correct: false },
      { image: "/assets/alphabet_image/I.jpg", correct: false },
    ],
  },

  {
    id: 47,
    type: "texttoimage",
    question: "What is X in sign language?",
    answers: [
      { image: "/assets/alphabet_image/L.jpg", correct: false },
      { image: "/assets/alphabet_image/P.jpg", correct: false },
      { image: "/assets/alphabet_image/X.jpg", correct: true },
      { image: "/assets/alphabet_image/C.jpg", correct: false },
    ],
  },

  {
    id: 49,
    type: "texttoimage",
    question: "What is Y in sign language?",
    answers: [
      { image: "/assets/alphabet_image/U.jpg", correct: false },
      { image: "/assets/alphabet_image/Q.jpg", correct: false },
      { image: "/assets/alphabet_image/Y.jpg", correct: true },
      { image: "/assets/alphabet_image/R.jpg", correct: false },
    ],
  },

  {
    id: 51,
    type: "texttoimage",
    question: "What is Z in sign language?",
    answers: [
      { image: "/assets/alphabet_image/Z.jpg", correct: true },
      { image: "/assets/alphabet_image/H.jpg", correct: false },
      { image: "/assets/alphabet_image/9.jpg", correct: false },
      { image: "/assets/alphabet_image/C.jpg", correct: false },
    ],
  },

  {
    id: 2,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/A.jpg",
    answers: [
      { image: "A", correct: true },
      { image: "S", correct: false },
      { image: "1", correct: false },
      { image: "T", correct: false },
    ],
  },

  {
    id: 4,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/B.jpg",
    answers: [
      { image: "1", correct: false },
      { image: "P", correct: false },
      { image: "B", correct: true },
      { image: "Q", correct: false },
    ],
  },

  {
    id: 6,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/C.jpg",
    answers: [
      { image: "M", correct: false },
      { image: "S", correct: false },
      { image: "1", correct: false },
      { image: "C", correct: true },
    ],
  },

  {
    id: 8,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/D.jpg",
    answers: [
      { image: "B", correct: false },
      { image: "D", correct: true },
      { image: "Z", correct: false },
      { image: "L", correct: false },
    ],
  },

  {
    id: 10,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/E.jpg",
    answers: [
      { image: "G", correct: false },
      { image: "S", correct: false },
      { image: "E", correct: true },
      { image: "3", correct: false },
    ],
  },

  {
    id: 12,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/F.jpg",
    answers: [
      { image: "B", correct: false },
      { image: "D", correct: false },
      { image: "Z", correct: false },
      { image: "F", correct: true },
    ],
  },

  {
    id: 14,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/G.jpg",
    answers: [
      { image: "G", correct: false },
      { image: "K", correct: true },
      { image: "Z", correct: false },
      { image: "L", correct: false },
    ],
  },

  {
    id: 16,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/H.jpg",
    answers: [
      { image: "X", correct: false },
      { image: "K", correct: false },
      { image: "Z", correct: false },
      { image: "H", correct: true },
    ],
  },

  {
    id: 18,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/I.jpg",
    answers: [
      { image: "Y", correct: false },
      { image: "S", correct: false },
      { image: "I", correct: true },
      { image: "B", correct: false },
    ],
  },

  {
    id: 20,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/J.jpg",
    answers: [
      { image: "J", correct: true },
      { image: "S", correct: false },
      { image: "9", correct: false },
      { image: "3", correct: false },
    ],
  },

  {
    id: 22,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/K.jpg",
    answers: [
      { image: "6", correct: false },
      { image: "S", correct: false },
      { image: "E", correct: false },
      { image: "K", correct: true },
    ],
  },

  {
    id: 24,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/L.jpg",
    answers: [
      { image: "O", correct: false },
      { image: "L", correct: true },
      { image: "X", correct: false },
      { image: "M", correct: false },
    ],
  },

  {
    id: 26,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/M.jpg",
    answers: [
      { image: "M", correct: false },
      { image: "S", correct: false },
      { image: "1", correct: false },
      { image: "C", correct: true },
    ],
  },

  {
    id: 28,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/N.jpg",
    answers: [
      { image: "R", correct: false },
      { image: "F", correct: false },
      { image: "P", correct: false },
      { image: "N", correct: true },
    ],
  },

  {
    id: 30,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/O.jpg",
    answers: [
      { image: "X", correct: false },
      { image: "E", correct: false },
      { image: "O", correct: true },
      { image: "S", correct: false },
    ],
  },

  {
    id: 32,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/P.jpg",
    answers: [
      { image: "P", correct: true },
      { image: "S", correct: false },
      { image: "V", correct: false },
      { image: "7", correct: false },
    ],
  },

  {
    id: 34,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/Q.jpg",
    answers: [
      { image: "P", correct: false },
      { image: "N", correct: false },
      { image: "Q", correct: true },
      { image: "9", correct: false },
    ],
  },

  {
    id: 36,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/R.jpg",
    answers: [
      { image: "U", correct: false },
      { image: "Q", correct: false },
      { image: "T", correct: false },
      { image: "R", correct: true },
    ],
  },

  {
    id: 38,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/S.jpg",
    answers: [
      { image: "Y", correct: false },
      { image: "S", correct: true },
      { image: "I", correct: false },
      { image: "3", correct: false },
    ],
  },

  {
    id: 40,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/T.jpg",
    answers: [
      { image: "B", correct: false },
      { image: "0", correct: false },
      { image: "T", correct: true },
      { image: "3", correct: false },
    ],
  },

  {
    id: 42,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/U.jpg",
    answers: [
      { image: "F", correct: false },
      { image: "S", correct: false },
      { image: "U", correct: true },
      { image: "C", correct: false },
    ],
  },

  {
    id: 44,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/V.jpg",
    answers: [
      { image: "Z", correct: false },
      { image: "V", correct: true },
      { image: "P", correct: false },
      { image: "3", correct: false },
    ],
  },

  {
    id: 46,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/W.jpg",
    answers: [
      { image: "W", correct: true },
      { image: "0", correct: false },
      { image: "2", correct: false },
      { image: "I", correct: false },
    ],
  },

  {
    id: 48,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/X.jpg",
    answers: [
      { image: "L", correct: false },
      { image: "P", correct: false },
      { image: "X", correct: true },
      { image: "C", correct: false },
    ],
  },

  {
    id: 50,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/Y.jpg",
    answers: [
      { image: "U", correct: false },
      { image: "Q", correct: false },
      { image: "Y", correct: true },
      { image: "R", correct: false },
    ],
  },

  {
    id: 52,
    type: "imagetotext",
    question: "What is shown in the image?",
    imageurl: "/assets/alphabet_image/Z.jpg",
    answers: [
      { image: "Z", correct: true },
      { image: "H", correct: false },
      { image: "9", correct: false },
      { image: "C", correct: false },
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
// Take the first 26 elements
const finalArray = randomlySelectedQuestions.slice(0, 5);

export default function Quiz2() {
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
    // Move to the next question if the user answered correctly
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer(null);
    setCorrectOption(null);
  };

  const renderQuestion = () => {
    const currentQ = finalArray[currentQuestion];

    if (currentQ.type === "texttoimage") {
      return (
        <div className="question">
          <p>{currentQ.question}</p>
          <ul className="imageoptiongrid">
            {currentQ.answers.map((option, index) => (
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
    } else if (currentQ.type === "imagetotext") {
      return (
        <div className="question">
          <p>{currentQ.question}</p>
          <img
            className="image-question"
            src={currentQ.imageurl}
            alt="Sign Language Image"
          />
          <ul className="textoptiongrid">
            {currentQ.answers.map((option, index) => (
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
      <div className="quiz2page-container">
        <h1>Quiz 2 (Alphabets)</h1>
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
            <Link to="/quiz" className="quiz2finish-button">
              Back to Quiz Page
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
