import React from "react";
import penguinLogo from "../assets/penguin.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={penguinLogo} alt="Logo" />
    </nav>
    /* <h1 className="navbar-header">
        <span className="navbar-header-C">S</span>
        ign
        <span className="navbar-header-M">L</span>
        ingo
      </h1>*/
  );
}
