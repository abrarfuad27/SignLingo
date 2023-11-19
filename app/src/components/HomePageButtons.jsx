import React, { Component } from "react";
import "../style.css";
import { Link } from "react-router-dom";

export default function HomePageButtons() {
  return (
    <div className="homepage-buttons">
      <div className="center-content">
        <img src="/assets/penguinslay.gif" alt="Animated GIF" />
        <div className="hbuttons">
          <Link to="/learn" className="learn-button">
            Learn
          </Link>
          <Link to="/quiz" className="quiz-button">
            Test your knowledge!
          </Link>
        </div>
      </div>
    </div>
  );
}
