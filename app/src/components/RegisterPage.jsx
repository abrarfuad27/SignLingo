import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { Navigate } from "react-router-dom";
export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function register(ev) {
    ev.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords did not match.Try again.");
      return;
    }
    const userData = { username, email, password };
    try {
      const response = await axios.post(
        'http://127.0.0.1:5000/api/register',
        userData
      );
      alert(response.data.message);
      setRedirect(true);
    } catch (err) {
      console.log(err);
      if (err.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        alert(`Registration failed: ${err.response.data.message}`);
      } else if (err.request) {
        // The request was made but no response was received, `err.request` is an instance of XMLHttpRequest in the browser
        alert("Registration request sent, but no response received.");
      } else {
        // Something happened in setting up the request, triggering an Error
        alert("Error occurred during registration.");
      }
    }
  }
  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="register-container">
      <Navbar />
      <form className="register-form" onSubmit={register}>
        <h1 className="register-header">Create Account</h1>
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input
          type="text"
          value={username}
          name="uname"
          onChange={(ev) => setUsername(ev.target.value)}
          required
        />
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          value={email}
          name="email"
          onChange={(ev) => setEmail(ev.target.value)}
          required
        ></input>
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          value={password}
          name="psw"
          required
          onChange={(ev) => setPassword(ev.target.value)}
        ></input>
        <label htmlFor="confirm-psw">
          <b>Confirm Password</b>
        </label>
        <input
          type="password"
          value={confirmPassword}
          name="confirm-psw"
          required
          onChange={(ev) => setConfirmPassword(ev.target.value)}
        ></input>
        <button class="signup-button" type="submit">Sign Up</button>
      </form>
    </div>
  );
}