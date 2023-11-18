import React, { Component } from "react";
import "../style.css";
import { Link } from "react-router-dom";

export default function HomePageButtons() {
  return (
    <div className="homepage-buttons">
      <Link to="/learn" className="learn-button">
        Learn
      </Link>
      <Link to="/quiz" className="quiz-button">
        Test your knowledge!
      </Link>
    </div>
  );
}
