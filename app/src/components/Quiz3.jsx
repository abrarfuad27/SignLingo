import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";

const questions = ["6", "E", "D", "G"];

export default function Quiz3() {
  const [responseMessage, setResponseMessage] = useState(null);
  const webcamRef = React.useRef(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setResponseMessage(null);
  };

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    sendPhoto(imageSrc);
  }, []);

  const sendPhoto = async (imageSrc) => {
    try {
      const formData = new FormData();
      const blob = await fetch(imageSrc).then((res) => res.blob());
      formData.append("file", blob);

      const response = await axios.post(
        "http://127.0.0.1:5000/api/photo",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResponseMessage(response.data.result);
      if (responseMessage === questions[currentQuestion]) {
        setScore(score + 1);
      }
    } catch (error) {
      console.error("Error sending photo:", error);
      setResponseMessage("Error occurred");
    }
  };

  return (
    <>
      <Navbar />
      <div className="quiz1page-container">
        <h1>Quiz 3 </h1>
        {currentQuestion < questions.length ? (
          <div className="webcam">
            <Webcam
              audio={false}
              height={300}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={300}
              videoConstraints={{ facingMode: "user" }}
            />
            <p className="video-question">{`Show  ${questions[currentQuestion]}`}</p>
            <div className="videobuttons">
              <button className="nextques" onClick={capture}>
                Take Picture
              </button>
              {responseMessage && <p>Response: {responseMessage}</p>}
              <button
                className="nextques"
                disabled={responseMessage === null}
                onClick={nextQuestion}
              >
                {" "}
                Next Question
              </button>
            </div>
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
