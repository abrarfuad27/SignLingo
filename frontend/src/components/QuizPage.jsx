import React, { Component } from "react";
import Navbar from "./Navbar";
import "../style.css";
import { Link } from "react-router-dom";

export default function QuizPage() {
  return (
    <>
      <Navbar />
      <div className="quizpage-container">
        <Link to="/quiz/1" className="quiz-button">
          Quiz 1 (Numerals)
        </Link>
        <Link to="/quiz/2" className="quiz-button">
          Quiz 2 (Alphabets)
        </Link>
        <Link to="/quiz/3" className="quiz-button">
          Quiz 3 (Words)
        </Link>
      </div>
    </>
  );
}
