import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Link to = "/" >
    <nav className="navbar">
      <img className="logo" src='/assets/penguin.png' alt="Logo" />
    </nav>
    </Link>
    /* <h1 className="navbar-header">
        <span className="navbar-header-C">S</span>
        ign
        <span className="navbar-header-M">L</span>
        ingo
      </h1>*/
  );
}
